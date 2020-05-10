(ns navtree.zipper
  (:require [clojure.zip :as z]
            [taoensso.timbre :as tb]))

(defn z-nav [tree id-fn children-fn]
  (z/zipper id-fn children-fn #() tree))

(defn z-nav->id-path [zn id-fn]
  (-> (map id-fn (z/path zn))
      (concat [(-> zn z/node id-fn)])))

(defn id-path->z-nav
  [tree id-fn children-fn path-list]
  (reduce
    (fn [zn node-id]
      (loop [zn (some-> zn z/down)]
        (when zn
          (if (= node-id (-> zn z/node id-fn))
            zn
            (recur (z/right zn))))))
    (z-nav tree id-fn children-fn)
    (rest path-list)))

(defn find-id-path-to-id
  [tree id-fn children-fn id]
  (loop [zn (z-nav tree id-fn children-fn)]
    (cond (= id (-> zn z/node id-fn))
          (z-nav->id-path zn id-fn)

          :else
          (let [zn-next (z/next zn)]
            (when-not ;; guard against infinite recursion
              (= (id-fn tree) (-> zn-next z/node id-fn))
              (recur zn-next))))))
