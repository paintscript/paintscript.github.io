(ns zc-split.calc)

(defn calc-frac-diff
  [id-ref frac-map rel dist]
  (let [before-frac (get frac-map id-ref)
        diff-frac   (* rel dist)
        total-frac  (* before-frac (min 1 diff-frac))]
    total-frac))


;; ----------------------------------------------------------------------------
;; basic

(defn calc-fracs-basic
  [{:as snapshot :keys [id-ref ids-pred ids-succ rel frac-map]}
   dist]
  (let [id-adj      (first ids-succ)
        frac-id     (get frac-map id-ref)
        frac-adj    (get frac-map id-adj)
        total-frac  (calc-frac-diff id-ref frac-map rel dist)]
    {id-ref (+ frac-id  total-frac)
     id-adj (- frac-adj total-frac)}))


;; ----------------------------------------------------------------------------
;; push

(defn subtract
  "Subtract `amount` from the `values` vector until `amount` is zero or all
   `values` are zero. Return the updated values and the remaining amount."
  [values amount]
  (reduce (fn [[values amount] val-i]
            (let [diff (- (get values val-i) amount)]
              (if (or (pos? diff) (zero? diff))
                (reduced [(assoc values val-i diff) 0])
                [(assoc values val-i 0) (- diff )])))
          [values amount]
          (range (count values))))

(defn shift-by-n [nn-minus n-plus n]
  (let [[nn-minus* _] (subtract nn-minus n)
        nn-plus*      (+ n-plus n)]
    [nn-minus* nn-plus*]))

(def abs #(cond-> % (neg? %) -))

(defn upd-fracs [pred succ f-diff frac-map]
  (let [[nn-minus-ids n-plus-id]
        (if (neg? f-diff)
          [(vec pred) (first succ)]
          [(vec succ) (first pred)])

        [nn-minus n-plus]
        (shift-by-n
          (->> nn-minus-ids (mapv frac-map))
          (->> n-plus-id    frac-map)
          (abs f-diff))
        
        frac-map*
        (->> (concat (interleave nn-minus-ids nn-minus)
                     [n-plus-id n-plus])
             (partition 2)
             (map vec)
             (into {}))]

    frac-map*))

(defn calc-fracs-push-adjacent
  [{:as snapshot :keys [id-ref ids-pred ids-succ rel frac-map]}
   dist]
  (let [total-frac (calc-frac-diff id-ref frac-map rel dist)]
    (upd-fracs ids-pred ids-succ total-frac frac-map)))


;; ----------------------------------------------------------------------------
;; main

(def calc-frac-strategies
  {:basic calc-fracs-basic
   :push-adjacent calc-fracs-push-adjacent})

(defn calc-fracs
  [calc-frac-strategy get-direction snapshot mouse-ev]
  (let [f (get calc-frac-strategies calc-frac-strategy)]
    (f snapshot (- (get-direction mouse-ev) (:mouse snapshot)))))
