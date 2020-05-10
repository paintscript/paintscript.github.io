// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('paintscript.ops');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('paintscript.util');
goog.require('paintscript.els');
paintscript.ops.vec_insert = (function paintscript$ops$vec_insert(coll,i,el){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),i),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,i,cljs.core.count(coll))], 0)));
});
paintscript.ops.vec_replace = (function paintscript$ops$vec_replace(coll,i,el){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),i),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(i + (1)),cljs.core.count(coll))], 0)));
});
paintscript.ops.vec_remove = (function paintscript$ops$vec_remove(coll,i){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(i + (1)),cljs.core.count(coll))));
});
paintscript.ops.vec_append = (function paintscript$ops$vec_append(coll,i,el){
return paintscript.ops.vec_insert(coll,(i + (1)),el);
});
paintscript.ops.has_pred_QMARK_ = (function paintscript$ops$has_pred_QMARK_(pi){
return (pi > (0));
});
paintscript.ops.el_len = (function paintscript$ops$el_len(el){
return (cljs.core.count(el) - (1));
});
paintscript.ops.get_tgt = (function paintscript$ops$get_tgt(el){
return cljs.core.last(el);
});
paintscript.ops.offset_pnt = (function paintscript$ops$offset_pnt(pnt,delta){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,pnt,delta);
});
paintscript.ops.xy_delta = (function paintscript$ops$xy_delta(pnt1,pnt2){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._,pnt1,pnt2);
});
paintscript.ops.get_pnt = (function paintscript$ops$get_pnt(els,p__8802){
var vec__8803 = p__8802;
var eli = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8803,(0),null);
var xyi_abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8803,(1),null);
var ii = vec__8803;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(els,ii);
});
paintscript.ops.get_pred_tgt = (function paintscript$ops$get_pred_tgt(els,eli){
return paintscript.ops.get_tgt(cljs.core.get.cljs$core$IFn$_invoke$arity$2(els,(eli - (1))));
});
paintscript.ops.tail_iii = (function paintscript$ops$tail_iii(p__8806){
var map__8807 = p__8806;
var map__8807__$1 = (((((!((map__8807 == null))))?(((((map__8807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8807):map__8807);
var params = map__8807__$1;
var script = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8807__$1,cljs.core.cst$kw$script);
var pi = (function (){var x__4219__auto__ = (cljs.core.count(script) - (1));
var y__4220__auto__ = (0);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var eli = (function (){var x__4219__auto__ = (cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(script,pi)) - (1));
var y__4220__auto__ = (1);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var xyi = (function (){var G__8809 = script;
var G__8809__$1 = (((G__8809 == null))?null:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__8809,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pi,eli], null)));
var G__8809__$2 = (((G__8809__$1 == null))?null:cljs.core.count(G__8809__$1));
if((G__8809__$2 == null)){
return null;
} else {
return (G__8809__$2 - (1));
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$script,pi,eli,xyi], null);
});
paintscript.ops.xyi_offset = (1);
paintscript.ops.el_i_offset = (2);
paintscript.ops.infer_succ_pnt = (function paintscript$ops$infer_succ_pnt(els,eli,xyi){
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(els,eli);
var xyi_SINGLEQUOTE_ = (xyi + paintscript.ops.xyi_offset);
var pnt_0 = paintscript.ops.get_pnt(els,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eli,xyi_SINGLEQUOTE_], null));
var G__8810 = paintscript.ops.el_len(el);
switch (G__8810) {
case (0):
if(paintscript.ops.has_pred_QMARK_(eli)){
return paintscript.ops.offset_pnt(paintscript.ops.get_pred_tgt(els,eli),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}

break;
case (1):
if(paintscript.ops.has_pred_QMARK_(eli)){
var pnt_1 = paintscript.ops.get_tgt(cljs.core.get.cljs$core$IFn$_invoke$arity$2(els,(eli - (1))));
return paintscript.ops.offset_pnt(pnt_0,paintscript.ops.xy_delta(pnt_0,pnt_1));
} else {
return paintscript.ops.offset_pnt(pnt_0,paintscript.ops.xy_delta(pnt_0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)));
}

break;
default:
var pnt_1 = paintscript.ops.get_pnt(els,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eli,(xyi_SINGLEQUOTE_ - (1))], null));
return paintscript.ops.offset_pnt(pnt_0,paintscript.ops.xy_delta(pnt_0,pnt_1));

}
});
paintscript.ops.append_pnt = (function paintscript$ops$append_pnt(var_args){
var G__8813 = arguments.length;
switch (G__8813) {
case 2:
return paintscript.ops.append_pnt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paintscript.ops.append_pnt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return paintscript.ops.append_pnt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

paintscript.ops.append_pnt.cljs$core$IFn$_invoke$arity$2 = (function (els,eli){
return paintscript.ops.append_pnt.cljs$core$IFn$_invoke$arity$3(els,eli,(paintscript.ops.el_len(cljs.core.get.cljs$core$IFn$_invoke$arity$2(els,eli)) - (1)));
});

paintscript.ops.append_pnt.cljs$core$IFn$_invoke$arity$3 = (function (els,eli,xyi){
return paintscript.ops.append_pnt.cljs$core$IFn$_invoke$arity$4(els,eli,xyi,paintscript.ops.infer_succ_pnt(els,eli,xyi));
});

paintscript.ops.append_pnt.cljs$core$IFn$_invoke$arity$4 = (function (els,eli,xyi,pnt){
var xyi_SINGLEQUOTE_ = (xyi + paintscript.ops.xyi_offset);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(els,eli,paintscript.ops.vec_append,xyi_SINGLEQUOTE_,pnt);
});

paintscript.ops.append_pnt.cljs$lang$maxFixedArity = 4;

paintscript.ops.del_pnt = (function paintscript$ops$del_pnt(els,eli,xyi){
var xyi_SINGLEQUOTE_ = (xyi + paintscript.ops.xyi_offset);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(els,eli,paintscript.ops.vec_remove,xyi_SINGLEQUOTE_);
});
paintscript.ops.infer_succ_el = (function paintscript$ops$infer_succ_el(els,eli){
var vec__8815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(els,eli);
var seq__8816 = cljs.core.seq(vec__8815);
var first__8817 = cljs.core.first(seq__8816);
var seq__8816__$1 = cljs.core.next(seq__8816);
var k = first__8817;
var pnts = seq__8816__$1;
var el_1 = vec__8815;
var G__8818 = k;
var G__8818__$1 = (((G__8818 instanceof cljs.core.Keyword))?G__8818.fqn:null);
switch (G__8818__$1) {
case "M":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$L,paintscript.ops.offset_pnt(cljs.core.last(pnts),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null))], null);

break;
case "L":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$L,paintscript.ops.offset_pnt(cljs.core.last(pnts),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null))], null);

break;
case "C":
var tgt = paintscript.ops.offset_pnt(cljs.core.last(pnts),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$S,cljs.core.last(pnts),tgt], null);

break;
case "S":
var tgt = paintscript.ops.offset_pnt(cljs.core.last(pnts),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$S,tgt,tgt], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8818__$1)].join('')));

}
});
paintscript.ops.append_el = (function paintscript$ops$append_el(var_args){
var G__8821 = arguments.length;
switch (G__8821) {
case 2:
return paintscript.ops.append_el.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paintscript.ops.append_el.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

paintscript.ops.append_el.cljs$core$IFn$_invoke$arity$2 = (function (els,eli){
return paintscript.ops.append_el.cljs$core$IFn$_invoke$arity$3(els,eli,paintscript.ops.infer_succ_el(els,eli));
});

paintscript.ops.append_el.cljs$core$IFn$_invoke$arity$3 = (function (els,eli,el){
if(cljs.core.truth_(eli)){
return paintscript.ops.vec_append(els,eli,el);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null);
}
});

paintscript.ops.append_el.cljs$lang$maxFixedArity = 3;

paintscript.ops.del_el = (function paintscript$ops$del_el(els,eli){
return paintscript.ops.vec_remove(els,eli);
});
paintscript.ops.transform_el = (function paintscript$ops$transform_el(els,eli,to){
var vec__8823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(els,eli);
var el_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8823,(0),null);
var el = vec__8823;
var vec__8826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(els,(eli - (1)));
var el_1_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8826,(0),null);
var el_1 = vec__8826;
var el_SINGLEQUOTE_ = (function (){var G__8829 = el_k;
var G__8829__$1 = (((G__8829 instanceof cljs.core.Keyword))?G__8829.fqn:null);
switch (G__8829__$1) {
case "L":
var tgt = cljs.core.last(el);
var G__8830 = to;
var G__8830__$1 = (((G__8830 instanceof cljs.core.Keyword))?G__8830.fqn:null);
switch (G__8830__$1) {
case "S":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$S,tgt,tgt], null);

break;
case "Q":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Q,tgt,tgt], null);

break;
case "C":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$C,cljs.core.last(el_1),tgt,tgt], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8830__$1)].join('')));

}

