// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('xd_table.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
xd_table.core.index_of = (function xd_table$core$index_of(coll,el_search){
return cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__9255){
var vec__9256 = p__9255;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9256,(0),null);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9256,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el_search,el);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll)));
});
xd_table.core.map_vals = (function xd_table$core$map_vals(f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9259){
var vec__9260 = p__9259;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9260,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9260,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
}),coll));
});
xd_table.core.selection_default = (function xd_table$core$selection_default(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9272 = arguments.length;
var i__4731__auto___9273 = (0);
while(true){
if((i__4731__auto___9273 < len__4730__auto___9272)){
args__4736__auto__.push((arguments[i__4731__auto___9273]));

var G__9274 = (i__4731__auto___9273 + (1));
i__4731__auto___9273 = G__9274;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return xd_table.core.selection_default.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

xd_table.core.selection_default.cljs$core$IFn$_invoke$arity$variadic = (function (p__9265){
var map__9266 = p__9265;
var map__9266__$1 = (((((!((map__9266 == null))))?(((((map__9266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9266):map__9266);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9266__$1,cljs.core.cst$kw$model);
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9266__$1,cljs.core.cst$kw$choices);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9266__$1,cljs.core.cst$kw$on_DASH_change);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9266__$1,cljs.core.cst$kw$label_DASH_fn);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,model,cljs.core.cst$kw$on_DASH_change,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(on_change,((function (map__9266,map__9266__$1,model,choices,on_change,label_fn){
return (function (p1__9263_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__9263_SHARP_.target.value);
});})(map__9266,map__9266__$1,model,choices,on_change,label_fn))
)], null),(function (){var iter__4523__auto__ = ((function (map__9266,map__9266__$1,model,choices,on_change,label_fn){
return (function xd_table$core$iter__9268(s__9269){
return (new cljs.core.LazySeq(null,((function (map__9266,map__9266__$1,model,choices,on_change,label_fn){
return (function (){
var s__9269__$1 = s__9269;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__9269__$1);
if(temp__5720__auto__){
var s__9269__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9269__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9269__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9271 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9270 = (0);
while(true){
if((i__9270 < size__4522__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9270);
cljs.core.chunk_append(b__9271,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_change,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(c))], null),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(c)], null)));

var G__9275 = (i__9270 + (1));
i__9270 = G__9275;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9271),xd_table$core$iter__9268(cljs.core.chunk_rest(s__9269__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9271),null);
}
} else {
var c = cljs.core.first(s__9269__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_change,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(c))], null),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(c)], null)),xd_table$core$iter__9268(cljs.core.rest(s__9269__$2)));
}
} else {
return null;
}
break;
}
});})(map__9266,map__9266__$1,model,choices,on_change,label_fn))
,null,null));
});})(map__9266,map__9266__$1,model,choices,on_change,label_fn))
;
return iter__4523__auto__(choices);
})()], null);
});

xd_table.core.selection_default.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
xd_table.core.selection_default.cljs$lang$applyTo = (function (seq9264){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9264));
});

xd_table.core.radio_button_default = (function xd_table$core$radio_button_default(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9280 = arguments.length;
var i__4731__auto___9281 = (0);
while(true){
if((i__4731__auto___9281 < len__4730__auto___9280)){
args__4736__auto__.push((arguments[i__4731__auto___9281]));

var G__9282 = (i__4731__auto___9281 + (1));
i__4731__auto___9281 = G__9282;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return xd_table.core.radio_button_default.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

xd_table.core.radio_button_default.cljs$core$IFn$_invoke$arity$variadic = (function (p__9277){
var map__9278 = p__9277;
var map__9278__$1 = (((((!((map__9278 == null))))?(((((map__9278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9278):map__9278);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9278__$1,cljs.core.cst$kw$model);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9278__$1,cljs.core.cst$kw$value);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9278__$1,cljs.core.cst$kw$label);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9278__$1,cljs.core.cst$kw$on_DASH_change);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$radio_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_change,value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$value,(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),cljs.core.cst$kw$read_DASH_only,true,cljs.core.cst$kw$checked,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(model,value))?"checked":false)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,label], null)], null);
});

xd_table.core.radio_button_default.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
xd_table.core.radio_button_default.cljs$lang$applyTo = (function (seq9276){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9276));
});

