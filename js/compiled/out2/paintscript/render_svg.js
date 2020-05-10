// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('paintscript.render_svg');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('svg_hiccup_kit.core');
goog.require('reagent.core');
goog.require('paintscript.util');
goog.require('paintscript.el');
goog.require('paintscript.els');
goog.require('paintscript.nav');
goog.require('paintscript.render');
paintscript.render_svg.arcs = (function paintscript$render_svg$arcs(arc_xys,p__8545){
var map__8546 = p__8545;
var map__8546__$1 = (((((!((map__8546 == null))))?(((((map__8546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8546):map__8546);
var opts = map__8546__$1;
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8546__$1,cljs.core.cst$kw$mode,cljs.core.cst$kw$concave);
var ctd_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8546__$1,cljs.core.cst$kw$ctd_QMARK_);
var vec__8548 = arc_xys;
var seq__8549 = cljs.core.seq(vec__8548);
var first__8550 = cljs.core.first(seq__8549);
var seq__8549__$1 = cljs.core.next(seq__8549);
var head = first__8550;
var tail = seq__8549__$1;
var paired_with_prev = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,tail,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(arc_xys));
var arc_middle = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__8552 = mode;
var G__8552__$1 = (((G__8552 instanceof cljs.core.Keyword))?G__8552.fqn:null);
switch (G__8552__$1) {
case "concave":
return "0,1";

break;
case "convex":
return "0,0";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8552__$1)].join('')));

}
})());
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(ctd_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",head], null)], null)),(function (){var iter__4523__auto__ = ((function (vec__8548,seq__8549,first__8550,seq__8549__$1,head,tail,paired_with_prev,arc_middle,map__8546,map__8546__$1,opts,mode,ctd_QMARK_){
return (function paintscript$render_svg$arcs_$_iter__8553(s__8554){
return (new cljs.core.LazySeq(null,((function (vec__8548,seq__8549,first__8550,seq__8549__$1,head,tail,paired_with_prev,arc_middle,map__8546,map__8546__$1,opts,mode,ctd_QMARK_){
return (function (){
var s__8554__$1 = s__8554;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__8554__$1);
if(temp__5720__auto__){
var s__8554__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8554__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__8554__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__8556 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__8555 = (0);
while(true){
if((i__8555 < size__4522__auto__)){
var vec__8557 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__8555);
var vec__8560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8557,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8560,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8560,(1),null);
var _xy = vec__8560;
var vec__8563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8557,(1),null);
var xp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8563,(0),null);
var yp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8563,(1),null);
var _xy_prev = vec__8563;
cljs.core.chunk_append(b__8556,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - xp),(y - yp)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),arc_middle], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));

var G__8576 = (i__8555 + (1));
i__8555 = G__8576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8556),paintscript$render_svg$arcs_$_iter__8553(cljs.core.chunk_rest(s__8554__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8556),null);
}
} else {
var vec__8566 = cljs.core.first(s__8554__$2);
var vec__8569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8566,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8569,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8569,(1),null);
var _xy = vec__8569;
var vec__8572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8566,(1),null);
var xp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8572,(0),null);
var yp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8572,(1),null);
var _xy_prev = vec__8572;
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - xp),(y - yp)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),arc_middle], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),paintscript$render_svg$arcs_$_iter__8553(cljs.core.rest(s__8554__$2)));
}
} else {
return null;
}
break;
}
});})(vec__8548,seq__8549,first__8550,seq__8549__$1,head,tail,paired_with_prev,arc_middle,map__8546,map__8546__$1,opts,mode,ctd_QMARK_))
,null,null));
});})(vec__8548,seq__8549,first__8550,seq__8549__$1,head,tail,paired_with_prev,arc_middle,map__8546,map__8546__$1,opts,mode,ctd_QMARK_))
;
return iter__4523__auto__(paired_with_prev);
})());
});
paintscript.render_svg.circle_path = (function paintscript$render_svg$circle_path(p__8577){
var map__8578 = p__8577;
var map__8578__$1 = (((((!((map__8578 == null))))?(((((map__8578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8578):map__8578);
var vec__8579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8578__$1,cljs.core.cst$kw$center);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8579,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8579,(1),null);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8578__$1,cljs.core.cst$kw$r);
return (new cljs.core.List(null,"M",(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),(new cljs.core.List(null,"m",(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- r),(0)], null),(new cljs.core.List(null,"a",(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,r], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) * r),(0)], null),(new cljs.core.List(null,"a",(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,r], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- ((2) * r)),(0)], null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null)),(9),null)),(10),null)),(11),null)),(12),null));
});
paintscript.render_svg.el__GT_out = (function paintscript$render_svg$el__GT_out(p__8583){
var map__8584 = p__8583;
var map__8584__$1 = (((((!((map__8584 == null))))?(((((map__8584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8584):map__8584);
var el = map__8584__$1;
var el_k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8584__$1,cljs.core.cst$kw$el_DASH_k);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8584__$1,cljs.core.cst$kw$opts);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8584__$1,cljs.core.cst$kw$args);
var G__8586 = el_k;
var G__8586__$1 = (((G__8586 instanceof cljs.core.Keyword))?G__8586.fqn:null);
switch (G__8586__$1) {
case "circle":
return paintscript.render_svg.circle_path(opts);

break;
case "arc":
return paintscript.render_svg.arcs(args,opts);

break;
case "arc*":
return paintscript.render_svg.arcs(args,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$ctd_QMARK_,true));

break;
case "M":
return cljs.core.cons("M",args);

break;
case "m":
return cljs.core.cons("m",args);

break;
case "L":
return cljs.core.cons("L",args);

break;
case "l":
return cljs.core.cons("l",args);

break;
case "V":
return cljs.core.cons("V",args);

break;
case "H":
return cljs.core.cons("H",args);

break;
case "v":
return cljs.core.cons("v",args);

break;
case "h":
return cljs.core.cons("h",args);

break;
case "A":
var vec__8587 = args;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8587,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8587,(1),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8587,(2),null);
return (new cljs.core.List(null,"A",(new cljs.core.List(null,r,(new cljs.core.List(null,p,(new cljs.core.List(null,tgt,null,(1),null)),(2),null)),(3),null)),(4),null));

break;
case "S":
var vec__8590 = args;
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8590,(0),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8590,(1),null);
return (new cljs.core.List(null,"S",(new cljs.core.List(null,c2,(new cljs.core.List(null,tgt,null,(1),null)),(2),null)),(3),null));

break;
case "s":
var vec__8593 = args;
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8593,(0),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8593,(1),null);
return (new cljs.core.List(null,"s",(new cljs.core.List(null,c2,(new cljs.core.List(null,tgt,null,(1),null)),(2),null)),(3),null));

break;
case "C":
var vec__8596 = args;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8596,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8596,(1),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8596,(2),null);
return (new cljs.core.List(null,"C",(new cljs.core.List(null,c1,(new cljs.core.List(null,c2,(new cljs.core.List(null,tgt,null,(1),null)),(2),null)),(3),null)),(4),null));

break;
case "c":
var vec__8599 = args;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8599,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8599,(1),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8599,(2),null);
return (new cljs.core.List(null,"c",(new cljs.core.List(null,c1,(new cljs.core.List(null,c2,(new cljs.core.List(null,tgt,null,(1),null)),(2),null)),(3),null)),(4),null));

break;
case "C1":
var vec__8602 = args;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8602,(0),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8602,(1),null);
return (new cljs.core.List(null,"C",(new cljs.core.List(null,c1,(new cljs.core.List(null,tgt,(new cljs.core.List(null,tgt,null,(1),null)),(2),null)),(3),null)),(4),null));

break;
case "c1":
var vec__8605 = args;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8605,(0),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8605,(1),null);
return (new cljs.core.List(null,"c",(new cljs.core.List(null,c1,(new cljs.core.List(null,tgt,(new cljs.core.List(null,tgt,null,(1),null)),(2),null)),(3),null)),(4),null));

break;
case "Q":
var vec__8608 = args;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8608,(0),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8608,(1),null);
return (new cljs.core.List(null,"Q",(new cljs.core.List(null,c,(new cljs.core.List(null,tgt,null,(1),null)),(2),null)),(3),null));

break;
case "q":
var vec__8611 = args;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8611,(0),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8611,(1),null);
return (new cljs.core.List(null,"q",(new cljs.core.List(null,c,(new cljs.core.List(null,tgt,null,(1),null)),(2),null)),(3),null));

break;
case "T":
var vec__8614 = args;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8614,(0),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8614,(1),null);
return (new cljs.core.List(null,"T",(new cljs.core.List(null,c1,(new cljs.core.List(null,tgt,(new cljs.core.List(null,tgt,null,(1),null)),(2),null)),(3),null)),(4),null));

