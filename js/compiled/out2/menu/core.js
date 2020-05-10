// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('menu.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');
goog.require('reagent.core');
goog.require('hiccup_icons.mdi');
goog.require('z_com.util');
menu.core.button_STAR_ = (function menu$core$button_STAR_(p__9078){
var map__9079 = p__9078;
var map__9079__$1 = (((((!((map__9079 == null))))?(((((map__9079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9079):map__9079);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9079__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9079__$1,cljs.core.cst$kw$style);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9079__$1,cljs.core.cst$kw$label);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9079__$1,cljs.core.cst$kw$icon);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9079__$1,cljs.core.cst$kw$on_DASH_click);
var square_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9079__$1,cljs.core.cst$kw$square_QMARK_);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9079__$1,cljs.core.cst$kw$active_QMARK_);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9079__$1,cljs.core.cst$kw$disabled_QMARK_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zc$zc_DASH_button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,style,cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",(cljs.core.truth_(square_QMARK_)?"square ":null),(cljs.core.truth_(active_QMARK_)?"activated ":null),(cljs.core.truth_(disabled_QMARK_)?"disabled":null)].join(''),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(disabled_QMARK_)?((function (map__9079,map__9079__$1,class$,style,label,icon,on_click,square_QMARK_,active_QMARK_,disabled_QMARK_){
return (function (){
return cljs.core.List.EMPTY;
});})(map__9079,map__9079__$1,class$,style,label,icon,on_click,square_QMARK_,active_QMARK_,disabled_QMARK_))
:on_click)], null),(cljs.core.truth_(icon)?(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$icon_DASH_label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$icon,icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$label,label], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$icon,icon], null)):label)], null);
});
menu.core.button = (function menu$core$button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9085 = arguments.length;
var i__4731__auto___9086 = (0);
while(true){
if((i__4731__auto___9086 < len__4730__auto___9085)){
args__4736__auto__.push((arguments[i__4731__auto___9086]));

var G__9087 = (i__4731__auto___9086 + (1));
i__4731__auto___9086 = G__9087;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return menu.core.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

menu.core.button.cljs$core$IFn$_invoke$arity$variadic = (function (p__9082){
var map__9083 = p__9082;
var map__9083__$1 = (((((!((map__9083 == null))))?(((((map__9083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9083):map__9083);
var params = map__9083__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu.core.button_STAR_,params], null);
});

menu.core.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
menu.core.button.cljs$lang$applyTo = (function (seq9081){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9081));
});

menu.core.button_row = (function menu$core$button_row(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9089 = arguments.length;
var i__4731__auto___9090 = (0);
while(true){
if((i__4731__auto___9090 < len__4730__auto___9089)){
args__4736__auto__.push((arguments[i__4731__auto___9090]));

var G__9091 = (i__4731__auto___9090 + (1));
i__4731__auto___9090 = G__9091;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return menu.core.button_row.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

menu.core.button_row.cljs$core$IFn$_invoke$arity$variadic = (function (buttons){
return cljs.core.vec(cljs.core.cons(cljs.core.cst$kw$div$zc$zc_DASH_button_DASH_row,buttons));
});

menu.core.button_row.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
menu.core.button_row.cljs$lang$applyTo = (function (seq9088){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9088));
});

menu.core.button_group = (function menu$core$button_group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9093 = arguments.length;
var i__4731__auto___9094 = (0);
while(true){
if((i__4731__auto___9094 < len__4730__auto___9093)){
args__4736__auto__.push((arguments[i__4731__auto___9094]));

var G__9095 = (i__4731__auto___9094 + (1));
i__4731__auto___9094 = G__9095;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return menu.core.button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

menu.core.button_group.cljs$core$IFn$_invoke$arity$variadic = (function (buttons){
return cljs.core.vec(cljs.core.cons(cljs.core.cst$kw$div$zc$zc_DASH_button_DASH_group,buttons));
});

menu.core.button_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
menu.core.button_group.cljs$lang$applyTo = (function (seq9092){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9092));
});

menu.core.sectionmenu = (function menu$core$sectionmenu(p__9096,p__9097){
var map__9098 = p__9096;
var map__9098__$1 = (((((!((map__9098 == null))))?(((((map__9098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9098):map__9098);
var args_static = map__9098__$1;
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9098__$1,cljs.core.cst$kw$id_DASH_fn);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9098__$1,cljs.core.cst$kw$on_DASH_change);
var map__9099 = p__9097;
var map__9099__$1 = (((((!((map__9099 == null))))?(((((map__9099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9099):map__9099);
var args_live = map__9099__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9099__$1,cljs.core.cst$kw$model);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9099__$1,cljs.core.cst$kw$node);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9099__$1,cljs.core.cst$kw$items);
var map__9102 = node;
var map__9102__$1 = (((((!((map__9102 == null))))?(((((map__9102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9102):map__9102);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9102__$1,cljs.core.cst$kw$label);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zc$zc_DASH_menu_DASH_section,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$zc_DASH_menu_DASH_section_DASH_title,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$zc_DASH_menu_DASH_text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#"], null),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zc_DASH_menu_DASH_items_DASH_container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$zc_DASH_menu_DASH_items,(function (){var iter__4523__auto__ = ((function (map__9102,map__9102__$1,label,map__9098,map__9098__$1,args_static,id_fn,on_change,map__9099,map__9099__$1,args_live,model,node,items){
return (function menu$core$sectionmenu_$_iter__9104(s__9105){
return (new cljs.core.LazySeq(null,((function (map__9102,map__9102__$1,label,map__9098,map__9098__$1,args_static,id_fn,on_change,map__9099,map__9099__$1,args_live,model,node,items){
return (function (){
var s__9105__$1 = s__9105;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__9105__$1);
if(temp__5720__auto__){
var s__9105__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9105__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9105__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9107 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9106 = (0);
while(true){
if((i__9106 < size__4522__auto__)){
var map__9108 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9106);
var map__9108__$1 = (((((!((map__9108 == null))))?(((((map__9108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9108):map__9108);
var item = map__9108__$1;
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9108__$1,cljs.core.cst$kw$label);
cljs.core.chunk_append(b__9107,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$zc_DASH_menu_DASH_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(model,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item))))?"selected":null),cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_change,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$zc_DASH_menu_DASH_text,label__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(item)], null)));

var G__9112 = (i__9106 + (1));
i__9106 = G__9112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9107),menu$core$sectionmenu_$_iter__9104(cljs.core.chunk_rest(s__9105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9107),null);
}
} else {
var map__9110 = cljs.core.first(s__9105__$2);
var map__9110__$1 = (((((!((map__9110 == null))))?(((((map__9110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9110):map__9110);
var item = map__9110__$1;
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9110__$1,cljs.core.cst$kw$label);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$zc_DASH_menu_DASH_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(model,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item))))?"selected":null),cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_change,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$zc_DASH_menu_DASH_text,label__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(item)], null)),menu$core$sectionmenu_$_iter__9104(cljs.core.rest(s__9105__$2)));
}
} else {
return null;
}
break;
}
});})(map__9102,map__9102__$1,label,map__9098,map__9098__$1,args_static,id_fn,on_change,map__9099,map__9099__$1,args_live,model,node,items))
,null,null));
});})(map__9102,map__9102__$1,label,map__9098,map__9098__$1,args_static,id_fn,on_change,map__9099,map__9099__$1,args_live,model,node,items))
;
return iter__4523__auto__(items);
})()], null)], null)], null);
});
menu.core.submenu = (function menu$core$submenu(p__9113,p__9114){
var map__9115 = p__9113;
var map__9115__$1 = (((((!((map__9115 == null))))?(((((map__9115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9115):map__9115);
var args_static = map__9115__$1;
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9115__$1,cljs.core.cst$kw$id_DASH_fn);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9115__$1,cljs.core.cst$kw$on_DASH_change);
var icon_down = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9115__$1,cljs.core.cst$kw$icon_DASH_down,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$zmdi$zmdi_DASH_caret_DASH_up], null));
var icon_up = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9115__$1,cljs.core.cst$kw$icon_DASH_up,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$zmdi$zmdi_DASH_caret_DASH_down], null));
var map__9116 = p__9114;
var map__9116__$1 = (((((!((map__9116 == null))))?(((((map__9116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9116):map__9116);
var args_live = map__9116__$1;
var hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9116__$1,cljs.core.cst$kw$hover_QMARK_);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9116__$1,cljs.core.cst$kw$left);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9116__$1,cljs.core.cst$kw$width);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9116__$1,cljs.core.cst$kw$node);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9116__$1,cljs.core.cst$kw$items);
var with_let9119 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let9119);
var temp__5724__auto___9131 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___9131 == null)){
} else {
var c__7808__auto___9132 = temp__5724__auto___9131;
if((with_let9119.generation === c__7808__auto___9132.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let9119.generation = c__7808__auto___9132.ratomGeneration;
}


var init9120 = (with_let9119.length === (0));
var show_model = ((init9120)?(with_let9119[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let9119[(0)]));
var res__7809__auto__ = (function (){var pd = (0);
var map__9121 = node;
var map__9121__$1 = (((((!((map__9121 == null))))?(((((map__9121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9121):map__9121);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9121__$1,cljs.core.cst$kw$label);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$zc_DASH_menu_DASH_item$parent,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.deref(show_model))?"zc-menu-active":null)], null),(cljs.core.truth_(hover_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (pd,map__9121,map__9121__$1,label,init9120,show_model,with_let9119,map__9115,map__9115__$1,args_static,id_fn,on_change,icon_down,icon_up,map__9116,map__9116__$1,args_live,hover_QMARK_,left,width,node,items){
return (function (){
return cljs.core.reset_BANG_(show_model,true);
});})(pd,map__9121,map__9121__$1,label,init9120,show_model,with_let9119,map__9115,map__9115__$1,args_static,id_fn,on_change,icon_down,icon_up,map__9116,map__9116__$1,args_live,hover_QMARK_,left,width,node,items))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (pd,map__9121,map__9121__$1,label,init9120,show_model,with_let9119,map__9115,map__9115__$1,args_static,id_fn,on_change,icon_down,icon_up,map__9116,map__9116__$1,args_live,hover_QMARK_,left,width,node,items){
return (function (){
return cljs.core.reset_BANG_(show_model,false);
});})(pd,map__9121,map__9121__$1,label,init9120,show_model,with_let9119,map__9115,map__9115__$1,args_static,id_fn,on_change,icon_down,icon_up,map__9116,map__9116__$1,args_live,hover_QMARK_,left,width,node,items))
], null):null)], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$zc_DASH_menu_DASH_text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (pd,map__9121,map__9121__$1,label,init9120,show_model,with_let9119,map__9115,map__9115__$1,args_static,id_fn,on_change,icon_down,icon_up,map__9116,map__9116__$1,args_live,hover_QMARK_,left,width,node,items){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_model,cljs.core.not);
});})(pd,map__9121,map__9121__$1,label,init9120,show_model,with_let9119,map__9115,map__9115__$1,args_static,id_fn,on_change,icon_down,icon_up,map__9116,map__9116__$1,args_live,hover_QMARK_,left,width,node,items))
], null),label," ",(cljs.core.truth_(cljs.core.deref(show_model))?icon_up:icon_down)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zc_DASH_menu_DASH_items_DASH_container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$zc_DASH_menu_DASH_items,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(cljs.core.truth_(width)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1((width + pd)),"px"].join(''):null),cljs.core.cst$kw$left,"100%"], null)], null),(function (){var iter__4523__auto__ = ((function (pd,map__9121,map__9121__$1,label,init9120,show_model,with_let9119,map__9115,map__9115__$1,args_static,id_fn,on_change,icon_down,icon_up,map__9116,map__9116__$1,args_live,hover_QMARK_,left,width,node,items){
return (function menu$core$submenu_$_iter__9123(s__9124){
return (new cljs.core.LazySeq(null,((function (pd,map__9121,map__9121__$1,label,init9120,show_model,with_let9119,map__9115,map__9115__$1,args_static,id_fn,on_change,icon_down,icon_up,map__9116,map__9116__$1,args_live,hover_QMARK_,left,width,node,items){
return (function (){
var s__9124__$1 = s__9124;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__9124__$1);
if(temp__5720__auto__){
var s__9124__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9124__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9124__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9126 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9125 = (0);
while(true){
if((i__9125 < size__4522__auto__)){
var map__9127 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9125);
var map__9127__$1 = (((((!((map__9127 == null))))?(((((map__9127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9127):map__9127);
var item = map__9127__$1;
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9127__$1,cljs.core.cst$kw$label);
cljs.core.chunk_append(b__9126,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$zc_DASH_menu_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_change,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$zc_DASH_menu_DASH_text,label__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(item)], null)));

var G__9133 = (i__9125 + (1));
i__9125 = G__9133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9126),menu$core$submenu_$_iter__9123(cljs.core.chunk_rest(s__9124__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9126),null);
}
} else {
var map__9129 = cljs.core.first(s__9124__$2);
var map__9129__$1 = (((((!((map__9129 == null))))?(((((map__9129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9129):map__9129);
var item = map__9129__$1;
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9129__$1,cljs.core.cst$kw$label);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$zc_DASH_menu_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_change,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$zc_DASH_menu_DASH_text,label__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(item)], null)),menu$core$submenu_$_iter__9123(cljs.core.rest(s__9124__$2)));
}
} else {
return null;
}
break;
}
});})(pd,map__9121,map__9121__$1,label,init9120,show_model,with_let9119,map__9115,map__9115__$1,args_static,id_fn,on_change,icon_down,icon_up,map__9116,map__9116__$1,args_live,hover_QMARK_,left,width,node,items))
,null,null));
});})(pd,map__9121,map__9121__$1,label,init9120,show_model,with_let9119,map__9115,map__9115__$1,args_static,id_fn,on_change,icon_down,icon_up,map__9116,map__9116__$1,args_live,hover_QMARK_,left,width,node,items))
;
return iter__4523__auto__(items);
})()], null)], null)], null);
})();

