// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__7388__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7389__i = 0, G__7389__a = new Array(arguments.length -  0);
while (G__7389__i < G__7389__a.length) {G__7389__a[G__7389__i] = arguments[G__7389__i + 0]; ++G__7389__i;}
  args = new cljs.core.IndexedSeq(G__7389__a,0,null);
} 
return G__7388__delegate.call(this,args);};
G__7388.cljs$lang$maxFixedArity = 0;
G__7388.cljs$lang$applyTo = (function (arglist__7390){
var args = cljs.core.seq(arglist__7390);
return G__7388__delegate(args);
});
G__7388.cljs$core$IFn$_invoke$arity$variadic = G__7388__delegate;
return G__7388;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__7391__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7391 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7392__i = 0, G__7392__a = new Array(arguments.length -  0);
while (G__7392__i < G__7392__a.length) {G__7392__a[G__7392__i] = arguments[G__7392__i + 0]; ++G__7392__i;}
  args = new cljs.core.IndexedSeq(G__7392__a,0,null);
} 
return G__7391__delegate.call(this,args);};
G__7391.cljs$lang$maxFixedArity = 0;
G__7391.cljs$lang$applyTo = (function (arglist__7393){
var args = cljs.core.seq(arglist__7393);
return G__7391__delegate(args);
});
G__7391.cljs$core$IFn$_invoke$arity$variadic = G__7391__delegate;
return G__7391;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
