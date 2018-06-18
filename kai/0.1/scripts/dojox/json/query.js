define("dojox/json/query",["dojo/_base/kernel","dojo/_base/lang","dojox","dojo/_base/array"],function(dojo,lang,dojox){return lang.getObject("json",!0,dojox),dojox.json._slice=function(e,r,t,n){var o=e.length,a=[];t=t||o,r=0>r?Math.max(0,r+o):Math.min(o,r),t=0>t?Math.max(0,t+o):Math.min(o,t);for(var u=r;t>u;u+=n)a.push(e[u]);return a},dojox.json._find=function(e,r){function t(e){r&&(r!==!0||e instanceof Array?e[r]&&n.push(e[r]):n.push(e));for(var o in e){var a=e[o];r?a&&"object"==typeof a&&t(a):n.push(a)}}var n=[];if(r instanceof Array){if(1==r.length)return e[r[0]];for(var o=0;o<r.length;o++)n.push(e[r[o]])}else t(e);return n},dojox.json._distinctFilter=function(e,r){for(var t=[],n={},o=0,a=e.length;a>o;++o){var u=e[o];r(u,o,e)&&("object"==typeof u&&u?u.__included||(u.__included=!0,t.push(u)):n[u+typeof u]||(n[u+typeof u]=!0,t.push(u)))}for(o=0,a=t.length;a>o;++o)t[o]&&delete t[o].__included;return t},dojox.json.query=function(query,obj){function call(e){prefix=e+"("+prefix}function makeRegex(e,r,t,n,o,a,u,s){return str[s].match(/[\*\?]/)||"~"==u?"/^"+str[s].substring(1,str[s].length-1).replace(/\\([btnfr\\"'])|([^\w\*\?])/g,"\\$1$2").replace(/([\*\?])/g,"[\\w\\W]$1")+("~"==u?"$/i":"$/")+".test("+r+")":e}var depth=0,str=[];query=query.replace(/"(\\.|[^"\\])*"|'(\\.|[^'\\])*'|[\[\]]/g,function(e){return depth+="["==e?1:"]"==e?-1:0,"]"==e&&depth>0?"`]":'"'==e.charAt(0)||"'"==e.charAt(0)?"`"+(str.push(e)-1):e});var prefix="";query.replace(/(\]|\)|push|pop|shift|splice|sort|reverse)\s*\(/,function(){throw new Error("Unsafe function call")}),query=query.replace(/([^<>=]=)([^=])/g,"$1=$2").replace(/@|(\.\s*)?[a-zA-Z\$_]+(\s*:)?/g,function(e){return"."==e.charAt(0)?e:"@"==e?"$obj":(e.match(/:|^(\$|Math|true|false|null)$/)?"":"$obj.")+e}).replace(/\.?\.?\[(`\]|[^\]])*\]|\?.*|\.\.([\w\$_]+)|\.\*/g,function(e,r,t){var n=e.match(/^\.?\.?(\[\s*\^?\?|\^?\?|\[\s*==)(.*?)\]?$/);if(n){var o="";return e.match(/^\./)&&(call("dojox.json._find"),o=",true)"),call(n[1].match(/\=/)?"dojo.map":n[1].match(/\^/)?"dojox.json._distinctFilter":"dojo.filter"),o+",function($obj){return "+n[2]+"})"}return(n=e.match(/^\[\s*([\/\\].*)\]/))?".concat().sort(function(a,b){"+n[1].replace(/\s*,?\s*([\/\\])\s*([^,\\\/]+)/g,function(e,r,t){return"var av= "+t.replace(/\$obj/,"a")+",bv= "+t.replace(/\$obj/,"b")+";if(av>bv||bv==null){return "+("/"==r?1:-1)+";}\nif(bv>av||av==null){return "+("/"==r?-1:1)+";}\n"})+"return 0;})":(n=e.match(/^\[(-?[0-9]*):(-?[0-9]*):?(-?[0-9]*)\]/),n?(call("dojox.json._slice"),","+(n[1]||0)+","+(n[2]||0)+","+(n[3]||1)+")"):e.match(/^\.\.|\.\*|\[\s*\*\s*\]|,/)?(call("dojox.json._find"),("."==e.charAt(1)?",'"+t+"'":e.match(/,/)?","+e:"")+")"):e)}).replace(/(\$obj\s*((\.\s*[\w_$]+\s*)|(\[\s*`([0-9]+)\s*`\]))*)(==|~)\s*`([0-9]+)/g,makeRegex).replace(/`([0-9]+)\s*(==|~)\s*(\$obj\s*((\.\s*[\w_$]+)|(\[\s*`([0-9]+)\s*`\]))*)/g,function(e,r,t,n,o,a,u,s){return makeRegex(e,n,o,a,u,s,t,r)}),query=prefix+("$"==query.charAt(0)?"":"$")+query.replace(/`([0-9]+|\])/g,function(e,r){return"]"==r?"]":str[r]});for(var executor=eval("1&&function($,$1,$2,$3,$4,$5,$6,$7,$8,$9){var $obj=$;return "+query+"}"),i=0;i<arguments.length-1;i++)arguments[i]=arguments[i+1];return obj?executor.apply(this,arguments):executor}});