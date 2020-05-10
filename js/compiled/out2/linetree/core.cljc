(ns linetree.core
  (:require [linetree.flex  :as flextree]
            [linetree.table :as tabletree]))

(defn -linetree [{:as args :keys [repr] :or {repr :flex}}]
  (case repr
    :flex  [flextree/tree  args]
    :table [tabletree/tree args]))

(defn linetree [& {:as args}] [-linetree args])
