define("dojo/promise/all",["../_base/array","../Deferred","../when"],function(e,r,n){"use strict";var t=e.some;return function(e){var i,l;e instanceof Array?l=e:e&&"object"==typeof e&&(i=e);var o,s=[];if(i){l=[];for(var a in i)Object.hasOwnProperty.call(i,a)&&(s.push(a),l.push(i[a]));o={}}else l&&(o=[]);if(!l||!l.length)return(new r).resolve(o);var u=new r;u.promise.always(function(){o=s=null});var f=l.length;return t(l,function(e,r){return i||s.push(r),n(e,function(e){u.isFulfilled()||(o[s[r]]=e,0===--f&&u.resolve(o))},u.reject),u.isFulfilled()}),u.promise}});