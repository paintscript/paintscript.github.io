// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('linetree.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('linetree.flex');
goog.require('linetree.table');
linetree.core._linetree = (function linetree$core$_linetree(p__9241){
var map__9242 = p__9241;
var map__9242__$1 = (((((!((map__9242 == null))))?(((((map__9242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9242):map__9242);
var args = map__9242__$1;
var repr = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9242__$1,cljs.core.cst$kw$repr,cljs.core.cst$kw$flex);
var G__9244 = repr;
var G__9244__$1 = (((G__9244 instanceof cljs.core.Keyword))?G__9244.fqn:null);
switch (G__9244__$1) {
case "flex":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [linetree.flex.tree,args], null);

break;
case "table":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [linetree.table.tree,args], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9244__$1)].join('')));

}
});
linetree.core.linetree = (function linetree$core$linetree(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9250 = arguments.length;
var i__4731__auto___9251 = (0);
while(true){
if((i__4731__auto___9251 < len__4730__auto___9250)){
args__4736__auto__.push((arguments[i__4731__auto___9251]));

var G__9252 = (i__4731__auto___9251 + (1));
i__4731__auto___9251 = G__9252;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return linetree.core.linetree.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

linetree.core.linetree.cljs$core$IFn$_invoke$arity$variadic = (function (p__9247){
var map__9248 = p__9247;
var map__9248__$1 = (((((!((map__9248 == null))))?(((((map__9248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9248):map__9248);
var args = map__9248__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [linetree.core._linetree,args], null);
});

linetree.core.linetree.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
linetree.core.linetree.cljs$lang$applyTo = (function (seq9246){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9246));
});

