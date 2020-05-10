// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('zc_split.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('zc_split.calc');
zc_split.core.calc = (function zc_split$core$calc(offset,fraction,min_len){
return ["calc(","(","(100% - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px)"," * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fraction),")"," + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(min_len),"px",")"].join('');
});
zc_split.core.dir_map = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$row,cljs.core.cst$kw$width,cljs.core.cst$kw$column,cljs.core.cst$kw$height], null);
zc_split.core.split_STAR_ = (function zc_split$core$split_STAR_(p__17332){
var map__17333 = p__17332;
var map__17333__$1 = (((((!((map__17333 == null))))?(((((map__17333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17333):map__17333);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17333__$1,cljs.core.cst$kw$direction);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17333__$1,cljs.core.cst$kw$items);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17333__$1,cljs.core.cst$kw$params);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zc_DASH_split,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["split-",cljs.core.name(direction)].join(''),cljs.core.cst$kw$style,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get.cljs$core$IFn$_invoke$arity$2(zc_split.core.dir_map,direction),"100%"])], null)], 0)),(function (){var offset = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__17333,map__17333__$1,direction,items,params){
return (function (p1__17331_SHARP_){
var or__4131__auto__ = cljs.core.cst$kw$fixed.cljs$core$IFn$_invoke$arity$1(p1__17331_SHARP_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$min_DASH_len.cljs$core$IFn$_invoke$arity$1(p1__17331_SHARP_);
}
});})(map__17333,map__17333__$1,direction,items,params))
,items));
var iter__4523__auto__ = ((function (offset,map__17333,map__17333__$1,direction,items,params){
return (function zc_split$core$split_STAR__$_iter__17335(s__17336){
return (new cljs.core.LazySeq(null,((function (offset,map__17333,map__17333__$1,direction,items,params){
return (function (){
var s__17336__$1 = s__17336;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__17336__$1);
if(temp__5720__auto__){
var s__17336__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17336__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__17336__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__17338 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__17337 = (0);
while(true){
if((i__17337 < size__4522__auto__)){
var map__17339 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__17337);
var map__17339__$1 = (((((!((map__17339 == null))))?(((((map__17339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17339):map__17339);
var panel_config = map__17339__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17339__$1,cljs.core.cst$kw$id);
var fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17339__$1,cljs.core.cst$kw$fixed);
var fraction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17339__$1,cljs.core.cst$kw$fraction);
var min_len = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17339__$1,cljs.core.cst$kw$min_DASH_len,(0));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17339__$1,cljs.core.cst$kw$content);
cljs.core.chunk_append(b__17338,(function (){var style = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get.cljs$core$IFn$_invoke$arity$2(zc_split.core.dir_map,direction),(cljs.core.truth_(fixed)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed),"px"].join(''):zc_split.core.calc((function (){var or__4131__auto__ = offset;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),fraction,min_len))]);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$split_DASH_part,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$style,style], null),content], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(function (){var or__4131__auto__ = id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.hash(panel_config);
}
})()], null));
})());

var G__17343 = (i__17337 + (1));
i__17337 = G__17343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17338),zc_split$core$split_STAR__$_iter__17335(cljs.core.chunk_rest(s__17336__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17338),null);
}
} else {
var map__17341 = cljs.core.first(s__17336__$2);
var map__17341__$1 = (((((!((map__17341 == null))))?(((((map__17341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17341):map__17341);
var panel_config = map__17341__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17341__$1,cljs.core.cst$kw$id);
var fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17341__$1,cljs.core.cst$kw$fixed);
var fraction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17341__$1,cljs.core.cst$kw$fraction);
var min_len = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17341__$1,cljs.core.cst$kw$min_DASH_len,(0));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17341__$1,cljs.core.cst$kw$content);
return cljs.core.cons((function (){var style = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get.cljs$core$IFn$_invoke$arity$2(zc_split.core.dir_map,direction),(cljs.core.truth_(fixed)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed),"px"].join(''):zc_split.core.calc((function (){var or__4131__auto__ = offset;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),fraction,min_len))]);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$split_DASH_part,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$style,style], null),content], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(function (){var or__4131__auto__ = id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.hash(panel_config);
}
})()], null));
})(),zc_split$core$split_STAR__$_iter__17335(cljs.core.rest(s__17336__$2)));
}
} else {
return null;
}
break;
}
});})(offset,map__17333,map__17333__$1,direction,items,params))
,null,null));
});})(offset,map__17333,map__17333__$1,direction,items,params))
;
return iter__4523__auto__(items);
})()], null);
});
zc_split.core.dim_fns = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$row,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$get_DASH_len,(function (p1__17344_SHARP_){
return p1__17344_SHARP_.clientWidth;
}),cljs.core.cst$kw$get_DASH_mouse,(function (p1__17345_SHARP_){
return p1__17345_SHARP_.clientX;
}),cljs.core.cst$kw$cursor_DASH_val,"col-resize"], null),cljs.core.cst$kw$column,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$get_DASH_len,(function (p1__17346_SHARP_){
return p1__17346_SHARP_.clientHeight;
}),cljs.core.cst$kw$get_DASH_mouse,(function (p1__17347_SHARP_){
return p1__17347_SHARP_.clientY;
}),cljs.core.cst$kw$cursor_DASH_val,"row-resize"], null)], null);
zc_split.core.predecessors = (function zc_split$core$predecessors(el,coll){
var G__17351 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__17348_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(el,p1__17348_SHARP_);
}),coll);
var fexpr__17350 = ((function (G__17351){
return (function (p1__17349_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__17349_SHARP_,el);
});})(G__17351))
;
return fexpr__17350(G__17351);
});
zc_split.core.successors = (function zc_split$core$successors(el,coll){
return cljs.core.rest(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__17352_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(el,p1__17352_SHARP_);
}),coll));
});
zc_split.core.split_resize_STAR_ = (function zc_split$core$split_resize_STAR_(p__17356){
var map__17357 = p__17356;
var map__17357__$1 = (((((!((map__17357 == null))))?(((((map__17357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17357):map__17357);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17357__$1,cljs.core.cst$kw$direction);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17357__$1,cljs.core.cst$kw$items);
var sep_len = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17357__$1,cljs.core.cst$kw$sep_DASH_len,(5));
var sep_com = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17357__$1,cljs.core.cst$kw$sep_DASH_com,"");
var calc_frac_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17357__$1,cljs.core.cst$kw$calc_DASH_frac_DASH_strategy,cljs.core.cst$kw$push_DASH_adjacent);
var with_let17359 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let17359);
var temp__5724__auto___17371 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___17371 == null)){
} else {
var c__7808__auto___17372 = temp__5724__auto___17371;
if((with_let17359.generation === c__7808__auto___17372.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let17359.generation = c__7808__auto___17372.ratomGeneration;
}


var init17360 = (with_let17359.length === (0));
var map__17361 = ((init17360)?(with_let17359[(0)] = cljs.core.get.cljs$core$IFn$_invoke$arity$2(zc_split.core.dim_fns,direction)):(with_let17359[(0)]));
var map__17361__$1 = (((((!((map__17361 == null))))?(((((map__17361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17361):map__17361);
var get_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17361__$1,cljs.core.cst$kw$get_DASH_len);
var get_mouse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17361__$1,cljs.core.cst$kw$get_DASH_mouse);
var cursor_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17361__$1,cljs.core.cst$kw$cursor_DASH_val);
var init_state = ((init17360)?(with_let17359[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let17359[(1)]));
var id_cfg_map = ((init17360)?(with_let17359[(2)] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (init17360,map__17361,map__17361__$1,get_len,get_mouse,cursor_val,init_state,with_let17359,map__17357,map__17357__$1,direction,items,sep_len,sep_com,calc_frac_strategy){
return (function (p__17363){
var map__17364 = p__17363;
var map__17364__$1 = (((((!((map__17364 == null))))?(((((map__17364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17364):map__17364);
var cfg = map__17364__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17364__$1,cljs.core.cst$kw$id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cfg], null);
});})(init17360,map__17361,map__17361__$1,get_len,get_mouse,cursor_val,init_state,with_let17359,map__17357,map__17357__$1,direction,items,sep_len,sep_com,calc_frac_strategy))
,items))):(with_let17359[(2)]));
var item_frac_ids = ((init17360)?(with_let17359[(3)] = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fraction,items))):(with_let17359[(3)]));
var fracs_ratom = ((init17360)?(with_let17359[(4)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (init17360,map__17361,map__17361__$1,get_len,get_mouse,cursor_val,init_state,id_cfg_map,item_frac_ids,with_let17359,map__17357,map__17357__$1,direction,items,sep_len,sep_com,calc_frac_strategy){
return (function (p__17366){
var map__17367 = p__17366;
var map__17367__$1 = (((((!((map__17367 == null))))?(((((map__17367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17367):map__17367);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17367__$1,cljs.core.cst$kw$id);
var fraction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17367__$1,cljs.core.cst$kw$fraction);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,fraction], null);
});})(init17360,map__17361,map__17361__$1,get_len,get_mouse,cursor_val,init_state,id_cfg_map,item_frac_ids,with_let17359,map__17357,map__17357__$1,direction,items,sep_len,sep_com,calc_frac_strategy))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fraction,items))))):(with_let17359[(4)]));
var snapshot = ((init17360)?(with_let17359[(5)] = ((function (init17360,map__17361,map__17361__$1,get_len,get_mouse,cursor_val,init_state,id_cfg_map,item_frac_ids,fracs_ratom,with_let17359,map__17357,map__17357__$1,direction,items,sep_len,sep_com,calc_frac_strategy){
return (function (mouse_ev,id){
var id_len = (function (){var G__17369 = document.getElementById(id);
return (get_len.cljs$core$IFn$_invoke$arity$1 ? get_len.cljs$core$IFn$_invoke$arity$1(G__17369) : get_len.call(null,G__17369));
})();
var id_min_len = cljs.core.cst$kw$min_DASH_len.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_cfg_map,id));
var rel = ((1) / (id_len - id_min_len));
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$mouse,(get_mouse.cljs$core$IFn$_invoke$arity$1 ? get_mouse.cljs$core$IFn$_invoke$arity$1(mouse_ev) : get_mouse.call(null,mouse_ev)),cljs.core.cst$kw$id_DASH_ref,id,cljs.core.cst$kw$ids_DASH_pred,zc_split.core.predecessors(id,item_frac_ids),cljs.core.cst$kw$ids_DASH_succ,zc_split.core.successors(id,item_frac_ids),cljs.core.cst$kw$rel,rel,cljs.core.cst$kw$frac_DASH_map,cljs.core.deref(fracs_ratom)], null);
});})(init17360,map__17361,map__17361__$1,get_len,get_mouse,cursor_val,init_state,id_cfg_map,item_frac_ids,fracs_ratom,with_let17359,map__17357,map__17357__$1,direction,items,sep_len,sep_com,calc_frac_strategy))
):(with_let17359[(5)]));
var sep_fn = ((init17360)?(with_let17359[(6)] = ((function (init17360,map__17361,map__17361__$1,get_len,get_mouse,cursor_val,init_state,id_cfg_map,item_frac_ids,fracs_ratom,snapshot,with_let17359,map__17357,map__17357__$1,direction,items,sep_len,sep_com,calc_frac_strategy){
return (function (id){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$fixed,sep_len,cljs.core.cst$kw$id,["sep-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$splitter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,cursor_val], null),cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (init17360,map__17361,map__17361__$1,get_len,get_mouse,cursor_val,init_state,id_cfg_map,item_frac_ids,fracs_ratom,snapshot,with_let17359,map__17357,map__17357__$1,direction,items,sep_len,sep_com,calc_frac_strategy){
return (function (p1__17353_SHARP_){
return cljs.core.reset_BANG_(init_state,(snapshot.cljs$core$IFn$_invoke$arity$2 ? snapshot.cljs$core$IFn$_invoke$arity$2(p1__17353_SHARP_,id) : snapshot.call(null,p1__17353_SHARP_,id)));
});})(init17360,map__17361,map__17361__$1,get_len,get_mouse,cursor_val,init_state,id_cfg_map,item_frac_ids,fracs_ratom,snapshot,with_let17359,map__17357,map__17357__$1,direction,items,sep_len,sep_com,calc_frac_strategy))
], null),sep_com], null)], null);
});})(init17360,map__17361,map__17361__$1,get_len,get_mouse,cursor_val,init_state,id_cfg_map,item_frac_ids,fracs_ratom,snapshot,with_let17359,map__17357,map__17357__$1,direction,items,sep_len,sep_com,calc_frac_strategy))
):(with_let17359[(6)]));
var item_seps = ((init17360)?(with_let17359[(7)] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (init17360,map__17361,map__17361__$1,get_len,get_mouse,cursor_val,init_state,id_cfg_map,item_frac_ids,fracs_ratom,snapshot,sep_fn,with_let17359,map__17357,map__17357__$1,direction,items,sep_len,sep_com,calc_frac_strategy){
return (function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(sep_fn.cljs$core$IFn$_invoke$arity$1 ? sep_fn.cljs$core$IFn$_invoke$arity$1(id) : sep_fn.call(null,id))], null);
});})(init17360,map__17361,map__17361__$1,get_len,get_mouse,cursor_val,init_state,id_cfg_map,item_frac_ids,fracs_ratom,snapshot,sep_fn,with_let17359,map__17357,map__17357__$1,direction,items,sep_len,sep_com,calc_frac_strategy))
,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(item_frac_ids)))):(with_let17359[(7)]));
var upd_fracs_BANG_ = ((init17360)?(with_let17359[(8)] = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,fracs_ratom,cljs.core.merge),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zc_split.calc.calc_fracs,calc_frac_strategy,get_mouse))):(with_let17359[(8)]));
var params = ((init17360)?(with_let17359[(9)] = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_move,((function (init17360,map__17361,map__17361__$1,get_len,get_mouse,cursor_val,init_state,id_cfg_map,item_frac_ids,fracs_ratom,snapshot,sep_fn,item_seps,upd_fracs_BANG_,with_let17359,map__17357,map__17357__$1,direction,items,sep_len,sep_com,calc_frac_strategy){
return (function (p1__17354_SHARP_){
var is = cljs.core.deref(init_state);
if(cljs.core.truth_(cljs.core.cst$kw$mouse.cljs$core$IFn$_invoke$arity$1(is))){
return (upd_fracs_BANG_.cljs$core$IFn$_invoke$arity$2 ? upd_fracs_BANG_.cljs$core$IFn$_invoke$arity$2(is,p1__17354_SHARP_) : upd_fracs_BANG_.call(null,is,p1__17354_SHARP_));
} else {
return null;
}
});})(init17360,map__17361,map__17361__$1,get_len,get_mouse,cursor_val,init_state,id_cfg_map,item_frac_ids,fracs_ratom,snapshot,sep_fn,item_seps,upd_fracs_BANG_,with_let17359,map__17357,map__17357__$1,direction,items,sep_len,sep_com,calc_frac_strategy))
,cljs.core.cst$kw$on_DASH_mouse_DASH_up,((function (init17360,map__17361,map__17361__$1,get_len,get_mouse,cursor_val,init_state,id_cfg_map,item_frac_ids,fracs_ratom,snapshot,sep_fn,item_seps,upd_fracs_BANG_,with_let17359,map__17357,map__17357__$1,direction,items,sep_len,sep_com,calc_frac_strategy){
return (function (){
return cljs.core.reset_BANG_(init_state,null);
});})(init17360,map__17361,map__17361__$1,get_len,get_mouse,cursor_val,init_state,id_cfg_map,item_frac_ids,fracs_ratom,snapshot,sep_fn,item_seps,upd_fracs_BANG_,with_let17359,map__17357,map__17357__$1,direction,items,sep_len,sep_com,calc_frac_strategy))
], null)):(with_let17359[(9)]));
var res__7809__auto__ = (function (){var fracs_map = cljs.core.deref(fracs_ratom);
var items_live = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (fracs_map,init17360,map__17361,map__17361__$1,get_len,get_mouse,cursor_val,init_state,id_cfg_map,item_frac_ids,fracs_ratom,snapshot,sep_fn,item_seps,upd_fracs_BANG_,params,with_let17359,map__17357,map__17357__$1,direction,items,sep_len,sep_com,calc_frac_strategy){
return (function (p1__17355_SHARP_){
var fra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fracs_map,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__17355_SHARP_));
var sep = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item_seps,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__17355_SHARP_));
var G__17370 = p1__17355_SHARP_;
var G__17370__$1 = (cljs.core.truth_(fra)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17370,cljs.core.cst$kw$fraction,fra):G__17370);
var G__17370__$2 = (new cljs.core.List(null,G__17370__$1,null,(1),null))
;
if(cljs.core.truth_(sep)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__17370__$2,(new cljs.core.List(null,sep,null,(1),null)));
} else {
return G__17370__$2;
}
});})(fracs_map,init17360,map__17361,map__17361__$1,get_len,get_mouse,cursor_val,init_state,id_cfg_map,item_frac_ids,fracs_ratom,snapshot,sep_fn,item_seps,upd_fracs_BANG_,params,with_let17359,map__17357,map__17357__$1,direction,items,sep_len,sep_com,calc_frac_strategy))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([items], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zc_split.core.split_STAR_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$items,items_live,cljs.core.cst$kw$params,params], null)], null);
})();

