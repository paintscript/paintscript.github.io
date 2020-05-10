// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('paintscript.els');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('paintscript.util');
goog.require('paintscript.el');
goog.require('paintscript.nav');
paintscript.els.normalize_els = (function paintscript$els$normalize_els(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8315 = arguments.length;
var i__4731__auto___8316 = (0);
while(true){
if((i__4731__auto___8316 < len__4730__auto___8315)){
args__4736__auto__.push((arguments[i__4731__auto___8316]));

var G__8317 = (i__4731__auto___8316 + (1));
i__4731__auto___8316 = G__8317;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return paintscript.els.normalize_els.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

paintscript.els.normalize_els.cljs$core$IFn$_invoke$arity$variadic = (function (els,p__8272){
var map__8273 = p__8272;
var map__8273__$1 = (((((!((map__8273 == null))))?(((((map__8273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8273):map__8273);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8273__$1,cljs.core.cst$kw$op,cljs.core.cst$kw$all);
if(cljs.core.truth_((cljs.core.truth_(op)?(function (){var fexpr__8275 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$all,null,cljs.core.cst$kw$rel_DASH__GT_abs,null,cljs.core.cst$kw$short_DASH__GT_full,null], null), null);
return (fexpr__8275.cljs$core$IFn$_invoke$arity$1 ? fexpr__8275.cljs$core$IFn$_invoke$arity$1(op) : fexpr__8275.call(null,op));
})():null))){
} else {
throw (new Error("Assert failed: (when op (-> op #{:all :rel->abs :short->full}))"));
}

var G__8282 = els;
var vec__8283 = G__8282;
var seq__8284 = cljs.core.seq(vec__8283);
var first__8285 = cljs.core.first(seq__8284);
var seq__8284__$1 = cljs.core.next(seq__8284);
var vec__8286 = first__8285;
var el_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8286,(0),null);
var el = vec__8286;
var els_tail = seq__8284__$1;
var tgt_prev = null;
var cp_prev = null;
var acc = cljs.core.PersistentVector.EMPTY;
var G__8282__$1 = G__8282;
var tgt_prev__$1 = tgt_prev;
var cp_prev__$1 = cp_prev;
var acc__$1 = acc;
while(true){
var vec__8302 = G__8282__$1;
var seq__8303 = cljs.core.seq(vec__8302);
var first__8304 = cljs.core.first(seq__8303);
var seq__8303__$1 = cljs.core.next(seq__8303);
var vec__8305 = first__8304;
var el_k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8305,(0),null);
var el__$1 = vec__8305;
var els_tail__$1 = seq__8303__$1;
var tgt_prev__$2 = tgt_prev__$1;
var cp_prev__$2 = cp_prev__$1;
var acc__$2 = acc__$1;
if(cljs.core.not(el_k__$1)){
return acc__$2;
} else {
var vec__8308 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__8282__$1,tgt_prev__$1,cp_prev__$1,acc__$1,vec__8302,seq__8303,first__8304,seq__8303__$1,vec__8305,el_k__$1,el__$1,els_tail__$1,tgt_prev__$2,cp_prev__$2,acc__$2,G__8282,vec__8283,seq__8284,first__8285,seq__8284__$1,vec__8286,el_k,el,els_tail,tgt_prev,cp_prev,acc,map__8273,map__8273__$1,op){
return (function (p__8311,f_step){
var vec__8312 = p__8311;
var el__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8312,(0),null);
var _tgt_prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8312,(1),null);
var _cp_prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8312,(2),null);
return (f_step.cljs$core$IFn$_invoke$arity$3 ? f_step.cljs$core$IFn$_invoke$arity$3(el__$2,tgt_prev__$2,cp_prev__$2) : f_step.call(null,el__$2,tgt_prev__$2,cp_prev__$2));
});})(G__8282__$1,tgt_prev__$1,cp_prev__$1,acc__$1,vec__8302,seq__8303,first__8304,seq__8303__$1,vec__8305,el_k__$1,el__$1,els_tail__$1,tgt_prev__$2,cp_prev__$2,acc__$2,G__8282,vec__8283,seq__8284,first__8285,seq__8284__$1,vec__8286,el_k,el,els_tail,tgt_prev,cp_prev,acc,map__8273,map__8273__$1,op))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el__$1,tgt_prev__$2,cp_prev__$2], null),paintscript.el.normalization_steps(el_k__$1,op));
var el_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8308,(0),null);
var tgt_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8308,(1),null);
var cp_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8308,(2),null);
var el_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.with_meta(el_SINGLEQUOTE_,cljs.core.meta(el__$1));
var G__8318 = els_tail__$1;
var G__8319 = tgt_SINGLEQUOTE_;
var G__8320 = cp_SINGLEQUOTE_;
var G__8321 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,el_SINGLEQUOTE__SINGLEQUOTE_);
G__8282__$1 = G__8318;
tgt_prev__$1 = G__8319;
cp_prev__$1 = G__8320;
acc__$1 = G__8321;
continue;
}
break;
}
});

paintscript.els.normalize_els.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
paintscript.els.normalize_els.cljs$lang$applyTo = (function (seq8270){
var G__8271 = cljs.core.first(seq8270);
var seq8270__$1 = cljs.core.next(seq8270);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8271,seq8270__$1);
});

/**
 * drop last point (implicit) and redistribute the rest in reverse:
 *  ([:M 1] [:L 2 3] [:C 4 5 6] [:C 7 8 9])
 *  ~> ([:C 7 8 9] [:C 4 5 6] [:L 2 3] [:M 1])
 *  => ([:C 8 7 6] [:C 5 4 3] [:L 2 1])
 *   
 */
