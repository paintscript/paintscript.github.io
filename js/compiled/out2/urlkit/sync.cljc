(ns urlkit.sync
  #?(:cljs (:require-macros [urlkit.sync :refer [opt-set!]]))
  (:require [clojure.spec.alpha :as s :refer [fdef]]
            [clojure.spec.test.alpha :refer [instrument]]
            [clojure.string :as str]
            [urlkit.core :as uk]
            #?@(:cljs [[goog.events :as events]
                       [goog.history.EventType :as EventType]]))
  #?(:cljs (:import goog.History)))

(s/def ::config
  (s/keys :req-un [::state-to-url]
          :opt-un [::on-url!
                   ::url-to-state
                   ::state-atom
                   ::watch-url?
                   ::watch-state?
                   ::update-state?
                   ::update-state!]))

(s/def ::on-url!       fn?)
(s/def ::url-to-state  fn?)
(s/def ::state-to-url  fn?)
(s/def ::watch-url?    boolean?)
(s/def ::watch-state?  boolean?)

(s/def ::update-state? boolean?)
(s/def ::update-state! fn?)

(s/def ::state-atom #(satisfies? #?(:cljs IAtom :clj clojure.lang.IAtom) %))

(def ^:private url-sync-config-defaults
  {:watch-url? true
   :watch-state? true})

(defonce ^:private url-sync-config (atom nil))
(defonce ^:private ignore-next     (atom nil))

(defn- prefix-dispatcher [url kvs]
  (let [url-rec (uk/parse-url url)]
    (->> (partition 2 kvs)
         (filter (fn [[[target prefix] cfg]]
                   (str/starts-with? (get url-rec target) prefix)))
         first
         second)))

#?(:cljs
   (defn- register-href-dispatcher! [h-obj on-url!]
     (doto h-obj
           (events/listen
            EventType/NAVIGATE
            (fn [ev]
              (let [url-full (.. ev -target -window_ -location -href)
                    [target url-prev] @ignore-next
                    url-cpr (case (or target :href)
                              :href url-full
                              :hash (subs (.. ev -target -window_ -location -hash) 1))]
                (when-not (= url-prev url-cpr)
                  (on-url! url-full))
                (reset! ignore-next nil))))
           (.setEnabled true))))

(defmacro ^:private opt-set! [var-sym upd val-next]
  `(let [var-val# (~upd ~var-sym)]
     (when-not (= var-val# ~val-next)
       (set! ~var-sym ~val-next))))

(defn update-state!
  #?(:cljs ([] (update-state! js/document.location.href)))
  ([url]
   (let [{:keys [on-url!]} @url-sync-config]
     (on-url! url))))

#?(:cljs
   (defn update-url!
     "Update the URL to reflect the given `state-expr`"
     [state-expr & {:keys [update-state?]}]
     (let [{:keys [state-to-url update-state!]} @url-sync-config]
       (when-let [url-expr (state-to-url state-expr)]
         (let [[target-k url] (if (vector? url-expr) url-expr [:href url-expr])]
           (when update-state? (update-state! state-expr))
           (when (case target-k
                   :hash (opt-set! (.. js/window -location -hash) #(subs % 1) url)
                   :href (opt-set! (.. js/window -location -href) identity    url))
             (reset! ignore-next [target-k url])))))))

#?(:cljs
   (fdef init!* :args (s/cat :c ::config)))

(defn- derive--on-url!
  [{:as c :keys [state-atom on-url! url-to-state update-state!]}]
  (or on-url!
      (if update-state!
        (if state-atom
          (fn [url] (update-state! (url-to-state url @state-atom)))
          (fn [url] (update-state! (url-to-state url))))
        (fn [url] (swap! state-atom #(url-to-state url %))))))

(defn preproc-config [c]
  {:pre [(or (:on-url! c)
             (and (:url-to-state c)
                  (or (:update-state! c)
                      (:state-atom c))))]}
  (-> c (assoc :on-url! (derive--on-url! c))))

#?(:cljs
   (defn init!* [c]
     (swap! url-sync-config
            (fn [c-prev]
              (let [c (preproc-config c)
                    _ (s/assert ::config c)
                    c (if (:watch-url? c)
                        (let [h-obj (if-let [h-obj (:history-obj c-prev)]
                                      (doto h-obj (.removeAllListeners))
                                      (History.))]
                          (register-href-dispatcher! h-obj (:on-url! c))
                          (assoc c :history-obj h-obj))
                        c)
                    _ (when (:watch-state? c)
                        (let [s (:state-atom c)]
                          (some-> c-prev :state-atom (remove-watch :url-sync-watch))
                          (add-watch s :url-sync-watch #(update-url! %4))))]
                c)))))

#?(:cljs (defn init! [cfg]
           (init!* (merge url-sync-config-defaults cfg))))
