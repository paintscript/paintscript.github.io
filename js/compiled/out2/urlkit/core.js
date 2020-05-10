// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('urlkit.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.reader');
goog.require('goog.Uri');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
urlkit.core.URL = (function (protocol,domain,port,path,query,fragment,__meta,__extmap,__hash){
this.protocol = protocol;
this.domain = domain;
this.port = port;
this.path = path;
this.query = query;
this.fragment = fragment;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
urlkit.core.URL.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

urlkit.core.URL.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k17761,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__17765 = k17761;
var G__17765__$1 = (((G__17765 instanceof cljs.core.Keyword))?G__17765.fqn:null);
switch (G__17765__$1) {
case "protocol":
return self__.protocol;

break;
case "domain":
return self__.domain;

break;
case "port":
return self__.port;

break;
case "path":
return self__.path;

break;
case "query":
return self__.query;

break;
case "fragment":
return self__.fragment;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17761,else__4388__auto__);

}
});

urlkit.core.URL.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__17766){
var vec__17767 = p__17766;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17767,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17767,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

urlkit.core.URL.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#urlkit.core.URL{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$protocol,self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$domain,self__.domain],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$port,self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$query,self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fragment,self__.fragment],null))], null),self__.__extmap));
});

urlkit.core.URL.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17760){
var self__ = this;
var G__17760__$1 = this;
return (new cljs.core.RecordIter((0),G__17760__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol,cljs.core.cst$kw$domain,cljs.core.cst$kw$port,cljs.core.cst$kw$path,cljs.core.cst$kw$query,cljs.core.cst$kw$fragment], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

urlkit.core.URL.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

urlkit.core.URL.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new urlkit.core.URL(self__.protocol,self__.domain,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,self__.__hash));
});

urlkit.core.URL.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

urlkit.core.URL.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__17770 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-273588856 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__17770(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

urlkit.core.URL.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17762,other17763){
var self__ = this;
var this17762__$1 = this;
return (((!((other17763 == null)))) && ((this17762__$1.constructor === other17763.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17762__$1.protocol,other17763.protocol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17762__$1.domain,other17763.domain)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17762__$1.port,other17763.port)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17762__$1.path,other17763.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17762__$1.query,other17763.query)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17762__$1.fragment,other17763.fragment)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17762__$1.__extmap,other17763.__extmap)));
});

urlkit.core.URL.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$protocol,null,cljs.core.cst$kw$fragment,null,cljs.core.cst$kw$port,null,cljs.core.cst$kw$domain,null,cljs.core.cst$kw$query,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new urlkit.core.URL(self__.protocol,self__.domain,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

urlkit.core.URL.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__17760){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__17771 = cljs.core.keyword_identical_QMARK_;
var expr__17772 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__17774 = cljs.core.cst$kw$protocol;
var G__17775 = expr__17772;
return (pred__17771.cljs$core$IFn$_invoke$arity$2 ? pred__17771.cljs$core$IFn$_invoke$arity$2(G__17774,G__17775) : pred__17771.call(null,G__17774,G__17775));
})())){
return (new urlkit.core.URL(G__17760,self__.domain,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17776 = cljs.core.cst$kw$domain;
var G__17777 = expr__17772;
return (pred__17771.cljs$core$IFn$_invoke$arity$2 ? pred__17771.cljs$core$IFn$_invoke$arity$2(G__17776,G__17777) : pred__17771.call(null,G__17776,G__17777));
})())){
return (new urlkit.core.URL(self__.protocol,G__17760,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17778 = cljs.core.cst$kw$port;
var G__17779 = expr__17772;
return (pred__17771.cljs$core$IFn$_invoke$arity$2 ? pred__17771.cljs$core$IFn$_invoke$arity$2(G__17778,G__17779) : pred__17771.call(null,G__17778,G__17779));
})())){
return (new urlkit.core.URL(self__.protocol,self__.domain,G__17760,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17780 = cljs.core.cst$kw$path;
var G__17781 = expr__17772;
return (pred__17771.cljs$core$IFn$_invoke$arity$2 ? pred__17771.cljs$core$IFn$_invoke$arity$2(G__17780,G__17781) : pred__17771.call(null,G__17780,G__17781));
})())){
return (new urlkit.core.URL(self__.protocol,self__.domain,self__.port,G__17760,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17782 = cljs.core.cst$kw$query;
var G__17783 = expr__17772;
return (pred__17771.cljs$core$IFn$_invoke$arity$2 ? pred__17771.cljs$core$IFn$_invoke$arity$2(G__17782,G__17783) : pred__17771.call(null,G__17782,G__17783));
})())){
return (new urlkit.core.URL(self__.protocol,self__.domain,self__.port,self__.path,G__17760,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17784 = cljs.core.cst$kw$fragment;
var G__17785 = expr__17772;
return (pred__17771.cljs$core$IFn$_invoke$arity$2 ? pred__17771.cljs$core$IFn$_invoke$arity$2(G__17784,G__17785) : pred__17771.call(null,G__17784,G__17785));
})())){
return (new urlkit.core.URL(self__.protocol,self__.domain,self__.port,self__.path,self__.query,G__17760,self__.__meta,self__.__extmap,null));
} else {
return (new urlkit.core.URL(self__.protocol,self__.domain,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__17760),null));
}
}
}
}
}
}
});

