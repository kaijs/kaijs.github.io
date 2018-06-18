define("dojox/charting/plot2d/common",["dojo/_base/lang","dojo/_base/array","dojo/_base/Color","dojox/gfx","dojox/lang/functional","../scaler/common"],function(a,n,t,m,i,r){var e=a.getObject("dojox.charting.plot2d.common",!0);return a.mixin(e,{doIfLoaded:r.doIfLoaded,makeStroke:function(a){return a?(("string"==typeof a||a instanceof t)&&(a={color:a}),m.makeParameters(m.defaultStroke,a)):a},augmentColor:function(a,n){var m=new t(a),i=new t(n);return i.a=m.a,i},augmentStroke:function(a,n){var t=e.makeStroke(a);return t&&(t.color=e.augmentColor(t.color,n)),t},augmentFill:function(a,n){new t(n);return"string"==typeof a||a instanceof t?e.augmentColor(a,n):a},defaultStats:{vmin:Number.POSITIVE_INFINITY,vmax:Number.NEGATIVE_INFINITY,hmin:Number.POSITIVE_INFINITY,hmax:Number.NEGATIVE_INFINITY},collectSimpleStats:function(t){for(var m=a.delegate(e.defaultStats),i=0;i<t.length;++i)for(var r=t[i],o=0;o<r.data.length;o++)if(null!==r.data[o]){if("number"==typeof r.data[o]){var x=m.vmin,h=m.vmax;n.forEach(r.data,function(a,n){if(null!==a){var t=n+1,i=a;isNaN(i)&&(i=0),m.hmin=Math.min(m.hmin,t),m.hmax=Math.max(m.hmax,t),m.vmin=Math.min(m.vmin,i),m.vmax=Math.max(m.vmax,i)}}),"ymin"in r&&(m.vmin=Math.min(x,r.ymin)),"ymax"in r&&(m.vmax=Math.max(h,r.ymax))}else{var u=m.hmin,f=m.hmax,x=m.vmin,h=m.vmax;"xmin"in r&&"xmax"in r&&"ymin"in r&&"ymax"in r||n.forEach(r.data,function(a,n){if(null!==a){var t="x"in a?a.x:n+1,i=a.y;isNaN(t)&&(t=0),isNaN(i)&&(i=0),m.hmin=Math.min(m.hmin,t),m.hmax=Math.max(m.hmax,t),m.vmin=Math.min(m.vmin,i),m.vmax=Math.max(m.vmax,i)}}),"xmin"in r&&(m.hmin=Math.min(u,r.xmin)),"xmax"in r&&(m.hmax=Math.max(f,r.xmax)),"ymin"in r&&(m.vmin=Math.min(x,r.ymin)),"ymax"in r&&(m.vmax=Math.max(h,r.ymax))}break}return m},calculateBarSize:function(a,n,t){t||(t=1);var m=n.gap,i=(a-2*m)/t;return"minBarSize"in n&&(i=Math.max(i,n.minBarSize)),"maxBarSize"in n&&(i=Math.min(i,n.maxBarSize)),i=Math.max(i,1),m=(a-i*t)/2,{size:i,gap:m}},collectStackedStats:function(n){var t=a.clone(e.defaultStats);if(n.length){t.hmin=Math.min(t.hmin,1),t.hmax=i.foldl(n,"seed, run -> Math.max(seed, run.data.length)",t.hmax);for(var m=0;m<t.hmax;++m){var r=n[0].data[m];r=r&&("number"==typeof r?r:r.y),isNaN(r)&&(r=0),t.vmin=Math.min(t.vmin,r);for(var o=1;o<n.length;++o){var x=n[o].data[m];x=x&&("number"==typeof x?x:x.y),isNaN(x)&&(x=0),r+=x}t.vmax=Math.max(t.vmax,r)}}return t},curve:function(a,t){var m=a.slice(0);"x"==t&&(m[m.length]=m[0]);var i=n.map(m,function(a,n){if(0==n)return"M"+a.x+","+a.y;if(!isNaN(t)){var i=a.x-m[n-1].x,r=m[n-1].y;return"C"+(a.x-(t-1)*(i/t))+","+r+" "+(a.x-i/t)+","+a.y+" "+a.x+","+a.y}if("X"==t||"x"==t||"S"==t){var e,o,x,h,u,f,l=m[n-1],v=m[n],y=1/6;1==n?(e="x"==t?m[m.length-2]:l,y=1/3):e=m[n-2],n==m.length-1?(o="x"==t?m[1]:v,y=1/3):o=m[n+1];var c=Math.sqrt((v.x-l.x)*(v.x-l.x)+(v.y-l.y)*(v.y-l.y)),d=Math.sqrt((v.x-e.x)*(v.x-e.x)+(v.y-e.y)*(v.y-e.y)),s=Math.sqrt((o.x-l.x)*(o.x-l.x)+(o.y-l.y)*(o.y-l.y)),g=d*y,N=s*y;g>c/2&&N>c/2?(g=c/2,N=c/2):g>c/2?(g=c/2,N=c/2*s/d):N>c/2&&(N=c/2,g=c/2*d/s),"S"==t&&(e==l&&(g=0),v==o&&(N=0)),x=l.x+g*(v.x-e.x)/d,h=l.y+g*(v.y-e.y)/d,u=v.x-N*(o.x-l.x)/s,f=v.y-N*(o.y-l.y)/s}return"C"+(x+","+h+" "+u+","+f+" "+v.x+","+v.y)});return i.join(" ")},getLabel:function(a,n,t){return r.doIfLoaded("dojo/number",function(m){return(n?m.format(a,{places:t}):m.format(a))||""},function(){return n?a.toFixed(t):a.toString()})}})});