paintscript.els.reverse_el_xys = (function paintscript$els$reverse_el_xys(els){
var G__8325 = els;
var vec__8326 = G__8325;
var seq__8327 = cljs.core.seq(vec__8326);
var first__8328 = cljs.core.first(seq__8327);
var seq__8327__$1 = cljs.core.next(seq__8327);
var el = first__8328;
var els_tail = seq__8327__$1;
var acc = cljs.core.PersistentVector.EMPTY;
var tgt_prev = null;
var G__8325__$1 = G__8325;
var acc__$1 = acc;
var tgt_prev__$1 = tgt_prev;
while(true){
var vec__8336 = G__8325__$1;
var seq__8337 = cljs.core.seq(vec__8336);
var first__8338 = cljs.core.first(seq__8337);
var seq__8337__$1 = cljs.core.next(seq__8337);
var el__$1 = first__8338;
var els_tail__$1 = seq__8337__$1;
var acc__$2 = acc__$1;
var tgt_prev__$2 = tgt_prev__$1;
if(cljs.core.not(el__$1)){
return cljs.core.reverse(acc__$2);
} else {
var vec__8339 = (paintscript.el.el__GT_reversed.cljs$core$IFn$_invoke$arity$2 ? paintscript.el.el__GT_reversed.cljs$core$IFn$_invoke$arity$2(el__$1,tgt_prev__$2) : paintscript.el.el__GT_reversed.call(null,el__$1,tgt_prev__$2));
var el_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8339,(0),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8339,(1),null);
var G__8343 = els_tail__$1;
var G__8344 = (function (){var G__8342 = acc__$2;
if(cljs.core.truth_(el_SINGLEQUOTE_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__8342,el_SINGLEQUOTE_);
} else {
return G__8342;
}
})();
var G__8345 = tgt;
G__8325__$1 = G__8343;
acc__$1 = G__8344;
tgt_prev__$1 = G__8345;
continue;
}
break;
}
});
paintscript.els.reverse_els = (function paintscript$els$reverse_els(width,els){
return paintscript.els.reverse_el_xys(paintscript.els.normalize_els(els));
});
paintscript.els.mirror_xy = (function paintscript$els$mirror_xy(axis,pos,pnt){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(pnt,axis,(function (p1__8346_SHARP_){
return (pos - p1__8346_SHARP_);
}));
});
paintscript.els.mirror_xys = (function paintscript$els$mirror_xys(axis,pos,xys){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8347_SHARP_){
return paintscript.els.mirror_xy(axis,pos,p1__8347_SHARP_);
}),xys);
});
paintscript.els.mirror_els = (function paintscript$els$mirror_els(axis,pos,els){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__8349){
var vec__8350 = p__8349;
var seq__8351 = cljs.core.seq(vec__8350);
var first__8352 = cljs.core.first(seq__8351);
var seq__8351__$1 = cljs.core.next(seq__8351);
var el_k = first__8352;
var xys = seq__8351__$1;
var el = vec__8350;
var G__8353 = el_k;
var G__8353__$1 = (((G__8353 instanceof cljs.core.Keyword))?G__8353.fqn:null);
switch (G__8353__$1) {
case "arc":
var vec__8354 = xys;
var seq__8355 = cljs.core.seq(vec__8354);
var first__8356 = cljs.core.first(seq__8355);
var seq__8355__$1 = cljs.core.next(seq__8355);
var opts = first__8356;
var xys__$1 = seq__8355__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el_k,cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$mode,((function (vec__8354,seq__8355,first__8356,seq__8355__$1,opts,xys__$1,G__8353,G__8353__$1,vec__8350,seq__8351,first__8352,seq__8351__$1,el_k,xys,el){
return (function (p1__8348_SHARP_){
var G__8357 = p1__8348_SHARP_;
var G__8357__$1 = (((G__8357 instanceof cljs.core.Keyword))?G__8357.fqn:null);
switch (G__8357__$1) {
case "convex":
return cljs.core.cst$kw$concave;

break;
default:
return cljs.core.cst$kw$convex;

}
});})(vec__8354,seq__8355,first__8356,seq__8355__$1,opts,xys__$1,G__8353,G__8353__$1,vec__8350,seq__8351,first__8352,seq__8351__$1,el_k,xys,el))
)], null),paintscript.els.mirror_xys(axis,pos,xys__$1));

break;
case "A":
var vec__8358 = xys;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8358,(0),null);
var vec__8361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8358,(1),null);
var rot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8361,(0),null);
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8361,(1),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8361,(2),null);
var xy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8358,(2),null);
var f2_SINGLEQUOTE_ = paintscript.el.flip_bin(f2);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$A,r,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rot,f1,f2_SINGLEQUOTE_], null),paintscript.els.mirror_xy(axis,pos,xy)], null);

break;
default:
return cljs.core.vec(cljs.core.cons(el_k,paintscript.els.mirror_xys(axis,pos,xys)));

}
}),els);
});
/**
 * subdivide els in chunks terminated w/ :z and append a mirrored version after each
 */
paintscript.els.add_mirrored = (function paintscript$els$add_mirrored(mode,axis,pos,els){
var els_parts = (function (){var coll = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$z], null)]),els);
var coll__$1 = ((cljs.core.odd_QMARK_(cljs.core.count(coll)))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(coll,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)):coll);
return cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),coll__$1);
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (els_parts){
return (function (p1__8366_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__8366_SHARP_);
});})(els_parts))
),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(((function (els_parts){
return (function (els_part){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(els_part,paintscript.els.mirror_els(axis,pos,(function (){var G__8367 = mode;
var G__8367__$1 = (((G__8367 instanceof cljs.core.Keyword))?G__8367.fqn:null);
switch (G__8367__$1) {
case "merged":
return paintscript.els.reverse_els(pos,els_part);

break;
case "separate":
return paintscript.els.normalize_els.cljs$core$IFn$_invoke$arity$variadic(els_part,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$op,cljs.core.cst$kw$all], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8367__$1)].join('')));

}
})()));
});})(els_parts))
)),els_parts);
});
paintscript.els.map_xys = (function paintscript$els$map_xys(f,els){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__8369){
var vec__8370 = p__8369;
var seq__8371 = cljs.core.seq(vec__8370);
var first__8372 = cljs.core.first(seq__8371);
var seq__8371__$1 = cljs.core.next(seq__8371);
var el_k = first__8372;
var xys = seq__8371__$1;
var el = vec__8370;
var el_SINGLEQUOTE_ = (function (){var G__8373 = el_k;
var G__8373__$1 = (((G__8373 instanceof cljs.core.Keyword))?G__8373.fqn:null);
switch (G__8373__$1) {
case "A":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(el,(3),f);

break;
case "circle":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$center], null),f);

break;
default:
return cljs.core.vec(cljs.core.cons(el_k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xys)));

}
})();
return cljs.core.with_meta(el_SINGLEQUOTE_,cljs.core.meta(el));
}),els);
});
paintscript.els.update_p_els = (function paintscript$els$update_p_els(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8378 = arguments.length;
var i__4731__auto___8379 = (0);
while(true){
if((i__4731__auto___8379 < len__4730__auto___8378)){
args__4736__auto__.push((arguments[i__4731__auto___8379]));

var G__8380 = (i__4731__auto___8379 + (1));
i__4731__auto___8379 = G__8380;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return paintscript.els.update_p_els.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

paintscript.els.update_p_els.cljs$core$IFn$_invoke$arity$variadic = (function (p,f,args){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),p),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),p),args)));
});

