(ns linetree.flex
  (:require [linetree.table :refer [border-settings]]))

(defn skeleton [o line {l1 :first l2 :last}]
  (let [[l r] (get border-settings [o line])]
    [:div.skeleton
      [:div.cells {:class (name line)}
        [:div.line {:class (str (name o) " " l)} (when l1 [:span.line-label l1])]
        [:div.line {:class (str (name o) " " r)} (when l2 [:span.line-label l2])]]]))

(declare tree)

(defn branches [args o bb]
  [:div.branches {:class (name o)}
    (map-indexed
      (fn [i b-item]
        (let [[b ll bb-sub] (if (map? b-item)
                       (let [{:keys [node branches labels]} b-item]
                         [node labels branches])
                       [b-item {} []])]
        ^{:key (str "branch-" i "-" (hash b))}
        [:div.branch
          [skeleton o
            (cond (= 1 (count bb)) :link
                  (= i 0) :first
                  (= i (-> bb count dec)) :last
                  :else :inner)
            ll]
          [:div.el
            (if (seq bb-sub)
              [tree (merge args {:node b :branches bb-sub})]
              b)]]))
      bb)])

(defn tree
  ([n bb] (tree {:orientation :v :node n :branches bb}))
  ([{:as args, o :orientation, n :node, bb :branches, ll :labels, stretched? :stretched?
     :or {o :v}}]
   [:div.zc-linetree.zc-linetree-flex
     {:class (str (name o) (when stretched? "-stretched"))}
     [:div.el n]
     (when (seq bb) [skeleton o :link ll])
     (when (seq bb) [branches args o bb])]))
