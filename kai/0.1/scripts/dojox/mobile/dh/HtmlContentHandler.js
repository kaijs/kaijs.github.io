define("dojox/mobile/dh/HtmlContentHandler",["dojo/_base/kernel","dojo/_base/array","dojo/_base/declare","dojo/_base/Deferred","dojo/dom-class","dojo/dom-construct","dijit/registry","../lazyLoadUtils"],function(e,o,i,t,d,r,n,l){return i("dojox.mobile.dh.HtmlContentHandler",null,{parse:function(e,o,i){this.execScript&&(e=this.execScript(e));var s=r.create("div",{innerHTML:e,style:{visibility:"hidden"}});return o.insertBefore(s,i),t.when(l.instantiateLazyWidgets(s),function(){var e,t,r;for(t=0,r=s.childNodes.length;r>t;t++){var l=s.firstChild;e||1!==l.nodeType||(e=n.byNode(l)),o.insertBefore(s.firstChild,i)}return o.removeChild(s),e&&d.contains(e.domNode,"mblView")?e.id:null})}})});