paintscript.els.update_p_els.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
paintscript.els.update_p_els.cljs$lang$applyTo = (function (seq8375){
var G__8376 = cljs.core.first(seq8375);
var seq8375__$1 = cljs.core.next(seq8375);
var G__8377 = cljs.core.first(seq8375__$1);
var seq8375__$2 = cljs.core.next(seq8375__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8376,G__8377,seq8375__$2);
});

paintscript.els.update_px_all = (function paintscript$els$update_px_all(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8386 = arguments.length;
var i__4731__auto___8387 = (0);
while(true){
if((i__4731__auto___8387 < len__4730__auto___8386)){
args__4736__auto__.push((arguments[i__4731__auto___8387]));

var G__8388 = (i__4731__auto___8387 + (1));
i__4731__auto___8387 = G__8388;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return paintscript.els.update_px_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

paintscript.els.update_px_all.cljs$core$IFn$_invoke$arity$variadic = (function (params,f,args){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(params,cljs.core.cst$kw$defs,(function (dd){
return paintscript.util.map_vals((function (p1__8381_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__8381_SHARP_,args);
}),dd);
})),cljs.core.cst$kw$script,(function (s){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__8382_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(paintscript.els.update_p_els,p1__8382_SHARP_,f,args);
}),s);
}));
});

paintscript.els.update_px_all.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
paintscript.els.update_px_all.cljs$lang$applyTo = (function (seq8383){
var G__8384 = cljs.core.first(seq8383);
var seq8383__$1 = cljs.core.next(seq8383);
var G__8385 = cljs.core.first(seq8383__$1);
var seq8383__$2 = cljs.core.next(seq8383__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8384,G__8385,seq8383__$2);
});

paintscript.els.update_px = (function paintscript$els$update_px(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8398 = arguments.length;
var i__4731__auto___8399 = (0);
while(true){
if((i__4731__auto___8399 < len__4730__auto___8398)){
args__4736__auto__.push((arguments[i__4731__auto___8399]));

var G__8400 = (i__4731__auto___8399 + (1));
i__4731__auto___8399 = G__8400;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return paintscript.els.update_px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

paintscript.els.update_px.cljs$core$IFn$_invoke$arity$variadic = (function (params,p__8393,f,args){
var vec__8394 = p__8393;
var src_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8394,(0),null);
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8394,(1),null);
var sel = vec__8394;
if(cljs.core.not(sel)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(paintscript.els.update_px_all,params,f,args);
} else {
var G__8397 = src_k;
var G__8397__$1 = (((G__8397 instanceof cljs.core.Keyword))?G__8397.fqn:null);
switch (G__8397__$1) {
case "defs":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src_k,px], null),f,args);

break;
case "script":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in,params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src_k,px], null),paintscript.els.update_p_els,f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8397__$1)].join('')));

}
}
});

paintscript.els.update_px.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
paintscript.els.update_px.cljs$lang$applyTo = (function (seq8389){
var G__8390 = cljs.core.first(seq8389);
var seq8389__$1 = cljs.core.next(seq8389);
var G__8391 = cljs.core.first(seq8389__$1);
var seq8389__$2 = cljs.core.next(seq8389__$1);
var G__8392 = cljs.core.first(seq8389__$2);
var seq8389__$3 = cljs.core.next(seq8389__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8390,G__8391,G__8392,seq8389__$3);
});

paintscript.els.scale_els = (function paintscript$els$scale_els(els,center,factor){
return paintscript.els.map_xys((function (p1__8402_SHARP_){
return paintscript.util.tl_point_towards(p1__8402_SHARP_,center,factor);
}),els);
});
paintscript.els.translate_els = (function paintscript$els$translate_els(els,xyd){
return paintscript.els.map_xys(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(paintscript.util.v_PLUS_,xyd),els);
});
paintscript.els.rotate_els = (function paintscript$els$rotate_els(els,ctr,alpha){
return paintscript.els.map_xys((function (p1__8403_SHARP_){
return paintscript.util.tl_point_around(ctr,p1__8403_SHARP_,alpha);
}),els);
});
paintscript.els.with_xy_abs_meta = (function paintscript$els$with_xy_abs_meta(xy1,xy2){
return cljs.core.with_meta(xy1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$xy_DASH_abs,xy2], null));
});
paintscript.els.xy_abs_meta = (function paintscript$els$xy_abs_meta(xy){
return cljs.core.cst$kw$xy_DASH_abs.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(xy));
});
paintscript.els.attach_xy_abs_meta = (function paintscript$els$attach_xy_abs_meta(els){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p__8404,p__8405){
var vec__8406 = p__8404;
var seq__8407 = cljs.core.seq(vec__8406);
var first__8408 = cljs.core.first(seq__8407);
var seq__8407__$1 = cljs.core.next(seq__8407);
var el_k = first__8408;
var xys = seq__8407__$1;
var el = vec__8406;
var vec__8409 = p__8405;
var seq__8410 = cljs.core.seq(vec__8409);
var first__8411 = cljs.core.first(seq__8410);
var seq__8410__$1 = cljs.core.next(seq__8410);
var _el_k_SINGLEQUOTE_ = first__8411;
var xys_SINGLEQUOTE_ = seq__8410__$1;
var el_norm = vec__8409;
var el_SINGLEQUOTE_ = (function (){var G__8412 = el_k;
var G__8412__$1 = (((G__8412 instanceof cljs.core.Keyword))?G__8412.fqn:null);
switch (G__8412__$1) {
case "c":
return cljs.core.vec(cljs.core.cons(el_k,cljs.core.map.cljs$core$IFn$_invoke$arity$3(paintscript.els.with_xy_abs_meta,xys,xys_SINGLEQUOTE_)));

break;
case "s":
var vec__8413 = xys;
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8413,(0),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8413,(1),null);
var vec__8416 = xys_SINGLEQUOTE_;
var c2_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8416,(0),null);
var tgt_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8416,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el_k,paintscript.els.with_xy_abs_meta(c2,c2_SINGLEQUOTE_),paintscript.els.with_xy_abs_meta(tgt,tgt_SINGLEQUOTE_)], null);

break;
case "t":
var vec__8419 = xys;
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8419,(0),null);
var vec__8422 = xys_SINGLEQUOTE_;
var tgt_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8422,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el_k,paintscript.els.with_xy_abs_meta(tgt,tgt_SINGLEQUOTE_)], null);