urlkit.core.URL.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$protocol,self__.protocol,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$domain,self__.domain,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$port,self__.port,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path,self__.path,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$query,self__.query,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$fragment,self__.fragment,null))], null),self__.__extmap));
});

urlkit.core.URL.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__17760){
var self__ = this;
var this__4384__auto____$1 = this;
return (new urlkit.core.URL(self__.protocol,self__.domain,self__.port,self__.path,self__.query,self__.fragment,G__17760,self__.__extmap,self__.__hash));
});

urlkit.core.URL.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

urlkit.core.URL.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$protocol,cljs.core.cst$sym$domain,cljs.core.cst$sym$port,cljs.core.cst$sym$path,cljs.core.cst$sym$query,cljs.core.cst$sym$fragment], null);
});

urlkit.core.URL.cljs$lang$type = true;

urlkit.core.URL.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"urlkit.core/URL",null,(1),null));
});

urlkit.core.URL.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"urlkit.core/URL");
});

/**
 * Positional factory function for urlkit.core/URL.
 */
urlkit.core.__GT_URL = (function urlkit$core$__GT_URL(protocol,domain,port,path,query,fragment){
return (new urlkit.core.URL(protocol,domain,port,path,query,fragment,null,null,null));
});

/**
 * Factory function for urlkit.core/URL, taking a map of keywords to field values.
 */
