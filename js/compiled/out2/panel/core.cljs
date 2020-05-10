(ns panel.core
  (:require [clojure.spec.alpha :as s :refer [fdef]]
            [clojure.spec.test.alpha :refer [instrument]]
            [reagent.core :as r]))

(s/def ::panel-params
  (s/keys
    :req-un [::title
             ::content]
    :opt-un [::collapsable?
             ::show?
             ::show-init?
             ::class
             ::on-click]))

(s/def ::accordion-params
  (s/keys
    :req-un [::panels]
    :opt-un [::show-any?]))

(s/def ::title any?)
(s/def ::content any?)
(s/def ::collapsable? boolean?)
(s/def ::show? boolean?)
(s/def ::show-init? boolean?)
(s/def ::class string?)
(s/def ::on-click fn?)
(s/def ::panels (s/coll-of map?))
(s/def ::show-any? boolean?)

(defn set-overflow   [outer value] (-> outer (aset "style" "overflow" value)))
(defn set-max-height [outer value] (-> outer (aset "style" "max-height" value)))

(defn inherit-height [outer inner]
  (aset outer "style" "max-height"
        (str (.-clientHeight inner) "px")))

(fdef -panel :args (s/cat :args ::panel-params))
(defn -panel [{:as args :keys [collapsable? show? show-init? on-click]
               :or {collapsable? true}}]
  (r/with-let
    [dom-outer-ratom (r/atom nil)
     dom-inner-ratom (r/atom nil)
     show-ratom      (r/atom (or (not collapsable?) show-init?))
     on-click        (or on-click #(swap! show-ratom not))

     _
     (add-watch show-ratom (gensym)
       (fn [_ _ _ show?]
         (when-let [this @dom-outer-ratom]
           (if show?
             (do (inherit-height @dom-outer-ratom @dom-inner-ratom)
                 (js/setTimeout
                   #(when @show-ratom
                      (do (set-max-height this nil)
                          (set-overflow this "visible")))
                   300))
             (do (inherit-height @dom-outer-ratom @dom-inner-ratom)
                 (js/setTimeout #(set-max-height this "25px") 5)
                 (set-overflow this "hidden"))))))

     panel-outer
     ^{:component-did-mount
       (fn [this]
         (let [outer (r/dom-node this)]
           (reset! dom-outer-ratom outer)
           (if @show-ratom
             (do (set-max-height outer nil)    (set-overflow outer "visible"))
             (do (set-max-height outer "25px") (set-overflow outer "hidden")))))}
     (fn [{:as args :keys [class show?]}]
       (r/with-let
         [panel-inner
          ^{:component-did-mount  #(reset! dom-inner-ratom (r/dom-node %))}
          (fn [{:keys [title content show?]}]
            [:div.panel-container
              [:div.panel-title {:on-click on-click}
                title
                (when collapsable?
                  (if @show-ratom
                    [:span.zmdi.zmdi-caret-up]
                    [:span.zmdi.zmdi-caret-down]))]
              [:div.panel-content content]])]
         (when (and (some? show?) (not= show? @show-ratom))
           (reset! show-ratom show?))
         [:div.zc-panel
           {:class (str class " " (if @show-ratom "expanded" "collapsed"))}
           [panel-inner args]]))]

    [panel-outer args]))


(fdef -panel-accordion :args (s/cat :args ::accordion-params))
(defn -panel-accordion [{:keys [panels show-any?]}]
  (r/with-let
    [show (r/atom 0)]
    [:div.zc-panel-accordion
      (doall
        (for [[i p] (map-indexed vector panels)]
          ^{:key (str "panel-accordion-" i)}
          [-panel
            (merge p
              (when (not show-any?)
                {:show?   (= @show i)
                 :on-click #(reset! show i)}))]))]))

(defn panel [& opts] [-panel opts])
(defn panel-accordion [& {:as params}] [-panel-accordion params])

(instrument `panel)
(instrument `panel-accordion)
