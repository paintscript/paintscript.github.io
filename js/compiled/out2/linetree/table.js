// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('linetree.table');
goog.require('cljs.core');
goog.require('cljs.core.constants');
linetree.table.border_settings = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v,cljs.core.cst$kw$link], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["t b l","t r b l"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v,cljs.core.cst$kw$first], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["t r b l","r b"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v,cljs.core.cst$kw$inner], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b l","b l r"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v,cljs.core.cst$kw$last], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["l b","t r b l"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h,cljs.core.cst$kw$link], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["t r l","t r b l"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h,cljs.core.cst$kw$first], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["t r b l","r b"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h,cljs.core.cst$kw$inner], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["t r","t r b"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h,cljs.core.cst$kw$last], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r t","t r b l"], null)]);
linetree.table.skeleton = (function linetree$table$skeleton(o,line,p__9195){
var map__9196 = p__9195;
var map__9196__$1 = (((((!((map__9196 == null))))?(((((map__9196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9196):map__9196);
var l1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9196__$1,cljs.core.cst$kw$first);
var l2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9196__$1,cljs.core.cst$kw$last);
var vec__9198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(linetree.table.border_settings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,line], null));
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9198,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9198,(1),null);
var G__9201 = o;
var G__9201__$1 = (((G__9201 instanceof cljs.core.Keyword))?G__9201.fqn:null);
switch (G__9201__$1) {
case "v":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$skeleton$v,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.name(line)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$line$first,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,l], null),(cljs.core.truth_(l1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$line_DASH_label,l1], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$line$last,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,r], null),(cljs.core.truth_(l2)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$line_DASH_label,l2], null):null)], null)], null)], null)], null);

break;
case "h":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$skeleton$h,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.name(line)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$line$first,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,l], null),(cljs.core.truth_(l1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$line_DASH_label,l1], null):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$line$last,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,r], null),(cljs.core.truth_(l2)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$line_DASH_label,l2], null):null)], null)], null)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9201__$1)].join('')));

}
});
linetree.table.branches = (function linetree$table$branches(args,o,bb){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$branches,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.name(o)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__9203 = o;
var G__9203__$1 = (((G__9203 instanceof cljs.core.Keyword))?G__9203.fqn:null);
switch (G__9203__$1) {
case "v":
return cljs.core.cst$kw$tbody_GT_tr;

break;
case "h":
return cljs.core.cst$kw$tbody;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9203__$1)].join('')));

}
})(),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,b_item){
return cljs.core.with_meta((function (){var vec__9204 = ((cljs.core.map_QMARK_(b_item))?(function (){var map__9207 = b_item;
var map__9207__$1 = (((((!((map__9207 == null))))?(((((map__9207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9207):map__9207);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9207__$1,cljs.core.cst$kw$node);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9207__$1,cljs.core.cst$kw$branches);
var labels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9207__$1,cljs.core.cst$kw$labels);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,labels,branches], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b_item,cljs.core.PersistentArrayMap.EMPTY], null));
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9204,(0),null);
var ll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9204,(1),null);
var bb_sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9204,(2),null);
var h = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [linetree.table.skeleton,o,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)))?cljs.core.cst$kw$first:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(cljs.core.count(bb) - (1))))?cljs.core.cst$kw$last:cljs.core.cst$kw$inner
)),ll], null);
var tail = ((cljs.core.seq(bb_sub))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [linetree.table.tree,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$node,b,cljs.core.cst$kw$branches,bb_sub], null)], 0))], null):b);
var G__9209 = o;
var G__9209__$1 = (((G__9209 instanceof cljs.core.Keyword))?G__9209.fqn:null);
switch (G__9209__$1) {
case "v":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$branch,h,tail], null);

break;
case "h":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$branch,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,tail], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9209__$1)].join('')));

}
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["branch-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(b_item))].join('')], null));
}),bb)], null)], null);
});
linetree.table.tree = (function linetree$table$tree(var_args){
var G__9213 = arguments.length;
switch (G__9213) {
case 2:
return linetree.table.tree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return linetree.table.tree.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

linetree.table.tree.cljs$core$IFn$_invoke$arity$2 = (function (el,sub_els){
return linetree.table.tree.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$orientation,cljs.core.cst$kw$v,cljs.core.cst$kw$node,el,cljs.core.cst$kw$branches,sub_els], null));
});

linetree.table.tree.cljs$core$IFn$_invoke$arity$1 = (function (p__9214){
var map__9215 = p__9214;
var map__9215__$1 = (((((!((map__9215 == null))))?(((((map__9215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9215):map__9215);
var args = map__9215__$1;
var o = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9215__$1,cljs.core.cst$kw$orientation,cljs.core.cst$kw$v);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9215__$1,cljs.core.cst$kw$node);
var bb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9215__$1,cljs.core.cst$kw$branches);
var ll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9215__$1,cljs.core.cst$kw$labels);
var G__9217 = o;
var G__9217__$1 = (((G__9217 instanceof cljs.core.Keyword))?G__9217.fqn:null);
switch (G__9217__$1) {
case "v":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zc_DASH_linetree$zc_DASH_linetree_DASH_table$v,n,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [linetree.table.skeleton,o,cljs.core.cst$kw$link,ll], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [linetree.table.branches,args,o,bb], null)], null);

break;
case "h":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$zc_DASH_linetree$zc_DASH_linetree_DASH_table$h,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,n], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [linetree.table.skeleton,o,cljs.core.cst$kw$link,ll], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [linetree.table.branches,args,o,bb], null)], null)], null)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9217__$1)].join('')));

}
});

linetree.table.tree.cljs$lang$maxFixedArity = 2;

