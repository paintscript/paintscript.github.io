// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('navtree.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('taoensso.timbre');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('keybind.core');
goog.require('clojure.zip');
goog.require('hiccup_icons.mdi');
goog.require('hiccup_icons.octicons');
goog.require('navtree.zipper');
goog.require('navtree.util');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_params,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navtree$core_SLASH_tree,cljs.core.cst$kw$navtree$core_SLASH_id_DASH_fn,cljs.core.cst$kw$navtree$core_SLASH_children_DASH_fn], null),cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navtree$core_SLASH_selection_DASH_node,cljs.core.cst$kw$navtree$core_SLASH_selection_DASH_path,cljs.core.cst$kw$navtree$core_SLASH_selection_DASH_path_DASH_ratom,cljs.core.cst$kw$navtree$core_SLASH_selection_DASH_path_DASH_init,cljs.core.cst$kw$navtree$core_SLASH_on_DASH_selection_DASH_node,cljs.core.cst$kw$navtree$core_SLASH_on_DASH_selection_DASH_path,cljs.core.cst$kw$navtree$core_SLASH_auto_DASH_nav,cljs.core.cst$kw$navtree$core_SLASH_ui_DASH_mode,cljs.core.cst$kw$navtree$core_SLASH_keynav_QMARK_,cljs.core.cst$kw$navtree$core_SLASH_whitelist,cljs.core.cst$kw$navtree$core_SLASH_whitelist_QMARK_,cljs.core.cst$kw$navtree$core_SLASH_header_DASH_fn,cljs.core.cst$kw$navtree$core_SLASH_header_DASH_ratom,cljs.core.cst$kw$navtree$core_SLASH_content_DASH_ratom,cljs.core.cst$kw$navtree$core_SLASH_content_DASH_fn,cljs.core.cst$kw$navtree$core_SLASH_content_DASH_loading_DASH_fn,cljs.core.cst$kw$navtree$core_SLASH_content_DASH_placeholder,cljs.core.cst$kw$navtree$core_SLASH_tree_DASH_data_QMARK_,cljs.core.cst$kw$navtree$core_SLASH_request_DASH_tree_DASH_data], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navtree$core_SLASH_tree,cljs.core.cst$kw$navtree$core_SLASH_id_DASH_fn,cljs.core.cst$kw$navtree$core_SLASH_children_DASH_fn], null),new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navtree$core_SLASH_selection_DASH_node,cljs.core.cst$kw$navtree$core_SLASH_selection_DASH_path,cljs.core.cst$kw$navtree$core_SLASH_selection_DASH_path_DASH_ratom,cljs.core.cst$kw$navtree$core_SLASH_selection_DASH_path_DASH_init,cljs.core.cst$kw$navtree$core_SLASH_on_DASH_selection_DASH_node,cljs.core.cst$kw$navtree$core_SLASH_on_DASH_selection_DASH_path,cljs.core.cst$kw$navtree$core_SLASH_auto_DASH_nav,cljs.core.cst$kw$navtree$core_SLASH_ui_DASH_mode,cljs.core.cst$kw$navtree$core_SLASH_keynav_QMARK_,cljs.core.cst$kw$navtree$core_SLASH_whitelist,cljs.core.cst$kw$navtree$core_SLASH_whitelist_QMARK_,cljs.core.cst$kw$navtree$core_SLASH_header_DASH_fn,cljs.core.cst$kw$navtree$core_SLASH_header_DASH_ratom,cljs.core.cst$kw$navtree$core_SLASH_content_DASH_ratom,cljs.core.cst$kw$navtree$core_SLASH_content_DASH_fn,cljs.core.cst$kw$navtree$core_SLASH_content_DASH_loading_DASH_fn,cljs.core.cst$kw$navtree$core_SLASH_content_DASH_placeholder,cljs.core.cst$kw$navtree$core_SLASH_tree_DASH_data_QMARK_,cljs.core.cst$kw$navtree$core_SLASH_request_DASH_tree_DASH_data], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__17011){
return cljs.core.map_QMARK_(G__17011);
}),(function (G__17011){
return cljs.core.contains_QMARK_(G__17011,cljs.core.cst$kw$tree);
}),(function (G__17011){
return cljs.core.contains_QMARK_(G__17011,cljs.core.cst$kw$id_DASH_fn);
}),(function (G__17011){
return cljs.core.contains_QMARK_(G__17011,cljs.core.cst$kw$children_DASH_fn);
})], null),(function (G__17011){
return ((cljs.core.map_QMARK_(G__17011)) && (cljs.core.contains_QMARK_(G__17011,cljs.core.cst$kw$tree)) && (cljs.core.contains_QMARK_(G__17011,cljs.core.cst$kw$id_DASH_fn)) && (cljs.core.contains_QMARK_(G__17011,cljs.core.cst$kw$children_DASH_fn)));
}),new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selection_DASH_node,cljs.core.cst$kw$selection_DASH_path,cljs.core.cst$kw$selection_DASH_path_DASH_ratom,cljs.core.cst$kw$selection_DASH_path_DASH_init,cljs.core.cst$kw$on_DASH_selection_DASH_node,cljs.core.cst$kw$on_DASH_selection_DASH_path,cljs.core.cst$kw$auto_DASH_nav,cljs.core.cst$kw$ui_DASH_mode,cljs.core.cst$kw$keynav_QMARK_,cljs.core.cst$kw$whitelist,cljs.core.cst$kw$whitelist_QMARK_,cljs.core.cst$kw$header_DASH_fn,cljs.core.cst$kw$header_DASH_ratom,cljs.core.cst$kw$content_DASH_ratom,cljs.core.cst$kw$content_DASH_fn,cljs.core.cst$kw$content_DASH_loading_DASH_fn,cljs.core.cst$kw$content_DASH_placeholder,cljs.core.cst$kw$tree_DASH_data_QMARK_,cljs.core.cst$kw$request_DASH_tree_DASH_data], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navtree$core_SLASH_tree,cljs.core.cst$kw$navtree$core_SLASH_id_DASH_fn,cljs.core.cst$kw$navtree$core_SLASH_children_DASH_fn], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tree,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$children_DASH_fn], null),new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navtree$core_SLASH_selection_DASH_node,cljs.core.cst$kw$navtree$core_SLASH_selection_DASH_path,cljs.core.cst$kw$navtree$core_SLASH_selection_DASH_path_DASH_ratom,cljs.core.cst$kw$navtree$core_SLASH_selection_DASH_path_DASH_init,cljs.core.cst$kw$navtree$core_SLASH_on_DASH_selection_DASH_node,cljs.core.cst$kw$navtree$core_SLASH_on_DASH_selection_DASH_path,cljs.core.cst$kw$navtree$core_SLASH_auto_DASH_nav,cljs.core.cst$kw$navtree$core_SLASH_ui_DASH_mode,cljs.core.cst$kw$navtree$core_SLASH_keynav_QMARK_,cljs.core.cst$kw$navtree$core_SLASH_whitelist,cljs.core.cst$kw$navtree$core_SLASH_whitelist_QMARK_,cljs.core.cst$kw$navtree$core_SLASH_header_DASH_fn,cljs.core.cst$kw$navtree$core_SLASH_header_DASH_ratom,cljs.core.cst$kw$navtree$core_SLASH_content_DASH_ratom,cljs.core.cst$kw$navtree$core_SLASH_content_DASH_fn,cljs.core.cst$kw$navtree$core_SLASH_content_DASH_loading_DASH_fn,cljs.core.cst$kw$navtree$core_SLASH_content_DASH_placeholder,cljs.core.cst$kw$navtree$core_SLASH_tree_DASH_data_QMARK_,cljs.core.cst$kw$navtree$core_SLASH_request_DASH_tree_DASH_data], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$tree)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$id_DASH_fn)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$children_DASH_fn))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_atom,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_satisfies_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_IAtom,cljs.core.cst$sym$_PERCENT_)),(function (p1__17012_SHARP_){
if((!((p1__17012_SHARP_ == null)))){
if((((p1__17012_SHARP_.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === p1__17012_SHARP_.cljs$core$IAtom$)))){
return true;
} else {
if((!p1__17012_SHARP_.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__17012_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__17012_SHARP_);
}
}));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_tree,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_id_DASH_fn,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$f,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$k,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f,cljs.core.cst$kw$k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.keyword_QMARK_], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_children_DASH_fn,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$f,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$k,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f,cljs.core.cst$kw$k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.keyword_QMARK_], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_node_DASH_id,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_selection_DASH_node,cljs.core.cst$kw$navtree$core_SLASH_node_DASH_id,cljs.core.cst$kw$navtree$core_SLASH_node_DASH_id);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_selection_DASH_path,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$navtree$core_SLASH_node_DASH_id)),cljs.spec.alpha.nilable_impl(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$navtree$core_SLASH_node_DASH_id),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$navtree$core_SLASH_node_DASH_id,cljs.core.cst$kw$navtree$core_SLASH_node_DASH_id,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__17014){
return cljs.core.coll_QMARK_(G__17014);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$navtree$core_SLASH_node_DASH_id)], null),null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_selection_DASH_path_DASH_init,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$navtree$core_SLASH_node_DASH_id),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$navtree$core_SLASH_node_DASH_id,cljs.core.cst$kw$navtree$core_SLASH_node_DASH_id,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__17015){
return cljs.core.coll_QMARK_(G__17015);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$navtree$core_SLASH_node_DASH_id)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_selection_DASH_path_DASH_ratom,cljs.core.cst$kw$navtree$core_SLASH_atom,cljs.core.cst$kw$navtree$core_SLASH_atom);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_on_DASH_selection_DASH_node,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_on_DASH_selection_DASH_path,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_keynav_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_auto_DASH_nav,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disable,"null",cljs.core.cst$kw$terminal,"null",cljs.core.cst$kw$content,"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disable,null,cljs.core.cst$kw$terminal,null,cljs.core.cst$kw$content,null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_ui_DASH_mode,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tree,"null",cljs.core.cst$kw$row,"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tree,null,cljs.core.cst$kw$row,null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_whitelist,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$navtree$core_SLASH_node_DASH_id),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$navtree$core_SLASH_node_DASH_id,cljs.core.cst$kw$navtree$core_SLASH_node_DASH_id,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__17016){
return cljs.core.coll_QMARK_(G__17016);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$navtree$core_SLASH_node_DASH_id)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_whitelist_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_header_DASH_fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_header_DASH_ratom,cljs.core.cst$kw$navtree$core_SLASH_atom,cljs.core.cst$kw$navtree$core_SLASH_atom);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_content_DASH_fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_content_DASH_loading_DASH_fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_content_DASH_placeholder,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_content_DASH_ratom,cljs.core.cst$kw$navtree$core_SLASH_atom,cljs.core.cst$kw$navtree$core_SLASH_atom);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_tree_DASH_data_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$navtree$core_SLASH_request_DASH_tree_DASH_data,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.fn_QMARK_);
navtree.core.k_configs = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$next,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$k,"j",cljs.core.cst$kw$f,clojure.zip.next,cljs.core.cst$kw$label,"next"], null),cljs.core.cst$kw$next_DASH_jump,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$k,"shift-j",cljs.core.cst$kw$f,clojure.zip.right,cljs.core.cst$kw$label,"next (jump)"], null),cljs.core.cst$kw$prev,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$k,"k",cljs.core.cst$kw$f,clojure.zip.prev,cljs.core.cst$kw$label,"prev."], null),cljs.core.cst$kw$prev_DASH_jump,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$k,"shift-k",cljs.core.cst$kw$f,clojure.zip.left,cljs.core.cst$kw$label,"prev. (jump)"], null),cljs.core.cst$kw$up,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$k,"h",cljs.core.cst$kw$f,clojure.zip.up,cljs.core.cst$kw$label,"up"], null),cljs.core.cst$kw$exp_DASH_coll,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$k,"u",cljs.core.cst$kw$f,null,cljs.core.cst$kw$label,"expand/collapse"], null)], null);
navtree.core.k_seq_nav = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next,cljs.core.cst$kw$prev,cljs.core.cst$kw$next_DASH_jump,cljs.core.cst$kw$prev_DASH_jump,cljs.core.cst$kw$up], null);
navtree.core.k_navfn_pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__17017_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(p1__17017_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k,cljs.core.cst$kw$f], null));
}),navtree.core.k_configs),navtree.core.k_seq_nav);
navtree.core.params_default = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$loading_DASH_fn,(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$loading_DASH_indicator], null);
}),cljs.core.cst$kw$tree_DASH_data_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.delay_QMARK_),cljs.core.cst$kw$request_DASH_tree_DASH_data,(function (x,cont){
var G__17018 = cljs.core.deref(x);
return (cont.cljs$core$IFn$_invoke$arity$1 ? cont.cljs$core$IFn$_invoke$arity$1(G__17018) : cont.call(null,G__17018));
}),cljs.core.cst$kw$ui_DASH_mode,cljs.core.cst$kw$row,cljs.core.cst$kw$whitelist_QMARK_,true], null);
navtree.core.nav_to_BANG_ = (function navtree$core$nav_to_BANG_(sp_ratom,z_nav_args,on_selection_path,z_fn){
var vec__17019 = navtree.util.nav_path(cljs.core.deref(sp_ratom),z_fn,z_nav_args);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17019,(0),null);
var sel_path_next = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17019,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"navtree.core","/tmp/form-init18367787169279644540.clj",104,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__17019,_,sel_path_next){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["next selection-path: ",sel_path_next], null);
});})(vec__17019,_,sel_path_next))
,null)),null,1170510341);

