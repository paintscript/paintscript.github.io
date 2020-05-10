// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('paintscript.gallery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('z_com.core');
goog.require('keybind.core');
goog.require('reagent.core');
goog.require('paintscript.util');
goog.require('paintscript.canvas');
goog.require('paintscript.render_svg');
paintscript.gallery.pprint_SINGLEQUOTE_ = (function paintscript$gallery$pprint_SINGLEQUOTE_(edn){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17682_17686 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17683_17687 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17684_17688 = true;
var _STAR_print_fn_STAR__temp_val__17685_17689 = ((function (_STAR_print_newline_STAR__orig_val__17682_17686,_STAR_print_fn_STAR__orig_val__17683_17687,_STAR_print_newline_STAR__temp_val__17684_17688,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__17682_17686,_STAR_print_fn_STAR__orig_val__17683_17687,_STAR_print_newline_STAR__temp_val__17684_17688,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17684_17688;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17685_17689;

try{
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(edn);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17683_17687;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17682_17686;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
paintscript.gallery.gallery_sidebar = (function paintscript$gallery$gallery_sidebar(dispatch_BANG_,_BANG_c_gallery,_BANG_c_gallery_committed,_BANG_galleries,_BANG_galleries_committed,_BANG_tab,_BANG_shell){
var cg = cljs.core.deref(_BANG_c_gallery);
var gg = cljs.core.deref(_BANG_galleries);
var tab = cljs.core.deref(_BANG_tab);
var state_changes_QMARK_ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(gg,cljs.core.deref(_BANG_galleries_committed))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cg,cljs.core.deref(_BANG_c_gallery_committed))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$sidebar$script,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controls,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((state_changes_QMARK_)?"unsaved-changes":null)], null),(function (){var iter__4523__auto__ = ((function (cg,gg,tab,state_changes_QMARK_){
return (function paintscript$gallery$gallery_sidebar_$_iter__17693(s__17694){
return (new cljs.core.LazySeq(null,((function (cg,gg,tab,state_changes_QMARK_){
return (function (){
var s__17694__$1 = s__17694;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__17694__$1);
if(temp__5720__auto__){
var s__17694__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17694__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__17694__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__17696 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__17695 = (0);
while(true){
if((i__17695 < size__4522__auto__)){
var tab_k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__17695);
cljs.core.chunk_append(b__17696,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [z_com.core.button,cljs.core.cst$kw$label,cljs.core.name(tab_k),cljs.core.cst$kw$active_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab_k,tab),cljs.core.cst$kw$on_DASH_click,((function (i__17695,tab_k,c__4521__auto__,size__4522__auto__,b__17696,s__17694__$2,temp__5720__auto__,cg,gg,tab,state_changes_QMARK_){
return (function (){
return cljs.core.reset_BANG_(_BANG_tab,tab_k);
});})(i__17695,tab_k,c__4521__auto__,size__4522__auto__,b__17696,s__17694__$2,temp__5720__auto__,cg,gg,tab,state_changes_QMARK_))
], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,tab_k], null)));

var G__17700 = (i__17695 + (1));
i__17695 = G__17700;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17696),paintscript$gallery$gallery_sidebar_$_iter__17693(cljs.core.chunk_rest(s__17694__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17696),null);
}
} else {
var tab_k = cljs.core.first(s__17694__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [z_com.core.button,cljs.core.cst$kw$label,cljs.core.name(tab_k),cljs.core.cst$kw$active_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab_k,tab),cljs.core.cst$kw$on_DASH_click,((function (tab_k,s__17694__$2,temp__5720__auto__,cg,gg,tab,state_changes_QMARK_){
return (function (){
return cljs.core.reset_BANG_(_BANG_tab,tab_k);
});})(tab_k,s__17694__$2,temp__5720__auto__,cg,gg,tab,state_changes_QMARK_))
], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,tab_k], null)),paintscript$gallery$gallery_sidebar_$_iter__17693(cljs.core.rest(s__17694__$2)));
}
} else {
return null;
}
break;
}
});})(cg,gg,tab,state_changes_QMARK_))
,null,null));
});})(cg,gg,tab,state_changes_QMARK_))
;
return iter__4523__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$script,cljs.core.cst$kw$config], null));
})(),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [z_com.core.button,cljs.core.cst$kw$class,"save",cljs.core.cst$kw$label,"save",cljs.core.cst$kw$disabled_QMARK_,(!(state_changes_QMARK_)),cljs.core.cst$kw$on_DASH_click,((function (cg,gg,tab,state_changes_QMARK_){
return (function (){
var G__17697 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$save_DASH_edn], null);
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17697) : dispatch_BANG_.call(null,G__17697));
});})(cg,gg,tab,state_changes_QMARK_))
], null)], null),(function (){var G__17698 = tab;
var G__17698__$1 = (((G__17698 instanceof cljs.core.Keyword))?G__17698.fqn:null);
switch (G__17698__$1) {
case "script":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,clojure.string.trim(paintscript.gallery.pprint_SINGLEQUOTE_(gg)),cljs.core.cst$kw$on_DASH_focus,((function (G__17698,G__17698__$1,cg,gg,tab,state_changes_QMARK_){
return (function (){
return keybind.core.disable_BANG_();
});})(G__17698,G__17698__$1,cg,gg,tab,state_changes_QMARK_))
,cljs.core.cst$kw$on_DASH_blur,((function (G__17698,G__17698__$1,cg,gg,tab,state_changes_QMARK_){
return (function (){
return keybind.core.enable_BANG_();
});})(G__17698,G__17698__$1,cg,gg,tab,state_changes_QMARK_))
,cljs.core.cst$kw$on_DASH_change,((function (G__17698,G__17698__$1,cg,gg,tab,state_changes_QMARK_){
return (function (p1__17690_SHARP_){
return cljs.core.reset_BANG_(_BANG_galleries,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__17690_SHARP_.target.value));
});})(G__17698,G__17698__$1,cg,gg,tab,state_changes_QMARK_))
], null)], null);