break;
case "C":
var vec__8831 = el;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8831,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8831,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8831,(2),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8831,(3),null);
var G__8834 = to;
var G__8834__$1 = (((G__8834 instanceof cljs.core.Keyword))?G__8834.fqn:null);
switch (G__8834__$1) {
case "S":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$S,c2,tgt], null);

break;
case "Q":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Q,c2,tgt], null);

break;
case "L":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$L,tgt], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8834__$1)].join('')));

}

break;
case "S":
var vec__8835 = el;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8835,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8835,(1),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8835,(2),null);
var G__8838 = to;
var G__8838__$1 = (((G__8838 instanceof cljs.core.Keyword))?G__8838.fqn:null);
switch (G__8838__$1) {
case "L":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$L,tgt], null);

break;
case "Q":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Q,c,tgt], null);

break;
case "C":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$C,cljs.core.last(el_1),c,tgt], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8838__$1)].join('')));

}

break;
case "Q":
var vec__8839 = el;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8839,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8839,(1),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8839,(2),null);
var G__8842 = to;
var G__8842__$1 = (((G__8842 instanceof cljs.core.Keyword))?G__8842.fqn:null);
switch (G__8842__$1) {
case "L":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$L,tgt], null);

break;
case "S":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$S,c,tgt], null);

break;
case "C":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$C,cljs.core.last(el_1),c,tgt], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8842__$1)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8829__$1)].join('')));

}
})();
return paintscript.ops.vec_replace(els,eli,el_SINGLEQUOTE_);
});
paintscript.ops.append_pth = (function paintscript$ops$append_pth(script,pi){
return paintscript.ops.vec_append(script,pi,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null)], null)], null));
});
paintscript.ops.del_pth = (function paintscript$ops$del_pth(script,pi){
return paintscript.ops.vec_remove(script,pi);
});
paintscript.ops.translate = (function paintscript$ops$translate(var_args){
var G__8849 = arguments.length;
switch (G__8849) {
case 3:
return paintscript.ops.translate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return paintscript.ops.translate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

paintscript.ops.translate.cljs$core$IFn$_invoke$arity$3 = (function (params,ii,n){
return paintscript.els.update_px.cljs$core$IFn$_invoke$arity$variadic(params,ii,paintscript.els.translate_els,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n], 0));
});

paintscript.ops.translate.cljs$core$IFn$_invoke$arity$2 = (function (params,n){
return paintscript.els.update_px_all.cljs$core$IFn$_invoke$arity$variadic(params,paintscript.els.translate_els,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n], 0));
});

