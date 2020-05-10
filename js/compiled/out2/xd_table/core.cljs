(ns xd-table.core
  (:require [reagent.core :as r]))

(defn index-of [coll el-search]
  (->> (map-indexed vector coll)
       (filter (fn [[i el]] (= el-search el)))
       ffirst))

(defn map-vals [f coll] (->> coll (map (fn [[k v]] [k (f v)])) (into {})))

(defn- selection-default [& {:keys [model choices on-change label-fn]}]
  [:select
    {:value model
     :on-change (comp on-change #(-> % .-target .-value keyword))}
    (for [c choices]
      ^{:key (hash c)}
      [:option
        {:on-click (partial on-change (:id c))}
        (:id c)])])

(defn- radio-button-default [& {:keys [model value label on-change]}]
  [:span.radio-button
    {:on-click (partial on-change value)}
    [:input
      {:type      "radio"
       :value     (or value "")
       :read-only true
       :checked   (if (= model value) "checked" false)}]
    [:span label]])

(defn- xd-table-pure
  [{:keys [cell-fn dim-yz? dim-xz? dims selectors? selection-com radio-button-com]
    :or   {selectors?       true
           selection-com    selection-default
           radio-button-com radio-button-default}}
   {:keys [dim-x
           dim-x-on-change
           dim-y
           dim-y-on-change
           dim-yz
           dim-yz-on-change
           dim-xz
           dim-xz-on-change
           radio
           radio-on-change]}]
  (let
    [;; -----------------------------
     ;; data

     {vals-x :vals
      header-x? :header?
      dim-l-fn-x :dim-label-fn
      dim-val-l-fn-x :dim-val-label-fn
      :or {dim-l-fn-x :id dim-val-l-fn-x str}} (nth dims dim-x)

     {vals-y :vals
      header-y? :header?
      dim-l-fn-y :dim-label-fn
      dim-val-l-fn-y :dim-val-label-fn
      :or {dim-l-fn-y :id dim-val-l-fn-y str}} (nth dims dim-y)

     {vals-yz :vals
      header-yz? :header?
      dim-l-fn-yz :dim-label-fn
      dim-val-l-fn-yz :dim-val-label-fn
      :or {dim-l-fn-yz :id dim-val-l-fn-yz str}} (some->> dim-yz (nth dims))

     dim-yz-active? (and dim-yz? dim-yz)

     {vals-xz :vals
      header-xz? :header?
      dim-l-fn-xz :dim-label-fn
      dim-val-l-fn-xz :dim-val-label-fn
      :or {dim-l-fn-xz :id dim-val-l-fn-xz str}} (some->> dim-xz (nth dims))

     dim-xz-active? (and dim-xz? dim-xz)

     extra-dims     (->> (map-indexed vector dims)
                         (filter
                           (fn [[i _]]
                             (not
                               (contains? #{dim-x dim-y dim-yz dim-xz} i))))
                         (map second)
                         doall)

     extra-dim-vals (->> extra-dims
                         (map (fn [{id :id}] (get radio id)))
                         (remove nil?)
                         doall)

     colspan-empty  (cond (and header-y? selectors?) 2
                          header-y? 1
                          :else 0)

     colspan-x      (cond-> (count vals-x)
                            dim-xz-active? (* (count vals-xz)))

     ;; -----------------------------
     ;; selector components

     dim-x-selector  [selection-com
                       :model     (:id (nth dims dim-x))
                       :choices   dims
                       :on-change #(dim-x-on-change (index-of (map :id dims) %))
                       :label-fn  dim-l-fn-x]

     dim-y-selector  [selection-com
                       :model     (:id (nth dims dim-y))
                       :choices   dims
                       :on-change #(dim-y-on-change (index-of (map :id dims) %))
                       :label-fn  dim-l-fn-y]

     dim-yz-selector [selection-com
                       :model     (if dim-yz
                                    (:id (nth dims dim-yz))
                                    :none)
                       :choices   (conj dims {:id :none})
                       :on-change #(dim-yz-on-change
                                     (if (= :none %)
                                       nil
                                       (index-of (map :id dims) %)))
                       :label-fn  dim-l-fn-yz]

     dim-xz-selector [selection-com
                       :model     (if dim-xz
                                    (:id (nth dims dim-xz))
                                    :none)
                       :choices   (conj dims {:id :none})
                       :on-change #(dim-xz-on-change
                                     (if (= :none %)
                                       nil
                                       (index-of (map :id dims) %)))
                       :label-fn  dim-l-fn-xz]]

    [:div.zc-xd-table
      (when (seq extra-dims)
        [:div.extra-dims
          (doall
            (for [{:keys [id dim-val-label-fn vals]
                   :or {dim-val-label-fn str}} extra-dims]
              (let [r-val (get radio id)]
                ^{:key (str "extra-dim-" id)}
                [:div.extra-dim
                  [:span.name id]
                  [:div.vals
                    [:div.val
                      [radio-button-com
                        :model r-val
                        :value nil
                        :label "none"
                        :on-change #(radio-on-change id nil)]]
                    (for [v vals]
                      ^{:key (hash v)}
                      [:div.val
                        [radio-button-com
                          :model r-val
                          :value v
                          :label (dim-val-label-fn v)
                          :on-change #(radio-on-change id v)]])]])))])
      [:table
        [:thead
          ;; -----------------------------
          ;; selectors for x-row & yz-col
          (when (and header-x? selectors?)
            [:tr
              (when header-y?
                (if (or dim-yz-active? (not dim-yz?))
                  [:td.empty {:col-span colspan-empty}]
                  [:td.empty.header-yz {:col-span colspan-empty}
                    dim-yz-selector]))
              (when (and header-yz? dim-yz-active?)
                [:td.header-yz
                  dim-yz-selector])
              [:td.header-x
                {:col-span colspan-x}
                dim-x-selector]])

          (when header-x?
            [:tr
              (cond (not header-y?) nil
                    (and dim-xz? (not dim-xz-active?))
                    [:td.empty.header-yz-col {:col-span colspan-empty}
                      dim-xz-selector]
                    (and dim-yz? (not dim-yz-active?))
                    [:td.empty.header-yz-col {:col-span colspan-empty}]
                    :else
                    [:td.empty {:col-span colspan-empty}])
              (when dim-yz-active? [:td.header-yz-col])
              (doall
                (for [val-x vals-x]
                  ^{:key (str "cell-" (hash val-x))}
                  [:td.header-x-col
                    {:col-span
                      (cond-> 1
                              dim-xz-active? (* (count vals-xz)))}
                    (dim-val-l-fn-x val-x)]))])

          (when (and header-xz? dim-xz-active?)
            [:tr
              ; (if (or @dim-xz-ratom (not dim-yz?))
              ;   [:td.empty {:col-span (-> vals-y count)}])
              [:td.header-xz dim-xz-selector]
              [:td.header-xz.col]
              (when dim-yz-active?
                [:td.header-xz.col])
              (for [val-x  vals-x
                    val-xz vals-xz]
                ^{:key (str "cell-" (hash val-x) - (hash val-xz))}
                [:td.header-xz.col (dim-val-l-fn-xz val-xz)])])]

        [:tbody
          (doall
            (for [[y-i  val-y]  (map-indexed vector vals-y)
                  [yz-i val-yz] (if dim-yz
                                  (map-indexed vector vals-yz)
                                  [[0 nil]])
                  :when (or dim-yz (= 0 yz-i))]

              ^{:key (str "row-" y-i "-" (hash [val-y val-yz extra-dim-vals]))}
              [:tr
                (when (and header-y?
                           selectors?
                           (= val-y (first vals-y))
                           (= 0 yz-i))
                  [:td.header-y
                    {:row-span
                     (-> (count vals-y)
                         (* (if dim-yz (count vals-yz) 1)))}
                    dim-y-selector])
                (if (or (not header-y?)
                        (and dim-yz (not= 0 yz-i)))
                  nil
                  [:td.header-y-row
                    (merge
                      (when (= val-y (last vals-y)) {:class "last"})
                      (when dim-yz {:row-span (-> vals-yz count)}))
                    (dim-val-l-fn-y val-y)])

                (when (and header-yz? dim-yz)
                  [:td.header-yz-row
                    (dim-val-l-fn-yz val-yz)])

                (doall
                  (for [[x-i  val-x]  (map-indexed vector vals-x)
                        [xz-i val-xz] (if dim-xz
                                        (map-indexed vector vals-xz)
                                        [[0 nil]])
                        :when (or dim-xz (= 0 xz-i))]
                  ^{:key (str "cell-" x-i "-" xz-i)}
                  [:td.cell
                    ;; hiccup-form problematic with plain string/number return
                    ;; values but necessary for reactivity to ratom-derefs
                    [cell-fn
                      (merge
                        {(:id (nth dims dim-x)) val-x
                         (:id (nth dims dim-y)) val-y}
                        (when (and dim-yz dim-yz?)
                          {(:id (nth dims dim-yz)) val-yz})
                        (when (and dim-xz dim-xz?)
                          {(:id (nth dims dim-xz)) val-xz})
                        (->> extra-dims
                             (filter (fn [{id :id}] (get radio id)))
                             (map (fn [{:keys [id]}]
                                    [id (get radio id)]))
                             (into {})))]]))]))]]]))

(defn xd-table*
  [{:as args
    :keys [cell-fn dim-yz? dim-xz? dims selectors?
           selection-com radio-button-com]
    :or {selectors? true
         selection-com selection-default
         radio-button-com radio-button-default}}]
  (r/with-let [dim-x-ratom  (r/atom 0)
               dim-y-ratom  (r/atom 1)
               dim-yz-ratom (r/atom (when dim-yz? 2))
               dim-xz-ratom (r/atom (when dim-xz? 3))
               radio-ratoms (into {}
                              (for [{id :id} dims]
                                [id (r/atom nil)]))]
    [xd-table-pure
      args
      {:dim-x  @dim-x-ratom
       :dim-y  @dim-y-ratom
       :dim-yz @dim-yz-ratom
       :dim-xz @dim-xz-ratom
       :radio  (->> radio-ratoms (map-vals deref))
       
       :dim-x-on-change  #(reset! dim-x-ratom  %)
       :dim-y-on-change  #(reset! dim-y-ratom  %)
       :dim-yz-on-change #(reset! dim-yz-ratom %)
       :dim-xz-on-change #(reset! dim-xz-ratom %)
       :radio-on-change  #(reset! (get radio-ratoms %1) %2)}]))

(defn xd-table [& {:as args}] [xd-table* args])