break;
default:
return el;

}
})();
return cljs.core.with_meta(el_SINGLEQUOTE_,cljs.core.meta(el));
}),els,paintscript.els.normalize_els.cljs$core$IFn$_invoke$arity$variadic(els,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$op,cljs.core.cst$kw$rel_DASH__GT_abs], 0)));
});
paintscript.els.attach_ii_el_meta = (function paintscript$els$attach_ii_el_meta(src_k,x_k,eli0,els){
return cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (eli,el){
return cljs.core.with_meta(el,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ii_DASH_el,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [src_k,x_k,(eli0 + eli)], null)], null));
}),els));
});
paintscript.els.attach_ii_el_meta_STAR_ = (function paintscript$els$attach_ii_el_meta_STAR_(script_pp){
return cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (pi,p){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),p),paintscript.els.attach_ii_el_meta(cljs.core.cst$kw$script,pi,paintscript.nav.eli0,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),p))));
}),script_pp));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
paintscript.els.El = (function (el_k,opts,ii_el,i_arg0,args,__meta,__extmap,__hash){
this.el_k = el_k;
this.opts = opts;
this.ii_el = ii_el;
this.i_arg0 = i_arg0;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
paintscript.els.El.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

paintscript.els.El.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k8427,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__8431 = k8427;
var G__8431__$1 = (((G__8431 instanceof cljs.core.Keyword))?G__8431.fqn:null);
switch (G__8431__$1) {
case "el-k":
return self__.el_k;

break;
case "opts":
return self__.opts;

break;
case "ii-el":
return self__.ii_el;

break;
case "i-arg0":
return self__.i_arg0;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8427,else__4388__auto__);

}
});

paintscript.els.El.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__8432){
var vec__8433 = p__8432;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8433,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8433,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

paintscript.els.El.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#paintscript.els.El{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$el_DASH_k,self__.el_k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$opts,self__.opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ii_DASH_el,self__.ii_el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$i_DASH_arg0,self__.i_arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

paintscript.els.El.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8426){
var self__ = this;
var G__8426__$1 = this;
return (new cljs.core.RecordIter((0),G__8426__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$el_DASH_k,cljs.core.cst$kw$opts,cljs.core.cst$kw$ii_DASH_el,cljs.core.cst$kw$i_DASH_arg0,cljs.core.cst$kw$args], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

paintscript.els.El.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

paintscript.els.El.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new paintscript.els.El(self__.el_k,self__.opts,self__.ii_el,self__.i_arg0,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

paintscript.els.El.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

paintscript.els.El.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__8436 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1442154704 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__8436(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

paintscript.els.El.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8428,other8429){
var self__ = this;
var this8428__$1 = this;
return (((!((other8429 == null)))) && ((this8428__$1.constructor === other8429.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8428__$1.el_k,other8429.el_k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8428__$1.opts,other8429.opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8428__$1.ii_el,other8429.ii_el)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8428__$1.i_arg0,other8429.i_arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8428__$1.args,other8429.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8428__$1.__extmap,other8429.__extmap)));
});

paintscript.els.El.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$el_DASH_k,null,cljs.core.cst$kw$i_DASH_arg0,null,cljs.core.cst$kw$ii_DASH_el,null,cljs.core.cst$kw$opts,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new paintscript.els.El(self__.el_k,self__.opts,self__.ii_el,self__.i_arg0,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

paintscript.els.El.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__8426){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__8437 = cljs.core.keyword_identical_QMARK_;
var expr__8438 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__8440 = cljs.core.cst$kw$el_DASH_k;
var G__8441 = expr__8438;
return (pred__8437.cljs$core$IFn$_invoke$arity$2 ? pred__8437.cljs$core$IFn$_invoke$arity$2(G__8440,G__8441) : pred__8437.call(null,G__8440,G__8441));
})())){
return (new paintscript.els.El(G__8426,self__.opts,self__.ii_el,self__.i_arg0,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8442 = cljs.core.cst$kw$opts;
var G__8443 = expr__8438;
return (pred__8437.cljs$core$IFn$_invoke$arity$2 ? pred__8437.cljs$core$IFn$_invoke$arity$2(G__8442,G__8443) : pred__8437.call(null,G__8442,G__8443));
})())){
return (new paintscript.els.El(self__.el_k,G__8426,self__.ii_el,self__.i_arg0,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8444 = cljs.core.cst$kw$ii_DASH_el;
var G__8445 = expr__8438;
return (pred__8437.cljs$core$IFn$_invoke$arity$2 ? pred__8437.cljs$core$IFn$_invoke$arity$2(G__8444,G__8445) : pred__8437.call(null,G__8444,G__8445));
})())){
return (new paintscript.els.El(self__.el_k,self__.opts,G__8426,self__.i_arg0,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8446 = cljs.core.cst$kw$i_DASH_arg0;
var G__8447 = expr__8438;
return (pred__8437.cljs$core$IFn$_invoke$arity$2 ? pred__8437.cljs$core$IFn$_invoke$arity$2(G__8446,G__8447) : pred__8437.call(null,G__8446,G__8447));
})())){
return (new paintscript.els.El(self__.el_k,self__.opts,self__.ii_el,G__8426,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8448 = cljs.core.cst$kw$args;
var G__8449 = expr__8438;
return (pred__8437.cljs$core$IFn$_invoke$arity$2 ? pred__8437.cljs$core$IFn$_invoke$arity$2(G__8448,G__8449) : pred__8437.call(null,G__8448,G__8449));
})())){
return (new paintscript.els.El(self__.el_k,self__.opts,self__.ii_el,self__.i_arg0,G__8426,self__.__meta,self__.__extmap,null));
} else {
return (new paintscript.els.El(self__.el_k,self__.opts,self__.ii_el,self__.i_arg0,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__8426),null));
}
}
}
}
}
});

paintscript.els.El.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$el_DASH_k,self__.el_k,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$opts,self__.opts,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$ii_DASH_el,self__.ii_el,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$i_DASH_arg0,self__.i_arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$args,self__.args,null))], null),self__.__extmap));
});

