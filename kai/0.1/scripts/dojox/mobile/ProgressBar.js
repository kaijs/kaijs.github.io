define("dojox/mobile/ProgressBar",["dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dijit/_WidgetBase"],function(e,s,o,r){return e("dojox.mobile.ProgressBar",r,{value:"0",maximum:100,label:"",baseClass:"mblProgressBar",buildRendering:function(){this.inherited(arguments),this.progressNode=o.create("div",{className:"mblProgressBarProgress"},this.domNode),this.msgNode=o.create("div",{className:"mblProgressBarMsg"},this.domNode)},_setValueAttr:function(e){e+="",this._set("value",e);var o=Math.min(100,-1!=e.indexOf("%")?parseFloat(e):this.maximum?100*e/this.maximum:0);this.progressNode.style.width=o+"%",s.toggle(this.progressNode,"mblProgressBarNotStarted",!o),s.toggle(this.progressNode,"mblProgressBarComplete",100==o),this.onChange(e,this.maximum,o)},_setLabelAttr:function(e){this.msgNode.innerHTML=e},onChange:function(){}})});