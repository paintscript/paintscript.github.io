// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('paintscript.render');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('paintscript.els');

/**
 * @interface
 */
paintscript.render.Renderer = function(){};

paintscript.render.els__GT_out = (function paintscript$render$els__GT_out(_,els){
if((((!((_ == null)))) && ((!((_.paintscript$render$Renderer$els__GT_out$arity$2 == null)))))){
return _.paintscript$render$Renderer$els__GT_out$arity$2(_,els);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (paintscript.render.els__GT_out[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(_,els) : m__4434__auto__.call(null,_,els));
} else {
var m__4431__auto__ = (paintscript.render.els__GT_out["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(_,els) : m__4431__auto__.call(null,_,els));
} else {
throw cljs.core.missing_protocol("Renderer.els->out",_);
}
}
}
});

paintscript.render.group = (function paintscript$render$group(_,els){
if((((!((_ == null)))) && ((!((_.paintscript$render$Renderer$group$arity$2 == null)))))){
return _.paintscript$render$Renderer$group$arity$2(_,els);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (paintscript.render.group[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(_,els) : m__4434__auto__.call(null,_,els));
} else {
var m__4431__auto__ = (paintscript.render.group["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(_,els) : m__4431__auto__.call(null,_,els));
} else {
throw cljs.core.missing_protocol("Renderer.group",_);
}
}
}
});

paintscript.render.tf = (function paintscript$render$tf(_,opts,el){
if((((!((_ == null)))) && ((!((_.paintscript$render$Renderer$tf$arity$3 == null)))))){
return _.paintscript$render$Renderer$tf$arity$3(_,opts,el);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (paintscript.render.tf[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(_,opts,el) : m__4434__auto__.call(null,_,opts,el));
} else {
var m__4431__auto__ = (paintscript.render.tf["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(_,opts,el) : m__4431__auto__.call(null,_,opts,el));
} else {
throw cljs.core.missing_protocol("Renderer.tf",_);
}
}
}
});

paintscript.render.tf_STAR_ = (function paintscript$render$tf_STAR_(_,opts,els){
if((((!((_ == null)))) && ((!((_.paintscript$render$Renderer$tf_STAR_$arity$3 == null)))))){
return _.paintscript$render$Renderer$tf_STAR_$arity$3(_,opts,els);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (paintscript.render.tf_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(_,opts,els) : m__4434__auto__.call(null,_,opts,els));
} else {
var m__4431__auto__ = (paintscript.render.tf_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(_,opts,els) : m__4431__auto__.call(null,_,opts,els));
} else {
throw cljs.core.missing_protocol("Renderer.tf*",_);
}
}
}
});

paintscript.render.paint = (function paintscript$render$paint(_,ps){
if((((!((_ == null)))) && ((!((_.paintscript$render$Renderer$paint$arity$2 == null)))))){
return _.paintscript$render$Renderer$paint$arity$2(_,ps);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (paintscript.render.paint[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(_,ps) : m__4434__auto__.call(null,_,ps));
} else {
var m__4431__auto__ = (paintscript.render.paint["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(_,ps) : m__4431__auto__.call(null,_,ps));
} else {
throw cljs.core.missing_protocol("Renderer.paint",_);
}
}
}
});

paintscript.render.paint_STAR_ = (function paintscript$render$paint_STAR_(_,ps_out,container_size,el_size){
if((((!((_ == null)))) && ((!((_.paintscript$render$Renderer$paint_STAR_$arity$4 == null)))))){
return _.paintscript$render$Renderer$paint_STAR_$arity$4(_,ps_out,container_size,el_size);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (paintscript.render.paint_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(_,ps_out,container_size,el_size) : m__4434__auto__.call(null,_,ps_out,container_size,el_size));
} else {
var m__4431__auto__ = (paintscript.render.paint_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(_,ps_out,container_size,el_size) : m__4431__auto__.call(null,_,ps_out,container_size,el_size));
} else {
throw cljs.core.missing_protocol("Renderer.paint*",_);
}
}
}
});

paintscript.render.path_pnts = (function paintscript$render$path_pnts(params,opts,els){
var els_SINGLEQUOTE_ = paintscript.els.apply_path_opts(params,opts,els);
var el_recs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(paintscript.els.el_vec___GT_el_rec,els_SINGLEQUOTE_);
return paintscript.els.el_pnts(el_recs);
});
paintscript.render.path = (function paintscript$render$path(var_args){
var G__8541 = arguments.length;
switch (G__8541) {
case 2:
return paintscript.render.path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paintscript.render.path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return paintscript.render.path.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

paintscript.render.path.cljs$core$IFn$_invoke$arity$2 = (function (r,els){
return paintscript.render.path.cljs$core$IFn$_invoke$arity$4(r,null,null,els);
});

paintscript.render.path.cljs$core$IFn$_invoke$arity$3 = (function (r,opts,els){
return paintscript.render.path.cljs$core$IFn$_invoke$arity$4(r,null,opts,els);
});

paintscript.render.path.cljs$core$IFn$_invoke$arity$4 = (function (r,params,opts,els){
var els_SINGLEQUOTE_ = paintscript.els.apply_path_opts(params,opts,els);
var el_recs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(paintscript.els.el_vec___GT_el_rec,els_SINGLEQUOTE_);
var out_seq = paintscript.render.els__GT_out(r,el_recs);
if(cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(params))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_seq,paintscript.els.el_pnts(el_recs)], null);
} else {
return out_seq;
}
});

paintscript.render.path.cljs$lang$maxFixedArity = 4;

