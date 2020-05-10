// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('elastic_input.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('cljs.reader');
goog.require('reagent.core');
goog.require('keybind.core');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$elastic_DASH_input$core_SLASH_args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elastic_DASH_input$core_SLASH_model,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_on_DASH_change], null),cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elastic_DASH_input$core_SLASH_height,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_width,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_min_DASH_len,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_extra_DASH_len,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_placeholder,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_disabled_QMARK_,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_focused_QMARK_,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_on_DASH_key_DASH_data,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_buffer_QMARK_,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_buffer_DASH_ratom,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_commit_DASH_on,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_number_QMARK_], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elastic_DASH_input$core_SLASH_model,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_on_DASH_change], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elastic_DASH_input$core_SLASH_height,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_width,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_min_DASH_len,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_extra_DASH_len,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_placeholder,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_disabled_QMARK_,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_focused_QMARK_,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_on_DASH_key_DASH_data,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_buffer_QMARK_,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_buffer_DASH_ratom,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_commit_DASH_on,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_number_QMARK_], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__17201){
return cljs.core.map_QMARK_(G__17201);
}),(function (G__17201){
return cljs.core.contains_QMARK_(G__17201,cljs.core.cst$kw$model);
}),(function (G__17201){
return cljs.core.contains_QMARK_(G__17201,cljs.core.cst$kw$on_DASH_change);
})], null),(function (G__17201){
return ((cljs.core.map_QMARK_(G__17201)) && (cljs.core.contains_QMARK_(G__17201,cljs.core.cst$kw$model)) && (cljs.core.contains_QMARK_(G__17201,cljs.core.cst$kw$on_DASH_change)));
}),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$min_DASH_len,cljs.core.cst$kw$extra_DASH_len,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$focused_QMARK_,cljs.core.cst$kw$on_DASH_key_DASH_data,cljs.core.cst$kw$buffer_QMARK_,cljs.core.cst$kw$buffer_DASH_ratom,cljs.core.cst$kw$commit_DASH_on,cljs.core.cst$kw$number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elastic_DASH_input$core_SLASH_model,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_on_DASH_change], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model,cljs.core.cst$kw$on_DASH_change], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elastic_DASH_input$core_SLASH_height,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_width,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_min_DASH_len,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_extra_DASH_len,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_placeholder,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_disabled_QMARK_,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_focused_QMARK_,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_on_DASH_key_DASH_data,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_buffer_QMARK_,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_buffer_DASH_ratom,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_commit_DASH_on,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_number_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$model)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$on_DASH_change))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$elastic_DASH_input$core_SLASH_model,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$elastic_DASH_input$core_SLASH_on_DASH_change,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$elastic_DASH_input$core_SLASH_on_DASH_key_DASH_data,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$elastic_DASH_input$core_SLASH_height,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$i,cljs.core.cst$sym$cljs$core_SLASH_integer_QMARK_,cljs.core.cst$kw$s,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$k,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$auto,"null"], null), null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,cljs.core.cst$kw$s,cljs.core.cst$kw$k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_integer_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$auto,"null"], null), null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.integer_QMARK_,cljs.core.string_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$auto,null], null), null)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$elastic_DASH_input$core_SLASH_width,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$i,cljs.core.cst$sym$cljs$core_SLASH_integer_QMARK_,cljs.core.cst$kw$s,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$k,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$auto,"null"], null), null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,cljs.core.cst$kw$s,cljs.core.cst$kw$k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_integer_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$auto,"null"], null), null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.integer_QMARK_,cljs.core.string_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$auto,null], null), null)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$elastic_DASH_input$core_SLASH_min_DASH_len,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elastic_DASH_input$core_SLASH_width,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_height], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elastic_DASH_input$core_SLASH_width,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_height], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__17202){
return cljs.core.map_QMARK_(G__17202);
})], null),(function (G__17202){
return cljs.core.map_QMARK_(G__17202);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$width,cljs.core.cst$kw$height], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elastic_DASH_input$core_SLASH_width,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_height], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$elastic_DASH_input$core_SLASH_extra_DASH_len,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elastic_DASH_input$core_SLASH_width,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_height], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elastic_DASH_input$core_SLASH_width,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_height], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__17203){
return cljs.core.map_QMARK_(G__17203);
})], null),(function (G__17203){
return cljs.core.map_QMARK_(G__17203);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$width,cljs.core.cst$kw$height], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elastic_DASH_input$core_SLASH_width,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_height], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$elastic_DASH_input$core_SLASH_placeholder,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$elastic_DASH_input$core_SLASH_disabled_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$elastic_DASH_input$core_SLASH_focused_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$elastic_DASH_input$core_SLASH_number_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$elastic_DASH_input$core_SLASH_buffer_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$elastic_DASH_input$core_SLASH_buffer_DASH_ratom,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_satisfies_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_IAtom,cljs.core.cst$sym$_PERCENT_)),(function (p1__17204_SHARP_){
if((!((p1__17204_SHARP_ == null)))){
if((((p1__17204_SHARP_.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === p1__17204_SHARP_.cljs$core$IAtom$)))){
return true;
} else {
if((!p1__17204_SHARP_.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__17204_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__17204_SHARP_);
}
}));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$elastic_DASH_input$core_SLASH_commit_DASH_on,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$shift_DASH_enter,"null",cljs.core.cst$kw$enter,"null",cljs.core.cst$kw$blur,"null"], null), null),cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$shift_DASH_enter,"null",cljs.core.cst$kw$enter,"null",cljs.core.cst$kw$blur,"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$shift_DASH_enter,null,cljs.core.cst$kw$enter,null,cljs.core.cst$kw$blur,null], null), null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__17206){
return cljs.core.set_QMARK_(G__17206);
}),cljs.core.cst$kw$kind,cljs.core.set_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$shift_DASH_enter,"null",cljs.core.cst$kw$enter,"null",cljs.core.cst$kw$blur,"null"], null), null),cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_)], null),null));
elastic_input.core.enter_key_code = (13);
elastic_input.core.ev_tgt_val = (function elastic_input$core$ev_tgt_val(ev){
return ev.target.value;
});
elastic_input.core.ev_key_press_data = (function elastic_input$core$ev_key_press_data(ev){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event,ev,cljs.core.cst$kw$key_DASH_code,(function (){var x__4219__auto__ = ev.key;
var y__4220__auto__ = ev.which;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})(),cljs.core.cst$kw$shift_DASH_key_QMARK_,ev.shiftKey], null);
});
elastic_input.core.opt = (function elastic_input$core$opt(opt_f){
var or__4131__auto__ = opt_f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__){
return (function (){
return cljs.core.List.EMPTY;
});
;})(or__4131__auto__))
}
});
/**
 * Adapt params to input/textarea component args and report DOM node.
 */
