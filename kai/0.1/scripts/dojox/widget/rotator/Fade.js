define("dojox/widget/rotator/Fade",["dojo/_base/lang","dojo/_base/fx","dojo/dom-style","dojo/fx"],function(o,e,n,t){function d(d,r){var a=d.next.node;return n.set(a,{display:"",opacity:0}),d.node=d.current.node,t[r]([e.fadeOut(d),e.fadeIn(o.mixin(d,{node:a}))])}var r={fade:function(o){return d(o,"chain")},crossFade:function(o){return d(o,"combine")}};return o.mixin(o.getObject("dojox.widget.rotator"),r),r});