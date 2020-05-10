// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('paintscript.ctrl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
goog.require('reagent.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('svg_hiccup_kit.core');
goog.require('paintscript.util');
goog.require('paintscript.el');
goog.require('paintscript.ops');
goog.require('paintscript.ops_svg');
goog.require('paintscript.nav');
goog.require('paintscript.conv');
goog.require('paintscript.s_log');
paintscript.ctrl.params_clear = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$defs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$script,cljs.core.PersistentVector.EMPTY], null);
paintscript.ctrl.params_init = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$defs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$script,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class_DASH_k,"solid",cljs.core.cst$kw$repeat,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$translate,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(0)], null),cljs.core.cst$kw$times,(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(50)], null),cljs.core.cst$kw$r,(5)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class_DASH_k,"solid",cljs.core.cst$kw$repeat,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rotate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$degree,(60),cljs.core.cst$kw$center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(50)], null)], null),cljs.core.cst$kw$times,(6)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(8)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$L,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(39),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(61),(15)], null)], null)], null)], null)], null);
paintscript.ctrl.xy_mouse = (function paintscript$ctrl$xy_mouse(ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev.clientX,ev.clientY], null);
});
paintscript.ctrl.read_xy_str = (function paintscript$ctrl$read_xy_str(p__17439){
var vec__17440 = p__17439;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17440,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17440,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4131__auto__ = (function (){var G__17444 = x;
if((G__17444 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__17444);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),(function (){var or__4131__auto__ = (function (){var G__17446 = y;
if((G__17446 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__17446);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})()], null);
});
paintscript.ctrl.parse_cmd_line = (function paintscript$ctrl$parse_cmd_line(cmd_line){
var vec__17447 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cmd_line,/ /);
var seq__17448 = cljs.core.seq(vec__17447);
var first__17449 = cljs.core.first(seq__17448);
var seq__17448__$1 = cljs.core.next(seq__17448);
var cmd_str = first__17449;
var args = seq__17448__$1;
var cmd_k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cmd_str);
if(cljs.core.truth_((paintscript.el.el_QMARK_.cljs$core$IFn$_invoke$arity$1 ? paintscript.el.el_QMARK_.cljs$core$IFn$_invoke$arity$1(cmd_k) : paintscript.el.el_QMARK_.call(null,cmd_k)))){
var num_vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(paintscript.ctrl.read_xy_str,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),args));
var el = cljs.core.vec(cljs.core.cons(cmd_k,num_vecs));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$el_DASH_append,el], null);
} else {
var G__17450 = cmd_str;
switch (G__17450) {
case "undo":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$undo], null);

break;
case "log-clear":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$log_DASH_clear], null);

break;
case "log-clear<":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$log_DASH_clear_LT_], null);

break;
case "log-clear>":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$log_DASH_clear_GT_], null);

break;
case "abs":
case "absolute":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rel_DASH__GT_abs], null);

break;
case "full":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$short_DASH__GT_full], null);

break;
case "norm":
case "normalize":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$normalize], null);

break;
case "round":
var vec__17451 = args;
var _QMARK_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17451,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$round,_QMARK_n], null);

break;
case "tl":
case "translate":
var xy = paintscript.ctrl.read_xy_str(args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$translate,xy], null);

break;
case "rt":
case "rotate":
var vec__17454 = args;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17454,(0),null);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17454,(1),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17454,(2),null);
var alpha = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(a);
var center = (cljs.core.truth_((function (){var and__4120__auto__ = cx;
if(cljs.core.truth_(and__4120__auto__)){
return cy;
} else {
return and__4120__auto__;
}
})())?paintscript.ctrl.read_xy_str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(50)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rotate,alpha,center], null);

break;
case "sc":
case "scale":
var vec__17457 = args;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17457,(0),null);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17457,(1),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17457,(2),null);
var n__$1 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(n);
var center = (cljs.core.truth_((function (){var and__4120__auto__ = cx;
if(cljs.core.truth_(and__4120__auto__)){
return cy;
} else {
return and__4120__auto__;
}
})())?paintscript.ctrl.read_xy_str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(50)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale,center,n__$1], null);

