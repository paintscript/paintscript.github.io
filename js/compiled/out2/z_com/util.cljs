(ns z-com.util)

(defn deref? [x] (satisfies? IDeref x))
