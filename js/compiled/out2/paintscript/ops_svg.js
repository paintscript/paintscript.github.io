// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('paintscript.ops_svg');
goog.require('cljs.core');
goog.require('cljs.core.constants');
paintscript.ops_svg.svg_xml_b64 = (function paintscript$ops_svg$svg_xml_b64(svg_dom){
return ["data:image/svg+xml;base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(btoa((new XMLSerializer()).serializeToString(svg_dom)))].join('');
});
paintscript.ops_svg.to_svg = (function paintscript$ops_svg$to_svg(_,svg_dom,cont){
var G__9184 = paintscript.ops_svg.svg_xml_b64(svg_dom);
return (cont.cljs$core$IFn$_invoke$arity$1 ? cont.cljs$core$IFn$_invoke$arity$1(G__9184) : cont.call(null,G__9184));
});
paintscript.ops_svg.to_png_BANG_ = (function paintscript$ops_svg$to_png_BANG_(p__9185,svg_dom,cont){
var vec__9186 = p__9185;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9186,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9186,(1),null);
var canvas = document.createElement("canvas");
var img = (new Image());
var svg_b64 = paintscript.ops_svg.svg_xml_b64(svg_dom);
var G__9189_9191 = canvas;
G__9189_9191.width = w;

G__9189_9191.height = h;


var G__9190 = img;
G__9190.onload = ((function (G__9190,canvas,img,svg_b64,vec__9186,w,h){
return (function (){
canvas.getContext("2d").drawImage(img,(0),(0),w,h);

var png_b64 = canvas.toDataURL("image/png");
return (cont.cljs$core$IFn$_invoke$arity$1 ? cont.cljs$core$IFn$_invoke$arity$1(png_b64) : cont.call(null,png_b64));
});})(G__9190,canvas,img,svg_b64,vec__9186,w,h))
;

G__9190.src = svg_b64;

return G__9190;
});
paintscript.ops_svg.download_BANG_ = (function paintscript$ops_svg$download_BANG_(b64,name){
var G__9192 = document.createElement("a");
G__9192.setAttribute("href",b64);

G__9192.setAttribute("download",name);

G__9192.click();

return G__9192;
});