xd_table.core.xd_table_pure = (function xd_table$core$xd_table_pure(p__9287,p__9288){
var map__9289 = p__9287;
var map__9289__$1 = (((((!((map__9289 == null))))?(((((map__9289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9289):map__9289);
var cell_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9289__$1,cljs.core.cst$kw$cell_DASH_fn);
var dim_yz_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9289__$1,cljs.core.cst$kw$dim_DASH_yz_QMARK_);
var dim_xz_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9289__$1,cljs.core.cst$kw$dim_DASH_xz_QMARK_);
var dims = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9289__$1,cljs.core.cst$kw$dims);
var selectors_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9289__$1,cljs.core.cst$kw$selectors_QMARK_,true);
var selection_com = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9289__$1,cljs.core.cst$kw$selection_DASH_com,xd_table.core.selection_default);
var radio_button_com = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9289__$1,cljs.core.cst$kw$radio_DASH_button_DASH_com,xd_table.core.radio_button_default);
var map__9290 = p__9288;
var map__9290__$1 = (((((!((map__9290 == null))))?(((((map__9290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9290):map__9290);
var radio_on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9290__$1,cljs.core.cst$kw$radio_DASH_on_DASH_change);
var dim_yz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9290__$1,cljs.core.cst$kw$dim_DASH_yz);
var dim_yz_on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9290__$1,cljs.core.cst$kw$dim_DASH_yz_DASH_on_DASH_change);
var dim_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9290__$1,cljs.core.cst$kw$dim_DASH_y);
var dim_xz_on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9290__$1,cljs.core.cst$kw$dim_DASH_xz_DASH_on_DASH_change);
var radio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9290__$1,cljs.core.cst$kw$radio);
var dim_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9290__$1,cljs.core.cst$kw$dim_DASH_x);
var dim_y_on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9290__$1,cljs.core.cst$kw$dim_DASH_y_DASH_on_DASH_change);
var dim_xz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9290__$1,cljs.core.cst$kw$dim_DASH_xz);
var dim_x_on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9290__$1,cljs.core.cst$kw$dim_DASH_x_DASH_on_DASH_change);
var map__9293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_x);
var map__9293__$1 = (((((!((map__9293 == null))))?(((((map__9293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9293):map__9293);
var vals_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9293__$1,cljs.core.cst$kw$vals);
var header_x_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9293__$1,cljs.core.cst$kw$header_QMARK_);
var dim_l_fn_x = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9293__$1,cljs.core.cst$kw$dim_DASH_label_DASH_fn,cljs.core.cst$kw$id);
var dim_val_l_fn_x = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9293__$1,cljs.core.cst$kw$dim_DASH_val_DASH_label_DASH_fn,cljs.core.str);
var map__9294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_y);
var map__9294__$1 = (((((!((map__9294 == null))))?(((((map__9294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9294):map__9294);
var vals_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9294__$1,cljs.core.cst$kw$vals);
var header_y_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9294__$1,cljs.core.cst$kw$header_QMARK_);
var dim_l_fn_y = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9294__$1,cljs.core.cst$kw$dim_DASH_label_DASH_fn,cljs.core.cst$kw$id);
var dim_val_l_fn_y = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9294__$1,cljs.core.cst$kw$dim_DASH_val_DASH_label_DASH_fn,cljs.core.str);
var map__9295 = (function (){var G__9299 = dim_yz;
if((G__9299 == null)){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,G__9299);
}
})();
var map__9295__$1 = (((((!((map__9295 == null))))?(((((map__9295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9295):map__9295);
var vals_yz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9295__$1,cljs.core.cst$kw$vals);
var header_yz_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9295__$1,cljs.core.cst$kw$header_QMARK_);
var dim_l_fn_yz = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9295__$1,cljs.core.cst$kw$dim_DASH_label_DASH_fn,cljs.core.cst$kw$id);
var dim_val_l_fn_yz = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9295__$1,cljs.core.cst$kw$dim_DASH_val_DASH_label_DASH_fn,cljs.core.str);
var dim_yz_active_QMARK_ = (function (){var and__4120__auto__ = dim_yz_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return dim_yz;
} else {
return and__4120__auto__;
}
})();
var map__9296 = (function (){var G__9301 = dim_xz;
if((G__9301 == null)){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,G__9301);
}
})();
var map__9296__$1 = (((((!((map__9296 == null))))?(((((map__9296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9296):map__9296);
var vals_xz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9296__$1,cljs.core.cst$kw$vals);
var header_xz_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9296__$1,cljs.core.cst$kw$header_QMARK_);
var dim_l_fn_xz = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9296__$1,cljs.core.cst$kw$dim_DASH_label_DASH_fn,cljs.core.cst$kw$id);
var dim_val_l_fn_xz = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9296__$1,cljs.core.cst$kw$dim_DASH_val_DASH_label_DASH_fn,cljs.core.str);
var dim_xz_active_QMARK_ = (function (){var and__4120__auto__ = dim_xz_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return dim_xz;
} else {
return and__4120__auto__;
}
})();
var extra_dims = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (p__9303){
var vec__9304 = p__9303;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9304,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9304,(1),null);
return (!(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([dim_yz,dim_y,dim_x,dim_xz]),i)));
});})(map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,dims))));
var extra_dim_vals = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (p__9307){
var map__9308 = p__9307;
var map__9308__$1 = (((((!((map__9308 == null))))?(((((map__9308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9308):map__9308);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9308__$1,cljs.core.cst$kw$id);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(radio,id);
});})(map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,extra_dims)));
var colspan_empty = (cljs.core.truth_((function (){var and__4120__auto__ = header_y_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return selectors_QMARK_;
} else {
return and__4120__auto__;
}
})())?(2):(cljs.core.truth_(header_y_QMARK_)?(1):(0)
));
var colspan_x = (function (){var G__9310 = cljs.core.count(vals_x);
if(cljs.core.truth_(dim_xz_active_QMARK_)){
return (G__9310 * cljs.core.count(vals_xz));
} else {
return G__9310;
}
})();
var dim_x_selector = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_com,cljs.core.cst$kw$model,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_x)),cljs.core.cst$kw$choices,dims,cljs.core.cst$kw$on_DASH_change,((function (map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (p1__9283_SHARP_){
var G__9311 = xd_table.core.index_of(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,dims),p1__9283_SHARP_);
return (dim_x_on_change.cljs$core$IFn$_invoke$arity$1 ? dim_x_on_change.cljs$core$IFn$_invoke$arity$1(G__9311) : dim_x_on_change.call(null,G__9311));
});})(map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,cljs.core.cst$kw$label_DASH_fn,dim_l_fn_x], null);
var dim_y_selector = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_com,cljs.core.cst$kw$model,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_y)),cljs.core.cst$kw$choices,dims,cljs.core.cst$kw$on_DASH_change,((function (map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (p1__9284_SHARP_){
var G__9312 = xd_table.core.index_of(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,dims),p1__9284_SHARP_);
return (dim_y_on_change.cljs$core$IFn$_invoke$arity$1 ? dim_y_on_change.cljs$core$IFn$_invoke$arity$1(G__9312) : dim_y_on_change.call(null,G__9312));
});})(map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,cljs.core.cst$kw$label_DASH_fn,dim_l_fn_y], null);
var dim_yz_selector = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_com,cljs.core.cst$kw$model,(cljs.core.truth_(dim_yz)?cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_yz)):cljs.core.cst$kw$none),cljs.core.cst$kw$choices,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dims,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$none], null)),cljs.core.cst$kw$on_DASH_change,((function (map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (p1__9285_SHARP_){
var G__9313 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$none,p1__9285_SHARP_))?null:xd_table.core.index_of(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,dims),p1__9285_SHARP_));
return (dim_yz_on_change.cljs$core$IFn$_invoke$arity$1 ? dim_yz_on_change.cljs$core$IFn$_invoke$arity$1(G__9313) : dim_yz_on_change.call(null,G__9313));
});})(map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,cljs.core.cst$kw$label_DASH_fn,dim_l_fn_yz], null);
var dim_xz_selector = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_com,cljs.core.cst$kw$model,(cljs.core.truth_(dim_xz)?cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_xz)):cljs.core.cst$kw$none),cljs.core.cst$kw$choices,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dims,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$none], null)),cljs.core.cst$kw$on_DASH_change,((function (map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (p1__9286_SHARP_){
var G__9314 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$none,p1__9286_SHARP_))?null:xd_table.core.index_of(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,dims),p1__9286_SHARP_));
return (dim_xz_on_change.cljs$core$IFn$_invoke$arity$1 ? dim_xz_on_change.cljs$core$IFn$_invoke$arity$1(G__9314) : dim_xz_on_change.call(null,G__9314));
});})(map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,cljs.core.cst$kw$label_DASH_fn,dim_l_fn_xz], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zc_DASH_xd_DASH_table,((cljs.core.seq(extra_dims))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$extra_DASH_dims,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function xd_table$core$xd_table_pure_$_iter__9315(s__9316){
return (new cljs.core.LazySeq(null,((function (map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (){
var s__9316__$1 = s__9316;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__9316__$1);
if(temp__5720__auto__){
var s__9316__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9316__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9316__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9318 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9317 = (0);
while(true){
if((i__9317 < size__4522__auto__)){
var map__9319 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9317);
var map__9319__$1 = (((((!((map__9319 == null))))?(((((map__9319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9319):map__9319);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9319__$1,cljs.core.cst$kw$id);
var dim_val_label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9319__$1,cljs.core.cst$kw$dim_DASH_val_DASH_label_DASH_fn,cljs.core.str);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9319__$1,cljs.core.cst$kw$vals);
cljs.core.chunk_append(b__9318,(function (){var r_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(radio,id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$extra_DASH_dim,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$name,id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$vals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$val,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [radio_button_com,cljs.core.cst$kw$model,r_val,cljs.core.cst$kw$value,null,cljs.core.cst$kw$label,"none",cljs.core.cst$kw$on_DASH_change,((function (i__9317,r_val,map__9319,map__9319__$1,id,dim_val_label_fn,vals,c__4521__auto__,size__4522__auto__,b__9318,s__9316__$2,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (){
return (radio_on_change.cljs$core$IFn$_invoke$arity$2 ? radio_on_change.cljs$core$IFn$_invoke$arity$2(id,null) : radio_on_change.call(null,id,null));
});})(i__9317,r_val,map__9319,map__9319__$1,id,dim_val_label_fn,vals,c__4521__auto__,size__4522__auto__,b__9318,s__9316__$2,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
], null)], null),(function (){var iter__4523__auto__ = ((function (i__9317,r_val,map__9319,map__9319__$1,id,dim_val_label_fn,vals,c__4521__auto__,size__4522__auto__,b__9318,s__9316__$2,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function xd_table$core$xd_table_pure_$_iter__9315_$_iter__9321(s__9322){
return (new cljs.core.LazySeq(null,((function (i__9317,r_val,map__9319,map__9319__$1,id,dim_val_label_fn,vals,c__4521__auto__,size__4522__auto__,b__9318,s__9316__$2,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (){
var s__9322__$1 = s__9322;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__9322__$1);
if(temp__5720__auto____$1){
var s__9322__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9322__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__9322__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__9324 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__9323 = (0);
while(true){
if((i__9323 < size__4522__auto____$1)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__9323);
cljs.core.chunk_append(b__9324,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$val,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [radio_button_com,cljs.core.cst$kw$model,r_val,cljs.core.cst$kw$value,v,cljs.core.cst$kw$label,(dim_val_label_fn.cljs$core$IFn$_invoke$arity$1 ? dim_val_label_fn.cljs$core$IFn$_invoke$arity$1(v) : dim_val_label_fn.call(null,v)),cljs.core.cst$kw$on_DASH_change,((function (i__9323,i__9317,v,c__4521__auto____$1,size__4522__auto____$1,b__9324,s__9322__$2,temp__5720__auto____$1,r_val,map__9319,map__9319__$1,id,dim_val_label_fn,vals,c__4521__auto__,size__4522__auto__,b__9318,s__9316__$2,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (){
return (radio_on_change.cljs$core$IFn$_invoke$arity$2 ? radio_on_change.cljs$core$IFn$_invoke$arity$2(id,v) : radio_on_change.call(null,id,v));
});})(i__9323,i__9317,v,c__4521__auto____$1,size__4522__auto____$1,b__9324,s__9322__$2,temp__5720__auto____$1,r_val,map__9319,map__9319__$1,id,dim_val_label_fn,vals,c__4521__auto__,size__4522__auto__,b__9318,s__9316__$2,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(v)], null)));

var G__9412 = (i__9323 + (1));
i__9323 = G__9412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9324),xd_table$core$xd_table_pure_$_iter__9315_$_iter__9321(cljs.core.chunk_rest(s__9322__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9324),null);
}
} else {
var v = cljs.core.first(s__9322__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$val,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [radio_button_com,cljs.core.cst$kw$model,r_val,cljs.core.cst$kw$value,v,cljs.core.cst$kw$label,(dim_val_label_fn.cljs$core$IFn$_invoke$arity$1 ? dim_val_label_fn.cljs$core$IFn$_invoke$arity$1(v) : dim_val_label_fn.call(null,v)),cljs.core.cst$kw$on_DASH_change,((function (i__9317,v,s__9322__$2,temp__5720__auto____$1,r_val,map__9319,map__9319__$1,id,dim_val_label_fn,vals,c__4521__auto__,size__4522__auto__,b__9318,s__9316__$2,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (){
return (radio_on_change.cljs$core$IFn$_invoke$arity$2 ? radio_on_change.cljs$core$IFn$_invoke$arity$2(id,v) : radio_on_change.call(null,id,v));
});})(i__9317,v,s__9322__$2,temp__5720__auto____$1,r_val,map__9319,map__9319__$1,id,dim_val_label_fn,vals,c__4521__auto__,size__4522__auto__,b__9318,s__9316__$2,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(v)], null)),xd_table$core$xd_table_pure_$_iter__9315_$_iter__9321(cljs.core.rest(s__9322__$2)));
}
} else {
return null;
}
break;
}
});})(i__9317,r_val,map__9319,map__9319__$1,id,dim_val_label_fn,vals,c__4521__auto__,size__4522__auto__,b__9318,s__9316__$2,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,null,null));
});})(i__9317,r_val,map__9319,map__9319__$1,id,dim_val_label_fn,vals,c__4521__auto__,size__4522__auto__,b__9318,s__9316__$2,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
;
return iter__4523__auto__(vals);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["extra-dim-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null));
})());

var G__9413 = (i__9317 + (1));
i__9317 = G__9413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9318),xd_table$core$xd_table_pure_$_iter__9315(cljs.core.chunk_rest(s__9316__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9318),null);
}
} else {
var map__9325 = cljs.core.first(s__9316__$2);
var map__9325__$1 = (((((!((map__9325 == null))))?(((((map__9325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9325):map__9325);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9325__$1,cljs.core.cst$kw$id);
var dim_val_label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9325__$1,cljs.core.cst$kw$dim_DASH_val_DASH_label_DASH_fn,cljs.core.str);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9325__$1,cljs.core.cst$kw$vals);
return cljs.core.cons((function (){var r_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(radio,id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$extra_DASH_dim,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$name,id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$vals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$val,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [radio_button_com,cljs.core.cst$kw$model,r_val,cljs.core.cst$kw$value,null,cljs.core.cst$kw$label,"none",cljs.core.cst$kw$on_DASH_change,((function (r_val,map__9325,map__9325__$1,id,dim_val_label_fn,vals,s__9316__$2,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (){
return (radio_on_change.cljs$core$IFn$_invoke$arity$2 ? radio_on_change.cljs$core$IFn$_invoke$arity$2(id,null) : radio_on_change.call(null,id,null));
});})(r_val,map__9325,map__9325__$1,id,dim_val_label_fn,vals,s__9316__$2,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
], null)], null),(function (){var iter__4523__auto__ = ((function (r_val,map__9325,map__9325__$1,id,dim_val_label_fn,vals,s__9316__$2,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function xd_table$core$xd_table_pure_$_iter__9315_$_iter__9327(s__9328){
return (new cljs.core.LazySeq(null,((function (r_val,map__9325,map__9325__$1,id,dim_val_label_fn,vals,s__9316__$2,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (){
var s__9328__$1 = s__9328;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__9328__$1);
if(temp__5720__auto____$1){
var s__9328__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9328__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9328__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9330 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9329 = (0);
while(true){
if((i__9329 < size__4522__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9329);
cljs.core.chunk_append(b__9330,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$val,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [radio_button_com,cljs.core.cst$kw$model,r_val,cljs.core.cst$kw$value,v,cljs.core.cst$kw$label,(dim_val_label_fn.cljs$core$IFn$_invoke$arity$1 ? dim_val_label_fn.cljs$core$IFn$_invoke$arity$1(v) : dim_val_label_fn.call(null,v)),cljs.core.cst$kw$on_DASH_change,((function (i__9329,v,c__4521__auto__,size__4522__auto__,b__9330,s__9328__$2,temp__5720__auto____$1,r_val,map__9325,map__9325__$1,id,dim_val_label_fn,vals,s__9316__$2,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (){
return (radio_on_change.cljs$core$IFn$_invoke$arity$2 ? radio_on_change.cljs$core$IFn$_invoke$arity$2(id,v) : radio_on_change.call(null,id,v));
});})(i__9329,v,c__4521__auto__,size__4522__auto__,b__9330,s__9328__$2,temp__5720__auto____$1,r_val,map__9325,map__9325__$1,id,dim_val_label_fn,vals,s__9316__$2,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(v)], null)));

var G__9414 = (i__9329 + (1));
i__9329 = G__9414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9330),xd_table$core$xd_table_pure_$_iter__9315_$_iter__9327(cljs.core.chunk_rest(s__9328__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9330),null);
}
} else {
var v = cljs.core.first(s__9328__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$val,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [radio_button_com,cljs.core.cst$kw$model,r_val,cljs.core.cst$kw$value,v,cljs.core.cst$kw$label,(dim_val_label_fn.cljs$core$IFn$_invoke$arity$1 ? dim_val_label_fn.cljs$core$IFn$_invoke$arity$1(v) : dim_val_label_fn.call(null,v)),cljs.core.cst$kw$on_DASH_change,((function (v,s__9328__$2,temp__5720__auto____$1,r_val,map__9325,map__9325__$1,id,dim_val_label_fn,vals,s__9316__$2,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (){
return (radio_on_change.cljs$core$IFn$_invoke$arity$2 ? radio_on_change.cljs$core$IFn$_invoke$arity$2(id,v) : radio_on_change.call(null,id,v));
});})(v,s__9328__$2,temp__5720__auto____$1,r_val,map__9325,map__9325__$1,id,dim_val_label_fn,vals,s__9316__$2,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(v)], null)),xd_table$core$xd_table_pure_$_iter__9315_$_iter__9327(cljs.core.rest(s__9328__$2)));
}
} else {
return null;
}
break;
}
});})(r_val,map__9325,map__9325__$1,id,dim_val_label_fn,vals,s__9316__$2,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,null,null));
});})(r_val,map__9325,map__9325__$1,id,dim_val_label_fn,vals,s__9316__$2,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
;
return iter__4523__auto__(vals);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["extra-dim-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null));
})(),xd_table$core$xd_table_pure_$_iter__9315(cljs.core.rest(s__9316__$2)));
}
} else {
return null;
}
break;
}
});})(map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,null,null));
});})(map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
;
return iter__4523__auto__(extra_dims);
})())], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,(cljs.core.truth_((function (){var and__4120__auto__ = header_x_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return selectors_QMARK_;
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,(cljs.core.truth_(header_y_QMARK_)?(cljs.core.truth_((function (){var or__4131__auto__ = dim_yz_active_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not(dim_yz_QMARK_);
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$empty,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$col_DASH_span,colspan_empty], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$empty$header_DASH_yz,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$col_DASH_span,colspan_empty], null),dim_yz_selector], null)):null),(cljs.core.truth_((function (){var and__4120__auto__ = header_yz_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return dim_yz_active_QMARK_;
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$header_DASH_yz,dim_yz_selector], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$header_DASH_x,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$col_DASH_span,colspan_x], null),dim_x_selector], null)], null):null),(cljs.core.truth_(header_x_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,((cljs.core.not(header_y_QMARK_))?null:(cljs.core.truth_((function (){var and__4120__auto__ = dim_xz_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(dim_xz_active_QMARK_);
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$empty$header_DASH_yz_DASH_col,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$col_DASH_span,colspan_empty], null),dim_xz_selector], null):(cljs.core.truth_((function (){var and__4120__auto__ = dim_yz_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(dim_yz_active_QMARK_);
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$empty$header_DASH_yz_DASH_col,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$col_DASH_span,colspan_empty], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$empty,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$col_DASH_span,colspan_empty], null)], null)
))),(cljs.core.truth_(dim_yz_active_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$header_DASH_yz_DASH_col], null):null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function xd_table$core$xd_table_pure_$_iter__9331(s__9332){
return (new cljs.core.LazySeq(null,((function (map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (){
var s__9332__$1 = s__9332;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__9332__$1);
if(temp__5720__auto__){
var s__9332__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9332__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9332__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9334 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9333 = (0);
while(true){
if((i__9333 < size__4522__auto__)){
var val_x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9333);
cljs.core.chunk_append(b__9334,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$header_DASH_x_DASH_col,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$col_DASH_span,(function (){var G__9335 = (1);
if(cljs.core.truth_(dim_xz_active_QMARK_)){
return (G__9335 * cljs.core.count(vals_xz));
} else {
return G__9335;
}
})()], null),(dim_val_l_fn_x.cljs$core$IFn$_invoke$arity$1 ? dim_val_l_fn_x.cljs$core$IFn$_invoke$arity$1(val_x) : dim_val_l_fn_x.call(null,val_x))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(val_x))].join('')], null)));

var G__9415 = (i__9333 + (1));
i__9333 = G__9415;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9334),xd_table$core$xd_table_pure_$_iter__9331(cljs.core.chunk_rest(s__9332__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9334),null);
}
} else {
var val_x = cljs.core.first(s__9332__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$header_DASH_x_DASH_col,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$col_DASH_span,(function (){var G__9336 = (1);
if(cljs.core.truth_(dim_xz_active_QMARK_)){
return (G__9336 * cljs.core.count(vals_xz));
} else {
return G__9336;
}
})()], null),(dim_val_l_fn_x.cljs$core$IFn$_invoke$arity$1 ? dim_val_l_fn_x.cljs$core$IFn$_invoke$arity$1(val_x) : dim_val_l_fn_x.call(null,val_x))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(val_x))].join('')], null)),xd_table$core$xd_table_pure_$_iter__9331(cljs.core.rest(s__9332__$2)));
}
} else {
return null;
}
break;
}
});})(map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,null,null));
});})(map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
;
return iter__4523__auto__(vals_x);
})())], null):null),(cljs.core.truth_((function (){var and__4120__auto__ = header_xz_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return dim_xz_active_QMARK_;
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$header_DASH_xz,dim_xz_selector], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$header_DASH_xz$col], null),(cljs.core.truth_(dim_yz_active_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$header_DASH_xz$col], null):null),(function (){var iter__4523__auto__ = ((function (map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function xd_table$core$xd_table_pure_$_iter__9337(s__9338){
return (new cljs.core.LazySeq(null,((function (map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (){
var s__9338__$1 = s__9338;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__9338__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var val_x = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__9338__$1,val_x,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function xd_table$core$xd_table_pure_$_iter__9337_$_iter__9339(s__9340){
return (new cljs.core.LazySeq(null,((function (s__9338__$1,val_x,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (){
var s__9340__$1 = s__9340;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__9340__$1);
if(temp__5720__auto____$1){
var s__9340__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9340__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9340__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9342 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9341 = (0);
while(true){
if((i__9341 < size__4522__auto__)){
var val_xz = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9341);
cljs.core.chunk_append(b__9342,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$header_DASH_xz$col,(dim_val_l_fn_xz.cljs$core$IFn$_invoke$arity$1 ? dim_val_l_fn_xz.cljs$core$IFn$_invoke$arity$1(val_xz) : dim_val_l_fn_xz.call(null,val_xz))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(val_x)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(val_xz))].join('')], null)));

var G__9416 = (i__9341 + (1));
i__9341 = G__9416;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9342),xd_table$core$xd_table_pure_$_iter__9337_$_iter__9339(cljs.core.chunk_rest(s__9340__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9342),null);
}
} else {
var val_xz = cljs.core.first(s__9340__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$header_DASH_xz$col,(dim_val_l_fn_xz.cljs$core$IFn$_invoke$arity$1 ? dim_val_l_fn_xz.cljs$core$IFn$_invoke$arity$1(val_xz) : dim_val_l_fn_xz.call(null,val_xz))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(val_x)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(val_xz))].join('')], null)),xd_table$core$xd_table_pure_$_iter__9337_$_iter__9339(cljs.core.rest(s__9340__$2)));
}
} else {
return null;
}
break;
}
});})(s__9338__$1,val_x,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,null,null));
});})(s__9338__$1,val_x,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(vals_xz));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,xd_table$core$xd_table_pure_$_iter__9337(cljs.core.rest(s__9338__$1)));
} else {
var G__9417 = cljs.core.rest(s__9338__$1);
s__9338__$1 = G__9417;
continue;
}
} else {
return null;
}
break;
}
});})(map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,null,null));
});})(map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
;
return iter__4523__auto__(vals_x);
})()], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function xd_table$core$xd_table_pure_$_iter__9343(s__9344){
return (new cljs.core.LazySeq(null,((function (map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (){
var s__9344__$1 = s__9344;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__9344__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__9349 = cljs.core.first(xs__6277__auto__);
var y_i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9349,(0),null);
var val_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9349,(1),null);
var iterys__4519__auto__ = ((function (s__9344__$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function xd_table$core$xd_table_pure_$_iter__9343_$_iter__9345(s__9346){
return (new cljs.core.LazySeq(null,((function (s__9344__$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (){
var s__9346__$1 = s__9346;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__9346__$1);
if(temp__5720__auto____$1){
var s__9346__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9346__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9346__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9348 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9347 = (0);
while(true){
if((i__9347 < size__4522__auto__)){
var vec__9352 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9347);
var yz_i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9352,(0),null);
var val_yz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9352,(1),null);
if(cljs.core.truth_((function (){var or__4131__auto__ = dim_yz;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),yz_i);
}
})())){
cljs.core.chunk_append(b__9348,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,(cljs.core.truth_((function (){var and__4120__auto__ = header_y_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = selectors_QMARK_;
if(cljs.core.truth_(and__4120__auto____$1)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val_y,cljs.core.first(vals_y))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),yz_i)));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$header_DASH_y,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$row_DASH_span,(cljs.core.count(vals_y) * (cljs.core.truth_(dim_yz)?cljs.core.count(vals_yz):(1)))], null),dim_y_selector], null):null),(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.not(header_y_QMARK_);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = dim_yz;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),yz_i);
} else {
return and__4120__auto__;
}
}
})())?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$header_DASH_y_DASH_row,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val_y,cljs.core.last(vals_y)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"last"], null):null),(cljs.core.truth_(dim_yz)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$row_DASH_span,cljs.core.count(vals_yz)], null):null)], 0)),(dim_val_l_fn_y.cljs$core$IFn$_invoke$arity$1 ? dim_val_l_fn_y.cljs$core$IFn$_invoke$arity$1(val_y) : dim_val_l_fn_y.call(null,val_y))], null)),(cljs.core.truth_((function (){var and__4120__auto__ = header_yz_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return dim_yz;
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$header_DASH_yz_DASH_row,(dim_val_l_fn_yz.cljs$core$IFn$_invoke$arity$1 ? dim_val_l_fn_yz.cljs$core$IFn$_invoke$arity$1(val_yz) : dim_val_l_fn_yz.call(null,val_yz))], null):null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (i__9347,s__9346__$1,s__9344__$1,vec__9352,yz_i,val_yz,c__4521__auto__,size__4522__auto__,b__9348,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function xd_table$core$xd_table_pure_$_iter__9343_$_iter__9345_$_iter__9355(s__9356){
return (new cljs.core.LazySeq(null,((function (i__9347,s__9346__$1,s__9344__$1,vec__9352,yz_i,val_yz,c__4521__auto__,size__4522__auto__,b__9348,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (){
var s__9356__$1 = s__9356;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__9356__$1);
if(temp__5720__auto____$2){
var xs__6277__auto____$1 = temp__5720__auto____$2;
var vec__9361 = cljs.core.first(xs__6277__auto____$1);
var x_i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9361,(0),null);
var val_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9361,(1),null);
var iterys__4519__auto__ = ((function (s__9356__$1,i__9347,s__9346__$1,s__9344__$1,vec__9361,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9352,yz_i,val_yz,c__4521__auto__,size__4522__auto__,b__9348,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function xd_table$core$xd_table_pure_$_iter__9343_$_iter__9345_$_iter__9355_$_iter__9357(s__9358){
return (new cljs.core.LazySeq(null,((function (s__9356__$1,i__9347,s__9346__$1,s__9344__$1,vec__9361,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9352,yz_i,val_yz,c__4521__auto__,size__4522__auto__,b__9348,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (){
var s__9358__$1 = s__9358;
while(true){
var temp__5720__auto____$3 = cljs.core.seq(s__9358__$1);
if(temp__5720__auto____$3){
var s__9358__$2 = temp__5720__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__9358__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__9358__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__9360 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__9359 = (0);
while(true){
if((i__9359 < size__4522__auto____$1)){
var vec__9364 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__9359);
var xz_i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9364,(0),null);
var val_xz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9364,(1),null);
if(cljs.core.truth_((function (){var or__4131__auto__ = dim_xz;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),xz_i);
}
})())){
cljs.core.chunk_append(b__9360,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_fn,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_x)),val_x,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_y)),val_y]),(cljs.core.truth_((function (){var and__4120__auto__ = dim_yz;
if(cljs.core.truth_(and__4120__auto__)){
return dim_yz_QMARK_;
} else {
return and__4120__auto__;
}
})())?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_yz)),val_yz]):null),(cljs.core.truth_((function (){var and__4120__auto__ = dim_xz;
if(cljs.core.truth_(and__4120__auto__)){
return dim_xz_QMARK_;
} else {
return and__4120__auto__;
}
})())?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_xz)),val_xz]):null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__9359,s__9358__$1,s__9356__$1,i__9347,s__9346__$1,s__9344__$1,vec__9364,xz_i,val_xz,c__4521__auto____$1,size__4522__auto____$1,b__9360,s__9358__$2,temp__5720__auto____$3,vec__9361,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9352,yz_i,val_yz,c__4521__auto__,size__4522__auto__,b__9348,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (p__9367){
var map__9368 = p__9367;
var map__9368__$1 = (((((!((map__9368 == null))))?(((((map__9368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9368):map__9368);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9368__$1,cljs.core.cst$kw$id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(radio,id)], null);
});})(i__9359,s__9358__$1,s__9356__$1,i__9347,s__9346__$1,s__9344__$1,vec__9364,xz_i,val_xz,c__4521__auto____$1,size__4522__auto____$1,b__9360,s__9358__$2,temp__5720__auto____$3,vec__9361,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9352,yz_i,val_yz,c__4521__auto__,size__4522__auto__,b__9348,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__9359,s__9358__$1,s__9356__$1,i__9347,s__9346__$1,s__9344__$1,vec__9364,xz_i,val_xz,c__4521__auto____$1,size__4522__auto____$1,b__9360,s__9358__$2,temp__5720__auto____$3,vec__9361,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9352,yz_i,val_yz,c__4521__auto__,size__4522__auto__,b__9348,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (p__9370){
var map__9371 = p__9370;
var map__9371__$1 = (((((!((map__9371 == null))))?(((((map__9371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9371):map__9371);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9371__$1,cljs.core.cst$kw$id);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(radio,id);
});})(i__9359,s__9358__$1,s__9356__$1,i__9347,s__9346__$1,s__9344__$1,vec__9364,xz_i,val_xz,c__4521__auto____$1,size__4522__auto____$1,b__9360,s__9358__$2,temp__5720__auto____$3,vec__9361,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9352,yz_i,val_yz,c__4521__auto__,size__4522__auto__,b__9348,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,extra_dims)))], 0))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_i),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xz_i)].join('')], null)));

