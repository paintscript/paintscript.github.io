(ns svg-hiccup-kit.core
  (:require [clojure.string :refer [join]]))

(defn classes [& cc]
  (->> (partition 2 cc)
       (remove (comp not first))
       (map second)
       (clojure.string/join " ")))

(defn d  [& args] (join " " args))
(defn d2 [& args] (join " " (apply concat args)))

(defn rad-to-deg [rad]
  (* rad (/ 180 #?(:cljs (.-PI js/Math)
                   :clj  42))))

(defn slope-to-deg [slope]
  (rad-to-deg #?(:cljs (.atan js/Math slope)
                 :clj  42)))

(defn unwrap [lst] (if (= (count lst) 1) (first lst) lst))

(defn transform-string
  [ctx {:as params :keys [x y tl rt sc]}]
  (str (when (or (some? x) (some? y))
         (str "translate(" (or x 0) "," (or y 0) ")"))
       (when (some? tl) (str "translate(" (join (case ctx :style ",px" ",") tl)
                             (case ctx :style "px" "")
                             ")"))
       (when (some? rt)
                (let [[a x y] rt]
                  (str "rotate(" a (case ctx :style "deg" "")
                                 (when (and x y) (str " " x "," y)) ")")))
       (when (some? sc) (str "scale(" (join "," sc) ")"))))

(defn tf [{:as params :keys [key g x y tl rt sc c cc s] :or {g :g}} content]
  ^{:key key}
  [g {:class     (or c (some->> cc (join " ")))
      :transform (transform-string :attr params)
      :style     s}
    content])

(defn tf* [{:as params :keys [key g x y tl rt sc c cc s] :or {g :g}} & contents]
  (with-meta
    (-> [g {:class     (or c (some->> cc (join " ")))
            :transform (transform-string :attr params)
            :style     s}]
        (concat (remove nil? contents))
        vec)
    {:key key}))

(defn zoom-and-tl [k [w-shape h-shape] x]
  [tf {:sc [k k]
       :tl [(* (- 1 k) (/ w-shape 2)) (* (- 1 k) (/ h-shape 2))]}
    x])