break;
case "mirror":
var vec__17460 = args;
var axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17460,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17460,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mirror,(function (){var G__17463 = axis;
if((G__17463 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__17463);
}
})(),(function (){var G__17464 = pos;
if((G__17464 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__17464);
}
})()], null);

break;
case "to":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$el_DASH_tf,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))], null);

break;
case "p-mirror":
var vec__17465 = args;
var _QMARK_mode_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17465,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_p_DASH_opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mirror,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mode,(function (){var or__4131__auto__ = (function (){var G__17469 = _QMARK_mode_str;
if((G__17469 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__17469);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$separate;
}
})()], null)], null)], null);

break;
case "class-k":
var vec__17470 = args;
var _QMARK_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17470,(0),null);
var class_k = (function (){var or__4131__auto__ = _QMARK_class;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "outline";
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_p_DASH_opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_k,class_k], null)], null);

break;
case "variant-k":
var vec__17473 = args;
var _QMARK_variant = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17473,(0),null);
var variant_k = (function (){var or__4131__auto__ = _QMARK_variant;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "outline";
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_p_DASH_opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$variant_DASH_k,variant_k], null)], null);

break;
case "disable":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_p_DASH_opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$disabled_QMARK_,true], null)], null);

break;
case "enable":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_p_DASH_opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$disabled_QMARK_,false], null)], null);

break;
case "clear":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clear], null);

break;
case "def":
var vec__17476 = args;
var pk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17476,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$def,pk], null);

break;
case "script":
var sel_path = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.reader.read_string,args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sel,cljs.core.cons(cljs.core.cst$kw$script,sel_path)], null);

break;
case "svg":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg_DASH_path,clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args)], null);

break;
case "snap":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_snap], null);

break;
case "i":
case "insert":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_insert], null);

break;
case ".png":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dl_DASH_png], null);

break;
case ".svg":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dl_DASH_svg], null);

break;
default:
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["command not found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd_line)].join('')], 0));

}
}
});
paintscript.ctrl.handle_op = (function paintscript$ctrl$handle_op(params,ui,p__17485){
var vec__17486 = p__17485;
var seq__17487 = cljs.core.seq(vec__17486);
var first__17488 = cljs.core.first(seq__17487);
var seq__17487__$1 = cljs.core.next(seq__17487);
var op_k = first__17488;
var vec__17489 = seq__17487__$1;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17489,(0),null);
var args = vec__17489;
var op = vec__17486;
var vec__17492 = cljs.core.cst$kw$sel.cljs$core$IFn$_invoke$arity$1(ui);
var src_k_sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17492,(0),null);
var pi_sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17492,(1),null);
var eli_sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17492,(2),null);
var xyi_sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17492,(3),null);
var sel = vec__17492;
var G__17495 = op_k;
var G__17495__$1 = (((G__17495 instanceof cljs.core.Keyword))?G__17495.fqn:null);
switch (G__17495__$1) {
case "set-sel-d":
var map__17496 = cljs.core.cst$kw$snap.cljs$core$IFn$_invoke$arity$1(ui);
var map__17496__$1 = (((((!((map__17496 == null))))?(((((map__17496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17496):map__17496);
var params0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17496__$1,cljs.core.cst$kw$params0);
var params__$1 = (function (){var or__4131__auto__ = params0;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return params;
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (params__$1,map__17496,map__17496__$1,params0,G__17495,G__17495__$1,vec__17492,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,vec__17486,seq__17487,first__17488,seq__17487__$1,op_k,vec__17489,arg,args,op){
return (function (acc_SINGLEQUOTE_,p__17498){
var map__17499 = p__17498;
var map__17499__$1 = (((((!((map__17499 == null))))?(((((map__17499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17499):map__17499);
var sel_item = map__17499__$1;
var ii_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17499__$1,cljs.core.cst$kw$ii_DASH_xy);
var main_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17499__$1,cljs.core.cst$kw$main_QMARK_);
return cljs.core.assoc_in(acc_SINGLEQUOTE_,ii_xy,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(params__$1,ii_xy),arg));
});})(params__$1,map__17496,map__17496__$1,params0,G__17495,G__17495__$1,vec__17492,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,vec__17486,seq__17487,first__17488,seq__17487__$1,op_k,vec__17489,arg,args,op))
,params__$1,cljs.core.cst$kw$sel_DASH_set.cljs$core$IFn$_invoke$arity$1(ui))], null);

break;
case "pth-append":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,cljs.core.update.cljs$core$IFn$_invoke$arity$4(params,cljs.core.cst$kw$script,paintscript.ops.append_pth,pi_sel),cljs.core.cst$kw$ui,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sel,null,cljs.core.cst$kw$snap,null], null)], 0))], null);

