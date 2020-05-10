// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('paintscript.el');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('paintscript.util');
paintscript.el.flip_bin = (function paintscript$el$flip_bin(n){
var G__7605 = n;
switch (G__7605) {
case (0):
return (1);

break;
default:
return (0);

}
});
paintscript.el.has_cp_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$C1,null,cljs.core.cst$kw$q,null,cljs.core.cst$kw$Q,null,cljs.core.cst$kw$C,null,cljs.core.cst$kw$s,null,cljs.core.cst$kw$c,null,cljs.core.cst$kw$c1,null,cljs.core.cst$kw$S,null], null), null);
paintscript.el.relative_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$q,null,cljs.core.cst$kw$v,null,cljs.core.cst$kw$m,null,cljs.core.cst$kw$s,null,cljs.core.cst$kw$l,null,cljs.core.cst$kw$c,null,cljs.core.cst$kw$c1,null,cljs.core.cst$kw$h,null,cljs.core.cst$kw$t,null], null), null);
paintscript.el.absolute_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$kw$C1,null,cljs.core.cst$kw$L,null,cljs.core.cst$kw$M,null,cljs.core.cst$kw$arc,null,cljs.core.cst$kw$Q,null,cljs.core.cst$kw$T,null,cljs.core.cst$kw$C,null,cljs.core.cst$kw$z,null,cljs.core.cst$kw$H,null,cljs.core.cst$kw$V,null,cljs.core.cst$kw$S,null], null), null);
paintscript.el.full_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$q,null,cljs.core.cst$kw$L,null,cljs.core.cst$kw$M,null,cljs.core.cst$kw$Q,null,cljs.core.cst$kw$m,null,cljs.core.cst$kw$C,null,cljs.core.cst$kw$l,null,cljs.core.cst$kw$z,null,cljs.core.cst$kw$c,null], null), null);
paintscript.el.short_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$kw$C1,null,cljs.core.cst$kw$v,null,cljs.core.cst$kw$arc,null,cljs.core.cst$kw$T,null,cljs.core.cst$kw$s,null,cljs.core.cst$kw$c1,null,cljs.core.cst$kw$h,null,cljs.core.cst$kw$t,null,cljs.core.cst$kw$H,null,cljs.core.cst$kw$V,null,cljs.core.cst$kw$S,null], null), null);
paintscript.el.el_QMARK_ = clojure.set.union.cljs$core$IFn$_invoke$arity$2(paintscript.el.relative_QMARK_,paintscript.el.absolute_QMARK_);
paintscript.el.ref_QMARK_ = (function paintscript$el$ref_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ref,cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,(0)))));
});
paintscript.el.dispatch_on_k = (function paintscript$el$dispatch_on_k(var_args){
var args__4736__auto__ = [];
var len__4730__auto___7613 = arguments.length;
var i__4731__auto___7614 = (0);
while(true){
if((i__4731__auto___7614 < len__4730__auto___7613)){
args__4736__auto__.push((arguments[i__4731__auto___7614]));

var G__7615 = (i__4731__auto___7614 + (1));
i__4731__auto___7614 = G__7615;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return paintscript.el.dispatch_on_k.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

paintscript.el.dispatch_on_k.cljs$core$IFn$_invoke$arity$variadic = (function (p__7609,_){
var vec__7610 = p__7609;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7610,(0),null);
return k;
});

paintscript.el.dispatch_on_k.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
paintscript.el.dispatch_on_k.cljs$lang$applyTo = (function (seq7607){
var G__7608 = cljs.core.first(seq7607);
var seq7607__$1 = cljs.core.next(seq7607);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7608,seq7607__$1);
});

paintscript.el.flip_c2 = (function paintscript$el$flip_c2(c2,tgt){
var delta = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._,tgt,c2);
return (paintscript.util.v_PLUS_.cljs$core$IFn$_invoke$arity$2 ? paintscript.util.v_PLUS_.cljs$core$IFn$_invoke$arity$2(tgt,delta) : paintscript.util.v_PLUS_.call(null,tgt,delta));
});
if((typeof paintscript !== 'undefined') && (typeof paintscript.el !== 'undefined') && (typeof paintscript.el.rel__GT_abs !== 'undefined')){
} else {
paintscript.el.rel__GT_abs = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__7616 = cljs.core.get_global_hierarchy;
return (fexpr__7616.cljs$core$IFn$_invoke$arity$0 ? fexpr__7616.cljs$core$IFn$_invoke$arity$0() : fexpr__7616.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("paintscript.el","rel->abs"),paintscript.el.dispatch_on_k,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
paintscript.el.rel__GT_abs.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$c,(function (p__7618,tgt_prev,_cp_prev){
var vec__7619 = p__7618;
var seq__7620 = cljs.core.seq(vec__7619);
var first__7621 = cljs.core.first(seq__7620);
var seq__7620__$1 = cljs.core.next(seq__7620);
var _k = first__7621;
var pnts = seq__7620__$1;
var elv = vec__7619;
var vec__7622 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__7619,seq__7620,first__7621,seq__7620__$1,_k,pnts,elv){
return (function (p1__7617_SHARP_){
return (paintscript.util.v_PLUS_.cljs$core$IFn$_invoke$arity$2 ? paintscript.util.v_PLUS_.cljs$core$IFn$_invoke$arity$2(p1__7617_SHARP_,tgt_prev) : paintscript.util.v_PLUS_.call(null,p1__7617_SHARP_,tgt_prev));
});})(vec__7619,seq__7620,first__7621,seq__7620__$1,_k,pnts,elv))
,pnts);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7622,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7622,(1),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7622,(2),null);
var pnts_SINGLEQUOTE_ = vec__7622;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$C,c1,c2,tgt], null),tgt,c2], null);
}));
paintscript.el.rel__GT_abs.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$s,(function (p__7626,tgt_prev,cp_prev){
var vec__7627 = p__7626;
var seq__7628 = cljs.core.seq(vec__7627);
var first__7629 = cljs.core.first(seq__7628);
var seq__7628__$1 = cljs.core.next(seq__7628);
var _k = first__7629;
var pnts = seq__7628__$1;
var elv = vec__7627;
var vec__7630 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__7627,seq__7628,first__7629,seq__7628__$1,_k,pnts,elv){
return (function (p1__7625_SHARP_){
return (paintscript.util.v_PLUS_.cljs$core$IFn$_invoke$arity$2 ? paintscript.util.v_PLUS_.cljs$core$IFn$_invoke$arity$2(p1__7625_SHARP_,tgt_prev) : paintscript.util.v_PLUS_.call(null,p1__7625_SHARP_,tgt_prev));
});})(vec__7627,seq__7628,first__7629,seq__7628__$1,_k,pnts,elv))
,pnts);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7630,(0),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7630,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$S,c2,tgt], null),tgt,c2], null);
}));
paintscript.el.rel__GT_abs.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$q,(function (p__7634,tgt_prev,_cp_prev){
var vec__7635 = p__7634;
var seq__7636 = cljs.core.seq(vec__7635);
var first__7637 = cljs.core.first(seq__7636);
var seq__7636__$1 = cljs.core.next(seq__7636);
var _k = first__7637;
var pnts = seq__7636__$1;
var elv = vec__7635;
var vec__7638 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__7635,seq__7636,first__7637,seq__7636__$1,_k,pnts,elv){
return (function (p1__7633_SHARP_){
return (paintscript.util.v_PLUS_.cljs$core$IFn$_invoke$arity$2 ? paintscript.util.v_PLUS_.cljs$core$IFn$_invoke$arity$2(p1__7633_SHARP_,tgt_prev) : paintscript.util.v_PLUS_.call(null,p1__7633_SHARP_,tgt_prev));
});})(vec__7635,seq__7636,first__7637,seq__7636__$1,_k,pnts,elv))
,pnts);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7638,(0),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7638,(1),null);
var pnts_SINGLEQUOTE_ = vec__7638;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Q,c1,tgt], null),tgt,c1], null);
}));
paintscript.el.rel__GT_abs.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$t,(function (p__7642,tgt_prev,cp_prev){
var vec__7643 = p__7642;
var seq__7644 = cljs.core.seq(vec__7643);
var first__7645 = cljs.core.first(seq__7644);
var seq__7644__$1 = cljs.core.next(seq__7644);
var _k = first__7645;
var pnts = seq__7644__$1;
var elv = vec__7643;
var vec__7646 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__7643,seq__7644,first__7645,seq__7644__$1,_k,pnts,elv){
return (function (p1__7641_SHARP_){
return (paintscript.util.v_PLUS_.cljs$core$IFn$_invoke$arity$2 ? paintscript.util.v_PLUS_.cljs$core$IFn$_invoke$arity$2(p1__7641_SHARP_,tgt_prev) : paintscript.util.v_PLUS_.call(null,p1__7641_SHARP_,tgt_prev));
});})(vec__7643,seq__7644,first__7645,seq__7644__$1,_k,pnts,elv))
,pnts);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7646,(0),null);
var c1 = paintscript.el.flip_c2(cp_prev,tgt_prev);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$T,tgt], null),tgt,c1], null);
}));
paintscript.el.rel__GT_abs__pnt_seq = (function paintscript$el$rel__GT_abs__pnt_seq(tgt_prev,pnt_seq){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__7649,v_rel){
var vec__7650 = p__7649;
var vv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7650,(0),null);
var tgt_prev__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7650,(1),null);
var v_abs = (paintscript.util.v_PLUS_.cljs$core$IFn$_invoke$arity$2 ? paintscript.util.v_PLUS_.cljs$core$IFn$_invoke$arity$2(v_rel,tgt_prev__$1) : paintscript.util.v_PLUS_.call(null,v_rel,tgt_prev__$1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vv,v_abs),v_abs], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,tgt_prev], null),pnt_seq));
});
paintscript.el.rel__GT_abs.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$l,(function (p__7653,tgt_prev,_){
var vec__7654 = p__7653;
var seq__7655 = cljs.core.seq(vec__7654);
var first__7656 = cljs.core.first(seq__7655);
var seq__7655__$1 = cljs.core.next(seq__7655);
var _k = first__7656;
var pnts = seq__7655__$1;
var elv = vec__7654;
var pnts_SINGLEQUOTE_ = paintscript.el.rel__GT_abs__pnt_seq(tgt_prev,pnts);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.cons(cljs.core.cst$kw$L,pnts_SINGLEQUOTE_)),cljs.core.last(pnts_SINGLEQUOTE_),null], null);
}));
paintscript.el.rel__GT_abs.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$v,(function (p__7657,tgt_prev,_){
var vec__7658 = p__7657;
var seq__7659 = cljs.core.seq(vec__7658);
var first__7660 = cljs.core.first(seq__7659);
var seq__7659__$1 = cljs.core.next(seq__7659);
var _k = first__7660;
var pnts = seq__7659__$1;
var elv = vec__7658;
var pnts_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,paintscript.el.rel__GT_abs__pnt_seq(tgt_prev,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__7658,seq__7659,first__7660,seq__7659__$1,_k,pnts,elv){
return (function (y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null);
});})(vec__7658,seq__7659,first__7660,seq__7659__$1,_k,pnts,elv))
,pnts)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.cons(cljs.core.cst$kw$V,pnts_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.last(pnts_SINGLEQUOTE_)], null),null], null);
}));
paintscript.el.rel__GT_abs.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$h,(function (p__7661,tgt_prev,_){
var vec__7662 = p__7661;
var seq__7663 = cljs.core.seq(vec__7662);
var first__7664 = cljs.core.first(seq__7663);
var seq__7663__$1 = cljs.core.next(seq__7663);
var _k = first__7664;
var pnts = seq__7663__$1;
var elv = vec__7662;
var pnts_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,paintscript.el.rel__GT_abs__pnt_seq(tgt_prev,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__7662,seq__7663,first__7664,seq__7663__$1,_k,pnts,elv){
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null);
});})(vec__7662,seq__7663,first__7664,seq__7663__$1,_k,pnts,elv))
,pnts)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.cons(cljs.core.cst$kw$H,pnts_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(pnts_SINGLEQUOTE_),(0)], null),null], null);
}));
paintscript.el.rel__GT_abs.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$m,(function (p__7665,tgt_prev,_){
var vec__7666 = p__7665;
var seq__7667 = cljs.core.seq(vec__7666);
var first__7668 = cljs.core.first(seq__7667);
var seq__7667__$1 = cljs.core.next(seq__7667);
var _k = first__7668;
var pnts = seq__7667__$1;
var elv = vec__7666;
var pnts_SINGLEQUOTE_ = paintscript.el.rel__GT_abs__pnt_seq(tgt_prev,pnts);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.cons(cljs.core.cst$kw$M,pnts_SINGLEQUOTE_)),cljs.core.last(pnts_SINGLEQUOTE_),null], null);
}));
if((typeof paintscript !== 'undefined') && (typeof paintscript.el !== 'undefined') && (typeof paintscript.el.short__GT_full !== 'undefined')){
} else {
paintscript.el.short__GT_full = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__7669 = cljs.core.get_global_hierarchy;
return (fexpr__7669.cljs$core$IFn$_invoke$arity$0 ? fexpr__7669.cljs$core$IFn$_invoke$arity$0() : fexpr__7669.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("paintscript.el","short->full"),paintscript.el.dispatch_on_k,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
paintscript.el.short__GT_full.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$S,(function (p__7670,tgt_prev,cp_prev){
var vec__7671 = p__7670;
var seq__7672 = cljs.core.seq(vec__7671);
var first__7673 = cljs.core.first(seq__7672);
var seq__7672__$1 = cljs.core.next(seq__7672);
var _k = first__7673;
var pnts = seq__7672__$1;
var elv = vec__7671;
var vec__7674 = pnts;
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7674,(0),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7674,(1),null);
var c1 = paintscript.el.flip_c2(cp_prev,tgt_prev);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$C,c1,c2,tgt], null),tgt,c2], null);
}));
paintscript.el.short__GT_full.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$C1,(function (p__7677,tgt_prev,cp_prev){
var vec__7678 = p__7677;
var seq__7679 = cljs.core.seq(vec__7678);
var first__7680 = cljs.core.first(seq__7679);
var seq__7679__$1 = cljs.core.next(seq__7679);
var _k = first__7680;
var pnts = seq__7679__$1;
var elv = vec__7678;
var vec__7681 = pnts;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7681,(0),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7681,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$C,c1,tgt,tgt], null),tgt,null], null);
}));
paintscript.el.short__GT_full.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$T,(function (p__7684,tgt_prev,cp_prev){
var vec__7685 = p__7684;
var seq__7686 = cljs.core.seq(vec__7685);
var first__7687 = cljs.core.first(seq__7686);
var seq__7686__$1 = cljs.core.next(seq__7686);
var _k = first__7687;
var pnts = seq__7686__$1;
var elv = vec__7685;
var vec__7688 = pnts;
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7688,(0),null);
var c1 = paintscript.el.flip_c2(cp_prev,tgt_prev);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Q,c1,tgt], null),tgt,c1], null);
}));
paintscript.el.short__GT_full.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$V,(function (p__7691,tgt_prev,cp_prev){
var vec__7692 = p__7691;
var seq__7693 = cljs.core.seq(vec__7692);
var first__7694 = cljs.core.first(seq__7693);
var seq__7693__$1 = cljs.core.next(seq__7693);
var _k = first__7694;
var pnts = seq__7693__$1;
var elv = vec__7692;
var vec__7695 = pnts;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7695,(0),null);
var tgt = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(tgt_prev),y], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$L,tgt], null),tgt], null);
}));
paintscript.el.short__GT_full.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$H,(function (p__7698,tgt_prev,cp_prev){
var vec__7699 = p__7698;
var seq__7700 = cljs.core.seq(vec__7699);
var first__7701 = cljs.core.first(seq__7700);
var seq__7700__$1 = cljs.core.next(seq__7700);
var _k = first__7701;
var pnts = seq__7700__$1;
var elv = vec__7699;
var vec__7702 = pnts;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7702,(0),null);
var tgt = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.second(tgt_prev)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$L,tgt], null),tgt], null);
}));
paintscript.el.short__GT_full.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$arc,(function (p__7705,_,___$1){
var vec__7706 = p__7705;
var seq__7707 = cljs.core.seq(vec__7706);
var first__7708 = cljs.core.first(seq__7707);
var seq__7707__$1 = cljs.core.next(seq__7707);
var _k = first__7708;
var pnts = seq__7707__$1;
var elv = vec__7706;
var vec__7709 = pnts;
var seq__7710 = cljs.core.seq(vec__7709);
var first__7711 = cljs.core.first(seq__7710);
var seq__7710__$1 = cljs.core.next(seq__7710);
var arg1 = first__7711;
var args_rest = seq__7710__$1;
var arc_SINGLEQUOTE_ = ((cljs.core.map_QMARK_(arg1))?elv:cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$arc,cljs.core.PersistentArrayMap.EMPTY], null),pnts));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arc_SINGLEQUOTE_,cljs.core.last(args_rest),null], null);
}));
paintscript.el.el__GT_cp_i = (function paintscript$el$el__GT_cp_i(el,pos_k){
var G__7712 = cljs.core.first(el);
var G__7712__$1 = (((G__7712 instanceof cljs.core.Keyword))?G__7712.fqn:null);
switch (G__7712__$1) {
case "C":
var G__7713 = pos_k;
var G__7713__$1 = (((G__7713 instanceof cljs.core.Keyword))?G__7713.fqn:null);
switch (G__7713__$1) {
case "init":
return (1);

break;
case "term":
return (2);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7713__$1)].join('')));

}

