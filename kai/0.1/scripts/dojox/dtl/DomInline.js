define("dojox/dtl/DomInline",["dojo/_base/lang","./dom","./_base","dijit/_WidgetBase"],function(t,e,o,n){return o.DomInline=t.extend(function(t,e){this.create(t,e)},n.prototype,{context:null,render:function(t){this.context=t||this.context,this.postMixInProperties();var e=this.template.render(this.context).getRootNode();e!=this.containerNode&&(this.containerNode.parentNode.replaceChild(e,this.containerNode),this.containerNode=e)},declaredClass:"dojox.dtl.Inline",buildRendering:function(){var e=this.domNode=document.createElement("div");this.containerNode=e.appendChild(document.createElement("div"));var o=this.srcNodeRef;o.parentNode&&o.parentNode.replaceChild(e,o),this.template=new dojox.dtl.DomTemplate(t.trim(o.text),!0),this.render()},postMixInProperties:function(){this.context=this.context.get===dojox.dtl._Context.prototype.get?this.context:new dojox.dtl.Context(this.context)}})});