(ns linetree.table)

(def border-settings
  {[:v :link] ["t b l" "t r b l"]
   [:v :first] ["t r b l" "r b"]
   [:v :inner] ["b l" "b l r"]
   [:v :last]  ["l b" "t r b l"]

   [:h :link] ["t r l" "t r b l"]
   [:h :first] ["t r b l" "r b"]
   [:h :inner] ["t r" "t r b"]
   [:h :last]  ["r t" "t r b l"]})

(defn skeleton
  [o line {l1 :first l2 :last}]
  (let [[l r] (get border-settings [o line])]
    (case o
      :v [:table.skeleton.v {:class (name line)}
           [:tbody
             [:tr [:td.line.first {:class l} (when l1 [:span.line-label l1])]
                  [:td.line.last  {:class r} (when l2 [:span.line-label l2])]]]]
      :h [:table.skeleton.h {:class (name line)}
           [:tbody
             [:tr [:td.line.first {:class l} (when l1 [:span.line-label l1])]]
             [:tr [:td.line.last  {:class r} (when l2 [:span.line-label l2])]]]])))

(declare tree)

(defn branches
  [args o bb]
  [:table.branches {:class (name o)}
    [(case o :v :tbody>tr :h :tbody)
      (map-indexed
        (fn [i b-item]
          (with-meta
            (let [[b ll bb-sub] (if (map? b-item)
                           (let [{:keys [node branches labels]} b-item]
                             [node labels branches])
                           [b-item {}])
                  h [skeleton
                      o
                      (cond (= i 0) :first
                            (= i (-> bb count dec)) :last
                            :else :inner)
                      ll]
                  tail
                  (if (seq bb-sub)
                    [tree (merge args {:node b :branches bb-sub})]
                    b)]
              (case o
                :v [:td.branch h tail]
                :h [:tr [:td.branch h] [:td tail]]))
            {:key (str "branch-" i "-" (hash b-item))}))
        bb)]])

(defn tree
  ([el sub-els] (tree {:orientation :v :node el :branches sub-els}))
  ([{:as args, o :orientation n :node bb :branches ll :labels
     :or {o :v}}]
   (case o
     :v [:div.zc-linetree.zc-linetree-table.v
          n
          [skeleton o :link ll]
          [branches args o bb]]
     :h [:table.zc-linetree.zc-linetree-table.h
          [:tbody
            [:tr
              [:td n]
              [:td [skeleton o :link ll]]
              [:td [branches args o bb]]]]])))