return res__7809__auto__;
});
zc_split.core.split_dispatch = (function zc_split$core$split_dispatch(p__17373){
var map__17374 = p__17373;
var map__17374__$1 = (((((!((map__17374 == null))))?(((((map__17374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17374):map__17374);
var args = map__17374__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17374__$1,cljs.core.cst$kw$items);
var resize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17374__$1,cljs.core.cst$kw$resize_QMARK_);
if(cljs.core.truth_(resize_QMARK_)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zc_split.core.split_resize_STAR_,args], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,items)))], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zc_split.core.split_STAR_,args], null);
}
});
zc_split.core.split = (function zc_split$core$split(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17380 = arguments.length;
var i__4731__auto___17381 = (0);
while(true){
if((i__4731__auto___17381 < len__4730__auto___17380)){
args__4736__auto__.push((arguments[i__4731__auto___17381]));

var G__17382 = (i__4731__auto___17381 + (1));
i__4731__auto___17381 = G__17382;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return zc_split.core.split.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

zc_split.core.split.cljs$core$IFn$_invoke$arity$variadic = (function (p__17377){
var map__17378 = p__17377;
var map__17378__$1 = (((((!((map__17378 == null))))?(((((map__17378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17378):map__17378);
var args = map__17378__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zc_split.core.split_dispatch,args], null);
});

zc_split.core.split.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
zc_split.core.split.cljs$lang$applyTo = (function (seq17376){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17376));
});

