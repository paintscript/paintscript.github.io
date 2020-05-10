// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('z_com.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
z_com.util.deref_QMARK_ = (function z_com$util$deref_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
