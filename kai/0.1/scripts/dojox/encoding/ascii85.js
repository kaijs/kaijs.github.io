define("dojox/encoding/ascii85",["dojo/_base/lang"],function(o){var r=o.getObject("dojox.encoding.ascii85",!0),e=function(o,r,e){var n,f,i,t=[0,0,0,0,0];for(n=0;r>n;n+=4){if(i=256*(256*(256*o[n]+o[n+1])+o[n+2])+o[n+3])for(f=0;5>f;t[f++]=i%85+33,i=Math.floor(i/85));else e.push("z");e.push(String.fromCharCode(t[4],t[3],t[2],t[1],t[0]))}};return r.encode=function(o){var r=[],n=o.length%4,f=o.length-n;if(e(o,f,r),n){for(var i=o.slice(f);i.length<4;)i.push(0);e(i,4,r);var t=r.pop();"z"==t&&(t="!!!!!"),r.push(t.substr(0,n+1))}return r.join("")},r.decode=function(o){var r,e,n,f,i,t,a=o.length,c=[],h=[0,0,0,0,0];for(r=0;a>r;++r)if("z"!=o.charAt(r)){for(e=0;5>e;++e)h[e]=o.charCodeAt(r+e)-33;if(t=a-r,5>t){for(e=t;4>e;h[++e]=0);h[t]=85}for(n=85*(85*(85*(85*h[0]+h[1])+h[2])+h[3])+h[4],f=255&n,n>>>=8,i=255&n,n>>>=8,c.push(n>>>8,255&n,i,f),e=t;5>e;++e,c.pop());r+=4}else c.push(0,0,0,0);return c},r});