define("dojox/grid/util",["../main","dojo/_base/lang","dojo/dom"],function(e,n,t){var o=n.getObject("grid.util",!0,e);return o.na="...",o.rowIndexTag="gridRowIndex",o.gridViewTag="gridView",o.fire=function(e,n,t){var o=e&&n&&e[n];return o&&(t?o.apply(e,t):e[n]())},o.setStyleHeightPx=function(e,n){if(n>=0){var t=e.style,o=n+"px";e&&t.height!=o&&(t.height=o)}},o.mouseEvents=["mouseover","mouseout","mousedown","mouseup","click","dblclick","contextmenu"],o.keyEvents=["keyup","keydown","keypress"],o.funnelEvents=function(e,n,t,r){for(var i=r?r:o.mouseEvents.concat(o.keyEvents),u=0,a=i.length;a>u;u++)n.connect(e,"on"+i[u],t)},o.removeNode=function(e){return e=t.byId(e),e&&e.parentNode&&e.parentNode.removeChild(e),e},o.arrayCompare=function(e,n){for(var t=0,o=e.length;o>t;t++)if(e[t]!=n[t])return!1;return e.length==n.length},o.arrayInsert=function(e,n,t){e.length<=n?e[n]=t:e.splice(n,0,t)},o.arrayRemove=function(e,n){e.splice(n,1)},o.arraySwap=function(e,n,t){var o=e[n];e[n]=e[t],e[t]=o},o});