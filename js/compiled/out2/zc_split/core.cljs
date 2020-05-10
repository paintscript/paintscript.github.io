(ns zc-split.core
  (:require [reagent.core :as r]
            [zc-split.calc :refer [calc-fracs]]))

(defn calc [offset fraction min-len]
  (str "calc("
              "("
                 "(100% - " offset "px)"
                 " * " fraction
              ")"
              " + " min-len "px"
           ")"))

(def dir-map {:row :width, :column :height})

(defn split* [{:keys [direction items params]}]
  [:div.zc-split
    (merge params
           {:class (str "split-" (name direction))
            :style {(get dir-map direction) "100%"}})
    (let [offset
          (->> items
               (map #(or (:fixed %) (:min-len %)))
               (reduce +))]
      (for [{:as   panel-config
             :keys [id fixed fraction min-len content]
             :or   {min-len 0}}
            items]
        (let [style
              {(get dir-map direction)
               (if fixed
                 (str fixed "px")
                 (calc (or offset 0) fraction min-len))}]
          ^{:key (or id (hash panel-config))}
          [:div.split-part {:id id :style style} content])))])

(def dim-fns
  {:row    {:get-len    #(.-clientWidth %)
            :get-mouse  #(.-clientX %)
            :cursor-val "col-resize"}
   :column {:get-len    #(.-clientHeight %)
            :get-mouse  #(.-clientY %)
            :cursor-val "row-resize"}})

(defn predecessors [el coll] (->> coll (take-while #(not= el %)) (#(conj % el))))
(defn successors   [el coll] (->> coll (drop-while #(not= el %)) rest))

(defn split-resize*
  [{:keys [direction items sep-len sep-com calc-frac-strategy]
    :or   {sep-len 5 sep-com "" calc-frac-strategy :push-adjacent}}]
  (r/with-let
    [{:keys [get-len get-mouse cursor-val]} (get dim-fns direction)

     init-state    (r/atom nil)

     id-cfg-map    (->> items
                        (map (fn [{:as cfg :keys [id]}] [id cfg]))
                        (into {}))

     item-frac-ids (->> items (filter :fraction) (map :id))

     fracs-ratom   (->> items
                        (filter :fraction)
                        (map (fn [{:keys [id fraction]}]
                               [id fraction]))
                        (into {})
                        (r/atom))

     snapshot      (fn [mouse-ev id]
                     (let [id-len     (get-len (js/document.getElementById id))
                           id-min-len (:min-len (get id-cfg-map id))
                           rel        (/ 1 (- id-len id-min-len))]
                       {:mouse    (get-mouse mouse-ev)

                        :id-ref   id
                        :ids-pred (predecessors id item-frac-ids)
                        :ids-succ (successors   id item-frac-ids)

                        :rel      rel
                        :frac-map @fracs-ratom}))

     sep-fn        (fn [id]
                     {:fixed   sep-len
                      :id      (str "sep-" id)
                      :content [:div.splitter
                                 {:style {:cursor cursor-val}
                                  :on-mouse-down
                                  #(reset! init-state (snapshot % id))}
                                 sep-com]})

     item-seps     (->> item-frac-ids drop-last
                        (map (fn [id] [id (sep-fn id)]))
                        (into {}))

     upd-fracs!    (comp (partial swap! fracs-ratom merge)
                         (partial calc-fracs calc-frac-strategy get-mouse))

     params        {:on-mouse-move #(let [is @init-state]
                                      (when (:mouse is) (upd-fracs! is %)))
                    :on-mouse-up   #(reset! init-state nil)}]

    (let [fracs-map @fracs-ratom
          items-live
          (mapcat #(let [fra (get fracs-map (:id %))
                         sep (get item-seps (:id %))]
                     (cond-> % fra  (assoc :fraction fra)
                               true list
                               sep  (concat (list sep))))
                  items)]
      [split*
        {:direction direction
         :items     items-live
         :params    params}])))


(defn split-dispatch [{:as args :keys [items resize?]}]
  (if resize?
    ^{:key (->> items (map :id) set hash)}
    [split-resize* args]
    [split* args]))

(defn split [& {:as args}] [split-dispatch args])
