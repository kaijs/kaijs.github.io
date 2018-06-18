define("dojox/lang/docs",["dojo","dijit","dojox"],function(r,n,t){r.provide("dojox.lang.docs"),function(){function n(r){}var e={},o=[],a=t.lang.docs._loadedDocs={},c=function(r,n){e[n]=r},s=function(n){var t,e,o=n.type||"",a=!1,i=!1;return o=o.replace(/\?/,function(){return a=!0,""}),o=o.replace(/\[\]/,function(){return i=!0,""}),o.match(/HTML/)?o="string":"String"==o||"Number"==o||"Boolean"==o||"Object"==o||"Array"==o||"Integer"==o||"Function"==o?o=o.toLowerCase():"bool"==o?o="boolean":o?(t=r.getObject(o)||{},e=!0):t={},t=t||{type:o},i&&(t={items:t,type:"array"},e=!1),e||(a&&(t.optional=!0),/const/.test(n.tags)&&(t.readonly=!0)),t},u=function(n,t){var e=a[t];if(e){if(n.description=e.description,n.properties={},n.methods={},e.properties)for(var o=e.properties,i=0,c=o.length;c>i;i++)if("prototype"==o[i].scope){var u=n.properties[o[i].name]=s(o[i]);u.description=o[i].summary}if(e.methods){var l=e.methods;for(i=0,c=l.length;c>i;i++)if(t=l[i].name,t&&"prototype"==l[i].scope){var p=n.methods[t]={};p.description=l[i].summary;var f=l[i].parameters;if(f){p.parameters=[];for(var d=0,m=f.length;m>d;d++){var v=f[d],h=p.parameters[d]=s(v);h.name=v.name,h.optional="optional"==v.usage}}var y=l[i]["return-types"];if(y&&y[0]){var g=s(y[0]);g.type&&(p.returns=g)}}}var b=e.superclass;b&&(n["extends"]=r.getObject(b))}},l=function(r){o.push(r)},p=r.declare;r.declare=function(r){var n=p.apply(this,arguments);return c(n,r),n},r.mixin(r.declare,p);var f,d=r.require;r.require=function(r){l(r);var n=d.apply(this,arguments);return n},t.lang.docs.init=function(t){function s(){r.require=d,o=null;try{r.xhrGet({sync:!t,url:r.baseUrl+"../util/docscripts/api.json",handleAs:"text"}).addCallbacks(function(r){a=new Function("return "+r)(),r=null,c=u;for(var n in e)c(e[n],n);e=null},n)}catch(i){n(i)}}if(f)return null;f=!0;var p=function(n,e){return r.xhrGet({sync:e||!t,url:r.baseUrl+"../util/docscripts/api/"+n+".json",handleAs:"text"}).addCallback(function(r){r=new Function("return "+r)();for(var n in r)a[n]||(a[n]=r[n])})};try{var m=o.shift();p(m,!0).addCallbacks(function(){l=function(r){if(!a[r])try{p(r)}catch(n){a[r]={}}},r.forEach(o,function(r){l(r)}),o=null,c=u;for(i in e)c(e[i],i);e=null},s)}catch(v){s()}return null}}()});