return (on_selection_path.cljs$core$IFn$_invoke$arity$1 ? on_selection_path.cljs$core$IFn$_invoke$arity$1(sel_path_next) : on_selection_path.call(null,sel_path_next));
});
navtree.core.init_ctrl_key_bindings_BANG_ = (function navtree$core$init_ctrl_key_bindings_BANG_(navtree_token,k_fn_pairs){
var seq__17022 = cljs.core.seq(k_fn_pairs);
var chunk__17023 = null;
var count__17024 = (0);
var i__17025 = (0);
while(true){
if((i__17025 < count__17024)){
var vec__17032 = chunk__17023.cljs$core$IIndexed$_nth$arity$2(null,i__17025);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17032,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17032,(1),null);
keybind.core.bind_BANG_(k,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(navtree_token),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),f);


var G__17038 = seq__17022;
var G__17039 = chunk__17023;
var G__17040 = count__17024;
var G__17041 = (i__17025 + (1));
seq__17022 = G__17038;
chunk__17023 = G__17039;
count__17024 = G__17040;
i__17025 = G__17041;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__17022);
if(temp__5720__auto__){
var seq__17022__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17022__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__17022__$1);
var G__17042 = cljs.core.chunk_rest(seq__17022__$1);
var G__17043 = c__4550__auto__;
var G__17044 = cljs.core.count(c__4550__auto__);
var G__17045 = (0);
seq__17022 = G__17042;
chunk__17023 = G__17043;
count__17024 = G__17044;
i__17025 = G__17045;
continue;
} else {
var vec__17035 = cljs.core.first(seq__17022__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17035,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17035,(1),null);
keybind.core.bind_BANG_(k,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(navtree_token),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),f);


var G__17046 = cljs.core.next(seq__17022__$1);
var G__17047 = null;
var G__17048 = (0);
var G__17049 = (0);
seq__17022 = G__17046;
chunk__17023 = G__17047;
count__17024 = G__17048;
i__17025 = G__17049;
continue;
}
} else {
return null;
}
}
break;
}
});
navtree.core.init_nav_key_bindings_BANG_ = (function navtree$core$init_nav_key_bindings_BANG_(sp_ratom,z_nav_args,on_selection_path,navtree_token,k_navfn_pairs){
var seq__17050 = cljs.core.seq(k_navfn_pairs);
var chunk__17051 = null;
var count__17052 = (0);
var i__17053 = (0);
while(true){
if((i__17053 < count__17052)){
var vec__17060 = chunk__17051.cljs$core$IIndexed$_nth$arity$2(null,i__17053);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17060,(0),null);
var z_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17060,(1),null);
keybind.core.bind_BANG_(k,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(navtree_token),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),((function (seq__17050,chunk__17051,count__17052,i__17053,vec__17060,k,z_fn){
return (function() { 
var G__17066__delegate = function (_){
return navtree.core.nav_to_BANG_(sp_ratom,z_nav_args,on_selection_path,z_fn);
};
var G__17066 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__17067__i = 0, G__17067__a = new Array(arguments.length -  0);
while (G__17067__i < G__17067__a.length) {G__17067__a[G__17067__i] = arguments[G__17067__i + 0]; ++G__17067__i;}
  _ = new cljs.core.IndexedSeq(G__17067__a,0,null);
} 
return G__17066__delegate.call(this,_);};
G__17066.cljs$lang$maxFixedArity = 0;
G__17066.cljs$lang$applyTo = (function (arglist__17068){
var _ = cljs.core.seq(arglist__17068);
return G__17066__delegate(_);
});
G__17066.cljs$core$IFn$_invoke$arity$variadic = G__17066__delegate;
return G__17066;
})()
;})(seq__17050,chunk__17051,count__17052,i__17053,vec__17060,k,z_fn))
);