break;
case "pth-del":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,cljs.core.update.cljs$core$IFn$_invoke$arity$4(params,cljs.core.cst$kw$script,paintscript.ops.del_pth,pi_sel),cljs.core.cst$kw$ui,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sel,null,cljs.core.cst$kw$snap,null], null)], 0))], null);

break;
case "el-append":
var el = arg;
var vec__17501 = (function (){var or__4131__auto__ = sel;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return paintscript.ops.tail_iii(params);
}
})();
var src_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17501,(0),null);
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17501,(1),null);
var eli = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17501,(2),null);
var eli_SINGLEQUOTE_ = (function (){var or__4131__auto__ = (function (){var G__17505 = eli;
if((G__17505 == null)){
return null;
} else {
return (G__17505 + (1));
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var sel_SINGLEQUOTE_ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [src_k,px,eli_SINGLEQUOTE_], null);
var init_QMARK_ = cljs.core.not(cljs.core.seq(cljs.core.cst$kw$script.cljs$core$IFn$_invoke$arity$1(params)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,((init_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(params,cljs.core.cst$kw$script,cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.PersistentArrayMap.EMPTY,el], null)):(cljs.core.truth_(el)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src_k,px], null),paintscript.ops.append_el,eli,el):cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src_k,px], null),paintscript.ops.append_el,eli)
)),cljs.core.cst$kw$ui,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ui,cljs.core.cst$kw$sel,sel_SINGLEQUOTE_)], null);

break;
case "el-del":
var eli_SINGLEQUOTE_ = (function (){var x__4219__auto__ = (eli_sel - (1));
var y__4220__auto__ = (0);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src_k_sel,pi_sel], null),paintscript.ops.del_el,eli_sel),cljs.core.cst$kw$ui,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [src_k_sel,pi_sel,eli_SINGLEQUOTE_], null)], null)], 0))], null);

break;
case "el-tf":
var to = arg;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src_k_sel,pi_sel], null),paintscript.ops.transform_el,eli_sel,to),cljs.core.cst$kw$ui,cljs.core.update.cljs$core$IFn$_invoke$arity$3(ui,cljs.core.cst$kw$sel,((function (to,G__17495,G__17495__$1,vec__17492,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,vec__17486,seq__17487,first__17488,seq__17487__$1,op_k,vec__17489,arg,args,op){
return (function (p1__17480_SHARP_){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),p1__17480_SHARP_);
});})(to,G__17495,G__17495__$1,vec__17492,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,vec__17486,seq__17487,first__17488,seq__17487__$1,op_k,vec__17489,arg,args,op))
)], null);

break;
case "xy-append":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$script,pi_sel], null),paintscript.ops.append_pnt,eli_sel),cljs.core.cst$kw$ui,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sel,null,cljs.core.cst$kw$snap,null], null)], 0))], null);

break;
case "xy-del":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$script,pi_sel], null),paintscript.ops.del_pnt,eli_sel,(xyi_sel - paintscript.nav.xyi0)),cljs.core.cst$kw$ui,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sel,null,cljs.core.cst$kw$snap,null], null)], 0))], null);

break;
case "rel->abs":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,paintscript.ops.absolute.cljs$core$IFn$_invoke$arity$2(params,sel)], null);

break;
case "short->full":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,paintscript.ops.full.cljs$core$IFn$_invoke$arity$2(params,sel)], null);

break;
case "normalize":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,paintscript.ops.normalize.cljs$core$IFn$_invoke$arity$2(params,sel)], null);

break;
case "scale":
var vec__17506 = args;
var ctr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17506,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17506,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,paintscript.ops.scale.cljs$core$IFn$_invoke$arity$4(params,sel,ctr,k)], null);