paintscript.els.El.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__8426){
var self__ = this;
var this__4384__auto____$1 = this;
return (new paintscript.els.El(self__.el_k,self__.opts,self__.ii_el,self__.i_arg0,self__.args,G__8426,self__.__extmap,self__.__hash));
});

paintscript.els.El.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

paintscript.els.El.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$el_DASH_k,cljs.core.cst$sym$opts,cljs.core.cst$sym$ii_DASH_el,cljs.core.cst$sym$i_DASH_arg0,cljs.core.cst$sym$args], null);
});

paintscript.els.El.cljs$lang$type = true;

paintscript.els.El.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"paintscript.els/El",null,(1),null));
});

paintscript.els.El.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"paintscript.els/El");
});

/**
 * Positional factory function for paintscript.els/El.
 */
paintscript.els.__GT_El = (function paintscript$els$__GT_El(el_k,opts,ii_el,i_arg0,args){
return (new paintscript.els.El(el_k,opts,ii_el,i_arg0,args,null,null,null));
});

/**
 * Factory function for paintscript.els/El, taking a map of keywords to field values.
 */
paintscript.els.map__GT_El = (function paintscript$els$map__GT_El(G__8430){
var extmap__4424__auto__ = (function (){var G__8450 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8430,cljs.core.cst$kw$el_DASH_k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$opts,cljs.core.cst$kw$ii_DASH_el,cljs.core.cst$kw$i_DASH_arg0,cljs.core.cst$kw$args], 0));
if(cljs.core.record_QMARK_(G__8430)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8450);
} else {
return G__8450;
}
})();
return (new paintscript.els.El(cljs.core.cst$kw$el_DASH_k.cljs$core$IFn$_invoke$arity$1(G__8430),cljs.core.cst$kw$opts.cljs$core$IFn$_invoke$arity$1(G__8430),cljs.core.cst$kw$ii_DASH_el.cljs$core$IFn$_invoke$arity$1(G__8430),cljs.core.cst$kw$i_DASH_arg0.cljs$core$IFn$_invoke$arity$1(G__8430),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__8430),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
paintscript.els.MainPnt = (function (xy,xy_abs,ii_pnt,__meta,__extmap,__hash){
this.xy = xy;
this.xy_abs = xy_abs;
this.ii_pnt = ii_pnt;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
paintscript.els.MainPnt.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

paintscript.els.MainPnt.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k8453,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__8457 = k8453;
var G__8457__$1 = (((G__8457 instanceof cljs.core.Keyword))?G__8457.fqn:null);
switch (G__8457__$1) {
case "xy":
return self__.xy;

break;
case "xy-abs":
return self__.xy_abs;

break;
case "ii-pnt":
return self__.ii_pnt;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8453,else__4388__auto__);

}
});

paintscript.els.MainPnt.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__8458){
var vec__8459 = p__8458;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8459,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8459,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

paintscript.els.MainPnt.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#paintscript.els.MainPnt{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$xy,self__.xy],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$xy_DASH_abs,self__.xy_abs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ii_DASH_pnt,self__.ii_pnt],null))], null),self__.__extmap));
});

paintscript.els.MainPnt.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8452){
var self__ = this;
var G__8452__$1 = this;
return (new cljs.core.RecordIter((0),G__8452__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xy,cljs.core.cst$kw$xy_DASH_abs,cljs.core.cst$kw$ii_DASH_pnt], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

paintscript.els.MainPnt.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

paintscript.els.MainPnt.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new paintscript.els.MainPnt(self__.xy,self__.xy_abs,self__.ii_pnt,self__.__meta,self__.__extmap,self__.__hash));
});

paintscript.els.MainPnt.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

paintscript.els.MainPnt.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__8462 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1073269206 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__8462(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

paintscript.els.MainPnt.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8454,other8455){
var self__ = this;
var this8454__$1 = this;
return (((!((other8455 == null)))) && ((this8454__$1.constructor === other8455.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8454__$1.xy,other8455.xy)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8454__$1.xy_abs,other8455.xy_abs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8454__$1.ii_pnt,other8455.ii_pnt)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8454__$1.__extmap,other8455.__extmap)));
});

paintscript.els.MainPnt.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$xy,null,cljs.core.cst$kw$ii_DASH_pnt,null,cljs.core.cst$kw$xy_DASH_abs,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new paintscript.els.MainPnt(self__.xy,self__.xy_abs,self__.ii_pnt,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

paintscript.els.MainPnt.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__8452){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__8463 = cljs.core.keyword_identical_QMARK_;
var expr__8464 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__8466 = cljs.core.cst$kw$xy;
var G__8467 = expr__8464;
return (pred__8463.cljs$core$IFn$_invoke$arity$2 ? pred__8463.cljs$core$IFn$_invoke$arity$2(G__8466,G__8467) : pred__8463.call(null,G__8466,G__8467));
})())){
return (new paintscript.els.MainPnt(G__8452,self__.xy_abs,self__.ii_pnt,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8468 = cljs.core.cst$kw$xy_DASH_abs;
var G__8469 = expr__8464;
return (pred__8463.cljs$core$IFn$_invoke$arity$2 ? pred__8463.cljs$core$IFn$_invoke$arity$2(G__8468,G__8469) : pred__8463.call(null,G__8468,G__8469));
})())){
return (new paintscript.els.MainPnt(self__.xy,G__8452,self__.ii_pnt,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8470 = cljs.core.cst$kw$ii_DASH_pnt;
var G__8471 = expr__8464;
return (pred__8463.cljs$core$IFn$_invoke$arity$2 ? pred__8463.cljs$core$IFn$_invoke$arity$2(G__8470,G__8471) : pred__8463.call(null,G__8470,G__8471));
})())){
return (new paintscript.els.MainPnt(self__.xy,self__.xy_abs,G__8452,self__.__meta,self__.__extmap,null));
} else {
return (new paintscript.els.MainPnt(self__.xy,self__.xy_abs,self__.ii_pnt,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__8452),null));
}
}
}
});

paintscript.els.MainPnt.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$xy,self__.xy,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$xy_DASH_abs,self__.xy_abs,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$ii_DASH_pnt,self__.ii_pnt,null))], null),self__.__extmap));
});

paintscript.els.MainPnt.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__8452){
var self__ = this;
var this__4384__auto____$1 = this;
return (new paintscript.els.MainPnt(self__.xy,self__.xy_abs,self__.ii_pnt,G__8452,self__.__extmap,self__.__hash));
});

paintscript.els.MainPnt.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

