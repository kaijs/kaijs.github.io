define("dojox/mobile/app/List",["dojo","dijit","dojox","dojo/require!dojo/string,dijit/_WidgetBase"],function(e,t,s){e.provide("dojox.mobile.app.List"),e.experimental("dojox.mobile.app.List"),e.require("dojo.string"),e.require("dijit._WidgetBase"),function(){var i={};e.declare("dojox.mobile.app.List",t._WidgetBase,{items:null,itemTemplate:"",emptyTemplate:"",dividerTemplate:"",dividerFunction:null,labelDelete:"Delete",labelCancel:"Cancel",controller:null,autoDelete:!0,enableDelete:!0,enableHold:!0,formatters:null,_templateLoadCount:0,_mouseDownPos:null,baseClass:"list",constructor:function(){this._checkLoadComplete=e.hitch(this,this._checkLoadComplete),this._replaceToken=e.hitch(this,this._replaceToken),this._postDeleteAnim=e.hitch(this,this._postDeleteAnim)},postCreate:function(){var t=this;if(this.emptyTemplate&&this._templateLoadCount++,this.itemTemplate&&this._templateLoadCount++,this.dividerTemplate&&this._templateLoadCount++,this.connect(this.domNode,"onmousedown",function(e){var s=e;e.targetTouches&&e.targetTouches.length>0&&(s=e.targetTouches[0]);var i=t._getRowNode(e.target);i&&(t._setDataInfo(i,e),t._selectRow(i),t._mouseDownPos={x:s.pageX,y:s.pageY},t._dragThreshold=null)}),this.connect(this.domNode,"onmouseup",function(e){e.targetTouches&&e.targetTouches.length>0&&(e=e.targetTouches[0]);var s=t._getRowNode(e.target);s&&(t._setDataInfo(s,e),t._selectedRow&&t.onSelect(s._data,s._idx,s),this._deselectRow())}),this.enableDelete&&this.connect(this.domNode,"mousemove",function(s){if(e.stopEvent(s),t._selectedRow){var i=t._getRowNode(s.target);t.enableDelete&&i&&!t._deleting&&t.handleDrag(s)}}),this.connect(this.domNode,"onclick",function(e){e.touches&&e.touches.length>0&&(e=e.touches[0]);var s=t._getRowNode(e.target,!0);s&&t._setDataInfo(s,e)}),this.connect(this.domNode,"mouseout",function(e){e.touches&&e.touches.length>0&&(e=e.touches[0]),e.target==t._selectedRow&&t._deselectRow()}),!this.itemTemplate)throw Error("An item template must be provided to "+this.declaredClass);this._loadTemplate(this.itemTemplate,"itemTemplate",this._checkLoadComplete),this.emptyTemplate&&this._loadTemplate(this.emptyTemplate,"emptyTemplate",this._checkLoadComplete),this.dividerTemplate&&this._loadTemplate(this.dividerTemplate,"dividerTemplate",this._checkLoadComplete)},handleDrag:function(t){var s=t;t.targetTouches&&t.targetTouches.length>0&&(s=t.targetTouches[0]);var i=s.pageX-this._mouseDownPos.x,o=Math.abs(i);o>10&&!this._dragThreshold&&(this._dragThreshold=.6*e.marginBox(this._selectedRow).w,this.autoDelete||this.createDeleteButtons(this._selectedRow)),this._selectedRow.style.left=(o>10?i:0)+"px",this._dragThreshold&&this._dragThreshold<o&&this.preDelete(i)},handleDragCancel:function(){this._deleting||(e.removeClass(this._selectedRow,"hold"),this._selectedRow.style.left=0,this._mouseDownPos=null,this._dragThreshold=null,this._deleteBtns&&e.style(this._deleteBtns,"display","none"))},preDelete:function(t){this._deleting=!0,e.animateProperty({node:this._selectedRow,duration:400,properties:{left:{end:t+(t>0?1:-1)*this._dragThreshold*.8}},onEnd:e.hitch(this,function(){this.autoDelete&&this.deleteRow(this._selectedRow)})}).play()},deleteRow:function(t){e.style(t,{visibility:"hidden",minHeight:"0px"}),e.removeClass(t,"hold"),this._deleteAnimConn=this.connect(t,"webkitAnimationEnd",this._postDeleteAnim),e.addClass(t,"collapsed")},_postDeleteAnim:function(t){this._deleteAnimConn&&(this.disconnect(this._deleteAnimConn),this._deleteAnimConn=null);var s=this._selectedRow,i=s.nextSibling,o=s.previousSibling;for(o&&o._isDivider&&(!i||i._isDivider)&&o.parentNode.removeChild(o),s.parentNode.removeChild(s),this.onDelete(s._data,s._idx,this.items);i;)i._idx&&i._idx--,i=i.nextSibling;e.destroy(s),e.query("> *:not(.buttons)",this.domNode).forEach(this.applyClass),this._deleting=!1,this._deselectRow()},createDeleteButtons:function(t){var i=e.marginBox(t);e._abs(t,!0);this._deleteBtns||(this._deleteBtns=e.create("div",{"class":"buttons"},this.domNode),this.buttons=[],this.buttons.push(new s.mobile.Button({btnClass:"mblRedButton",label:this.labelDelete})),this.buttons.push(new s.mobile.Button({btnClass:"mblBlueButton",label:this.labelCancel})),e.place(this.buttons[0].domNode,this._deleteBtns),e.place(this.buttons[1].domNode,this._deleteBtns),e.addClass(this.buttons[0].domNode,"deleteBtn"),e.addClass(this.buttons[1].domNode,"cancelBtn"),this._handleButtonClick=e.hitch(this._handleButtonClick),this.connect(this._deleteBtns,"onclick",this._handleButtonClick)),e.removeClass(this._deleteBtns,"fade out fast"),e.style(this._deleteBtns,{display:"",width:i.w+"px",height:i.h+"px",top:t.offsetTop+"px",left:"0px"})},onDelete:function(e,t,s){s.splice(t,1),s.length<1&&this.render()},cancelDelete:function(){this._deleting=!1,this.handleDragCancel()},_handleButtonClick:function(t){t.touches&&t.touches.length>0&&(t=t.touches[0]);var s=t.target;if(e.hasClass(s,"deleteBtn"))this.deleteRow(this._selectedRow);else{if(!e.hasClass(s,"cancelBtn"))return;this.cancelDelete()}e.addClass(this._deleteBtns,"fade out")},applyClass:function(t,s,i){e.removeClass(t,"first last"),0==s&&e.addClass(t,"first"),s==i.length-1&&e.addClass(t,"last")},_setDataInfo:function(e,t){t.item=e._data,t.index=e._idx},onSelect:function(e,t,s){},_selectRow:function(t){this._deleting&&this._selectedRow&&t!=this._selectedRow&&this.cancelDelete(),e.hasClass(t,"row")&&((this.enableHold||this.enableDelete)&&e.addClass(t,"hold"),this._selectedRow=t)},_deselectRow:function(){this._selectedRow&&!this._deleting&&(this.handleDragCancel(),e.removeClass(this._selectedRow,"hold"),this._selectedRow=null)},_getRowNode:function(t,s){for(;t&&!t._data&&t!=this.domNode;){if(!s&&e.hasClass(t,"noclick"))return null;t=t.parentNode}return t==this.domNode?null:t},applyTemplate:function(t,s){return e._toDom(e.string.substitute(t,s,this._replaceToken,this.formatters||this))},render:function(){e.query("> *:not(.buttons)",this.domNode).forEach(e.destroy),this.items.length<1&&this.emptyTemplate?e.place(e._toDom(this.emptyTemplate),this.domNode,"first"):this.domNode.appendChild(this._renderRange(0,this.items.length)),e.hasClass(this.domNode.parentNode,"mblRoundRect")&&e.addClass(this.domNode.parentNode,"mblRoundRectList");var t=e.query("> .row",this.domNode);t.length>0&&(e.addClass(t[0],"first"),e.addClass(t[t.length-1],"last"))},_renderRange:function(t,s){var i,o,l=[],n=document.createDocumentFragment();for(t=Math.max(0,t),s=Math.min(s,this.items.length),o=t;s>o;o++)i=this.applyTemplate(this.itemTemplate,this.items[o]),e.addClass(i,"row"),i._data=this.items[o],i._idx=o,l.push(i);if(this.dividerFunction&&this.dividerTemplate){var a,d,h=null;for(o=t;s>o;o++)l[o]._data=this.items[o],l[o]._idx=o,a=this.dividerFunction(this.items[o]),a&&a!=h&&(d=this.applyTemplate(this.dividerTemplate,{label:a,item:this.items[o]}),d._isDivider=!0,n.appendChild(d),h=a),n.appendChild(l[o])}else for(o=t;s>o;o++)l[o]._data=this.items[o],l[o]._idx=o,n.appendChild(l[o]);return n},_replaceToken:function(t,s){return"!"==s.charAt(0)&&(t=e.getObject(s.substr(1),!1,_this)),"undefined"==typeof t?"":null==t?"":"!"==s.charAt(0)?t:t.toString().replace(/"/g,"&quot;")},_checkLoadComplete:function(){this._templateLoadCount--,this._templateLoadCount<1&&this.get("items")&&this.render()},_loadTemplate:function(t,s,o){if(!t)return void o();if(i[t])this.set(s,i[t]),o();else{var l=this;e.xhrGet({url:t,sync:!1,handleAs:"text",load:function(n){i[t]=e.trim(n),l.set(s,i[t]),o()}})}},_setFormattersAttr:function(e){this.formatters=e},_setItemsAttr:function(e){this.items=e||[],this._templateLoadCount<1&&e&&this.render()},destroy:function(){this.buttons&&(e.forEach(this.buttons,function(e){e.destroy()}),this.buttons=null),this.inherited(arguments)}})}()});