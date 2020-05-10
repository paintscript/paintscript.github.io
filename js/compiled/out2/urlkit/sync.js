// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('urlkit.sync');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('clojure.string');
goog.require('urlkit.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('goog.History');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$urlkit$sync_SLASH_config,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$urlkit$sync_SLASH_state_DASH_to_DASH_url], null),cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$urlkit$sync_SLASH_on_DASH_url_BANG_,cljs.core.cst$kw$urlkit$sync_SLASH_url_DASH_to_DASH_state,cljs.core.cst$kw$urlkit$sync_SLASH_state_DASH_atom,cljs.core.cst$kw$urlkit$sync_SLASH_watch_DASH_url_QMARK_,cljs.core.cst$kw$urlkit$sync_SLASH_watch_DASH_state_QMARK_,cljs.core.cst$kw$urlkit$sync_SLASH_update_DASH_state_QMARK_,cljs.core.cst$kw$urlkit$sync_SLASH_update_DASH_state_BANG_], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$urlkit$sync_SLASH_state_DASH_to_DASH_url], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$urlkit$sync_SLASH_on_DASH_url_BANG_,cljs.core.cst$kw$urlkit$sync_SLASH_url_DASH_to_DASH_state,cljs.core.cst$kw$urlkit$sync_SLASH_state_DASH_atom,cljs.core.cst$kw$urlkit$sync_SLASH_watch_DASH_url_QMARK_,cljs.core.cst$kw$urlkit$sync_SLASH_watch_DASH_state_QMARK_,cljs.core.cst$kw$urlkit$sync_SLASH_update_DASH_state_QMARK_,cljs.core.cst$kw$urlkit$sync_SLASH_update_DASH_state_BANG_], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__18010){
return cljs.core.map_QMARK_(G__18010);
}),(function (G__18010){
return cljs.core.contains_QMARK_(G__18010,cljs.core.cst$kw$state_DASH_to_DASH_url);
})], null),(function (G__18010){
return ((cljs.core.map_QMARK_(G__18010)) && (cljs.core.contains_QMARK_(G__18010,cljs.core.cst$kw$state_DASH_to_DASH_url)));
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$on_DASH_url_BANG_,cljs.core.cst$kw$url_DASH_to_DASH_state,cljs.core.cst$kw$state_DASH_atom,cljs.core.cst$kw$watch_DASH_url_QMARK_,cljs.core.cst$kw$watch_DASH_state_QMARK_,cljs.core.cst$kw$update_DASH_state_QMARK_,cljs.core.cst$kw$update_DASH_state_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$urlkit$sync_SLASH_state_DASH_to_DASH_url], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_to_DASH_url], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$urlkit$sync_SLASH_on_DASH_url_BANG_,cljs.core.cst$kw$urlkit$sync_SLASH_url_DASH_to_DASH_state,cljs.core.cst$kw$urlkit$sync_SLASH_state_DASH_atom,cljs.core.cst$kw$urlkit$sync_SLASH_watch_DASH_url_QMARK_,cljs.core.cst$kw$urlkit$sync_SLASH_watch_DASH_state_QMARK_,cljs.core.cst$kw$urlkit$sync_SLASH_update_DASH_state_QMARK_,cljs.core.cst$kw$urlkit$sync_SLASH_update_DASH_state_BANG_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$state_DASH_to_DASH_url))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$urlkit$sync_SLASH_on_DASH_url_BANG_,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$urlkit$sync_SLASH_url_DASH_to_DASH_state,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$urlkit$sync_SLASH_state_DASH_to_DASH_url,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$urlkit$sync_SLASH_watch_DASH_url_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$urlkit$sync_SLASH_watch_DASH_state_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$urlkit$sync_SLASH_update_DASH_state_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$urlkit$sync_SLASH_update_DASH_state_BANG_,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$urlkit$sync_SLASH_state_DASH_atom,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_satisfies_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_IAtom,cljs.core.cst$sym$_PERCENT_)),(function (p1__18011_SHARP_){
if((!((p1__18011_SHARP_ == null)))){
if((((p1__18011_SHARP_.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === p1__18011_SHARP_.cljs$core$IAtom$)))){
return true;
} else {
if((!p1__18011_SHARP_.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__18011_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__18011_SHARP_);
}
}));
urlkit.sync.url_sync_config_defaults = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$watch_DASH_url_QMARK_,true,cljs.core.cst$kw$watch_DASH_state_QMARK_,true], null);
if((typeof urlkit !== 'undefined') && (typeof urlkit.sync !== 'undefined') && (typeof urlkit.sync.url_sync_config !== 'undefined')){
} else {
urlkit.sync.url_sync_config = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof urlkit !== 'undefined') && (typeof urlkit.sync !== 'undefined') && (typeof urlkit.sync.ignore_next !== 'undefined')){
} else {
urlkit.sync.ignore_next = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
urlkit.sync.prefix_dispatcher = (function urlkit$sync$prefix_dispatcher(url,kvs){
var url_rec = urlkit.core.parse_url(url);
return cljs.core.second(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (url_rec){
return (function (p__18013){
var vec__18014 = p__18013;
var vec__18017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18014,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18017,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18017,(1),null);
var cfg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18014,(1),null);
return clojure.string.starts_with_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(url_rec,target),prefix);
});})(url_rec))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs))));
});
urlkit.sync.register_href_dispatcher_BANG_ = (function urlkit$sync$register_href_dispatcher_BANG_(h_obj,on_url_BANG_){
var G__18020 = h_obj;
var G__18021_18028 = G__18020;
var G__18022_18029 = goog.history.EventType.NAVIGATE;
var G__18023_18030 = ((function (G__18021_18028,G__18022_18029,G__18020){
return (function (ev){
var url_full = ev.target.window_.location.href;
var vec__18024 = cljs.core.deref(urlkit.sync.ignore_next);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18024,(0),null);
var url_prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18024,(1),null);
var url_cpr = (function (){var G__18027 = (function (){var or__4131__auto__ = target;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$href;
}
})();
var G__18027__$1 = (((G__18027 instanceof cljs.core.Keyword))?G__18027.fqn:null);
switch (G__18027__$1) {
case "href":
return url_full;

break;
case "hash":
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ev.target.window_.location.hash,(1));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18027__$1)].join('')));

}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url_prev,url_cpr)){
} else {
(on_url_BANG_.cljs$core$IFn$_invoke$arity$1 ? on_url_BANG_.cljs$core$IFn$_invoke$arity$1(url_full) : on_url_BANG_.call(null,url_full));
}