paintscript.els.MainPnt.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$xy,cljs.core.cst$sym$xy_DASH_abs,cljs.core.cst$sym$ii_DASH_pnt], null);
});

paintscript.els.MainPnt.cljs$lang$type = true;

paintscript.els.MainPnt.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"paintscript.els/MainPnt",null,(1),null));
});

paintscript.els.MainPnt.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"paintscript.els/MainPnt");
});

/**
 * Positional factory function for paintscript.els/MainPnt.
 */
paintscript.els.__GT_MainPnt = (function paintscript$els$__GT_MainPnt(xy,xy_abs,ii_pnt){
return (new paintscript.els.MainPnt(xy,xy_abs,ii_pnt,null,null,null));
});

/**
 * Factory function for paintscript.els/MainPnt, taking a map of keywords to field values.
 */
paintscript.els.map__GT_MainPnt = (function paintscript$els$map__GT_MainPnt(G__8456){
var extmap__4424__auto__ = (function (){var G__8472 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8456,cljs.core.cst$kw$xy,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$xy_DASH_abs,cljs.core.cst$kw$ii_DASH_pnt], 0));
if(cljs.core.record_QMARK_(G__8456)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8472);
} else {
return G__8472;
}
})();
return (new paintscript.els.MainPnt(cljs.core.cst$kw$xy.cljs$core$IFn$_invoke$arity$1(G__8456),cljs.core.cst$kw$xy_DASH_abs.cljs$core$IFn$_invoke$arity$1(G__8456),cljs.core.cst$kw$ii_DASH_pnt.cljs$core$IFn$_invoke$arity$1(G__8456),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
paintscript.els.CtrlPnt = (function (xy,xy_abs,ii_pnt,i_main,__meta,__extmap,__hash){
this.xy = xy;
this.xy_abs = xy_abs;
this.ii_pnt = ii_pnt;
this.i_main = i_main;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
paintscript.els.CtrlPnt.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

paintscript.els.CtrlPnt.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k8475,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__8479 = k8475;
var G__8479__$1 = (((G__8479 instanceof cljs.core.Keyword))?G__8479.fqn:null);
switch (G__8479__$1) {
case "xy":
return self__.xy;

break;
case "xy-abs":
return self__.xy_abs;

break;
case "ii-pnt":
return self__.ii_pnt;

break;
case "i-main":
return self__.i_main;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8475,else__4388__auto__);

}
});

paintscript.els.CtrlPnt.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__8480){
var vec__8481 = p__8480;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8481,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8481,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

paintscript.els.CtrlPnt.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#paintscript.els.CtrlPnt{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$xy,self__.xy],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$xy_DASH_abs,self__.xy_abs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ii_DASH_pnt,self__.ii_pnt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$i_DASH_main,self__.i_main],null))], null),self__.__extmap));
});

paintscript.els.CtrlPnt.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8474){
var self__ = this;
var G__8474__$1 = this;
return (new cljs.core.RecordIter((0),G__8474__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xy,cljs.core.cst$kw$xy_DASH_abs,cljs.core.cst$kw$ii_DASH_pnt,cljs.core.cst$kw$i_DASH_main], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

paintscript.els.CtrlPnt.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

paintscript.els.CtrlPnt.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new paintscript.els.CtrlPnt(self__.xy,self__.xy_abs,self__.ii_pnt,self__.i_main,self__.__meta,self__.__extmap,self__.__hash));
});

paintscript.els.CtrlPnt.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

paintscript.els.CtrlPnt.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__8484 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (542420326 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__8484(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

paintscript.els.CtrlPnt.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8476,other8477){
var self__ = this;
var this8476__$1 = this;
return (((!((other8477 == null)))) && ((this8476__$1.constructor === other8477.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8476__$1.xy,other8477.xy)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8476__$1.xy_abs,other8477.xy_abs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8476__$1.ii_pnt,other8477.ii_pnt)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8476__$1.i_main,other8477.i_main)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8476__$1.__extmap,other8477.__extmap)));
});

paintscript.els.CtrlPnt.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$xy,null,cljs.core.cst$kw$ii_DASH_pnt,null,cljs.core.cst$kw$i_DASH_main,null,cljs.core.cst$kw$xy_DASH_abs,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new paintscript.els.CtrlPnt(self__.xy,self__.xy_abs,self__.ii_pnt,self__.i_main,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

paintscript.els.CtrlPnt.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__8474){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__8485 = cljs.core.keyword_identical_QMARK_;
var expr__8486 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__8488 = cljs.core.cst$kw$xy;
var G__8489 = expr__8486;
return (pred__8485.cljs$core$IFn$_invoke$arity$2 ? pred__8485.cljs$core$IFn$_invoke$arity$2(G__8488,G__8489) : pred__8485.call(null,G__8488,G__8489));
})())){
return (new paintscript.els.CtrlPnt(G__8474,self__.xy_abs,self__.ii_pnt,self__.i_main,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8490 = cljs.core.cst$kw$xy_DASH_abs;
var G__8491 = expr__8486;
return (pred__8485.cljs$core$IFn$_invoke$arity$2 ? pred__8485.cljs$core$IFn$_invoke$arity$2(G__8490,G__8491) : pred__8485.call(null,G__8490,G__8491));
})())){
return (new paintscript.els.CtrlPnt(self__.xy,G__8474,self__.ii_pnt,self__.i_main,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8492 = cljs.core.cst$kw$ii_DASH_pnt;
var G__8493 = expr__8486;
return (pred__8485.cljs$core$IFn$_invoke$arity$2 ? pred__8485.cljs$core$IFn$_invoke$arity$2(G__8492,G__8493) : pred__8485.call(null,G__8492,G__8493));
})())){
return (new paintscript.els.CtrlPnt(self__.xy,self__.xy_abs,G__8474,self__.i_main,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8494 = cljs.core.cst$kw$i_DASH_main;
var G__8495 = expr__8486;
return (pred__8485.cljs$core$IFn$_invoke$arity$2 ? pred__8485.cljs$core$IFn$_invoke$arity$2(G__8494,G__8495) : pred__8485.call(null,G__8494,G__8495));
})())){
return (new paintscript.els.CtrlPnt(self__.xy,self__.xy_abs,self__.ii_pnt,G__8474,self__.__meta,self__.__extmap,null));
} else {
return (new paintscript.els.CtrlPnt(self__.xy,self__.xy_abs,self__.ii_pnt,self__.i_main,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__8474),null));
}
}
}
}
});