var G__17069 = seq__17050;
var G__17070 = chunk__17051;
var G__17071 = count__17052;
var G__17072 = (i__17053 + (1));
seq__17050 = G__17069;
chunk__17051 = G__17070;
count__17052 = G__17071;
i__17053 = G__17072;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__17050);
if(temp__5720__auto__){
var seq__17050__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17050__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__17050__$1);
var G__17073 = cljs.core.chunk_rest(seq__17050__$1);
var G__17074 = c__4550__auto__;
var G__17075 = cljs.core.count(c__4550__auto__);
var G__17076 = (0);
seq__17050 = G__17073;
chunk__17051 = G__17074;
count__17052 = G__17075;
i__17053 = G__17076;
continue;
} else {
var vec__17063 = cljs.core.first(seq__17050__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17063,(0),null);
var z_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17063,(1),null);
keybind.core.bind_BANG_(k,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(navtree_token),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),((function (seq__17050,chunk__17051,count__17052,i__17053,vec__17063,k,z_fn,seq__17050__$1,temp__5720__auto__){
return (function() { 
var G__17077__delegate = function (_){
return navtree.core.nav_to_BANG_(sp_ratom,z_nav_args,on_selection_path,z_fn);
};
var G__17077 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__17078__i = 0, G__17078__a = new Array(arguments.length -  0);
while (G__17078__i < G__17078__a.length) {G__17078__a[G__17078__i] = arguments[G__17078__i + 0]; ++G__17078__i;}
  _ = new cljs.core.IndexedSeq(G__17078__a,0,null);
} 
return G__17077__delegate.call(this,_);};
G__17077.cljs$lang$maxFixedArity = 0;
G__17077.cljs$lang$applyTo = (function (arglist__17079){
var _ = cljs.core.seq(arglist__17079);
return G__17077__delegate(_);
});
G__17077.cljs$core$IFn$_invoke$arity$variadic = G__17077__delegate;
return G__17077;
})()
;})(seq__17050,chunk__17051,count__17052,i__17053,vec__17063,k,z_fn,seq__17050__$1,temp__5720__auto__))
);


