// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('paintscript.canvas');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('cljs.reader');
goog.require('reagent.core');
goog.require('z_com.core');
goog.require('keybind.core');
goog.require('paintscript.els');
goog.require('paintscript.nav');
goog.require('paintscript.ctrl');
goog.require('paintscript.s_log');
goog.require('paintscript.render_svg');
paintscript.canvas.pprint_SINGLEQUOTE_ = (function paintscript$canvas$pprint_SINGLEQUOTE_(edn){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17589_17593 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17590_17594 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17591_17595 = true;
var _STAR_print_fn_STAR__temp_val__17592_17596 = ((function (_STAR_print_newline_STAR__orig_val__17589_17593,_STAR_print_fn_STAR__orig_val__17590_17594,_STAR_print_newline_STAR__temp_val__17591_17595,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__17589_17593,_STAR_print_fn_STAR__orig_val__17590_17594,_STAR_print_newline_STAR__temp_val__17591_17595,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17591_17595;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17592_17596;

try{
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(edn);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17590_17594;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17589_17593;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
paintscript.canvas.canvas_sidebar = (function paintscript$canvas$canvas_sidebar(_BANG_config,_BANG_params,_BANG_ui,_BANG_shell,_BANG_s_log,_BANG_tab,config,params,params_SINGLEQUOTE_,sel,dispatch_BANG_){
var tab = cljs.core.deref(_BANG_tab);
var vec__17600 = sel;
var src_k_sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17600,(0),null);
var pi_sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17600,(1),null);
var eli_sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17600,(2),null);
var xyi_sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17600,(3),null);
var status_QMARK_ = (function (){var and__4120__auto__ = sel;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$script,tab);
} else {
return and__4120__auto__;
}
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$sidebar$script,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(status_QMARK_)?"with-status":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controls,(function (){var iter__4523__auto__ = ((function (tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function paintscript$canvas$canvas_sidebar_$_iter__17603(s__17604){
return (new cljs.core.LazySeq(null,((function (tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
var s__17604__$1 = s__17604;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__17604__$1);
if(temp__5720__auto__){
var s__17604__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17604__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__17604__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__17606 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__17605 = (0);
while(true){
if((i__17605 < size__4522__auto__)){
var tab_k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__17605);
cljs.core.chunk_append(b__17606,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [z_com.core.button,cljs.core.cst$kw$label,cljs.core.name(tab_k),cljs.core.cst$kw$active_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab_k,tab),cljs.core.cst$kw$on_DASH_click,((function (i__17605,tab_k,c__4521__auto__,size__4522__auto__,b__17606,s__17604__$2,temp__5720__auto__,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
return cljs.core.reset_BANG_(_BANG_tab,tab_k);
});})(i__17605,tab_k,c__4521__auto__,size__4522__auto__,b__17606,s__17604__$2,temp__5720__auto__,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,tab_k], null)));

var G__17640 = (i__17605 + (1));
i__17605 = G__17640;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17606),paintscript$canvas$canvas_sidebar_$_iter__17603(cljs.core.chunk_rest(s__17604__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17606),null);
}
} else {
var tab_k = cljs.core.first(s__17604__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [z_com.core.button,cljs.core.cst$kw$label,cljs.core.name(tab_k),cljs.core.cst$kw$active_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab_k,tab),cljs.core.cst$kw$on_DASH_click,((function (tab_k,s__17604__$2,temp__5720__auto__,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
return cljs.core.reset_BANG_(_BANG_tab,tab_k);
});})(tab_k,s__17604__$2,temp__5720__auto__,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,tab_k], null)),paintscript$canvas$canvas_sidebar_$_iter__17603(cljs.core.rest(s__17604__$2)));
}
} else {
return null;
}
break;
}
});})(tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
,null,null));
});})(tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
;
return iter__4523__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$script,cljs.core.cst$kw$config,cljs.core.cst$kw$log], null));
})()], null),(function (){var G__17607 = tab;
var G__17607__$1 = (((G__17607 instanceof cljs.core.Keyword))?G__17607.fqn:null);
switch (G__17607__$1) {
case "script":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,clojure.string.trim(paintscript.canvas.pprint_SINGLEQUOTE_(params)),cljs.core.cst$kw$on_DASH_focus,((function (G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
return keybind.core.disable_BANG_();
});})(G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
,cljs.core.cst$kw$on_DASH_blur,((function (G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
return keybind.core.enable_BANG_();
});})(G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
,cljs.core.cst$kw$on_DASH_change,((function (G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (p1__17597_SHARP_){
return cljs.core.reset_BANG_(_BANG_params,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__17597_SHARP_.target.value));
});})(G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
], null)], null);