break;
case "t":
var vec__8617 = args;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8617,(0),null);
var tgt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8617,(1),null);
return (new cljs.core.List(null,"t",(new cljs.core.List(null,c1,(new cljs.core.List(null,tgt,(new cljs.core.List(null,tgt,null,(1),null)),(2),null)),(3),null)),(4),null));

break;
case "z":
return (new cljs.core.List(null,"z",null,(1),null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8586__$1)].join('')));

}
});
paintscript.render_svg.svg_renderer = (function (){
if((typeof paintscript !== 'undefined') && (typeof paintscript.render_svg !== 'undefined') && (typeof paintscript.render_svg.t_paintscript$render_svg8621 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {paintscript.render.Renderer}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
paintscript.render_svg.t_paintscript$render_svg8621 = (function (meta8622){
this.meta8622 = meta8622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
paintscript.render_svg.t_paintscript$render_svg8621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8623,meta8622__$1){
var self__ = this;
var _8623__$1 = this;
return (new paintscript.render_svg.t_paintscript$render_svg8621(meta8622__$1));
});

paintscript.render_svg.t_paintscript$render_svg8621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8623){
var self__ = this;
var _8623__$1 = this;
return self__.meta8622;
});

paintscript.render_svg.t_paintscript$render_svg8621.prototype.paintscript$render$Renderer$ = cljs.core.PROTOCOL_SENTINEL;

paintscript.render_svg.t_paintscript$render_svg8621.prototype.paintscript$render$Renderer$els__GT_out$arity$2 = (function (_,els){
var self__ = this;
var ___$1 = this;
return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(paintscript.render_svg.el__GT_out,els));
});

paintscript.render_svg.t_paintscript$render_svg8621.prototype.paintscript$render$Renderer$group$arity$2 = (function (_,els){
var self__ = this;
var ___$1 = this;
return cljs.core.vec(cljs.core.cons(cljs.core.cst$kw$g,els));
});

paintscript.render_svg.t_paintscript$render_svg8621.prototype.paintscript$render$Renderer$tf$arity$3 = (function (_,opts,el){
var self__ = this;
var ___$1 = this;
return svg_hiccup_kit.core.tf(opts,el);
});

paintscript.render_svg.t_paintscript$render_svg8621.prototype.paintscript$render$Renderer$tf_STAR_$arity$3 = (function (_,opts,els){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(svg_hiccup_kit.core.tf_STAR_,opts,els);
});

paintscript.render_svg.t_paintscript$render_svg8621.prototype.paintscript$render$Renderer$paint$arity$2 = (function (_,ps){
var self__ = this;
var ___$1 = this;
return (paintscript.render_svg.paint.cljs$core$IFn$_invoke$arity$1 ? paintscript.render_svg.paint.cljs$core$IFn$_invoke$arity$1(ps) : paintscript.render_svg.paint.call(null,ps));
});

paintscript.render_svg.t_paintscript$render_svg8621.prototype.paintscript$render$Renderer$paint_STAR_$arity$4 = (function (_,ps_out,___$1,___$2){
var self__ = this;
var ___$3 = this;
return ps_out;
});

paintscript.render_svg.t_paintscript$render_svg8621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta8622], null);
});

paintscript.render_svg.t_paintscript$render_svg8621.cljs$lang$type = true;

paintscript.render_svg.t_paintscript$render_svg8621.cljs$lang$ctorStr = "paintscript.render-svg/t_paintscript$render_svg8621";

paintscript.render_svg.t_paintscript$render_svg8621.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"paintscript.render-svg/t_paintscript$render_svg8621");
});

/**
 * Positional factory function for paintscript.render-svg/t_paintscript$render_svg8621.
 */
paintscript.render_svg.__GT_t_paintscript$render_svg8621 = (function paintscript$render_svg$__GT_t_paintscript$render_svg8621(meta8622){
return (new paintscript.render_svg.t_paintscript$render_svg8621(meta8622));
});

}

