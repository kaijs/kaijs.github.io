define("dojox/gfx/svgext",["dojo/dom","dojo/_base/array","dojo/_base/window","./_base","./svg"],function(e,t,i,r,n){function s(e,i){var r=i.ownerDocument.createElementNS(n.xmlns.svg,e.tag);i.appendChild(r);for(var o in e)o in a||r.setAttribute(o,e[o]);return e.children&&t.forEach(e.children,function(e){s(e,r)}),r}var o=r.svgext={},a={primitives:null,tag:null,children:null};return n.Shape.extend({addRenderingOption:function(e,t){return this.rawNode.setAttribute(e,t),this},setFilter:function(i){if(!i)return this.rawNode.removeAttribute("filter"),this.filter=null,this;this.filter=i,i.id=i.id||r._base._getUniqueId();var o=e.byId(i.id);if(!o){o=this.rawNode.ownerDocument.createElementNS(n.xmlns.svg,"filter"),o.setAttribute("filterUnits","userSpaceOnUse");for(var d in i)d in a||o.setAttribute(d,i[d]);t.forEach(i.primitives,function(e){s(e,o)});var u=this._getParentSurface();if(u){var l=u.defNode;l.appendChild(o)}}return this.rawNode.setAttribute("filter","url(#"+i.id+")"),this},getFilter:function(){return this.filter}}),o});