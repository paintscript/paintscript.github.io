// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('keybind.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
keybind.core.MODS = cljs.core.PersistentHashMap.fromArrays(["option","M","S","super","win","C","shift","alt","control","cmd","meta","ctrl","defmod"],[cljs.core.cst$kw$alt,cljs.core.cst$kw$alt,cljs.core.cst$kw$meta,cljs.core.cst$kw$meta,cljs.core.cst$kw$meta,cljs.core.cst$kw$ctrl,cljs.core.cst$kw$shift,cljs.core.cst$kw$alt,cljs.core.cst$kw$ctrl,cljs.core.cst$kw$meta,cljs.core.cst$kw$meta,cljs.core.cst$kw$ctrl,(((navigator.userAgent.indexOf("Mac OS X") < (0)))?cljs.core.cst$kw$ctrl:cljs.core.cst$kw$meta)]);
keybind.core.KEYATTRS = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$shift,"shiftKey",cljs.core.cst$kw$ctrl,"ctrlKey",cljs.core.cst$kw$alt,"altKey",cljs.core.cst$kw$meta,"metaKey",cljs.core.cst$kw$code,"keyCode"], null);
keybind.core.DEFCHORD = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$shift,false,cljs.core.cst$kw$ctrl,false,cljs.core.cst$kw$alt,false,cljs.core.cst$kw$meta,false], null);
keybind.core.KEYS = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays(["]","'","space","tab","=","`","right","*","kpplus","up","delete","caps","/","plus","return","-","ins","backspace","minus","capslock","escape","del","pgdown","pageup","pause","down","home",".",";",",","insert","pagedown","[","pgup","kpminus","\\","enter","+","end","esc","left"],[(221),(222),(32),(9),(187),(192),(39),(106),(107),(38),(46),(20),(191),(107),(13),(189),(45),(8),(189),(20),(27),(46),(34),(33),(19),(40),(36),(190),(186),(188),(45),(34),(219),(33),(109),(220),(13),(107),(35),(27),(37)]),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function keybind$core$iter__16922(s__16923){
return (new cljs.core.LazySeq(null,(function (){
var s__16923__$1 = s__16923;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__16923__$1);
if(temp__5720__auto__){
var s__16923__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16923__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16923__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16925 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16924 = (0);
while(true){
if((i__16924 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16924);
cljs.core.chunk_append(b__16925,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null));

var G__16938 = (i__16924 + (1));
i__16924 = G__16938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16925),keybind$core$iter__16922(cljs.core.chunk_rest(s__16923__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16925),null);
}
} else {
var i = cljs.core.first(s__16923__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null),keybind$core$iter__16922(cljs.core.rest(s__16923__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function keybind$core$iter__16926(s__16927){
return (new cljs.core.LazySeq(null,(function (){
var s__16927__$1 = s__16927;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__16927__$1);
if(temp__5720__auto__){
var s__16927__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16927__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16927__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16929 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16928 = (0);
while(true){
if((i__16928 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16928);
cljs.core.chunk_append(b__16929,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),((48) + i)], null));

var G__16939 = (i__16928 + (1));
i__16928 = G__16939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16929),keybind$core$iter__16926(cljs.core.chunk_rest(s__16927__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16929),null);
}
} else {
var i = cljs.core.first(s__16927__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),((48) + i)], null),keybind$core$iter__16926(cljs.core.rest(s__16927__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function keybind$core$iter__16930(s__16931){
return (new cljs.core.LazySeq(null,(function (){
var s__16931__$1 = s__16931;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__16931__$1);
if(temp__5720__auto__){
var s__16931__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16931__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16931__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16933 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16932 = (0);
while(true){
if((i__16932 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16932);
cljs.core.chunk_append(b__16933,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null));

var G__16940 = (i__16932 + (1));
i__16932 = G__16940;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16933),keybind$core$iter__16930(cljs.core.chunk_rest(s__16931__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16933),null);
}
} else {
var i = cljs.core.first(s__16931__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null),keybind$core$iter__16930(cljs.core.rest(s__16931__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(25)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function keybind$core$iter__16934(s__16935){
return (new cljs.core.LazySeq(null,(function (){
var s__16935__$1 = s__16935;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__16935__$1);
if(temp__5720__auto__){
var s__16935__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16935__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16935__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16937 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16936 = (0);
while(true){
if((i__16936 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16936);
cljs.core.chunk_append(b__16937,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null));

var G__16941 = (i__16936 + (1));
i__16936 = G__16941;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16937),keybind$core$iter__16934(cljs.core.chunk_rest(s__16935__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16937),null);
}
} else {
var i = cljs.core.first(s__16935__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null),keybind$core$iter__16934(cljs.core.rest(s__16935__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((65),(91)));
})())], 0));
keybind.core.KNOWN_KEYS = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function keybind$core$iter__16942(s__16943){
return (new cljs.core.LazySeq(null,(function (){
var s__16943__$1 = s__16943;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__16943__$1);
if(temp__5720__auto__){
var s__16943__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16943__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16943__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16945 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16944 = (0);
while(true){
if((i__16944 < size__4522__auto__)){
var vec__16946 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16944);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16946,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16946,(1),null);
cljs.core.chunk_append(b__16945,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null));

var G__16952 = (i__16944 + (1));
i__16944 = G__16952;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16945),keybind$core$iter__16942(cljs.core.chunk_rest(s__16943__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16945),null);
}
} else {
var vec__16949 = cljs.core.first(s__16943__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16949,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16949,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null),keybind$core$iter__16942(cljs.core.rest(s__16943__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(keybind.core.KEYS);
})());
if((typeof keybind !== 'undefined') && (typeof keybind.core !== 'undefined') && (typeof keybind.core.BINDINGS !== 'undefined')){
} else {
keybind.core.BINDINGS = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof keybind !== 'undefined') && (typeof keybind.core !== 'undefined') && (typeof keybind.core.PRESSED !== 'undefined')){
} else {
keybind.core.PRESSED = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof keybind !== 'undefined') && (typeof keybind.core !== 'undefined') && (typeof keybind.core.ENABLED_QMARK_ !== 'undefined')){
} else {
keybind.core.ENABLED_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
}
keybind.core.button__GT_code = (function keybind$core$button__GT_code(button){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(keybind.core.KEYS,button);
if(cljs.core.truth_(temp__5718__auto__)){
var code = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [code,null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(keybind.core.KEYS,button.toLowerCase()),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$shift,true], null)], null);
}
});
keybind.core.parse_chord = (function keybind$core$parse_chord(keystring){
var bits = keystring.split(/-(?!$)/);
var button = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bits,(cljs.core.count(bits) - (1)));
var vec__16954 = keybind.core.button__GT_code(button);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16954,(0),null);
var mods = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16954,(1),null);
if(cljs.core.truth_(code)){
} else {
throw (new Error(["Unknown key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(button),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (bits,button,vec__16954,code,mods){
return (function (mods__$1,mod){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mods__$1,mod,true);
});})(bits,button,vec__16954,code,mods))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keybind.core.DEFCHORD,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$code,code], null),mods], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (bits,button,vec__16954,code,mods){
return (function (p1__16953_SHARP_){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(keybind.core.MODS,p1__16953_SHARP_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw (new Error(["Unknown modifier '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')));
}
});})(bits,button,vec__16954,code,mods))
,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(bits)));
});
keybind.core.parse = (function keybind$core$parse(chain){
var bits = chain.split(" ");
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(keybind.core.parse_chord,bits);
});
keybind.core.e__GT_chord = (function keybind$core$e__GT_chord(e){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function keybind$core$e__GT_chord_$_iter__16957(s__16958){
return (new cljs.core.LazySeq(null,(function (){
var s__16958__$1 = s__16958;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__16958__$1);
if(temp__5720__auto__){
var s__16958__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16958__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16958__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16960 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16959 = (0);
while(true){
if((i__16959 < size__4522__auto__)){
var vec__16961 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16959);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16961,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16961,(1),null);
cljs.core.chunk_append(b__16960,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null));

var G__16967 = (i__16959 + (1));
i__16959 = G__16967;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16960),keybind$core$e__GT_chord_$_iter__16957(cljs.core.chunk_rest(s__16958__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16960),null);
}
} else {
var vec__16964 = cljs.core.first(s__16958__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16964,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16964,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null),keybind$core$e__GT_chord_$_iter__16957(cljs.core.rest(s__16958__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(keybind.core.KEYATTRS);
})());
});
keybind.core.reset_sequence_BANG_ = (function keybind$core$reset_sequence_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(keybind.core.PRESSED,cljs.core.empty);
});
keybind.core.dispatch = (function keybind$core$dispatch(e,bindings){
var chord = keybind.core.e__GT_chord(e);
var sequence = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(keybind.core.PRESSED),chord);
var inner = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(bindings,sequence);
var handlers = cljs.core.cst$kw$handlers.cljs$core$IFn$_invoke$arity$1(inner);
if(cljs.core.not(inner)){
return keybind.core.reset_sequence_BANG_();
} else {
if(cljs.core.truth_(handlers)){
var seq__16968_16984 = cljs.core.seq(cljs.core.cst$kw$handlers.cljs$core$IFn$_invoke$arity$1(inner));
var chunk__16969_16985 = null;
var count__16970_16986 = (0);
var i__16971_16987 = (0);
while(true){
if((i__16971_16987 < count__16970_16986)){
var vec__16978_16988 = chunk__16969_16985.cljs$core$IIndexed$_nth$arity$2(null,i__16971_16987);
var __16989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16978_16988,(0),null);
var handler_16990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16978_16988,(1),null);
(handler_16990.cljs$core$IFn$_invoke$arity$2 ? handler_16990.cljs$core$IFn$_invoke$arity$2(e,sequence) : handler_16990.call(null,e,sequence));


var G__16991 = seq__16968_16984;
var G__16992 = chunk__16969_16985;
var G__16993 = count__16970_16986;
var G__16994 = (i__16971_16987 + (1));
seq__16968_16984 = G__16991;
chunk__16969_16985 = G__16992;
count__16970_16986 = G__16993;
i__16971_16987 = G__16994;
continue;
} else {
var temp__5720__auto___16995 = cljs.core.seq(seq__16968_16984);
if(temp__5720__auto___16995){
var seq__16968_16996__$1 = temp__5720__auto___16995;
if(cljs.core.chunked_seq_QMARK_(seq__16968_16996__$1)){
var c__4550__auto___16997 = cljs.core.chunk_first(seq__16968_16996__$1);
var G__16998 = cljs.core.chunk_rest(seq__16968_16996__$1);
var G__16999 = c__4550__auto___16997;
var G__17000 = cljs.core.count(c__4550__auto___16997);
var G__17001 = (0);
seq__16968_16984 = G__16998;
chunk__16969_16985 = G__16999;
count__16970_16986 = G__17000;
i__16971_16987 = G__17001;
continue;
} else {
var vec__16981_17002 = cljs.core.first(seq__16968_16996__$1);
var __17003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16981_17002,(0),null);
var handler_17004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16981_17002,(1),null);
(handler_17004.cljs$core$IFn$_invoke$arity$2 ? handler_17004.cljs$core$IFn$_invoke$arity$2(e,sequence) : handler_17004.call(null,e,sequence));


var G__17005 = cljs.core.next(seq__16968_16996__$1);
var G__17006 = null;
var G__17007 = (0);
var G__17008 = (0);
seq__16968_16984 = G__17005;
chunk__16969_16985 = G__17006;
count__16970_16986 = G__17007;
i__16971_16987 = G__17008;
continue;
}
} else {
}
}
break;
}

return keybind.core.reset_sequence_BANG_();
} else {
return cljs.core.reset_BANG_(keybind.core.PRESSED,sequence);

}
}
});
keybind.core.bind = (function keybind$core$bind(bindings,spec,key,cb){

var parsed = keybind.core.parse(spec);
return cljs.core.assoc_in(bindings,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(parsed,cljs.core.cst$kw$handlers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)),cb);
});
keybind.core.unbind = (function keybind$core$unbind(bindings,spec,key){

var parsed = keybind.core.parse(spec);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(bindings,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parsed,cljs.core.cst$kw$handlers),cljs.core.dissoc,key);
});
keybind.core.bind_BANG_ = (function keybind$core$bind_BANG_(spec,key,cb){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(keybind.core.BINDINGS,keybind.core.bind,spec,key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cb], 0));
});
keybind.core.unbind_BANG_ = (function keybind$core$unbind_BANG_(spec,key){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(keybind.core.BINDINGS,keybind.core.unbind,spec,key);
});
keybind.core.unbind_all_BANG_ = (function keybind$core$unbind_all_BANG_(){

keybind.core.reset_sequence_BANG_();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(keybind.core.BINDINGS,cljs.core.empty);
});
keybind.core.disable_BANG_ = (function keybind$core$disable_BANG_(){

return cljs.core.reset_BANG_(keybind.core.ENABLED_QMARK_,false);
});
keybind.core.enable_BANG_ = (function keybind$core$enable_BANG_(){

return cljs.core.reset_BANG_(keybind.core.ENABLED_QMARK_,true);
});
keybind.core.dispatcher_BANG_ = (function keybind$core$dispatcher_BANG_(bindings){

return (function (e){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.deref(keybind.core.ENABLED_QMARK_);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keybind.core.KNOWN_KEYS,e.keyCode);
} else {
return and__4120__auto__;
}
})())){
return keybind.core.dispatch(e,cljs.core.deref(bindings));
} else {
return null;
}
});
});
if((typeof keybind !== 'undefined') && (typeof keybind.core !== 'undefined') && (typeof keybind.core.bind_keypress_listener !== 'undefined')){
} else {
keybind.core.bind_keypress_listener = addEventListener("keydown",keybind.core.dispatcher_BANG_(keybind.core.BINDINGS),false);
}