var G__17080 = cljs.core.next(seq__17050__$1);
var G__17081 = null;
var G__17082 = (0);
var G__17083 = (0);
seq__17050 = G__17080;
chunk__17051 = G__17081;
count__17052 = G__17082;
i__17053 = G__17083;
continue;
}
} else {
return null;
}
}
break;
}
});
navtree.core.undo_key_bindings_BANG_ = (function navtree$core$undo_key_bindings_BANG_(navtree_token,kk){
var seq__17084 = cljs.core.seq(kk);
var chunk__17085 = null;
var count__17086 = (0);
var i__17087 = (0);
while(true){
if((i__17087 < count__17086)){
var k = chunk__17085.cljs$core$IIndexed$_nth$arity$2(null,i__17087);
keybind.core.unbind_BANG_(k,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(navtree_token),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));


var G__17088 = seq__17084;
var G__17089 = chunk__17085;
var G__17090 = count__17086;
var G__17091 = (i__17087 + (1));
seq__17084 = G__17088;
chunk__17085 = G__17089;
count__17086 = G__17090;
i__17087 = G__17091;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__17084);
if(temp__5720__auto__){
var seq__17084__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17084__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__17084__$1);
var G__17092 = cljs.core.chunk_rest(seq__17084__$1);
var G__17093 = c__4550__auto__;
var G__17094 = cljs.core.count(c__4550__auto__);
var G__17095 = (0);
seq__17084 = G__17092;
chunk__17085 = G__17093;
count__17086 = G__17094;
i__17087 = G__17095;
continue;
} else {
var k = cljs.core.first(seq__17084__$1);
keybind.core.unbind_BANG_(k,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(navtree_token),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));


var G__17096 = cljs.core.next(seq__17084__$1);
var G__17097 = null;
var G__17098 = (0);
var G__17099 = (0);
seq__17084 = G__17096;
chunk__17085 = G__17097;
count__17086 = G__17098;
i__17087 = G__17099;
continue;
}
} else {
return null;
}
}
break;
}
});
navtree.core.shortcuts_panel = (function navtree$core$shortcuts_panel(key_fn_pairs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$shortcuts_DASH_panel,(function (){var iter__4523__auto__ = (function navtree$core$shortcuts_panel_$_iter__17100(s__17101){
return (new cljs.core.LazySeq(null,(function (){
var s__17101__$1 = s__17101;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__17101__$1);
if(temp__5720__auto__){
var s__17101__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17101__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__17101__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__17103 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__17102 = (0);
while(true){
if((i__17102 < size__4522__auto__)){
var vec__17104 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__17102);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17104,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17104,(1),null);
cljs.core.chunk_append(b__17103,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$key_DASH_fn_DASH_pair,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$key,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$fn,f], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)));

var G__17110 = (i__17102 + (1));
i__17102 = G__17110;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17103),navtree$core$shortcuts_panel_$_iter__17100(cljs.core.chunk_rest(s__17101__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17103),null);
}
} else {
var vec__17107 = cljs.core.first(s__17101__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17107,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17107,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$key_DASH_fn_DASH_pair,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$key,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$fn,f], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)),navtree$core$shortcuts_panel_$_iter__17100(cljs.core.rest(s__17101__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(key_fn_pairs);
})()], null);
});
navtree.core.loader = (function navtree$core$loader(hiccup,tree_data_QMARK_,request_tree_data,data_list){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,(function (hiccup__$1,_){
return hiccup__$1;
}),cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (_){
return setTimeout((function (){
var seq__17111 = cljs.core.seq(data_list);
var chunk__17112 = null;
var count__17113 = (0);
var i__17114 = (0);
while(true){
if((i__17114 < count__17113)){
var map__17119 = chunk__17112.cljs$core$IIndexed$_nth$arity$2(null,i__17114);
var map__17119__$1 = (((((!((map__17119 == null))))?(((((map__17119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17119):map__17119);
var d_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17119__$1,cljs.core.cst$kw$d_DASH_val);
var d_ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17119__$1,cljs.core.cst$kw$d_DASH_ratom);
var cont = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17119__$1,cljs.core.cst$kw$cont);
(request_tree_data.cljs$core$IFn$_invoke$arity$2 ? request_tree_data.cljs$core$IFn$_invoke$arity$2(d_val,cont) : request_tree_data.call(null,d_val,cont));



var G__17123 = seq__17111;
var G__17124 = chunk__17112;
var G__17125 = count__17113;
var G__17126 = (i__17114 + (1));
seq__17111 = G__17123;
chunk__17112 = G__17124;
count__17113 = G__17125;
i__17114 = G__17126;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__17111);
if(temp__5720__auto__){
var seq__17111__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17111__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__17111__$1);
var G__17127 = cljs.core.chunk_rest(seq__17111__$1);
var G__17128 = c__4550__auto__;
var G__17129 = cljs.core.count(c__4550__auto__);
var G__17130 = (0);
seq__17111 = G__17127;
chunk__17112 = G__17128;
count__17113 = G__17129;
i__17114 = G__17130;
continue;
} else {
var map__17121 = cljs.core.first(seq__17111__$1);
var map__17121__$1 = (((((!((map__17121 == null))))?(((((map__17121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17121):map__17121);
var d_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17121__$1,cljs.core.cst$kw$d_DASH_val);
var d_ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17121__$1,cljs.core.cst$kw$d_DASH_ratom);
var cont = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17121__$1,cljs.core.cst$kw$cont);
(request_tree_data.cljs$core$IFn$_invoke$arity$2 ? request_tree_data.cljs$core$IFn$_invoke$arity$2(d_val,cont) : request_tree_data.call(null,d_val,cont));



var G__17131 = cljs.core.next(seq__17111__$1);
var G__17132 = null;
var G__17133 = (0);
var G__17134 = (0);
seq__17111 = G__17131;
chunk__17112 = G__17132;
count__17113 = G__17133;
i__17114 = G__17134;
continue;
}
} else {
return null;
}
}
break;
}
}));
})], null));
});
navtree.core.realized_tree_data_QMARK_ = (function navtree$core$realized_tree_data_QMARK_(p1__17135_SHARP_){
return (((p1__17135_SHARP_ == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$navtree$core_SLASH_not_DASH_ready,cljs.core.deref(p1__17135_SHARP_))));
});
navtree.core.navtree_node_STAR_ = (function navtree$core$navtree_node_STAR_(p__17137,id_path,tree){
var map__17138 = p__17137;
var map__17138__$1 = (((((!((map__17138 == null))))?(((((map__17138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17138):map__17138);
var params = map__17138__$1;
var whitelist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17138__$1,cljs.core.cst$kw$whitelist);
var auto_nav_fn_ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17138__$1,cljs.core.cst$kw$auto_DASH_nav_DASH_fn_DASH_ratom);
var content_id_ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17138__$1,cljs.core.cst$kw$content_DASH_id_DASH_ratom);
var content_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17138__$1,cljs.core.cst$kw$content_DASH_fn);
var loading_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17138__$1,cljs.core.cst$kw$loading_DASH_fn);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17138__$1,cljs.core.cst$kw$label_DASH_fn);
var tree_data_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17138__$1,cljs.core.cst$kw$tree_DASH_data_QMARK_);
var on_selection_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17138__$1,cljs.core.cst$kw$on_DASH_selection_DASH_path);
var content_ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17138__$1,cljs.core.cst$kw$content_DASH_ratom);
var request_tree_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17138__$1,cljs.core.cst$kw$request_DASH_tree_DASH_data);
var children_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17138__$1,cljs.core.cst$kw$children_DASH_fn);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17138__$1,cljs.core.cst$kw$id_DASH_fn);
var selection_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17138__$1,cljs.core.cst$kw$selection_DASH_path);
var children_req_ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17138__$1,cljs.core.cst$kw$children_DASH_req_DASH_ratom);
var with_let17140 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let17140);
var temp__5724__auto___17147 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___17147 == null)){
} else {
var c__7808__auto___17148 = temp__5724__auto___17147;
if((with_let17140.generation === c__7808__auto___17148.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let17140.generation = c__7808__auto___17148.ratomGeneration;
}


var init17141 = (with_let17140.length === (0));
var id = ((init17141)?(with_let17140[(0)] = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(tree) : id_fn.call(null,tree))):(with_let17140[(0)]));
var id_path__$1 = ((init17141)?(with_let17140[(1)] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(id_path,id)):(with_let17140[(1)]));
var cc = ((init17141)?(with_let17140[(2)] = (children_fn.cljs$core$IFn$_invoke$arity$1 ? children_fn.cljs$core$IFn$_invoke$arity$1(tree) : children_fn.call(null,tree))):(with_let17140[(2)]));
var cc_r = ((init17141)?(with_let17140[(3)] = (cljs.core.truth_(cc)?(cljs.core.truth_((tree_data_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tree_data_QMARK_.cljs$core$IFn$_invoke$arity$1(cc) : tree_data_QMARK_.call(null,cc)))?reagent.ratom.make_reaction(((function (init17141,id,id_path__$1,cc,with_let17140,map__17138,map__17138__$1,params,whitelist,auto_nav_fn_ratom,content_id_ratom,content_fn,loading_fn,label_fn,tree_data_QMARK_,on_selection_path,content_ratom,request_tree_data,children_fn,id_fn,selection_path,children_req_ratom){
return (function (){
return cc;
});})(init17141,id,id_path__$1,cc,with_let17140,map__17138,map__17138__$1,params,whitelist,auto_nav_fn_ratom,content_id_ratom,content_fn,loading_fn,label_fn,tree_data_QMARK_,on_selection_path,content_ratom,request_tree_data,children_fn,id_fn,selection_path,children_req_ratom))
):(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(children_req_ratom,cljs.core.assoc,cc,cljs.core.cst$kw$navtree$core_SLASH_not_DASH_ready);

return reagent.core.cursor(children_req_ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc], null));
})()
):null)):(with_let17140[(3)]));
var d = ((init17141)?(with_let17140[(4)] = (cljs.core.truth_(content_fn)?(content_fn.cljs$core$IFn$_invoke$arity$1 ? content_fn.cljs$core$IFn$_invoke$arity$1(id) : content_fn.call(null,id)):null)):(with_let17140[(4)]));
var res__7809__auto__ = (function (){var sel_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.last(selection_path));
var exp_QMARK_ = (cljs.core.truth_(whitelist)?cljs.core.contains_QMARK_(whitelist,id):true
);
var _ = ((((sel_QMARK_) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(content_id_ratom)))))?(function (){
cljs.core.reset_BANG_(content_id_ratom,id);

return cljs.core.reset_BANG_(content_ratom,(cljs.core.truth_((tree_data_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tree_data_QMARK_.cljs$core$IFn$_invoke$arity$1(d) : tree_data_QMARK_.call(null,d)))?d:cljs.core.cst$kw$navtree$core_SLASH_not_DASH_ready));
})()
:null);
var cc_done_QMARK_ = navtree.core.realized_tree_data_QMARK_(cc_r);
var d_done_QMARK_ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(content_id_ratom))) || (navtree.core.realized_tree_data_QMARK_(content_ratom)));
var load_cfgs = (function (){var G__17142 = cljs.core.List.EMPTY;
var G__17142__$1 = ((((exp_QMARK_) && ((!(cc_done_QMARK_)))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__17142,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d_DASH_val,cc,cljs.core.cst$kw$cont,((function (G__17142,sel_QMARK_,exp_QMARK_,_,cc_done_QMARK_,d_done_QMARK_,init17141,id,id_path__$1,cc,cc_r,d,with_let17140,map__17138,map__17138__$1,params,whitelist,auto_nav_fn_ratom,content_id_ratom,content_fn,loading_fn,label_fn,tree_data_QMARK_,on_selection_path,content_ratom,request_tree_data,children_fn,id_fn,selection_path,children_req_ratom){
return (function (p1__17136_SHARP_){
cljs.core.reset_BANG_(cc_r,p1__17136_SHARP_);

if(cljs.core.not(cljs.core.seq(p1__17136_SHARP_))){
return cljs.core.reset_BANG_(auto_nav_fn_ratom,null);
} else {
var temp__5720__auto__ = cljs.core.deref(auto_nav_fn_ratom);
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
}
});})(G__17142,sel_QMARK_,exp_QMARK_,_,cc_done_QMARK_,d_done_QMARK_,init17141,id,id_path__$1,cc,cc_r,d,with_let17140,map__17138,map__17138__$1,params,whitelist,auto_nav_fn_ratom,content_id_ratom,content_fn,loading_fn,label_fn,tree_data_QMARK_,on_selection_path,content_ratom,request_tree_data,children_fn,id_fn,selection_path,children_req_ratom))
], null)):G__17142);
if(((sel_QMARK_) && ((!(d_done_QMARK_))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__17142__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d_DASH_val,d,cljs.core.cst$kw$cont,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,content_ratom)], null));
} else {
return G__17142__$1;
}
})();
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[((sel_QMARK_)?"selection ":null),((exp_QMARK_)?"expanded":"collapsed")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$header,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_selection_path,cljs.core.reverse(id_path__$1))], null),(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(tree) : label_fn.call(null,tree))], null),((cljs.core.seq(load_cfgs))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [navtree.core.loader,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loading_fn,id], null),tree_data_QMARK_,request_tree_data,load_cfgs], null):null),(cljs.core.truth_((function (){var and__4120__auto__ = cc_r;
if(cljs.core.truth_(and__4120__auto__)){
return ((exp_QMARK_) && (cc_done_QMARK_));
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$children,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (sel_QMARK_,exp_QMARK_,_,cc_done_QMARK_,d_done_QMARK_,load_cfgs,init17141,id,id_path__$1,cc,cc_r,d,with_let17140,map__17138,map__17138__$1,params,whitelist,auto_nav_fn_ratom,content_id_ratom,content_fn,loading_fn,label_fn,tree_data_QMARK_,on_selection_path,content_ratom,request_tree_data,children_fn,id_fn,selection_path,children_req_ratom){
return (function navtree$core$navtree_node_STAR__$_iter__17143(s__17144){
return (new cljs.core.LazySeq(null,((function (sel_QMARK_,exp_QMARK_,_,cc_done_QMARK_,d_done_QMARK_,load_cfgs,init17141,id,id_path__$1,cc,cc_r,d,with_let17140,map__17138,map__17138__$1,params,whitelist,auto_nav_fn_ratom,content_id_ratom,content_fn,loading_fn,label_fn,tree_data_QMARK_,on_selection_path,content_ratom,request_tree_data,children_fn,id_fn,selection_path,children_req_ratom){
return (function (){
var s__17144__$1 = s__17144;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__17144__$1);
if(temp__5720__auto__){
var s__17144__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17144__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__17144__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__17146 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__17145 = (0);
while(true){
if((i__17145 < size__4522__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__17145);
cljs.core.chunk_append(b__17146,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [navtree.core.navtree_node_STAR_,params,id_path__$1,c], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(c) : id_fn.call(null,c)))], null)));

var G__17149 = (i__17145 + (1));
i__17145 = G__17149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17146),navtree$core$navtree_node_STAR__$_iter__17143(cljs.core.chunk_rest(s__17144__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17146),null);
}
} else {
var c = cljs.core.first(s__17144__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [navtree.core.navtree_node_STAR_,params,id_path__$1,c], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(c) : id_fn.call(null,c)))], null)),navtree$core$navtree_node_STAR__$_iter__17143(cljs.core.rest(s__17144__$2)));
}
} else {
return null;
}
break;
}
});})(sel_QMARK_,exp_QMARK_,_,cc_done_QMARK_,d_done_QMARK_,load_cfgs,init17141,id,id_path__$1,cc,cc_r,d,with_let17140,map__17138,map__17138__$1,params,whitelist,auto_nav_fn_ratom,content_id_ratom,content_fn,loading_fn,label_fn,tree_data_QMARK_,on_selection_path,content_ratom,request_tree_data,children_fn,id_fn,selection_path,children_req_ratom))
,null,null));
});})(sel_QMARK_,exp_QMARK_,_,cc_done_QMARK_,d_done_QMARK_,load_cfgs,init17141,id,id_path__$1,cc,cc_r,d,with_let17140,map__17138,map__17138__$1,params,whitelist,auto_nav_fn_ratom,content_id_ratom,content_fn,loading_fn,label_fn,tree_data_QMARK_,on_selection_path,content_ratom,request_tree_data,children_fn,id_fn,selection_path,children_req_ratom))
;
return iter__4523__auto__(cljs.core.deref(cc_r));
})())], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(id)], null));
})();