break;
case "config":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,clojure.string.trim(paintscript.gallery.pprint_SINGLEQUOTE_(cg)),cljs.core.cst$kw$on_DASH_focus,((function (G__17698,G__17698__$1,cg,gg,tab,state_changes_QMARK_){
return (function (){
return keybind.core.disable_BANG_();
});})(G__17698,G__17698__$1,cg,gg,tab,state_changes_QMARK_))
,cljs.core.cst$kw$on_DASH_blur,((function (G__17698,G__17698__$1,cg,gg,tab,state_changes_QMARK_){
return (function (){
return keybind.core.enable_BANG_();
});})(G__17698,G__17698__$1,cg,gg,tab,state_changes_QMARK_))
,cljs.core.cst$kw$on_DASH_change,((function (G__17698,G__17698__$1,cg,gg,tab,state_changes_QMARK_){
return (function (p1__17691_SHARP_){
return cljs.core.reset_BANG_(_BANG_c_gallery,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__17691_SHARP_.target.value));
});})(G__17698,G__17698__$1,cg,gg,tab,state_changes_QMARK_))
], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17698__$1)].join('')));

}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$shell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$value,cljs.core.deref(_BANG_shell),cljs.core.cst$kw$placeholder,"enter command...",cljs.core.cst$kw$on_DASH_focus,((function (cg,gg,tab,state_changes_QMARK_){
return (function (){
return keybind.core.disable_BANG_();
});})(cg,gg,tab,state_changes_QMARK_))
,cljs.core.cst$kw$on_DASH_blur,((function (cg,gg,tab,state_changes_QMARK_){
return (function (){
return keybind.core.enable_BANG_();
});})(cg,gg,tab,state_changes_QMARK_))
,cljs.core.cst$kw$on_DASH_change,((function (cg,gg,tab,state_changes_QMARK_){
return (function (p1__17692_SHARP_){
return cljs.core.reset_BANG_(_BANG_shell,p1__17692_SHARP_.target.value);
});})(cg,gg,tab,state_changes_QMARK_))
,cljs.core.cst$kw$on_DASH_key_DASH_down,((function (cg,gg,tab,state_changes_QMARK_){
return (function (e){
var k = (function (){var x__4219__auto__ = e.keyCode;
var y__4220__auto__ = e.which;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var cmd = cljs.core.deref(_BANG_shell);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),k)){
cljs.core.reset_BANG_(_BANG_shell,"");

var G__17699_17702 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cmd,clojure.string.trim(cmd)], null);
(dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17699_17702) : dispatch_BANG_.call(null,G__17699_17702));

return e.preventDefault();
} else {
return null;
}
});})(cg,gg,tab,state_changes_QMARK_))
], null)], null)], null)], null);
});
paintscript.gallery.galleries = (function paintscript$gallery$galleries(app_dispatch_BANG_,_BANG_c_gallery,_BANG_c_gallery_committed,_BANG_galleries,_BANG_galleries_committed){
var with_let17703 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let17703);
var temp__5724__auto___17753 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___17753 == null)){
} else {
var c__7808__auto___17754 = temp__5724__auto___17753;
if((with_let17703.generation === c__7808__auto___17754.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let17703.generation = c__7808__auto___17754.ratomGeneration;
}


var init17704 = (with_let17703.length === (0));
var _BANG_shell = ((init17704)?(with_let17703[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("")):(with_let17703[(0)]));
var _BANG_tab = ((init17704)?(with_let17703[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$script)):(with_let17703[(1)]));
var res__7809__auto__ = (function (){var c_base = cljs.core.deref(_BANG_c_gallery);
var map__17705 = cljs.core.deref(_BANG_galleries);
var map__17705__$1 = (((((!((map__17705 == null))))?(((((map__17705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17705):map__17705);
var gg_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17705__$1,cljs.core.cst$kw$config);
var galleries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17705__$1,cljs.core.cst$kw$galleries);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$galleries,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$sidebar$script_DASH_phantom], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.gallery.gallery_sidebar,app_dispatch_BANG_,_BANG_c_gallery,_BANG_c_gallery_committed,_BANG_galleries,_BANG_galleries_committed,_BANG_tab,_BANG_shell], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$gallery_DASH_main,(function (){var iter__4523__auto__ = ((function (c_base,map__17705,map__17705__$1,gg_config,galleries,init17704,_BANG_shell,_BANG_tab,with_let17703){
return (function paintscript$gallery$galleries_$_iter__17707(s__17708){
return (new cljs.core.LazySeq(null,((function (c_base,map__17705,map__17705__$1,gg_config,galleries,init17704,_BANG_shell,_BANG_tab,with_let17703){
return (function (){
var s__17708__$1 = s__17708;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__17708__$1);
if(temp__5720__auto__){
var s__17708__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17708__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__17708__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__17710 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__17709 = (0);
while(true){
if((i__17709 < size__4522__auto__)){
var vec__17711 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__17709);
var g_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17711,(0),null);
var map__17714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17711,(1),null);
var map__17714__$1 = (((((!((map__17714 == null))))?(((((map__17714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17714):map__17714);
var gallery = map__17714__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17714__$1,cljs.core.cst$kw$title);
var paintings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17714__$1,cljs.core.cst$kw$paintings);
cljs.core.chunk_append(b__17710,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$gallery,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,(function (){var or__4131__auto__ = title;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return g_id;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$paintings,(function (){var iter__4523__auto__ = ((function (i__17709,vec__17711,g_id,map__17714,map__17714__$1,gallery,title,paintings,c__4521__auto__,size__4522__auto__,b__17710,s__17708__$2,temp__5720__auto__,c_base,map__17705,map__17705__$1,gg_config,galleries,init17704,_BANG_shell,_BANG_tab,with_let17703){
return (function paintscript$gallery$galleries_$_iter__17707_$_iter__17716(s__17717){
return (new cljs.core.LazySeq(null,((function (i__17709,vec__17711,g_id,map__17714,map__17714__$1,gallery,title,paintings,c__4521__auto__,size__4522__auto__,b__17710,s__17708__$2,temp__5720__auto__,c_base,map__17705,map__17705__$1,gg_config,galleries,init17704,_BANG_shell,_BANG_tab,with_let17703){
return (function (){
var s__17717__$1 = s__17717;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__17717__$1);
if(temp__5720__auto____$1){
var s__17717__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17717__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__17717__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__17719 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__17718 = (0);
while(true){
if((i__17718 < size__4522__auto____$1)){
var vec__17720 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__17718);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17720,(0),null);
var map__17723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17720,(1),null);
var map__17723__$1 = (((((!((map__17723 == null))))?(((((map__17723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17723):map__17723);
var painting = map__17723__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17723__$1,cljs.core.cst$kw$params);
var c = paintscript.util.merge_configs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(painting),cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(gallery),gg_config], 0));
var c_SINGLEQUOTE_ = cljs.core.assoc_in((function (){var or__4131__auto__ = c;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return c_base;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,cljs.core.cst$kw$coords_QMARK_], null),false);
cljs.core.chunk_append(b__17719,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$gallery_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__17718,i__17709,c,c_SINGLEQUOTE_,vec__17720,item_id,map__17723,map__17723__$1,painting,params,c__4521__auto____$1,size__4522__auto____$1,b__17719,s__17717__$2,temp__5720__auto____$1,vec__17711,g_id,map__17714,map__17714__$1,gallery,title,paintings,c__4521__auto__,size__4522__auto__,b__17710,s__17708__$2,temp__5720__auto__,c_base,map__17705,map__17705__$1,gg_config,galleries,init17704,_BANG_shell,_BANG_tab,with_let17703){
return (function (){
var G__17725 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_canvas,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,params], null)], null);
return (app_dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? app_dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17725) : app_dispatch_BANG_.call(null,G__17725));
});})(i__17718,i__17709,c,c_SINGLEQUOTE_,vec__17720,item_id,map__17723,map__17723__$1,painting,params,c__4521__auto____$1,size__4522__auto____$1,b__17719,s__17717__$2,temp__5720__auto____$1,vec__17711,g_id,map__17714,map__17714__$1,gallery,title,paintings,c__4521__auto__,size__4522__auto__,b__17710,s__17708__$2,temp__5720__auto__,c_base,map__17705,map__17705__$1,gg_config,galleries,init17704,_BANG_shell,_BANG_tab,with_let17703))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.render_svg.canvas_paint,c_SINGLEQUOTE_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c_SINGLEQUOTE_,params], 0))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(painting)], null)));

var G__17755 = (i__17718 + (1));
i__17718 = G__17755;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17719),paintscript$gallery$galleries_$_iter__17707_$_iter__17716(cljs.core.chunk_rest(s__17717__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17719),null);
}
} else {
var vec__17726 = cljs.core.first(s__17717__$2);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17726,(0),null);
var map__17729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17726,(1),null);
var map__17729__$1 = (((((!((map__17729 == null))))?(((((map__17729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17729):map__17729);
var painting = map__17729__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17729__$1,cljs.core.cst$kw$params);
var c = paintscript.util.merge_configs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(painting),cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(gallery),gg_config], 0));
var c_SINGLEQUOTE_ = cljs.core.assoc_in((function (){var or__4131__auto__ = c;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return c_base;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,cljs.core.cst$kw$coords_QMARK_], null),false);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$gallery_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__17709,c,c_SINGLEQUOTE_,vec__17726,item_id,map__17729,map__17729__$1,painting,params,s__17717__$2,temp__5720__auto____$1,vec__17711,g_id,map__17714,map__17714__$1,gallery,title,paintings,c__4521__auto__,size__4522__auto__,b__17710,s__17708__$2,temp__5720__auto__,c_base,map__17705,map__17705__$1,gg_config,galleries,init17704,_BANG_shell,_BANG_tab,with_let17703){
return (function (){
var G__17731 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_canvas,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,params], null)], null);
return (app_dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? app_dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17731) : app_dispatch_BANG_.call(null,G__17731));
});})(i__17709,c,c_SINGLEQUOTE_,vec__17726,item_id,map__17729,map__17729__$1,painting,params,s__17717__$2,temp__5720__auto____$1,vec__17711,g_id,map__17714,map__17714__$1,gallery,title,paintings,c__4521__auto__,size__4522__auto__,b__17710,s__17708__$2,temp__5720__auto__,c_base,map__17705,map__17705__$1,gg_config,galleries,init17704,_BANG_shell,_BANG_tab,with_let17703))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.render_svg.canvas_paint,c_SINGLEQUOTE_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c_SINGLEQUOTE_,params], 0))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(painting)], null)),paintscript$gallery$galleries_$_iter__17707_$_iter__17716(cljs.core.rest(s__17717__$2)));
}
} else {
return null;
}
break;
}
});})(i__17709,vec__17711,g_id,map__17714,map__17714__$1,gallery,title,paintings,c__4521__auto__,size__4522__auto__,b__17710,s__17708__$2,temp__5720__auto__,c_base,map__17705,map__17705__$1,gg_config,galleries,init17704,_BANG_shell,_BANG_tab,with_let17703))
,null,null));
});})(i__17709,vec__17711,g_id,map__17714,map__17714__$1,gallery,title,paintings,c__4521__auto__,size__4522__auto__,b__17710,s__17708__$2,temp__5720__auto__,c_base,map__17705,map__17705__$1,gg_config,galleries,init17704,_BANG_shell,_BANG_tab,with_let17703))
;
return iter__4523__auto__(paintings);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(gallery)], null)));

