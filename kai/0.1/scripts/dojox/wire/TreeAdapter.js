define("dojox/wire/TreeAdapter",["dojo","dijit","dojox","dojo/require!dojox/wire/CompositeWire"],function(e,i,r){e.provide("dojox.wire.TreeAdapter"),e.require("dojox.wire.CompositeWire"),e.declare("dojox.wire.TreeAdapter",r.wire.CompositeWire,{_wireClass:"dojox.wire.TreeAdapter",constructor:function(e){this._initializeChildren(this.nodes)},_getValue:function(i){if(!i||!this.nodes)return i;var r=i;e.isArray(r)||(r=[r]);var t=[];for(var o in r)for(var n in this.nodes)t=t.concat(this._getNodes(r[o],this.nodes[n]));return t},_setValue:function(e,i){throw new Error("Unsupported API: "+this._wireClass+"._setValue")},_initializeChildren:function(e){if(e)for(var i in e){var t=e[i];t.node&&(t.node.parent=this,r.wire.isWire(t.node)||(t.node=r.wire.create(t.node))),t.title&&(t.title.parent=this,r.wire.isWire(t.title)||(t.title=r.wire.create(t.title))),t.children&&this._initializeChildren(t.children)}},_getNodes:function(i,r){var t=null;if(r.node){if(t=r.node.getValue(i),!t)return[];e.isArray(t)||(t=[t])}else t=[i];var o=[];for(var n in t){i=t[n];var d={};if(r.title?d.title=r.title.getValue(i):d.title=i,r.children){var a=[];for(var s in r.children)a=a.concat(this._getNodes(i,r.children[s]));a.length>0&&(d.children=a)}o.push(d)}return o}})});