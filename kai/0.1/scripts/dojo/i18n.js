define("dojo/i18n",["./_base/kernel","require","./has","./_base/array","./_base/config","./_base/lang","./_base/xhr","./json","module"],function(n,e,o,r,i,t,a,c,l){o.add("dojo-preload-i18n-Api",1);var s=n.i18n={},u=/(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/,f=function(n,e,o,r){for(var i=[o+r],t=e.split("-"),a="",c=0;c<t.length;c++)a+=(a?"-":"")+t[c],(!n||n[a])&&(i.push(o+a+"/"+r),i.specificity=a);return i},d={},p=function(e,o,r){return r=r?r.toLowerCase():n.locale,e=e.replace(/\./g,"/"),o=o.replace(/\./g,"/"),/root/i.test(r)?e+"/nls/"+o:e+"/nls/"+r+"/"+o},_=n.getL10nName=function(n,e,o){return n=l.id+"!"+p(n,e,o)},h=function(n,e,o,r,i,a){n([e],function(c){var l=t.clone(c.root||c.ROOT),s=f(!c._v1x&&c,i,o,r);n(s,function(){for(var n=1;n<s.length;n++)l=t.mixin(t.clone(l),arguments[n]);var o=e+"/"+i;d[o]=l,l.$locale=s.specificity,a()})})},v=function(n,e){return/^\./.test(n)?e(n):n},g=function(n){var e=i.extraLocale||[];return e=t.isArray(e)?e:[e],e.push(n),e},m=function(e,i,a){if(o("dojo-preload-i18n-Api")){var l=e.split("*"),s="preload"==l[1];if(s&&(d[e]||(d[e]=1,z(l[2],c.parse(l[3]),1,i)),a(1)),s||O(e,i,a))return}var f=u.exec(e),p=f[1]+"/",_=f[5]||f[4],v=p+_,m=f[5]&&f[4],x=m||n.locale||"",y=v+"/"+x,L=m?[x]:g(x),b=L.length,j=function(){--b||a(t.delegate(d[y]))};r.forEach(L,function(n){var e=v+"/"+n;o("dojo-preload-i18n-Api")&&A(e),d[e]?j():h(i,v,p,_,n,j)})};if(o("dojo-unit-tests"))var x=s.unitTests=[];if(o("dojo-preload-i18n-Api"),!0)var y=s.normalizeLocale=function(e){var o=e?e.toLowerCase():n.locale;return"root"==o?"ROOT":o},L=function(n,e){return!0},b=0,j=[],z=s._preloadLocalizations=function(o,i,a,c){function l(n,e){L(n,c)||a?c([n],e):k([n],e,c)}function s(n,e){for(var o=n.split("-");o.length;){if(e(o.join("-")))return;o.pop()}e("ROOT")}function u(){b++}function f(){for(--b;!b&&j.length;)m.apply(null,j.shift())}function p(n,e,o,r){return r.toAbsMid(n+e+"/"+o)}function _(n){n=y(n),s(n,function(a){if(r.indexOf(i,a)>=0){var _=o.replace(/\./g,"/")+"_"+a;return u(),l(_,function(o){function r(o,r,i,a){var l=[],_=[];s(n,function(n){a[n]&&(l.push(e.toAbsMid(o+n+"/"+r)),_.push(p(o,r,n,e)))}),l.length?(u(),c(l,function(){for(var a=0;a<l.length;a++)i=t.mixin(t.clone(i),arguments[a]),d[_[a]]=i;d[p(o,r,n,e)]=t.clone(i),f()})):d[p(o,r,n,e)]=i}for(var i in o){var l,_,h=o[i],v=i.match(/(.+)\/([^\/]+)$/);if(v){l=v[2],_=v[1]+"/",h._localized=h._localized||{};var g;if("ROOT"===a){var m=g=h._localized;delete h._localized,m.root=h,d[e.toAbsMid(i)]=m}else g=h._localized,d[p(_,l,a,e)]=h;a!==n&&r(_,l,h,g)}}f()}),!0}return!1})}c=c||e,_(),r.forEach(n.config.extraLocale,_)},O=function(n,e,o){return b&&j.push([n,e,o]),b},A=function(){};var M={},T=new Function("__bundle","__checkForLegacyModules","__mid","__amdValue","var define = function(mid, factory){define.called = 1; __amdValue.result = factory || mid;},	   require = function(){define.called = 1;};try{define.called = 0;eval(__bundle);if(define.called==1)return __amdValue;if((__checkForLegacyModules = __checkForLegacyModules(__mid)))return __checkForLegacyModules;}catch(e){}try{return eval('('+__bundle+')');}catch(e){return e;}"),k=function(n,e,o){var i=[];r.forEach(n,function(n){function e(e){var o=T(e,A,n,M);o===M?i.push(d[r]=M.result):(o instanceof Error&&(o={}),i.push(d[r]=/nls\/[^\/]+\/[^\/]+$/.test(r)?o:{root:o,_v1x:1}))}var r=o.toUrl(n+".js");if(d[r])i.push(d[r]);else{var t=o.syncLoadNls(n);if(t)i.push(t);else if(a)a.get({url:r,sync:!0,load:e,error:function(){i.push(d[r]={})}});else try{o.getText(r,!0,e)}catch(c){i.push(d[r]={})}}}),e&&e.apply(null,i)};return A=function(e){for(var o,r=e.split("/"),i=n.global[r[0]],t=1;i&&t<r.length-1;i=i[r[t++]]);return i&&(o=i[r[t]],o||(o=i[r[t].replace(/-/g,"_")]),o&&(d[e]=o)),o},s.getLocalization=function(n,o,r){var i,t=p(n,o,r);return m(t,L(t,e)?e:function(n,o){k(n,o,e)},function(n){i=n}),i},o("dojo-unit-tests")&&x.push(function(n){n.register("tests.i18n.unit",function(n){var e;e=T("{prop:1}",A,"nonsense",M),n.is({prop:1},e),n.is(void 0,e[1]),e=T("({prop:1})",A,"nonsense",M),n.is({prop:1},e),n.is(void 0,e[1]),e=T("{'prop-x':1}",A,"nonsense",M),n.is({"prop-x":1},e),n.is(void 0,e[1]),e=T("({'prop-x':1})",A,"nonsense",M),n.is({"prop-x":1},e),n.is(void 0,e[1]),e=T("define({'prop-x':1})",A,"nonsense",M),n.is(M,e),n.is({"prop-x":1},M.result),e=T("define('some/module', {'prop-x':1})",A,"nonsense",M),n.is(M,e),n.is({"prop-x":1},M.result),e=T("this is total nonsense and should throw an error",A,"nonsense",M),n.is(e instanceof Error,!0)})}),t.mixin(s,{dynamic:!0,normalize:v,load:m,cache:d,getL10nName:_})});