return (new paintscript.render_svg.t_paintscript$render_svg8621(cljs.core.PersistentArrayMap.EMPTY));
})()
;
paintscript.render_svg.path_builder = (function paintscript$render_svg$path_builder(var_args){
var G__8625 = arguments.length;
switch (G__8625) {
case 2:
return paintscript.render_svg.path_builder.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return paintscript.render_svg.path_builder.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

paintscript.render_svg.path_builder.cljs$core$IFn$_invoke$arity$2 = (function (opts,els){
return paintscript.render_svg.path_builder.cljs$core$IFn$_invoke$arity$4(null,opts,(0),els);
});

paintscript.render_svg.path_builder.cljs$core$IFn$_invoke$arity$4 = (function (p__8626,p__8627,pi,els){
var map__8628 = p__8626;
var map__8628__$1 = (((((!((map__8628 == null))))?(((((map__8628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8628):map__8628);
var s_opts = map__8628__$1;
var debug_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8628__$1,cljs.core.cst$kw$debug_QMARK_);
var map__8629 = p__8627;
var map__8629__$1 = (((((!((map__8629 == null))))?(((((map__8629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8629):map__8629);
var p_opts = map__8629__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8629__$1,cljs.core.cst$kw$attrs);
var temp__5718__auto__ = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(p_opts);
if(cljs.core.truth_(temp__5718__auto__)){
var d = temp__5718__auto__;
var d_SINGLEQUOTE_ = (function (){var G__8634 = d;
if(paintscript.el.ref_QMARK_(d)){
return paintscript.els.resolve_d_ref(cljs.core.cst$kw$defs.cljs$core$IFn$_invoke$arity$1(s_opts),G__8634);
} else {
return G__8634;
}
})();
var map__8632 = p_opts;
var map__8632__$1 = (((((!((map__8632 == null))))?(((((map__8632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8632):map__8632);
var map__8633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8632__$1,cljs.core.cst$kw$scale);
var map__8633__$1 = (((((!((map__8633 == null))))?(((((map__8633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8633):map__8633);
var scale_factor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8633__$1,cljs.core.cst$kw$factor);
var translate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8632__$1,cljs.core.cst$kw$translate);
var pth = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,d_SINGLEQUOTE_], null)], 0))], null);
if(cljs.core.truth_((function (){var or__4131__auto__ = translate;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return scale_factor;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg_hiccup_kit.core.tf,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tl,translate,cljs.core.cst$kw$sc,(function (){var G__8637 = scale_factor;
if((G__8637 == null)){
return null;
} else {
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__8637],null));
}
})()], null),pth], null);
} else {
return pth;
}
} else {
if(cljs.core.truth_(debug_QMARK_)){
var pnts_seq = paintscript.render.path_pnts(s_opts,p_opts,els);
return (paintscript.render_svg.plot_coords.cljs$core$IFn$_invoke$arity$4 ? paintscript.render_svg.plot_coords.cljs$core$IFn$_invoke$arity$4(p_opts,pi,els,pnts_seq) : paintscript.render_svg.plot_coords.call(null,p_opts,pi,els,pnts_seq));
} else {
var out_seq = paintscript.render.path.cljs$core$IFn$_invoke$arity$4(paintscript.render_svg.svg_renderer,s_opts,p_opts,els);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(svg_hiccup_kit.core.d,out_seq)], null)], 0))], null);
}
}
});

paintscript.render_svg.path_builder.cljs$lang$maxFixedArity = 4;

paintscript.render_svg.paint = (function paintscript$render_svg$paint(p__8640){
var map__8641 = p__8640;
var map__8641__$1 = (((((!((map__8641 == null))))?(((((map__8641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8641):map__8641);
var script_opts = map__8641__$1;
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8641__$1,cljs.core.cst$kw$variant);
var defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8641__$1,cljs.core.cst$kw$defs);
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8641__$1,cljs.core.cst$kw$styles);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8641__$1,cljs.core.cst$kw$attrs);
var script = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8641__$1,cljs.core.cst$kw$script);
var data_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8641__$1,cljs.core.cst$kw$data_QMARK_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,(function (){var iter__4523__auto__ = ((function (map__8641,map__8641__$1,script_opts,variant,defs,styles,attrs,script,data_QMARK_){
return (function paintscript$render_svg$paint_$_iter__8643(s__8644){
return (new cljs.core.LazySeq(null,((function (map__8641,map__8641__$1,script_opts,variant,defs,styles,attrs,script,data_QMARK_){
return (function (){
var s__8644__$1 = s__8644;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__8644__$1);
if(temp__5720__auto__){
var s__8644__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8644__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__8644__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__8646 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__8645 = (0);
while(true){
if((i__8645 < size__4522__auto__)){
var vec__8647 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__8645);
var pi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8647,(0),null);
var vec__8650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8647,(1),null);
var seq__8651 = cljs.core.seq(vec__8650);
var first__8652 = cljs.core.first(seq__8651);
var seq__8651__$1 = cljs.core.next(seq__8651);
var obj_k = first__8652;
var first__8652__$1 = cljs.core.first(seq__8651__$1);
var seq__8651__$2 = cljs.core.next(seq__8651__$1);
var map__8653 = first__8652__$1;
var map__8653__$1 = (((((!((map__8653 == null))))?(((((map__8653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8653):map__8653);
var p_opts = map__8653__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8653__$1,cljs.core.cst$kw$disabled_QMARK_);
var variant_k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8653__$1,cljs.core.cst$kw$variant_DASH_k);
var class_k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8653__$1,cljs.core.cst$kw$class_DASH_k);
var els = seq__8651__$2;
var obj = vec__8650;
if(((cljs.core.not(disabled_QMARK_)) && (((cljs.core.not(variant)) || (cljs.core.not(variant_k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant,variant_k)))))){
var styles_attrs = (cljs.core.truth_(class_k)?cljs.core.get.cljs$core$IFn$_invoke$arity$3(styles,class_k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(styles,"outline")):cljs.core.get.cljs$core$IFn$_invoke$arity$2(styles,"outline"));
var p_opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(styles_attrs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale,cljs.core.cst$kw$translate], null)),p_opts], 0)),cljs.core.cst$kw$attrs,cljs.core.merge,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(styles_attrs,cljs.core.cst$kw$scale,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$translate], 0))),cljs.core.cst$kw$disabled_QMARK_);
cljs.core.chunk_append(b__8646,cljs.core.with_meta((function (){var G__8655 = obj_k;
var G__8655__$1 = (((G__8655 instanceof cljs.core.Keyword))?G__8655.fqn:null);
switch (G__8655__$1) {
case "path":
return paintscript.render_svg.path_builder.cljs$core$IFn$_invoke$arity$4(script_opts,p_opts_SINGLEQUOTE_,pi,els);

break;
default:
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(obj,(1),((function (i__8645,s__8644__$1,G__8655,G__8655__$1,styles_attrs,p_opts_SINGLEQUOTE_,vec__8647,pi,vec__8650,seq__8651,first__8652,seq__8651__$1,obj_k,first__8652__$1,seq__8651__$2,map__8653,map__8653__$1,p_opts,disabled_QMARK_,variant_k,class_k,els,obj,c__4521__auto__,size__4522__auto__,b__8646,s__8644__$2,temp__5720__auto__,map__8641,map__8641__$1,script_opts,variant,defs,styles,attrs,script,data_QMARK_){
return (function (p1__8639_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__8639_SHARP_,cljs.core.cst$kw$class_DASH_k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$variant_DASH_k,cljs.core.cst$kw$disabled_QMARK_], 0)),attrs,styles_attrs], 0));
});})(i__8645,s__8644__$1,G__8655,G__8655__$1,styles_attrs,p_opts_SINGLEQUOTE_,vec__8647,pi,vec__8650,seq__8651,first__8652,seq__8651__$1,obj_k,first__8652__$1,seq__8651__$2,map__8653,map__8653__$1,p_opts,disabled_QMARK_,variant_k,class_k,els,obj,c__4521__auto__,size__4522__auto__,b__8646,s__8644__$2,temp__5720__auto__,map__8641,map__8641__$1,script_opts,variant,defs,styles,attrs,script,data_QMARK_))
);

}
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,pi], null)));

var G__8666 = (i__8645 + (1));
i__8645 = G__8666;
continue;
} else {
var G__8667 = (i__8645 + (1));
i__8645 = G__8667;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8646),paintscript$render_svg$paint_$_iter__8643(cljs.core.chunk_rest(s__8644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8646),null);
}
} else {
var vec__8656 = cljs.core.first(s__8644__$2);
var pi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8656,(0),null);
var vec__8659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8656,(1),null);
var seq__8660 = cljs.core.seq(vec__8659);
var first__8661 = cljs.core.first(seq__8660);
var seq__8660__$1 = cljs.core.next(seq__8660);
var obj_k = first__8661;
var first__8661__$1 = cljs.core.first(seq__8660__$1);
var seq__8660__$2 = cljs.core.next(seq__8660__$1);
var map__8662 = first__8661__$1;
var map__8662__$1 = (((((!((map__8662 == null))))?(((((map__8662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8662):map__8662);
var p_opts = map__8662__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8662__$1,cljs.core.cst$kw$disabled_QMARK_);
var variant_k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8662__$1,cljs.core.cst$kw$variant_DASH_k);
var class_k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8662__$1,cljs.core.cst$kw$class_DASH_k);
var els = seq__8660__$2;
var obj = vec__8659;
if(((cljs.core.not(disabled_QMARK_)) && (((cljs.core.not(variant)) || (cljs.core.not(variant_k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant,variant_k)))))){
var styles_attrs = (cljs.core.truth_(class_k)?cljs.core.get.cljs$core$IFn$_invoke$arity$3(styles,class_k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(styles,"outline")):cljs.core.get.cljs$core$IFn$_invoke$arity$2(styles,"outline"));
var p_opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(styles_attrs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale,cljs.core.cst$kw$translate], null)),p_opts], 0)),cljs.core.cst$kw$attrs,cljs.core.merge,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(styles_attrs,cljs.core.cst$kw$scale,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$translate], 0))),cljs.core.cst$kw$disabled_QMARK_);
return cljs.core.cons(cljs.core.with_meta((function (){var G__8664 = obj_k;
var G__8664__$1 = (((G__8664 instanceof cljs.core.Keyword))?G__8664.fqn:null);
switch (G__8664__$1) {
case "path":
return paintscript.render_svg.path_builder.cljs$core$IFn$_invoke$arity$4(script_opts,p_opts_SINGLEQUOTE_,pi,els);

break;
default:
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(obj,(1),((function (s__8644__$1,G__8664,G__8664__$1,styles_attrs,p_opts_SINGLEQUOTE_,vec__8656,pi,vec__8659,seq__8660,first__8661,seq__8660__$1,obj_k,first__8661__$1,seq__8660__$2,map__8662,map__8662__$1,p_opts,disabled_QMARK_,variant_k,class_k,els,obj,s__8644__$2,temp__5720__auto__,map__8641,map__8641__$1,script_opts,variant,defs,styles,attrs,script,data_QMARK_){
return (function (p1__8639_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__8639_SHARP_,cljs.core.cst$kw$class_DASH_k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$variant_DASH_k,cljs.core.cst$kw$disabled_QMARK_], 0)),attrs,styles_attrs], 0));
});})(s__8644__$1,G__8664,G__8664__$1,styles_attrs,p_opts_SINGLEQUOTE_,vec__8656,pi,vec__8659,seq__8660,first__8661,seq__8660__$1,obj_k,first__8661__$1,seq__8660__$2,map__8662,map__8662__$1,p_opts,disabled_QMARK_,variant_k,class_k,els,obj,s__8644__$2,temp__5720__auto__,map__8641,map__8641__$1,script_opts,variant,defs,styles,attrs,script,data_QMARK_))
);

}
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,pi], null)),paintscript$render_svg$paint_$_iter__8643(cljs.core.rest(s__8644__$2)));
} else {
var G__8669 = cljs.core.rest(s__8644__$2);
s__8644__$1 = G__8669;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__8641,map__8641__$1,script_opts,variant,defs,styles,attrs,script,data_QMARK_))
,null,null));
});})(map__8641,map__8641__$1,script_opts,variant,defs,styles,attrs,script,data_QMARK_))
;
return iter__4523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,script));
})()], null);
});
paintscript.render_svg.coord = (function paintscript$render_svg$coord(p__8674,els,p__8675,p__8676,p__8677){
var map__8678 = p__8674;
var map__8678__$1 = (((((!((map__8678 == null))))?(((((map__8678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8678):map__8678);
var opts = map__8678__$1;
var vec__8679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8678__$1,cljs.core.cst$kw$sel);
var src_k_sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8679,(0),null);
var pi_sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8679,(1),null);
var eli_sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8679,(2),null);
var xyi_sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8679,(3),null);
var sel = vec__8679;
var scaled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8678__$1,cljs.core.cst$kw$scaled);
var report_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8678__$1,cljs.core.cst$kw$report_BANG_);
var report_hover_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8678__$1,cljs.core.cst$kw$report_DASH_hover_BANG_);
var coord_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8678__$1,cljs.core.cst$kw$coord_DASH_size);
var controls_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8678__$1,cljs.core.cst$kw$controls_QMARK_);
var hov = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8678__$1,cljs.core.cst$kw$hov);
var map__8682 = p__8675;
var map__8682__$1 = (((((!((map__8682 == null))))?(((((map__8682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8682):map__8682);
var el = map__8682__$1;
var el_k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8682__$1,cljs.core.cst$kw$el_DASH_k);
var map__8683 = p__8676;
var map__8683__$1 = (((((!((map__8683 == null))))?(((((map__8683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8683):map__8683);
var pnt = map__8683__$1;
var xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8683__$1,cljs.core.cst$kw$xy);
var xy_abs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8683__$1,cljs.core.cst$kw$xy_DASH_abs);
var i_main = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8683__$1,cljs.core.cst$kw$i_DASH_main);
var vec__8684 = p__8677;
var src_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8684,(0),null);
var pi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8684,(1),null);
var eli = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8684,(2),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8684,(3),null);
var ii_pnt = vec__8684;
var with_let8690 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let8690);
var temp__5724__auto___8703 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___8703 == null)){
} else {
var c__7808__auto___8704 = temp__5724__auto___8703;
if((with_let8690.generation === c__7808__auto___8704.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let8690.generation = c__7808__auto___8704.ratomGeneration;
}


var init8691 = (with_let8690.length === (0));
var _BANG_hover_QMARK_ = ((init8691)?(with_let8690[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let8690[(0)]));
var res__7809__auto__ = ((cljs.core.vector_QMARK_(xy))?(function (){var vec__8692 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (init8691,_BANG_hover_QMARK_,with_let8690,map__8678,map__8678__$1,opts,vec__8679,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,scaled,report_BANG_,report_hover_BANG_,coord_size,controls_QMARK_,hov,map__8682,map__8682__$1,el,el_k,map__8683,map__8683__$1,pnt,xy,xy_abs,i_main,vec__8684,src_k,pi,eli,_,ii_pnt){
return (function (p1__8670_SHARP_){
return (p1__8670_SHARP_ * scaled);
});})(init8691,_BANG_hover_QMARK_,with_let8690,map__8678,map__8678__$1,opts,vec__8679,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,scaled,report_BANG_,report_hover_BANG_,coord_size,controls_QMARK_,hov,map__8682,map__8682__$1,el,el_k,map__8683,map__8683__$1,pnt,xy,xy_abs,i_main,vec__8684,src_k,pi,eli,_,ii_pnt))
,(cljs.core.truth_((paintscript.el.relative_QMARK_.cljs$core$IFn$_invoke$arity$1 ? paintscript.el.relative_QMARK_.cljs$core$IFn$_invoke$arity$1(el_k) : paintscript.el.relative_QMARK_.call(null,el_k)))?xy_abs:xy));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8692,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8692,(1),null);
var cp_QMARK_ = (!((i_main == null)));
var hover_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ii_pnt,hov);
var sel_pv_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pi_sel,pi)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(eli_sel,eli)));
var sel_pnt_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ii_pnt,sel);
if((((!(cp_QMARK_))) || (sel_pv_QMARK_))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,((cp_QMARK_)?(function (){var vec__8695 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__8692,x,y,cp_QMARK_,hover_QMARK_,sel_pv_QMARK_,sel_pnt_QMARK_,init8691,_BANG_hover_QMARK_,with_let8690,map__8678,map__8678__$1,opts,vec__8679,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,scaled,report_BANG_,report_hover_BANG_,coord_size,controls_QMARK_,hov,map__8682,map__8682__$1,el,el_k,map__8683,map__8683__$1,pnt,xy,xy_abs,i_main,vec__8684,src_k,pi,eli,_,ii_pnt){
return (function (p1__8672_SHARP_){
return (p1__8672_SHARP_ * scaled);
});})(vec__8692,x,y,cp_QMARK_,hover_QMARK_,sel_pv_QMARK_,sel_pnt_QMARK_,init8691,_BANG_hover_QMARK_,with_let8690,map__8678,map__8678__$1,opts,vec__8679,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,scaled,report_BANG_,report_hover_BANG_,coord_size,controls_QMARK_,hov,map__8682,map__8682__$1,el,el_k,map__8683,map__8683__$1,pnt,xy,xy_abs,i_main,vec__8684,src_k,pi,eli,_,ii_pnt))
,(function (){var G__8698 = cljs.core.last(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(els,i_main));
if(cljs.core.truth_((paintscript.el.relative_QMARK_.cljs$core$IFn$_invoke$arity$1 ? paintscript.el.relative_QMARK_.cljs$core$IFn$_invoke$arity$1(el_k) : paintscript.el.relative_QMARK_.call(null,el_k)))){
var fexpr__8699 = ((function (G__8698,vec__8692,x,y,cp_QMARK_,hover_QMARK_,sel_pv_QMARK_,sel_pnt_QMARK_,init8691,_BANG_hover_QMARK_,with_let8690,map__8678,map__8678__$1,opts,vec__8679,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,scaled,report_BANG_,report_hover_BANG_,coord_size,controls_QMARK_,hov,map__8682,map__8682__$1,el,el_k,map__8683,map__8683__$1,pnt,xy,xy_abs,i_main,vec__8684,src_k,pi,eli,_,ii_pnt){
return (function (p1__8671_SHARP_){
var or__4131__auto__ = paintscript.els.xy_abs_meta(p1__8671_SHARP_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return p1__8671_SHARP_;
}
});})(G__8698,vec__8692,x,y,cp_QMARK_,hover_QMARK_,sel_pv_QMARK_,sel_pnt_QMARK_,init8691,_BANG_hover_QMARK_,with_let8690,map__8678,map__8678__$1,opts,vec__8679,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,scaled,report_BANG_,report_hover_BANG_,coord_size,controls_QMARK_,hov,map__8682,map__8682__$1,el,el_k,map__8683,map__8683__$1,pnt,xy,xy_abs,i_main,vec__8684,src_k,pi,eli,_,ii_pnt))
;
return fexpr__8699(G__8698);
} else {
return G__8698;
}
})());
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8695,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8695,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line$ctrl_DASH_target$under,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$y1,y,cljs.core.cst$kw$x2,x2,cljs.core.cst$kw$y2,y2], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line$ctrl_DASH_target$over,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$y1,y,cljs.core.cst$kw$x2,x2,cljs.core.cst$kw$y2,y2], null)], null)], null);
})():null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$class,[(cljs.core.truth_(i_main)?"control":"target"),((hover_QMARK_)?" hover":null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sel,ii_pnt))?" selected":null)].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cursor,"pointer",cljs.core.cst$kw$text_DASH_select,"none"], null),cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (vec__8692,x,y,cp_QMARK_,hover_QMARK_,sel_pv_QMARK_,sel_pnt_QMARK_,init8691,_BANG_hover_QMARK_,with_let8690,map__8678,map__8678__$1,opts,vec__8679,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,scaled,report_BANG_,report_hover_BANG_,coord_size,controls_QMARK_,hov,map__8682,map__8682__$1,el,el_k,map__8683,map__8683__$1,pnt,xy,xy_abs,i_main,vec__8684,src_k,pi,eli,_,ii_pnt){
return (function (p1__8673_SHARP_){
var G__8700 = ii_pnt;
var G__8701 = i_main;
var G__8702 = p1__8673_SHARP_.shiftKey;
return (report_BANG_.cljs$core$IFn$_invoke$arity$3 ? report_BANG_.cljs$core$IFn$_invoke$arity$3(G__8700,G__8701,G__8702) : report_BANG_.call(null,G__8700,G__8701,G__8702));
});})(vec__8692,x,y,cp_QMARK_,hover_QMARK_,sel_pv_QMARK_,sel_pnt_QMARK_,init8691,_BANG_hover_QMARK_,with_let8690,map__8678,map__8678__$1,opts,vec__8679,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,scaled,report_BANG_,report_hover_BANG_,coord_size,controls_QMARK_,hov,map__8682,map__8682__$1,el,el_k,map__8683,map__8683__$1,pnt,xy,xy_abs,i_main,vec__8684,src_k,pi,eli,_,ii_pnt))
,cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (vec__8692,x,y,cp_QMARK_,hover_QMARK_,sel_pv_QMARK_,sel_pnt_QMARK_,init8691,_BANG_hover_QMARK_,with_let8690,map__8678,map__8678__$1,opts,vec__8679,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,scaled,report_BANG_,report_hover_BANG_,coord_size,controls_QMARK_,hov,map__8682,map__8682__$1,el,el_k,map__8683,map__8683__$1,pnt,xy,xy_abs,i_main,vec__8684,src_k,pi,eli,_,ii_pnt){
return (function (){
return (report_hover_BANG_.cljs$core$IFn$_invoke$arity$2 ? report_hover_BANG_.cljs$core$IFn$_invoke$arity$2(ii_pnt,true) : report_hover_BANG_.call(null,ii_pnt,true));
});})(vec__8692,x,y,cp_QMARK_,hover_QMARK_,sel_pv_QMARK_,sel_pnt_QMARK_,init8691,_BANG_hover_QMARK_,with_let8690,map__8678,map__8678__$1,opts,vec__8679,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,scaled,report_BANG_,report_hover_BANG_,coord_size,controls_QMARK_,hov,map__8682,map__8682__$1,el,el_k,map__8683,map__8683__$1,pnt,xy,xy_abs,i_main,vec__8684,src_k,pi,eli,_,ii_pnt))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (vec__8692,x,y,cp_QMARK_,hover_QMARK_,sel_pv_QMARK_,sel_pnt_QMARK_,init8691,_BANG_hover_QMARK_,with_let8690,map__8678,map__8678__$1,opts,vec__8679,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,scaled,report_BANG_,report_hover_BANG_,coord_size,controls_QMARK_,hov,map__8682,map__8682__$1,el,el_k,map__8683,map__8683__$1,pnt,xy,xy_abs,i_main,vec__8684,src_k,pi,eli,_,ii_pnt){
return (function (){
return (report_hover_BANG_.cljs$core$IFn$_invoke$arity$2 ? report_hover_BANG_.cljs$core$IFn$_invoke$arity$2(ii_pnt,false) : report_hover_BANG_.call(null,ii_pnt,false));
});})(vec__8692,x,y,cp_QMARK_,hover_QMARK_,sel_pv_QMARK_,sel_pnt_QMARK_,init8691,_BANG_hover_QMARK_,with_let8690,map__8678,map__8678__$1,opts,vec__8679,src_k_sel,pi_sel,eli_sel,xyi_sel,sel,scaled,report_BANG_,report_hover_BANG_,coord_size,controls_QMARK_,hov,map__8682,map__8682__$1,el,el_k,map__8683,map__8683__$1,pnt,xy,xy_abs,i_main,vec__8684,src_k,pi,eli,_,ii_pnt))
], null),((cp_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$cp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(x - (coord_size / (2))),cljs.core.cst$kw$y,(y - (coord_size / (2))),cljs.core.cst$kw$width,coord_size,cljs.core.cst$kw$height,coord_size], null)], null)], null):((((sel_pnt_QMARK_) || (hover_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,x,cljs.core.cst$kw$cy,y,cljs.core.cst$kw$r,(coord_size * 1.8)], null)], null),((((sel_pnt_QMARK_) || (cp_QMARK_)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$fill,"white",cljs.core.cst$kw$font_DASH_size,coord_size,cljs.core.cst$kw$text_DASH_anchor,"middle",cljs.core.cst$kw$dominant_DASH_baseline,"middle",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user_DASH_select,"none"], null)], null),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",xy)], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,x,cljs.core.cst$kw$cy,y,cljs.core.cst$kw$r,coord_size], null)], null)))], null)], null);
} else {
return null;
}
})():null);

