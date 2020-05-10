// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('navtree.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.zip');
goog.require('taoensso.timbre');
goog.require('navtree.zipper');
navtree.util.handle_opt_delay = (function navtree$util$handle_opt_delay(data){
if(cljs.core.delay_QMARK_(data)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"navtree.util","/tmp/form-init18367787169279644540.clj",9,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["forcing deref"], null);
}),null)),null,-2092429991);

return cljs.core.deref(data);
} else {
return data;
}
});
/**
 * Apply the zipper function `z-fn` to the id-path `pth`.
 */
navtree.util.nav_path = (function navtree$util$nav_path(pth,z_fn,p__16904){
var vec__16905 = p__16904;
var tree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16905,(0),null);
var id_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16905,(1),null);
var children_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16905,(2),null);
var temp__5720__auto__ = navtree.zipper.id_path__GT_z_nav(tree,id_fn,children_fn,pth);
if(cljs.core.truth_(temp__5720__auto__)){
var zn = temp__5720__auto__;
var pth_next = navtree.zipper.z_nav__GT_id_path((function (){var G__16908 = zn;
if(cljs.core.seq(pth)){
return (z_fn.cljs$core$IFn$_invoke$arity$1 ? z_fn.cljs$core$IFn$_invoke$arity$1(G__16908) : z_fn.call(null,G__16908));
} else {
return G__16908;
}
})(),id_fn);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zn,pth_next], null);
} else {
return null;
}
});
/**
 * Navigate to a node where `pred-fn` is true
 */
navtree.util.nav_to_pred_BANG_ = (function navtree$util$nav_to_pred_BANG_(derive_pred_fn,params,sp_init,z_nav_args,on_selection_path){
var pred_fn = (derive_pred_fn.cljs$core$IFn$_invoke$arity$1 ? derive_pred_fn.cljs$core$IFn$_invoke$arity$1(params) : derive_pred_fn.call(null,params));
var sp = sp_init;
while(true){
var vec__16909 = z_nav_args;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16909,(0),null);
var id_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16909,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16909,(2),null);
var temp__5720__auto__ = navtree.util.nav_path(sp,clojure.zip.next,z_nav_args);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__16912 = temp__5720__auto__;
var z_nav = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16912,(0),null);
var sp_next = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16912,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.seq(sp);
if(and__4120__auto__){
var G__16916 = clojure.zip.node(z_nav);
return (pred_fn.cljs$core$IFn$_invoke$arity$1 ? pred_fn.cljs$core$IFn$_invoke$arity$1(G__16916) : pred_fn.call(null,G__16916));
} else {
return and__4120__auto__;
}
})())){
return (on_selection_path.cljs$core$IFn$_invoke$arity$1 ? on_selection_path.cljs$core$IFn$_invoke$arity$1(sp) : on_selection_path.call(null,sp));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sp,sp_next)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"navtree.util","/tmp/form-init18367787169279644540.clj",31,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sp,vec__16912,z_nav,sp_next,temp__5720__auto__,vec__16909,_,id_fn,___$1,pred_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["next returns same selection path:",sp_next], null);
});})(sp,vec__16912,z_nav,sp_next,temp__5720__auto__,vec__16909,_,id_fn,___$1,pred_fn))
,null)),null,-45145157);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"navtree.util","/tmp/form-init18367787169279644540.clj",32,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sp,vec__16912,z_nav,sp_next,temp__5720__auto__,vec__16909,_,id_fn,___$1,pred_fn){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["jumping from:",sp,"to",sp_next], null);
});})(sp,vec__16912,z_nav,sp_next,temp__5720__auto__,vec__16909,_,id_fn,___$1,pred_fn))
,null)),null,-254105702);

(on_selection_path.cljs$core$IFn$_invoke$arity$1 ? on_selection_path.cljs$core$IFn$_invoke$arity$1(sp_next) : on_selection_path.call(null,sp_next));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sp_init,sp_next)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"navtree.util","/tmp/form-init18367787169279644540.clj",35,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sp,vec__16912,z_nav,sp_next,temp__5720__auto__,vec__16909,_,id_fn,___$1,pred_fn){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["terminating search due to loop"], null);
});})(sp,vec__16912,z_nav,sp_next,temp__5720__auto__,vec__16909,_,id_fn,___$1,pred_fn))
,null)),null,-1839325509);
} else {
var G__16917 = sp_next;
sp = G__16917;
continue;
}
}
}
} else {
return null;
}
break;
}
});
navtree.util.nav_to_content_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(navtree.util.nav_to_pred_BANG_,(function (p1__16918_SHARP_){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.some_QMARK_,navtree.util.handle_opt_delay,cljs.core.cst$kw$content_DASH_fn.cljs$core$IFn$_invoke$arity$1(p1__16918_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id_DASH_fn.cljs$core$IFn$_invoke$arity$1(p1__16918_SHARP_)], 0));
}));
navtree.util.nav_to_terminal_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(navtree.util.nav_to_pred_BANG_,(function (p1__16919_SHARP_){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,cljs.core.seq,cljs.core.cst$kw$children_DASH_fn.cljs$core$IFn$_invoke$arity$1(p1__16919_SHARP_));
}));
