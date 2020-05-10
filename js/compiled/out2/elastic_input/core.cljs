(ns elastic-input.core
  (:require [clojure.spec.alpha :as s :refer [fdef]]
            [clojure.spec.test.alpha :refer [instrument]]
            [cljs.reader :refer [read-string]]
            [reagent.core :as r]
            [keybind.core :as kb]))

(s/def ::args
  (s/keys
    :req-un [::model
             ::on-change]
    :opt-un [::height
             ::width
             ::min-len
             ::extra-len
             ::placeholder
             ::disabled?
             ::focused?
             ::on-key-data
             ::buffer?
             ::buffer-ratom
             ::commit-on
             ::number?]))

(s/def ::model        string?)
(s/def ::on-change    fn?)
(s/def ::on-key-data  fn?)
(s/def ::height       (s/or :i integer? :s string? :k #{:auto}))
(s/def ::width        (s/or :i integer? :s string? :k #{:auto}))
(s/def ::min-len      (s/keys :opt-un [::width ::height]))
(s/def ::extra-len    (s/keys :opt-un [::width ::height]))
(s/def ::placeholder  string?)
(s/def ::disabled?    boolean?)
(s/def ::focused?     boolean?)
(s/def ::number?      boolean?)

(s/def ::buffer?      boolean?)
(s/def ::buffer-ratom #(satisfies? IAtom %))
(s/def ::commit-on    (s/coll-of #{:blur :enter :shift-enter} :kind set?))

(def enter-key-code 13)


;; ----------------------------------------------------------------------------
;; adapt-params

(defn- ev-tgt-val [ev] (-> ev .-target .-value))

(defn- ev-key-press-data [ev]
  {:event      ev
   :key-code   (max (.-key ev) (.-which ev))
   :shift-key? (.-shiftKey ev)})

(defn- opt [opt-f] (or opt-f #()))

(defn middleware--adapt-params
  "Adapt params to input/textarea component args and report DOM node."
  [c]
  (fn [p]
    (let [setup (fn [this] (reset! (:dom-node-ratom p) (r/dom-node this)))]
      (r/create-class
        {:component-did-mount setup
         :reagent-render
         (fn [p]
           (let [p' (merge
                     (-> p :component-params)
                     {:value        (-> p :model)
                      :placeholder  (-> p :placeholder)
                      :style        (merge (-> p :style)
                                           {:width  (-> p :width)
                                            :height (-> p :height)})
                      :on-change    (-> p :on-change   (comp ev-tgt-val))
                      :on-focus     (-> p :on-focus    opt (comp ev-tgt-val))
                      :on-blur      (-> p :on-blur     opt (comp ev-tgt-val))
                      :on-key-press (-> p :on-key-data opt (comp ev-key-press-data))})]
             [c p']))}))))

;; ----------------------------------------------------------------------------
;; scroll-prevention

(defn- scroll-l [dom-node] (set! (.-scrollLeft dom-node) 0))
(defn- scroll-t [dom-node] (set! (.-scrollTop  dom-node) 0))

(defn middleware--scroll
  "Attach an update handler that prevents scrolling."
  [scroll-f]
  (fn [c]
    (with-meta c
      {:component-did-update (comp scroll-f r/dom-node)})))


;; ----------------------------------------------------------------------------
;; focus

(defn focus-ctrl-factory
  "Create a handler for component-did-mount and component-did-update"
  [focus-tracker reset-scroll]
  (fn [this]
    (let [n (r/dom-node this)
          _ (reset-scroll n)
          {:keys [curr prev]} @focus-tracker]
      (cond (and (not prev) curr)
            (do (swap! focus-tracker #(assoc % :prev true))
                (.focus n))
            (and prev (not curr))
            (do (swap! focus-tracker #(assoc % :prev false))
                (.blur n))
            :else true))))

(defn middleware--focus [c]
  (let [focus-tracker (r/atom {:curr false :prev false})
        focus-ctrl    (focus-ctrl-factory focus-tracker scroll-l)]
    (fn [p]
      (r/create-class
       {:component-did-mount  focus-ctrl
        :component-did-update focus-ctrl
        :reagent-render
        (fn [{:as p :keys [focused?]}]
          (let [{:keys [curr]} @focus-tracker
                p' (-> p
                       (assoc-in [:component-params :class]
                                 (if curr "active" "inactive")))]
            (when (not= focused? curr)
              (swap! focus-tracker update :curr not))
            [c p']))}))))


;; ----------------------------------------------------------------------------
;; phantom

(defn escape [txt]
  (clojure.string/escape txt
    {\< "&lt;" \> "&gt;" \& "&amp;" "\n" "<br>"}))

(defn phantom-ctrl-factory
  [input-dom-node-ratom phantom-dom-node-ratom inspect report display-style]
  (fn [_this]
    (let [in @input-dom-node-ratom
          pn @phantom-dom-node-ratom
          _ (-> pn .-style .-display (set! display-style))
          _ (-> in .-style .-display (set! "none"))
          d (inspect pn)
          _ (-> pn .-style .-display (set! "none"))
          _ (-> in .-style .-display (set! display-style))]
     (report d))))

(defn phantom-factory
  "Create a component that reports its width and height when it's mounted,
   the arguments change, or the window is resized.
   The component is made visible just before inspecting its dimensions,
   and hidden immediately afterwards.
  "
  [inspect report display-style sentinel-str]
  (fn [params]
    (let [dom-node-ratom (r/atom nil)
          phantom-ctrl   (phantom-ctrl-factory
                           (:dom-node-ratom params)
                           dom-node-ratom inspect report display-style)
          setup          (fn [this]
                           (reset! dom-node-ratom (r/dom-node this))
                           (js/window.addEventListener
                             "resize" (fn [_ev] (phantom-ctrl this)) true)
                           this)]
      (r/create-class
        {:component-did-mount  (comp phantom-ctrl setup)
         :component-did-update phantom-ctrl
         :reagent-render
         (fn [{:as params :keys [model width height]}]
           [:div.phantom
             {:style {:width width :height height}
              :dangerouslySetInnerHTML
              {:__html (str (escape model) sentinel-str)}}])}))))


;; ----------------------------------------------------------------------------
;; auto-size

(defn derive-dims
  [phantom-dims dims-auto min-len extra-len]
  (->> dims-auto
       (map (fn [dim]
              (let [v         (get phantom-dims dim)
                    min-len   (get min-len      dim)
                    extra-len (get extra-len    dim)
                    v2        (+ (if (> v min-len) v min-len)
                                 extra-len)]
                [dim v2])))
       (into {})))

(defn- derive-params-input
  [{:as params :keys [disabled?]} dims-input-com]
  (-> params
      (cond-> disabled?
              (-> (merge {:on-change #() :on-blur #() :on-key-data #()})
                  (assoc-in [:style :cursor] "not-allowed")))
      (merge dims-input-com)))

(defn- derive-params-phantom
  [{:as params :keys [width height]} dims-explicit]
  (-> params
      (select-keys (conj dims-explicit :model :dom-node-ratom))
      (update :model #(if (= "" %) (or (:placeholder params) "") %))))

(defn middleware--auto
  [c]
  (fn [{:as params :keys [min-len extra-len inspect display-style sentinel-str]}]
    (r/with-let [dims-explicit (->> [:width :height]
                                    (remove #(keyword? (get params %))))
                 dims-auto     (->> [:width :height]
                                    (filter #(contains? #{:auto "100%"}
                                                        (get params %))))

                 ;; -----------------------------
                 ;; phantom management

                 phantom-dims-r (r/atom {:width nil :height nil})
                 report         #(reset! phantom-dims-r %)
                 phantom        (phantom-factory
                                  inspect report display-style sentinel-str)]

      (let [dims-input-com (derive-dims @phantom-dims-r dims-auto min-len extra-len)
            params-input   (derive-params-input params dims-input-com)
            params-phantom (derive-params-phantom params dims-explicit)]

        [:div.zc-elastic-input (:container params)
          [c params-input]
          [phantom params-phantom]]))))


;; ----------------------------------------------------------------------------
;; buffer

(defn sync-buffer-with-external-model [r-buffer external-model*]
  (let [b @r-buffer]
    (when (not= (:external-model b) external-model*)
      (swap! r-buffer assoc :model          external-model*
                            :external-model external-model*))))

(defn middleware--buffer [c]
  (fn [{:as p :keys [model on-change on-blur on-key-data
                     buffer-ratom commit-on]
        :or {commit-on #{:enter}}}]
    (r/with-let [r-buffer       (or buffer-ratom (r/atom {}))
                 r-buffer-model (r/cursor r-buffer [:model])
                 r-buffer-upd?  (r/cursor r-buffer [:updated?])

                 update-buffer! #(do
                                   (reset! r-buffer-model %)
                                   (reset! r-buffer-upd? true))
                 commit-buffer! #(do
                                   (when @r-buffer-upd?
                                       (on-change @r-buffer-model))
                                   (when (and (commit-on :blur) on-blur)
                                     (on-blur)))
                 on-key-data*   #(do
                                   (when
                                     (and (= enter-key-code (:key-code %))
                                          (or (commit-on :enter)
                                              (and (commit-on :shift-enter)
                                                   (:shift-key? %))))
                                     (do
                                       (.preventDefault (:event %))
                                       (commit-buffer!)))
                                   (when-let [f on-key-data] (f %)))

                 _ (reset! r-buffer {:model          (:model p)
                                     :external-model (:model p)
                                     :commit-fn      commit-buffer!})]
      (sync-buffer-with-external-model r-buffer model)
      (let [p' (cond-> p
                       (:buffer? p)
                       (merge
                        (when (commit-on :blur)
                          {:on-blur commit-buffer!})
                        {:model       @r-buffer-model
                         :on-change   update-buffer!
                         :on-key-data on-key-data*}))]
        [c p']))))

;; ----------------------------------------------------------------------------
;; up/down key middleware

(defn middleware--up-down-key
  [c]
  (fn [{:as p :keys [model on-change on-focus on-blur]}]
    (r/with-let [r-buffer (r/atom {:model model :external-model model})]
      (sync-buffer-with-external-model r-buffer model)
      (let [op* (fn [op operand]
                  (fn []
                    (let [v (-> @r-buffer :model js/Number (op operand) str)]
                      (swap! r-buffer assoc :model v)
                      (on-change v))))
            p' (assoc p
                      :model    (:model @r-buffer)
                      :on-focus (fn []
                                  (kb/bind! "up" :up (op* + 1))
                                  (kb/bind! "down" :down (op* - 1))
                                  (kb/bind! "shift-up" :up (op* + 10))
                                  (kb/bind! "shift-down" :down (op* - 10))
                                  (some-> on-focus (apply [])))
                      :on-blur  (fn []
                                  (kb/unbind-all!)
                                  (some-> on-blur (apply []))))]
        [c p']))))

;; ----------------------------------------------------------------------------
;; configs

(defn- inspect [obj]
  {:width  (.-clientWidth  obj)
   :height (.-clientHeight obj)})

(def ^:private params-default
  {:input
   {:min-len        {:width 10 :height 0}
    :extra-len      {:width 5  :height 0}
    :inspect        inspect
    :display-style  "inline-block"
    :sentinel-str   ""
    :class          "input-auto-w"}

   :textarea
   {:min-len        {:height 25 :width 0}
    :extra-len      {:height 0  :width 0}
    :inspect        inspect
    :display-style  "block"
    :sentinel-str   "<br class='lbr'>"
    :class          "textarea-auto-h"}})

(defn- middleware--default-params [k-com]
  (fn [c]
    (fn [p]
      (let [p' (merge (get params-default k-com) p)]
        [c p']))))

(defn- middleware--dom-node [component]
  (let [r (r/atom nil)]
    (fn [params]
      [component (assoc params :dom-node-ratom r)])))

(defn- derive-input-com [{:as args :keys [textarea? width height]}]
  (let [k-com (if (or textarea? (= :auto height)) :textarea :input)]
    (cond-> identity

            true                         (comp middleware--dom-node
                                               (middleware--default-params k-com))
            (contains? args :number?)    (comp middleware--up-down-key)
            (contains? args :buffer?)    (comp middleware--buffer)
            (some #(= :auto (get args %))
                  [:width :height])      (comp middleware--auto)
            (contains? args :focused?)   (comp middleware--focus)
            (= :input k-com)             (comp (middleware--scroll scroll-t))
            (= :textarea k-com)          (comp (middleware--scroll scroll-l))
            true                         (comp middleware--adapt-params)

            true                         (apply [k-com]))))

(fdef elastic-input* :args (s/cat :args ::args))
(defn elastic-input*
  [args]
  (r/with-let [input-com (derive-input-com args)]
    [input-com args]))

(defn elastic-input [& {:as args}] [elastic-input* args])

(instrument `elastic-input*)
