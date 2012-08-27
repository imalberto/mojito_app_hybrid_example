YUI.add("dataschema-xml",function(d){var b=d.Lang,c={1:true,9:true,11:true},a;a={apply:function(g,h){var e=h,f={results:[],meta:{}};if(e&&c[e.nodeType]&&g){f=a._parseResults(g,e,f);f=a._parseMeta(g.metaFields,e,f);}else{f.error=new Error("XML schema parse failure");}return f;},_getLocationValue:function(m,j){var h=m.locator||m.key||m,g=j.ownerDocument||j,f,i,k=null;try{f=a._getXPathResult(h,j,g);while((i=f.iterateNext())){k=i.textContent||i.value||i.text||i.innerHTML||null;}return d.DataSchema.Base.parse.call(this,k,m);}catch(l){}return null;},_getXPathResult:function(n,g,t){if(!b.isUndefined(t.evaluate)){return t.evaluate(n,g,t.createNSResolver(g.ownerDocument?g.ownerDocument.documentElement:g.documentElement),0,null);}else{var q=[],s=n.split(/\b\/\b/),k=0,j=s.length,p,f,h,r;try{t.setProperty("SelectionLanguage","XPath");q=g.selectNodes(n);}catch(o){for(;k<j&&g;k++){p=s[k];if((p.indexOf("[")>-1)&&(p.indexOf("]")>-1)){f=p.slice(p.indexOf("[")+1,p.indexOf("]"));f--;g=g.children[f];r=true;}else{if(p.indexOf("@")>-1){f=p.substr(p.indexOf("@"));g=f?g.getAttribute(f.replace("@","")):g;}else{if(-1<p.indexOf("//")){f=g.getElementsByTagName(p.substr(2));g=f.length?f[f.length-1]:null;}else{if(j!=k+1){for(h=g.childNodes.length-1;0<=h;h-=1){if(p===g.childNodes[h].tagName){g=g.childNodes[h];h=-1;}}}}}}}if(g){if(b.isString(g)){q[0]={value:g};}else{if(r){q[0]={value:g.innerHTML};}else{q=d.Array(g.childNodes,0,true);}}}}return{index:0,iterateNext:function(){if(this.index>=this.values.length){return undefined;}var e=this.values[this.index];this.index+=1;return e;},values:q};}},_parseField:function(i,e,h){var g=i.key||i,f;if(i.schema){f={results:[],meta:{}};f=a._parseResults(i.schema,h,f);e[g]=f.results;}else{e[g]=a._getLocationValue(i,h);}},_parseMeta:function(i,h,g){if(b.isObject(i)){var f,e=h.ownerDocument||h;for(f in i){if(i.hasOwnProperty(f)){g.meta[f]=a._getLocationValue(i[f],e);}}}return g;},_parseResult:function(f,h){var e={},g;for(g=f.length-1;0<=g;g--){a._parseField(f[g],e,h);}return e;},_parseResults:function(h,e,j){if(h.resultListLocator&&b.isArray(h.resultFields)){var n=e.ownerDocument||e,m=h.resultFields,l=[],f,g,k=0;if(h.resultListLocator.match(/^[:\-\w]+$/)){g=e.getElementsByTagName(h.resultListLocator);for(k=g.length-1;k>=0;--k){l[k]=a._parseResult(m,g[k]);}}else{g=a._getXPathResult(h.resultListLocator,e,n);while((f=g.iterateNext())){l[k]=a._parseResult(m,f);k+=1;}}if(l.length){j.results=l;}else{j.error=new Error("XML schema result nodes retrieval failure");}}return j;}};d.DataSchema.XML=d.mix(a,d.DataSchema.Base);},"@VERSION@",{requires:["dataschema-base"]});