elastic_input.core.middleware__adapt_params = (function elastic_input$core$middleware__adapt_params(c){
return (function (p){
var setup = (function (this$){
return cljs.core.reset_BANG_(cljs.core.cst$kw$dom_DASH_node_DASH_ratom.cljs$core$IFn$_invoke$arity$1(p),reagent.core.dom_node(this$));
});
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,setup,cljs.core.cst$kw$reagent_DASH_render,((function (setup){
return (function (p__$1){
var p_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$component_DASH_params.cljs$core$IFn$_invoke$arity$1(p__$1),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$value,cljs.core.cst$kw$model.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.cst$kw$placeholder,cljs.core.cst$kw$placeholder.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(p__$1),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.cst$kw$height,cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(p__$1)], null)], 0)),cljs.core.cst$kw$on_DASH_change,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$on_DASH_change.cljs$core$IFn$_invoke$arity$1(p__$1),elastic_input.core.ev_tgt_val),cljs.core.cst$kw$on_DASH_focus,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(elastic_input.core.opt(cljs.core.cst$kw$on_DASH_focus.cljs$core$IFn$_invoke$arity$1(p__$1)),elastic_input.core.ev_tgt_val),cljs.core.cst$kw$on_DASH_blur,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(elastic_input.core.opt(cljs.core.cst$kw$on_DASH_blur.cljs$core$IFn$_invoke$arity$1(p__$1)),elastic_input.core.ev_tgt_val),cljs.core.cst$kw$on_DASH_key_DASH_press,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(elastic_input.core.opt(cljs.core.cst$kw$on_DASH_key_DASH_data.cljs$core$IFn$_invoke$arity$1(p__$1)),elastic_input.core.ev_key_press_data)], null)], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,p_SINGLEQUOTE_], null);
});})(setup))
], null));
});
});
elastic_input.core.scroll_l = (function elastic_input$core$scroll_l(dom_node){
return dom_node.scrollLeft = (0);
});
elastic_input.core.scroll_t = (function elastic_input$core$scroll_t(dom_node){
return dom_node.scrollTop = (0);
});
/**
 * Attach an update handler that prevents scrolling.
 */
elastic_input.core.middleware__scroll = (function elastic_input$core$middleware__scroll(scroll_f){
return (function (c){
return cljs.core.with_meta(c,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_did_DASH_update,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(scroll_f,reagent.core.dom_node)], null));
});
});
/**
 * Create a handler for component-did-mount and component-did-update
 */
