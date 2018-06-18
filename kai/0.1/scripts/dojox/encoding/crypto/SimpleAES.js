define("dojox/encoding/crypto/SimpleAES",["../base64","./_base"],function(r,n){function a(r,n){for(var a=4,v=n.length/a-1,i=[[],[],[],[]],u=0;4*a>u;u++)i[u%4][Math.floor(u/4)]=r[u];i=f(i,n,0,a);for(var c=1;v>c;c++)i=o(i,a),i=e(i,a),i=t(i,a),i=f(i,n,c,a);i=o(i,a),i=e(i,a),i=f(i,n,v,a);for(var A=new Array(4*a),u=0;4*a>u;u++)A[u]=i[u%4][Math.floor(u/4)];return A}function o(r,n){for(var a=0;4>a;a++)for(var o=0;n>o;o++)r[a][o]=l[r[a][o]];return r}function e(r,n){for(var a=new Array(4),o=1;4>o;o++){for(var e=0;4>e;e++)a[e]=r[o][(e+o)%n];for(var e=0;4>e;e++)r[o][e]=a[e]}return r}function t(r,n){for(var a=0;4>a;a++){for(var o=new Array(4),e=new Array(4),t=0;4>t;t++)o[t]=r[t][a],e[t]=128&r[t][a]?r[t][a]<<1^283:r[t][a]<<1;r[0][a]=e[0]^o[1]^e[1]^o[2]^o[3],r[1][a]=o[0]^e[1]^o[2]^e[2]^o[3],r[2][a]=o[0]^o[1]^e[2]^o[3]^e[3],r[3][a]=o[0]^e[0]^o[1]^o[2]^e[3]}return r}function f(r,n,a,o){for(var e=0;4>e;e++)for(var t=0;o>t;t++)r[e][t]^=n[4*a+t][e];return r}function v(r){for(var n=4,a=r.length/4,o=a+6,e=new Array(n*(o+1)),t=new Array(4),f=0;a>f;f++){var v=[r[4*f],r[4*f+1],r[4*f+2],r[4*f+3]];e[f]=v}for(var f=a;n*(o+1)>f;f++){e[f]=new Array(4);for(var c=0;4>c;c++)t[c]=e[f-1][c];if(f%a==0){t=i(u(t));for(var c=0;4>c;c++)t[c]^=y[f/a][c]}else a>6&&f%a==4&&(t=i(t));for(var c=0;4>c;c++)e[f][c]=e[f-a][c]^t[c]}return e}function i(r){for(var n=0;4>n;n++)r[n]=l[r[n]];return r}function u(r){r[4]=r[0];for(var n=0;4>n;n++)r[n]=r[n+1];return r}function c(r,n,o){if(128!=o&&192!=o&&256!=o)return"";for(var e=o/8,t=new Array(e),f=0;e>f;f++)t[f]=255&n.charCodeAt(f);var i=a(t,v(t));i=i.concat(i.slice(0,e-16));for(var u=16,c=new Array(u),A=(new Date).getTime(),f=0;4>f;f++)c[f]=A>>>8*f&255;for(var f=0;4>f;f++)c[f+4]=A/4294967296>>>8*f&255;for(var h=v(i),l=Math.ceil(r.length/u),y=new Array(l),w=0;l>w;w++){for(var g=0;4>g;g++)c[15-g]=w>>>8*g&255;for(var g=0;4>g;g++)c[15-g-4]=w/4294967296>>>8*g;for(var p=a(c,h),s=l-1>w?u:(r.length-1)%u+1,d="",f=0;s>f;f++){var S=r.charCodeAt(w*u+f),C=S^p[f];d+=(16>C?"0":"")+C.toString(16)}y[w]=d}for(var m="",f=0;8>f;f++)m+=(c[f]<16?"0":"")+c[f].toString(16);return m+" "+y.join(" ")}function A(r){var n=[];return r.replace(/(..)/g,function(r){n.push(parseInt(r,16))}),n}function h(r,n,o){if(128!=o&&192!=o&&256!=o)return"";for(var e=o/8,t=new Array(e),f=0;e>f;f++)t[f]=255&n.charCodeAt(f);var i=v(t),u=a(t,i);u=u.concat(u.slice(0,e-16));var c=v(u);r=r.split(" ");var h=16,l=new Array(h),y=r[0];l=A(y);for(var w=new Array(r.length-1),g=1;g<r.length;g++){for(var p=0;4>p;p++)l[15-p]=g-1>>>8*p&255;for(var p=0;4>p;p++)l[15-p-4]=g/4294967296-1>>>8*p&255;for(var s=a(l,c),d="",S=A(r[g]),f=0;f<S.length;f++){var C=(r[g].charCodeAt(f),S[f]^s[f]);d+=String.fromCharCode(C)}w[g-1]=d}return w.join("")}var l=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],y=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]];return n.SimpleAES=new function(){this.encrypt=function(r,n){return c(r,n,256)},this.decrypt=function(r,n){return h(r,n,256)}},n.SimpleAES});