// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('svg_hiccup_kit.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
svg_hiccup_kit.core.classes = (function svg_hiccup_kit$core$classes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___7410 = arguments.length;
var i__4731__auto___7411 = (0);
while(true){
if((i__4731__auto___7411 < len__4730__auto___7410)){
args__4736__auto__.push((arguments[i__4731__auto___7411]));

var G__7412 = (i__4731__auto___7411 + (1));
i__4731__auto___7411 = G__7412;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return svg_hiccup_kit.core.classes.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

svg_hiccup_kit.core.classes.cljs$core$IFn$_invoke$arity$variadic = (function (cc){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.first),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cc))));
});

svg_hiccup_kit.core.classes.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
svg_hiccup_kit.core.classes.cljs$lang$applyTo = (function (seq7409){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7409));
});

svg_hiccup_kit.core.d = (function svg_hiccup_kit$core$d(var_args){
var args__4736__auto__ = [];
var len__4730__auto___7414 = arguments.length;
var i__4731__auto___7415 = (0);
while(true){
if((i__4731__auto___7415 < len__4730__auto___7414)){
args__4736__auto__.push((arguments[i__4731__auto___7415]));

var G__7416 = (i__4731__auto___7415 + (1));
i__4731__auto___7415 = G__7416;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return svg_hiccup_kit.core.d.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

svg_hiccup_kit.core.d.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args);
});

svg_hiccup_kit.core.d.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
svg_hiccup_kit.core.d.cljs$lang$applyTo = (function (seq7413){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7413));
});

svg_hiccup_kit.core.d2 = (function svg_hiccup_kit$core$d2(var_args){
var args__4736__auto__ = [];
var len__4730__auto___7418 = arguments.length;
var i__4731__auto___7419 = (0);
while(true){
if((i__4731__auto___7419 < len__4730__auto___7418)){
args__4736__auto__.push((arguments[i__4731__auto___7419]));

var G__7420 = (i__4731__auto___7419 + (1));
i__4731__auto___7419 = G__7420;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return svg_hiccup_kit.core.d2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

svg_hiccup_kit.core.d2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,args));
});

svg_hiccup_kit.core.d2.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
svg_hiccup_kit.core.d2.cljs$lang$applyTo = (function (seq7417){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7417));
});

