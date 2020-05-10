// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('panel.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('reagent.core');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$panel$core_SLASH_panel_DASH_params,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$panel$core_SLASH_title,cljs.core.cst$kw$panel$core_SLASH_content], null),cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$panel$core_SLASH_collapsable_QMARK_,cljs.core.cst$kw$panel$core_SLASH_show_QMARK_,cljs.core.cst$kw$panel$core_SLASH_show_DASH_init_QMARK_,cljs.core.cst$kw$panel$core_SLASH_class,cljs.core.cst$kw$panel$core_SLASH_on_DASH_click], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$panel$core_SLASH_title,cljs.core.cst$kw$panel$core_SLASH_content], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$panel$core_SLASH_collapsable_QMARK_,cljs.core.cst$kw$panel$core_SLASH_show_QMARK_,cljs.core.cst$kw$panel$core_SLASH_show_DASH_init_QMARK_,cljs.core.cst$kw$panel$core_SLASH_class,cljs.core.cst$kw$panel$core_SLASH_on_DASH_click], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__12654){
return cljs.core.map_QMARK_(G__12654);
}),(function (G__12654){
return cljs.core.contains_QMARK_(G__12654,cljs.core.cst$kw$title);
}),(function (G__12654){
return cljs.core.contains_QMARK_(G__12654,cljs.core.cst$kw$content);
})], null),(function (G__12654){
return ((cljs.core.map_QMARK_(G__12654)) && (cljs.core.contains_QMARK_(G__12654,cljs.core.cst$kw$title)) && (cljs.core.contains_QMARK_(G__12654,cljs.core.cst$kw$content)));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$collapsable_QMARK_,cljs.core.cst$kw$show_QMARK_,cljs.core.cst$kw$show_DASH_init_QMARK_,cljs.core.cst$kw$class,cljs.core.cst$kw$on_DASH_click], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$panel$core_SLASH_title,cljs.core.cst$kw$panel$core_SLASH_content], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$title,cljs.core.cst$kw$content], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$panel$core_SLASH_collapsable_QMARK_,cljs.core.cst$kw$panel$core_SLASH_show_QMARK_,cljs.core.cst$kw$panel$core_SLASH_show_DASH_init_QMARK_,cljs.core.cst$kw$panel$core_SLASH_class,cljs.core.cst$kw$panel$core_SLASH_on_DASH_click], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$title)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$content))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$panel$core_SLASH_accordion_DASH_params,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$panel$core_SLASH_panels], null),cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$panel$core_SLASH_show_DASH_any_QMARK_], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$panel$core_SLASH_panels], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$panel$core_SLASH_show_DASH_any_QMARK_], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__12655){
return cljs.core.map_QMARK_(G__12655);
}),(function (G__12655){
return cljs.core.contains_QMARK_(G__12655,cljs.core.cst$kw$panels);
})], null),(function (G__12655){
return ((cljs.core.map_QMARK_(G__12655)) && (cljs.core.contains_QMARK_(G__12655,cljs.core.cst$kw$panels)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$panel$core_SLASH_panels], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$panels], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$panel$core_SLASH_show_DASH_any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$panels))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$panel$core_SLASH_title,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$panel$core_SLASH_content,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$panel$core_SLASH_collapsable_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$panel$core_SLASH_show_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$panel$core_SLASH_show_DASH_init_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$panel$core_SLASH_class,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$panel$core_SLASH_on_DASH_click,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$panel$core_SLASH_panels,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$map_QMARK_,cljs.core.map_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__12656){
return cljs.core.coll_QMARK_(G__12656);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$panel$core_SLASH_show_DASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
panel.core.set_overflow = (function panel$core$set_overflow(outer,value){
return (outer["style"]["overflow"] = value);
});
panel.core.set_max_height = (function panel$core$set_max_height(outer,value){
return (outer["style"]["max-height"] = value);
});
panel.core.inherit_height = (function panel$core$inherit_height(outer,inner){
return (outer["style"]["max-height"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inner.clientHeight),"px"].join(''));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$panel$core_SLASH__DASH_panel,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$args,cljs.core.cst$kw$panel$core_SLASH_panel_DASH_params)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$args,cljs.core.cst$kw$panel$core_SLASH_panel_DASH_params),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$panel$core_SLASH_panel_DASH_params], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$panel$core_SLASH_panel_DASH_params], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$args,cljs.core.cst$kw$panel$core_SLASH_panel_DASH_params),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
panel.core._panel = (function panel$core$_panel(p__12658){
var map__12659 = p__12658;
var map__12659__$1 = (((((!((map__12659 == null))))?(((((map__12659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12659):map__12659);
var args = map__12659__$1;
var collapsable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12659__$1,cljs.core.cst$kw$collapsable_QMARK_,true);
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12659__$1,cljs.core.cst$kw$show_QMARK_);
var show_init_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12659__$1,cljs.core.cst$kw$show_DASH_init_QMARK_);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12659__$1,cljs.core.cst$kw$on_DASH_click);
var with_let12661 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let12661);
var temp__5724__auto___12671 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___12671 == null)){
} else {
var c__7808__auto___12672 = temp__5724__auto___12671;
if((with_let12661.generation === c__7808__auto___12672.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let12661.generation = c__7808__auto___12672.ratomGeneration;
}


var init12662 = (with_let12661.length === (0));
var dom_outer_ratom = ((init12662)?(with_let12661[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let12661[(0)]));
var dom_inner_ratom = ((init12662)?(with_let12661[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let12661[(1)]));
var show_ratom = ((init12662)?(with_let12661[(2)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = cljs.core.not(collapsable_QMARK_);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return show_init_QMARK_;
}
})())):(with_let12661[(2)]));
var on_click__$1 = ((init12662)?(with_let12661[(3)] = (function (){var or__4131__auto__ = on_click;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,init12662,dom_outer_ratom,dom_inner_ratom,show_ratom,with_let12661,map__12659,map__12659__$1,args,collapsable_QMARK_,show_QMARK_,show_init_QMARK_,on_click){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_ratom,cljs.core.not);
});
;})(or__4131__auto__,init12662,dom_outer_ratom,dom_inner_ratom,show_ratom,with_let12661,map__12659,map__12659__$1,args,collapsable_QMARK_,show_QMARK_,show_init_QMARK_,on_click))
}
})()):(with_let12661[(3)]));
var _ = ((init12662)?(with_let12661[(4)] = cljs.core.add_watch(show_ratom,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (init12662,dom_outer_ratom,dom_inner_ratom,show_ratom,on_click__$1,with_let12661,map__12659,map__12659__$1,args,collapsable_QMARK_,show_QMARK_,show_init_QMARK_,on_click){
return (function (_,___$1,___$2,show_QMARK___$1){
var temp__5720__auto__ = cljs.core.deref(dom_outer_ratom);
if(cljs.core.truth_(temp__5720__auto__)){
var this$ = temp__5720__auto__;
if(cljs.core.truth_(show_QMARK___$1)){
panel.core.inherit_height(cljs.core.deref(dom_outer_ratom),cljs.core.deref(dom_inner_ratom));

return setTimeout(((function (this$,temp__5720__auto__,init12662,dom_outer_ratom,dom_inner_ratom,show_ratom,on_click__$1,with_let12661,map__12659,map__12659__$1,args,collapsable_QMARK_,show_QMARK_,show_init_QMARK_,on_click){
return (function (){
if(cljs.core.truth_(cljs.core.deref(show_ratom))){
panel.core.set_max_height(this$,null);

return panel.core.set_overflow(this$,"visible");
} else {
return null;
}
});})(this$,temp__5720__auto__,init12662,dom_outer_ratom,dom_inner_ratom,show_ratom,on_click__$1,with_let12661,map__12659,map__12659__$1,args,collapsable_QMARK_,show_QMARK_,show_init_QMARK_,on_click))
,(300));
} else {
panel.core.inherit_height(cljs.core.deref(dom_outer_ratom),cljs.core.deref(dom_inner_ratom));

setTimeout(((function (this$,temp__5720__auto__,init12662,dom_outer_ratom,dom_inner_ratom,show_ratom,on_click__$1,with_let12661,map__12659,map__12659__$1,args,collapsable_QMARK_,show_QMARK_,show_init_QMARK_,on_click){
return (function (){
return panel.core.set_max_height(this$,"25px");
});})(this$,temp__5720__auto__,init12662,dom_outer_ratom,dom_inner_ratom,show_ratom,on_click__$1,with_let12661,map__12659,map__12659__$1,args,collapsable_QMARK_,show_QMARK_,show_init_QMARK_,on_click))
,(5));

return panel.core.set_overflow(this$,"hidden");
}
} else {
return null;
}
});})(init12662,dom_outer_ratom,dom_inner_ratom,show_ratom,on_click__$1,with_let12661,map__12659,map__12659__$1,args,collapsable_QMARK_,show_QMARK_,show_init_QMARK_,on_click))
)):(with_let12661[(4)]));
var panel_outer = ((init12662)?(with_let12661[(5)] = cljs.core.with_meta(((function (init12662,dom_outer_ratom,dom_inner_ratom,show_ratom,on_click__$1,_,with_let12661,map__12659,map__12659__$1,args,collapsable_QMARK_,show_QMARK_,show_init_QMARK_,on_click){
return (function (p__12663){
var map__12664 = p__12663;
var map__12664__$1 = (((((!((map__12664 == null))))?(((((map__12664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12664):map__12664);
var args__$1 = map__12664__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12664__$1,cljs.core.cst$kw$class);
var show_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12664__$1,cljs.core.cst$kw$show_QMARK_);
var with_let12666 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let12666);
var temp__5724__auto___12673 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___12673 == null)){
} else {
var c__7808__auto___12674 = temp__5724__auto___12673;
if((with_let12666.generation === c__7808__auto___12674.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let12666.generation = c__7808__auto___12674.ratomGeneration;
}


var init12667 = (with_let12666.length === (0));
var panel_inner = ((init12667)?(with_let12666[(0)] = cljs.core.with_meta(((function (init12667,with_let12666,map__12664,map__12664__$1,args__$1,class$,show_QMARK___$1,init12662,dom_outer_ratom,dom_inner_ratom,show_ratom,on_click__$1,_,with_let12661,map__12659,map__12659__$1,args,collapsable_QMARK_,show_QMARK_,show_init_QMARK_,on_click){
return (function (p__12668){
var map__12669 = p__12668;
var map__12669__$1 = (((((!((map__12669 == null))))?(((((map__12669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12669):map__12669);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12669__$1,cljs.core.cst$kw$title);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12669__$1,cljs.core.cst$kw$content);
var show_QMARK___$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12669__$1,cljs.core.cst$kw$show_QMARK_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$panel_DASH_container,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$panel_DASH_title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,on_click__$1], null),title,(cljs.core.truth_(collapsable_QMARK_)?(cljs.core.truth_(cljs.core.deref(show_ratom))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$zmdi$zmdi_DASH_caret_DASH_up], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$zmdi$zmdi_DASH_caret_DASH_down], null)):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$panel_DASH_content,content], null)], null);
});})(init12667,with_let12666,map__12664,map__12664__$1,args__$1,class$,show_QMARK___$1,init12662,dom_outer_ratom,dom_inner_ratom,show_ratom,on_click__$1,_,with_let12661,map__12659,map__12659__$1,args,collapsable_QMARK_,show_QMARK_,show_init_QMARK_,on_click))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (init12667,with_let12666,map__12664,map__12664__$1,args__$1,class$,show_QMARK___$1,init12662,dom_outer_ratom,dom_inner_ratom,show_ratom,on_click__$1,_,with_let12661,map__12659,map__12659__$1,args,collapsable_QMARK_,show_QMARK_,show_init_QMARK_,on_click){
return (function (p1__12657_SHARP_){
return cljs.core.reset_BANG_(dom_inner_ratom,reagent.core.dom_node(p1__12657_SHARP_));
});})(init12667,with_let12666,map__12664,map__12664__$1,args__$1,class$,show_QMARK___$1,init12662,dom_outer_ratom,dom_inner_ratom,show_ratom,on_click__$1,_,with_let12661,map__12659,map__12659__$1,args,collapsable_QMARK_,show_QMARK_,show_init_QMARK_,on_click))
], null))):(with_let12666[(0)]));
var res__7809__auto__ = (function (){
if((((!((show_QMARK___$1 == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(show_QMARK___$1,cljs.core.deref(show_ratom))))){
cljs.core.reset_BANG_(show_ratom,show_QMARK___$1);
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zc_DASH_panel,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",(cljs.core.truth_(cljs.core.deref(show_ratom))?"expanded":"collapsed")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [panel_inner,args__$1], null)], null);
})()
;

return res__7809__auto__;
});})(init12662,dom_outer_ratom,dom_inner_ratom,show_ratom,on_click__$1,_,with_let12661,map__12659,map__12659__$1,args,collapsable_QMARK_,show_QMARK_,show_init_QMARK_,on_click))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (init12662,dom_outer_ratom,dom_inner_ratom,show_ratom,on_click__$1,_,with_let12661,map__12659,map__12659__$1,args,collapsable_QMARK_,show_QMARK_,show_init_QMARK_,on_click){
return (function (this$){
var outer = reagent.core.dom_node(this$);
cljs.core.reset_BANG_(dom_outer_ratom,outer);

if(cljs.core.truth_(cljs.core.deref(show_ratom))){
panel.core.set_max_height(outer,null);

return panel.core.set_overflow(outer,"visible");
} else {
panel.core.set_max_height(outer,"25px");

return panel.core.set_overflow(outer,"hidden");
}
});})(init12662,dom_outer_ratom,dom_inner_ratom,show_ratom,on_click__$1,_,with_let12661,map__12659,map__12659__$1,args,collapsable_QMARK_,show_QMARK_,show_init_QMARK_,on_click))
], null))):(with_let12661[(5)]));
var res__7809__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [panel_outer,args], null);

