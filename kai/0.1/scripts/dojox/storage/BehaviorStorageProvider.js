define("dojox/storage/BehaviorStorageProvider",["dojo","dijit","dojox","dojo/require!dojox/storage/Provider,dojox/storage/manager"],function(e,t,s){e.provide("dojox.storage.BehaviorStorageProvider"),e.require("dojox.storage.Provider"),e.require("dojox.storage.manager"),e.declare("dojox.storage.BehaviorStorageProvider",[s.storage.Provider],{store:null,storeName:"__dojox_BehaviorStorage",keys:[],initialize:function(){try{this.store=this._createStore(),this.store.load(this.storeName)}catch(e){throw new Error("Store is not available: "+e)}var t=this.get("keys","dojoxSystemNS");this.keys=t||[],this.initialized=!0,s.storage.manager.loaded()},isAvailable:function(){return e.isIE&&e.isIE>=5},_createStore:function(){var t=e.create("link",{id:this.storeName+"Node",style:{display:"none"}},e.query("head")[0]);return t.addBehavior("#default#userdata"),t},put:function(t,s,i,r){this._assertIsValidKey(t),r=r||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(r);var o=this.getFullKey(t,r);s=e.toJson(s),this.store.setAttribute(o,s),this.store.save(this.storeName);var a=this.store.getAttribute(o)===s;a&&(this._addKey(o),this.store.setAttribute("__dojoxSystemNS_keys",e.toJson(this.keys)),this.store.save(this.storeName)),i&&i(a?this.SUCCESS:this.FAILED,t,null,r)},get:function(t,s){return this._assertIsValidKey(t),s=s||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(s),t=this.getFullKey(t,s),e.fromJson(this.store.getAttribute(t))},getKeys:function(e){e=e||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(e),e="__"+e+"_";for(var t=[],s=0;s<this.keys.length;s++){var i=this.keys[s];this._beginsWith(i,e)&&(i=i.substring(e.length),t.push(i))}return t},clear:function(t){t=t||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(t),t="__"+t+"_";for(var s=[],i=0;i<this.keys.length;i++){var r=this.keys[i];this._beginsWith(r,t)&&s.push(r)}e.forEach(s,function(e){this.store.removeAttribute(e),this._removeKey(e)},this),this.put("keys",this.keys,null,"dojoxSystemNS"),this.store.save(this.storeName)},remove:function(e,t){this._assertIsValidKey(e),t=t||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(t),e=this.getFullKey(e,t),this.store.removeAttribute(e),this._removeKey(e),this.put("keys",this.keys,null,"dojoxSystemNS"),this.store.save(this.storeName)},getNamespaces:function(){var e=[this.DEFAULT_NAMESPACE],t={};t[this.DEFAULT_NAMESPACE]=!0;for(var s=/^__([^_]*)_/,i=0;i<this.keys.length;i++){var r=this.keys[i];if(1==s.test(r)){var o=r.match(s)[1];"undefined"==typeof t[o]&&(t[o]=!0,e.push(o))}}return e},isPermanent:function(){return!0},getMaximumSize:function(){return 64},hasSettingsUI:function(){return!1},isValidKey:function(e){return null===e||void 0===e?!1:/^[0-9A-Za-z_-]*$/.test(e)},isValidNamespace:function(e){return null===e||void 0===e?!1:/^[0-9A-Za-z-]*$/.test(e)},getFullKey:function(e,t){return"__"+t+"_"+e},_beginsWith:function(e,t){return t.length>e.length?!1:e.substring(0,t.length)===t},_assertIsValidNamespace:function(e){if(this.isValidNamespace(e)===!1)throw new Error("Invalid namespace given: "+e)},_assertIsValidKey:function(e){if(this.isValidKey(e)===!1)throw new Error("Invalid key given: "+e)},_addKey:function(e){this._removeKey(e),this.keys.push(e)},_removeKey:function(t){this.keys=e.filter(this.keys,function(e){return e!==t},this)}}),s.storage.manager.register("dojox.storage.BehaviorStorageProvider",new s.storage.BehaviorStorageProvider)});