return res__7809__auto__;
});
navtree.core.derive_init_state = (function navtree$core$derive_init_state(p__17154){
var map__17155 = p__17154;
var map__17155__$1 = (((((!((map__17155 == null))))?(((((map__17155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17155):map__17155);
var navtree_params = map__17155__$1;
var header_ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,cljs.core.cst$kw$header_DASH_ratom);
var keynav_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,cljs.core.cst$kw$keynav_QMARK_);
var on_selection_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,cljs.core.cst$kw$on_DASH_selection_DASH_node);
var selection_path_init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,cljs.core.cst$kw$selection_DASH_path_DASH_init);
var tree_data_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,cljs.core.cst$kw$tree_DASH_data_QMARK_);
var on_selection_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,cljs.core.cst$kw$on_DASH_selection_DASH_path);
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,cljs.core.cst$kw$tree);
var content_ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,cljs.core.cst$kw$content_DASH_ratom);
var header_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,cljs.core.cst$kw$header_DASH_fn);
var whitelist_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,cljs.core.cst$kw$whitelist_QMARK_);
var auto_nav = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,cljs.core.cst$kw$auto_DASH_nav);
var selection_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,cljs.core.cst$kw$selection_DASH_node);
var content_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,cljs.core.cst$kw$content_DASH_placeholder);
var children_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,cljs.core.cst$kw$children_DASH_fn);
var content_loading_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,cljs.core.cst$kw$content_DASH_loading_DASH_fn);
var selection_path_ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,cljs.core.cst$kw$selection_DASH_path_DASH_ratom);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,cljs.core.cst$kw$id_DASH_fn);
var selection_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,cljs.core.cst$kw$selection_DASH_path);
var ui_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,cljs.core.cst$kw$ui_DASH_mode);
var row_mode_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$row,ui_mode));
var children_req_ratom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var children_fn_STAR_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (row_mode_QMARK_,children_req_ratom,map__17155,map__17155__$1,navtree_params,header_ratom,keynav_QMARK_,on_selection_node,selection_path_init,tree_data_QMARK_,on_selection_path,tree,content_ratom,header_fn,whitelist_QMARK_,auto_nav,selection_node,content_placeholder,children_fn,content_loading_fn,selection_path_ratom,id_fn,selection_path,ui_mode){
return (function (p1__17150_SHARP_){
if(cljs.core.truth_((tree_data_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tree_data_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__17150_SHARP_) : tree_data_QMARK_.call(null,p1__17150_SHARP_)))){
return p1__17150_SHARP_;
} else {
if(cljs.core.contains_QMARK_(cljs.core.deref(children_req_ratom),p1__17150_SHARP_)){
var cc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(children_req_ratom),p1__17150_SHARP_);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$navtree$core_SLASH_not_DASH_ready,cc)){
return null;
} else {
return cc;
}
} else {
return null;

}
}
});})(row_mode_QMARK_,children_req_ratom,map__17155,map__17155__$1,navtree_params,header_ratom,keynav_QMARK_,on_selection_node,selection_path_init,tree_data_QMARK_,on_selection_path,tree,content_ratom,header_fn,whitelist_QMARK_,auto_nav,selection_node,content_placeholder,children_fn,content_loading_fn,selection_path_ratom,id_fn,selection_path,ui_mode))
,children_fn);
var z_nav_args = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree,id_fn,children_fn_STAR_], null);
var node_to_path = ((function (row_mode_QMARK_,children_req_ratom,children_fn_STAR_,z_nav_args,map__17155,map__17155__$1,navtree_params,header_ratom,keynav_QMARK_,on_selection_node,selection_path_init,tree_data_QMARK_,on_selection_path,tree,content_ratom,header_fn,whitelist_QMARK_,auto_nav,selection_node,content_placeholder,children_fn,content_loading_fn,selection_path_ratom,id_fn,selection_path,ui_mode){
return (function (p1__17151_SHARP_){
var fexpr__17157 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,navtree.zipper.find_id_path_to_id,z_nav_args);
return (fexpr__17157.cljs$core$IFn$_invoke$arity$1 ? fexpr__17157.cljs$core$IFn$_invoke$arity$1(p1__17151_SHARP_) : fexpr__17157.call(null,p1__17151_SHARP_));
});})(row_mode_QMARK_,children_req_ratom,children_fn_STAR_,z_nav_args,map__17155,map__17155__$1,navtree_params,header_ratom,keynav_QMARK_,on_selection_node,selection_path_init,tree_data_QMARK_,on_selection_path,tree,content_ratom,header_fn,whitelist_QMARK_,auto_nav,selection_node,content_placeholder,children_fn,content_loading_fn,selection_path_ratom,id_fn,selection_path,ui_mode))
;
var selection_path_ratom_STAR_ = (function (){var or__4131__auto__ = selection_path_ratom;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto____$1 = selection_path_init;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = selection_path;
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
var pth = (function (){var G__17158 = selection_node;
if((G__17158 == null)){
return null;
} else {
return node_to_path(G__17158);
}
})();
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"navtree.core","/tmp/form-init18367787169279644540.clj",250,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (pth,or__4131__auto____$2,or__4131__auto____$1,or__4131__auto__,row_mode_QMARK_,children_req_ratom,children_fn_STAR_,z_nav_args,node_to_path,map__17155,map__17155__$1,navtree_params,header_ratom,keynav_QMARK_,on_selection_node,selection_path_init,tree_data_QMARK_,on_selection_path,tree,content_ratom,header_fn,whitelist_QMARK_,auto_nav,selection_node,content_placeholder,children_fn,content_loading_fn,selection_path_ratom,id_fn,selection_path,ui_mode){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["initial selection-path: ",pth], null);
});})(pth,or__4131__auto____$2,or__4131__auto____$1,or__4131__auto__,row_mode_QMARK_,children_req_ratom,children_fn_STAR_,z_nav_args,node_to_path,map__17155,map__17155__$1,navtree_params,header_ratom,keynav_QMARK_,on_selection_node,selection_path_init,tree_data_QMARK_,on_selection_path,tree,content_ratom,header_fn,whitelist_QMARK_,auto_nav,selection_node,content_placeholder,children_fn,content_loading_fn,selection_path_ratom,id_fn,selection_path,ui_mode))
,null)),null,-88010432);
}
}
})());
}
})();
var header_ratom_STAR_ = (function (){var or__4131__auto__ = header_ratom;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})();
var content_ratom_STAR_ = (function (){var or__4131__auto__ = content_ratom;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto____$1 = content_placeholder;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return null;
}
})());
}
})();
var content_id_ratom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _ = (cljs.core.truth_(header_fn)?(function (){
cljs.core.reset_BANG_(header_ratom_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [header_fn,cljs.core.last(cljs.core.deref(selection_path_ratom_STAR_))], null));

return cljs.core.add_watch(selection_path_ratom_STAR_,cljs.core.cst$kw$header,((function (row_mode_QMARK_,children_req_ratom,children_fn_STAR_,z_nav_args,node_to_path,selection_path_ratom_STAR_,header_ratom_STAR_,content_ratom_STAR_,content_id_ratom,map__17155,map__17155__$1,navtree_params,header_ratom,keynav_QMARK_,on_selection_node,selection_path_init,tree_data_QMARK_,on_selection_path,tree,content_ratom,header_fn,whitelist_QMARK_,auto_nav,selection_node,content_placeholder,children_fn,content_loading_fn,selection_path_ratom,id_fn,selection_path,ui_mode){
return (function (_,___$1,___$2,p){
return cljs.core.reset_BANG_(header_ratom_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [header_fn,cljs.core.last(p)], null));
});})(row_mode_QMARK_,children_req_ratom,children_fn_STAR_,z_nav_args,node_to_path,selection_path_ratom_STAR_,header_ratom_STAR_,content_ratom_STAR_,content_id_ratom,map__17155,map__17155__$1,navtree_params,header_ratom,keynav_QMARK_,on_selection_node,selection_path_init,tree_data_QMARK_,on_selection_path,tree,content_ratom,header_fn,whitelist_QMARK_,auto_nav,selection_node,content_placeholder,children_fn,content_loading_fn,selection_path_ratom,id_fn,selection_path,ui_mode))
);
})()
:null);
var whitelist_ratom = (cljs.core.truth_(whitelist_QMARK_)?reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY):null);
var set_whitelist_BANG_ = ((function (row_mode_QMARK_,children_req_ratom,children_fn_STAR_,z_nav_args,node_to_path,selection_path_ratom_STAR_,header_ratom_STAR_,content_ratom_STAR_,content_id_ratom,_,whitelist_ratom,map__17155,map__17155__$1,navtree_params,header_ratom,keynav_QMARK_,on_selection_node,selection_path_init,tree_data_QMARK_,on_selection_path,tree,content_ratom,header_fn,whitelist_QMARK_,auto_nav,selection_node,content_placeholder,children_fn,content_loading_fn,selection_path_ratom,id_fn,selection_path,ui_mode){
return (function (p){
return cljs.core.reset_BANG_(whitelist_ratom,cljs.core.set(p));
});})(row_mode_QMARK_,children_req_ratom,children_fn_STAR_,z_nav_args,node_to_path,selection_path_ratom_STAR_,header_ratom_STAR_,content_ratom_STAR_,content_id_ratom,_,whitelist_ratom,map__17155,map__17155__$1,navtree_params,header_ratom,keynav_QMARK_,on_selection_node,selection_path_init,tree_data_QMARK_,on_selection_path,tree,content_ratom,header_fn,whitelist_QMARK_,auto_nav,selection_node,content_placeholder,children_fn,content_loading_fn,selection_path_ratom,id_fn,selection_path,ui_mode))
;
var ___$1 = set_whitelist_BANG_(cljs.core.deref(selection_path_ratom_STAR_));
var on_selection_path_STAR_ = (function (){var or__4131__auto__ = on_selection_path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var and__4120__auto__ = on_selection_node;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(on_selection_node,cljs.core.last);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return ((function (or__4131__auto____$1,or__4131__auto__,row_mode_QMARK_,children_req_ratom,children_fn_STAR_,z_nav_args,node_to_path,selection_path_ratom_STAR_,header_ratom_STAR_,content_ratom_STAR_,content_id_ratom,_,whitelist_ratom,set_whitelist_BANG_,___$1,map__17155,map__17155__$1,navtree_params,header_ratom,keynav_QMARK_,on_selection_node,selection_path_init,tree_data_QMARK_,on_selection_path,tree,content_ratom,header_fn,whitelist_QMARK_,auto_nav,selection_node,content_placeholder,children_fn,content_loading_fn,selection_path_ratom,id_fn,selection_path,ui_mode){
return (function (sp){
cljs.core.reset_BANG_(content_ratom_STAR_,(cljs.core.truth_(content_loading_fn)?(function (){var G__17159 = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(tree) : id_fn.call(null,tree));
return (content_loading_fn.cljs$core$IFn$_invoke$arity$1 ? content_loading_fn.cljs$core$IFn$_invoke$arity$1(G__17159) : content_loading_fn.call(null,G__17159));
})():null));

cljs.core.reset_BANG_(selection_path_ratom_STAR_,sp);

if(cljs.core.truth_(whitelist_QMARK_)){
return set_whitelist_BANG_(sp);
} else {
return null;
}
});
;})(or__4131__auto____$1,or__4131__auto__,row_mode_QMARK_,children_req_ratom,children_fn_STAR_,z_nav_args,node_to_path,selection_path_ratom_STAR_,header_ratom_STAR_,content_ratom_STAR_,content_id_ratom,_,whitelist_ratom,set_whitelist_BANG_,___$1,map__17155,map__17155__$1,navtree_params,header_ratom,keynav_QMARK_,on_selection_node,selection_path_init,tree_data_QMARK_,on_selection_path,tree,content_ratom,header_fn,whitelist_QMARK_,auto_nav,selection_node,content_placeholder,children_fn,content_loading_fn,selection_path_ratom,id_fn,selection_path,ui_mode))
}
}
})();
var k_configs_STAR_ = cljs.core.assoc_in(navtree.core.k_configs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$exp_DASH_coll,cljs.core.cst$kw$f], null),((function (row_mode_QMARK_,children_req_ratom,children_fn_STAR_,z_nav_args,node_to_path,selection_path_ratom_STAR_,header_ratom_STAR_,content_ratom_STAR_,content_id_ratom,_,whitelist_ratom,set_whitelist_BANG_,___$1,on_selection_path_STAR_,map__17155,map__17155__$1,navtree_params,header_ratom,keynav_QMARK_,on_selection_node,selection_path_init,tree_data_QMARK_,on_selection_path,tree,content_ratom,header_fn,whitelist_QMARK_,auto_nav,selection_node,content_placeholder,children_fn,content_loading_fn,selection_path_ratom,id_fn,selection_path,ui_mode){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(row_mode_QMARK_,cljs.core.not);
});})(row_mode_QMARK_,children_req_ratom,children_fn_STAR_,z_nav_args,node_to_path,selection_path_ratom_STAR_,header_ratom_STAR_,content_ratom_STAR_,content_id_ratom,_,whitelist_ratom,set_whitelist_BANG_,___$1,on_selection_path_STAR_,map__17155,map__17155__$1,navtree_params,header_ratom,keynav_QMARK_,on_selection_node,selection_path_init,tree_data_QMARK_,on_selection_path,tree,content_ratom,header_fn,whitelist_QMARK_,auto_nav,selection_node,content_placeholder,children_fn,content_loading_fn,selection_path_ratom,id_fn,selection_path,ui_mode))
);
var k_fn_pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (row_mode_QMARK_,children_req_ratom,children_fn_STAR_,z_nav_args,node_to_path,selection_path_ratom_STAR_,header_ratom_STAR_,content_ratom_STAR_,content_id_ratom,_,whitelist_ratom,set_whitelist_BANG_,___$1,on_selection_path_STAR_,k_configs_STAR_,map__17155,map__17155__$1,navtree_params,header_ratom,keynav_QMARK_,on_selection_node,selection_path_init,tree_data_QMARK_,on_selection_path,tree,content_ratom,header_fn,whitelist_QMARK_,auto_nav,selection_node,content_placeholder,children_fn,content_loading_fn,selection_path_ratom,id_fn,selection_path,ui_mode){
return (function (p1__17152_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(p1__17152_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k,cljs.core.cst$kw$f], null));
});})(row_mode_QMARK_,children_req_ratom,children_fn_STAR_,z_nav_args,node_to_path,selection_path_ratom_STAR_,header_ratom_STAR_,content_ratom_STAR_,content_id_ratom,_,whitelist_ratom,set_whitelist_BANG_,___$1,on_selection_path_STAR_,k_configs_STAR_,map__17155,map__17155__$1,navtree_params,header_ratom,keynav_QMARK_,on_selection_node,selection_path_init,tree_data_QMARK_,on_selection_path,tree,content_ratom,header_fn,whitelist_QMARK_,auto_nav,selection_node,content_placeholder,children_fn,content_loading_fn,selection_path_ratom,id_fn,selection_path,ui_mode))
,k_configs_STAR_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$exp_DASH_coll], null));
var k_label_pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (row_mode_QMARK_,children_req_ratom,children_fn_STAR_,z_nav_args,node_to_path,selection_path_ratom_STAR_,header_ratom_STAR_,content_ratom_STAR_,content_id_ratom,_,whitelist_ratom,set_whitelist_BANG_,___$1,on_selection_path_STAR_,k_configs_STAR_,k_fn_pairs,map__17155,map__17155__$1,navtree_params,header_ratom,keynav_QMARK_,on_selection_node,selection_path_init,tree_data_QMARK_,on_selection_path,tree,content_ratom,header_fn,whitelist_QMARK_,auto_nav,selection_node,content_placeholder,children_fn,content_loading_fn,selection_path_ratom,id_fn,selection_path,ui_mode){
return (function (p1__17153_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(p1__17153_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k,cljs.core.cst$kw$label], null));
});})(row_mode_QMARK_,children_req_ratom,children_fn_STAR_,z_nav_args,node_to_path,selection_path_ratom_STAR_,header_ratom_STAR_,content_ratom_STAR_,content_id_ratom,_,whitelist_ratom,set_whitelist_BANG_,___$1,on_selection_path_STAR_,k_configs_STAR_,k_fn_pairs,map__17155,map__17155__$1,navtree_params,header_ratom,keynav_QMARK_,on_selection_node,selection_path_init,tree_data_QMARK_,on_selection_path,tree,content_ratom,header_fn,whitelist_QMARK_,auto_nav,selection_node,content_placeholder,children_fn,content_loading_fn,selection_path_ratom,id_fn,selection_path,ui_mode))
,k_configs_STAR_),navtree.core.k_seq_nav);
var navtree_token = cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var ___$2 = (cljs.core.truth_(keynav_QMARK_)?(function (){
navtree.core.init_nav_key_bindings_BANG_(selection_path_ratom_STAR_,z_nav_args,on_selection_path_STAR_,navtree_token,navtree.core.k_navfn_pairs);

return navtree.core.init_ctrl_key_bindings_BANG_(navtree_token,k_fn_pairs);
})()
:null);
var auto_nav_fn_ratom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__4120__auto__ = auto_nav;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$disable,auto_nav);
} else {
return and__4120__auto__;
}
})())?((function (row_mode_QMARK_,children_req_ratom,children_fn_STAR_,z_nav_args,node_to_path,selection_path_ratom_STAR_,header_ratom_STAR_,content_ratom_STAR_,content_id_ratom,_,whitelist_ratom,set_whitelist_BANG_,___$1,on_selection_path_STAR_,k_configs_STAR_,k_fn_pairs,k_label_pairs,navtree_token,___$2,map__17155,map__17155__$1,navtree_params,header_ratom,keynav_QMARK_,on_selection_node,selection_path_init,tree_data_QMARK_,on_selection_path,tree,content_ratom,header_fn,whitelist_QMARK_,auto_nav,selection_node,content_placeholder,children_fn,content_loading_fn,selection_path_ratom,id_fn,selection_path,ui_mode){
return (function (){
var f = (function (){var G__17160 = auto_nav;
var G__17160__$1 = (((G__17160 instanceof cljs.core.Keyword))?G__17160.fqn:null);
switch (G__17160__$1) {
case "terminal":
return navtree.util.nav_to_terminal_BANG_;

break;
case "content":
return navtree.util.nav_to_content_BANG_;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17160__$1)].join('')));

}
})();
var G__17161 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(navtree_params,cljs.core.cst$kw$children_DASH_fn,children_fn_STAR_);
var G__17162 = cljs.core.deref(selection_path_ratom_STAR_);
var G__17163 = z_nav_args;
var G__17164 = on_selection_path_STAR_;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17161,G__17162,G__17163,G__17164) : f.call(null,G__17161,G__17162,G__17163,G__17164));
});})(row_mode_QMARK_,children_req_ratom,children_fn_STAR_,z_nav_args,node_to_path,selection_path_ratom_STAR_,header_ratom_STAR_,content_ratom_STAR_,content_id_ratom,_,whitelist_ratom,set_whitelist_BANG_,___$1,on_selection_path_STAR_,k_configs_STAR_,k_fn_pairs,k_label_pairs,navtree_token,___$2,map__17155,map__17155__$1,navtree_params,header_ratom,keynav_QMARK_,on_selection_node,selection_path_init,tree_data_QMARK_,on_selection_path,tree,content_ratom,header_fn,whitelist_QMARK_,auto_nav,selection_node,content_placeholder,children_fn,content_loading_fn,selection_path_ratom,id_fn,selection_path,ui_mode))
:null));
var ___$3 = (function (){var temp__5720__auto__ = cljs.core.deref(auto_nav_fn_ratom);
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
})();
var nav_to_BANG__STAR_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(navtree.core.nav_to_BANG_,selection_path_ratom_STAR_,z_nav_args,on_selection_path_STAR_);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$whitelist_DASH_ratom,cljs.core.cst$kw$on_DASH_selection_DASH_path,cljs.core.cst$kw$k_DASH_fn_DASH_pairs,cljs.core.cst$kw$content_DASH_ratom,cljs.core.cst$kw$nav_DASH_to_BANG_,cljs.core.cst$kw$navtree_DASH_token,cljs.core.cst$kw$selection_DASH_path_DASH_ratom,cljs.core.cst$kw$z_DASH_nav_DASH_args,cljs.core.cst$kw$children_DASH_req_DASH_ratom,cljs.core.cst$kw$header_DASH_ratom,cljs.core.cst$kw$row_DASH_mode_QMARK_,cljs.core.cst$kw$auto_DASH_nav_DASH_fn_DASH_ratom,cljs.core.cst$kw$content_DASH_id_DASH_ratom,cljs.core.cst$kw$k_DASH_label_DASH_pairs],[whitelist_ratom,on_selection_path_STAR_,k_fn_pairs,content_ratom_STAR_,nav_to_BANG__STAR_,navtree_token,selection_path_ratom_STAR_,z_nav_args,children_req_ratom,header_ratom_STAR_,row_mode_QMARK_,auto_nav_fn_ratom,content_id_ratom,k_label_pairs]);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$navtree$core_SLASH_navtree_DASH_init,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$p,cljs.core.cst$kw$navtree$core_SLASH_params)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$p,cljs.core.cst$kw$navtree$core_SLASH_params),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navtree$core_SLASH_params], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navtree$core_SLASH_params], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$p,cljs.core.cst$kw$navtree$core_SLASH_params),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
navtree.core.navtree_init = (function navtree$core$navtree_init(p__17166){
var map__17167 = p__17166;
var map__17167__$1 = (((((!((map__17167 == null))))?(((((map__17167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17167):map__17167);
var params = map__17167__$1;
var header_ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17167__$1,cljs.core.cst$kw$header_DASH_ratom);
var icon_collapse = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17167__$1,cljs.core.cst$kw$icon_DASH_collapse,hiccup_icons.octicons.fold);
var whitelist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17167__$1,cljs.core.cst$kw$whitelist);
var keynav_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17167__$1,cljs.core.cst$kw$keynav_QMARK_);
var shortcuts_panel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17167__$1,cljs.core.cst$kw$shortcuts_DASH_panel_QMARK_);
var content_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17167__$1,cljs.core.cst$kw$content_DASH_fn);
var icon_left = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17167__$1,cljs.core.cst$kw$icon_DASH_left,hiccup_icons.octicons.chevron_left);
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17167__$1,cljs.core.cst$kw$tree);
var content_ratom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17167__$1,cljs.core.cst$kw$content_DASH_ratom);
var header_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17167__$1,cljs.core.cst$kw$header_DASH_fn);
var whitelist_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17167__$1,cljs.core.cst$kw$whitelist_QMARK_);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17167__$1,cljs.core.cst$kw$content);
var selection_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17167__$1,cljs.core.cst$kw$selection_DASH_node);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17167__$1,cljs.core.cst$kw$id_DASH_fn);
var selection_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17167__$1,cljs.core.cst$kw$selection_DASH_path);
var icon_right = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17167__$1,cljs.core.cst$kw$icon_DASH_right,hiccup_icons.octicons.chevron_right);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17167__$1,cljs.core.cst$kw$class);
var icon_expand = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17167__$1,cljs.core.cst$kw$icon_DASH_expand,hiccup_icons.octicons.unfold);
var with_let17169 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let17169);
var temp__5724__auto___17172 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___17172 == null)){
} else {
var c__7808__auto___17173 = temp__5724__auto___17172;
if((with_let17169.generation === c__7808__auto___17173.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let17169.generation = c__7808__auto___17173.ratomGeneration;
}


var init17170 = (with_let17169.length === (0));
var state = ((init17170)?(with_let17169[(0)] = navtree.core.derive_init_state(params)):(with_let17169[(0)]));
var res__7809__auto__ = (function (){
if(cljs.core.truth_((function (){var and__4120__auto__ = selection_path;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selection_path,cljs.core.deref(cljs.core.cst$kw$selection_DASH_path_DASH_ratom.cljs$core$IFn$_invoke$arity$1(state)));
} else {
return and__4120__auto__;
}
})())){
cljs.core.reset_BANG_(cljs.core.cst$kw$selection_DASH_path_DASH_ratom.cljs$core$IFn$_invoke$arity$1(state),selection_path);
} else {
}

if(cljs.core.truth_(selection_node)){
var f_17174 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,navtree.zipper.find_id_path_to_id,cljs.core.cst$kw$z_DASH_nav_DASH_args.cljs$core$IFn$_invoke$arity$1(state));
var sp_17175 = (f_17174.cljs$core$IFn$_invoke$arity$1 ? f_17174.cljs$core$IFn$_invoke$arity$1(selection_node) : f_17174.call(null,selection_node));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.cst$kw$selection_DASH_path_DASH_ratom.cljs$core$IFn$_invoke$arity$1(state)),sp_17175)){
cljs.core.reset_BANG_(cljs.core.cst$kw$selection_DASH_path_DASH_ratom.cljs$core$IFn$_invoke$arity$1(state),sp_17175);
} else {
}
} else {
}