return res__7809__auto__;
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$panel$core_SLASH__DASH_panel_DASH_accordion,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$args,cljs.core.cst$kw$panel$core_SLASH_accordion_DASH_params)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$args,cljs.core.cst$kw$panel$core_SLASH_accordion_DASH_params),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$panel$core_SLASH_accordion_DASH_params], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$panel$core_SLASH_accordion_DASH_params], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$args,cljs.core.cst$kw$panel$core_SLASH_accordion_DASH_params),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
panel.core._panel_accordion = (function panel$core$_panel_accordion(p__12675){
var map__12676 = p__12675;
var map__12676__$1 = (((((!((map__12676 == null))))?(((((map__12676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12676):map__12676);
var panels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12676__$1,cljs.core.cst$kw$panels);
var show_any_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12676__$1,cljs.core.cst$kw$show_DASH_any_QMARK_);
var with_let12678 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let12678);
var temp__5724__auto___12690 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___12690 == null)){
} else {
var c__7808__auto___12691 = temp__5724__auto___12690;
if((with_let12678.generation === c__7808__auto___12691.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let12678.generation = c__7808__auto___12691.ratomGeneration;
}


var init12679 = (with_let12678.length === (0));
var show = ((init12679)?(with_let12678[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let12678[(0)]));
var res__7809__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zc_DASH_panel_DASH_accordion,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (init12679,show,with_let12678,map__12676,map__12676__$1,panels,show_any_QMARK_){
return (function panel$core$_panel_accordion_$_iter__12680(s__12681){
return (new cljs.core.LazySeq(null,((function (init12679,show,with_let12678,map__12676,map__12676__$1,panels,show_any_QMARK_){
return (function (){
var s__12681__$1 = s__12681;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__12681__$1);
if(temp__5720__auto__){
var s__12681__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12681__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__12681__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__12683 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__12682 = (0);
while(true){
if((i__12682 < size__4522__auto__)){
var vec__12684 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__12682);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12684,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12684,(1),null);
cljs.core.chunk_append(b__12683,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [panel.core._panel,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,((cljs.core.not(show_any_QMARK_))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$show_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(show),i),cljs.core.cst$kw$on_DASH_click,((function (i__12682,vec__12684,i,p,c__4521__auto__,size__4522__auto__,b__12683,s__12681__$2,temp__5720__auto__,init12679,show,with_let12678,map__12676,map__12676__$1,panels,show_any_QMARK_){
return (function (){
return cljs.core.reset_BANG_(show,i);
});})(i__12682,vec__12684,i,p,c__4521__auto__,size__4522__auto__,b__12683,s__12681__$2,temp__5720__auto__,init12679,show,with_let12678,map__12676,map__12676__$1,panels,show_any_QMARK_))
], null):null)], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["panel-accordion-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)));

var G__12692 = (i__12682 + (1));
i__12682 = G__12692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12683),panel$core$_panel_accordion_$_iter__12680(cljs.core.chunk_rest(s__12681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12683),null);
}
} else {
var vec__12687 = cljs.core.first(s__12681__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12687,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12687,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [panel.core._panel,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,((cljs.core.not(show_any_QMARK_))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$show_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(show),i),cljs.core.cst$kw$on_DASH_click,((function (vec__12687,i,p,s__12681__$2,temp__5720__auto__,init12679,show,with_let12678,map__12676,map__12676__$1,panels,show_any_QMARK_){
return (function (){
return cljs.core.reset_BANG_(show,i);
});})(vec__12687,i,p,s__12681__$2,temp__5720__auto__,init12679,show,with_let12678,map__12676,map__12676__$1,panels,show_any_QMARK_))
], null):null)], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["panel-accordion-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)),panel$core$_panel_accordion_$_iter__12680(cljs.core.rest(s__12681__$2)));
}
} else {
return null;
}
break;
}
});})(init12679,show,with_let12678,map__12676,map__12676__$1,panels,show_any_QMARK_))
,null,null));
});})(init12679,show,with_let12678,map__12676,map__12676__$1,panels,show_any_QMARK_))
;
return iter__4523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,panels));
})())], null);

