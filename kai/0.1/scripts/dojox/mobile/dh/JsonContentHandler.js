define("dojox/mobile/dh/JsonContentHandler",["dojo/_base/kernel","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/json","dojo/dom-construct"],function(e,r,t,n,i,o,s){return t("dojox.mobile.dh.JsonContentHandler",null,{parse:function(e,t,a){var l,c=s.create("DIV");t.insertBefore(c,a),this._ws=[],this._req=[];var h=o.parse(e);return i.when(this._loadPrereqs(h),n.hitch(this,function(){return l=this._instantiate(h,c),l.style.visibility="hidden",r.forEach(this._ws,function(e){!e._started&&e.startup&&e.startup()}),this._ws=null,l.id}))},_loadPrereqs:function(t){var n=new i,o=this._collectRequires(t);return 0===o.length?!0:e.require?(r.forEach(o,function(r){e.require(r)}),!0):(o=r.map(o,function(e){return e.replace(/\./g,"/")}),require(o,function(){n.resolve(!0)}),n)},_collectRequires:function(e){var r=e["class"];for(var t in e)if("@"!=t.charAt(0)&&"children"!==t){var i=r||t.replace(/:.*/,"");if(this._req.push(i),i)for(var o=r?[e]:n.isArray(e[t])?e[t]:[e[t]],s=0;s<o.length;s++)if(r){if(o[s].children)for(var a=0;a<o[s].children.length;a++)this._collectRequires(o[s].children[a])}else this._collectRequires(o[s])}return this._req},_instantiate:function(e,r,t){var i,s=e["class"];for(var a in e)if("@"!=a.charAt(0)&&"children"!==a){var l=n.getObject(s||a.replace(/:.*/,""));if(l)for(var c=l.prototype,h=s?[e]:n.isArray(e[a])?e[a]:[e[a]],u=0;u<h.length;u++){var d={};for(var f in h[u])if("@"==f.charAt(0)){var _=h[u][f];f=f.substring(1);var v=typeof c[f];n.isArray(c[f])?d[f]=_.split(/\s*,\s*/):"string"===v?d[f]=_:"number"===v?d[f]=_-0:"boolean"===v?d[f]="false"!==_:"object"===v?d[f]=o.parse(_):"function"===v&&(d[f]=n.getObject(_,!1)||new Function(_))}if(i=new l(d,r),r&&this._ws.push(i),t&&i.placeAt(t.containerNode||t.domNode),s){if(h[u].children)for(var p=0;p<h[u].children.length;p++)this._instantiate(h[u].children[p],null,i)}else this._instantiate(h[u],null,i)}}return i&&i.domNode}})});