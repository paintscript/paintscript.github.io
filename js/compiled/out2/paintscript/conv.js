// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('paintscript.conv');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.reader');
paintscript.conv.path_d__GT_els_str = (function paintscript$conv$path_d__GT_els_str(s){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(s,/\-?\d+\.?\d*e\-\d+/,"0"),/,/," "),/-/," -"),/([a-zA-Z])/,"\n$1 "),/\s+([\-\d\.]+)\s+([\-\d\.]+)/," [$1 $2]"),/([a-zA-Z])([^\n]*)/,"[:$1 $2]");
});
paintscript.conv.post_proc_els = (function paintscript$conv$post_proc_els(els){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__17388){
var vec__17389 = p__17388;
var seq__17390 = cljs.core.seq(vec__17389);
var first__17391 = cljs.core.first(seq__17390);
var seq__17390__$1 = cljs.core.next(seq__17390);
var k = first__17391;
var args = seq__17390__$1;
var el = vec__17389;
var G__17392 = k;
var G__17392__$1 = (((G__17392 instanceof cljs.core.Keyword))?G__17392.fqn:null);
switch (G__17392__$1) {
case "c":
case "C":
if((cljs.core.count(args) > (3))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__17392,G__17392__$1,vec__17389,seq__17390,first__17391,seq__17390__$1,k,args,el){
return (function (p1__17387_SHARP_){
return cljs.core.vec(cljs.core.cons(k,p1__17387_SHARP_));
});})(G__17392,G__17392__$1,vec__17389,seq__17390,first__17391,seq__17390__$1,k,args,el))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),args));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null);
}

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null);

}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([els], 0));
});
paintscript.conv.path_d__GT_els = (function paintscript$conv$path_d__GT_els(s){
return cljs.core.vec(paintscript.conv.post_proc_els(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(paintscript.conv.path_d__GT_els_str(s)),"]"].join(''))));
});
paintscript.conv.path_d__GT_path = (function paintscript$conv$path_d__GT_path(s){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.PersistentArrayMap.EMPTY], null),paintscript.conv.path_d__GT_els(s)));
});
paintscript.conv.path_d__GT_script = (function paintscript$conv$path_d__GT_script(s){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$script,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.conv.path_d__GT_path(s)], null)], null);
});
paintscript.conv.points__GT_els = (function paintscript$conv$points__GT_els(s){
var vec__17395 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__17394_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.reader.read_string,clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__17394_SHARP_,/,/));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/ /));
var seq__17396 = cljs.core.seq(vec__17395);
var first__17397 = cljs.core.first(seq__17396);
var seq__17396__$1 = cljs.core.next(seq__17396);
var xy0 = first__17397;
var xy_STAR_ = seq__17396__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$M,xy0], null),cljs.core.vec(cljs.core.cons(cljs.core.cst$kw$L,xy_STAR_))], null);
});
