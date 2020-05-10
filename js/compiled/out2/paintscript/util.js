// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('paintscript.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
paintscript.util.map_vals = (function paintscript$util$map_vals(f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__7524){
var vec__7525 = p__7524;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7525,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7525,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),coll);
});
paintscript.util.merge_maps = (function paintscript$util$merge_maps(var_args){
var args__4736__auto__ = [];
var len__4730__auto___7529 = arguments.length;
var i__4731__auto___7530 = (0);
while(true){
if((i__4731__auto___7530 < len__4730__auto___7529)){
args__4736__auto__.push((arguments[i__4731__auto___7530]));

var G__7531 = (i__4731__auto___7530 + (1));
i__4731__auto___7530 = G__7531;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return paintscript.util.merge_maps.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

paintscript.util.merge_maps.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,args);
} else {
return cljs.core.last(args);
}
});

paintscript.util.merge_maps.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
paintscript.util.merge_maps.cljs$lang$applyTo = (function (seq7528){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7528));
});

paintscript.util.merge_configs = (function paintscript$util$merge_configs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___7533 = arguments.length;
var i__4731__auto___7534 = (0);
while(true){
if((i__4731__auto___7534 < len__4730__auto___7533)){
args__4736__auto__.push((arguments[i__4731__auto___7534]));

var G__7535 = (i__4731__auto___7534 + (1));
i__4731__auto___7534 = G__7535;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return paintscript.util.merge_configs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

paintscript.util.merge_configs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,paintscript.util.merge_maps,args);
});

paintscript.util.merge_configs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
paintscript.util.merge_configs.cljs$lang$applyTo = (function (seq7532){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7532));
});

paintscript.util.round = (function paintscript$util$round(n){
return Math.round(n);
});
paintscript.util.round1 = (function paintscript$util$round1(n){
return ((function (){var G__7536 = ((n + Number.EPSILON) * (10));
return Math.round(G__7536);
})() / (10));
});
paintscript.util.round2 = (function paintscript$util$round2(n){
return ((function (){var G__7537 = ((n + Number.EPSILON) * (100));
return Math.round(G__7537);
})() / (100));
});
paintscript.util.sign = (function paintscript$util$sign(n){
if((n < (0))){
return (-1);
} else {
return (1);
}
});
paintscript.util.PI = Math.PI;
paintscript.util.rad = (function paintscript$util$rad(deg){
return (deg * (paintscript.util.PI / (180)));
});
paintscript.util.deg = (function paintscript$util$deg(rad){
return (rad * ((180) / paintscript.util.PI));
});
paintscript.util.pow = (function paintscript$util$pow(p1__7538_SHARP_,p2__7539_SHARP_){
return Math.pow(p1__7538_SHARP_,p2__7539_SHARP_);
});
paintscript.util.sqrt = (function paintscript$util$sqrt(p1__7540_SHARP_){
return Math.sqrt(p1__7540_SHARP_);
});
paintscript.util.cos = (function paintscript$util$cos(p1__7541_SHARP_){
return Math.cos(p1__7541_SHARP_);
});
paintscript.util.sin = (function paintscript$util$sin(p1__7542_SHARP_){
return Math.sin(p1__7542_SHARP_);
});
paintscript.util.atan = (function paintscript$util$atan(p1__7543_SHARP_){
return Math.atan(p1__7543_SHARP_);
});
paintscript.util.cos_SINGLEQUOTE_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(paintscript.util.cos,paintscript.util.rad);
paintscript.util.sin_SINGLEQUOTE_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(paintscript.util.sin,paintscript.util.rad);
paintscript.util.atan_SINGLEQUOTE_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(paintscript.util.deg,paintscript.util.atan);
paintscript.util.slope = (function paintscript$util$slope(p__7544,p__7545){
var vec__7546 = p__7544;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7546,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7546,(1),null);
var vec__7549 = p__7545;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7549,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7549,(1),null);
var denom = (x2 - x1);
if((denom === (0))){
return null;
} else {
return ((y2 - y1) / denom);
}
});
paintscript.util.dist = (function paintscript$util$dist(p__7552,p__7553){
var vec__7554 = p__7552;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7554,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7554,(1),null);
var vec__7557 = p__7553;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7557,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7557,(1),null);
return paintscript.util.sqrt((paintscript.util.pow((y2 - y1),(2)) + paintscript.util.pow((x2 - x1),(2))));
});
paintscript.util.v_PLUS_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(paintscript.util.round2,cljs.core._PLUS_));
paintscript.util.tl_point = (function paintscript$util$tl_point(p__7560,p__7561){
var vec__7562 = p__7560;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7562,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7562,(1),null);
var vec__7565 = p__7561;
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7565,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7565,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null);
});
paintscript.util.tl_point_along = (function paintscript$util$tl_point_along(p__7568,a,l){
var vec__7569 = p__7568;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7569,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7569,(1),null);
var x_SINGLEQUOTE_ = (x + (l * (paintscript.util.cos_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? paintscript.util.cos_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(a) : paintscript.util.cos_SINGLEQUOTE_.call(null,a))));
var y_SINGLEQUOTE_ = (y + (l * (paintscript.util.sin_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? paintscript.util.sin_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(a) : paintscript.util.sin_SINGLEQUOTE_.call(null,a))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null);
});
paintscript.util.angle_delta = (function paintscript$util$angle_delta(p__7572,p__7573){
var vec__7574 = p__7572;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7574,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7574,(1),null);
var xy1 = vec__7574;
var vec__7577 = p__7573;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7577,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7577,(1),null);
var xy2 = vec__7577;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,x2)){
var G__7580 = (90);
if(((y2 - y1) < (0))){
return (- G__7580);
} else {
return G__7580;
}
} else {
var slope = paintscript.util.slope(xy1,xy2);
return (paintscript.util.atan_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? paintscript.util.atan_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(slope) : paintscript.util.atan_SINGLEQUOTE_.call(null,slope));
}
});
paintscript.util.tl_point_towards = (function paintscript$util$tl_point_towards(pnt,ctr,factor){
var factor__$1 = (- factor);
var vec__7581 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._,ctr,pnt);
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7581,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7581,(1),null);
var dist = paintscript.util.dist(ctr,pnt);
var dist_mv = ((dist - ((1) - (dist * factor__$1))) * paintscript.util.sign(dx));
return paintscript.util.tl_point_along(pnt,paintscript.util.angle_delta(pnt,ctr),dist_mv);
});
paintscript.util.angle_between = (function paintscript$util$angle_between(p__7584,p__7585){
var vec__7586 = p__7584;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7586,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7586,(1),null);
var xy1 = vec__7586;
var vec__7589 = p__7585;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7589,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7589,(1),null);
var xy2 = vec__7589;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,x2)){
if((y2 > y1)){
return (270);
} else {
return (90);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y1,y2)){
if((x2 > x1)){
return (0);
} else {
return (180);
}
} else {
var sl = paintscript.util.slope(xy1,xy2);
var G__7592 = (function (){var G__7593 = (- sl);
return (paintscript.util.atan_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? paintscript.util.atan_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(G__7593) : paintscript.util.atan_SINGLEQUOTE_.call(null,G__7593));
})();
if((((((sl > (0))) && ((x1 > x2)))) || ((((sl < (0))) && ((x2 < x1)))))){
return (G__7592 + (180));
} else {
return G__7592;
}

}
}
});
paintscript.util.rad_between = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(paintscript.util.rad,paintscript.util.angle_between);
/**
 * divide the ellipse into `n-segs` and return the position of `i-seg`
 */
