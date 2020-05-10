(ns navtree.core
  (:require [clojure.spec.alpha :as s :refer [fdef]]
            [clojure.spec.test.alpha :refer [instrument]]
            [taoensso.timbre :as tb]

            [reagent.core :as r]
            [reagent.ratom :refer [reaction]]
            [keybind.core :as kb]
            [clojure.zip :as z]
            [hiccup-icons.mdi :as mdi]
            [hiccup-icons.octicons :as octicons]

            [navtree.zipper :as zn]
            [navtree.util :as util]))

(s/def ::params
  (s/keys
    :req-un [::tree ::id-fn ::children-fn]
    :opt-un [::selection-node
             ::selection-path
             ::selection-path-ratom
             ::selection-path-init
             ::on-selection-node
             ::on-selection-path

             ::auto-nav ::ui-mode
             ::keynav?

             ::whitelist
             ::whitelist?

             ::header-fn
             ::header-ratom

             ::content-ratom
             ::content-fn
             ::content-loading-fn
             ::content-placeholder

             ::tree-data?
             ::request-tree-data]))

(s/def ::atom #(satisfies? cljs.core/IAtom %))

(s/def ::tree                 any?)
(s/def ::id-fn                (s/or :f fn? :k keyword?))
(s/def ::children-fn          (s/or :f fn? :k keyword?))

(s/def ::node-id              any?)

(s/def ::selection-node       ::node-id)
(s/def ::selection-path       (s/nilable (s/coll-of ::node-id)))
(s/def ::selection-path-init  (s/coll-of ::node-id))
(s/def ::selection-path-ratom ::atom)
(s/def ::on-selection-node    fn?)
(s/def ::on-selection-path    fn?)

(s/def ::keynav?              boolean?)
(s/def ::auto-nav             #{:terminal :content :disable})
(s/def ::ui-mode              #{:row :tree})

(s/def ::whitelist            (s/coll-of ::node-id))
(s/def ::whitelist?           boolean?)

(s/def ::header-fn            fn?)
(s/def ::header-ratom         ::atom)

(s/def ::content-fn           fn?)
(s/def ::content-loading-fn   fn?)
(s/def ::content-placeholder  any?)
(s/def ::content-ratom        ::atom)

(s/def ::tree-data?           fn?)
(s/def ::request-tree-data    fn?)


;; ----------------------------------------------------------------------------
;; defaults

(def k-configs
  {:next      {:k "j"       :f z/next  :label "next"}
   :next-jump {:k "shift-j" :f z/right :label "next (jump)"}
   :prev      {:k "k"       :f z/prev  :label "prev."}
   :prev-jump {:k "shift-k" :f z/left  :label "prev. (jump)"}
   :up        {:k "h"       :f z/up    :label "up"}
   :exp-coll  {:k "u"       :f nil     :label "expand/collapse"}})

(def k-seq-nav     [:next :prev :next-jump :prev-jump :up])
(def k-navfn-pairs (map (comp #(map % [:k :f]) k-configs) k-seq-nav))

(def params-default
  {:loading-fn        (fn [_] [:span.loading-indicator])
   :tree-data?        (comp not delay?)
   :request-tree-data (fn [x cont] (cont @x))
   :ui-mode           :row
   :whitelist?        true})


;; ----------------------------------------------------------------------------
;; util fns

(defn nav-to! [sp-ratom z-nav-args on-selection-path z-fn]
  (let [[_ sel-path-next] (util/nav-path @sp-ratom z-fn z-nav-args)]
    (tb/info "next selection-path: " sel-path-next)
    (on-selection-path sel-path-next)))

(defn init-ctrl-key-bindings! [navtree-token k-fn-pairs]
  (doseq [[k f] k-fn-pairs]
    (kb/bind! k (str navtree-token k) f)))

(defn init-nav-key-bindings!
  [sp-ratom z-nav-args on-selection-path navtree-token k-navfn-pairs]
  (doseq [[k z-fn] k-navfn-pairs]
    (kb/bind! k (str navtree-token k)
      (fn [& _] (nav-to! sp-ratom z-nav-args on-selection-path z-fn)))))

(defn undo-key-bindings! [navtree-token kk]
  (doseq [k kk] (kb/unbind! k (str navtree-token k))))

(defn shortcuts-panel
  [key-fn-pairs]
  [:div.shortcuts-panel
    (for [[k f] key-fn-pairs]
      ^{:key k}
      [:span.key-fn-pair [:span.key k] [:span.fn f]])])


;; ----------------------------------------------------------------------------
;; Reagent components

(defn loader [hiccup tree-data? request-tree-data data-list]
  (r/create-class
    {:reagent-render (fn [hiccup _] hiccup)
     :component-did-mount
     (fn [_]
       (js/setTimeout
         #(doseq [{:keys [d-val d-ratom cont]} data-list]
            (request-tree-data d-val cont)
         10)))}))

(def realized-tree-data? #(or (nil? %) (not= ::not-ready (deref %))))

(defn navtree-node*
  [{:as params
    :keys [selection-path on-selection-path whitelist
           id-fn label-fn children-fn content-fn loading-fn
           children-req-ratom content-ratom content-id-ratom
           tree-data? request-tree-data
           auto-nav-fn-ratom]}
   id-path ;; terminal-headed
   tree]
  (r/with-let [id      (id-fn tree)
               id-path (conj id-path id)

               cc      (children-fn tree)
               cc-r    (when cc
                         (if (tree-data? cc)
                           (reaction cc)
                           (do (swap! children-req-ratom assoc cc ::not-ready)
                               (r/cursor children-req-ratom [cc]))))

               d       (when content-fn (content-fn id))]

    (let [sel?      (= id (last selection-path))
          exp?      (cond whitelist (contains? whitelist id)
                          :else true)

          _         (when (and sel? (not= id @content-id-ratom))
                      (do (reset! content-id-ratom id)
                          (reset! content-ratom (if (tree-data? d) d ::not-ready))))

          cc-done?  (realized-tree-data? cc-r)
          d-done?   (or (not= id @content-id-ratom)
                        (realized-tree-data? content-ratom))

          load-cfgs (cond-> (list)

                      (and exp? (not cc-done?))
                      (conj {:d-val cc
                             :cont
                             #(do (reset! cc-r %)
                                  (if (not (seq %))
                                    (reset! auto-nav-fn-ratom nil)
                                    (when-let [f @auto-nav-fn-ratom] (f))))})

                      (and sel? (not d-done?))
                      (conj {:d-val d  :cont (partial reset! content-ratom)}))]

      ^{:key (hash id)}
      [:li
        {:class (str (when sel? "selection ")
                     (if exp? "expanded" "collapsed"))}
        ;; header
        [:span.header {:on-click (partial on-selection-path (reverse id-path))}
          (label-fn tree)]

        ;; loading indicator
        (when (seq load-cfgs)
          [loader [loading-fn id] tree-data? request-tree-data load-cfgs])

        ;; children
        (when (and cc-r exp? cc-done?)
          [:ul.children
            (doall
              (for [c @cc-r]
                ^{:key (hash (id-fn c))}
                [navtree-node* params id-path c]))])])))


(defn derive-init-state
  [{:as navtree-params
    :keys [tree id-fn children-fn
           tree-data?

           selection-node on-selection-node
           selection-path on-selection-path
           selection-path-ratom selection-path-init

           keynav?
           ui-mode
           auto-nav

           whitelist?

           header-fn  header-ratom

           content-ratom
           content-loading-fn content-placeholder]}]

  (let [row-mode?          (r/atom (= :row ui-mode))

        children-req-ratom (r/atom {})
        children-fn*       (comp #(cond (tree-data? %) %
                                        (contains? @children-req-ratom %)
                                        (let [cc (get @children-req-ratom %)]
                                          (when-not (= ::not-ready cc) cc))
                                        :else nil)
                                  children-fn)

        z-nav-args         [tree id-fn children-fn*]
        node-to-path       #((apply partial zn/find-id-path-to-id z-nav-args) %)

        ;; selection-path (root-headed)

        selection-path-ratom* (or selection-path-ratom
                                  (r/atom
                                    (or selection-path-init
                                        selection-path
                                        (let [pth (some-> selection-node node-to-path)]
                                          (tb/info "initial selection-path: " pth)))))

        ;; header/content

        header-ratom*      (or header-ratom  (r/atom nil))
        content-ratom*     (or content-ratom (r/atom (or content-placeholder nil)))
        content-id-ratom   (r/atom nil)

        _                  (when header-fn
                             (reset! header-ratom*
                                     [header-fn (last @selection-path-ratom*)])
                             (add-watch
                               selection-path-ratom* :header
                               (fn [_ _ _ p]
                                 (reset! header-ratom* [header-fn (last p)]))))

        ;; whitelist

        whitelist-ratom    (when whitelist? (r/atom #{}))
        set-whitelist!     (fn [p] (reset! whitelist-ratom (set p)))
        _                  (set-whitelist! @selection-path-ratom*)

        ;; handler

        on-selection-path* (or on-selection-path
                               (and on-selection-node
                                    (comp on-selection-node last))
                               (fn [sp]
                                 (reset! content-ratom*
                                   (when content-loading-fn
                                     (content-loading-fn (id-fn tree))))
                                 (reset! selection-path-ratom* sp)
                                 (when whitelist?
                                   (set-whitelist! sp))))

        k-configs*    (assoc-in k-configs [:exp-coll :f] #(swap! row-mode? not))
        k-fn-pairs    (map (comp #(map % [:k :f])     k-configs*) [:exp-coll])
        k-label-pairs (map (comp #(map % [:k :label]) k-configs*) k-seq-nav)

        navtree-token (name (gensym))

        _
        (when keynav?
          (init-nav-key-bindings!
            selection-path-ratom* z-nav-args on-selection-path*
            navtree-token k-navfn-pairs)
          (init-ctrl-key-bindings!
            navtree-token k-fn-pairs))

        auto-nav-fn-ratom
        (r/atom
          (when (and auto-nav (not= :disable auto-nav))
            #(let [f (case auto-nav
                       :terminal util/nav-to-terminal!
                       :content  util/nav-to-content!)]
               (f (assoc navtree-params :children-fn children-fn*)
                  @selection-path-ratom* z-nav-args on-selection-path*))))

        _
        (when-let [f @auto-nav-fn-ratom] (f))

        nav-to!*
        (partial nav-to! selection-path-ratom* z-nav-args on-selection-path*)]

    {:row-mode?            row-mode?
     :children-req-ratom   children-req-ratom
     :z-nav-args           z-nav-args
     :selection-path-ratom selection-path-ratom*
     :on-selection-path    on-selection-path*
     :header-ratom         header-ratom*
     :content-ratom        content-ratom*
     :content-id-ratom     content-id-ratom
     :whitelist-ratom      whitelist-ratom
     :k-fn-pairs           k-fn-pairs
     :k-label-pairs        k-label-pairs
     :navtree-token        navtree-token
     :auto-nav-fn-ratom    auto-nav-fn-ratom
     :nav-to!              nav-to!*}))


(fdef navtree-init :args (s/cat :p ::params))
(defn navtree-init
  [{:as params
    :keys [tree id-fn class
           selection-node selection-path
           keynav? shortcuts-panel?
           whitelist whitelist?
           header-fn header-ratom
           content content-fn content-ratom
           icon-left icon-right icon-expand icon-collapse]
    :or {icon-left     octicons/chevron-left
         icon-right    octicons/chevron-right
         icon-expand   octicons/unfold
         icon-collapse octicons/fold}}]

  (r/with-let [state (derive-init-state params)]

    ;; manage changing `selection-path` param
    (when (and selection-path
               (not= selection-path @(:selection-path-ratom state)))
      (reset! (:selection-path-ratom state) selection-path))

    ;; manage changing `selection` param
    (when selection-node
      (let [f  (apply partial zn/find-id-path-to-id (:z-nav-args state))
            sp (f selection-node)]
        (when (not= @(:selection-path-ratom state) sp)
          (reset! (:selection-path-ratom state) sp))))

    (let [sp (or selection-path @(:selection-path-ratom state))
          wl (or whitelist
                 (and whitelist?
                      (or (and selection-path (set sp))
                          (and selection-node (set sp))
                          @(:whitelist-ratom state))))]
      [:div.zc-navtree
        {:class (str class " "
                     (when @(:row-mode? state) "row-mode"))}
        [:div.controls
          [:span.expand {:on-click #(swap! (:row-mode? state) not)}
            (if @(:row-mode? state) icon-expand icon-collapse)]
          [:span.control-left  {:on-click (partial (:nav-to! state) z/prev)} icon-left]
          [:span.control-right {:on-click (partial (:nav-to! state) z/next)} icon-right]]

        [:ul.tree
          ^{:key (hash (id-fn tree))}
          [navtree-node*
            (-> params
                (merge
                  {:content-ratom      (-> state :content-ratom)
                   :content-id-ratom   (-> state :content-id-ratom)
                   :on-selection-path  (-> state :on-selection-path)
                   :children-req-ratom (-> state :children-req-ratom)
                   :auto-nav-fn-ratom  (-> state :auto-nav-fn-ratom)})
                (cond-> whitelist? (assoc :whitelist wl)
                        true       (assoc :selection-path sp))
                (dissoc :tree))
            (list)
            tree]]

        (when (and header-fn  (not header-ratom))  @(:header-ratom  state))
        (when (and content-fn (not content-ratom)) @(:content-ratom state))
        (when content [:div.content content])
        (when shortcuts-panel? [shortcuts-panel (:k-label-pairs state)])])

    (finally
      (when keynav?
        (undo-key-bindings! (:navtree-token state)
          (map first (concat (:k-fn-pairs state) k-navfn-pairs))))
      (reset! (:content-ratom state) nil))))

(instrument `navtree-init)

(defn navtree* [params] [navtree-init (merge params-default params)])
(defn navtree  [& {:as params}] [navtree* params])