return res__7809__auto__;
});
panel.core.panel = (function panel$core$panel(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12694 = arguments.length;
var i__4731__auto___12695 = (0);
while(true){
if((i__4731__auto___12695 < len__4730__auto___12694)){
args__4736__auto__.push((arguments[i__4731__auto___12695]));

var G__12696 = (i__4731__auto___12695 + (1));
i__4731__auto___12695 = G__12696;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return panel.core.panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

panel.core.panel.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [panel.core._panel,opts], null);
});

panel.core.panel.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
panel.core.panel.cljs$lang$applyTo = (function (seq12693){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12693));
});

panel.core.panel_accordion = (function panel$core$panel_accordion(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12701 = arguments.length;
var i__4731__auto___12702 = (0);
while(true){
if((i__4731__auto___12702 < len__4730__auto___12701)){
args__4736__auto__.push((arguments[i__4731__auto___12702]));

var G__12703 = (i__4731__auto___12702 + (1));
i__4731__auto___12702 = G__12703;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return panel.core.panel_accordion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

panel.core.panel_accordion.cljs$core$IFn$_invoke$arity$variadic = (function (p__12698){
var map__12699 = p__12698;
var map__12699__$1 = (((((!((map__12699 == null))))?(((((map__12699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12699):map__12699);
var params = map__12699__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [panel.core._panel_accordion,params], null);
});

panel.core.panel_accordion.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
panel.core.panel_accordion.cljs$lang$applyTo = (function (seq12697){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12697));
});

var opts12706_12714 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts12706_12714){
return (function (ret__12429__auto__,p__12707){
var vec__12708 = p__12707;
var ___12430__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12708,(0),null);
var f__12431__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12708,(1),null);
var sym__12432__auto__ = (f__12431__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12431__auto__.cljs$core$IFn$_invoke$arity$0() : f__12431__auto__.call(null));
var G__12711 = ret__12429__auto__;
if(cljs.core.truth_(sym__12432__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__12711,sym__12432__auto__);
} else {
return G__12711;
}
});})(opts12706_12714))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts12706_12714){
return (function (p1__12428__12433__auto__){
var G__12713 = cljs.core.first(p1__12428__12433__auto__);
var fexpr__12712 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts12706_12714);
return (fexpr__12712.cljs$core$IFn$_invoke$arity$1 ? fexpr__12712.cljs$core$IFn$_invoke$arity$1(G__12713) : fexpr__12712.call(null,G__12713));
});})(opts12706_12714))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$panel$core_SLASH_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts12706_12714){
return (function (){
return null;
});})(opts12706_12714))
], null)))));
var opts12717_12725 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts12717_12725){
return (function (ret__12429__auto__,p__12718){
var vec__12719 = p__12718;
var ___12430__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12719,(0),null);
var f__12431__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12719,(1),null);
var sym__12432__auto__ = (f__12431__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12431__auto__.cljs$core$IFn$_invoke$arity$0() : f__12431__auto__.call(null));
var G__12722 = ret__12429__auto__;
if(cljs.core.truth_(sym__12432__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__12722,sym__12432__auto__);
} else {
return G__12722;
}
});})(opts12717_12725))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts12717_12725){
return (function (p1__12428__12433__auto__){
var G__12724 = cljs.core.first(p1__12428__12433__auto__);
var fexpr__12723 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts12717_12725);
return (fexpr__12723.cljs$core$IFn$_invoke$arity$1 ? fexpr__12723.cljs$core$IFn$_invoke$arity$1(G__12724) : fexpr__12723.call(null,G__12724));
});})(opts12717_12725))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$panel$core_SLASH_panel_DASH_accordion], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts12717_12725){
return (function (){
return null;
});})(opts12717_12725))
], null)))));