return cljs.core.reset_BANG_(urlkit.sync.ignore_next,null);
});})(G__18021_18028,G__18022_18029,G__18020))
;
goog.events.listen(G__18021_18028,G__18022_18029,G__18023_18030);

G__18020.setEnabled(true);

return G__18020;
});
var ret__4776__auto___18033 = urlkit.sync.opt_set_BANG_ = (function urlkit$sync$opt_set_BANG_(_AMPERSAND_form,_AMPERSAND_env,var_sym,upd,val_next){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$var_DASH_val__18032__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,upd,null,(1),null)),(new cljs.core.List(null,var_sym,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$var_DASH_val__18032__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,val_next,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$set_BANG_,null,(1),null)),(new cljs.core.List(null,var_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,val_next,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
urlkit.sync.opt_set_BANG_.cljs$lang$macro = true;

urlkit.sync.update_state_BANG_ = (function urlkit$sync$update_state_BANG_(var_args){
var G__18035 = arguments.length;
switch (G__18035) {
case 0:
return urlkit.sync.update_state_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return urlkit.sync.update_state_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

urlkit.sync.update_state_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return urlkit.sync.update_state_BANG_.cljs$core$IFn$_invoke$arity$1(document.location.href);
});

urlkit.sync.update_state_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (url){
var map__18036 = cljs.core.deref(urlkit.sync.url_sync_config);
var map__18036__$1 = (((((!((map__18036 == null))))?(((((map__18036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18036):map__18036);
var on_url_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18036__$1,cljs.core.cst$kw$on_DASH_url_BANG_);
return (on_url_BANG_.cljs$core$IFn$_invoke$arity$1 ? on_url_BANG_.cljs$core$IFn$_invoke$arity$1(url) : on_url_BANG_.call(null,url));
});

urlkit.sync.update_state_BANG_.cljs$lang$maxFixedArity = 1;

/**
 * Update the URL to reflect the given `state-expr`
 */
urlkit.sync.update_url_BANG_ = (function urlkit$sync$update_url_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18053 = arguments.length;
var i__4731__auto___18054 = (0);
while(true){
if((i__4731__auto___18054 < len__4730__auto___18053)){
args__4736__auto__.push((arguments[i__4731__auto___18054]));

var G__18055 = (i__4731__auto___18054 + (1));
i__4731__auto___18054 = G__18055;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return urlkit.sync.update_url_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

urlkit.sync.update_url_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state_expr,p__18042){
var map__18043 = p__18042;
var map__18043__$1 = (((((!((map__18043 == null))))?(((((map__18043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18043):map__18043);
var update_state_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18043__$1,cljs.core.cst$kw$update_DASH_state_QMARK_);
var map__18045 = cljs.core.deref(urlkit.sync.url_sync_config);
var map__18045__$1 = (((((!((map__18045 == null))))?(((((map__18045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18045):map__18045);
var state_to_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18045__$1,cljs.core.cst$kw$state_DASH_to_DASH_url);
var update_state_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18045__$1,cljs.core.cst$kw$update_DASH_state_BANG_);
var temp__5720__auto__ = (state_to_url.cljs$core$IFn$_invoke$arity$1 ? state_to_url.cljs$core$IFn$_invoke$arity$1(state_expr) : state_to_url.call(null,state_expr));
if(cljs.core.truth_(temp__5720__auto__)){
var url_expr = temp__5720__auto__;
var vec__18047 = ((cljs.core.vector_QMARK_(url_expr))?url_expr:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$href,url_expr], null));
var target_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18047,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18047,(1),null);
if(cljs.core.truth_(update_state_QMARK_)){
(update_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? update_state_BANG_.cljs$core$IFn$_invoke$arity$1(state_expr) : update_state_BANG_.call(null,state_expr));
} else {
}

if(cljs.core.truth_((function (){var G__18050 = target_k;
var G__18050__$1 = (((G__18050 instanceof cljs.core.Keyword))?G__18050.fqn:null);
switch (G__18050__$1) {
case "hash":
var var_val__17978__auto__ = (function (){var G__18052 = window.location.hash;
var fexpr__18051 = ((function (G__18052,G__18050,G__18050__$1,vec__18047,target_k,url,url_expr,temp__5720__auto__,map__18045,map__18045__$1,state_to_url,update_state_BANG_,map__18043,map__18043__$1,update_state_QMARK_){
return (function (p1__18039_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__18039_SHARP_,(1));
});})(G__18052,G__18050,G__18050__$1,vec__18047,target_k,url,url_expr,temp__5720__auto__,map__18045,map__18045__$1,state_to_url,update_state_BANG_,map__18043,map__18043__$1,update_state_QMARK_))
;
return fexpr__18051(G__18052);
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var_val__17978__auto__,url)){
return null;
} else {
return window.location.hash = url;
}

break;
case "href":
var var_val__17978__auto__ = cljs.core.identity(window.location.href);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var_val__17978__auto__,url)){
return null;
} else {
return window.location.href = url;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18050__$1)].join('')));

}
})())){
return cljs.core.reset_BANG_(urlkit.sync.ignore_next,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_k,url], null));
} else {
return null;
}
} else {
return null;
}
});

urlkit.sync.update_url_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
urlkit.sync.update_url_BANG_.cljs$lang$applyTo = (function (seq18040){
var G__18041 = cljs.core.first(seq18040);
var seq18040__$1 = cljs.core.next(seq18040);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18041,seq18040__$1);
});

cljs.spec.alpha.def_impl(cljs.core.cst$sym$urlkit$sync_SLASH_init_BANG__STAR_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$c,cljs.core.cst$kw$urlkit$sync_SLASH_config)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$c,cljs.core.cst$kw$urlkit$sync_SLASH_config),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$c], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$urlkit$sync_SLASH_config], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$urlkit$sync_SLASH_config], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$c,cljs.core.cst$kw$urlkit$sync_SLASH_config),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
urlkit.sync.derive__on_url_BANG_ = (function urlkit$sync$derive__on_url_BANG_(p__18058){
var map__18059 = p__18058;
var map__18059__$1 = (((((!((map__18059 == null))))?(((((map__18059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18059):map__18059);
var c = map__18059__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18059__$1,cljs.core.cst$kw$state_DASH_atom);
var on_url_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18059__$1,cljs.core.cst$kw$on_DASH_url_BANG_);
var url_to_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18059__$1,cljs.core.cst$kw$url_DASH_to_DASH_state);
var update_state_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18059__$1,cljs.core.cst$kw$update_DASH_state_BANG_);
var or__4131__auto__ = on_url_BANG_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.truth_(update_state_BANG_)){
if(cljs.core.truth_(state_atom)){
return ((function (or__4131__auto__,map__18059,map__18059__$1,c,state_atom,on_url_BANG_,url_to_state,update_state_BANG_){
return (function (url){
var G__18061 = (function (){var G__18062 = url;
var G__18063 = cljs.core.deref(state_atom);
return (url_to_state.cljs$core$IFn$_invoke$arity$2 ? url_to_state.cljs$core$IFn$_invoke$arity$2(G__18062,G__18063) : url_to_state.call(null,G__18062,G__18063));
})();
return (update_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? update_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__18061) : update_state_BANG_.call(null,G__18061));
});
;})(or__4131__auto__,map__18059,map__18059__$1,c,state_atom,on_url_BANG_,url_to_state,update_state_BANG_))
} else {
return ((function (or__4131__auto__,map__18059,map__18059__$1,c,state_atom,on_url_BANG_,url_to_state,update_state_BANG_){
return (function (url){
var G__18064 = (url_to_state.cljs$core$IFn$_invoke$arity$1 ? url_to_state.cljs$core$IFn$_invoke$arity$1(url) : url_to_state.call(null,url));
return (update_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? update_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__18064) : update_state_BANG_.call(null,G__18064));
});
;})(or__4131__auto__,map__18059,map__18059__$1,c,state_atom,on_url_BANG_,url_to_state,update_state_BANG_))
}
} else {
return ((function (or__4131__auto__,map__18059,map__18059__$1,c,state_atom,on_url_BANG_,url_to_state,update_state_BANG_){
return (function (url){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,((function (or__4131__auto__,map__18059,map__18059__$1,c,state_atom,on_url_BANG_,url_to_state,update_state_BANG_){
return (function (p1__18057_SHARP_){
return (url_to_state.cljs$core$IFn$_invoke$arity$2 ? url_to_state.cljs$core$IFn$_invoke$arity$2(url,p1__18057_SHARP_) : url_to_state.call(null,url,p1__18057_SHARP_));
});})(or__4131__auto__,map__18059,map__18059__$1,c,state_atom,on_url_BANG_,url_to_state,update_state_BANG_))
);
});
;})(or__4131__auto__,map__18059,map__18059__$1,c,state_atom,on_url_BANG_,url_to_state,update_state_BANG_))
}
}
});
urlkit.sync.preproc_config = (function urlkit$sync$preproc_config(c){
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$on_DASH_url_BANG_.cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = cljs.core.cst$kw$url_DASH_to_DASH_state.cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(and__4120__auto__)){
var or__4131__auto____$1 = cljs.core.cst$kw$update_DASH_state_BANG_.cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.cst$kw$state_DASH_atom.cljs$core$IFn$_invoke$arity$1(c);
}
} else {
return and__4120__auto__;
}
}
})())){
} else {
throw (new Error("Assert failed: (or (:on-url! c) (and (:url-to-state c) (or (:update-state! c) (:state-atom c))))"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,cljs.core.cst$kw$on_DASH_url_BANG_,urlkit.sync.derive__on_url_BANG_(c));
});
urlkit.sync.init_BANG__STAR_ = (function urlkit$sync$init_BANG__STAR_(c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(urlkit.sync.url_sync_config,(function (c_prev){
var c__$1 = urlkit.sync.preproc_config(c);
var _ = ((cljs.spec.alpha._STAR_compile_asserts_STAR_)?(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_runtime_DASH_asserts_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$alpha,cljs.core.cst$sym$_STAR_runtime_DASH_asserts_STAR_,"resources-app/public/js/compiled/out2/cljs/spec/alpha.cljs",20,1,true,1477,1479,cljs.core.List.EMPTY,null,((cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))?cljs.spec.alpha.assert_STAR_(cljs.core.cst$kw$urlkit$sync_SLASH_config,c__$1):c__$1):c__$1);
var c__$2 = (cljs.core.truth_(cljs.core.cst$kw$watch_DASH_url_QMARK_.cljs$core$IFn$_invoke$arity$1(c__$1))?(function (){var h_obj = (function (){var temp__5718__auto__ = cljs.core.cst$kw$history_DASH_obj.cljs$core$IFn$_invoke$arity$1(c_prev);
if(cljs.core.truth_(temp__5718__auto__)){
var h_obj = temp__5718__auto__;
var G__18069 = h_obj;
G__18069.removeAllListeners();

return G__18069;
} else {
return (new goog.History());
}
})();
urlkit.sync.register_href_dispatcher_BANG_(h_obj,cljs.core.cst$kw$on_DASH_url_BANG_.cljs$core$IFn$_invoke$arity$1(c__$1));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,cljs.core.cst$kw$history_DASH_obj,h_obj);
})():c__$1);
var ___$1 = (cljs.core.truth_(cljs.core.cst$kw$watch_DASH_state_QMARK_.cljs$core$IFn$_invoke$arity$1(c__$2))?(function (){var s = cljs.core.cst$kw$state_DASH_atom.cljs$core$IFn$_invoke$arity$1(c__$2);
var G__18070_18071 = c_prev;
var G__18070_18072__$1 = (((G__18070_18071 == null))?null:cljs.core.cst$kw$state_DASH_atom.cljs$core$IFn$_invoke$arity$1(G__18070_18071));
if((G__18070_18072__$1 == null)){
} else {
cljs.core.remove_watch(G__18070_18072__$1,cljs.core.cst$kw$url_DASH_sync_DASH_watch);
}

return cljs.core.add_watch(s,cljs.core.cst$kw$url_DASH_sync_DASH_watch,((function (s,c__$1,_,c__$2){
return (function (p1__18066_SHARP_,p2__18067_SHARP_,p3__18068_SHARP_,p4__18065_SHARP_){
return urlkit.sync.update_url_BANG_(p4__18065_SHARP_);
});})(s,c__$1,_,c__$2))
);
})():null);
return c__$2;
}));
});
urlkit.sync.init_BANG_ = (function urlkit$sync$init_BANG_(cfg){
return urlkit.sync.init_BANG__STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([urlkit.sync.url_sync_config_defaults,cfg], 0)));
});
