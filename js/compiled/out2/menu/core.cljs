(ns menu.core
  (:require [cljs.reader :refer [read-string]]
            [reagent.core :as r]
            [hiccup-icons.mdi :as mdi]
            [z-com.util :refer [deref?]]))

(defn button*
  [{:keys [class style label icon on-click square? active? disabled?]}]
  [:div.zc.zc-button
    {:style style
     :class (str class " " (when square?   "square ")
                           (when active?   "activated ")
                           (when disabled? "disabled"))
     :on-click (if disabled? #() on-click)}
    (if icon
      (if label
        [:div.icon-label [:div.icon icon] [:div.label label]]
        [:div.icon icon])
      label)])

(defn button [& {:as params}] [button* params])

(defn button-row   [& buttons] (vec (cons :div.zc.zc-button-row   buttons)))
(defn button-group [& buttons] (vec (cons :div.zc.zc-button-group buttons)))

(defn sectionmenu
  [{:as args-static :keys [id-fn on-change]}
   {:as args-live   :keys [model node items] :or {id-fn :label}}]
  (let [{:keys [label]} node]
    [:div.zc.zc-menu-section
      [:span.zc-menu-section-title
        [:span.zc-menu-text {:href "#"} label]]

      [:div.zc-menu-items-container
        [:ul.zc-menu-items
          (for [{:as item :keys [label]} items]
            ^{:key (hash item)}
            [:li.zc-menu-item
              {:class (when (= model (id-fn item)) "selected")
               :on-click (partial on-change (id-fn item))}
              [:span.zc-menu-text label]])]]]))

(defn submenu
  [{:as args-static :keys [id-fn on-change icon-down icon-up]
    :or {icon-down [:i.zmdi.zmdi-caret-up]
         icon-up   [:i.zmdi.zmdi-caret-down]}}
   {:as args-live   :keys [hover? left width node items]}]
  (r/with-let [show-model (r/atom false)]
    (let [pd 0;30
          {:keys [label]} node]
      [:li.zc-menu-item.parent
        (merge
          {:class (when @show-model "zc-menu-active")}
          (when hover?
            {:on-mouse-over #(reset! show-model true)
             :on-mouse-out  #(reset! show-model false)}))

        [:span.zc-menu-text
          {:on-click #(swap! show-model not)}
          label
          " "
          (if @show-model icon-up icon-down)]

        [:div.zc-menu-items-container
          [:ul.zc-menu-items
            {:style {:width (when width (str (+ width pd) "px"))
                     :left  "100%"}}
            (for [{:as item :keys [label]} items]
              ^{:key (hash item)}
              [:li.zc-menu-item
                {:on-click (partial on-change (id-fn item))}
                [:span.zc-menu-text label]])]]])))

(defn- menu-pure
  [{:as args-static :keys [id-fn label-fn title-fn set-show! on-click on-change
                           icon-down icon-up icon-left icon-right]}
   {:as args-live   :keys [class model hover? direction sizing
                           width node items show-sel? animate?
                           show? disabled?]}]
  (let [c-sel (->> items
                   (mapcat #(cond
                              (not (map? %)) [%]
                              (:sec-menu? %) (:items %)
                              (:sub-menu? %) (:items %)
                              :else          [%]))
                   (filter #(= model (id-fn %)))
                   (first)
                   (#(or % {:label "other"})))]

    [:div.zc.zc-menu {:class (str class " "
                                  (name direction) " "
                                  (or (some-> sizing name)
                                      "uniform-items-plus") " "
                                  (when animate?
                                    "animate ")
                                  (when disabled? "disabled"))
                      :style (when width
                               {"--width" (str width "px")})}
     [:ul.zc-menu-root
      [:li.zc-menu-item.parent
       (merge
        {:class (when show? "zc-menu-active")}
        (when hover?
          {:on-mouse-over #(set-show! true)
           :on-mouse-out  #(set-show! false)}))

       [:span.zc-menu-header {:on-click (if disabled? #() on-click)}
        [:span.zc-menu-text
         (if show-sel?
           (if title-fn
             (title-fn node c-sel)
             (label-fn c-sel))
           (label-fn node))]
        [:span.zc-menu-caret
         (case direction :down  (if show? icon-up   icon-down)
           :right (if show? icon-left icon-right))]]

       [:div.zc-menu-items-container
        [:ul.zc-menu-items
         ; {:style {:width (some-> width (str "px"))}}
         (for [item items]
           (let [{:keys [sub-menu? sec-menu?]} (when (map? item) item)
                 args-live-item (merge args-live (when (map? item) item))]
             (with-meta
              (cond
                (label-fn item)
                [:li.zc-menu-item
                 {:class (when (= model (id-fn item)) "selected")}
                 [:span.zc-menu-text
                  {:on-click (partial on-change (id-fn item))}
                  (label-fn item)]]

                sec-menu?
                [:li.zc-menu-item [sectionmenu args-static args-live-item]]

                sub-menu?
                [submenu args-static (assoc args-live-item :left width)])
              {:key (hash item)})))]]]]]))

(defn- args-static
  [{:as args :keys [id-fn label-fn show-model show-init on-change]}]
  (let [show-model (or show-model (r/atom show-init))
        on-click   #(swap! show-model not)
        on-change0 (or on-change
                       #(reset! (:model args) %))
        on-change' (fn [id]
                     (on-change0 id)
                     (reset! show-model false))]
    {:id-fn     (or id-fn identity)
     :label-fn  (or label-fn (fn [item]
                               (cond
                                 (keyword? item) (name item)
                                 (map? item) (get item :label)
                                 :else (str item))))
     :title-fn   (:title-fn args)
     :icon-down  (or (:icon-down  args) mdi/menu-down)
     :icon-up    (or (:icon-up    args) mdi/menu-up)
     :icon-right (or (:icon-right args) mdi/menu-right)
     :icon-left  (or (:icon-left  args) mdi/menu-left)

     :show-model show-model
     :set-show!  #(reset! show-model %)
     :on-click   on-click
     :on-change  on-change'}))

(defn- args-live [args-static args]
  (-> args
      (update :direction #(or % :down))
      (update :model     #(cond-> % (deref? %) deref))
      (update :show?     #(if (some? %) % @(:show-model args-static)))
      (update :show-sel? #(if (some? %) % true))
      (update :disabled? #(if (some? %) % false))))

(defn menu* [args]
  (r/with-let
    [args-static (args-static args)]
    (let [args' (args-live args-static args)]
      [menu-pure args-static args'])))

(defn menu [& {:as args}]
  [menu* args])
