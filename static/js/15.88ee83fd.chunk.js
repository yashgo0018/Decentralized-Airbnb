(this["webpackJsonpairbnb-clone"]=this["webpackJsonpairbnb-clone"]||[]).push([[15],{1340:function(n,r){},1514:function(n,r,t){"use strict";t.r(r),function(n){t.d(r,"getED25519Key",(function(){return i}));var a=t(97),e=t(1375),c=t.n(e).a.lowlevel;function i(r){var t;t="string"===typeof r?n.from(r,"hex"):r;var e=new Uint8Array(64),i=[c.gf(),c.gf(),c.gf(),c.gf()],o=new Uint8Array([].concat(Object(a.a)(new Uint8Array(t)),Object(a.a)(new Uint8Array(32)))),f=new Uint8Array(32);c.crypto_hash(e,o,32),e[0]&=248,e[31]&=127,e[31]|=64,c.scalarbase(i,e),c.pack(f,i);for(var s=0;s<32;s+=1)o[s+32]=f[s];return{sk:n.from(o),pk:n.from(f)}}}.call(this,t(21).Buffer)}}]);
//# sourceMappingURL=15.88ee83fd.chunk.js.map