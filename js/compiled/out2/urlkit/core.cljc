(ns urlkit.core
  #?(:clj (:import (java.net URLEncoder URLDecoder)))
  (:require [clojure.string :as string]
            [clojure.walk :refer [keywordize-keys]]
            #?(:cljs [cljs.reader :refer [read-string]])
            #?(:cljs [goog.Uri :as uri])))

(defrecord URL [protocol domain port path query fragment])

(def url-object-ctor #?(:clj #(java.net.URL. %) :cljs #(goog.Uri. %)))

(defn opt-read-string [x]
  (cond-> x
          (and (string? x) (not (string/blank? x)))
          read-string))

(defn opt-name [x] (cond-> x (keyword? x) name))

(defn encode-url
  ([string] (encode-url string "UTF-8"))
  ([string encoding]
   (some-> string str
           #?(:clj  (URLEncoder/encode encoding)
              :cljs (js/encodeURIComponent)))))

(defn decode-url
  ([string] (decode-url string "UTF-8"))
  ([string encoding]
   (some-> string str
           #?(:clj  (URLDecoder/decode encoding)
              :cljs (js/decodeURIComponent)))))

(defn parse-query
  [query-string & {:keys [keywordize-keys? edn-vals?]}]
  (some->> (when-not (string/blank? query-string)
             (string/split query-string #"&"))
           (map (fn [kv]
                  (->> (string/split kv #"=")
                       (mapv decode-url)
                       ((fn [[k v :as args]]
                          [(cond-> k keywordize-keys? keyword)
                           (case (count args)
                             2 (cond-> v edn-vals? opt-read-string)
                             1 true)])))))
           (into {})))

(defn serialize-query
  [query-map & {:keys [edn-vals?]}]
  (let [v-fn (if edn-vals? pr-str str)]
    (some->> (or query-map {})
             sort
             (map (fn [[k v]] (str (-> k opt-name encode-url) "="
                                   (-> v v-fn     encode-url))))
             (string/join "&"))))

(defn parse-url
  [url-str & {:as opts :keys [keywordize-keys?]}]
  (let [url-obj (url-object-ctor url-str)]
    (map->URL
      {:protocol #?(:clj  (.getProtocol url-obj)
                    :cljs (.getScheme   url-obj))

       :domain   #?(:clj  (.getHost   url-obj)
                    :cljs (.getDomain url-obj))

       :port     #?(:clj  (.getPort url-obj)
                    :cljs (.getPort url-obj))

       :path     (.getPath url-obj)

       :query    (let [q (.getQuery url-obj)]
                   (when-not (string/blank? q)
                     (parse-query q :keywordize-keys? keywordize-keys?)))

       :fragment #?(:clj  (.getRef      url-obj)
                    :cljs (.getFragment url-obj))})))

(defn serialize-url
  [url-rec]
  (str (:protocol url-rec) "://"
       (:domain url-rec)
       (let [p (:port url-rec)] (when (pos? p) (str ":" p)))
       (:path url-rec)
       (some->> url-rec :query    serialize-query (str "?"))
       (some->> url-rec :fragment (str "#"))))
