// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('paintscript.s_log');
goog.require('cljs.core');
goog.require('cljs.core.constants');
paintscript.s_log.init = (function paintscript$s_log$init(params_init,ui_init){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$i_DASH_active,(0),cljs.core.cst$kw$s_DASH_items,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$n,(1),cljs.core.cst$kw$op,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$init], null),cljs.core.cst$kw$params,params_init,cljs.core.cst$kw$ui,ui_init], null),null,(1),null))], null);
});
paintscript.s_log.undo_QMARK_ = (function paintscript$s_log$undo_QMARK_(_BANG_s_log){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$s_DASH_items.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_s_log)))),(1));
});
paintscript.s_log.op = (function paintscript$s_log$op(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17423 = arguments.length;
var i__4731__auto___17424 = (0);
while(true){
if((i__4731__auto___17424 < len__4730__auto___17423)){
args__4736__auto__.push((arguments[i__4731__auto___17424]));

var G__17425 = (i__4731__auto___17424 + (1));
i__4731__auto___17424 = G__17425;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return paintscript.s_log.op.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

paintscript.s_log.op.cljs$core$IFn$_invoke$arity$variadic = (function (_BANG_s_log,_BANG_params,_BANG_ui,op_k,p__17406){
var vec__17407 = p__17406;
var op_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17407,(0),null);
var map__17410 = cljs.core.deref(_BANG_s_log);
var map__17410__$1 = (((((!((map__17410 == null))))?(((((map__17410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17410):map__17410);
var i_active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17410__$1,cljs.core.cst$kw$i_DASH_active);
var s_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17410__$1,cljs.core.cst$kw$s_DASH_items);
var vec__17411 = (function (){var G__17418 = op_k;
var G__17418__$1 = (((G__17418 instanceof cljs.core.Keyword))?G__17418.fqn:null);
switch (G__17418__$1) {
case "undo":
var i = (i_active + (1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s_items,i),s_items], null)], null);

break;
case "activate":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op_arg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s_items,op_arg),s_items], null)], null);

break;
case "preview":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_active,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s_items,op_arg),s_items], null)], null);

break;
case "clear":
case "clear<":
case "clear>":
var s = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s_items,i_active),cljs.core.cst$kw$n,(1));
var vec__17419 = (function (){var G__17422 = op_k;
var G__17422__$1 = (((G__17422 instanceof cljs.core.Keyword))?G__17422.fqn:null);
switch (G__17422__$1) {
case "clear":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(new cljs.core.List(null,s,null,(1),null))], null);

break;
case "clear<":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_active,(function (){var n_keep = (i_active + (1));
var n_drop = (cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s_items)) - n_keep);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (n_keep,n_drop,G__17422,G__17422__$1,s,G__17418,G__17418__$1,map__17410,map__17410__$1,i_active,s_items,vec__17407,op_arg){
return (function (p1__17400_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__17400_SHARP_,cljs.core.cst$kw$n,cljs.core._,n_drop);
});})(n_keep,n_drop,G__17422,G__17422__$1,s,G__17418,G__17418__$1,map__17410,map__17410__$1,i_active,s_items,vec__17407,op_arg))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n_keep,s_items));
})()], null);

break;
case "clear>":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(i_active,s_items)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17422__$1)].join('')));

}
})();
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17419,(0),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17419,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,ss], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17418__$1)].join('')));

}
})();
var i_active_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17411,(0),null);
var vec__17414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17411,(1),null);
var s_active_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17414,(0),null);
var s_items_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17414,(1),null);
cljs.core.reset_BANG_(_BANG_s_log,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$i_DASH_active,i_active_SINGLEQUOTE_,cljs.core.cst$kw$s_DASH_items,s_items_SINGLEQUOTE_], null));

cljs.core.reset_BANG_(_BANG_params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(s_active_SINGLEQUOTE_));

return cljs.core.reset_BANG_(_BANG_ui,cljs.core.cst$kw$ui.cljs$core$IFn$_invoke$arity$1(s_active_SINGLEQUOTE_));
});

paintscript.s_log.op.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
paintscript.s_log.op.cljs$lang$applyTo = (function (seq17401){
var G__17402 = cljs.core.first(seq17401);
var seq17401__$1 = cljs.core.next(seq17401);
var G__17403 = cljs.core.first(seq17401__$1);
var seq17401__$2 = cljs.core.next(seq17401__$1);
var G__17404 = cljs.core.first(seq17401__$2);
var seq17401__$3 = cljs.core.next(seq17401__$2);
var G__17405 = cljs.core.first(seq17401__$3);
var seq17401__$4 = cljs.core.next(seq17401__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17402,G__17403,G__17404,G__17405,seq17401__$4);
});

paintscript.s_log.items = (function paintscript$s_log$items(_BANG_s_log){
var map__17428 = cljs.core.deref(_BANG_s_log);
var map__17428__$1 = (((((!((map__17428 == null))))?(((((map__17428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17428):map__17428);
var i_active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17428__$1,cljs.core.cst$kw$i_DASH_active);
var s_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17428__$1,cljs.core.cst$kw$s_DASH_items);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_active,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,s_items)], null);
});
paintscript.s_log.add = (function paintscript$s_log$add(_BANG_s_log,s_item){
var map__17430 = cljs.core.deref(_BANG_s_log);
var map__17430__$1 = (((((!((map__17430 == null))))?(((((map__17430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17430):map__17430);
var s_log = map__17430__$1;
var vec__17431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17430__$1,cljs.core.cst$kw$s_DASH_items);
var map__17434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17431,(0),null);
var map__17434__$1 = (((((!((map__17434 == null))))?(((((map__17434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17434):map__17434);
var s_curr = map__17434__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17434__$1,cljs.core.cst$kw$n);
var s_items = vec__17431;
return cljs.core.reset_BANG_(_BANG_s_log,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$i_DASH_active,(0),cljs.core.cst$kw$s_DASH_items,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$set_DASH_sel_DASH_d,cljs.core.first(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(s_curr)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(s_item))], 0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sel.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ui.cljs$core$IFn$_invoke$arity$1(s_curr)),cljs.core.cst$kw$sel.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ui.cljs$core$IFn$_invoke$arity$1(s_item))))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s_items),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s_item,cljs.core.cst$kw$n,n)):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s_items,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s_item,cljs.core.cst$kw$n,(n + (1)))))], null));
});