var sp = (function (){var or__4131__auto__ = selection_path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.deref(cljs.core.cst$kw$selection_DASH_path_DASH_ratom.cljs$core$IFn$_invoke$arity$1(state));
}
})();
var wl = (function (){var or__4131__auto__ = whitelist;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = whitelist_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
var or__4131__auto____$1 = (function (){var and__4120__auto____$1 = selection_path;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.set(sp);
} else {
return and__4120__auto____$1;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = (function (){var and__4120__auto____$1 = selection_node;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.set(sp);
} else {
return and__4120__auto____$1;
}
})();
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return cljs.core.deref(cljs.core.cst$kw$whitelist_DASH_ratom.cljs$core$IFn$_invoke$arity$1(state));
}
}
} else {
return and__4120__auto__;
}
}
})();
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zc_DASH_navtree,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",(cljs.core.truth_(cljs.core.deref(cljs.core.cst$kw$row_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(state)))?"row-mode":null)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controls,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$expand,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (sp,wl,init17170,state,with_let17169,map__17167,map__17167__$1,params,header_ratom,icon_collapse,whitelist,keynav_QMARK_,shortcuts_panel_QMARK_,content_fn,icon_left,tree,content_ratom,header_fn,whitelist_QMARK_,content,selection_node,id_fn,selection_path,icon_right,class$,icon_expand){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$row_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(state),cljs.core.not);
});})(sp,wl,init17170,state,with_let17169,map__17167,map__17167__$1,params,header_ratom,icon_collapse,whitelist,keynav_QMARK_,shortcuts_panel_QMARK_,content_fn,icon_left,tree,content_ratom,header_fn,whitelist_QMARK_,content,selection_node,id_fn,selection_path,icon_right,class$,icon_expand))
], null),(cljs.core.truth_(cljs.core.deref(cljs.core.cst$kw$row_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(state)))?icon_expand:icon_collapse)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$control_DASH_left,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nav_DASH_to_BANG_.cljs$core$IFn$_invoke$arity$1(state),clojure.zip.prev)], null),icon_left], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$control_DASH_right,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nav_DASH_to_BANG_.cljs$core$IFn$_invoke$arity$1(state),clojure.zip.next)], null),icon_right], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$tree,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [navtree.core.navtree_node_STAR_,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var G__17171 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$content_DASH_ratom,cljs.core.cst$kw$content_DASH_ratom.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$content_DASH_id_DASH_ratom,cljs.core.cst$kw$content_DASH_id_DASH_ratom.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$on_DASH_selection_DASH_path,cljs.core.cst$kw$on_DASH_selection_DASH_path.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$children_DASH_req_DASH_ratom,cljs.core.cst$kw$children_DASH_req_DASH_ratom.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$auto_DASH_nav_DASH_fn_DASH_ratom,cljs.core.cst$kw$auto_DASH_nav_DASH_fn_DASH_ratom.cljs$core$IFn$_invoke$arity$1(state)], null)], 0));
var G__17171__$1 = (cljs.core.truth_(whitelist_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17171,cljs.core.cst$kw$whitelist,wl):G__17171);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17171__$1,cljs.core.cst$kw$selection_DASH_path,sp);

})(),cljs.core.cst$kw$tree),cljs.core.List.EMPTY,tree], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(tree) : id_fn.call(null,tree)))], null))], null),(cljs.core.truth_((function (){var and__4120__auto__ = header_fn;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(header_ratom);
} else {
return and__4120__auto__;
}
})())?cljs.core.deref(cljs.core.cst$kw$header_DASH_ratom.cljs$core$IFn$_invoke$arity$1(state)):null),(cljs.core.truth_((function (){var and__4120__auto__ = content_fn;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(content_ratom);
} else {
return and__4120__auto__;
}
})())?cljs.core.deref(cljs.core.cst$kw$content_DASH_ratom.cljs$core$IFn$_invoke$arity$1(state)):null),(cljs.core.truth_(content)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$content,content], null):null),(cljs.core.truth_(shortcuts_panel_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [navtree.core.shortcuts_panel,cljs.core.cst$kw$k_DASH_label_DASH_pairs.cljs$core$IFn$_invoke$arity$1(state)], null):null)], null);
})()
;
var destroy__7807__auto___17176 = ((function (res__7809__auto__,init17170,state,with_let17169,map__17167,map__17167__$1,params,header_ratom,icon_collapse,whitelist,keynav_QMARK_,shortcuts_panel_QMARK_,content_fn,icon_left,tree,content_ratom,header_fn,whitelist_QMARK_,content,selection_node,id_fn,selection_path,icon_right,class$,icon_expand){
return (function (){
if(cljs.core.truth_(keynav_QMARK_)){
navtree.core.undo_key_bindings_BANG_(cljs.core.cst$kw$navtree_DASH_token.cljs$core$IFn$_invoke$arity$1(state),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$k_DASH_fn_DASH_pairs.cljs$core$IFn$_invoke$arity$1(state),navtree.core.k_navfn_pairs)));
} else {
}

return cljs.core.reset_BANG_(cljs.core.cst$kw$content_DASH_ratom.cljs$core$IFn$_invoke$arity$1(state),null);
});})(res__7809__auto__,init17170,state,with_let17169,map__17167,map__17167__$1,params,header_ratom,icon_collapse,whitelist,keynav_QMARK_,shortcuts_panel_QMARK_,content_fn,icon_left,tree,content_ratom,header_fn,whitelist_QMARK_,content,selection_node,id_fn,selection_path,icon_right,class$,icon_expand))
;
if(reagent.ratom.reactive_QMARK_()){
if((with_let17169.destroy == null)){
with_let17169.destroy = destroy__7807__auto___17176;
} else {
}
} else {
destroy__7807__auto___17176();
}

