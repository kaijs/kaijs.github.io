define("dojox/widget/rotator/Slide",["dojo/_base/lang","dojo/_base/fx","dojo/dom-style"],function(e,t,o){function n(e,n){var r=n.node=n.next.node,i=n.rotatorBox,d=e%2,s=(d?i.w:i.h)*(2>e?-1:1);return o.set(r,{display:"",zIndex:(o.get(n.current.node,"zIndex")||1)+1}),n.properties||(n.properties={}),n.properties[d?"left":"top"]={start:s,end:0},t.animateProperty(n)}var r=0,i=1,d=2,s=3,u={slideDown:function(e){return n(r,e)},slideRight:function(e){return n(i,e)},slideUp:function(e){return n(d,e)},slideLeft:function(e){return n(s,e)}};return e.mixin(e.getObject("dojox.widget.rotator"),u),u});