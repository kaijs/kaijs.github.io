define("dojo/store/util/SimpleQueryEngine",["../../_base/array"],function(t){return function(r,e){function n(n){var i=t.filter(n,r),u=e&&e.sort;if(u&&i.sort("function"==typeof u?u:function(t,r){for(var e,n=0;e=u[n];n++){var i=t[e.attribute],o=r[e.attribute];if(i=null!=i?i.valueOf():i,o=null!=o?o.valueOf():o,i!=o)return!!e.descending==(null==i||i>o)?-1:1}return 0}),e&&(e.start||e.count)){var o=i.length;i=i.slice(e.start||0,(e.start||0)+(e.count||1/0)),i.total=o}return i}switch(typeof r){default:throw new Error("Can not query with a "+typeof r);case"object":case"undefined":var i=r;r=function(t){for(var r in i){var e=i[r];if(e&&e.test){if(!e.test(t[r],t))return!1}else if(e!=t[r])return!1}return!0};break;case"string":if(!this[r])throw new Error("No filter function "+r+" was found in store");r=this[r];case"function":}return n.matches=r,n}});