paintscript.util.point_on_ellipse = (function paintscript$util$point_on_ellipse(p__7594,offset,n_segs,i_seg){
var vec__7595 = p__7594;
var rx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7595,(0),null);
var ry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7595,(1),null);
var ellipse = vec__7595;
var rad = ((((- (paintscript.util.PI - ((2) * offset))) / (n_segs - (1))) * i_seg) - offset);
var x = (rx * Math.cos(rad));
var y = (ry * Math.sin(rad));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
paintscript.util.point_at_angle = (function paintscript$util$point_at_angle(var_args){
var G__7599 = arguments.length;
switch (G__7599) {
case 2:
return paintscript.util.point_at_angle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paintscript.util.point_at_angle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

paintscript.util.point_at_angle.cljs$core$IFn$_invoke$arity$2 = (function (radius,alpha){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius * (function (){var G__7600 = (- alpha);
return (paintscript.util.cos_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? paintscript.util.cos_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(G__7600) : paintscript.util.cos_SINGLEQUOTE_.call(null,G__7600));
})()),(radius * (function (){var G__7601 = (- alpha);
return (paintscript.util.sin_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? paintscript.util.sin_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(G__7601) : paintscript.util.sin_SINGLEQUOTE_.call(null,G__7601));
})())], null);
});

paintscript.util.point_at_angle.cljs$core$IFn$_invoke$arity$3 = (function (center,radius,alpha){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,center,paintscript.util.point_at_angle.cljs$core$IFn$_invoke$arity$2(radius,alpha));
});

paintscript.util.point_at_angle.cljs$lang$maxFixedArity = 3;

paintscript.util.tl_point_around = (function paintscript$util$tl_point_around(ctr,pnt,alphad){
var alpha0 = paintscript.util.angle_between(ctr,pnt);
var radius = paintscript.util.dist(ctr,pnt);
return paintscript.util.point_at_angle.cljs$core$IFn$_invoke$arity$3(ctr,radius,(alpha0 + alphad));
});