elastic_input.core.focus_ctrl_factory = (function elastic_input$core$focus_ctrl_factory(focus_tracker,reset_scroll){
return (function (this$){
var n = reagent.core.dom_node(this$);
var _ = (reset_scroll.cljs$core$IFn$_invoke$arity$1 ? reset_scroll.cljs$core$IFn$_invoke$arity$1(n) : reset_scroll.call(null,n));
var map__17209 = cljs.core.deref(focus_tracker);
var map__17209__$1 = (((((!((map__17209 == null))))?(((((map__17209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17209):map__17209);
var curr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17209__$1,cljs.core.cst$kw$curr);
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17209__$1,cljs.core.cst$kw$prev);
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(prev);
if(and__4120__auto__){
return curr;
} else {
return and__4120__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(focus_tracker,((function (n,_,map__17209,map__17209__$1,curr,prev){
return (function (p1__17207_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17207_SHARP_,cljs.core.cst$kw$prev,true);
});})(n,_,map__17209,map__17209__$1,curr,prev))
);

return n.focus();
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = prev;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(curr);
} else {
return and__4120__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(focus_tracker,((function (n,_,map__17209,map__17209__$1,curr,prev){
return (function (p1__17208_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17208_SHARP_,cljs.core.cst$kw$prev,false);
});})(n,_,map__17209,map__17209__$1,curr,prev))
);

return n.blur();
} else {
return true;

}
}
});
});
elastic_input.core.middleware__focus = (function elastic_input$core$middleware__focus(c){
var focus_tracker = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$curr,false,cljs.core.cst$kw$prev,false], null));
var focus_ctrl = elastic_input.core.focus_ctrl_factory(focus_tracker,elastic_input.core.scroll_l);
return ((function (focus_tracker,focus_ctrl){
return (function (p){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_mount,focus_ctrl,cljs.core.cst$kw$component_DASH_did_DASH_update,focus_ctrl,cljs.core.cst$kw$reagent_DASH_render,((function (focus_tracker,focus_ctrl){
return (function (p__17211){
var map__17212 = p__17211;
var map__17212__$1 = (((((!((map__17212 == null))))?(((((map__17212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17212):map__17212);
var p__$1 = map__17212__$1;
var focused_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17212__$1,cljs.core.cst$kw$focused_QMARK_);
var map__17214 = cljs.core.deref(focus_tracker);
var map__17214__$1 = (((((!((map__17214 == null))))?(((((map__17214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17214):map__17214);
var curr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17214__$1,cljs.core.cst$kw$curr);
var p_SINGLEQUOTE_ = cljs.core.assoc_in(p__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$component_DASH_params,cljs.core.cst$kw$class], null),(cljs.core.truth_(curr)?"active":"inactive"));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(focused_QMARK_,curr)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(focus_tracker,cljs.core.update,cljs.core.cst$kw$curr,cljs.core.not);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,p_SINGLEQUOTE_], null);
});})(focus_tracker,focus_ctrl))
], null));
});
;})(focus_tracker,focus_ctrl))
});
elastic_input.core.escape = (function elastic_input$core$escape(txt){
return clojure.string.escape(txt,new cljs.core.PersistentArrayMap(null, 4, ["<","&lt;",">","&gt;","&","&amp;","\n","<br>"], null));
});
elastic_input.core.phantom_ctrl_factory = (function elastic_input$core$phantom_ctrl_factory(input_dom_node_ratom,phantom_dom_node_ratom,inspect,report,display_style){
return (function (_this){
var in$ = cljs.core.deref(input_dom_node_ratom);
var pn = cljs.core.deref(phantom_dom_node_ratom);
var _ = pn.style.display = display_style;
var ___$1 = in$.style.display = "none";
var d = (inspect.cljs$core$IFn$_invoke$arity$1 ? inspect.cljs$core$IFn$_invoke$arity$1(pn) : inspect.call(null,pn));
var ___$2 = pn.style.display = "none";
var ___$3 = in$.style.display = display_style;
return (report.cljs$core$IFn$_invoke$arity$1 ? report.cljs$core$IFn$_invoke$arity$1(d) : report.call(null,d));
});
});
/**
 * Create a component that reports its width and height when it's mounted,
 * the arguments change, or the window is resized.
 * The component is made visible just before inspecting its dimensions,
 * and hidden immediately afterwards.
 *   
 */
elastic_input.core.phantom_factory = (function elastic_input$core$phantom_factory(inspect,report,display_style,sentinel_str){
return (function (params){
var dom_node_ratom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var phantom_ctrl = elastic_input.core.phantom_ctrl_factory(cljs.core.cst$kw$dom_DASH_node_DASH_ratom.cljs$core$IFn$_invoke$arity$1(params),dom_node_ratom,inspect,report,display_style);
var setup = ((function (dom_node_ratom,phantom_ctrl){
return (function (this$){
cljs.core.reset_BANG_(dom_node_ratom,reagent.core.dom_node(this$));

window.addEventListener("resize",((function (dom_node_ratom,phantom_ctrl){
return (function (_ev){
return (phantom_ctrl.cljs$core$IFn$_invoke$arity$1 ? phantom_ctrl.cljs$core$IFn$_invoke$arity$1(this$) : phantom_ctrl.call(null,this$));
});})(dom_node_ratom,phantom_ctrl))
,true);

return this$;
});})(dom_node_ratom,phantom_ctrl))
;
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_mount,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(phantom_ctrl,setup),cljs.core.cst$kw$component_DASH_did_DASH_update,phantom_ctrl,cljs.core.cst$kw$reagent_DASH_render,((function (dom_node_ratom,phantom_ctrl,setup){
return (function (p__17216){
var map__17217 = p__17216;
var map__17217__$1 = (((((!((map__17217 == null))))?(((((map__17217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17217):map__17217);
var params__$1 = map__17217__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17217__$1,cljs.core.cst$kw$model);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17217__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17217__$1,cljs.core.cst$kw$height);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$phantom,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height], null),cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(elastic_input.core.escape(model)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sentinel_str)].join('')], null)], null)], null);
});})(dom_node_ratom,phantom_ctrl,setup))
], null));
});
});
elastic_input.core.derive_dims = (function elastic_input$core$derive_dims(phantom_dims,dims_auto,min_len,extra_len){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (dim){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(phantom_dims,dim);
var min_len__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(min_len,dim);
var extra_len__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(extra_len,dim);
var v2 = ((((v > min_len__$1))?v:min_len__$1) + extra_len__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dim,v2], null);
}),dims_auto));
});
elastic_input.core.derive_params_input = (function elastic_input$core$derive_params_input(p__17219,dims_input_com){
var map__17220 = p__17219;
var map__17220__$1 = (((((!((map__17220 == null))))?(((((map__17220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17220):map__17220);
var params = map__17220__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17220__$1,cljs.core.cst$kw$disabled_QMARK_);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__17222 = params;
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.assoc_in(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__17222,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_change,((function (G__17222,map__17220,map__17220__$1,params,disabled_QMARK_){
return (function (){
return cljs.core.List.EMPTY;
});})(G__17222,map__17220,map__17220__$1,params,disabled_QMARK_))
,cljs.core.cst$kw$on_DASH_blur,((function (G__17222,map__17220,map__17220__$1,params,disabled_QMARK_){
return (function (){
return cljs.core.List.EMPTY;
});})(G__17222,map__17220,map__17220__$1,params,disabled_QMARK_))
,cljs.core.cst$kw$on_DASH_key_DASH_data,((function (G__17222,map__17220,map__17220__$1,params,disabled_QMARK_){
return (function (){
return cljs.core.List.EMPTY;
});})(G__17222,map__17220,map__17220__$1,params,disabled_QMARK_))
], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$style,cljs.core.cst$kw$cursor], null),"not-allowed");
} else {
return G__17222;
}
})(),dims_input_com], 0));
});
elastic_input.core.derive_params_phantom = (function elastic_input$core$derive_params_phantom(p__17224,dims_explicit){
var map__17225 = p__17224;
var map__17225__$1 = (((((!((map__17225 == null))))?(((((map__17225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17225):map__17225);
var params = map__17225__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17225__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17225__$1,cljs.core.cst$kw$height);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(params,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(dims_explicit,cljs.core.cst$kw$model,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dom_DASH_node_DASH_ratom], 0))),cljs.core.cst$kw$model,((function (map__17225,map__17225__$1,params,width,height){
return (function (p1__17223_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__17223_SHARP_)){
var or__4131__auto__ = cljs.core.cst$kw$placeholder.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
} else {
return p1__17223_SHARP_;
}
});})(map__17225,map__17225__$1,params,width,height))
);
});
elastic_input.core.middleware__auto = (function elastic_input$core$middleware__auto(c){
return (function (p__17230){
var map__17231 = p__17230;
var map__17231__$1 = (((((!((map__17231 == null))))?(((((map__17231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17231):map__17231);
var params = map__17231__$1;
var min_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17231__$1,cljs.core.cst$kw$min_DASH_len);
var extra_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17231__$1,cljs.core.cst$kw$extra_DASH_len);
var inspect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17231__$1,cljs.core.cst$kw$inspect);
var display_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17231__$1,cljs.core.cst$kw$display_DASH_style);
var sentinel_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17231__$1,cljs.core.cst$kw$sentinel_DASH_str);
var with_let17233 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let17233);
var temp__5724__auto___17235 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___17235 == null)){
} else {
var c__7808__auto___17236 = temp__5724__auto___17235;
if((with_let17233.generation === c__7808__auto___17236.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let17233.generation = c__7808__auto___17236.ratomGeneration;
}


var init17234 = (with_let17233.length === (0));
var dims_explicit = ((init17234)?(with_let17233[(0)] = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (init17234,with_let17233,map__17231,map__17231__$1,params,min_len,extra_len,inspect,display_style,sentinel_str){
return (function (p1__17227_SHARP_){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,p1__17227_SHARP_) instanceof cljs.core.Keyword);
});})(init17234,with_let17233,map__17231,map__17231__$1,params,min_len,extra_len,inspect,display_style,sentinel_str))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$width,cljs.core.cst$kw$height], null))):(with_let17233[(0)]));
var dims_auto = ((init17234)?(with_let17233[(1)] = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (init17234,dims_explicit,with_let17233,map__17231,map__17231__$1,params,min_len,extra_len,inspect,display_style,sentinel_str){
return (function (p1__17228_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["100%",null,cljs.core.cst$kw$auto,null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,p1__17228_SHARP_));
});})(init17234,dims_explicit,with_let17233,map__17231,map__17231__$1,params,min_len,extra_len,inspect,display_style,sentinel_str))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$width,cljs.core.cst$kw$height], null))):(with_let17233[(1)]));
var phantom_dims_r = ((init17234)?(with_let17233[(2)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,null,cljs.core.cst$kw$height,null], null))):(with_let17233[(2)]));
var report = ((init17234)?(with_let17233[(3)] = ((function (init17234,dims_explicit,dims_auto,phantom_dims_r,with_let17233,map__17231,map__17231__$1,params,min_len,extra_len,inspect,display_style,sentinel_str){
return (function (p1__17229_SHARP_){
return cljs.core.reset_BANG_(phantom_dims_r,p1__17229_SHARP_);
});})(init17234,dims_explicit,dims_auto,phantom_dims_r,with_let17233,map__17231,map__17231__$1,params,min_len,extra_len,inspect,display_style,sentinel_str))
):(with_let17233[(3)]));
var phantom = ((init17234)?(with_let17233[(4)] = elastic_input.core.phantom_factory(inspect,report,display_style,sentinel_str)):(with_let17233[(4)]));
var res__7809__auto__ = (function (){var dims_input_com = elastic_input.core.derive_dims(cljs.core.deref(phantom_dims_r),dims_auto,min_len,extra_len);
var params_input = elastic_input.core.derive_params_input(params,dims_input_com);
var params_phantom = elastic_input.core.derive_params_phantom(params,dims_explicit);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zc_DASH_elastic_DASH_input,cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(params),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,params_input], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phantom,params_phantom], null)], null);
})();

