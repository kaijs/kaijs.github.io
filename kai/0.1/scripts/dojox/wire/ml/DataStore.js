define("dojox/wire/ml/DataStore",["dojo","dijit","dojox","dojo/require!dijit/_Widget,dojox/wire/_base"],function(e,t,r){e.provide("dojox.wire.ml.DataStore"),e.require("dijit._Widget"),e.require("dojox.wire._base"),e.declare("dojox.wire.ml.DataStore",t._Widget,{storeClass:"",postCreate:function(){this.store=this._createStore()},_createStore:function(){if(!this.storeClass)return null;var e=r.wire._getClass(this.storeClass);if(!e)return null;for(var t={},o=this.domNode.attributes,i=0;i<o.length;i++){var s=o.item(i);s.specified&&!this[s.nodeName]&&(t[s.nodeName]=s.nodeValue)}return new e(t)},getFeatures:function(){return this.store.getFeatures()},fetch:function(e){return this.store.fetch(e)},save:function(e){this.store.save(e)},newItem:function(e){return this.store.newItem(e)},deleteItem:function(e){return this.store.deleteItem(e)},revert:function(){return this.store.revert()}})});