var G__9418 = (i__9359 + (1));
i__9359 = G__9418;
continue;
} else {
var G__9419 = (i__9359 + (1));
i__9359 = G__9419;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9360),xd_table$core$xd_table_pure_$_iter__9343_$_iter__9345_$_iter__9355_$_iter__9357(cljs.core.chunk_rest(s__9358__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9360),null);
}
} else {
var vec__9373 = cljs.core.first(s__9358__$2);
var xz_i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9373,(0),null);
var val_xz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9373,(1),null);
if(cljs.core.truth_((function (){var or__4131__auto__ = dim_xz;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),xz_i);
}
})())){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_fn,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_x)),val_x,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_y)),val_y]),(cljs.core.truth_((function (){var and__4120__auto__ = dim_yz;
if(cljs.core.truth_(and__4120__auto__)){
return dim_yz_QMARK_;
} else {
return and__4120__auto__;
}
})())?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_yz)),val_yz]):null),(cljs.core.truth_((function (){var and__4120__auto__ = dim_xz;
if(cljs.core.truth_(and__4120__auto__)){
return dim_xz_QMARK_;
} else {
return and__4120__auto__;
}
})())?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_xz)),val_xz]):null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__9358__$1,s__9356__$1,i__9347,s__9346__$1,s__9344__$1,vec__9373,xz_i,val_xz,s__9358__$2,temp__5720__auto____$3,vec__9361,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9352,yz_i,val_yz,c__4521__auto__,size__4522__auto__,b__9348,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (p__9376){
var map__9377 = p__9376;
var map__9377__$1 = (((((!((map__9377 == null))))?(((((map__9377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9377):map__9377);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9377__$1,cljs.core.cst$kw$id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(radio,id)], null);
});})(s__9358__$1,s__9356__$1,i__9347,s__9346__$1,s__9344__$1,vec__9373,xz_i,val_xz,s__9358__$2,temp__5720__auto____$3,vec__9361,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9352,yz_i,val_yz,c__4521__auto__,size__4522__auto__,b__9348,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s__9358__$1,s__9356__$1,i__9347,s__9346__$1,s__9344__$1,vec__9373,xz_i,val_xz,s__9358__$2,temp__5720__auto____$3,vec__9361,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9352,yz_i,val_yz,c__4521__auto__,size__4522__auto__,b__9348,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (p__9379){
var map__9380 = p__9379;
var map__9380__$1 = (((((!((map__9380 == null))))?(((((map__9380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9380):map__9380);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9380__$1,cljs.core.cst$kw$id);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(radio,id);
});})(s__9358__$1,s__9356__$1,i__9347,s__9346__$1,s__9344__$1,vec__9373,xz_i,val_xz,s__9358__$2,temp__5720__auto____$3,vec__9361,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9352,yz_i,val_yz,c__4521__auto__,size__4522__auto__,b__9348,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,extra_dims)))], 0))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_i),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xz_i)].join('')], null)),xd_table$core$xd_table_pure_$_iter__9343_$_iter__9345_$_iter__9355_$_iter__9357(cljs.core.rest(s__9358__$2)));
} else {
var G__9420 = cljs.core.rest(s__9358__$2);
s__9358__$1 = G__9420;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__9356__$1,i__9347,s__9346__$1,s__9344__$1,vec__9361,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9352,yz_i,val_yz,c__4521__auto__,size__4522__auto__,b__9348,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,null,null));
});})(s__9356__$1,i__9347,s__9346__$1,s__9344__$1,vec__9361,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9352,yz_i,val_yz,c__4521__auto__,size__4522__auto__,b__9348,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__((cljs.core.truth_(dim_xz)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,vals_xz):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null)], null))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,xd_table$core$xd_table_pure_$_iter__9343_$_iter__9345_$_iter__9355(cljs.core.rest(s__9356__$1)));
} else {
var G__9421 = cljs.core.rest(s__9356__$1);
s__9356__$1 = G__9421;
continue;
}
} else {
return null;
}
break;
}
});})(i__9347,s__9346__$1,s__9344__$1,vec__9352,yz_i,val_yz,c__4521__auto__,size__4522__auto__,b__9348,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,null,null));
});})(i__9347,s__9346__$1,s__9344__$1,vec__9352,yz_i,val_yz,c__4521__auto__,size__4522__auto__,b__9348,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
;
return iter__4523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,vals_x));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_i),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [val_y,val_yz,extra_dim_vals], null)))].join('')], null)));