paintscript.ops.translate.cljs$lang$maxFixedArity = 3;

paintscript.ops.rotate = (function paintscript$ops$rotate(var_args){
var G__8852 = arguments.length;
switch (G__8852) {
case 4:
return paintscript.ops.rotate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return paintscript.ops.rotate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

paintscript.ops.rotate.cljs$core$IFn$_invoke$arity$4 = (function (params,ii,c,a){
return paintscript.els.update_px.cljs$core$IFn$_invoke$arity$variadic(params,ii,paintscript.els.rotate_els,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c,a], 0));
});

paintscript.ops.rotate.cljs$core$IFn$_invoke$arity$3 = (function (params,c,a){
return paintscript.els.update_px_all.cljs$core$IFn$_invoke$arity$variadic(params,paintscript.els.rotate_els,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c,a], 0));
});

paintscript.ops.rotate.cljs$lang$maxFixedArity = 4;

paintscript.ops.scale = (function paintscript$ops$scale(var_args){
var G__8855 = arguments.length;
switch (G__8855) {
case 4:
return paintscript.ops.scale.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return paintscript.ops.scale.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

paintscript.ops.scale.cljs$core$IFn$_invoke$arity$4 = (function (params,ii,c,n){
return paintscript.els.update_px.cljs$core$IFn$_invoke$arity$variadic(params,ii,paintscript.els.scale_els,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c,n], 0));
});

paintscript.ops.scale.cljs$core$IFn$_invoke$arity$3 = (function (params,c,n){
return paintscript.els.update_px_all.cljs$core$IFn$_invoke$arity$variadic(params,paintscript.els.scale_els,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c,n], 0));
});

paintscript.ops.scale.cljs$lang$maxFixedArity = 4;