return res__7809__auto__;
});
});
elastic_input.core.sync_buffer_with_external_model = (function elastic_input$core$sync_buffer_with_external_model(r_buffer,external_model_STAR_){
var b = cljs.core.deref(r_buffer);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$external_DASH_model.cljs$core$IFn$_invoke$arity$1(b),external_model_STAR_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(r_buffer,cljs.core.assoc,cljs.core.cst$kw$model,external_model_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$external_DASH_model,external_model_STAR_], 0));
} else {
return null;
}
});
elastic_input.core.middleware__buffer = (function elastic_input$core$middleware__buffer(c){
return (function (p__17239){
var map__17240 = p__17239;
var map__17240__$1 = (((((!((map__17240 == null))))?(((((map__17240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17240):map__17240);
var p = map__17240__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17240__$1,cljs.core.cst$kw$model);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17240__$1,cljs.core.cst$kw$on_DASH_change);
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17240__$1,cljs.core.cst$kw$on_DASH_blur);
var on_key_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17240__$1,cljs.core.cst$kw$on_DASH_key_DASH_data);
var buffer_ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17240__$1,cljs.core.cst$kw$buffer_DASH_ratom);
var commit_on = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17240__$1,cljs.core.cst$kw$commit_DASH_on,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$enter,null], null), null));
var with_let17242 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let17242);
var temp__5724__auto___17257 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___17257 == null)){
} else {
var c__7808__auto___17258 = temp__5724__auto___17257;
if((with_let17242.generation === c__7808__auto___17258.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let17242.generation = c__7808__auto___17258.ratomGeneration;
}


var init17243 = (with_let17242.length === (0));
var r_buffer = ((init17243)?(with_let17242[(0)] = (function (){var or__4131__auto__ = buffer_ratom;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
})()):(with_let17242[(0)]));
var r_buffer_model = ((init17243)?(with_let17242[(1)] = reagent.core.cursor(r_buffer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model], null))):(with_let17242[(1)]));
var r_buffer_upd_QMARK_ = ((init17243)?(with_let17242[(2)] = reagent.core.cursor(r_buffer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$updated_QMARK_], null))):(with_let17242[(2)]));
var update_buffer_BANG_ = ((init17243)?(with_let17242[(3)] = ((function (init17243,r_buffer,r_buffer_model,r_buffer_upd_QMARK_,with_let17242,map__17240,map__17240__$1,p,model,on_change,on_blur,on_key_data,buffer_ratom,commit_on){
return (function (p1__17237_SHARP_){
cljs.core.reset_BANG_(r_buffer_model,p1__17237_SHARP_);

return cljs.core.reset_BANG_(r_buffer_upd_QMARK_,true);
});})(init17243,r_buffer,r_buffer_model,r_buffer_upd_QMARK_,with_let17242,map__17240,map__17240__$1,p,model,on_change,on_blur,on_key_data,buffer_ratom,commit_on))
):(with_let17242[(3)]));
var commit_buffer_BANG_ = ((init17243)?(with_let17242[(4)] = ((function (init17243,r_buffer,r_buffer_model,r_buffer_upd_QMARK_,update_buffer_BANG_,with_let17242,map__17240,map__17240__$1,p,model,on_change,on_blur,on_key_data,buffer_ratom,commit_on){
return (function (){
if(cljs.core.truth_(cljs.core.deref(r_buffer_upd_QMARK_))){
var G__17244_17259 = cljs.core.deref(r_buffer_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__17244_17259) : on_change.call(null,G__17244_17259));
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var G__17246 = cljs.core.cst$kw$blur;
return (commit_on.cljs$core$IFn$_invoke$arity$1 ? commit_on.cljs$core$IFn$_invoke$arity$1(G__17246) : commit_on.call(null,G__17246));
})();
if(cljs.core.truth_(and__4120__auto__)){
return on_blur;
} else {
return and__4120__auto__;
}
})())){
return (on_blur.cljs$core$IFn$_invoke$arity$0 ? on_blur.cljs$core$IFn$_invoke$arity$0() : on_blur.call(null));
} else {
return null;
}
});})(init17243,r_buffer,r_buffer_model,r_buffer_upd_QMARK_,update_buffer_BANG_,with_let17242,map__17240,map__17240__$1,p,model,on_change,on_blur,on_key_data,buffer_ratom,commit_on))
):(with_let17242[(4)]));
var on_key_data_STAR_ = ((init17243)?(with_let17242[(5)] = ((function (init17243,r_buffer,r_buffer_model,r_buffer_upd_QMARK_,update_buffer_BANG_,commit_buffer_BANG_,with_let17242,map__17240,map__17240__$1,p,model,on_change,on_blur,on_key_data,buffer_ratom,commit_on){
return (function (p1__17238_SHARP_){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(elastic_input.core.enter_key_code,cljs.core.cst$kw$key_DASH_code.cljs$core$IFn$_invoke$arity$1(p1__17238_SHARP_));
if(and__4120__auto__){
var or__4131__auto__ = (function (){var G__17252 = cljs.core.cst$kw$enter;
return (commit_on.cljs$core$IFn$_invoke$arity$1 ? commit_on.cljs$core$IFn$_invoke$arity$1(G__17252) : commit_on.call(null,G__17252));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto____$1 = (function (){var G__17254 = cljs.core.cst$kw$shift_DASH_enter;
return (commit_on.cljs$core$IFn$_invoke$arity$1 ? commit_on.cljs$core$IFn$_invoke$arity$1(G__17254) : commit_on.call(null,G__17254));
})();
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.cst$kw$shift_DASH_key_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__17238_SHARP_);
} else {
return and__4120__auto____$1;
}
}
} else {
return and__4120__auto__;
}
})())){
cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(p1__17238_SHARP_).preventDefault();

(commit_buffer_BANG_.cljs$core$IFn$_invoke$arity$0 ? commit_buffer_BANG_.cljs$core$IFn$_invoke$arity$0() : commit_buffer_BANG_.call(null));
} else {
}

var temp__5720__auto__ = on_key_data;
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__17238_SHARP_) : f.call(null,p1__17238_SHARP_));
} else {
return null;
}
});})(init17243,r_buffer,r_buffer_model,r_buffer_upd_QMARK_,update_buffer_BANG_,commit_buffer_BANG_,with_let17242,map__17240,map__17240__$1,p,model,on_change,on_blur,on_key_data,buffer_ratom,commit_on))
):(with_let17242[(5)]));
var _ = ((init17243)?(with_let17242[(6)] = cljs.core.reset_BANG_(r_buffer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$model,cljs.core.cst$kw$model.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$external_DASH_model,cljs.core.cst$kw$model.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$commit_DASH_fn,commit_buffer_BANG_], null))):(with_let17242[(6)]));
var res__7809__auto__ = (function (){
elastic_input.core.sync_buffer_with_external_model(r_buffer,model);

var p_SINGLEQUOTE_ = (function (){var G__17255 = p;
if(cljs.core.truth_(cljs.core.cst$kw$buffer_QMARK_.cljs$core$IFn$_invoke$arity$1(p))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__17255,(cljs.core.truth_((function (){var G__17256 = cljs.core.cst$kw$blur;
return (commit_on.cljs$core$IFn$_invoke$arity$1 ? commit_on.cljs$core$IFn$_invoke$arity$1(G__17256) : commit_on.call(null,G__17256));
})())?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_blur,commit_buffer_BANG_], null):null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$model,cljs.core.deref(r_buffer_model),cljs.core.cst$kw$on_DASH_change,update_buffer_BANG_,cljs.core.cst$kw$on_DASH_key_DASH_data,on_key_data_STAR_], null)], 0));
} else {
return G__17255;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,p_SINGLEQUOTE_], null);
})()
;

