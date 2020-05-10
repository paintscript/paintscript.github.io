// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('zc_split.calc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
zc_split.calc.calc_frac_diff = (function zc_split$calc$calc_frac_diff(id_ref,frac_map,rel,dist){
var before_frac = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frac_map,id_ref);
var diff_frac = (rel * dist);
var total_frac = (before_frac * (function (){var x__4222__auto__ = (1);
var y__4223__auto__ = diff_frac;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})());
return total_frac;
});
zc_split.calc.calc_fracs_basic = (function zc_split$calc$calc_fracs_basic(p__17306,dist){
var map__17307 = p__17306;
var map__17307__$1 = (((((!((map__17307 == null))))?(((((map__17307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17307):map__17307);
var snapshot = map__17307__$1;
var id_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17307__$1,cljs.core.cst$kw$id_DASH_ref);
var ids_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17307__$1,cljs.core.cst$kw$ids_DASH_pred);
var ids_succ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17307__$1,cljs.core.cst$kw$ids_DASH_succ);
var rel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17307__$1,cljs.core.cst$kw$rel);
var frac_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17307__$1,cljs.core.cst$kw$frac_DASH_map);
var id_adj = cljs.core.first(ids_succ);
var frac_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frac_map,id_ref);
var frac_adj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frac_map,id_adj);
var total_frac = zc_split.calc.calc_frac_diff(id_ref,frac_map,rel,dist);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id_ref,(frac_id + total_frac),id_adj,(frac_adj - total_frac)]);
});
/**
 * Subtract `amount` from the `values` vector until `amount` is zero or all
 * `values` are zero. Return the updated values and the remaining amount.
 */
zc_split.calc.subtract = (function zc_split$calc$subtract(values,amount){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__17309,val_i){
var vec__17310 = p__17309;
var values__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17310,(0),null);
var amount__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17310,(1),null);
var diff = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(values__$1,val_i) - amount__$1);
if((((diff > (0))) || ((diff === (0))))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(values__$1,val_i,diff),(0)], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(values__$1,val_i,(0)),(- diff)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [values,amount], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(values)));
});
zc_split.calc.shift_by_n = (function zc_split$calc$shift_by_n(nn_minus,n_plus,n){
var vec__17313 = zc_split.calc.subtract(nn_minus,n);
var nn_minus_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17313,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17313,(1),null);
var nn_plus_STAR_ = (n_plus + n);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nn_minus_STAR_,nn_plus_STAR_], null);
});
zc_split.calc.abs = (function zc_split$calc$abs(p1__17316_SHARP_){
var G__17317 = p1__17316_SHARP_;
if((p1__17316_SHARP_ < (0))){
return (- G__17317);
} else {
return G__17317;
}
});
zc_split.calc.upd_fracs = (function zc_split$calc$upd_fracs(pred,succ,f_diff,frac_map){
var vec__17318 = (((f_diff < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(pred),cljs.core.first(succ)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(succ),cljs.core.first(pred)], null));
var nn_minus_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17318,(0),null);
var n_plus_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17318,(1),null);
var vec__17321 = zc_split.calc.shift_by_n(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frac_map,nn_minus_ids),(frac_map.cljs$core$IFn$_invoke$arity$1 ? frac_map.cljs$core$IFn$_invoke$arity$1(n_plus_id) : frac_map.call(null,n_plus_id)),zc_split.calc.abs(f_diff));
var nn_minus = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17321,(0),null);
var n_plus = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17321,(1),null);
var frac_map_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(nn_minus_ids,nn_minus),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n_plus_id,n_plus], null)))));
return frac_map_STAR_;
});
zc_split.calc.calc_fracs_push_adjacent = (function zc_split$calc$calc_fracs_push_adjacent(p__17324,dist){
var map__17325 = p__17324;
var map__17325__$1 = (((((!((map__17325 == null))))?(((((map__17325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17325):map__17325);
var snapshot = map__17325__$1;
var id_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17325__$1,cljs.core.cst$kw$id_DASH_ref);
var ids_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17325__$1,cljs.core.cst$kw$ids_DASH_pred);
var ids_succ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17325__$1,cljs.core.cst$kw$ids_DASH_succ);
var rel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17325__$1,cljs.core.cst$kw$rel);
var frac_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17325__$1,cljs.core.cst$kw$frac_DASH_map);
var total_frac = zc_split.calc.calc_frac_diff(id_ref,frac_map,rel,dist);
return zc_split.calc.upd_fracs(ids_pred,ids_succ,total_frac,frac_map);
});
zc_split.calc.calc_frac_strategies = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$basic,zc_split.calc.calc_fracs_basic,cljs.core.cst$kw$push_DASH_adjacent,zc_split.calc.calc_fracs_push_adjacent], null);
zc_split.calc.calc_fracs = (function zc_split$calc$calc_fracs(calc_frac_strategy,get_direction,snapshot,mouse_ev){
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(zc_split.calc.calc_frac_strategies,calc_frac_strategy);
var G__17327 = snapshot;
var G__17328 = ((get_direction.cljs$core$IFn$_invoke$arity$1 ? get_direction.cljs$core$IFn$_invoke$arity$1(mouse_ev) : get_direction.call(null,mouse_ev)) - cljs.core.cst$kw$mouse.cljs$core$IFn$_invoke$arity$1(snapshot));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17327,G__17328) : f.call(null,G__17327,G__17328));
});