return res__7809__auto__;
});
paintscript.render_svg.plot_coords = (function paintscript$render_svg$plot_coords(opts,pi,els,pnts_seq){
var iter__4523__auto__ = (function paintscript$render_svg$plot_coords_$_iter__8705(s__8706){
return (new cljs.core.LazySeq(null,(function (){
var s__8706__$1 = s__8706;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__8706__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__8711 = cljs.core.first(xs__6277__auto__);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8711,(0),null);
var pnts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8711,(1),null);
var iterys__4519__auto__ = ((function (s__8706__$1,vec__8711,el,pnts,xs__6277__auto__,temp__5720__auto__){
return (function paintscript$render_svg$plot_coords_$_iter__8705_$_iter__8707(s__8708){
return (new cljs.core.LazySeq(null,((function (s__8706__$1,vec__8711,el,pnts,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__8708__$1 = s__8708;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__8708__$1);
if(temp__5720__auto____$1){
var s__8708__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8708__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__8708__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__8710 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__8709 = (0);
while(true){
if((i__8709 < size__4522__auto__)){
var map__8714 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__8709);
var map__8714__$1 = (((((!((map__8714 == null))))?(((((map__8714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8714):map__8714);
var pnt = map__8714__$1;
var xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8714__$1,cljs.core.cst$kw$xy);
var ii_pnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8714__$1,cljs.core.cst$kw$ii_DASH_pnt);
var i_main = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8714__$1,cljs.core.cst$kw$i_DASH_main);
var _ = (cljs.core.truth_(ii_pnt)?null:(function(){throw (new Error("Assert failed: ii-pnt"))})());
cljs.core.chunk_append(b__8710,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.render_svg.coord,opts,els,el,pnt,ii_pnt], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(ii_pnt)], null)));

var G__8718 = (i__8709 + (1));
i__8709 = G__8718;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8710),paintscript$render_svg$plot_coords_$_iter__8705_$_iter__8707(cljs.core.chunk_rest(s__8708__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8710),null);
}
} else {
var map__8716 = cljs.core.first(s__8708__$2);
var map__8716__$1 = (((((!((map__8716 == null))))?(((((map__8716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8716):map__8716);
var pnt = map__8716__$1;
var xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8716__$1,cljs.core.cst$kw$xy);
var ii_pnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8716__$1,cljs.core.cst$kw$ii_DASH_pnt);
var i_main = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8716__$1,cljs.core.cst$kw$i_DASH_main);
var _ = (cljs.core.truth_(ii_pnt)?null:(function(){throw (new Error("Assert failed: ii-pnt"))})());
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.render_svg.coord,opts,els,el,pnt,ii_pnt], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(ii_pnt)], null)),paintscript$render_svg$plot_coords_$_iter__8705_$_iter__8707(cljs.core.rest(s__8708__$2)));
}
} else {
return null;
}
break;
}
});})(s__8706__$1,vec__8711,el,pnts,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__8706__$1,vec__8711,el,pnts,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(pnts));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,paintscript$render_svg$plot_coords_$_iter__8705(cljs.core.rest(s__8706__$1)));
} else {
var G__8719 = cljs.core.rest(s__8706__$1);
s__8706__$1 = G__8719;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(pnts_seq);
});
paintscript.render_svg.canvas_paint = (function paintscript$render_svg$canvas_paint(var_args){
var G__8722 = arguments.length;
switch (G__8722) {
case 2:
return paintscript.render_svg.canvas_paint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paintscript.render_svg.canvas_paint.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

paintscript.render_svg.canvas_paint.cljs$core$IFn$_invoke$arity$2 = (function (config,params){
return paintscript.render_svg.canvas_paint.cljs$core$IFn$_invoke$arity$3(null,config,params);
});

paintscript.render_svg.canvas_paint.cljs$core$IFn$_invoke$arity$3 = (function (p__8723,config,params){
var vec__8724 = p__8723;
var hov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8724,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8724,(1),null);
var dispatch_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8724,(2),null);
var report_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8724,(3),null);
var report_hov_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8724,(4),null);
var set_ref_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8724,(5),null);
var dnd_fns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8724,(6),null);
var map__8727 = params;
var map__8727__$1 = (((((!((map__8727 == null))))?(((((map__8727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8727):map__8727);
var map__8728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8727__$1,cljs.core.cst$kw$canvas);
var map__8728__$1 = (((((!((map__8728 == null))))?(((((map__8728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8728):map__8728);
var canvas = map__8728__$1;
var variants = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8728__$1,cljs.core.cst$kw$variants);
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8727__$1,cljs.core.cst$kw$variant);
var vec__8729 = sel;
var src_k_sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8729,(0),null);
var pi_sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8729,(1),null);
var eli_sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8729,(2),null);
var xyi_sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8729,(3),null);
var out_tups = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__8727,map__8727__$1,map__8728,map__8728__$1,canvas,variants,variant,vec__8729,src_k_sel,pi_sel,eli_sel,xyi_sel,vec__8724,hov,sel,dispatch_BANG_,report_BANG_,report_hov_BANG_,set_ref_BANG_,dnd_fns){
return (function (pi,p__8734){
var vec__8735 = p__8734;
var seq__8736 = cljs.core.seq(vec__8735);
var first__8737 = cljs.core.first(seq__8736);
var seq__8736__$1 = cljs.core.next(seq__8736);
var _k = first__8737;
var first__8737__$1 = cljs.core.first(seq__8736__$1);
var seq__8736__$2 = cljs.core.next(seq__8736__$1);
var p_opts = first__8737__$1;
var els = seq__8736__$2;
var path = vec__8735;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pi,p_opts,els], null);
});})(map__8727,map__8727__$1,map__8728,map__8728__$1,canvas,variants,variant,vec__8729,src_k_sel,pi_sel,eli_sel,xyi_sel,vec__8724,hov,sel,dispatch_BANG_,report_BANG_,report_hov_BANG_,set_ref_BANG_,dnd_fns))
,cljs.core.cst$kw$script.cljs$core$IFn$_invoke$arity$1(params));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$paint,(function (){var iter__4523__auto__ = ((function (map__8727,map__8727__$1,map__8728,map__8728__$1,canvas,variants,variant,vec__8729,src_k_sel,pi_sel,eli_sel,xyi_sel,out_tups,vec__8724,hov,sel,dispatch_BANG_,report_BANG_,report_hov_BANG_,set_ref_BANG_,dnd_fns){
return (function paintscript$render_svg$iter__8738(s__8739){
return (new cljs.core.LazySeq(null,((function (map__8727,map__8727__$1,map__8728,map__8728__$1,canvas,variants,variant,vec__8729,src_k_sel,pi_sel,eli_sel,xyi_sel,out_tups,vec__8724,hov,sel,dispatch_BANG_,report_BANG_,report_hov_BANG_,set_ref_BANG_,dnd_fns){
return (function (){
var s__8739__$1 = s__8739;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__8739__$1);
if(temp__5720__auto__){
var s__8739__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8739__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__8739__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__8741 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__8740 = (0);
while(true){
if((i__8740 < size__4522__auto__)){
var variant__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__8740);
var map__8742 = (function (){var G__8747 = params;
var G__8747__$1 = (((variant__$1 instanceof cljs.core.Keyword))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8747,cljs.core.cst$kw$variant,variant__$1):G__8747);
if(cljs.core.map_QMARK_(variant__$1)){
return paintscript.util.merge_configs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__8747__$1,variant__$1], 0));
} else {
return G__8747__$1;
}
})();
var map__8742__$1 = (((((!((map__8742 == null))))?(((((map__8742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8742):map__8742);
var params__$1 = map__8742__$1;
var map__8743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8742__$1,cljs.core.cst$kw$canvas);
var map__8743__$1 = (((((!((map__8743 == null))))?(((((map__8743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8743):map__8743);
var canvas__$1 = map__8743__$1;
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8743__$1,cljs.core.cst$kw$scale);
var dims = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8743__$1,cljs.core.cst$kw$dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null));
var coords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8743__$1,cljs.core.cst$kw$coords_QMARK_,true);
var vec__8744 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__8740,map__8742,map__8742__$1,params__$1,map__8743,map__8743__$1,canvas__$1,scale,dims,coords_QMARK_,variant__$1,c__4521__auto__,size__4522__auto__,b__8741,s__8739__$2,temp__5720__auto__,map__8727,map__8727__$1,map__8728,map__8728__$1,canvas,variants,variant,vec__8729,src_k_sel,pi_sel,eli_sel,xyi_sel,out_tups,vec__8724,hov,sel,dispatch_BANG_,report_BANG_,report_hov_BANG_,set_ref_BANG_,dnd_fns){
return (function (p1__8720_SHARP_){
return (p1__8720_SHARP_ * scale);
});})(i__8740,map__8742,map__8742__$1,params__$1,map__8743,map__8743__$1,canvas__$1,scale,dims,coords_QMARK_,variant__$1,c__4521__auto__,size__4522__auto__,b__8741,s__8739__$2,temp__5720__auto__,map__8727,map__8727__$1,map__8728,map__8728__$1,canvas,variants,variant,vec__8729,src_k_sel,pi_sel,eli_sel,xyi_sel,out_tups,vec__8724,hov,sel,dispatch_BANG_,report_BANG_,report_hov_BANG_,set_ref_BANG_,dnd_fns))
,dims);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8744,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8744,(1),null);
cljs.core.chunk_append(b__8741,(function (){try{return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,w,cljs.core.cst$kw$height,h], null),cljs.core.cst$kw$ref,set_ref_BANG_], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,cljs.core.cst$kw$attrs], null)),dnd_fns], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg_hiccup_kit.core.tf_STAR_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,scale], null)], null),(cljs.core.truth_(cljs.core.cst$kw$script.cljs$core$IFn$_invoke$arity$1(config))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.render_svg.paint,paintscript.util.merge_configs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config,variant__$1], 0))], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.render_svg.paint,params__$1], null)], null),(cljs.core.truth_((function (){var and__4120__auto__ = sel;
if(cljs.core.truth_(and__4120__auto__)){
var or__4131__auto__ = (function (){var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$defs,src_k_sel);
if(and__4120__auto____$1){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(sel,(2));
} else {
return and__4120__auto____$1;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (eli_sel > paintscript.nav.eli0);
}
} else {
return and__4120__auto__;
}
})())?(function (){var els_SINGLEQUOTE_ = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$defs,src_k_sel))?(0):paintscript.nav.eli0),cljs.core.take.cljs$core$IFn$_invoke$arity$2((eli_sel + (1)),paintscript.els.update_p_els(paintscript.nav.params_GT_.cljs$core$IFn$_invoke$arity$variadic(params__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$src_DASH_k,src_k_sel,cljs.core.cst$kw$pi,pi_sel], 0)),paintscript.els.normalize_els))));
var els_seg = paintscript.els.get_path_segment(src_k_sel,els_SINGLEQUOTE_,eli_sel);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$sel,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.render_svg.path_builder,null,cljs.core.PersistentArrayMap.EMPTY,pi_sel,els_seg], null)], null);
})():null)], null),(cljs.core.truth_(coords_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$coords,(function (){var iter__4523__auto__ = ((function (i__8740,map__8742,map__8742__$1,params__$1,map__8743,map__8743__$1,canvas__$1,scale,dims,coords_QMARK_,vec__8744,w,h,variant__$1,c__4521__auto__,size__4522__auto__,b__8741,s__8739__$2,temp__5720__auto__,map__8727,map__8727__$1,map__8728,map__8728__$1,canvas,variants,variant,vec__8729,src_k_sel,pi_sel,eli_sel,xyi_sel,out_tups,vec__8724,hov,sel,dispatch_BANG_,report_BANG_,report_hov_BANG_,set_ref_BANG_,dnd_fns){
return (function paintscript$render_svg$iter__8738_$_iter__8752(s__8753){
return (new cljs.core.LazySeq(null,((function (i__8740,map__8742,map__8742__$1,params__$1,map__8743,map__8743__$1,canvas__$1,scale,dims,coords_QMARK_,vec__8744,w,h,variant__$1,c__4521__auto__,size__4522__auto__,b__8741,s__8739__$2,temp__5720__auto__,map__8727,map__8727__$1,map__8728,map__8728__$1,canvas,variants,variant,vec__8729,src_k_sel,pi_sel,eli_sel,xyi_sel,out_tups,vec__8724,hov,sel,dispatch_BANG_,report_BANG_,report_hov_BANG_,set_ref_BANG_,dnd_fns){
return (function (){
var s__8753__$1 = s__8753;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__8753__$1);
if(temp__5720__auto____$1){
var s__8753__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8753__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__8753__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__8755 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__8754 = (0);
while(true){
if((i__8754 < size__4522__auto____$1)){
var vec__8756 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__8754);
var pi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8756,(0),null);
var map__8759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8756,(1),null);
var map__8759__$1 = (((((!((map__8759 == null))))?(((((map__8759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8759):map__8759);
var p_opts = map__8759__$1;
var variant_k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8759__$1,cljs.core.cst$kw$variant_DASH_k);
var els = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8756,(2),null);
if(((cljs.core.not(cljs.core.cst$kw$disabled_QMARK_.cljs$core$IFn$_invoke$arity$1(p_opts))) && (((cljs.core.not(cljs.core.cst$kw$variant.cljs$core$IFn$_invoke$arity$1(params__$1))) || (cljs.core.not(variant_k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$variant.cljs$core$IFn$_invoke$arity$1(params__$1),variant_k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$variant.cljs$core$IFn$_invoke$arity$1(params__$1),variant_k)))))){
cljs.core.chunk_append(b__8755,(function (){var els_SINGLEQUOTE_ = paintscript.els.attach_xy_abs_meta(paintscript.els.resolve_els_refs(cljs.core.cst$kw$defs.cljs$core$IFn$_invoke$arity$1(params__$1),els));
var el_pnts_seq = paintscript.render.path_pnts(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$debug_QMARK_,true,cljs.core.cst$kw$coords_QMARK_,true], null),p_opts,els_SINGLEQUOTE_);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,paintscript.render_svg.plot_coords(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$scaled,scale,cljs.core.cst$kw$coord_DASH_size,(10),cljs.core.cst$kw$report_BANG_,report_BANG_,cljs.core.cst$kw$report_DASH_hover_BANG_,report_hov_BANG_,cljs.core.cst$kw$sel,sel,cljs.core.cst$kw$hov,hov,cljs.core.cst$kw$controls_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pi_sel,pi)], null),pi,els_SINGLEQUOTE_,el_pnts_seq)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,pi], null));
})());

var G__8793 = (i__8754 + (1));
i__8754 = G__8793;
continue;
} else {
var G__8794 = (i__8754 + (1));
i__8754 = G__8794;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8755),paintscript$render_svg$iter__8738_$_iter__8752(cljs.core.chunk_rest(s__8753__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8755),null);
}
} else {
var vec__8761 = cljs.core.first(s__8753__$2);
var pi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8761,(0),null);
var map__8764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8761,(1),null);
var map__8764__$1 = (((((!((map__8764 == null))))?(((((map__8764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8764):map__8764);
var p_opts = map__8764__$1;
var variant_k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8764__$1,cljs.core.cst$kw$variant_DASH_k);
var els = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8761,(2),null);
if(((cljs.core.not(cljs.core.cst$kw$disabled_QMARK_.cljs$core$IFn$_invoke$arity$1(p_opts))) && (((cljs.core.not(cljs.core.cst$kw$variant.cljs$core$IFn$_invoke$arity$1(params__$1))) || (cljs.core.not(variant_k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$variant.cljs$core$IFn$_invoke$arity$1(params__$1),variant_k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$variant.cljs$core$IFn$_invoke$arity$1(params__$1),variant_k)))))){
return cljs.core.cons((function (){var els_SINGLEQUOTE_ = paintscript.els.attach_xy_abs_meta(paintscript.els.resolve_els_refs(cljs.core.cst$kw$defs.cljs$core$IFn$_invoke$arity$1(params__$1),els));
var el_pnts_seq = paintscript.render.path_pnts(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$debug_QMARK_,true,cljs.core.cst$kw$coords_QMARK_,true], null),p_opts,els_SINGLEQUOTE_);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,paintscript.render_svg.plot_coords(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$scaled,scale,cljs.core.cst$kw$coord_DASH_size,(10),cljs.core.cst$kw$report_BANG_,report_BANG_,cljs.core.cst$kw$report_DASH_hover_BANG_,report_hov_BANG_,cljs.core.cst$kw$sel,sel,cljs.core.cst$kw$hov,hov,cljs.core.cst$kw$controls_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pi_sel,pi)], null),pi,els_SINGLEQUOTE_,el_pnts_seq)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,pi], null));
})(),paintscript$render_svg$iter__8738_$_iter__8752(cljs.core.rest(s__8753__$2)));
} else {
var G__8795 = cljs.core.rest(s__8753__$2);
s__8753__$1 = G__8795;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8740,map__8742,map__8742__$1,params__$1,map__8743,map__8743__$1,canvas__$1,scale,dims,coords_QMARK_,vec__8744,w,h,variant__$1,c__4521__auto__,size__4522__auto__,b__8741,s__8739__$2,temp__5720__auto__,map__8727,map__8727__$1,map__8728,map__8728__$1,canvas,variants,variant,vec__8729,src_k_sel,pi_sel,eli_sel,xyi_sel,out_tups,vec__8724,hov,sel,dispatch_BANG_,report_BANG_,report_hov_BANG_,set_ref_BANG_,dnd_fns))
,null,null));
});})(i__8740,map__8742,map__8742__$1,params__$1,map__8743,map__8743__$1,canvas__$1,scale,dims,coords_QMARK_,vec__8744,w,h,variant__$1,c__4521__auto__,size__4522__auto__,b__8741,s__8739__$2,temp__5720__auto__,map__8727,map__8727__$1,map__8728,map__8728__$1,canvas,variants,variant,vec__8729,src_k_sel,pi_sel,eli_sel,xyi_sel,out_tups,vec__8724,hov,sel,dispatch_BANG_,report_BANG_,report_hov_BANG_,set_ref_BANG_,dnd_fns))
;
return iter__4523__auto__(out_tups);
})()], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(variant__$1)], null));
}catch (e8750){var err = e8750;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$paint_DASH_exec_DASH_error], 0));