break;
case "c":
var G__7714 = pos_k;
var G__7714__$1 = (((G__7714 instanceof cljs.core.Keyword))?G__7714.fqn:null);
switch (G__7714__$1) {
case "init":
return (1);

break;
case "term":
return (2);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7714__$1)].join('')));

}

break;
case "Q":
var G__7715 = pos_k;
var G__7715__$1 = (((G__7715 instanceof cljs.core.Keyword))?G__7715.fqn:null);
switch (G__7715__$1) {
case "init":
return null;

break;
case "term":
return (1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7715__$1)].join('')));

}

break;
case "q":
var G__7716 = pos_k;
var G__7716__$1 = (((G__7716 instanceof cljs.core.Keyword))?G__7716.fqn:null);
switch (G__7716__$1) {
case "init":
return null;

break;
case "term":
return (1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7716__$1)].join('')));

}

break;
case "S":
var G__7717 = pos_k;
var G__7717__$1 = (((G__7717 instanceof cljs.core.Keyword))?G__7717.fqn:null);
switch (G__7717__$1) {
case "init":
return null;

break;
case "term":
return (1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7717__$1)].join('')));

}

break;
case "s":
var G__7718 = pos_k;
var G__7718__$1 = (((G__7718 instanceof cljs.core.Keyword))?G__7718.fqn:null);
switch (G__7718__$1) {
case "init":
return null;

break;
case "term":
return (1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7718__$1)].join('')));

}

