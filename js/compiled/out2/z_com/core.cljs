(ns z-com.core
  (:require [elastic-input.core :as ei]
            [linetree.core :as lt]
            [menu.core :as m]
            [navtree.core :as nt]
            [panel.core :as p]
            [xd-table.core :as xdt]
            [zc-split.core :as sp]))

(def elastic-input  ei/elastic-input)
(def elastic-input* ei/elastic-input*)
(def input-text     ei/elastic-input)
(def input-text*    ei/elastic-input*)

(def linetree lt/linetree)
(def -linetree lt/-linetree)

(def button m/button)
(def button* m/button*)
(def button-row m/button-row)
(def button-group m/button-group)
(def sectionmenu m/sectionmenu)
(def submenu m/submenu)
(def menu  m/menu)
(def menu* m/menu*)

(def navtree  nt/navtree)
(def navtree* nt/navtree*)

(def panel p/panel)
(def panel-accordion p/panel-accordion)

(def xd-table xdt/xd-table)
(def xd-table* xdt/xd-table*)

(def split  sp/split)
(def split* sp/split*)
