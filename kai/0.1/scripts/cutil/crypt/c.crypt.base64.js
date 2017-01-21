/*
 * $Id: base64.js,v 2.12 2013/05/06 07:54:20 dankogai Exp dankogai $
 *
 *  Licensed under the MIT license.
 *    http://opensource.org/licenses/mit-license
 *
 *  References:
 *    https://github.com/leewind/js-base64
 *    http://en.wikipedia.org/wiki/Base64
 */

define("cutil/crypt/c.crypt.base64",[],function(){"use strict";var t,e={},r=e.Base64,n="2.1.4";"undefined"!=typeof module&&module.exports&&(t=require("buffer").Buffer);var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=function(t){for(var e={},r=0,n=t.length;n>r;r++)e[t.charAt(r)]=r;return e}(o),u=String.fromCharCode,a=function(t){var e="";return t.length<2?(e=t.charCodeAt(0),128>e?t:2048>e?u(192|e>>>6)+u(128|63&e):u(224|e>>>12&15)+u(128|e>>>6&63)+u(128|63&e)):(e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320),u(240|e>>>18&7)+u(128|e>>>12&63)+u(128|e>>>6&63)+u(128|63&e))},i=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,f=function(t){return t.replace(i,a)},h=function(t){var e=[0,2,1][t.length%3],r=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0),n=[o.charAt(r>>>18),o.charAt(r>>>12&63),e>=2?"=":o.charAt(r>>>6&63),e>=1?"=":o.charAt(63&r)];return n.join("")},d=e.btoa?function(t){return e.btoa(t)}:function(t){return t.replace(/[\s\S]{1,3}/g,h)},g=t?function(e){return new t(e).toString("base64")}:function(t){return d(f(t))},l=function(t,e){return e?g(t).replace(/[+\/]/g,function(t){return"+"==t?"-":"_"}).replace(/=/g,""):g(t)},A=function(t){return l(t,!0)},p=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),s=function(t){switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),r=e-65536;return u((r>>>10)+55296)+u((1023&r)+56320);case 3:return u((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return u((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},b=function(t){return t.replace(p,s)},C=function(t){var e=t.length,r=e%4,n=(e>0?c[t.charAt(0)]<<18:0)|(e>1?c[t.charAt(1)]<<12:0)|(e>2?c[t.charAt(2)]<<6:0)|(e>3?c[t.charAt(3)]:0),o=[u(n>>>16),u(n>>>8&255),u(255&n)];return o.length-=[0,0,2,1][r],o.join("")},B=e.atob?function(t){return e.atob(t)}:function(t){return t.replace(/[\s\S]{1,4}/g,C)},y=t?function(e){return new t(e,"base64").toString()}:function(t){return b(B(t))},v=function(t){return y(t.replace(/[-_]/g,function(t){return"-"==t?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))},S=function(){var t=e.Base64;return e.Base64=r,t};if(e.Base64={VERSION:n,atob:B,btoa:d,fromBase64:v,toBase64:l,utob:f,encode:l,encodeURI:A,btou:b,decode:v,noConflict:S},"function"==typeof Object.defineProperty){var j=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}};e.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",j(function(){return v(this)})),Object.defineProperty(String.prototype,"toBase64",j(function(t){return l(this,t)})),Object.defineProperty(String.prototype,"toBase64URI",j(function(){return l(this,!0)}))}}return e});