paintscript.els.CtrlPnt.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$xy,self__.xy,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$xy_DASH_abs,self__.xy_abs,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$ii_DASH_pnt,self__.ii_pnt,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$i_DASH_main,self__.i_main,null))], null),self__.__extmap));
});

paintscript.els.CtrlPnt.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__8474){
var self__ = this;
var this__4384__auto____$1 = this;
return (new paintscript.els.CtrlPnt(self__.xy,self__.xy_abs,self__.ii_pnt,self__.i_main,G__8474,self__.__extmap,self__.__hash));
});

paintscript.els.CtrlPnt.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

paintscript.els.CtrlPnt.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$xy,cljs.core.cst$sym$xy_DASH_abs,cljs.core.cst$sym$ii_DASH_pnt,cljs.core.cst$sym$i_DASH_main], null);
});

paintscript.els.CtrlPnt.cljs$lang$type = true;

paintscript.els.CtrlPnt.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"paintscript.els/CtrlPnt",null,(1),null));
});

paintscript.els.CtrlPnt.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"paintscript.els/CtrlPnt");
});

/**
 * Positional factory function for paintscript.els/CtrlPnt.
 */
paintscript.els.__GT_CtrlPnt = (function paintscript$els$__GT_CtrlPnt(xy,xy_abs,ii_pnt,i_main){
return (new paintscript.els.CtrlPnt(xy,xy_abs,ii_pnt,i_main,null,null,null));
});

/**
 * Factory function for paintscript.els/CtrlPnt, taking a map of keywords to field values.
 */
