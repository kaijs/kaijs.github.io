define("dojo/_base/kernel",["../has","./config","require","module"],function(o,e,n,r){var a,i,t,l=function(){return this}(),c={},s={},f={config:e,global:l,dijit:c,dojox:s},d={dojo:["dojo",f],dijit:["dijit",c],dojox:["dojox",s]},u=n.map&&n.map[r.id.match(/[^\/]+/)[0]];for(i in u)d[i]?d[i][0]=u[i]:d[i]=[u[i],{}];for(i in d)t=d[i],t[1]._scopeName=t[0],e.noGlobals||(l[t[0]]=t[1]);f.scopeMap=d,f.baseUrl=f.config.baseUrl=n.baseUrl,f.isAsync=n.async,f.locale=e.locale;var g="$Rev: f4fef70 $".match(/[0-9a-f]{7,}/);f.version={major:1,minor:10,patch:4,flag:"",revision:g?g[0]:NaN,toString:function(){var o=f.version;return o.major+"."+o.minor+"."+o.patch+o.flag+" ("+o.revision+")"}},Function("d","d.eval = function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}")(f),f.exit=function(){},"undefined"!=typeof console||(console={});var m,p=["assert","count","debug","dir","dirxml","error","group","groupEnd","info","profile","profileEnd","time","timeEnd","trace","warn","log"];for(a=0;m=p[a++];)console[m]||!function(){var o=m+"";console[o]="log"in console?function(){var e=Array.prototype.slice.call(arguments);e.unshift(o+":")}:function(){},console[o]._fake=!0}();f.deprecated=f.experimental=function(){};return f._hasResource={},f});