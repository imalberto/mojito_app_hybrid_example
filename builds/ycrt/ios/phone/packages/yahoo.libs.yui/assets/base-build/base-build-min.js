YUI.add("base-build",function(g){var c=g.Base,a=g.Lang,b="initializer",e="destructor",f,d=function(j,i,h){if(h[j]){i[j]=(i[j]||[]).concat(h[j]);}};c._build=function(h,o,t,x,w,q){var y=c._build,j=y._ctor(o,q),m=y._cfg(o,q,t),v=y._mixCust,k=j._yuibuild.dynamic,p,n,u,z,s,r;for(p=0,n=t.length;p<n;p++){u=t[p];z=u.prototype;s=z[b];r=z[e];delete z[b];delete z[e];g.mix(j,u,true,null,1);v(j,u,m);if(s){z[b]=s;}if(r){z[e]=r;}j._yuibuild.exts.push(u);}if(x){g.mix(j.prototype,x,true);}if(w){g.mix(j,y._clean(w,m),true);v(j,w,m);}j.prototype.hasImpl=y._impl;if(k){j.NAME=h;j.prototype.constructor=j;}return j;};f=c._build;g.mix(f,{_mixCust:function(h,t,p){var o,j,q,k,m,n;if(p){o=p.aggregates;j=p.custom;q=p.statics;}if(q){g.mix(h,t,true,q);}if(o){for(n=0,m=o.length;n<m;n++){k=o[n];if(!h.hasOwnProperty(k)&&t.hasOwnProperty(k)){h[k]=a.isArray(t[k])?[]:{};}g.aggregate(h,t,true,[k]);}}if(j){for(n in j){if(j.hasOwnProperty(n)){j[n](n,h,t);}}}},_tmpl:function(h){function i(){i.superclass.constructor.apply(this,arguments);}g.extend(i,h);return i;},_impl:function(n){var q=this._getClasses(),p,k,h,o,r,m;for(p=0,k=q.length;p<k;p++){h=q[p];if(h._yuibuild){o=h._yuibuild.exts;r=o.length;for(m=0;m<r;m++){if(o[m]===n){return true;}}}}return false;},_ctor:function(h,i){var k=(i&&false===i.dynamic)?false:true,l=(k)?f._tmpl(h):h,j=l._yuibuild;if(!j){j=l._yuibuild={};}j.id=j.id||null;j.exts=j.exts||[];j.dynamic=k;return l;},_cfg:function(m,q,n){var k=[],p={},v=[],h,t=(q&&q.aggregates),u=(q&&q.custom),r=(q&&q.statics),s=m,o,j;while(s&&s.prototype){h=s._buildCfg;if(h){if(h.aggregates){k=k.concat(h.aggregates);}if(h.custom){g.mix(p,h.custom,true);}if(h.statics){v=v.concat(h.statics);}}s=s.superclass?s.superclass.constructor:null;}if(n){for(o=0,j=n.length;o<j;o++){s=n[o];h=s._buildCfg;if(h){if(h.aggregates){k=k.concat(h.aggregates);}if(h.custom){g.mix(p,h.custom,true);}if(h.statics){v=v.concat(h.statics);}}}}if(t){k=k.concat(t);}if(u){g.mix(p,q.cfgBuild,true);}if(r){v=v.concat(r);}return{aggregates:k,custom:p,statics:v};},_clean:function(q,j){var p,k,h,n=g.merge(q),o=j.aggregates,m=j.custom;for(p in m){if(n.hasOwnProperty(p)){delete n[p];}}for(k=0,h=o.length;k<h;k++){p=o[k];if(n.hasOwnProperty(p)){delete n[p];}}return n;}});c.build=function(j,h,k,i){return f(j,h,k,null,null,i);};c.create=function(h,k,j,i,l){return f(h,k,j,i,l);};c.mix=function(h,i){return f(null,h,i,null,null,{dynamic:false});};c._buildCfg={custom:{ATTRS:function(m,k,i){k.ATTRS=k.ATTRS||{};if(i.ATTRS){var j=i.ATTRS,l=k.ATTRS,h;for(h in j){if(j.hasOwnProperty(h)){l[h]=l[h]||{};g.mix(l[h],j[h],true);}}}},_NON_ATTRS_CFG:d},aggregates:["_PLUG","_UNPLUG"]};},"@VERSION@",{requires:["base-base"]});