console.log(err);

var G__8751 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$undo], null);
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__8751) : dispatch_BANG_.call(null,G__8751));
}})());

var G__8796 = (i__8740 + (1));
i__8740 = G__8796;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8741),paintscript$render_svg$iter__8738(cljs.core.chunk_rest(s__8739__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8741),null);
}
} else {
var variant__$1 = cljs.core.first(s__8739__$2);
var map__8766 = (function (){var G__8771 = params;
var G__8771__$1 = (((variant__$1 instanceof cljs.core.Keyword))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8771,cljs.core.cst$kw$variant,variant__$1):G__8771);
if(cljs.core.map_QMARK_(variant__$1)){
return paintscript.util.merge_configs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__8771__$1,variant__$1], 0));
} else {
return G__8771__$1;
}
})();
var map__8766__$1 = (((((!((map__8766 == null))))?(((((map__8766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8766):map__8766);
var params__$1 = map__8766__$1;
var map__8767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8766__$1,cljs.core.cst$kw$canvas);
var map__8767__$1 = (((((!((map__8767 == null))))?(((((map__8767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8767):map__8767);
var canvas__$1 = map__8767__$1;
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8767__$1,cljs.core.cst$kw$scale);
var dims = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8767__$1,cljs.core.cst$kw$dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null));
var coords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8767__$1,cljs.core.cst$kw$coords_QMARK_,true);
var vec__8768 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__8766,map__8766__$1,params__$1,map__8767,map__8767__$1,canvas__$1,scale,dims,coords_QMARK_,variant__$1,s__8739__$2,temp__5720__auto__,map__8727,map__8727__$1,map__8728,map__8728__$1,canvas,variants,variant,vec__8729,src_k_sel,pi_sel,eli_sel,xyi_sel,out_tups,vec__8724,hov,sel,dispatch_BANG_,report_BANG_,report_hov_BANG_,set_ref_BANG_,dnd_fns){
return (function (p1__8720_SHARP_){
return (p1__8720_SHARP_ * scale);
});})(map__8766,map__8766__$1,params__$1,map__8767,map__8767__$1,canvas__$1,scale,dims,coords_QMARK_,variant__$1,s__8739__$2,temp__5720__auto__,map__8727,map__8727__$1,map__8728,map__8728__$1,canvas,variants,variant,vec__8729,src_k_sel,pi_sel,eli_sel,xyi_sel,out_tups,vec__8724,hov,sel,dispatch_BANG_,report_BANG_,report_hov_BANG_,set_ref_BANG_,dnd_fns))
,dims);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8768,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8768,(1),null);
return cljs.core.cons((function (){try{return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,w,cljs.core.cst$kw$height,h], null),cljs.core.cst$kw$ref,set_ref_BANG_], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,cljs.core.cst$kw$attrs], null)),dnd_fns], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg_hiccup_kit.core.tf_STAR_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,scale], null)], null),(cljs.core.truth_(cljs.core.cst$kw$script.cljs$core$IFn$_invoke$arity$1(config))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.render_svg.paint,paintscript.util.merge_configs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config,variant__$1], 0))], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.render_svg.paint,params__$1], null)], null),(cljs.core.truth_((function (){var and__4120__auto__ = sel;
if(cljs.core.truth_(and__4120__auto__)){
var or__4131__auto__ = (function (){var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$defs,src_k_sel);
if(and__4120__auto____$1){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(sel,(2));
} else {
return and__4120__auto____$1;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (eli_sel > paintscript.nav.eli0);
}
} else {
return and__4120__auto__;
}
})())?(function (){var els_SINGLEQUOTE_ = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$defs,src_k_sel))?(0):paintscript.nav.eli0),cljs.core.take.cljs$core$IFn$_invoke$arity$2((eli_sel + (1)),paintscript.els.update_p_els(paintscript.nav.params_GT_.cljs$core$IFn$_invoke$arity$variadic(params__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$src_DASH_k,src_k_sel,cljs.core.cst$kw$pi,pi_sel], 0)),paintscript.els.normalize_els))));
var els_seg = paintscript.els.get_path_segment(src_k_sel,els_SINGLEQUOTE_,eli_sel);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$sel,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [paintscript.render_svg.path_builder,null,cljs.core.PersistentArrayMap.EMPTY,pi_sel,els_seg], null)], null);
})():null)], null),(cljs.core.truth_(coords_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$coords,(function (){var iter__4523__auto__ = ((function (map__8766,map__8766__$1,params__$1,map__8767,map__8767__$1,canvas__$1,scale,dims,coords_QMARK_,vec__8768,w,h,variant__$1,s__8739__$2,temp__5720__auto__,map__8727,map__8727__$1,map__8728,map__8728__$1,canvas,variants,variant,vec__8729,src_k_sel,pi_sel,eli_sel,xyi_sel,out_tups,vec__8724,hov,sel,dispatch_BANG_,report_BANG_,report_hov_BANG_,set_ref_BANG_,dnd_fns){
return (function paintscript$render_svg$iter__8738_$_iter__8776(s__8777){
return (new cljs.core.LazySeq(null,((function (map__8766,map__8766__$1,params__$1,map__8767,map__8767__$1,canvas__$1,scale,dims,coords_QMARK_,vec__8768,w,h,variant__$1,s__8739__$2,temp__5720__auto__,map__8727,map__8727__$1,map__8728,map__8728__$1,canvas,variants,variant,vec__8729,src_k_sel,pi_sel,eli_sel,xyi_sel,out_tups,vec__8724,hov,sel,dispatch_BANG_,report_BANG_,report_hov_BANG_,set_ref_BANG_,dnd_fns){
return (function (){
var s__8777__$1 = s__8777;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__8777__$1);
if(temp__5720__auto____$1){
var s__8777__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8777__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__8777__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__8779 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__8778 = (0);
while(true){
if((i__8778 < size__4522__auto__)){
var vec__8780 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__8778);
var pi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8780,(0),null);
var map__8783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8780,(1),null);
var map__8783__$1 = (((((!((map__8783 == null))))?(((((map__8783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8783):map__8783);
var p_opts = map__8783__$1;
var variant_k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8783__$1,cljs.core.cst$kw$variant_DASH_k);
var els = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8780,(2),null);
if(((cljs.core.not(cljs.core.cst$kw$disabled_QMARK_.cljs$core$IFn$_invoke$arity$1(p_opts))) && (((cljs.core.not(cljs.core.cst$kw$variant.cljs$core$IFn$_invoke$arity$1(params__$1))) || (cljs.core.not(variant_k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$variant.cljs$core$IFn$_invoke$arity$1(params__$1),variant_k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$variant.cljs$core$IFn$_invoke$arity$1(params__$1),variant_k)))))){
cljs.core.chunk_append(b__8779,(function (){var els_SINGLEQUOTE_ = paintscript.els.attach_xy_abs_meta(paintscript.els.resolve_els_refs(cljs.core.cst$kw$defs.cljs$core$IFn$_invoke$arity$1(params__$1),els));
var el_pnts_seq = paintscript.render.path_pnts(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$debug_QMARK_,true,cljs.core.cst$kw$coords_QMARK_,true], null),p_opts,els_SINGLEQUOTE_);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,paintscript.render_svg.plot_coords(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$scaled,scale,cljs.core.cst$kw$coord_DASH_size,(10),cljs.core.cst$kw$report_BANG_,report_BANG_,cljs.core.cst$kw$report_DASH_hover_BANG_,report_hov_BANG_,cljs.core.cst$kw$sel,sel,cljs.core.cst$kw$hov,hov,cljs.core.cst$kw$controls_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pi_sel,pi)], null),pi,els_SINGLEQUOTE_,el_pnts_seq)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,pi], null));
})());

var G__8797 = (i__8778 + (1));
i__8778 = G__8797;
continue;
} else {
var G__8798 = (i__8778 + (1));
i__8778 = G__8798;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8779),paintscript$render_svg$iter__8738_$_iter__8776(cljs.core.chunk_rest(s__8777__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8779),null);
}
} else {
var vec__8785 = cljs.core.first(s__8777__$2);
var pi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8785,(0),null);
var map__8788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8785,(1),null);
var map__8788__$1 = (((((!((map__8788 == null))))?(((((map__8788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8788):map__8788);
var p_opts = map__8788__$1;
var variant_k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8788__$1,cljs.core.cst$kw$variant_DASH_k);
var els = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8785,(2),null);
if(((cljs.core.not(cljs.core.cst$kw$disabled_QMARK_.cljs$core$IFn$_invoke$arity$1(p_opts))) && (((cljs.core.not(cljs.core.cst$kw$variant.cljs$core$IFn$_invoke$arity$1(params__$1))) || (cljs.core.not(variant_k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$variant.cljs$core$IFn$_invoke$arity$1(params__$1),variant_k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$variant.cljs$core$IFn$_invoke$arity$1(params__$1),variant_k)))))){
return cljs.core.cons((function (){var els_SINGLEQUOTE_ = paintscript.els.attach_xy_abs_meta(paintscript.els.resolve_els_refs(cljs.core.cst$kw$defs.cljs$core$IFn$_invoke$arity$1(params__$1),els));
var el_pnts_seq = paintscript.render.path_pnts(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$debug_QMARK_,true,cljs.core.cst$kw$coords_QMARK_,true], null),p_opts,els_SINGLEQUOTE_);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,paintscript.render_svg.plot_coords(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$scaled,scale,cljs.core.cst$kw$coord_DASH_size,(10),cljs.core.cst$kw$report_BANG_,report_BANG_,cljs.core.cst$kw$report_DASH_hover_BANG_,report_hov_BANG_,cljs.core.cst$kw$sel,sel,cljs.core.cst$kw$hov,hov,cljs.core.cst$kw$controls_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pi_sel,pi)], null),pi,els_SINGLEQUOTE_,el_pnts_seq)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,pi], null));
})(),paintscript$render_svg$iter__8738_$_iter__8776(cljs.core.rest(s__8777__$2)));
} else {
var G__8799 = cljs.core.rest(s__8777__$2);
s__8777__$1 = G__8799;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__8766,map__8766__$1,params__$1,map__8767,map__8767__$1,canvas__$1,scale,dims,coords_QMARK_,vec__8768,w,h,variant__$1,s__8739__$2,temp__5720__auto__,map__8727,map__8727__$1,map__8728,map__8728__$1,canvas,variants,variant,vec__8729,src_k_sel,pi_sel,eli_sel,xyi_sel,out_tups,vec__8724,hov,sel,dispatch_BANG_,report_BANG_,report_hov_BANG_,set_ref_BANG_,dnd_fns))
,null,null));
});})(map__8766,map__8766__$1,params__$1,map__8767,map__8767__$1,canvas__$1,scale,dims,coords_QMARK_,vec__8768,w,h,variant__$1,s__8739__$2,temp__5720__auto__,map__8727,map__8727__$1,map__8728,map__8728__$1,canvas,variants,variant,vec__8729,src_k_sel,pi_sel,eli_sel,xyi_sel,out_tups,vec__8724,hov,sel,dispatch_BANG_,report_BANG_,report_hov_BANG_,set_ref_BANG_,dnd_fns))
;
return iter__4523__auto__(out_tups);
})()], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(variant__$1)], null));
}catch (e8774){var err = e8774;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$paint_DASH_exec_DASH_error], 0));

