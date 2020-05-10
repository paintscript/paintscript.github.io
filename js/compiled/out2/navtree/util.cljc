(ns navtree.util
  (:require [clojure.zip :as z]
            [taoensso.timbre :as tb]
            [navtree.zipper :as zn]))

(defn handle-opt-delay
  [data]
  (if (delay? data)
    (do (tb/warn "forcing deref") (deref data))
    data))

(defn nav-path
  "Apply the zipper function `z-fn` to the id-path `pth`."
  [pth z-fn [tree id-fn children-fn]]
  (when-let [zn (zn/id-path->z-nav tree id-fn children-fn pth)]
    (let [pth-next (-> (cond-> zn (seq pth) z-fn)
                       (zn/z-nav->id-path id-fn))]
      [zn pth-next])))

(defn nav-to-pred!
  "Navigate to a node where `pred-fn` is true"
  [derive-pred-fn params sp-init z-nav-args on-selection-path]
  (let [pred-fn (derive-pred-fn params)]
    (loop [sp sp-init]
      (let [[_ id-fn _] z-nav-args]
        (when-let [[z-nav sp-next] (nav-path sp z/next z-nav-args)]
          (if (and (seq sp) ;; ensure initial selection (triggering requests)
                   (pred-fn (-> z-nav z/node)))
            (on-selection-path sp)
            (if (= sp sp-next)
              (tb/warn "next returns same selection path:" sp-next)
              (do (tb/info "jumping from:" sp "to" sp-next)
                  (on-selection-path sp-next)
                  (if (= sp-init sp-next)
                    (tb/warn "terminating search due to loop")
                    (recur sp-next))))))))))

(def nav-to-content!
  (partial nav-to-pred! #(comp some?
                               handle-opt-delay
                               (:content-fn %) (:id-fn %))))

(def nav-to-terminal!
  (partial nav-to-pred! #(comp not seq (:children-fn %))))