break;
case "mirror":
var vec__17509 = args;
var axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17509,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17509,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,paintscript.ops.mirror.cljs$core$IFn$_invoke$arity$4(params,(function (){var or__4131__auto__ = axis;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),(function (){var or__4131__auto__ = pos;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (100);
}
})(),sel)], null);

break;
case "round":
var n = arg;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,(function (){var fexpr__17516 = ((function (n,G__17495,G__17495__$1,vec__17492,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,vec__17486,seq__17487,first__17488,seq__17487__$1,op_k,vec__17489,arg,args,op){
return (function (s){
return clojure.walk.prewalk((function (){var G__17517 = n;
switch (G__17517) {
case "1":
return ((function (G__17517,n,G__17495,G__17495__$1,vec__17492,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,vec__17486,seq__17487,first__17488,seq__17487__$1,op_k,vec__17489,arg,args,op){
return (function (p1__17481_SHARP_){
var G__17518 = p1__17481_SHARP_;
if(typeof p1__17481_SHARP_ === 'number'){
return paintscript.util.round1(G__17518);
} else {
return G__17518;
}
});
;})(G__17517,n,G__17495,G__17495__$1,vec__17492,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,vec__17486,seq__17487,first__17488,seq__17487__$1,op_k,vec__17489,arg,args,op))

break;
case "2":
return ((function (G__17517,n,G__17495,G__17495__$1,vec__17492,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,vec__17486,seq__17487,first__17488,seq__17487__$1,op_k,vec__17489,arg,args,op){
return (function (p1__17482_SHARP_){
var G__17519 = p1__17482_SHARP_;
if(typeof p1__17482_SHARP_ === 'number'){
return paintscript.util.round2(G__17519);
} else {
return G__17519;
}
});
;})(G__17517,n,G__17495,G__17495__$1,vec__17492,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,vec__17486,seq__17487,first__17488,seq__17487__$1,op_k,vec__17489,arg,args,op))

break;
default:
return ((function (G__17517,n,G__17495,G__17495__$1,vec__17492,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,vec__17486,seq__17487,first__17488,seq__17487__$1,op_k,vec__17489,arg,args,op){
return (function (p1__17483_SHARP_){
var G__17520 = p1__17483_SHARP_;
if(typeof p1__17483_SHARP_ === 'number'){
return paintscript.util.round(G__17520);
} else {
return G__17520;
}
});
;})(G__17517,n,G__17495,G__17495__$1,vec__17492,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,vec__17486,seq__17487,first__17488,seq__17487__$1,op_k,vec__17489,arg,args,op))

}
})(),s);
});})(n,G__17495,G__17495__$1,vec__17492,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,vec__17486,seq__17487,first__17488,seq__17487__$1,op_k,vec__17489,arg,args,op))
;
return fexpr__17516(params);
})()], null);

break;
case "translate":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,paintscript.ops.translate.cljs$core$IFn$_invoke$arity$3(params,sel,arg)], null);

break;
case "rotate":
var vec__17521 = args;
var alpha = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17521,(0),null);
var center = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17521,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,paintscript.ops.rotate.cljs$core$IFn$_invoke$arity$4(params,sel,center,alpha)], null);

break;
case "clear":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params,paintscript.ctrl.params_clear], 0)),cljs.core.cst$kw$ui,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sel,null,cljs.core.cst$kw$snap,null], null)], 0))], null);

break;
case "def":
var vec__17524 = args;
var pk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17524,(0),null);
var map__17527 = params;
var map__17527__$1 = (((((!((map__17527 == null))))?(((((map__17527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17527):map__17527);
var defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17527__$1,cljs.core.cst$kw$defs);
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(defs,pk);
if(cljs.core.truth_(temp__5718__auto__)){
var els = temp__5718__auto__;
var eli = (function (){var x__4219__auto__ = (cljs.core.count(els) - (1));
var y__4220__auto__ = (0);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$defs,pk,eli], null)], null)], 0))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,(function (){var fexpr__17529 = ((function (temp__5718__auto__,vec__17524,pk,map__17527,map__17527__$1,defs,G__17495,G__17495__$1,vec__17492,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,vec__17486,seq__17487,first__17488,seq__17487__$1,op_k,vec__17489,arg,args,op){
return (function (p1__17484_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(p1__17484_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$defs,pk], null),cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$script,cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref,pk], null)], null));
});})(temp__5718__auto__,vec__17524,pk,map__17527,map__17527__$1,defs,G__17495,G__17495__$1,vec__17492,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,vec__17486,seq__17487,first__17488,seq__17487__$1,op_k,vec__17489,arg,args,op))
;
return fexpr__17529(params);
})(),cljs.core.cst$kw$ui,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$defs,pk,null], null)], null)], 0))], null);
}