console.log(err);

var G__8775 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$undo], null);
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__8775) : dispatch_BANG_.call(null,G__8775));
}})(),paintscript$render_svg$iter__8738(cljs.core.rest(s__8739__$2)));
}
} else {
return null;
}
break;
}
});})(map__8727,map__8727__$1,map__8728,map__8728__$1,canvas,variants,variant,vec__8729,src_k_sel,pi_sel,eli_sel,xyi_sel,out_tups,vec__8724,hov,sel,dispatch_BANG_,report_BANG_,report_hov_BANG_,set_ref_BANG_,dnd_fns))
,null,null));
});})(map__8727,map__8727__$1,map__8728,map__8728__$1,canvas,variants,variant,vec__8729,src_k_sel,pi_sel,eli_sel,xyi_sel,out_tups,vec__8724,hov,sel,dispatch_BANG_,report_BANG_,report_hov_BANG_,set_ref_BANG_,dnd_fns))
;
return iter__4523__auto__((function (){var or__4131__auto__ = variants;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var G__8791 = variant;
if((G__8791 == null)){
return null;
} else {
return (new cljs.core.List(null,G__8791,null,(1),null));
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
}
}
})());
})()], null);
});

paintscript.render_svg.canvas_paint.cljs$lang$maxFixedArity = 3;

