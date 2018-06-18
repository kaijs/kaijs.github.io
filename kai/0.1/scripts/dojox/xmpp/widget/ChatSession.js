define("dojox/xmpp/widget/ChatSession",["dojo","dijit","dojox","dojo/require!dijit/layout/LayoutContainer,dijit/_Templated"],function(t,e,o){t.provide("dojox.xmpp.widget.ChatSession"),t.require("dijit.layout.LayoutContainer"),t.require("dijit._Templated"),t.declare("dojox.xmpp.widget.ChatSession",[e.layout.LayoutContainer,e._Templated],{templateString:t.cache("dojox.xmpp.widget","templates/ChatSession.html",'<div>\n<div dojoAttachPoint="messages" dojoType="dijit.layout.ContentPane" layoutAlign="client" style="overflow:auto">\n</div>\n<div dojoType="dijit.layout.ContentPane" layoutAlign="bottom" style="border-top: 2px solid #333333; height: 35px;"><input dojoAttachPoint="chatInput" dojoAttachEvent="onkeypress: onKeyPress" style="width: 100%;height: 35px;" /></div>\n</div>'),enableSubWidgets:!0,widgetsInTemplate:!0,widgetType:"ChatSession",chatWith:null,instance:null,postCreate:function(){},displayMessage:function(t,e){if(t){var o=t.from?this.chatWith:"me";this.messages.domNode.innerHTML+="<b>"+o+":</b> "+t.body+"<br/>",this.goToLastMessage()}},goToLastMessage:function(){this.messages.domNode.scrollTop=this.messages.domNode.scrollHeight},onKeyPress:function(e){var o=e.keyCode||e.charCode;o==t.keys.ENTER&&""!=this.chatInput.value&&(this.instance.sendMessage({body:this.chatInput.value}),this.displayMessage({body:this.chatInput.value},"out"),this.chatInput.value="")}})});