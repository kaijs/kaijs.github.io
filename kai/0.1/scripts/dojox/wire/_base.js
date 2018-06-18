define("dojox/wire/_base",["dojo","dijit","dojox"],function(e,i,r){e.provide("dojox.wire._base"),r.wire._defaultWireClass="dojox.wire.Wire",r.wire._wireClasses={attribute:"dojox.wire.DataWire",path:"dojox.wire.XmlWire",children:"dojox.wire.CompositeWire",columns:"dojox.wire.TableAdapter",nodes:"dojox.wire.TreeAdapter",segments:"dojox.wire.TextAdapter"},r.wire.register=function(e,i){e&&i&&(r.wire._wireClasses[i]||(r.wire._wireClasses[i]=e))},r.wire._getClass=function(i){return e.require(i),e.getObject(i)},r.wire.create=function(i){i||(i={});var s=i.wireClass;if(s)e.isString(s)&&(s=r.wire._getClass(s));else for(var t in i)if(i[t]&&(s=r.wire._wireClasses[t])){e.isString(s)&&(s=r.wire._getClass(s),r.wire._wireClasses[t]=s);break}return s||(e.isString(r.wire._defaultWireClass)&&(r.wire._defaultWireClass=r.wire._getClass(r.wire._defaultWireClass)),s=r.wire._defaultWireClass),new s(i)},r.wire.isWire=function(e){return e&&e._wireClass},r.wire.transfer=function(e,i,s,t){if(e&&i){r.wire.isWire(e)||(e=r.wire.create(e)),r.wire.isWire(i)||(i=r.wire.create(i));var n=e.getValue(s);i.setValue(n,t||s)}},r.wire.connect=function(i,s,t){if(i&&s&&t){var n={topic:i.topic};return i.topic?n.handle=e.subscribe(i.topic,function(){r.wire.transfer(s,t,arguments)}):i.event&&(n.handle=e.connect(i.scope,i.event,function(){r.wire.transfer(s,t,arguments)})),n}},r.wire.disconnect=function(i){i&&i.handle&&(i.topic?e.unsubscribe(i.handle):e.disconnect(i.handle))}});