break;
default:
return null;

}
});
if((typeof paintscript !== 'undefined') && (typeof paintscript.el !== 'undefined') && (typeof paintscript.el.curve__GT_tgt_cp !== 'undefined')){
} else {
paintscript.el.curve__GT_tgt_cp = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__7726 = cljs.core.get_global_hierarchy;
return (fexpr__7726.cljs$core$IFn$_invoke$arity$0 ? fexpr__7726.cljs$core$IFn$_invoke$arity$0() : fexpr__7726.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("paintscript.el","curve->tgt-cp"),paintscript.el.dispatch_on_k,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
paintscript.el.curve__GT_tgt_cp.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$C,(function (p__7727,_,___$1){
var vec__7728 = p__7727;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7728,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7728,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7728,(2),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7728,(3),null);
var el = vec__7728;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,tgt,c2], null);
}));
paintscript.el.curve__GT_tgt_cp.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$Q,(function (p__7731,_,___$1){
var vec__7732 = p__7731;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7732,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7732,(1),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7732,(2),null);
var el = vec__7732;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,tgt,c], null);
}));
paintscript.el.curve__GT_tgt_cp.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$S,(function (p__7735,_,___$1){
var vec__7736 = p__7735;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7736,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7736,(1),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7736,(2),null);
var el = vec__7736;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,tgt,c], null);
}));
paintscript.el.el__GT_tgt = (function paintscript$el$el__GT_tgt(el){
return cljs.core.last(cljs.core.rest(el));
});
paintscript.el.el__GT_tgt_SINGLEQUOTE_ = (function paintscript$el$el__GT_tgt_SINGLEQUOTE_(el,tgt_prev,_){
var G__7739 = cljs.core.first(el);
var G__7739__$1 = (((G__7739 instanceof cljs.core.Keyword))?G__7739.fqn:null);
switch (G__7739__$1) {
case "Z":
case "z":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,tgt_prev], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,paintscript.el.el__GT_tgt(el)], null);

}
});
paintscript.el.normalization_steps = (function paintscript$el$normalization_steps(el_k,op){
var or__4131__auto__ = (function (){var G__7746 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__4120__auto__ = (function (){var fexpr__7748 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$all,null,cljs.core.cst$kw$rel_DASH__GT_abs,null,cljs.core.cst$kw$short_DASH__GT_full,null], null), null);
return (fexpr__7748.cljs$core$IFn$_invoke$arity$1 ? fexpr__7748.cljs$core$IFn$_invoke$arity$1(op) : fexpr__7748.call(null,op));
})();
if(cljs.core.truth_(and__4120__auto__)){
return (paintscript.el.relative_QMARK_.cljs$core$IFn$_invoke$arity$1 ? paintscript.el.relative_QMARK_.cljs$core$IFn$_invoke$arity$1(el_k) : paintscript.el.relative_QMARK_.call(null,el_k));
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.el.rel__GT_abs], null):null),(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var fexpr__7750 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$all,null,cljs.core.cst$kw$short_DASH__GT_full,null], null), null);
return (fexpr__7750.cljs$core$IFn$_invoke$arity$1 ? fexpr__7750.cljs$core$IFn$_invoke$arity$1(op) : fexpr__7750.call(null,op));
})();
if(cljs.core.truth_(and__4120__auto__)){
return (paintscript.el.short_QMARK_.cljs$core$IFn$_invoke$arity$1 ? paintscript.el.short_QMARK_.cljs$core$IFn$_invoke$arity$1(el_k) : paintscript.el.short_QMARK_.call(null,el_k));
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.el.short__GT_full], null):null));
if((G__7746 == null)){
return null;
} else {
return cljs.core.seq(G__7746);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (cljs.core.truth_((paintscript.el.has_cp_QMARK_.cljs$core$IFn$_invoke$arity$1 ? paintscript.el.has_cp_QMARK_.cljs$core$IFn$_invoke$arity$1(el_k) : paintscript.el.has_cp_QMARK_.call(null,el_k)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.el.curve__GT_tgt_cp], null):null);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.el.el__GT_tgt_SINGLEQUOTE_], null);
}
}
});
if((typeof paintscript !== 'undefined') && (typeof paintscript.el !== 'undefined') && (typeof paintscript.el.el__GT_reversed !== 'undefined')){
} else {
paintscript.el.el__GT_reversed = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__7751 = cljs.core.get_global_hierarchy;
return (fexpr__7751.cljs$core$IFn$_invoke$arity$0 ? fexpr__7751.cljs$core$IFn$_invoke$arity$0() : fexpr__7751.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("paintscript.el","el->reversed"),paintscript.el.dispatch_on_k,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
paintscript.el.el__GT_reversed.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$M,(function (p__7752,tgt_prev){
var vec__7753 = p__7752;
var seq__7754 = cljs.core.seq(vec__7753);
var first__7755 = cljs.core.first(seq__7754);
var seq__7754__$1 = cljs.core.next(seq__7754);
var _ = first__7755;
var pnts = seq__7754__$1;
var el = vec__7753;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(tgt_prev)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$M,tgt_prev], null):null),cljs.core.last(pnts)], null);
}));
paintscript.el.el__GT_reversed.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$L,(function (p__7756,tgt_prev){
var vec__7757 = p__7756;
var seq__7758 = cljs.core.seq(vec__7757);
var first__7759 = cljs.core.first(seq__7758);
var seq__7758__$1 = cljs.core.next(seq__7758);
var _ = first__7759;
var pnts = seq__7758__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.cons(cljs.core.cst$kw$L,cljs.core.reverse(cljs.core.cons(tgt_prev,cljs.core.butlast(pnts))))),cljs.core.last(pnts)], null);
}));
paintscript.el.el__GT_reversed.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$arc,(function (p__7760,tgt_prev){
var vec__7761 = p__7760;
var seq__7762 = cljs.core.seq(vec__7761);
var first__7763 = cljs.core.first(seq__7762);
var seq__7762__$1 = cljs.core.next(seq__7762);
var _ = first__7763;
var pnts = seq__7762__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.cons(cljs.core.reverse(cljs.core.cons(cljs.core.butlast(pnts),tgt_prev)),cljs.core.cst$kw$arc_STAR_)),cljs.core.last(pnts)], null);
}));
paintscript.el.el__GT_reversed.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$A,(function (p__7764,tgt_prev){
var vec__7765 = p__7764;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7765,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7765,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7765,(2),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7765,(3),null);
var p_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$3(p,(2),paintscript.el.flip_bin);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$A,r,p_SINGLEQUOTE_,tgt_prev], null),tgt], null);
}));
paintscript.el.el__GT_reversed.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$C,(function (p__7768,tgt_prev){
var vec__7769 = p__7768;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7769,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7769,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7769,(2),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7769,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$C,c2,c1,tgt_prev], null),tgt], null);
}));
paintscript.el.el__GT_reversed.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$Q,(function (p__7772,tgt_prev){
var vec__7773 = p__7772;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7773,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7773,(1),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7773,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Q,c,tgt_prev], null),tgt], null);
}));
paintscript.el.el__GT_reversed.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$z,(function (_,tgt_prev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$z], null),tgt_prev], null);
}));