break;
case "svg-path":
var vec__17530 = args;
var svg_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17530,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$svg_DASH_path,svg_path], 0));

var p_new = paintscript.conv.path_d__GT_path(svg_path);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(p_new);

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,cljs.core.update.cljs$core$IFn$_invoke$arity$4(params,cljs.core.cst$kw$script,cljs.core.conj,p_new)], null);

break;
case "sel":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui,(function (){var G__17533 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sel,arg], null)], 0));
if((arg == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17533,cljs.core.cst$kw$snap,null);
} else {
return G__17533;
}
})()], null);

break;
case "set-p-opts":
var vec__17534 = arg;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17534,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17534,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,paintscript.ops.update_p_opts.cljs$core$IFn$_invoke$arity$variadic(params,sel,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k,v], 0))], null);

break;
case "toggle-snap":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui,cljs.core.update.cljs$core$IFn$_invoke$arity$3(ui,cljs.core.cst$kw$snap_DASH_to_DASH_grid_QMARK_,cljs.core.not)], null);

break;
case "toggle-insert":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui,cljs.core.update.cljs$core$IFn$_invoke$arity$3(ui,cljs.core.cst$kw$insert_DASH_mode_QMARK_,cljs.core.not)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17495__$1)].join('')));

}
});
paintscript.ctrl.get_wh = (function paintscript$ctrl$get_wh(params){
var map__17539 = cljs.core.cst$kw$canvas.cljs$core$IFn$_invoke$arity$1(params);
var map__17539__$1 = (((((!((map__17539 == null))))?(((((map__17539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17539):map__17539);
var dims = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17539__$1,cljs.core.cst$kw$dims);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17539__$1,cljs.core.cst$kw$scale);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,scale),dims);
});
paintscript.ctrl.dispatch_BANG_ = (function paintscript$ctrl$dispatch_BANG_(_BANG_config,_BANG_params,_BANG_s_log,_BANG_ui,p__17542){
var vec__17543 = p__17542;
var op_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17543,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17543,(1),null);
var op = vec__17543;
var G__17546 = op_k;
var G__17546__$1 = (((G__17546 instanceof cljs.core.Keyword))?G__17546.fqn:null);
switch (G__17546__$1) {
case "cmd":
var temp__5720__auto__ = paintscript.ctrl.parse_cmd_line(arg);
if(cljs.core.truth_(temp__5720__auto__)){
var op_vec = temp__5720__auto__;
return (paintscript.ctrl.dispatch_BANG_.cljs$core$IFn$_invoke$arity$5 ? paintscript.ctrl.dispatch_BANG_.cljs$core$IFn$_invoke$arity$5(_BANG_config,_BANG_params,_BANG_s_log,_BANG_ui,op_vec) : paintscript.ctrl.dispatch_BANG_.call(null,_BANG_config,_BANG_params,_BANG_s_log,_BANG_ui,op_vec));
} else {
return null;
}

break;
case "undo":
return paintscript.s_log.op(_BANG_s_log,_BANG_params,_BANG_ui,cljs.core.cst$kw$undo);

break;
case "log-clear":
return paintscript.s_log.op(_BANG_s_log,_BANG_params,_BANG_ui,cljs.core.cst$kw$clear);

break;
case "log-clear<":
return paintscript.s_log.op(_BANG_s_log,_BANG_params,_BANG_ui,cljs.core.cst$kw$clear_LT_);

break;
case "log-clear>":
return paintscript.s_log.op(_BANG_s_log,_BANG_params,_BANG_ui,cljs.core.cst$kw$clear_GT_);

break;
case "dl-png":
case "dl-svg":
var G__17549 = paintscript.ctrl.get_wh(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(_BANG_config),cljs.core.deref(_BANG_params)], 0)));
var G__17550 = cljs.core.cst$kw$svg_DASH_dom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_ui));
var G__17551 = ((function (G__17549,G__17550,G__17546,G__17546__$1,vec__17543,op_k,arg,op){
return (function (p1__17541_SHARP_){
return paintscript.ops_svg.download_BANG_(p1__17541_SHARP_,["paintscript",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__17553 = op_k;
var G__17553__$1 = (((G__17553 instanceof cljs.core.Keyword))?G__17553.fqn:null);
switch (G__17553__$1) {
case "dl-png":
return ".png";

break;
default:
return ".svg";

}
})())].join(''));
});})(G__17549,G__17550,G__17546,G__17546__$1,vec__17543,op_k,arg,op))
;
var fexpr__17548 = (function (){var G__17554 = op_k;
var G__17554__$1 = (((G__17554 instanceof cljs.core.Keyword))?G__17554.fqn:null);
switch (G__17554__$1) {
case "dl-png":
return paintscript.ops_svg.to_png_BANG_;

break;
default:
return paintscript.ops_svg.to_svg;

}
})();
return (fexpr__17548.cljs$core$IFn$_invoke$arity$3 ? fexpr__17548.cljs$core$IFn$_invoke$arity$3(G__17549,G__17550,G__17551) : fexpr__17548.call(null,G__17549,G__17550,G__17551));