return res__7809__auto__;
});
});
elastic_input.core.middleware__up_down_key = (function elastic_input$core$middleware__up_down_key(c){
return (function (p__17260){
var map__17261 = p__17260;
var map__17261__$1 = (((((!((map__17261 == null))))?(((((map__17261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17261):map__17261);
var p = map__17261__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17261__$1,cljs.core.cst$kw$model);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17261__$1,cljs.core.cst$kw$on_DASH_change);
var on_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17261__$1,cljs.core.cst$kw$on_DASH_focus);
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17261__$1,cljs.core.cst$kw$on_DASH_blur);
var with_let17263 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let17263);
var temp__5724__auto___17271 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___17271 == null)){
} else {
var c__7808__auto___17272 = temp__5724__auto___17271;
if((with_let17263.generation === c__7808__auto___17272.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let17263.generation = c__7808__auto___17272.ratomGeneration;
}


var init17264 = (with_let17263.length === (0));
var r_buffer = ((init17264)?(with_let17263[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$model,model,cljs.core.cst$kw$external_DASH_model,model], null))):(with_let17263[(0)]));
var res__7809__auto__ = (function (){
elastic_input.core.sync_buffer_with_external_model(r_buffer,model);

var op_STAR_ = ((function (init17264,r_buffer,with_let17263,map__17261,map__17261__$1,p,model,on_change,on_focus,on_blur){
return (function (op,operand){
return ((function (init17264,r_buffer,with_let17263,map__17261,map__17261__$1,p,model,on_change,on_focus,on_blur){
return (function (){
var v = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__17267 = Number(cljs.core.cst$kw$model.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(r_buffer)));
var G__17268 = operand;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__17267,G__17268) : op.call(null,G__17267,G__17268));
})());
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(r_buffer,cljs.core.assoc,cljs.core.cst$kw$model,v);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(v) : on_change.call(null,v));
});
;})(init17264,r_buffer,with_let17263,map__17261,map__17261__$1,p,model,on_change,on_focus,on_blur))
});})(init17264,r_buffer,with_let17263,map__17261,map__17261__$1,p,model,on_change,on_focus,on_blur))
;
var p_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p,cljs.core.cst$kw$model,cljs.core.cst$kw$model.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(r_buffer)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_focus,((function (op_STAR_,init17264,r_buffer,with_let17263,map__17261,map__17261__$1,p,model,on_change,on_focus,on_blur){
return (function (){
keybind.core.bind_BANG_("up",cljs.core.cst$kw$up,op_STAR_(cljs.core._PLUS_,(1)));

keybind.core.bind_BANG_("down",cljs.core.cst$kw$down,op_STAR_(cljs.core._,(1)));

keybind.core.bind_BANG_("shift-up",cljs.core.cst$kw$up,op_STAR_(cljs.core._PLUS_,(10)));

keybind.core.bind_BANG_("shift-down",cljs.core.cst$kw$down,op_STAR_(cljs.core._,(10)));

var G__17269 = on_focus;
if((G__17269 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__17269,cljs.core.PersistentVector.EMPTY);
}
});})(op_STAR_,init17264,r_buffer,with_let17263,map__17261,map__17261__$1,p,model,on_change,on_focus,on_blur))
,cljs.core.cst$kw$on_DASH_blur,((function (op_STAR_,init17264,r_buffer,with_let17263,map__17261,map__17261__$1,p,model,on_change,on_focus,on_blur){
return (function (){
keybind.core.unbind_all_BANG_();

var G__17270 = on_blur;
if((G__17270 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__17270,cljs.core.PersistentVector.EMPTY);
}
});})(op_STAR_,init17264,r_buffer,with_let17263,map__17261,map__17261__$1,p,model,on_change,on_focus,on_blur))
], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,p_SINGLEQUOTE_], null);
})()
;

