define("dojox/form/manager/_ClassMixin",["dojo/_base/lang","dojo/_base/kernel","dojo/dom-class","./_Mixin","dojo/_base/declare"],function(n,e,o,t,a){var r=n.getObject("dojox.form.manager",!0),i=r.actionAdapter,s=r.inspectorAdapter;return a("dojox.form.manager._ClassMixin",null,{gatherClassState:function(n,e){var t=this.inspect(s(function(e,t){return o.contains(t,n)}),e);return t},addClass:function(n,e){return this.inspect(i(function(e,t){o.add(t,n)}),e),this},removeClass:function(n,e){return this.inspect(i(function(e,t){o.remove(t,n)}),e),this}})});