break;
default:
var params = cljs.core.deref(_BANG_params);
var ui = cljs.core.deref(_BANG_ui);
try{var map__17556 = paintscript.ctrl.handle_op(params,ui,op);
var map__17556__$1 = (((((!((map__17556 == null))))?(((((map__17556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17556):map__17556);
var params_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17556__$1,cljs.core.cst$kw$params);
var ui_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17556__$1,cljs.core.cst$kw$ui);
if(cljs.core.truth_(params_SINGLEQUOTE_)){
cljs.core.reset_BANG_(_BANG_params,params_SINGLEQUOTE_);
} else {
}

if(cljs.core.truth_(ui_SINGLEQUOTE_)){
cljs.core.reset_BANG_(_BANG_ui,ui_SINGLEQUOTE_);
} else {
}

return paintscript.s_log.add(_BANG_s_log,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$op,op,cljs.core.cst$kw$params,(function (){var or__4131__auto__ = params_SINGLEQUOTE_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return params;
}
})(),cljs.core.cst$kw$ui,(function (){var G__17558 = (function (){var or__4131__auto__ = ui_SINGLEQUOTE_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ui;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_sel_DASH_d,op_k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17558,cljs.core.cst$kw$snap,null);
} else {
return G__17558;
}
})()], null));
}catch (e17555){var e = e17555;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handle_DASH_op_DASH_exception,e], 0));

console.log(e);

cljs.core.reset_BANG_(_BANG_params,params);

return cljs.core.reset_BANG_(_BANG_ui,ui);
}
}
});
paintscript.ctrl.pth__GT_cp_ii = (function paintscript$ctrl$pth__GT_cp_ii(pth,eli){
var eli_SINGLEQUOTE_ = (eli + (1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var temp__5720__auto__ = (function (){var G__17562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pth,eli);
if((G__17562 == null)){
return null;
} else {
return paintscript.el.el__GT_cp_i(G__17562,cljs.core.cst$kw$term);
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var cp_i = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eli,cp_i], null)], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = (function (){var G__17563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pth,eli_SINGLEQUOTE_);
if((G__17563 == null)){
return null;
} else {
return paintscript.el.el__GT_cp_i(G__17563,cljs.core.cst$kw$init);
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var cp_i = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eli_SINGLEQUOTE_,cp_i], null)], null);
} else {
return null;
}
})());
});
/**
 * attached to SVG element
 */
