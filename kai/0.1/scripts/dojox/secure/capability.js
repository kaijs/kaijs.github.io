define("dojox/secure/capability",["dojo","dijit","dojox"],function(e,r,t){e.provide("dojox.secure.capability"),t.secure.badProps=/^__|^(apply|call|callee|caller|constructor|eval|prototype|this|unwatch|valueOf|watch)$|__$/,t.secure.capability={keywords:["break","case","catch","const","continue","debugger","default","delete","do","else","enum","false","finally","for","function","if","in","instanceof","new","null","yield","return","switch","throw","true","try","typeof","var","void","while"],validate:function(e,r,t){function a(e,r){var t={};return e.replace(/#\d+/g,function(e){var r=i[e.substring(1)];for(var a in r){if(a==l)throw a;"this"==a&&r[":method"]&&1==r["this"]&&(a=l),":method"!=a&&(t[a]=2)}}),e.replace(/(\W|^)([a-z_\$A-Z][\w_\$]*)/g,function(e,r,a){if("_"==a.charAt(0))throw new Error("Names may not start with _");t[a]=1}),t}function n(e,r,t,n,o,c){function s(e,r,t,a){a.replace(/,?([a-z\$A-Z][_\w\$]*)/g,function(e,r){if("Class"==r)throw new Error("Class is reserved");delete u[r]})}return c.replace(/(^|,)0:\s*function#(\d+)/g,function(e,r,t){var a=i[t];a[":method"]=1}),c=c.replace(/(^|[^_\w\$])Class\s*\(\s*([_\w\$]+\s*,\s*)*#(\d+)/g,function(e,r,t,a){var n=i[a];return delete n[l],(r||"")+(t||"")+"#"+a}),u=a(c,r),r&&s(e,t,t,o),c.replace(/(\W|^)(var) ([ \t,_\w\$]+)/g,s),(t||"")+(n||"")+"#"+(i.push(u)-1)}for(var o=this.keywords,c=0;c<o.length;c++)t[o[c]]=!0;var l="|this| keyword in object literal without a Class call",i=[];if(e.match(/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\uff00-\uffff]/))throw new Error("Illegal unicode characters detected");if(e.match(/\/\*@cc_on/))throw new Error("Conditional compilation token is not allowed");e=e.replace(/\\["'\\\/bfnrtu]/g,"@").replace(/\/\/.*|\/\*[\w\W]*?\*\/|("[^"]*")|('[^']*')/g,function(e){return e.match(/^\/\/|^\/\*/)?" ":"0"}).replace(/\.\s*([a-z\$_A-Z][\w\$_]*)|([;,{])\s*([a-z\$_A-Z][\w\$_]*\s*):/g,function(e,r,t,a){if(r=r||a,/^__|^(apply|call|callee|caller|constructor|eval|prototype|this|unwatch|valueOf|watch)$|__$/.test(r))throw new Error("Illegal property name "+r);return t&&t+"0:"||"~"}),e.replace(/([^\[][\]\}]\s*=)|((\Wreturn|\S)\s*\[\s*\+?)|([^=!][=!]=[^=])/g,function(e){if(!e.match(/((\Wreturn|[=\&\|\:\?\,])\s*\[)|\[\s*\+$/))throw new Error("Illegal operator "+e.substring(1))}),e=e.replace(new RegExp("("+r.join("|")+")[\\s~]*\\(","g"),function(e){return"new("});var s,u;do s=e.replace(/((function|catch)(\s+[_\w\$]+)?\s*\(([^\)]*)\)\s*)?{([^{}]*)}/g,n);while(s!=e&&(e=s));n(0,0,0,0,0,e);for(c in u)if(!(c in t))throw new Error("Illegal reference to "+c)}}});