return res__7809__auto__;
});
menu.core.menu_pure = (function menu$core$menu_pure(p__9137,p__9138){
var map__9139 = p__9137;
var map__9139__$1 = (((((!((map__9139 == null))))?(((((map__9139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9139):map__9139);
var args_static = map__9139__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9139__$1,cljs.core.cst$kw$on_DASH_change);
var icon_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9139__$1,cljs.core.cst$kw$icon_DASH_left);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9139__$1,cljs.core.cst$kw$label_DASH_fn);
var set_show_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9139__$1,cljs.core.cst$kw$set_DASH_show_BANG_);
var title_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9139__$1,cljs.core.cst$kw$title_DASH_fn);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9139__$1,cljs.core.cst$kw$id_DASH_fn);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9139__$1,cljs.core.cst$kw$on_DASH_click);
var icon_right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9139__$1,cljs.core.cst$kw$icon_DASH_right);
var icon_up = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9139__$1,cljs.core.cst$kw$icon_DASH_up);
var icon_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9139__$1,cljs.core.cst$kw$icon_DASH_down);
var map__9140 = p__9138;
var map__9140__$1 = (((((!((map__9140 == null))))?(((((map__9140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9140):map__9140);
var args_live = map__9140__$1;
var show_sel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9140__$1,cljs.core.cst$kw$show_DASH_sel_QMARK_);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9140__$1,cljs.core.cst$kw$items);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9140__$1,cljs.core.cst$kw$disabled_QMARK_);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9140__$1,cljs.core.cst$kw$direction);
var hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9140__$1,cljs.core.cst$kw$hover_QMARK_);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9140__$1,cljs.core.cst$kw$model);
var sizing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9140__$1,cljs.core.cst$kw$sizing);
var animate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9140__$1,cljs.core.cst$kw$animate_QMARK_);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9140__$1,cljs.core.cst$kw$width);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9140__$1,cljs.core.cst$kw$node);
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9140__$1,cljs.core.cst$kw$show_QMARK_);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9140__$1,cljs.core.cst$kw$class);
var c_sel = (function (){var G__9144 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__9139,map__9139__$1,args_static,on_change,icon_left,label_fn,set_show_BANG_,title_fn,id_fn,on_click,icon_right,icon_up,icon_down,map__9140,map__9140__$1,args_live,show_sel_QMARK_,items,disabled_QMARK_,direction,hover_QMARK_,model,sizing,animate_QMARK_,width,node,show_QMARK_,class$){
return (function (p1__9135_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(model,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__9135_SHARP_) : id_fn.call(null,p1__9135_SHARP_)));
});})(map__9139,map__9139__$1,args_static,on_change,icon_left,label_fn,set_show_BANG_,title_fn,id_fn,on_click,icon_right,icon_up,icon_down,map__9140,map__9140__$1,args_live,show_sel_QMARK_,items,disabled_QMARK_,direction,hover_QMARK_,model,sizing,animate_QMARK_,width,node,show_QMARK_,class$))
,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (map__9139,map__9139__$1,args_static,on_change,icon_left,label_fn,set_show_BANG_,title_fn,id_fn,on_click,icon_right,icon_up,icon_down,map__9140,map__9140__$1,args_live,show_sel_QMARK_,items,disabled_QMARK_,direction,hover_QMARK_,model,sizing,animate_QMARK_,width,node,show_QMARK_,class$){
return (function (p1__9134_SHARP_){
if((!(cljs.core.map_QMARK_(p1__9134_SHARP_)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9134_SHARP_], null);
} else {
if(cljs.core.truth_(cljs.core.cst$kw$sec_DASH_menu_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__9134_SHARP_))){
return cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(p1__9134_SHARP_);
} else {
if(cljs.core.truth_(cljs.core.cst$kw$sub_DASH_menu_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__9134_SHARP_))){
return cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(p1__9134_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9134_SHARP_], null);

}
}
}
});})(map__9139,map__9139__$1,args_static,on_change,icon_left,label_fn,set_show_BANG_,title_fn,id_fn,on_click,icon_right,icon_up,icon_down,map__9140,map__9140__$1,args_live,show_sel_QMARK_,items,disabled_QMARK_,direction,hover_QMARK_,model,sizing,animate_QMARK_,width,node,show_QMARK_,class$))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([items], 0))));
var fexpr__9143 = ((function (G__9144,map__9139,map__9139__$1,args_static,on_change,icon_left,label_fn,set_show_BANG_,title_fn,id_fn,on_click,icon_right,icon_up,icon_down,map__9140,map__9140__$1,args_live,show_sel_QMARK_,items,disabled_QMARK_,direction,hover_QMARK_,model,sizing,animate_QMARK_,width,node,show_QMARK_,class$){
return (function (p1__9136_SHARP_){
var or__4131__auto__ = p1__9136_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,"other"], null);
}
});})(G__9144,map__9139,map__9139__$1,args_static,on_change,icon_left,label_fn,set_show_BANG_,title_fn,id_fn,on_click,icon_right,icon_up,icon_down,map__9140,map__9140__$1,args_live,show_sel_QMARK_,items,disabled_QMARK_,direction,hover_QMARK_,model,sizing,animate_QMARK_,width,node,show_QMARK_,class$))
;
return fexpr__9143(G__9144);
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zc$zc_DASH_menu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.name(direction)," ",(function (){var or__4131__auto__ = (function (){var G__9148 = sizing;
if((G__9148 == null)){
return null;
} else {
return cljs.core.name(G__9148);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "uniform-items-plus";
}
})()," ",(cljs.core.truth_(animate_QMARK_)?"animate ":null),(cljs.core.truth_(disabled_QMARK_)?"disabled":null)].join(''),cljs.core.cst$kw$style,(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, ["--width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join('')], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$zc_DASH_menu_DASH_root,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$zc_DASH_menu_DASH_item$parent,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(show_QMARK_)?"zc-menu-active":null)], null),(cljs.core.truth_(hover_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (c_sel,map__9139,map__9139__$1,args_static,on_change,icon_left,label_fn,set_show_BANG_,title_fn,id_fn,on_click,icon_right,icon_up,icon_down,map__9140,map__9140__$1,args_live,show_sel_QMARK_,items,disabled_QMARK_,direction,hover_QMARK_,model,sizing,animate_QMARK_,width,node,show_QMARK_,class$){
return (function (){
return (set_show_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_show_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_show_BANG_.call(null,true));
});})(c_sel,map__9139,map__9139__$1,args_static,on_change,icon_left,label_fn,set_show_BANG_,title_fn,id_fn,on_click,icon_right,icon_up,icon_down,map__9140,map__9140__$1,args_live,show_sel_QMARK_,items,disabled_QMARK_,direction,hover_QMARK_,model,sizing,animate_QMARK_,width,node,show_QMARK_,class$))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (c_sel,map__9139,map__9139__$1,args_static,on_change,icon_left,label_fn,set_show_BANG_,title_fn,id_fn,on_click,icon_right,icon_up,icon_down,map__9140,map__9140__$1,args_live,show_sel_QMARK_,items,disabled_QMARK_,direction,hover_QMARK_,model,sizing,animate_QMARK_,width,node,show_QMARK_,class$){
return (function (){
return (set_show_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_show_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_show_BANG_.call(null,false));
});})(c_sel,map__9139,map__9139__$1,args_static,on_change,icon_left,label_fn,set_show_BANG_,title_fn,id_fn,on_click,icon_right,icon_up,icon_down,map__9140,map__9140__$1,args_live,show_sel_QMARK_,items,disabled_QMARK_,direction,hover_QMARK_,model,sizing,animate_QMARK_,width,node,show_QMARK_,class$))
], null):null)], 0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$zc_DASH_menu_DASH_header,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(disabled_QMARK_)?((function (c_sel,map__9139,map__9139__$1,args_static,on_change,icon_left,label_fn,set_show_BANG_,title_fn,id_fn,on_click,icon_right,icon_up,icon_down,map__9140,map__9140__$1,args_live,show_sel_QMARK_,items,disabled_QMARK_,direction,hover_QMARK_,model,sizing,animate_QMARK_,width,node,show_QMARK_,class$){
return (function (){
return cljs.core.List.EMPTY;
});})(c_sel,map__9139,map__9139__$1,args_static,on_change,icon_left,label_fn,set_show_BANG_,title_fn,id_fn,on_click,icon_right,icon_up,icon_down,map__9140,map__9140__$1,args_live,show_sel_QMARK_,items,disabled_QMARK_,direction,hover_QMARK_,model,sizing,animate_QMARK_,width,node,show_QMARK_,class$))
:on_click)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$zc_DASH_menu_DASH_text,(cljs.core.truth_(show_sel_QMARK_)?(cljs.core.truth_(title_fn)?(title_fn.cljs$core$IFn$_invoke$arity$2 ? title_fn.cljs$core$IFn$_invoke$arity$2(node,c_sel) : title_fn.call(null,node,c_sel)):(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(c_sel) : label_fn.call(null,c_sel))):(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(node) : label_fn.call(null,node)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$zc_DASH_menu_DASH_caret,(function (){var G__9149 = direction;
var G__9149__$1 = (((G__9149 instanceof cljs.core.Keyword))?G__9149.fqn:null);
switch (G__9149__$1) {
case "down":
if(cljs.core.truth_(show_QMARK_)){
return icon_up;
} else {
return icon_down;
}

break;
case "right":
if(cljs.core.truth_(show_QMARK_)){
return icon_left;
} else {
return icon_right;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9149__$1)].join('')));

}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zc_DASH_menu_DASH_items_DASH_container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$zc_DASH_menu_DASH_items,(function (){var iter__4523__auto__ = ((function (c_sel,map__9139,map__9139__$1,args_static,on_change,icon_left,label_fn,set_show_BANG_,title_fn,id_fn,on_click,icon_right,icon_up,icon_down,map__9140,map__9140__$1,args_live,show_sel_QMARK_,items,disabled_QMARK_,direction,hover_QMARK_,model,sizing,animate_QMARK_,width,node,show_QMARK_,class$){
return (function menu$core$menu_pure_$_iter__9150(s__9151){
return (new cljs.core.LazySeq(null,((function (c_sel,map__9139,map__9139__$1,args_static,on_change,icon_left,label_fn,set_show_BANG_,title_fn,id_fn,on_click,icon_right,icon_up,icon_down,map__9140,map__9140__$1,args_live,show_sel_QMARK_,items,disabled_QMARK_,direction,hover_QMARK_,model,sizing,animate_QMARK_,width,node,show_QMARK_,class$){
return (function (){
var s__9151__$1 = s__9151;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__9151__$1);
if(temp__5720__auto__){
var s__9151__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9151__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9151__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9153 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9152 = (0);
while(true){
if((i__9152 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9152);
cljs.core.chunk_append(b__9153,(function (){var map__9154 = ((cljs.core.map_QMARK_(item))?item:null);
var map__9154__$1 = (((((!((map__9154 == null))))?(((((map__9154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9154):map__9154);
var sub_menu_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9154__$1,cljs.core.cst$kw$sub_DASH_menu_QMARK_);
var sec_menu_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9154__$1,cljs.core.cst$kw$sec_DASH_menu_QMARK_);
var args_live_item = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args_live,((cljs.core.map_QMARK_(item))?item:null)], 0));
return cljs.core.with_meta((cljs.core.truth_((label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(item) : label_fn.call(null,item)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$zc_DASH_menu_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(model,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item))))?"selected":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$zc_DASH_menu_DASH_text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_change,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item)))], null),(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(item) : label_fn.call(null,item))], null)], null):(cljs.core.truth_(sec_menu_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$zc_DASH_menu_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu.core.sectionmenu,args_static,args_live_item], null)], null):(cljs.core.truth_(sub_menu_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu.core.submenu,args_static,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(args_live_item,cljs.core.cst$kw$left,width)], null):null))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(item)], null));
})());

var G__9159 = (i__9152 + (1));
i__9152 = G__9159;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9153),menu$core$menu_pure_$_iter__9150(cljs.core.chunk_rest(s__9151__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9153),null);
}
} else {
var item = cljs.core.first(s__9151__$2);
return cljs.core.cons((function (){var map__9156 = ((cljs.core.map_QMARK_(item))?item:null);
var map__9156__$1 = (((((!((map__9156 == null))))?(((((map__9156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9156):map__9156);
var sub_menu_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9156__$1,cljs.core.cst$kw$sub_DASH_menu_QMARK_);
var sec_menu_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9156__$1,cljs.core.cst$kw$sec_DASH_menu_QMARK_);
var args_live_item = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args_live,((cljs.core.map_QMARK_(item))?item:null)], 0));
return cljs.core.with_meta((cljs.core.truth_((label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(item) : label_fn.call(null,item)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$zc_DASH_menu_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(model,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item))))?"selected":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$zc_DASH_menu_DASH_text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_change,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item)))], null),(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(item) : label_fn.call(null,item))], null)], null):(cljs.core.truth_(sec_menu_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$zc_DASH_menu_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu.core.sectionmenu,args_static,args_live_item], null)], null):(cljs.core.truth_(sub_menu_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu.core.submenu,args_static,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(args_live_item,cljs.core.cst$kw$left,width)], null):null))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(item)], null));
})(),menu$core$menu_pure_$_iter__9150(cljs.core.rest(s__9151__$2)));
}
} else {
return null;
}
break;
}
});})(c_sel,map__9139,map__9139__$1,args_static,on_change,icon_left,label_fn,set_show_BANG_,title_fn,id_fn,on_click,icon_right,icon_up,icon_down,map__9140,map__9140__$1,args_live,show_sel_QMARK_,items,disabled_QMARK_,direction,hover_QMARK_,model,sizing,animate_QMARK_,width,node,show_QMARK_,class$))
,null,null));
});})(c_sel,map__9139,map__9139__$1,args_static,on_change,icon_left,label_fn,set_show_BANG_,title_fn,id_fn,on_click,icon_right,icon_up,icon_down,map__9140,map__9140__$1,args_live,show_sel_QMARK_,items,disabled_QMARK_,direction,hover_QMARK_,model,sizing,animate_QMARK_,width,node,show_QMARK_,class$))
;
return iter__4523__auto__(items);
})()], null)], null)], null)], null)], null);
});
menu.core.args_static = (function menu$core$args_static(p__9162){
var map__9163 = p__9162;
var map__9163__$1 = (((((!((map__9163 == null))))?(((((map__9163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9163):map__9163);
var args = map__9163__$1;
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9163__$1,cljs.core.cst$kw$id_DASH_fn);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9163__$1,cljs.core.cst$kw$label_DASH_fn);
var show_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9163__$1,cljs.core.cst$kw$show_DASH_model);
var show_init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9163__$1,cljs.core.cst$kw$show_DASH_init);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9163__$1,cljs.core.cst$kw$on_DASH_change);
var show_model__$1 = (function (){var or__4131__auto__ = show_model;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(show_init);
}
})();
var on_click = ((function (show_model__$1,map__9163,map__9163__$1,args,id_fn,label_fn,show_model,show_init,on_change){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_model__$1,cljs.core.not);
});})(show_model__$1,map__9163,map__9163__$1,args,id_fn,label_fn,show_model,show_init,on_change))
;
var on_change0 = (function (){var or__4131__auto__ = on_change;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,show_model__$1,on_click,map__9163,map__9163__$1,args,id_fn,label_fn,show_model,show_init,on_change){
return (function (p1__9160_SHARP_){
return cljs.core.reset_BANG_(cljs.core.cst$kw$model.cljs$core$IFn$_invoke$arity$1(args),p1__9160_SHARP_);
});
;})(or__4131__auto__,show_model__$1,on_click,map__9163,map__9163__$1,args,id_fn,label_fn,show_model,show_init,on_change))
}
})();
var on_change_SINGLEQUOTE_ = ((function (show_model__$1,on_click,on_change0,map__9163,map__9163__$1,args,id_fn,label_fn,show_model,show_init,on_change){
return (function (id){
(on_change0.cljs$core$IFn$_invoke$arity$1 ? on_change0.cljs$core$IFn$_invoke$arity$1(id) : on_change0.call(null,id));

return cljs.core.reset_BANG_(show_model__$1,false);
});})(show_model__$1,on_click,on_change0,map__9163,map__9163__$1,args,id_fn,label_fn,show_model,show_init,on_change))
;
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$icon_DASH_left,cljs.core.cst$kw$set_DASH_show_BANG_,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$title_DASH_fn,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$icon_DASH_right,cljs.core.cst$kw$icon_DASH_up,cljs.core.cst$kw$icon_DASH_down,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$show_DASH_model],[(function (){var or__4131__auto__ = cljs.core.cst$kw$icon_DASH_left.cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return hiccup_icons.mdi.menu_left;
}
})(),((function (show_model__$1,on_click,on_change0,on_change_SINGLEQUOTE_,map__9163,map__9163__$1,args,id_fn,label_fn,show_model,show_init,on_change){
return (function (p1__9161_SHARP_){
return cljs.core.reset_BANG_(show_model__$1,p1__9161_SHARP_);
});})(show_model__$1,on_click,on_change0,on_change_SINGLEQUOTE_,map__9163,map__9163__$1,args,id_fn,label_fn,show_model,show_init,on_change))
,(function (){var or__4131__auto__ = label_fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,show_model__$1,on_click,on_change0,on_change_SINGLEQUOTE_,map__9163,map__9163__$1,args,id_fn,label_fn,show_model,show_init,on_change){
return (function (item){
if((item instanceof cljs.core.Keyword)){
return cljs.core.name(item);
} else {
if(cljs.core.map_QMARK_(item)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,cljs.core.cst$kw$label);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(item);

}
}
});
;})(or__4131__auto__,show_model__$1,on_click,on_change0,on_change_SINGLEQUOTE_,map__9163,map__9163__$1,args,id_fn,label_fn,show_model,show_init,on_change))
}
})(),cljs.core.cst$kw$title_DASH_fn.cljs$core$IFn$_invoke$arity$1(args),(function (){var or__4131__auto__ = id_fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.identity;
}
})(),on_click,(function (){var or__4131__auto__ = cljs.core.cst$kw$icon_DASH_right.cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return hiccup_icons.mdi.menu_right;
}
})(),(function (){var or__4131__auto__ = cljs.core.cst$kw$icon_DASH_up.cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return hiccup_icons.mdi.menu_up;
}
})(),(function (){var or__4131__auto__ = cljs.core.cst$kw$icon_DASH_down.cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return hiccup_icons.mdi.menu_down;
}
})(),on_change_SINGLEQUOTE_,show_model__$1]);
});
menu.core.args_live = (function menu$core$args_live(args_static,args){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(args,cljs.core.cst$kw$direction,(function (p1__9165_SHARP_){
var or__4131__auto__ = p1__9165_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$down;
}
})),cljs.core.cst$kw$model,(function (p1__9166_SHARP_){
var G__9170 = p1__9166_SHARP_;
if(z_com.util.deref_QMARK_(p1__9166_SHARP_)){
return cljs.core.deref(G__9170);
} else {
return G__9170;
}
})),cljs.core.cst$kw$show_QMARK_,(function (p1__9167_SHARP_){
if((!((p1__9167_SHARP_ == null)))){
return p1__9167_SHARP_;
} else {
return cljs.core.deref(cljs.core.cst$kw$show_DASH_model.cljs$core$IFn$_invoke$arity$1(args_static));
}
})),cljs.core.cst$kw$show_DASH_sel_QMARK_,(function (p1__9168_SHARP_){
if((!((p1__9168_SHARP_ == null)))){
return p1__9168_SHARP_;
} else {
return true;
}
})),cljs.core.cst$kw$disabled_QMARK_,(function (p1__9169_SHARP_){
if((!((p1__9169_SHARP_ == null)))){
return p1__9169_SHARP_;
} else {
return false;
}
}));
});
menu.core.menu_STAR_ = (function menu$core$menu_STAR_(args){
var with_let9171 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let9171);
var temp__5724__auto___9173 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___9173 == null)){
} else {
var c__7808__auto___9174 = temp__5724__auto___9173;
if((with_let9171.generation === c__7808__auto___9174.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let9171.generation = c__7808__auto___9174.ratomGeneration;
}


var init9172 = (with_let9171.length === (0));
var args_static = ((init9172)?(with_let9171[(0)] = menu.core.args_static(args)):(with_let9171[(0)]));
var res__7809__auto__ = (function (){var args_SINGLEQUOTE_ = menu.core.args_live(args_static,args);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu.core.menu_pure,args_static,args_SINGLEQUOTE_], null);
})();

return res__7809__auto__;
});
menu.core.menu = (function menu$core$menu(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9179 = arguments.length;
var i__4731__auto___9180 = (0);
while(true){
if((i__4731__auto___9180 < len__4730__auto___9179)){
args__4736__auto__.push((arguments[i__4731__auto___9180]));

var G__9181 = (i__4731__auto___9180 + (1));
i__4731__auto___9180 = G__9181;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return menu.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

menu.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (p__9176){
var map__9177 = p__9176;
var map__9177__$1 = (((((!((map__9177 == null))))?(((((map__9177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9177):map__9177);
var args = map__9177__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu.core.menu_STAR_,args], null);
});

menu.core.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
menu.core.menu.cljs$lang$applyTo = (function (seq9175){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9175));
});