paintscript.ctrl.drag_and_drop_fns = (function paintscript$ctrl$drag_and_drop_fns(_BANG_scale,_BANG_params,_BANG_ui,dispatch_BANG_){
var _BANG_snap = reagent.core.cursor(_BANG_ui,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$snap], null));
var _BANG_sel = reagent.core.cursor(_BANG_ui,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sel], null));
var _BANG_sel_set = reagent.core.cursor(_BANG_ui,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sel_DASH_set], null));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (_BANG_snap,_BANG_sel,_BANG_sel_set){
return (function (p1__17564_SHARP_){
var map__17565 = cljs.core.deref(_BANG_ui);
var map__17565__$1 = (((((!((map__17565 == null))))?(((((map__17565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17565):map__17565);
var xy_svg_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17565__$1,cljs.core.cst$kw$xy_DASH_svg_BANG_);
var sel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17565__$1,cljs.core.cst$kw$sel);
var sel_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17565__$1,cljs.core.cst$kw$sel_DASH_set);
var insert_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17565__$1,cljs.core.cst$kw$insert_DASH_mode_QMARK_);
var xy = paintscript.ctrl.xy_mouse(p1__17564_SHARP_);
var scale = cljs.core.deref(_BANG_scale);
var map__17566 = cljs.core.meta(sel);
var map__17566__$1 = (((((!((map__17566 == null))))?(((((map__17566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17566):map__17566);
var main_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17566__$1,cljs.core.cst$kw$main_QMARK_);
var shift_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17566__$1,cljs.core.cst$kw$shift_QMARK_);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.count(sel))){
var sel_set_SINGLEQUOTE__17577 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ii_DASH_xy,sel,cljs.core.cst$kw$main_QMARK_,main_QMARK_], null)]),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__17565,map__17565__$1,xy_svg_BANG_,sel,sel_set,insert_mode_QMARK_,xy,scale,map__17566,map__17566__$1,main_QMARK_,shift_QMARK_,_BANG_snap,_BANG_sel,_BANG_sel_set){
return (function (eli_cpi){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ii_DASH_xy,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),sel),eli_cpi)], null);
});})(map__17565,map__17565__$1,xy_svg_BANG_,sel,sel_set,insert_mode_QMARK_,xy,scale,map__17566,map__17566__$1,main_QMARK_,shift_QMARK_,_BANG_snap,_BANG_sel,_BANG_sel_set))
),(cljs.core.truth_(main_QMARK_)?paintscript.ctrl.pth__GT_cp_ii(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_params),cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),sel)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sel,(2))):null));
if(cljs.core.truth_(shift_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_sel_set,clojure.set.union,sel_set_SINGLEQUOTE__17577);
} else {
cljs.core.reset_BANG_(_BANG_sel_set,sel_set_SINGLEQUOTE__17577);
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_snap,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params0,cljs.core.deref(_BANG_params),cljs.core.cst$kw$m0,xy], null));
} else {
if(cljs.core.truth_(insert_mode_QMARK_)){
var xy__$1 = paintscript.ctrl.xy_mouse(p1__17564_SHARP_);
var xy_SINGLEQUOTE_ = (function (){var xy_SINGLEQUOTE_ = paintscript.ctrl.xy_mouse(p1__17564_SHARP_);
var xy_SINGLEQUOTE___$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._,xy_SINGLEQUOTE_,(xy_svg_BANG_.cljs$core$IFn$_invoke$arity$0 ? xy_svg_BANG_.cljs$core$IFn$_invoke$arity$0() : xy_svg_BANG_.call(null)));
var xy_SINGLEQUOTE___$2 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xy_SINGLEQUOTE___$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,scale], null));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(paintscript.util.round,xy_SINGLEQUOTE___$2);
})();
var el_k = ((cljs.core.seq(cljs.core.cst$kw$script.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_params))))?cljs.core.cst$kw$L:cljs.core.cst$kw$M);
var G__17569 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$el_DASH_append,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el_k,xy_SINGLEQUOTE_], null)], null);
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17569) : dispatch_BANG_.call(null,G__17569));
} else {
return null;
}
}
});})(_BANG_snap,_BANG_sel,_BANG_sel_set))
,cljs.core.cst$kw$on_DASH_mouse_DASH_move,((function (_BANG_snap,_BANG_sel,_BANG_sel_set){
return (function (ev){
var map__17570 = cljs.core.deref(_BANG_ui);
var map__17570__$1 = (((((!((map__17570 == null))))?(((((map__17570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17570):map__17570);
var map__17571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17570__$1,cljs.core.cst$kw$snap);
var map__17571__$1 = (((((!((map__17571 == null))))?(((((map__17571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17571):map__17571);
var snapshot = map__17571__$1;
var params0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17571__$1,cljs.core.cst$kw$params0);
var m0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17571__$1,cljs.core.cst$kw$m0);
var snap_to_grid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17570__$1,cljs.core.cst$kw$snap_DASH_to_DASH_grid_QMARK_);
var scale = cljs.core.deref(_BANG_scale);
if(cljs.core.truth_(params0)){
var m1 = paintscript.ctrl.xy_mouse(ev);
var d = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._,m1,m0);
var d_SINGLEQUOTE_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,scale], null));
var d_SINGLEQUOTE___$1 = (cljs.core.truth_(snap_to_grid_QMARK_)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(paintscript.util.round,d_SINGLEQUOTE_):d_SINGLEQUOTE_);
var G__17574 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_sel_DASH_d,d_SINGLEQUOTE___$1], null);
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17574) : dispatch_BANG_.call(null,G__17574));
} else {
return null;
}
});})(_BANG_snap,_BANG_sel,_BANG_sel_set))
,cljs.core.cst$kw$on_DASH_mouse_DASH_up,((function (_BANG_snap,_BANG_sel,_BANG_sel_set){
return (function (){
var map__17575 = cljs.core.deref(_BANG_snap);
var map__17575__$1 = (((((!((map__17575 == null))))?(((((map__17575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17575):map__17575);
var sel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17575__$1,cljs.core.cst$kw$sel);
var sel_prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17575__$1,cljs.core.cst$kw$sel_DASH_prev);
var params0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17575__$1,cljs.core.cst$kw$params0);
var params = cljs.core.deref(_BANG_params);
cljs.core.reset_BANG_(_BANG_snap,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sel_DASH_prev,sel], null));

if(cljs.core.truth_((function (){var and__4120__auto__ = sel;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = sel_prev;
if(cljs.core.truth_(and__4120__auto____$1)){
var and__4120__auto____$2 = params0;
if(cljs.core.truth_(and__4120__auto____$2)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sel,sel_prev)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(params0,params)));
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
cljs.core.reset_BANG_(_BANG_sel,null);

return cljs.core.reset_BANG_(_BANG_snap,null);
} else {
return null;
}
});})(_BANG_snap,_BANG_sel,_BANG_sel_set))
], null);
});
paintscript.ctrl.keybind_fns = (function paintscript$ctrl$keybind_fns(_BANG_params,_BANG_ui,dispatch_BANG_){
var upd_BANG_ = (function (p1__17578_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_params,cljs.core.assoc_in,cljs.core.cst$kw$sel.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_ui)),p1__17578_SHARP_);
});
var get_BANG_ = ((function (upd_BANG_){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_params),cljs.core.cst$kw$sel.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_ui)));
});})(upd_BANG_))
;
return new cljs.core.PersistentArrayMap(null, 5, ["left",((function (upd_BANG_,get_BANG_){
return (function (){
var G__17579 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_sel_DASH_d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null);
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17579) : dispatch_BANG_.call(null,G__17579));
});})(upd_BANG_,get_BANG_))
,"right",((function (upd_BANG_,get_BANG_){
return (function (){
var G__17580 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_sel_DASH_d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null);
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17580) : dispatch_BANG_.call(null,G__17580));
});})(upd_BANG_,get_BANG_))
,"up",((function (upd_BANG_,get_BANG_){
return (function (){
var G__17581 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_sel_DASH_d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null);
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17581) : dispatch_BANG_.call(null,G__17581));
});})(upd_BANG_,get_BANG_))
,"down",((function (upd_BANG_,get_BANG_){
return (function (){
var G__17582 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_sel_DASH_d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null);
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17582) : dispatch_BANG_.call(null,G__17582));
});})(upd_BANG_,get_BANG_))
,"backspace",((function (upd_BANG_,get_BANG_){
return (function (){
var temp__5720__auto__ = get_BANG_();
if(cljs.core.truth_(temp__5720__auto__)){
var vec__17583 = temp__5720__auto__;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17583,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17583,(1),null);
var G__17586 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xy_DASH_del], null);
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__17586) : dispatch_BANG_.call(null,G__17586));
} else {
return null;
}
});})(upd_BANG_,get_BANG_))
], null);
});