var G__9422 = (i__9347 + (1));
i__9347 = G__9422;
continue;
} else {
var G__9423 = (i__9347 + (1));
i__9347 = G__9423;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9348),xd_table$core$xd_table_pure_$_iter__9343_$_iter__9345(cljs.core.chunk_rest(s__9346__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9348),null);
}
} else {
var vec__9382 = cljs.core.first(s__9346__$2);
var yz_i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9382,(0),null);
var val_yz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9382,(1),null);
if(cljs.core.truth_((function (){var or__4131__auto__ = dim_yz;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),yz_i);
}
})())){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,(cljs.core.truth_((function (){var and__4120__auto__ = header_y_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = selectors_QMARK_;
if(cljs.core.truth_(and__4120__auto____$1)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val_y,cljs.core.first(vals_y))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),yz_i)));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$header_DASH_y,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$row_DASH_span,(cljs.core.count(vals_y) * (cljs.core.truth_(dim_yz)?cljs.core.count(vals_yz):(1)))], null),dim_y_selector], null):null),(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.not(header_y_QMARK_);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = dim_yz;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),yz_i);
} else {
return and__4120__auto__;
}
}
})())?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$header_DASH_y_DASH_row,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val_y,cljs.core.last(vals_y)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"last"], null):null),(cljs.core.truth_(dim_yz)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$row_DASH_span,cljs.core.count(vals_yz)], null):null)], 0)),(dim_val_l_fn_y.cljs$core$IFn$_invoke$arity$1 ? dim_val_l_fn_y.cljs$core$IFn$_invoke$arity$1(val_y) : dim_val_l_fn_y.call(null,val_y))], null)),(cljs.core.truth_((function (){var and__4120__auto__ = header_yz_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return dim_yz;
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$header_DASH_yz_DASH_row,(dim_val_l_fn_yz.cljs$core$IFn$_invoke$arity$1 ? dim_val_l_fn_yz.cljs$core$IFn$_invoke$arity$1(val_yz) : dim_val_l_fn_yz.call(null,val_yz))], null):null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (s__9346__$1,s__9344__$1,vec__9382,yz_i,val_yz,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function xd_table$core$xd_table_pure_$_iter__9343_$_iter__9345_$_iter__9385(s__9386){
return (new cljs.core.LazySeq(null,((function (s__9346__$1,s__9344__$1,vec__9382,yz_i,val_yz,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (){
var s__9386__$1 = s__9386;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__9386__$1);
if(temp__5720__auto____$2){
var xs__6277__auto____$1 = temp__5720__auto____$2;
var vec__9391 = cljs.core.first(xs__6277__auto____$1);
var x_i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9391,(0),null);
var val_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9391,(1),null);
var iterys__4519__auto__ = ((function (s__9386__$1,s__9346__$1,s__9344__$1,vec__9391,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9382,yz_i,val_yz,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function xd_table$core$xd_table_pure_$_iter__9343_$_iter__9345_$_iter__9385_$_iter__9387(s__9388){
return (new cljs.core.LazySeq(null,((function (s__9386__$1,s__9346__$1,s__9344__$1,vec__9391,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9382,yz_i,val_yz,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (){
var s__9388__$1 = s__9388;
while(true){
var temp__5720__auto____$3 = cljs.core.seq(s__9388__$1);
if(temp__5720__auto____$3){
var s__9388__$2 = temp__5720__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__9388__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9388__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9390 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9389 = (0);
while(true){
if((i__9389 < size__4522__auto__)){
var vec__9394 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9389);
var xz_i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9394,(0),null);
var val_xz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9394,(1),null);
if(cljs.core.truth_((function (){var or__4131__auto__ = dim_xz;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),xz_i);
}
})())){
cljs.core.chunk_append(b__9390,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_fn,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_x)),val_x,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_y)),val_y]),(cljs.core.truth_((function (){var and__4120__auto__ = dim_yz;
if(cljs.core.truth_(and__4120__auto__)){
return dim_yz_QMARK_;
} else {
return and__4120__auto__;
}
})())?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_yz)),val_yz]):null),(cljs.core.truth_((function (){var and__4120__auto__ = dim_xz;
if(cljs.core.truth_(and__4120__auto__)){
return dim_xz_QMARK_;
} else {
return and__4120__auto__;
}
})())?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_xz)),val_xz]):null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__9389,s__9388__$1,s__9386__$1,s__9346__$1,s__9344__$1,vec__9394,xz_i,val_xz,c__4521__auto__,size__4522__auto__,b__9390,s__9388__$2,temp__5720__auto____$3,vec__9391,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9382,yz_i,val_yz,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (p__9397){
var map__9398 = p__9397;
var map__9398__$1 = (((((!((map__9398 == null))))?(((((map__9398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9398):map__9398);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9398__$1,cljs.core.cst$kw$id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(radio,id)], null);
});})(i__9389,s__9388__$1,s__9386__$1,s__9346__$1,s__9344__$1,vec__9394,xz_i,val_xz,c__4521__auto__,size__4522__auto__,b__9390,s__9388__$2,temp__5720__auto____$3,vec__9391,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9382,yz_i,val_yz,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__9389,s__9388__$1,s__9386__$1,s__9346__$1,s__9344__$1,vec__9394,xz_i,val_xz,c__4521__auto__,size__4522__auto__,b__9390,s__9388__$2,temp__5720__auto____$3,vec__9391,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9382,yz_i,val_yz,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (p__9400){
var map__9401 = p__9400;
var map__9401__$1 = (((((!((map__9401 == null))))?(((((map__9401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9401):map__9401);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9401__$1,cljs.core.cst$kw$id);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(radio,id);
});})(i__9389,s__9388__$1,s__9386__$1,s__9346__$1,s__9344__$1,vec__9394,xz_i,val_xz,c__4521__auto__,size__4522__auto__,b__9390,s__9388__$2,temp__5720__auto____$3,vec__9391,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9382,yz_i,val_yz,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,extra_dims)))], 0))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_i),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xz_i)].join('')], null)));