return res__7809__auto__;
});
var opts17179_17191 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts17179_17191){
return (function (ret__12429__auto__,p__17180){
var vec__17181 = p__17180;
var ___12430__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17181,(0),null);
var f__12431__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17181,(1),null);
var sym__12432__auto__ = (f__12431__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12431__auto__.cljs$core$IFn$_invoke$arity$0() : f__12431__auto__.call(null));
var G__17184 = ret__12429__auto__;
if(cljs.core.truth_(sym__12432__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__17184,sym__12432__auto__);
} else {
return G__17184;
}
});})(opts17179_17191))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts17179_17191){
return (function (p1__12428__12433__auto__){
var G__17186 = cljs.core.first(p1__12428__12433__auto__);
var fexpr__17185 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts17179_17191);
return (fexpr__17185.cljs$core$IFn$_invoke$arity$1 ? fexpr__17185.cljs$core$IFn$_invoke$arity$1(G__17186) : fexpr__17185.call(null,G__17186));
});})(opts17179_17191))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$navtree$core_SLASH_navtree_DASH_init], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts17179_17191){
return (function (){
var checked__12395__auto__ = (function (){var G__17188 = cljs.core.cst$sym$navtree$core_SLASH_navtree_DASH_init;
var G__17189 = new cljs.core.Var(function(){return navtree.core.navtree_init;},cljs.core.cst$sym$navtree$core_SLASH_navtree_DASH_init,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$navtree$core,cljs.core.cst$sym$navtree_DASH_init,"resources-app/public/js/compiled/out2/navtree/core.cljs",19,1,331,331,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$as,cljs.core.cst$sym$params,cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$tree,cljs.core.cst$sym$id_DASH_fn,cljs.core.cst$sym$class,cljs.core.cst$sym$selection_DASH_node,cljs.core.cst$sym$selection_DASH_path,cljs.core.cst$sym$keynav_QMARK_,cljs.core.cst$sym$shortcuts_DASH_panel_QMARK_,cljs.core.cst$sym$whitelist,cljs.core.cst$sym$whitelist_QMARK_,cljs.core.cst$sym$header_DASH_fn,cljs.core.cst$sym$header_DASH_ratom,cljs.core.cst$sym$content,cljs.core.cst$sym$content_DASH_fn,cljs.core.cst$sym$content_DASH_ratom,cljs.core.cst$sym$icon_DASH_left,cljs.core.cst$sym$icon_DASH_right,cljs.core.cst$sym$icon_DASH_expand,cljs.core.cst$sym$icon_DASH_collapse], null),cljs.core.cst$kw$or,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$icon_DASH_left,cljs.core.cst$sym$octicons_SLASH_chevron_DASH_left,cljs.core.cst$sym$icon_DASH_right,cljs.core.cst$sym$octicons_SLASH_chevron_DASH_right,cljs.core.cst$sym$icon_DASH_expand,cljs.core.cst$sym$octicons_SLASH_unfold,cljs.core.cst$sym$icon_DASH_collapse,cljs.core.cst$sym$octicons_SLASH_fold], null)], null)], null)),null,(cljs.core.truth_(navtree.core.navtree_init)?navtree.core.navtree_init.cljs$lang$test:null)]));
var G__17190 = opts17179_17191;
var fexpr__17187 = new cljs.core.Var(function(){return cljs.spec.test.alpha.instrument_1_STAR_;},cljs.core.cst$sym$cljs$spec$test$alpha_SLASH_instrument_DASH_1_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$test$alpha,cljs.core.cst$sym$instrument_DASH_1_STAR_,"resources-app/public/js/compiled/out2/cljs/spec/test/alpha.cljs",21,1,156,156,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s,cljs.core.cst$sym$v,cljs.core.cst$sym$opts], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.instrument_1_STAR_)?cljs.spec.test.alpha.instrument_1_STAR_.cljs$lang$test:null)]));
return (fexpr__17187.cljs$core$IFn$_invoke$arity$3 ? fexpr__17187.cljs$core$IFn$_invoke$arity$3(G__17188,G__17189,G__17190) : fexpr__17187.call(null,G__17188,G__17189,G__17190));
})();
if(cljs.core.truth_(checked__12395__auto__)){
navtree.core.navtree_init = checked__12395__auto__;
} else {
}

return cljs.core.cst$sym$navtree$core_SLASH_navtree_DASH_init;
});})(opts17179_17191))
], null)))));
navtree.core.navtree_STAR_ = (function navtree$core$navtree_STAR_(params){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [navtree.core.navtree_init,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([navtree.core.params_default,params], 0))], null);
});
navtree.core.navtree = (function navtree$core$navtree(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17196 = arguments.length;
var i__4731__auto___17197 = (0);
while(true){
if((i__4731__auto___17197 < len__4730__auto___17196)){
args__4736__auto__.push((arguments[i__4731__auto___17197]));

var G__17198 = (i__4731__auto___17197 + (1));
i__4731__auto___17197 = G__17198;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return navtree.core.navtree.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

navtree.core.navtree.cljs$core$IFn$_invoke$arity$variadic = (function (p__17193){
var map__17194 = p__17193;
var map__17194__$1 = (((((!((map__17194 == null))))?(((((map__17194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17194):map__17194);
var params = map__17194__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [navtree.core.navtree_STAR_,params], null);
});

navtree.core.navtree.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
navtree.core.navtree.cljs$lang$applyTo = (function (seq17192){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17192));
});

