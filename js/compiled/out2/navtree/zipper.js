// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('navtree.zipper');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.zip');
goog.require('taoensso.timbre');
navtree.zipper.z_nav = (function navtree$zipper$z_nav(tree,id_fn,children_fn){
return clojure.zip.zipper(id_fn,children_fn,(function (){
return cljs.core.List.EMPTY;
}),tree);
});
navtree.zipper.z_nav__GT_id_path = (function navtree$zipper$z_nav__GT_id_path(zn,id_fn){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,clojure.zip.path(zn)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16895 = clojure.zip.node(zn);
return (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(G__16895) : id_fn.call(null,G__16895));
})()], null));
});
navtree.zipper.id_path__GT_z_nav = (function navtree$zipper$id_path__GT_z_nav(tree,id_fn,children_fn,path_list){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (zn,node_id){
var zn__$1 = (function (){var G__16896 = zn;
if((G__16896 == null)){
return null;
} else {
return clojure.zip.down(G__16896);
}
})();
while(true){
if(cljs.core.truth_(zn__$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_id,(function (){var G__16897 = clojure.zip.node(zn__$1);
return (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(G__16897) : id_fn.call(null,G__16897));
})())){
return zn__$1;
} else {
var G__16898 = clojure.zip.right(zn__$1);
zn__$1 = G__16898;
continue;
}
} else {
return null;
}
break;
}
}),navtree.zipper.z_nav(tree,id_fn,children_fn),cljs.core.rest(path_list));
});
navtree.zipper.find_id_path_to_id = (function navtree$zipper$find_id_path_to_id(tree,id_fn,children_fn,id){
var zn = navtree.zipper.z_nav(tree,id_fn,children_fn);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,(function (){var G__16899 = clojure.zip.node(zn);
return (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(G__16899) : id_fn.call(null,G__16899));
})())){
return navtree.zipper.z_nav__GT_id_path(zn,id_fn);
} else {
var zn_next = clojure.zip.next(zn);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(tree) : id_fn.call(null,tree)),(function (){var G__16900 = clojure.zip.node(zn_next);
return (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(G__16900) : id_fn.call(null,G__16900));
})())){
return null;
} else {
var G__16901 = zn_next;
zn = G__16901;
continue;
}

}
break;
}
});