var G__9424 = (i__9389 + (1));
i__9389 = G__9424;
continue;
} else {
var G__9425 = (i__9389 + (1));
i__9389 = G__9425;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9390),xd_table$core$xd_table_pure_$_iter__9343_$_iter__9345_$_iter__9385_$_iter__9387(cljs.core.chunk_rest(s__9388__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9390),null);
}
} else {
var vec__9403 = cljs.core.first(s__9388__$2);
var xz_i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9403,(0),null);
var val_xz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9403,(1),null);
if(cljs.core.truth_((function (){var or__4131__auto__ = dim_xz;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),xz_i);
}
})())){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_fn,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_x)),val_x,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_y)),val_y]),(cljs.core.truth_((function (){var and__4120__auto__ = dim_yz;
if(cljs.core.truth_(and__4120__auto__)){
return dim_yz_QMARK_;
} else {
return and__4120__auto__;
}
})())?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_yz)),val_yz]):null),(cljs.core.truth_((function (){var and__4120__auto__ = dim_xz;
if(cljs.core.truth_(and__4120__auto__)){
return dim_xz_QMARK_;
} else {
return and__4120__auto__;
}
})())?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dims,dim_xz)),val_xz]):null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__9388__$1,s__9386__$1,s__9346__$1,s__9344__$1,vec__9403,xz_i,val_xz,s__9388__$2,temp__5720__auto____$3,vec__9391,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9382,yz_i,val_yz,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (p__9406){
var map__9407 = p__9406;
var map__9407__$1 = (((((!((map__9407 == null))))?(((((map__9407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9407):map__9407);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9407__$1,cljs.core.cst$kw$id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(radio,id)], null);
});})(s__9388__$1,s__9386__$1,s__9346__$1,s__9344__$1,vec__9403,xz_i,val_xz,s__9388__$2,temp__5720__auto____$3,vec__9391,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9382,yz_i,val_yz,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s__9388__$1,s__9386__$1,s__9346__$1,s__9344__$1,vec__9403,xz_i,val_xz,s__9388__$2,temp__5720__auto____$3,vec__9391,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9382,yz_i,val_yz,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change){
return (function (p__9409){
var map__9410 = p__9409;
var map__9410__$1 = (((((!((map__9410 == null))))?(((((map__9410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9410):map__9410);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9410__$1,cljs.core.cst$kw$id);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(radio,id);
});})(s__9388__$1,s__9386__$1,s__9346__$1,s__9344__$1,vec__9403,xz_i,val_xz,s__9388__$2,temp__5720__auto____$3,vec__9391,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9382,yz_i,val_yz,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,extra_dims)))], 0))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_i),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xz_i)].join('')], null)),xd_table$core$xd_table_pure_$_iter__9343_$_iter__9345_$_iter__9385_$_iter__9387(cljs.core.rest(s__9388__$2)));
} else {
var G__9426 = cljs.core.rest(s__9388__$2);
s__9388__$1 = G__9426;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__9386__$1,s__9346__$1,s__9344__$1,vec__9391,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9382,yz_i,val_yz,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,null,null));
});})(s__9386__$1,s__9346__$1,s__9344__$1,vec__9391,x_i,val_x,xs__6277__auto____$1,temp__5720__auto____$2,vec__9382,yz_i,val_yz,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__((cljs.core.truth_(dim_xz)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,vals_xz):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null)], null))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,xd_table$core$xd_table_pure_$_iter__9343_$_iter__9345_$_iter__9385(cljs.core.rest(s__9386__$1)));
} else {
var G__9427 = cljs.core.rest(s__9386__$1);
s__9386__$1 = G__9427;
continue;
}
} else {
return null;
}
break;
}
});})(s__9346__$1,s__9344__$1,vec__9382,yz_i,val_yz,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,null,null));
});})(s__9346__$1,s__9344__$1,vec__9382,yz_i,val_yz,s__9346__$2,temp__5720__auto____$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
;
return iter__4523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,vals_x));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_i),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [val_y,val_yz,extra_dim_vals], null)))].join('')], null)),xd_table$core$xd_table_pure_$_iter__9343_$_iter__9345(cljs.core.rest(s__9346__$2)));
} else {
var G__9428 = cljs.core.rest(s__9346__$2);
s__9346__$1 = G__9428;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__9344__$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,null,null));
});})(s__9344__$1,vec__9349,y_i,val_y,xs__6277__auto__,temp__5720__auto__,map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__((cljs.core.truth_(dim_yz)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,vals_yz):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null)], null))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,xd_table$core$xd_table_pure_$_iter__9343(cljs.core.rest(s__9344__$1)));
} else {
var G__9429 = cljs.core.rest(s__9344__$1);
s__9344__$1 = G__9429;
continue;
}
} else {
return null;
}
break;
}
});})(map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
,null,null));
});})(map__9293,map__9293__$1,vals_x,header_x_QMARK_,dim_l_fn_x,dim_val_l_fn_x,map__9294,map__9294__$1,vals_y,header_y_QMARK_,dim_l_fn_y,dim_val_l_fn_y,map__9295,map__9295__$1,vals_yz,header_yz_QMARK_,dim_l_fn_yz,dim_val_l_fn_yz,dim_yz_active_QMARK_,map__9296,map__9296__$1,vals_xz,header_xz_QMARK_,dim_l_fn_xz,dim_val_l_fn_xz,dim_xz_active_QMARK_,extra_dims,extra_dim_vals,colspan_empty,colspan_x,dim_x_selector,dim_y_selector,dim_yz_selector,dim_xz_selector,map__9289,map__9289__$1,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com,map__9290,map__9290__$1,radio_on_change,dim_yz,dim_yz_on_change,dim_y,dim_xz_on_change,radio,dim_x,dim_y_on_change,dim_xz,dim_x_on_change))
;
return iter__4523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,vals_y));
})())], null)], null)], null);
});
xd_table.core.xd_table_STAR_ = (function xd_table$core$xd_table_STAR_(p__9436){
var map__9437 = p__9436;
var map__9437__$1 = (((((!((map__9437 == null))))?(((((map__9437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9437):map__9437);
var args = map__9437__$1;
var cell_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9437__$1,cljs.core.cst$kw$cell_DASH_fn);
var dim_yz_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9437__$1,cljs.core.cst$kw$dim_DASH_yz_QMARK_);
var dim_xz_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9437__$1,cljs.core.cst$kw$dim_DASH_xz_QMARK_);
var dims = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9437__$1,cljs.core.cst$kw$dims);
var selectors_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9437__$1,cljs.core.cst$kw$selectors_QMARK_,true);
var selection_com = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9437__$1,cljs.core.cst$kw$selection_DASH_com,xd_table.core.selection_default);
var radio_button_com = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9437__$1,cljs.core.cst$kw$radio_DASH_button_DASH_com,xd_table.core.radio_button_default);
var with_let9439 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let9439);
var temp__5724__auto___9449 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___9449 == null)){
} else {
var c__7808__auto___9450 = temp__5724__auto___9449;
if((with_let9439.generation === c__7808__auto___9450.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let9439.generation = c__7808__auto___9450.ratomGeneration;
}


var init9440 = (with_let9439.length === (0));
var dim_x_ratom = ((init9440)?(with_let9439[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let9439[(0)]));
var dim_y_ratom = ((init9440)?(with_let9439[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1))):(with_let9439[(1)]));
var dim_yz_ratom = ((init9440)?(with_let9439[(2)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(dim_yz_QMARK_)?(2):null))):(with_let9439[(2)]));
var dim_xz_ratom = ((init9440)?(with_let9439[(3)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(dim_xz_QMARK_)?(3):null))):(with_let9439[(3)]));
var radio_ratoms = ((init9440)?(with_let9439[(4)] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (init9440,dim_x_ratom,dim_y_ratom,dim_yz_ratom,dim_xz_ratom,with_let9439,map__9437,map__9437__$1,args,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com){
return (function xd_table$core$xd_table_STAR__$_iter__9441(s__9442){
return (new cljs.core.LazySeq(null,((function (init9440,dim_x_ratom,dim_y_ratom,dim_yz_ratom,dim_xz_ratom,with_let9439,map__9437,map__9437__$1,args,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com){
return (function (){
var s__9442__$1 = s__9442;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__9442__$1);
if(temp__5720__auto__){
var s__9442__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9442__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9442__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9444 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9443 = (0);
while(true){
if((i__9443 < size__4522__auto__)){
var map__9445 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9443);
var map__9445__$1 = (((((!((map__9445 == null))))?(((((map__9445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9445):map__9445);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9445__$1,cljs.core.cst$kw$id);
cljs.core.chunk_append(b__9444,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null));

var G__9451 = (i__9443 + (1));
i__9443 = G__9451;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9444),xd_table$core$xd_table_STAR__$_iter__9441(cljs.core.chunk_rest(s__9442__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9444),null);
}
} else {
var map__9447 = cljs.core.first(s__9442__$2);
var map__9447__$1 = (((((!((map__9447 == null))))?(((((map__9447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9447):map__9447);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9447__$1,cljs.core.cst$kw$id);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),xd_table$core$xd_table_STAR__$_iter__9441(cljs.core.rest(s__9442__$2)));
}
} else {
return null;
}
break;
}
});})(init9440,dim_x_ratom,dim_y_ratom,dim_yz_ratom,dim_xz_ratom,with_let9439,map__9437,map__9437__$1,args,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com))
,null,null));
});})(init9440,dim_x_ratom,dim_y_ratom,dim_yz_ratom,dim_xz_ratom,with_let9439,map__9437,map__9437__$1,args,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com))
;
return iter__4523__auto__(dims);
})())):(with_let9439[(4)]));
var res__7809__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xd_table.core.xd_table_pure,args,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$dim_DASH_yz_DASH_on_DASH_change,cljs.core.cst$kw$dim_DASH_y,cljs.core.cst$kw$dim_DASH_yz,cljs.core.cst$kw$dim_DASH_xz_DASH_on_DASH_change,cljs.core.cst$kw$radio,cljs.core.cst$kw$dim_DASH_x,cljs.core.cst$kw$dim_DASH_y_DASH_on_DASH_change,cljs.core.cst$kw$dim_DASH_xz,cljs.core.cst$kw$dim_DASH_x_DASH_on_DASH_change,cljs.core.cst$kw$radio_DASH_on_DASH_change],[((function (init9440,dim_x_ratom,dim_y_ratom,dim_yz_ratom,dim_xz_ratom,radio_ratoms,with_let9439,map__9437,map__9437__$1,args,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com){
return (function (p1__9432_SHARP_){
return cljs.core.reset_BANG_(dim_yz_ratom,p1__9432_SHARP_);
});})(init9440,dim_x_ratom,dim_y_ratom,dim_yz_ratom,dim_xz_ratom,radio_ratoms,with_let9439,map__9437,map__9437__$1,args,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com))
,cljs.core.deref(dim_y_ratom),cljs.core.deref(dim_yz_ratom),((function (init9440,dim_x_ratom,dim_y_ratom,dim_yz_ratom,dim_xz_ratom,radio_ratoms,with_let9439,map__9437,map__9437__$1,args,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com){
return (function (p1__9433_SHARP_){
return cljs.core.reset_BANG_(dim_xz_ratom,p1__9433_SHARP_);
});})(init9440,dim_x_ratom,dim_y_ratom,dim_yz_ratom,dim_xz_ratom,radio_ratoms,with_let9439,map__9437,map__9437__$1,args,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com))
,xd_table.core.map_vals(cljs.core.deref,radio_ratoms),cljs.core.deref(dim_x_ratom),((function (init9440,dim_x_ratom,dim_y_ratom,dim_yz_ratom,dim_xz_ratom,radio_ratoms,with_let9439,map__9437,map__9437__$1,args,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com){
return (function (p1__9431_SHARP_){
return cljs.core.reset_BANG_(dim_y_ratom,p1__9431_SHARP_);
});})(init9440,dim_x_ratom,dim_y_ratom,dim_yz_ratom,dim_xz_ratom,radio_ratoms,with_let9439,map__9437,map__9437__$1,args,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com))
,cljs.core.deref(dim_xz_ratom),((function (init9440,dim_x_ratom,dim_y_ratom,dim_yz_ratom,dim_xz_ratom,radio_ratoms,with_let9439,map__9437,map__9437__$1,args,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com){
return (function (p1__9430_SHARP_){
return cljs.core.reset_BANG_(dim_x_ratom,p1__9430_SHARP_);
});})(init9440,dim_x_ratom,dim_y_ratom,dim_yz_ratom,dim_xz_ratom,radio_ratoms,with_let9439,map__9437,map__9437__$1,args,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com))
,((function (init9440,dim_x_ratom,dim_y_ratom,dim_yz_ratom,dim_xz_ratom,radio_ratoms,with_let9439,map__9437,map__9437__$1,args,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com){
return (function (p1__9434_SHARP_,p2__9435_SHARP_){
return cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(radio_ratoms,p1__9434_SHARP_),p2__9435_SHARP_);
});})(init9440,dim_x_ratom,dim_y_ratom,dim_yz_ratom,dim_xz_ratom,radio_ratoms,with_let9439,map__9437,map__9437__$1,args,cell_fn,dim_yz_QMARK_,dim_xz_QMARK_,dims,selectors_QMARK_,selection_com,radio_button_com))
])], null);

return res__7809__auto__;
});
xd_table.core.xd_table = (function xd_table$core$xd_table(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9456 = arguments.length;
var i__4731__auto___9457 = (0);
while(true){
if((i__4731__auto___9457 < len__4730__auto___9456)){
args__4736__auto__.push((arguments[i__4731__auto___9457]));

var G__9458 = (i__4731__auto___9457 + (1));
i__4731__auto___9457 = G__9458;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return xd_table.core.xd_table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

xd_table.core.xd_table.cljs$core$IFn$_invoke$arity$variadic = (function (p__9453){
var map__9454 = p__9453;
var map__9454__$1 = (((((!((map__9454 == null))))?(((((map__9454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9454):map__9454);
var args = map__9454__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xd_table.core.xd_table_STAR_,args], null);
});

xd_table.core.xd_table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
xd_table.core.xd_table.cljs$lang$applyTo = (function (seq9452){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9452));
});