urlkit.core.map__GT_URL = (function urlkit$core$map__GT_URL(G__17764){
var extmap__4424__auto__ = (function (){var G__17786 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17764,cljs.core.cst$kw$protocol,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$domain,cljs.core.cst$kw$port,cljs.core.cst$kw$path,cljs.core.cst$kw$query,cljs.core.cst$kw$fragment], 0));
if(cljs.core.record_QMARK_(G__17764)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17786);
} else {
return G__17786;
}
})();
return (new urlkit.core.URL(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(G__17764),cljs.core.cst$kw$domain.cljs$core$IFn$_invoke$arity$1(G__17764),cljs.core.cst$kw$port.cljs$core$IFn$_invoke$arity$1(G__17764),cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__17764),cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(G__17764),cljs.core.cst$kw$fragment.cljs$core$IFn$_invoke$arity$1(G__17764),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

urlkit.core.url_object_ctor = (function urlkit$core$url_object_ctor(p1__17789_SHARP_){
return (new goog.Uri(p1__17789_SHARP_));
});
urlkit.core.opt_read_string = (function urlkit$core$opt_read_string(x){
var G__17790 = x;
if(((typeof x === 'string') && ((!(clojure.string.blank_QMARK_(x)))))){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__17790);
} else {
return G__17790;
}
});
urlkit.core.opt_name = (function urlkit$core$opt_name(x){
var G__17791 = x;
if((x instanceof cljs.core.Keyword)){
return cljs.core.name(G__17791);
} else {
return G__17791;
}
});
urlkit.core.encode_url = (function urlkit$core$encode_url(var_args){
var G__17793 = arguments.length;
switch (G__17793) {
case 1:
return urlkit.core.encode_url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return urlkit.core.encode_url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

urlkit.core.encode_url.cljs$core$IFn$_invoke$arity$1 = (function (string){
return urlkit.core.encode_url.cljs$core$IFn$_invoke$arity$2(string,"UTF-8");
});

urlkit.core.encode_url.cljs$core$IFn$_invoke$arity$2 = (function (string,encoding){
var G__17794 = string;
var G__17794__$1 = (((G__17794 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17794));
if((G__17794__$1 == null)){
return null;
} else {
return encodeURIComponent(G__17794__$1);
}
});

urlkit.core.encode_url.cljs$lang$maxFixedArity = 2;

urlkit.core.decode_url = (function urlkit$core$decode_url(var_args){
var G__17797 = arguments.length;
switch (G__17797) {
case 1:
return urlkit.core.decode_url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return urlkit.core.decode_url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

urlkit.core.decode_url.cljs$core$IFn$_invoke$arity$1 = (function (string){
return urlkit.core.decode_url.cljs$core$IFn$_invoke$arity$2(string,"UTF-8");
});

urlkit.core.decode_url.cljs$core$IFn$_invoke$arity$2 = (function (string,encoding){
var G__17798 = string;
var G__17798__$1 = (((G__17798 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17798));
if((G__17798__$1 == null)){
return null;
} else {
return decodeURIComponent(G__17798__$1);
}
});

urlkit.core.decode_url.cljs$lang$maxFixedArity = 2;

urlkit.core.parse_query = (function urlkit$core$parse_query(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17822 = arguments.length;
var i__4731__auto___17823 = (0);
while(true){
if((i__4731__auto___17823 < len__4730__auto___17822)){
args__4736__auto__.push((arguments[i__4731__auto___17823]));

var G__17824 = (i__4731__auto___17823 + (1));
i__4731__auto___17823 = G__17824;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return urlkit.core.parse_query.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

urlkit.core.parse_query.cljs$core$IFn$_invoke$arity$variadic = (function (query_string,p__17802){
var map__17803 = p__17802;
var map__17803__$1 = (((((!((map__17803 == null))))?(((((map__17803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17803):map__17803);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17803__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_);
var edn_vals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17803__$1,cljs.core.cst$kw$edn_DASH_vals_QMARK_);
var G__17805 = ((clojure.string.blank_QMARK_(query_string))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(query_string,/&/));
var G__17805__$1 = (((G__17805 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__17805,map__17803,map__17803__$1,keywordize_keys_QMARK_,edn_vals_QMARK_){
return (function (kv){
var G__17814 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(urlkit.core.decode_url,clojure.string.split.cljs$core$IFn$_invoke$arity$2(kv,/=/));
var fexpr__17813 = ((function (G__17814,G__17805,map__17803,map__17803__$1,keywordize_keys_QMARK_,edn_vals_QMARK_){
return (function (p__17815){
var vec__17816 = p__17815;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17816,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17816,(1),null);
var args = vec__17816;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17819 = k;
if(cljs.core.truth_(keywordize_keys_QMARK_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__17819);
} else {
return G__17819;
}
})(),(function (){var G__17820 = cljs.core.count(args);
switch (G__17820) {
case (2):
var G__17821 = v;
if(cljs.core.truth_(edn_vals_QMARK_)){
return urlkit.core.opt_read_string(G__17821);
} else {
return G__17821;
}

break;
case (1):
return true;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17820)].join('')));

}
})()], null);
});})(G__17814,G__17805,map__17803,map__17803__$1,keywordize_keys_QMARK_,edn_vals_QMARK_))
;
return fexpr__17813(G__17814);
});})(G__17805,map__17803,map__17803__$1,keywordize_keys_QMARK_,edn_vals_QMARK_))
,G__17805));
if((G__17805__$1 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17805__$1);
}
});

urlkit.core.parse_query.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
urlkit.core.parse_query.cljs$lang$applyTo = (function (seq17800){
var G__17801 = cljs.core.first(seq17800);
var seq17800__$1 = cljs.core.next(seq17800);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17801,seq17800__$1);
});

urlkit.core.serialize_query = (function urlkit$core$serialize_query(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17836 = arguments.length;
var i__4731__auto___17837 = (0);
while(true){
if((i__4731__auto___17837 < len__4730__auto___17836)){
args__4736__auto__.push((arguments[i__4731__auto___17837]));

var G__17838 = (i__4731__auto___17837 + (1));
i__4731__auto___17837 = G__17838;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return urlkit.core.serialize_query.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

urlkit.core.serialize_query.cljs$core$IFn$_invoke$arity$variadic = (function (query_map,p__17828){
var map__17829 = p__17828;
var map__17829__$1 = (((((!((map__17829 == null))))?(((((map__17829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17829):map__17829);
var edn_vals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17829__$1,cljs.core.cst$kw$edn_DASH_vals_QMARK_);
var v_fn = (cljs.core.truth_(edn_vals_QMARK_)?cljs.core.pr_str:cljs.core.str);
var G__17831 = (function (){var or__4131__auto__ = query_map;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__17831__$1 = (((G__17831 == null))?null:cljs.core.sort.cljs$core$IFn$_invoke$arity$1(G__17831));
var G__17831__$2 = (((G__17831__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__17831,G__17831__$1,v_fn,map__17829,map__17829__$1,edn_vals_QMARK_){
return (function (p__17832){
var vec__17833 = p__17832;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17833,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17833,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(urlkit.core.encode_url.cljs$core$IFn$_invoke$arity$1(urlkit.core.opt_name(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(urlkit.core.encode_url.cljs$core$IFn$_invoke$arity$1((v_fn.cljs$core$IFn$_invoke$arity$1 ? v_fn.cljs$core$IFn$_invoke$arity$1(v) : v_fn.call(null,v))))].join('');
});})(G__17831,G__17831__$1,v_fn,map__17829,map__17829__$1,edn_vals_QMARK_))
,G__17831__$1));
if((G__17831__$2 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",G__17831__$2);
}
});

urlkit.core.serialize_query.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
urlkit.core.serialize_query.cljs$lang$applyTo = (function (seq17826){
var G__17827 = cljs.core.first(seq17826);
var seq17826__$1 = cljs.core.next(seq17826);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17827,seq17826__$1);
});

urlkit.core.parse_url = (function urlkit$core$parse_url(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17844 = arguments.length;
var i__4731__auto___17845 = (0);
while(true){
if((i__4731__auto___17845 < len__4730__auto___17844)){
args__4736__auto__.push((arguments[i__4731__auto___17845]));

var G__17846 = (i__4731__auto___17845 + (1));
i__4731__auto___17845 = G__17846;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return urlkit.core.parse_url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

urlkit.core.parse_url.cljs$core$IFn$_invoke$arity$variadic = (function (url_str,p__17841){
var map__17842 = p__17841;
var map__17842__$1 = (((((!((map__17842 == null))))?(((((map__17842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17842):map__17842);
var opts = map__17842__$1;
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17842__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_);
var url_obj = urlkit.core.url_object_ctor(url_str);
return urlkit.core.map__GT_URL(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$protocol,url_obj.getScheme(),cljs.core.cst$kw$domain,url_obj.getDomain(),cljs.core.cst$kw$port,url_obj.getPort(),cljs.core.cst$kw$path,url_obj.getPath(),cljs.core.cst$kw$query,(function (){var q = url_obj.getQuery();
if(clojure.string.blank_QMARK_(q)){
return null;
} else {
return urlkit.core.parse_query.cljs$core$IFn$_invoke$arity$variadic(q,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,keywordize_keys_QMARK_], 0));
}
})(),cljs.core.cst$kw$fragment,url_obj.getFragment()], null));
});

urlkit.core.parse_url.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
urlkit.core.parse_url.cljs$lang$applyTo = (function (seq17839){
var G__17840 = cljs.core.first(seq17839);
var seq17839__$1 = cljs.core.next(seq17839);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17840,seq17839__$1);
});

urlkit.core.serialize_url = (function urlkit$core$serialize_url(url_rec){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(url_rec)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$domain.cljs$core$IFn$_invoke$arity$1(url_rec)),(function (){var p = cljs.core.cst$kw$port.cljs$core$IFn$_invoke$arity$1(url_rec);
if((p > (0))){
return [":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(url_rec)),(function (){var G__17849 = url_rec;
var G__17849__$1 = (((G__17849 == null))?null:cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(G__17849));
var G__17849__$2 = (((G__17849__$1 == null))?null:urlkit.core.serialize_query(G__17849__$1));
if((G__17849__$2 == null)){
return null;
} else {
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17849__$2)].join('');
}
})(),(function (){var G__17850 = url_rec;
var G__17850__$1 = (((G__17850 == null))?null:cljs.core.cst$kw$fragment.cljs$core$IFn$_invoke$arity$1(G__17850));
if((G__17850__$1 == null)){
return null;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17850__$1)].join('');
}
})()].join('');
});