svg_hiccup_kit.core.rad_to_deg = (function svg_hiccup_kit$core$rad_to_deg(rad){
return (rad * ((180) / Math.PI));
});
svg_hiccup_kit.core.slope_to_deg = (function svg_hiccup_kit$core$slope_to_deg(slope){
return svg_hiccup_kit.core.rad_to_deg(Math.atan(slope));
});
svg_hiccup_kit.core.unwrap = (function svg_hiccup_kit$core$unwrap(lst){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lst),(1))){
return cljs.core.first(lst);
} else {
return lst;
}
});
svg_hiccup_kit.core.transform_string = (function svg_hiccup_kit$core$transform_string(ctx,p__7421){
var map__7422 = p__7421;
var map__7422__$1 = (((((!((map__7422 == null))))?(((((map__7422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7422):map__7422);
var params = map__7422__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7422__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7422__$1,cljs.core.cst$kw$y);
var tl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7422__$1,cljs.core.cst$kw$tl);
var rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7422__$1,cljs.core.cst$kw$rt);
var sc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7422__$1,cljs.core.cst$kw$sc);
return [(((((!((x == null)))) || ((!((y == null))))))?["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = x;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})()),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = y;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})()),")"].join(''):null),(((!((tl == null))))?["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2((function (){var G__7435 = ctx;
var G__7435__$1 = (((G__7435 instanceof cljs.core.Keyword))?G__7435.fqn:null);
switch (G__7435__$1) {
case "style":
return ",px";

break;
default:
return ",";

}
})(),tl)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__7436 = ctx;
var G__7436__$1 = (((G__7436 instanceof cljs.core.Keyword))?G__7436.fqn:null);
switch (G__7436__$1) {
case "style":
return "px";

break;
default:
return "";

}
})()),")"].join(''):null),(((!((rt == null))))?(function (){var vec__7437 = rt;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7437,(0),null);
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7437,(1),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7437,(2),null);
return ["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__7441 = ctx;
var G__7441__$1 = (((G__7441 instanceof cljs.core.Keyword))?G__7441.fqn:null);
switch (G__7441__$1) {
case "style":
return "deg";

break;
default:
return "";

}
})()),(cljs.core.truth_((function (){var and__4120__auto__ = x__$1;
if(cljs.core.truth_(and__4120__auto__)){
return y__$1;
} else {
return and__4120__auto__;
}
})())?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y__$1)].join(''):null),")"].join('');
})():null),(((!((sc == null))))?["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",sc)),")"].join(''):null)].join('');
});
svg_hiccup_kit.core.tf = (function svg_hiccup_kit$core$tf(p__7445,content){
var map__7446 = p__7445;
var map__7446__$1 = (((((!((map__7446 == null))))?(((((map__7446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7446):map__7446);
var params = map__7446__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7446__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7446__$1,cljs.core.cst$kw$y);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7446__$1,cljs.core.cst$kw$key);
var tl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7446__$1,cljs.core.cst$kw$tl);
var cc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7446__$1,cljs.core.cst$kw$cc);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7446__$1,cljs.core.cst$kw$s);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7446__$1,cljs.core.cst$kw$c);
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__7446__$1,cljs.core.cst$kw$g,cljs.core.cst$kw$g);
var rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7446__$1,cljs.core.cst$kw$rt);
var sc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7446__$1,cljs.core.cst$kw$sc);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,(function (){var or__4131__auto__ = c;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__7448 = cc;
if((G__7448 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",G__7448);
}
}
})(),cljs.core.cst$kw$transform,svg_hiccup_kit.core.transform_string(cljs.core.cst$kw$attr,params),cljs.core.cst$kw$style,s], null),content], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null));
});
svg_hiccup_kit.core.tf_STAR_ = (function svg_hiccup_kit$core$tf_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___7455 = arguments.length;
var i__4731__auto___7456 = (0);
while(true){
if((i__4731__auto___7456 < len__4730__auto___7455)){
args__4736__auto__.push((arguments[i__4731__auto___7456]));

var G__7457 = (i__4731__auto___7456 + (1));
i__4731__auto___7456 = G__7457;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return svg_hiccup_kit.core.tf_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

svg_hiccup_kit.core.tf_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__7451,contents){
var map__7452 = p__7451;
var map__7452__$1 = (((((!((map__7452 == null))))?(((((map__7452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7452):map__7452);
var params = map__7452__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7452__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7452__$1,cljs.core.cst$kw$y);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7452__$1,cljs.core.cst$kw$key);
var tl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7452__$1,cljs.core.cst$kw$tl);
var cc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7452__$1,cljs.core.cst$kw$cc);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7452__$1,cljs.core.cst$kw$s);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7452__$1,cljs.core.cst$kw$c);
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__7452__$1,cljs.core.cst$kw$g,cljs.core.cst$kw$g);
var rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7452__$1,cljs.core.cst$kw$rt);
var sc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7452__$1,cljs.core.cst$kw$sc);
return cljs.core.with_meta(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,(function (){var or__4131__auto__ = c;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__7454 = cc;
if((G__7454 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",G__7454);
}
}
})(),cljs.core.cst$kw$transform,svg_hiccup_kit.core.transform_string(cljs.core.cst$kw$attr,params),cljs.core.cst$kw$style,s], null)], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,contents))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null));
});

svg_hiccup_kit.core.tf_STAR_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
svg_hiccup_kit.core.tf_STAR_.cljs$lang$applyTo = (function (seq7449){
var G__7450 = cljs.core.first(seq7449);
var seq7449__$1 = cljs.core.next(seq7449);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7450,seq7449__$1);
});

svg_hiccup_kit.core.zoom_and_tl = (function svg_hiccup_kit$core$zoom_and_tl(k,p__7458,x){
var vec__7459 = p__7458;
var w_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7459,(0),null);
var h_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7459,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg_hiccup_kit.core.tf,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,k], null),cljs.core.cst$kw$tl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((1) - k) * (w_shape / (2))),(((1) - k) * (h_shape / (2)))], null)], null),x], null);
});