return res__7809__auto__;
});
});
elastic_input.core.inspect = (function elastic_input$core$inspect(obj){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,obj.clientWidth,cljs.core.cst$kw$height,obj.clientHeight], null);
});
elastic_input.core.params_default = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$min_DASH_len,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(10),cljs.core.cst$kw$height,(0)], null),cljs.core.cst$kw$extra_DASH_len,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(5),cljs.core.cst$kw$height,(0)], null),cljs.core.cst$kw$inspect,elastic_input.core.inspect,cljs.core.cst$kw$display_DASH_style,"inline-block",cljs.core.cst$kw$sentinel_DASH_str,"",cljs.core.cst$kw$class,"input-auto-w"], null),cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$min_DASH_len,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,(25),cljs.core.cst$kw$width,(0)], null),cljs.core.cst$kw$extra_DASH_len,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,(0),cljs.core.cst$kw$width,(0)], null),cljs.core.cst$kw$inspect,elastic_input.core.inspect,cljs.core.cst$kw$display_DASH_style,"block",cljs.core.cst$kw$sentinel_DASH_str,"<br class='lbr'>",cljs.core.cst$kw$class,"textarea-auto-h"], null)], null);
elastic_input.core.middleware__default_params = (function elastic_input$core$middleware__default_params(k_com){
return (function (c){
return (function (p){
var p_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(elastic_input.core.params_default,k_com),p], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,p_SINGLEQUOTE_], null);
});
});
});
elastic_input.core.middleware__dom_node = (function elastic_input$core$middleware__dom_node(component){
var r = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (r){
return (function (params){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,cljs.core.cst$kw$dom_DASH_node_DASH_ratom,r)], null);
});
;})(r))
});
elastic_input.core.derive_input_com = (function elastic_input$core$derive_input_com(p__17274){
var map__17275 = p__17274;
var map__17275__$1 = (((((!((map__17275 == null))))?(((((map__17275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17275):map__17275);
var args = map__17275__$1;
var textarea_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17275__$1,cljs.core.cst$kw$textarea_QMARK_);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17275__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17275__$1,cljs.core.cst$kw$height);
var k_com = (cljs.core.truth_((function (){var or__4131__auto__ = textarea_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$auto,height);
}
})())?cljs.core.cst$kw$textarea:cljs.core.cst$kw$input);
var G__17277 = cljs.core.identity;
var G__17277__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(G__17277,elastic_input.core.middleware__dom_node,elastic_input.core.middleware__default_params(k_com))
;
var G__17277__$2 = ((cljs.core.contains_QMARK_(args,cljs.core.cst$kw$number_QMARK_))?cljs.core.comp.cljs$core$IFn$_invoke$arity$2(G__17277__$1,elastic_input.core.middleware__up_down_key):G__17277__$1);
var G__17277__$3 = ((cljs.core.contains_QMARK_(args,cljs.core.cst$kw$buffer_QMARK_))?cljs.core.comp.cljs$core$IFn$_invoke$arity$2(G__17277__$2,elastic_input.core.middleware__buffer):G__17277__$2);
var G__17277__$4 = (cljs.core.truth_(cljs.core.some(((function (G__17277,G__17277__$1,G__17277__$2,G__17277__$3,k_com,map__17275,map__17275__$1,args,textarea_QMARK_,width,height){
return (function (p1__17273_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$auto,cljs.core.get.cljs$core$IFn$_invoke$arity$2(args,p1__17273_SHARP_));
});})(G__17277,G__17277__$1,G__17277__$2,G__17277__$3,k_com,map__17275,map__17275__$1,args,textarea_QMARK_,width,height))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$width,cljs.core.cst$kw$height], null)))?cljs.core.comp.cljs$core$IFn$_invoke$arity$2(G__17277__$3,elastic_input.core.middleware__auto):G__17277__$3);
var G__17277__$5 = ((cljs.core.contains_QMARK_(args,cljs.core.cst$kw$focused_QMARK_))?cljs.core.comp.cljs$core$IFn$_invoke$arity$2(G__17277__$4,elastic_input.core.middleware__focus):G__17277__$4);
var G__17277__$6 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input,k_com))?cljs.core.comp.cljs$core$IFn$_invoke$arity$2(G__17277__$5,elastic_input.core.middleware__scroll(elastic_input.core.scroll_t)):G__17277__$5);
var G__17277__$7 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$textarea,k_com))?cljs.core.comp.cljs$core$IFn$_invoke$arity$2(G__17277__$6,elastic_input.core.middleware__scroll(elastic_input.core.scroll_l)):G__17277__$6);
var G__17277__$8 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(G__17277__$7,elastic_input.core.middleware__adapt_params)
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__17277__$8,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_com], null));

});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$elastic_DASH_input$core_SLASH_elastic_DASH_input_STAR_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$args,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_args)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$args,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_args),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elastic_DASH_input$core_SLASH_args], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elastic_DASH_input$core_SLASH_args], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$args,cljs.core.cst$kw$elastic_DASH_input$core_SLASH_args),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
elastic_input.core.elastic_input_STAR_ = (function elastic_input$core$elastic_input_STAR_(args){
var with_let17278 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let17278);
var temp__5724__auto___17280 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___17280 == null)){
} else {
var c__7808__auto___17281 = temp__5724__auto___17280;
if((with_let17278.generation === c__7808__auto___17281.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let17278.generation = c__7808__auto___17281.ratomGeneration;
}


var init17279 = (with_let17278.length === (0));
var input_com = ((init17279)?(with_let17278[(0)] = elastic_input.core.derive_input_com(args)):(with_let17278[(0)]));
var res__7809__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_com,args], null);