break;
case "config":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,clojure.string.trim(paintscript.canvas.pprint_SINGLEQUOTE_(config)),cljs.core.cst$kw$on_DASH_focus,((function (G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
return keybind.core.disable_BANG_();
});})(G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
,cljs.core.cst$kw$on_DASH_blur,((function (G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
return keybind.core.enable_BANG_();
});})(G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
,cljs.core.cst$kw$on_DASH_change,((function (G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (p1__17598_SHARP_){
return cljs.core.reset_BANG_(_BANG_config,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__17598_SHARP_.target.value));
});})(G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
], null)], null);

break;
case "log":
var vec__17608 = paintscript.s_log.items(_BANG_s_log);
var i_active = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17608,(0),null);
var i_s_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17608,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol$log,(function (){var iter__4523__auto__ = ((function (vec__17608,i_active,i_s_items,G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function paintscript$canvas$canvas_sidebar_$_iter__17611(s__17612){
return (new cljs.core.LazySeq(null,((function (vec__17608,i_active,i_s_items,G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
var s__17612__$1 = s__17612;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__17612__$1);
if(temp__5720__auto__){
var s__17612__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17612__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__17612__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__17614 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__17613 = (0);
while(true){
if((i__17613 < size__4522__auto__)){
var vec__17615 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__17613);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17615,(0),null);
var map__17618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17615,(1),null);
var map__17618__$1 = (((((!((map__17618 == null))))?(((((map__17618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17618):map__17618);
var log_item = map__17618__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17618__$1,cljs.core.cst$kw$n);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17618__$1,cljs.core.cst$kw$op);
cljs.core.chunk_append(b__17614,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$log_DASH_item,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_active,i))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (i__17613,vec__17615,i,map__17618,map__17618__$1,log_item,n,op,c__4521__auto__,size__4522__auto__,b__17614,s__17612__$2,temp__5720__auto__,vec__17608,i_active,i_s_items,G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
return paintscript.s_log.op.cljs$core$IFn$_invoke$arity$variadic(_BANG_s_log,_BANG_params,_BANG_ui,cljs.core.cst$kw$activate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));
});})(i__17613,vec__17615,i,map__17618,map__17618__$1,log_item,n,op,c__4521__auto__,size__4522__auto__,b__17614,s__17612__$2,temp__5720__auto__,vec__17608,i_active,i_s_items,G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (i__17613,vec__17615,i,map__17618,map__17618__$1,log_item,n,op,c__4521__auto__,size__4522__auto__,b__17614,s__17612__$2,temp__5720__auto__,vec__17608,i_active,i_s_items,G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
return paintscript.s_log.op.cljs$core$IFn$_invoke$arity$variadic(_BANG_s_log,_BANG_params,_BANG_ui,cljs.core.cst$kw$preview,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));
});})(i__17613,vec__17615,i,map__17618,map__17618__$1,log_item,n,op,c__4521__auto__,size__4522__auto__,b__17614,s__17612__$2,temp__5720__auto__,vec__17608,i_active,i_s_items,G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (i__17613,vec__17615,i,map__17618,map__17618__$1,log_item,n,op,c__4521__auto__,size__4522__auto__,b__17614,s__17612__$2,temp__5720__auto__,vec__17608,i_active,i_s_items,G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
return paintscript.s_log.op.cljs$core$IFn$_invoke$arity$variadic(_BANG_s_log,_BANG_params,_BANG_ui,cljs.core.cst$kw$activate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i_active], 0));
});})(i__17613,vec__17615,i,map__17618,map__17618__$1,log_item,n,op,c__4521__auto__,size__4522__auto__,b__17614,s__17612__$2,temp__5720__auto__,vec__17608,i_active,i_s_items,G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
], null),n,". ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([op], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)));

var G__17642 = (i__17613 + (1));
i__17613 = G__17642;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17614),paintscript$canvas$canvas_sidebar_$_iter__17611(cljs.core.chunk_rest(s__17612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17614),null);
}
} else {
var vec__17620 = cljs.core.first(s__17612__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17620,(0),null);
var map__17623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17620,(1),null);
var map__17623__$1 = (((((!((map__17623 == null))))?(((((map__17623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17623):map__17623);
var log_item = map__17623__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17623__$1,cljs.core.cst$kw$n);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17623__$1,cljs.core.cst$kw$op);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$log_DASH_item,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_active,i))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (vec__17620,i,map__17623,map__17623__$1,log_item,n,op,s__17612__$2,temp__5720__auto__,vec__17608,i_active,i_s_items,G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
return paintscript.s_log.op.cljs$core$IFn$_invoke$arity$variadic(_BANG_s_log,_BANG_params,_BANG_ui,cljs.core.cst$kw$activate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));
});})(vec__17620,i,map__17623,map__17623__$1,log_item,n,op,s__17612__$2,temp__5720__auto__,vec__17608,i_active,i_s_items,G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (vec__17620,i,map__17623,map__17623__$1,log_item,n,op,s__17612__$2,temp__5720__auto__,vec__17608,i_active,i_s_items,G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
return paintscript.s_log.op.cljs$core$IFn$_invoke$arity$variadic(_BANG_s_log,_BANG_params,_BANG_ui,cljs.core.cst$kw$preview,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));
});})(vec__17620,i,map__17623,map__17623__$1,log_item,n,op,s__17612__$2,temp__5720__auto__,vec__17608,i_active,i_s_items,G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (vec__17620,i,map__17623,map__17623__$1,log_item,n,op,s__17612__$2,temp__5720__auto__,vec__17608,i_active,i_s_items,G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
return paintscript.s_log.op.cljs$core$IFn$_invoke$arity$variadic(_BANG_s_log,_BANG_params,_BANG_ui,cljs.core.cst$kw$activate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i_active], 0));
});})(vec__17620,i,map__17623,map__17623__$1,log_item,n,op,s__17612__$2,temp__5720__auto__,vec__17608,i_active,i_s_items,G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
], null),n,". ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([op], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)),paintscript$canvas$canvas_sidebar_$_iter__17611(cljs.core.rest(s__17612__$2)));
}
} else {
return null;
}
break;
}
});})(vec__17608,i_active,i_s_items,G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
,null,null));
});})(vec__17608,i_active,i_s_items,G__17607,G__17607__$1,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
;
return iter__4523__auto__(i_s_items);
})()], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17607__$1)].join('')));

}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$shell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$value,cljs.core.deref(_BANG_shell),cljs.core.cst$kw$placeholder,"enter command...",cljs.core.cst$kw$on_DASH_focus,((function (tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
return keybind.core.disable_BANG_();
});})(tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
,cljs.core.cst$kw$on_DASH_blur,((function (tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
return keybind.core.enable_BANG_();
});})(tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
,cljs.core.cst$kw$on_DASH_change,((function (tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (p1__17599_SHARP_){
return cljs.core.reset_BANG_(_BANG_shell,p1__17599_SHARP_.target.value);
});})(tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
,cljs.core.cst$kw$on_DASH_key_DASH_down,((function (tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (e){
var k = (function (){var x__4219__auto__ = e.keyCode;
var y__4220__auto__ = e.which;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var cmd = cljs.core.deref(_BANG_shell);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),k)){
cljs.core.reset_BANG_(_BANG_shell,"");

var G__17625_17643 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cmd,clojure.string.trim(cmd)], null);
(dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17625_17643) : dispatch_BANG_.call(null,G__17625_17643));

return e.preventDefault();
} else {
return null;
}
});})(tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$status,(cljs.core.truth_(status_QMARK_)?(function (){var vec__17626 = paintscript.nav.params_GT_.cljs$core$IFn$_invoke$arity$variadic(params_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$src_DASH_k,src_k_sel,cljs.core.cst$kw$pi,pi_sel], 0));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17626,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17626,(1),null);
var p = vec__17626;
var vec__17629 = paintscript.nav.p_GT_.cljs$core$IFn$_invoke$arity$variadic(p,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$eli,eli_sel], 0));
var seq__17630 = cljs.core.seq(vec__17629);
var first__17631 = cljs.core.first(seq__17630);
var seq__17630__$1 = cljs.core.next(seq__17630);
var k = first__17631;
var xys = seq__17630__$1;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$selection_DASH_stack,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$selection_DASH_level$iii,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sel], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controls$crud,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [z_com.core.button,cljs.core.cst$kw$label,"blur",cljs.core.cst$kw$on_DASH_click,((function (vec__17626,_,opts,p,vec__17629,seq__17630,first__17631,seq__17630__$1,k,xys,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
var G__17632 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sel,null], null);
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17632) : dispatch_BANG_.call(null,G__17632));
});})(vec__17626,_,opts,p,vec__17629,seq__17630,first__17631,seq__17630__$1,k,xys,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [z_com.core.button,cljs.core.cst$kw$label,"up",cljs.core.cst$kw$on_DASH_click,((function (vec__17626,_,opts,p,vec__17629,seq__17630,first__17631,seq__17630__$1,k,xys,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
var G__17633 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sel,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(sel)], null);
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17633) : dispatch_BANG_.call(null,G__17633));
});})(vec__17626,_,opts,p,vec__17629,seq__17630,first__17631,seq__17630__$1,k,xys,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$selection_DASH_level$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controls$crud,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [z_com.core.button,cljs.core.cst$kw$label,"add",cljs.core.cst$kw$on_DASH_click,((function (vec__17626,_,opts,p,vec__17629,seq__17630,first__17631,seq__17630__$1,k,xys,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
var G__17634 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pth_DASH_append], null);
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17634) : dispatch_BANG_.call(null,G__17634));
});})(vec__17626,_,opts,p,vec__17629,seq__17630,first__17631,seq__17630__$1,k,xys,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [z_com.core.button,cljs.core.cst$kw$label,"del",cljs.core.cst$kw$on_DASH_click,((function (vec__17626,_,opts,p,vec__17629,seq__17630,first__17631,seq__17630__$1,k,xys,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
var G__17635 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pth_DASH_del], null);
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17635) : dispatch_BANG_.call(null,G__17635));
});})(vec__17626,_,opts,p,vec__17629,seq__17630,first__17631,seq__17630__$1,k,xys,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$selection_DASH_level$path_DASH_vec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$pth_DASH_k,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controls$crud,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [z_com.core.button,cljs.core.cst$kw$label,"add",cljs.core.cst$kw$on_DASH_click,((function (vec__17626,_,opts,p,vec__17629,seq__17630,first__17631,seq__17630__$1,k,xys,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
var G__17636 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$el_DASH_append], null);
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17636) : dispatch_BANG_.call(null,G__17636));
});})(vec__17626,_,opts,p,vec__17629,seq__17630,first__17631,seq__17630__$1,k,xys,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [z_com.core.button,cljs.core.cst$kw$label,"del",cljs.core.cst$kw$on_DASH_click,((function (vec__17626,_,opts,p,vec__17629,seq__17630,first__17631,seq__17630__$1,k,xys,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
var G__17637 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$el_DASH_del], null);
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17637) : dispatch_BANG_.call(null,G__17637));
});})(vec__17626,_,opts,p,vec__17629,seq__17630,first__17631,seq__17630__$1,k,xys,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$selection_DASH_level$point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([paintscript.nav.xys_GT_.cljs$core$IFn$_invoke$arity$variadic(xys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$xyi,xyi_sel], 0))], 0))], null),((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$L,null,cljs.core.cst$kw$arc,null], null), null),k))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controls$crud,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [z_com.core.button,cljs.core.cst$kw$label,"add",cljs.core.cst$kw$on_DASH_click,((function (vec__17626,_,opts,p,vec__17629,seq__17630,first__17631,seq__17630__$1,k,xys,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
var G__17638 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xy_DASH_append], null);
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17638) : dispatch_BANG_.call(null,G__17638));
});})(vec__17626,_,opts,p,vec__17629,seq__17630,first__17631,seq__17630__$1,k,xys,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [z_com.core.button,cljs.core.cst$kw$label,"del",cljs.core.cst$kw$on_DASH_click,((function (vec__17626,_,opts,p,vec__17629,seq__17630,first__17631,seq__17630__$1,k,xys,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_){
return (function (){
var G__17639 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xy_DASH_del], null);
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17639) : dispatch_BANG_.call(null,G__17639));
});})(vec__17626,_,opts,p,vec__17629,seq__17630,first__17631,seq__17630__$1,k,xys,tab,vec__17600,src_k_sel,pi_sel,eli_sel,xyi_sel,status_QMARK_))
], null)], null):null)], null)], null);
})():null)], null)], null);
});
paintscript.canvas.canvas = (function paintscript$canvas$canvas(cfg_init,params_init){
var with_let17645 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let17645);
var temp__5724__auto___17666 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___17666 == null)){
} else {
var c__7808__auto___17667 = temp__5724__auto___17666;
if((with_let17645.generation === c__7808__auto___17667.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let17645.generation = c__7808__auto___17667.ratomGeneration;
}


var init17646 = (with_let17645.length === (0));
var ui_init = ((init17646)?(with_let17645[(0)] = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$sel,null,cljs.core.cst$kw$sel_DASH_set,null,cljs.core.cst$kw$snap,null,cljs.core.cst$kw$snap_DASH_to_DASH_grid_QMARK_,true,cljs.core.cst$kw$insert_DASH_mode_QMARK_,true], null)):(with_let17645[(0)]));
var _BANG_ui = ((init17646)?(with_let17645[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(ui_init)):(with_let17645[(1)]));
var _BANG_sel = ((init17646)?(with_let17645[(2)] = reagent.core.cursor(_BANG_ui,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sel], null))):(with_let17645[(2)]));
var _BANG_sel_set = ((init17646)?(with_let17645[(3)] = reagent.core.cursor(_BANG_ui,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sel_DASH_set], null))):(with_let17645[(3)]));
var _BANG_config = ((init17646)?(with_let17645[(4)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cfg_init)):(with_let17645[(4)]));
var _BANG_scale = ((init17646)?(with_let17645[(5)] = reagent.core.cursor(_BANG_config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,cljs.core.cst$kw$scale], null))):(with_let17645[(5)]));
var _BANG_params = ((init17646)?(with_let17645[(6)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(params_init)):(with_let17645[(6)]));
var _BANG_s_log = ((init17646)?(with_let17645[(7)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let17645[(7)]));
var _BANG_hov = ((init17646)?(with_let17645[(8)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let17645[(8)]));
var _BANG_tab = ((init17646)?(with_let17645[(9)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$script)):(with_let17645[(9)]));
var _BANG_shell = ((init17646)?(with_let17645[(10)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("")):(with_let17645[(10)]));
var report_BANG_ = ((init17646)?(with_let17645[(11)] = ((function (init17646,ui_init,_BANG_ui,_BANG_sel,_BANG_sel_set,_BANG_config,_BANG_scale,_BANG_params,_BANG_s_log,_BANG_hov,_BANG_tab,_BANG_shell,with_let17645){
return (function (iii,i_main,shift_QMARK_){
return cljs.core.reset_BANG_(_BANG_sel,cljs.core.with_meta(iii,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$main_QMARK_,cljs.core.not(i_main),cljs.core.cst$kw$shift_QMARK_,shift_QMARK_], null)));
});})(init17646,ui_init,_BANG_ui,_BANG_sel,_BANG_sel_set,_BANG_config,_BANG_scale,_BANG_params,_BANG_s_log,_BANG_hov,_BANG_tab,_BANG_shell,with_let17645))
):(with_let17645[(11)]));
var dispatch_BANG_ = ((init17646)?(with_let17645[(12)] = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(paintscript.ctrl.dispatch_BANG_,_BANG_config,_BANG_params,_BANG_s_log,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_BANG_ui], 0))):(with_let17645[(12)]));
var dnd_fns = ((init17646)?(with_let17645[(13)] = paintscript.ctrl.drag_and_drop_fns(_BANG_scale,_BANG_params,_BANG_ui,dispatch_BANG_)):(with_let17645[(13)]));
var kb_fns = ((init17646)?(with_let17645[(14)] = paintscript.ctrl.keybind_fns(_BANG_params,_BANG_ui,dispatch_BANG_)):(with_let17645[(14)]));
var report_hov_BANG_ = ((init17646)?(with_let17645[(15)] = ((function (init17646,ui_init,_BANG_ui,_BANG_sel,_BANG_sel_set,_BANG_config,_BANG_scale,_BANG_params,_BANG_s_log,_BANG_hov,_BANG_tab,_BANG_shell,report_BANG_,dispatch_BANG_,dnd_fns,kb_fns,with_let17645){
return (function (iii,val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_hov,((function (init17646,ui_init,_BANG_ui,_BANG_sel,_BANG_sel_set,_BANG_config,_BANG_scale,_BANG_params,_BANG_s_log,_BANG_hov,_BANG_tab,_BANG_shell,report_BANG_,dispatch_BANG_,dnd_fns,kb_fns,with_let17645){
return (function (p1__17644_SHARP_){
if(cljs.core.truth_(val)){
return iii;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(iii,p1__17644_SHARP_)){
return null;
} else {
return p1__17644_SHARP_;

}
}
});})(init17646,ui_init,_BANG_ui,_BANG_sel,_BANG_sel_set,_BANG_config,_BANG_scale,_BANG_params,_BANG_s_log,_BANG_hov,_BANG_tab,_BANG_shell,report_BANG_,dispatch_BANG_,dnd_fns,kb_fns,with_let17645))
);
});})(init17646,ui_init,_BANG_ui,_BANG_sel,_BANG_sel_set,_BANG_config,_BANG_scale,_BANG_params,_BANG_s_log,_BANG_hov,_BANG_tab,_BANG_shell,report_BANG_,dispatch_BANG_,dnd_fns,kb_fns,with_let17645))
):(with_let17645[(15)]));
var _ = ((init17646)?(with_let17645[(16)] = (function (){var seq__17647 = cljs.core.seq(kb_fns);
var chunk__17648 = null;
var count__17649 = (0);
var i__17650 = (0);
while(true){
if((i__17650 < count__17649)){
var vec__17657 = chunk__17648.cljs$core$IIndexed$_nth$arity$2(null,i__17650);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17657,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17657,(1),null);
keybind.core.bind_BANG_(k,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),f);


var G__17668 = seq__17647;
var G__17669 = chunk__17648;
var G__17670 = count__17649;
var G__17671 = (i__17650 + (1));
seq__17647 = G__17668;
chunk__17648 = G__17669;
count__17649 = G__17670;
i__17650 = G__17671;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__17647);
if(temp__5720__auto__){
var seq__17647__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17647__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__17647__$1);
var G__17672 = cljs.core.chunk_rest(seq__17647__$1);
var G__17673 = c__4550__auto__;
var G__17674 = cljs.core.count(c__4550__auto__);
var G__17675 = (0);
seq__17647 = G__17672;
chunk__17648 = G__17673;
count__17649 = G__17674;
i__17650 = G__17675;
continue;
} else {
var vec__17660 = cljs.core.first(seq__17647__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17660,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17660,(1),null);
keybind.core.bind_BANG_(k,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),f);


var G__17676 = cljs.core.next(seq__17647__$1);
var G__17677 = null;
var G__17678 = (0);
var G__17679 = (0);
seq__17647 = G__17676;
chunk__17648 = G__17677;
count__17649 = G__17678;
i__17650 = G__17679;
continue;
}
} else {
return null;
}
}
break;
}
})()):(with_let17645[(16)]));
var set_ref_BANG_ = ((init17646)?(with_let17645[(17)] = ((function (init17646,ui_init,_BANG_ui,_BANG_sel,_BANG_sel_set,_BANG_config,_BANG_scale,_BANG_params,_BANG_s_log,_BANG_hov,_BANG_tab,_BANG_shell,report_BANG_,dispatch_BANG_,dnd_fns,kb_fns,report_hov_BANG_,_,with_let17645){
return (function (svg_dom){
if(cljs.core.truth_((function (){var and__4120__auto__ = svg_dom;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.cst$kw$xy_DASH_svg_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_ui)));
} else {
return and__4120__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_ui,((function (init17646,ui_init,_BANG_ui,_BANG_sel,_BANG_sel_set,_BANG_config,_BANG_scale,_BANG_params,_BANG_s_log,_BANG_hov,_BANG_tab,_BANG_shell,report_BANG_,dispatch_BANG_,dnd_fns,kb_fns,report_hov_BANG_,_,with_let17645){
return (function (ui){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ui,cljs.core.cst$kw$svg_DASH_dom,svg_dom,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$xy_DASH_svg_BANG_,((function (init17646,ui_init,_BANG_ui,_BANG_sel,_BANG_sel_set,_BANG_config,_BANG_scale,_BANG_params,_BANG_s_log,_BANG_hov,_BANG_tab,_BANG_shell,report_BANG_,dispatch_BANG_,dnd_fns,kb_fns,report_hov_BANG_,_,with_let17645){
return (function (){
var rect = svg_dom.getBoundingClientRect();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rect.left,rect.top], null);
});})(init17646,ui_init,_BANG_ui,_BANG_sel,_BANG_sel_set,_BANG_config,_BANG_scale,_BANG_params,_BANG_s_log,_BANG_hov,_BANG_tab,_BANG_shell,report_BANG_,dispatch_BANG_,dnd_fns,kb_fns,report_hov_BANG_,_,with_let17645))
], 0));
});})(init17646,ui_init,_BANG_ui,_BANG_sel,_BANG_sel_set,_BANG_config,_BANG_scale,_BANG_params,_BANG_s_log,_BANG_hov,_BANG_tab,_BANG_shell,report_BANG_,dispatch_BANG_,dnd_fns,kb_fns,report_hov_BANG_,_,with_let17645))
);

return cljs.core.reset_BANG_(_BANG_s_log,paintscript.s_log.init(cljs.core.deref(_BANG_params),cljs.core.deref(_BANG_ui)));
} else {
return null;
}
});})(init17646,ui_init,_BANG_ui,_BANG_sel,_BANG_sel_set,_BANG_config,_BANG_scale,_BANG_params,_BANG_s_log,_BANG_hov,_BANG_tab,_BANG_shell,report_BANG_,dispatch_BANG_,dnd_fns,kb_fns,report_hov_BANG_,_,with_let17645))
):(with_let17645[(17)]));
var canvas_paint_SINGLEQUOTE_ = ((init17646)?(with_let17645[(18)] = cljs.core.with_meta(new cljs.core.Var(function(){return paintscript.render_svg.canvas_paint;},cljs.core.cst$sym$paintscript$render_DASH_svg_SLASH_canvas_DASH_paint,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$top_DASH_fn,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$paintscript$render_DASH_svg,cljs.core.cst$sym$canvas_DASH_paint,"/home/travis/build/paintscript/ps/src/paintscript/render_svg.cljc",22,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$variadic_QMARK_,false,cljs.core.cst$kw$fixed_DASH_arity,3,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,3,cljs.core.cst$kw$method_DASH_params,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$config,cljs.core.cst$sym$params], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hov,cljs.core.cst$sym$sel,cljs.core.cst$sym$dispatch_BANG_,cljs.core.cst$sym$report_BANG_,cljs.core.cst$sym$report_DASH_hov_BANG_,cljs.core.cst$sym$set_DASH_ref_BANG_,cljs.core.cst$sym$dnd_DASH_fns], null),cljs.core.cst$sym$config,cljs.core.cst$sym$params], null)),cljs.core.cst$kw$arglists,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$config,cljs.core.cst$sym$params], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hov,cljs.core.cst$sym$sel,cljs.core.cst$sym$dispatch_BANG_,cljs.core.cst$sym$report_BANG_,cljs.core.cst$sym$report_DASH_hov_BANG_,cljs.core.cst$sym$set_DASH_ref_BANG_,cljs.core.cst$sym$dnd_DASH_fns], null),cljs.core.cst$sym$config,cljs.core.cst$sym$params], null)),cljs.core.cst$kw$arglists_DASH_meta,cljs.core.list(null,null)], null),4,208,208,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$config,cljs.core.cst$sym$params], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hov,cljs.core.cst$sym$sel,cljs.core.cst$sym$dispatch_BANG_,cljs.core.cst$sym$report_BANG_,cljs.core.cst$sym$report_DASH_hov_BANG_,cljs.core.cst$sym$set_DASH_ref_BANG_,cljs.core.cst$sym$dnd_DASH_fns], null),cljs.core.cst$sym$config,cljs.core.cst$sym$params], null)),null,(cljs.core.truth_(paintscript.render_svg.canvas_paint)?paintscript.render_svg.canvas_paint.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_did_DASH_catch,((function (init17646,ui_init,_BANG_ui,_BANG_sel,_BANG_sel_set,_BANG_config,_BANG_scale,_BANG_params,_BANG_s_log,_BANG_hov,_BANG_tab,_BANG_shell,report_BANG_,dispatch_BANG_,dnd_fns,kb_fns,report_hov_BANG_,_,set_ref_BANG_,with_let17645){
return (function (e,info){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$paint_DASH_error,e], 0));

console.log(e);

var G__17663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$undo], null);
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17663) : dispatch_BANG_.call(null,G__17663));
});})(init17646,ui_init,_BANG_ui,_BANG_sel,_BANG_sel_set,_BANG_config,_BANG_scale,_BANG_params,_BANG_s_log,_BANG_hov,_BANG_tab,_BANG_shell,report_BANG_,dispatch_BANG_,dnd_fns,kb_fns,report_hov_BANG_,_,set_ref_BANG_,with_let17645))
], null))):(with_let17645[(18)]));
var res__7809__auto__ = (function (){var config = cljs.core.deref(_BANG_config);
var params = cljs.core.deref(_BANG_params);
var map__17664 = cljs.core.deref(_BANG_ui);
var map__17664__$1 = (((((!((map__17664 == null))))?(((((map__17664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17664):map__17664);
var sel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17664__$1,cljs.core.cst$kw$sel);
var params_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$script),params], 0)),cljs.core.cst$kw$script,paintscript.els.attach_ii_el_meta_STAR_);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$canvas,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$sidebar$script_DASH_phantom], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.canvas.canvas_sidebar,_BANG_config,_BANG_params,_BANG_ui,_BANG_shell,_BANG_s_log,_BANG_tab,config,params,params_SINGLEQUOTE_,sel,dispatch_BANG_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_paint_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(_BANG_hov),sel,dispatch_BANG_,report_BANG_,report_hov_BANG_,set_ref_BANG_,dnd_fns], null),config,params_SINGLEQUOTE_], null)], null);
})();

return res__7809__auto__;
});
