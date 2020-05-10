// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('linetree.flex');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('linetree.table');
linetree.flex.skeleton = (function linetree$flex$skeleton(o,line,p__9222){
var map__9223 = p__9222;
var map__9223__$1 = (((((!((map__9223 == null))))?(((((map__9223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9223):map__9223);
var l1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9223__$1,cljs.core.cst$kw$first);
var l2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9223__$1,cljs.core.cst$kw$last);
var vec__9225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(linetree.table.border_settings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,line], null));
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9225,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9225,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$skeleton,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$cells,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.name(line)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$line,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.name(o)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l)].join('')], null),(cljs.core.truth_(l1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$line_DASH_label,l1], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$line,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.name(o)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('')], null),(cljs.core.truth_(l2)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$line_DASH_label,l2], null):null)], null)], null)], null);
});
linetree.flex.branches = (function linetree$flex$branches(args,o,bb){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$branches,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.name(o)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,b_item){
var vec__9228 = ((cljs.core.map_QMARK_(b_item))?(function (){var map__9231 = b_item;
var map__9231__$1 = (((((!((map__9231 == null))))?(((((map__9231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9231):map__9231);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9231__$1,cljs.core.cst$kw$node);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9231__$1,cljs.core.cst$kw$branches);
var labels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9231__$1,cljs.core.cst$kw$labels);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,labels,branches], null);
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b_item,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY], null));
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9228,(0),null);
var ll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9228,(1),null);
var bb_sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9228,(2),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$branch,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [linetree.flex.skeleton,o,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(bb)))?cljs.core.cst$kw$link:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)))?cljs.core.cst$kw$first:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(cljs.core.count(bb) - (1))))?cljs.core.cst$kw$last:cljs.core.cst$kw$inner
))),ll], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$el,((cljs.core.seq(bb_sub))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [linetree.flex.tree,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$node,b,cljs.core.cst$kw$branches,bb_sub], null)], 0))], null):b)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["branch-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(b))].join('')], null));
}),bb)], null);
});
linetree.flex.tree = (function linetree$flex$tree(var_args){
var G__9234 = arguments.length;
switch (G__9234) {
case 2:
return linetree.flex.tree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return linetree.flex.tree.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

linetree.flex.tree.cljs$core$IFn$_invoke$arity$2 = (function (n,bb){
return linetree.flex.tree.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$orientation,cljs.core.cst$kw$v,cljs.core.cst$kw$node,n,cljs.core.cst$kw$branches,bb], null));
});

linetree.flex.tree.cljs$core$IFn$_invoke$arity$1 = (function (p__9235){
var map__9236 = p__9235;
var map__9236__$1 = (((((!((map__9236 == null))))?(((((map__9236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9236):map__9236);
var args = map__9236__$1;
var o = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9236__$1,cljs.core.cst$kw$orientation,cljs.core.cst$kw$v);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9236__$1,cljs.core.cst$kw$node);
var bb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9236__$1,cljs.core.cst$kw$branches);
var ll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9236__$1,cljs.core.cst$kw$labels);
var stretched_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9236__$1,cljs.core.cst$kw$stretched_QMARK_);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zc_DASH_linetree$zc_DASH_linetree_DASH_flex,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.name(o),(cljs.core.truth_(stretched_QMARK_)?"-stretched":null)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$el,n], null),((cljs.core.seq(bb))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [linetree.flex.skeleton,o,cljs.core.cst$kw$link,ll], null):null),((cljs.core.seq(bb))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [linetree.flex.branches,args,o,bb], null):null)], null);
});

linetree.flex.tree.cljs$lang$maxFixedArity = 2;