paintscript.ops.absolute = (function paintscript$ops$absolute(var_args){
var G__8858 = arguments.length;
switch (G__8858) {
case 2:
return paintscript.ops.absolute.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return paintscript.ops.absolute.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

paintscript.ops.absolute.cljs$core$IFn$_invoke$arity$2 = (function (params,ii){
return paintscript.els.update_px.cljs$core$IFn$_invoke$arity$variadic(params,ii,paintscript.els.normalize_els,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$op,cljs.core.cst$kw$rel_DASH__GT_abs], 0));
});

paintscript.ops.absolute.cljs$core$IFn$_invoke$arity$1 = (function (params){
return paintscript.els.update_px_all.cljs$core$IFn$_invoke$arity$variadic(params,paintscript.els.normalize_els,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$op,cljs.core.cst$kw$rel_DASH__GT_abs], 0));
});

paintscript.ops.absolute.cljs$lang$maxFixedArity = 2;

paintscript.ops.full = (function paintscript$ops$full(var_args){
var G__8861 = arguments.length;
switch (G__8861) {
case 2:
return paintscript.ops.full.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return paintscript.ops.full.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

paintscript.ops.full.cljs$core$IFn$_invoke$arity$2 = (function (params,ii){
return paintscript.els.update_px.cljs$core$IFn$_invoke$arity$variadic(params,ii,paintscript.els.normalize_els,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$op,cljs.core.cst$kw$short_DASH__GT_full], 0));
});

paintscript.ops.full.cljs$core$IFn$_invoke$arity$1 = (function (params){
return paintscript.els.update_px_all.cljs$core$IFn$_invoke$arity$variadic(params,paintscript.els.normalize_els,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$op,cljs.core.cst$kw$short_DASH__GT_full], 0));
});

paintscript.ops.full.cljs$lang$maxFixedArity = 2;

paintscript.ops.normalize = (function paintscript$ops$normalize(var_args){
var G__8864 = arguments.length;
switch (G__8864) {
case 2:
return paintscript.ops.normalize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return paintscript.ops.normalize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

paintscript.ops.normalize.cljs$core$IFn$_invoke$arity$2 = (function (params,ii){
return paintscript.els.update_px.cljs$core$IFn$_invoke$arity$variadic(params,ii,paintscript.els.normalize_els,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$op,cljs.core.cst$kw$all], 0));
});

paintscript.ops.normalize.cljs$core$IFn$_invoke$arity$1 = (function (params){
return paintscript.els.update_px_all.cljs$core$IFn$_invoke$arity$variadic(params,paintscript.els.normalize_els,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$op,cljs.core.cst$kw$all], 0));
});

paintscript.ops.normalize.cljs$lang$maxFixedArity = 2;

paintscript.ops.mirror = (function paintscript$ops$mirror(var_args){
var G__8869 = arguments.length;
switch (G__8869) {
case 4:
return paintscript.ops.mirror.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return paintscript.ops.mirror.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

paintscript.ops.mirror.cljs$core$IFn$_invoke$arity$4 = (function (params,axis,pos,ii){
return paintscript.els.update_px(params,ii,(function (p1__8866_SHARP_){
return paintscript.els.mirror_els(axis,pos,p1__8866_SHARP_);
}));
});

paintscript.ops.mirror.cljs$core$IFn$_invoke$arity$3 = (function (params,axis,pos){
return paintscript.els.update_px_all(params,(function (p1__8867_SHARP_){
return paintscript.els.mirror_els(axis,pos,p1__8867_SHARP_);
}));
});

paintscript.ops.mirror.cljs$lang$maxFixedArity = 4;

paintscript.ops.update_p_opts = (function paintscript$ops$update_p_opts(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8875 = arguments.length;
var i__4731__auto___8876 = (0);
while(true){
if((i__4731__auto___8876 < len__4730__auto___8875)){
args__4736__auto__.push((arguments[i__4731__auto___8876]));

var G__8877 = (i__4731__auto___8876 + (1));
i__4731__auto___8876 = G__8877;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return paintscript.ops.update_p_opts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

paintscript.ops.update_p_opts.cljs$core$IFn$_invoke$arity$variadic = (function (params,ii,f,args){
var p_opts_i = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),ii),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,params,p_opts_i,f,args);
});

paintscript.ops.update_p_opts.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
paintscript.ops.update_p_opts.cljs$lang$applyTo = (function (seq8871){
var G__8872 = cljs.core.first(seq8871);
var seq8871__$1 = cljs.core.next(seq8871);
var G__8873 = cljs.core.first(seq8871__$1);
var seq8871__$2 = cljs.core.next(seq8871__$1);
var G__8874 = cljs.core.first(seq8871__$2);
var seq8871__$3 = cljs.core.next(seq8871__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8872,G__8873,G__8874,seq8871__$3);
});