return res__7809__auto__;
});
elastic_input.core.elastic_input = (function elastic_input$core$elastic_input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17286 = arguments.length;
var i__4731__auto___17287 = (0);
while(true){
if((i__4731__auto___17287 < len__4730__auto___17286)){
args__4736__auto__.push((arguments[i__4731__auto___17287]));

var G__17288 = (i__4731__auto___17287 + (1));
i__4731__auto___17287 = G__17288;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return elastic_input.core.elastic_input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

elastic_input.core.elastic_input.cljs$core$IFn$_invoke$arity$variadic = (function (p__17283){
var map__17284 = p__17283;
var map__17284__$1 = (((((!((map__17284 == null))))?(((((map__17284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17284):map__17284);
var args = map__17284__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elastic_input.core.elastic_input_STAR_,args], null);
});

elastic_input.core.elastic_input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
elastic_input.core.elastic_input.cljs$lang$applyTo = (function (seq17282){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17282));
});

var opts17291_17303 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts17291_17303){
return (function (ret__12429__auto__,p__17292){
var vec__17293 = p__17292;
var ___12430__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17293,(0),null);
var f__12431__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17293,(1),null);
var sym__12432__auto__ = (f__12431__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12431__auto__.cljs$core$IFn$_invoke$arity$0() : f__12431__auto__.call(null));
var G__17296 = ret__12429__auto__;
if(cljs.core.truth_(sym__12432__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__17296,sym__12432__auto__);
} else {
return G__17296;
}
});})(opts17291_17303))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts17291_17303){
return (function (p1__12428__12433__auto__){
var G__17298 = cljs.core.first(p1__12428__12433__auto__);
var fexpr__17297 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts17291_17303);
return (fexpr__17297.cljs$core$IFn$_invoke$arity$1 ? fexpr__17297.cljs$core$IFn$_invoke$arity$1(G__17298) : fexpr__17297.call(null,G__17298));
});})(opts17291_17303))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elastic_DASH_input$core_SLASH_elastic_DASH_input_STAR_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts17291_17303){
return (function (){
var checked__12395__auto__ = (function (){var G__17300 = cljs.core.cst$sym$elastic_DASH_input$core_SLASH_elastic_DASH_input_STAR_;
var G__17301 = new cljs.core.Var(function(){return elastic_input.core.elastic_input_STAR_;},cljs.core.cst$sym$elastic_DASH_input$core_SLASH_elastic_DASH_input_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$elastic_DASH_input$core,cljs.core.cst$sym$elastic_DASH_input_STAR_,"resources-app/public/js/compiled/out2/elastic_input/core.cljs",21,1,359,359,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$args], null)),null,(cljs.core.truth_(elastic_input.core.elastic_input_STAR_)?elastic_input.core.elastic_input_STAR_.cljs$lang$test:null)]));
var G__17302 = opts17291_17303;
var fexpr__17299 = new cljs.core.Var(function(){return cljs.spec.test.alpha.instrument_1_STAR_;},cljs.core.cst$sym$cljs$spec$test$alpha_SLASH_instrument_DASH_1_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$test$alpha,cljs.core.cst$sym$instrument_DASH_1_STAR_,"resources-app/public/js/compiled/out2/cljs/spec/test/alpha.cljs",21,1,156,156,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s,cljs.core.cst$sym$v,cljs.core.cst$sym$opts], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.instrument_1_STAR_)?cljs.spec.test.alpha.instrument_1_STAR_.cljs$lang$test:null)]));
return (fexpr__17299.cljs$core$IFn$_invoke$arity$3 ? fexpr__17299.cljs$core$IFn$_invoke$arity$3(G__17300,G__17301,G__17302) : fexpr__17299.call(null,G__17300,G__17301,G__17302));
})();
if(cljs.core.truth_(checked__12395__auto__)){
elastic_input.core.elastic_input_STAR_ = checked__12395__auto__;
} else {
}

return cljs.core.cst$sym$elastic_DASH_input$core_SLASH_elastic_DASH_input_STAR_;
});})(opts17291_17303))
], null)))));