paintscript.els.map__GT_CtrlPnt = (function paintscript$els$map__GT_CtrlPnt(G__8478){
var extmap__4424__auto__ = (function (){var G__8496 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8478,cljs.core.cst$kw$xy,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$xy_DASH_abs,cljs.core.cst$kw$ii_DASH_pnt,cljs.core.cst$kw$i_DASH_main], 0));
if(cljs.core.record_QMARK_(G__8478)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8496);
} else {
return G__8496;
}
})();
return (new paintscript.els.CtrlPnt(cljs.core.cst$kw$xy.cljs$core$IFn$_invoke$arity$1(G__8478),cljs.core.cst$kw$xy_DASH_abs.cljs$core$IFn$_invoke$arity$1(G__8478),cljs.core.cst$kw$ii_DASH_pnt.cljs$core$IFn$_invoke$arity$1(G__8478),cljs.core.cst$kw$i_DASH_main.cljs$core$IFn$_invoke$arity$1(G__8478),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

paintscript.els.args___GT_pnts = (function paintscript$els$args___GT_pnts(p__8498,eli,p__8499){
var map__8500 = p__8498;
var map__8500__$1 = (((((!((map__8500 == null))))?(((((map__8500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8500):map__8500);
var el = map__8500__$1;
var el_k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8500__$1,cljs.core.cst$kw$el_DASH_k);
var i_arg0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8500__$1,cljs.core.cst$kw$i_DASH_arg0);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8500__$1,cljs.core.cst$kw$args);
var map__8501 = p__8499;
var map__8501__$1 = (((((!((map__8501 == null))))?(((((map__8501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8501):map__8501);
var el_meta = map__8501__$1;
var ii_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8501__$1,cljs.core.cst$kw$ii_DASH_el);
var cp_cnt = (cljs.core.count(args) - (1));
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (cp_cnt,map__8500,map__8500__$1,el,el_k,i_arg0,args,map__8501,map__8501__$1,el_meta,ii_el){
return (function (i_xy,xy){
var ii_pnt = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ii_el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i_arg0 + i_xy)], null));
if(cljs.core.truth_((function (){var and__4120__auto__ = (paintscript.el.has_cp_QMARK_.cljs$core$IFn$_invoke$arity$1 ? paintscript.el.has_cp_QMARK_.cljs$core$IFn$_invoke$arity$1(el_k) : paintscript.el.has_cp_QMARK_.call(null,el_k));
if(cljs.core.truth_(and__4120__auto__)){
return (i_xy < cp_cnt);
} else {
return and__4120__auto__;
}
})())){
var i_main = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cp_cnt)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),i_xy))))?(eli - (1)):eli);
return paintscript.els.__GT_CtrlPnt(xy,cljs.core.cst$kw$xy_DASH_abs.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(xy)),ii_pnt,i_main);
} else {
return paintscript.els.__GT_MainPnt(xy,cljs.core.cst$kw$xy_DASH_abs.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(xy)),ii_pnt);
}
});})(cp_cnt,map__8500,map__8500__$1,el,el_k,i_arg0,args,map__8501,map__8501__$1,el_meta,ii_el))
,args);
});
paintscript.els.el_pnts = (function paintscript$els$el_pnts(el_recs){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (eli,el){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,paintscript.els.args___GT_pnts(el,eli,cljs.core.meta(el))], null);
}),el_recs);
});
paintscript.els.resolve_els_ref = (function paintscript$els$resolve_els_ref(defs,ref){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(defs,cljs.core.get.cljs$core$IFn$_invoke$arity$2(ref,(1)));
});
paintscript.els.resolve_d_ref = (function paintscript$els$resolve_d_ref(defs,ref){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(defs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$d,cljs.core.get.cljs$core$IFn$_invoke$arity$2(ref,(1))], null));
});
paintscript.els.resolve_els_refs = (function paintscript$els$resolve_els_refs(defs,els){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (el){
if(paintscript.el.ref_QMARK_(el)){
return paintscript.els.attach_ii_el_meta(cljs.core.cst$kw$defs,cljs.core.get.cljs$core$IFn$_invoke$arity$2(el,(1)),(0),paintscript.els.resolve_els_ref(defs,el));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([els], 0));
});
paintscript.els.get_path_segment = (function paintscript$els$get_path_segment(src_k_sel,els,eli){
var el_prev = paintscript.nav.els_prev.cljs$core$IFn$_invoke$arity$variadic(els,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__8507 = src_k_sel;
var G__8507__$1 = (((G__8507 instanceof cljs.core.Keyword))?G__8507.fqn:null);
switch (G__8507__$1) {
case "defs":
return cljs.core.cst$kw$eln;

break;
default:
return cljs.core.cst$kw$eli;

}
})(),eli], 0));
var vec__8504 = paintscript.nav.els_GT_.cljs$core$IFn$_invoke$arity$variadic(els,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__8508 = src_k_sel;
var G__8508__$1 = (((G__8508 instanceof cljs.core.Keyword))?G__8508.fqn:null);
switch (G__8508__$1) {
case "defs":
return cljs.core.cst$kw$eln;

break;
default:
return cljs.core.cst$kw$eli;

}
})(),eli], 0));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8504,(0),null);
var el = vec__8504;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__4120__auto__ = el_prev;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$M,cljs.core.first(el));
} else {
return and__4120__auto__;
}
})())?(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$M,cljs.core.last(el_prev)], null),null,(1),null)):null),(new cljs.core.List(null,el,null,(1),null)));
});
paintscript.els.el_vec___GT_el_rec = (function paintscript$els$el_vec___GT_el_rec(var_args){
var G__8512 = arguments.length;
switch (G__8512) {
case 1:
return paintscript.els.el_vec___GT_el_rec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paintscript.els.el_vec___GT_el_rec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

paintscript.els.el_vec___GT_el_rec.cljs$core$IFn$_invoke$arity$1 = (function (elv){
return paintscript.els.el_vec___GT_el_rec.cljs$core$IFn$_invoke$arity$2(elv,null);
});

paintscript.els.el_vec___GT_el_rec.cljs$core$IFn$_invoke$arity$2 = (function (p__8513,ii_el){
var vec__8514 = p__8513;
var seq__8515 = cljs.core.seq(vec__8514);
var first__8516 = cljs.core.first(seq__8515);
var seq__8515__$1 = cljs.core.next(seq__8515);
var el_k = first__8516;
var vec__8517 = seq__8515__$1;
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8517,(0),null);
var args = vec__8517;
var el_vec = vec__8514;
return cljs.core.with_meta(((cljs.core.map_QMARK_(arg1))?paintscript.els.__GT_El(el_k,arg1,ii_el,(2),cljs.core.rest(args)):paintscript.els.__GT_El(el_k,null,ii_el,(1),args)),cljs.core.meta(el_vec));
});

paintscript.els.el_vec___GT_el_rec.cljs$lang$maxFixedArity = 2;

paintscript.els.apply_repeat = (function paintscript$els$apply_repeat(els,params,opts){
var opts_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$repeat),cljs.core.cst$kw$repeat.cljs$core$IFn$_invoke$arity$1(opts)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts_SINGLEQUOTE_){
return (function (p__8521,_){
var vec__8522 = p__8521;
var els_prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8522,(0),null);
var acc = vec__8522;
var els_SINGLEQUOTE_ = (paintscript.els.apply_path_opts.cljs$core$IFn$_invoke$arity$3 ? paintscript.els.apply_path_opts.cljs$core$IFn$_invoke$arity$3(params,opts_SINGLEQUOTE_,els_prev) : paintscript.els.apply_path_opts.call(null,params,opts_SINGLEQUOTE_,els_prev));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,els_SINGLEQUOTE_);
});})(opts_SINGLEQUOTE_))
,(new cljs.core.List(null,els,null,(1),null)),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$repeat,cljs.core.cst$kw$times], null)))));
});
paintscript.els.apply_path_opts = (function paintscript$els$apply_path_opts(p__8525,p__8526,els){
var map__8527 = p__8525;
var map__8527__$1 = (((((!((map__8527 == null))))?(((((map__8527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8527):map__8527);
var params = map__8527__$1;
var defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8527__$1,cljs.core.cst$kw$defs);
var debug_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8527__$1,cljs.core.cst$kw$debug_QMARK_);
var coords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8527__$1,cljs.core.cst$kw$coords_QMARK_);
var map__8528 = p__8526;
var map__8528__$1 = (((((!((map__8528 == null))))?(((((map__8528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8528):map__8528);
var opts = map__8528__$1;
var map__8529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8528__$1,cljs.core.cst$kw$scale);
var map__8529__$1 = (((((!((map__8529 == null))))?(((((map__8529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8529):map__8529);
var scale = map__8529__$1;
var scale_ctr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8529__$1,cljs.core.cst$kw$center);
var scale_factor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8529__$1,cljs.core.cst$kw$factor);
var map__8530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8528__$1,cljs.core.cst$kw$rotate);
var map__8530__$1 = (((((!((map__8530 == null))))?(((((map__8530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8530):map__8530);
var rotate = map__8530__$1;
var rot_ctr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8530__$1,cljs.core.cst$kw$center);
var rot_deg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8530__$1,cljs.core.cst$kw$degree);
var translate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8528__$1,cljs.core.cst$kw$translate);
var map__8531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8528__$1,cljs.core.cst$kw$mirror);
var map__8531__$1 = (((((!((map__8531 == null))))?(((((map__8531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8531):map__8531);
var mirror_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8531__$1,cljs.core.cst$kw$mode);
var mirror_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8531__$1,cljs.core.cst$kw$pos,(100));
var mirror_axis = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8531__$1,cljs.core.cst$kw$axis,(0));
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8528__$1,cljs.core.cst$kw$close_QMARK_);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8528__$1,cljs.core.cst$kw$width);
var mirror = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8528__$1,cljs.core.cst$kw$mirror);
var repeat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8528__$1,cljs.core.cst$kw$repeat);
var G__8537 = paintscript.els.resolve_els_refs(defs,els);
var G__8537__$1 = (cljs.core.truth_(scale)?paintscript.els.scale_els(G__8537,scale_ctr,scale_factor):G__8537);
var G__8537__$2 = (cljs.core.truth_(translate)?paintscript.els.translate_els(G__8537__$1,translate):G__8537__$1);
var G__8537__$3 = (cljs.core.truth_(rotate)?paintscript.els.rotate_els(G__8537__$2,rot_ctr,rot_deg):G__8537__$2);
var G__8537__$4 = (cljs.core.truth_(close_QMARK_)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__8537__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$z], null)], null)):G__8537__$3);
var G__8537__$5 = (cljs.core.truth_((function (){var and__4120__auto__ = repeat;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(debug_QMARK_);
} else {
return and__4120__auto__;
}
})())?paintscript.els.apply_repeat(G__8537__$4,params,opts):G__8537__$4);
if(cljs.core.truth_((function (){var and__4120__auto__ = mirror;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(coords_QMARK_);
} else {
return and__4120__auto__;
}
})())){
return paintscript.els.add_mirrored(mirror_mode,mirror_axis,mirror_pos,G__8537__$5);
} else {
return G__8537__$5;
}
});