var G__17756 = (i__17709 + (1));
i__17709 = G__17756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17710),paintscript$gallery$galleries_$_iter__17707(cljs.core.chunk_rest(s__17708__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17710),null);
}
} else {
var vec__17732 = cljs.core.first(s__17708__$2);
var g_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17732,(0),null);
var map__17735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17732,(1),null);
var map__17735__$1 = (((((!((map__17735 == null))))?(((((map__17735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17735):map__17735);
var gallery = map__17735__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17735__$1,cljs.core.cst$kw$title);
var paintings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17735__$1,cljs.core.cst$kw$paintings);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$gallery,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,(function (){var or__4131__auto__ = title;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return g_id;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$paintings,(function (){var iter__4523__auto__ = ((function (vec__17732,g_id,map__17735,map__17735__$1,gallery,title,paintings,s__17708__$2,temp__5720__auto__,c_base,map__17705,map__17705__$1,gg_config,galleries,init17704,_BANG_shell,_BANG_tab,with_let17703){
return (function paintscript$gallery$galleries_$_iter__17707_$_iter__17737(s__17738){
return (new cljs.core.LazySeq(null,((function (vec__17732,g_id,map__17735,map__17735__$1,gallery,title,paintings,s__17708__$2,temp__5720__auto__,c_base,map__17705,map__17705__$1,gg_config,galleries,init17704,_BANG_shell,_BANG_tab,with_let17703){
return (function (){
var s__17738__$1 = s__17738;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__17738__$1);
if(temp__5720__auto____$1){
var s__17738__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17738__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__17738__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__17740 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__17739 = (0);
while(true){
if((i__17739 < size__4522__auto__)){
var vec__17741 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__17739);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17741,(0),null);
var map__17744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17741,(1),null);
var map__17744__$1 = (((((!((map__17744 == null))))?(((((map__17744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17744):map__17744);
var painting = map__17744__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17744__$1,cljs.core.cst$kw$params);
var c = paintscript.util.merge_configs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(painting),cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(gallery),gg_config], 0));
var c_SINGLEQUOTE_ = cljs.core.assoc_in((function (){var or__4131__auto__ = c;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return c_base;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,cljs.core.cst$kw$coords_QMARK_], null),false);
cljs.core.chunk_append(b__17740,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$gallery_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__17739,c,c_SINGLEQUOTE_,vec__17741,item_id,map__17744,map__17744__$1,painting,params,c__4521__auto__,size__4522__auto__,b__17740,s__17738__$2,temp__5720__auto____$1,vec__17732,g_id,map__17735,map__17735__$1,gallery,title,paintings,s__17708__$2,temp__5720__auto__,c_base,map__17705,map__17705__$1,gg_config,galleries,init17704,_BANG_shell,_BANG_tab,with_let17703){
return (function (){
var G__17746 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_canvas,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,params], null)], null);
return (app_dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? app_dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17746) : app_dispatch_BANG_.call(null,G__17746));
});})(i__17739,c,c_SINGLEQUOTE_,vec__17741,item_id,map__17744,map__17744__$1,painting,params,c__4521__auto__,size__4522__auto__,b__17740,s__17738__$2,temp__5720__auto____$1,vec__17732,g_id,map__17735,map__17735__$1,gallery,title,paintings,s__17708__$2,temp__5720__auto__,c_base,map__17705,map__17705__$1,gg_config,galleries,init17704,_BANG_shell,_BANG_tab,with_let17703))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.render_svg.canvas_paint,c_SINGLEQUOTE_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c_SINGLEQUOTE_,params], 0))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(painting)], null)));

var G__17757 = (i__17739 + (1));
i__17739 = G__17757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17740),paintscript$gallery$galleries_$_iter__17707_$_iter__17737(cljs.core.chunk_rest(s__17738__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17740),null);
}
} else {
var vec__17747 = cljs.core.first(s__17738__$2);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17747,(0),null);
var map__17750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17747,(1),null);
var map__17750__$1 = (((((!((map__17750 == null))))?(((((map__17750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17750):map__17750);
var painting = map__17750__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17750__$1,cljs.core.cst$kw$params);
var c = paintscript.util.merge_configs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(painting),cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(gallery),gg_config], 0));
var c_SINGLEQUOTE_ = cljs.core.assoc_in((function (){var or__4131__auto__ = c;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return c_base;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,cljs.core.cst$kw$coords_QMARK_], null),false);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$gallery_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (c,c_SINGLEQUOTE_,vec__17747,item_id,map__17750,map__17750__$1,painting,params,s__17738__$2,temp__5720__auto____$1,vec__17732,g_id,map__17735,map__17735__$1,gallery,title,paintings,s__17708__$2,temp__5720__auto__,c_base,map__17705,map__17705__$1,gg_config,galleries,init17704,_BANG_shell,_BANG_tab,with_let17703){
return (function (){
var G__17752 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_canvas,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,params], null)], null);
return (app_dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? app_dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17752) : app_dispatch_BANG_.call(null,G__17752));
});})(c,c_SINGLEQUOTE_,vec__17747,item_id,map__17750,map__17750__$1,painting,params,s__17738__$2,temp__5720__auto____$1,vec__17732,g_id,map__17735,map__17735__$1,gallery,title,paintings,s__17708__$2,temp__5720__auto__,c_base,map__17705,map__17705__$1,gg_config,galleries,init17704,_BANG_shell,_BANG_tab,with_let17703))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.render_svg.canvas_paint,c_SINGLEQUOTE_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c_SINGLEQUOTE_,params], 0))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(painting)], null)),paintscript$gallery$galleries_$_iter__17707_$_iter__17737(cljs.core.rest(s__17738__$2)));
}
} else {
return null;
}
break;
}
});})(vec__17732,g_id,map__17735,map__17735__$1,gallery,title,paintings,s__17708__$2,temp__5720__auto__,c_base,map__17705,map__17705__$1,gg_config,galleries,init17704,_BANG_shell,_BANG_tab,with_let17703))
,null,null));
});})(vec__17732,g_id,map__17735,map__17735__$1,gallery,title,paintings,s__17708__$2,temp__5720__auto__,c_base,map__17705,map__17705__$1,gg_config,galleries,init17704,_BANG_shell,_BANG_tab,with_let17703))
;
return iter__4523__auto__(paintings);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(gallery)], null)),paintscript$gallery$galleries_$_iter__17707(cljs.core.rest(s__17708__$2)));
}
} else {
return null;
}
break;
}
});})(c_base,map__17705,map__17705__$1,gg_config,galleries,init17704,_BANG_shell,_BANG_tab,with_let17703))
,null,null));
});})(c_base,map__17705,map__17705__$1,gg_config,galleries,init17704,_BANG_shell,_BANG_tab,with_let17703))
;
return iter__4523__auto__(galleries);
})()], null)], null);
})();

return res__7809__auto__;
});
