// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('paintscript.app');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('cljs.reader');
goog.require('urlkit.core');
goog.require('urlkit.sync');
goog.require('paintscript.canvas');
goog.require('paintscript.gallery');
goog.require('paintscript.ctrl');
paintscript.app.read_edn_BANG_ = (function paintscript$app$read_edn_BANG_(data_k){
var G__18075 = window.localStorage;
var G__18075__$1 = (((G__18075 == null))?null:G__18075.getItem(cljs.core.name(data_k)));
if((G__18075__$1 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__18075__$1);
}
});
paintscript.app.write_edn_BANG_ = (function paintscript$app$write_edn_BANG_(data_k,edn){
return window.localStorage.setItem(cljs.core.name(data_k),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edn], 0)));
});
paintscript.app.init_clear = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$defs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$script,cljs.core.PersistentVector.EMPTY], null);
paintscript.app.init_config = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$canvas,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null),cljs.core.cst$kw$scale,(4)], null),cljs.core.cst$kw$styles,new cljs.core.PersistentArrayMap(null, 2, ["outline",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$stroke_DASH_width,(1)], null),"solid",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,"none",cljs.core.cst$kw$fill,"black"], null)], null)], null);
paintscript.app.init_config_gallery = cljs.core.assoc_in(paintscript.app.init_config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,cljs.core.cst$kw$coords_QMARK_], null),false);
paintscript.app._BANG_app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$canvas], null));
paintscript.app.c_url_sync = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$state_DASH_atom,paintscript.app._BANG_app_state,cljs.core.cst$kw$url_DASH_to_DASH_state,(function (url){
var map__18076 = urlkit.core.parse_url(url);
var map__18076__$1 = (((((!((map__18076 == null))))?(((((map__18076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18076):map__18076);
var fragment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18076__$1,cljs.core.cst$kw$fragment);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fragment)], null);
}),cljs.core.cst$kw$state_DASH_to_DASH_url,(function (p__18078){
var map__18079 = p__18078;
var map__18079__$1 = (((((!((map__18079 == null))))?(((((map__18079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18079):map__18079);
var state = map__18079__$1;
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18079__$1,cljs.core.cst$kw$page);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hash,cljs.core.name(page)], null);
})], null);
paintscript.app.app = (function paintscript$app$app(){
var with_let18081 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let18081);
var temp__5724__auto___18094 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___18094 == null)){
} else {
var c__7808__auto___18095 = temp__5724__auto___18094;
if((with_let18081.generation === c__7808__auto___18095.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let18081.generation = c__7808__auto___18095.ratomGeneration;
}


var init18082 = (with_let18081.length === (0));
var _BANG_config_canvas = ((init18082)?(with_let18081[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(paintscript.app.init_config)):(with_let18081[(0)]));
var _BANG_c_gallery = ((init18082)?(with_let18081[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = paintscript.app.read_edn_BANG_(cljs.core.cst$kw$gallery_DASH_config);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return paintscript.app.init_config_gallery;
}
})())):(with_let18081[(1)]));
var _BANG_c_gallery_committed = ((init18082)?(with_let18081[(2)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_c_gallery))):(with_let18081[(2)]));
var _BANG_galleries = ((init18082)?(with_let18081[(3)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(paintscript.app.read_edn_BANG_(cljs.core.cst$kw$galleries))):(with_let18081[(3)]));
var _BANG_galleries_committed = ((init18082)?(with_let18081[(4)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_galleries))):(with_let18081[(4)]));
var _BANG_params = ((init18082)?(with_let18081[(5)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(paintscript.ctrl.params_init)):(with_let18081[(5)]));
var app_dispatch_BANG_ = ((init18082)?(with_let18081[(6)] = ((function (init18082,_BANG_config_canvas,_BANG_c_gallery,_BANG_c_gallery_committed,_BANG_galleries,_BANG_galleries_committed,_BANG_params,with_let18081){
return (function (p__18083){
var vec__18084 = p__18083;
var op_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18084,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18084,(1),null);
var op = vec__18084;
var G__18087 = op_k;
var G__18087__$1 = (((G__18087 instanceof cljs.core.Keyword))?G__18087.fqn:null);
switch (G__18087__$1) {
case "set-canvas":
var vec__18088 = arg;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18088,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18088,(1),null);
cljs.core.reset_BANG_(_BANG_config_canvas,(function (){var or__4131__auto__ = config;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return paintscript.app.init_config;
}
})());

cljs.core.reset_BANG_(_BANG_params,params);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(paintscript.app._BANG_app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$canvas);

break;
case "save-edn":
var gg = cljs.core.deref(_BANG_galleries);
var gc = cljs.core.deref(_BANG_c_gallery);
paintscript.app.write_edn_BANG_(cljs.core.cst$kw$galleries,gg);

paintscript.app.write_edn_BANG_(cljs.core.cst$kw$gallery_DASH_config,gc);

cljs.core.reset_BANG_(_BANG_galleries_committed,gg);

return cljs.core.reset_BANG_(_BANG_c_gallery_committed,gc);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18087__$1)].join('')));

}
});})(init18082,_BANG_config_canvas,_BANG_c_gallery,_BANG_c_gallery_committed,_BANG_galleries,_BANG_galleries_committed,_BANG_params,with_let18081))
):(with_let18081[(6)]));
var res__7809__auto__ = (function (){var map__18091 = cljs.core.deref(paintscript.app._BANG_app_state);
var map__18091__$1 = (((((!((map__18091 == null))))?(((((map__18091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18091):map__18091);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18091__$1,cljs.core.cst$kw$page);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$app,(function (){var G__18093 = page;
var G__18093__$1 = (((G__18093 instanceof cljs.core.Keyword))?G__18093.fqn:null);
switch (G__18093__$1) {
case "gallery":
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.gallery.galleries,app_dispatch_BANG_,_BANG_c_gallery,_BANG_c_gallery_committed,_BANG_galleries,_BANG_galleries_committed], null);

break;
default:
var init_config = cljs.core.deref(_BANG_config_canvas);
var init_params = cljs.core.deref(_BANG_params);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.canvas.canvas,init_config,init_params], null);

}
})()], null);
})();

return res__7809__auto__;
});
paintscript.app.mount_root_BANG_ = (function paintscript$app$mount_root_BANG_(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return paintscript.app.app;},cljs.core.cst$sym$paintscript$app_SLASH_app,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$paintscript$app,cljs.core.cst$sym$app,"/home/travis/build/paintscript/ps/src/paintscript/app.cljs",11,1,47,47,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(paintscript.app.app)?paintscript.app.app.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
if((typeof paintscript !== 'undefined') && (typeof paintscript.app !== 'undefined') && (typeof paintscript.app._init !== 'undefined')){
} else {
paintscript.app._init = (function (){
urlkit.sync.init_BANG_(paintscript.app.c_url_sync);

return paintscript.app.mount_root_BANG_();
})()
;
}
paintscript.app.on_js_reload = (function paintscript$app$on_js_reload(){
return paintscript.app.mount_root_BANG_();
});
