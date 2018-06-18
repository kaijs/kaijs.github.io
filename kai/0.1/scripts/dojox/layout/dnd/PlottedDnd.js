define("dojox/layout/dnd/PlottedDnd",["dojo","dijit","dojox","dojo/require!dojo/dnd/Source,dojo/dnd/Manager,dojox/layout/dnd/Avatar"],function(t,e,o){t.provide("dojox.layout.dnd.PlottedDnd"),t.require("dojo.dnd.Source"),t.require("dojo.dnd.Manager"),t.require("dojox.layout.dnd.Avatar"),t.declare("dojox.layout.dnd.PlottedDnd",[t.dnd.Source],{GC_OFFSET_X:t.dnd.manager().OFFSET_X,GC_OFFSET_Y:t.dnd.manager().OFFSET_Y,constructor:function(t,e){this.childBoxes=null,this.dropIndicator=new o.layout.dnd.DropIndicator("dndDropIndicator","div"),this.withHandles=e.withHandles,this.handleClasses=e.handleClasses,this.opacity=e.opacity,this.allowAutoScroll=e.allowAutoScroll,this.dom=e.dom,this.singular=!0,this.skipForm=!0,this._over=!1,this.defaultHandleClass="GcDndHandle",this.isDropped=!1,this._timer=null,this.isOffset=e.isOffset?!0:!1,this.offsetDrag=e.offsetDrag?e.offsetDrag:{x:0,y:0},this.hideSource=e.hideSource?e.hideSource:!0,this._drop=this.dropIndicator.create()},_calculateCoords:function(e){t.forEach(this.node.childNodes,function(o){var s=t.coords(o,!0);o.coords={xy:s,w:o.offsetWidth/2,h:o.offsetHeight/2,mw:s.w},e&&(o.coords.mh=s.h)},this)},_legalMouseDown:function(e){if(!this.withHandles)return!0;for(var o=e.target;o&&o!=this.node;o=o.parentNode)if(t.hasClass(o,this.defaultHandleClass))return!0;return!1},setDndItemSelectable:function(e,o){for(var s=e;s&&e!=this.node;s=s.parentNode)if(t.hasClass(s,"dojoDndItem"))return void t.setSelectable(s,o)},getDraggedWidget:function(o){for(var s=o;s&&"body"!=s.nodeName.toLowerCase()&&!t.hasClass(s,"dojoDndItem");)s=s.parentNode;return s?e.byNode(s):null},isAccepted:function(t){var e=t?t.getAttribute("dndtype"):null;return e&&e in this.accept},onDndStart:function(e,s,r){this.firstIndicator=e==this,this._calculateCoords(!0);var i=t.dnd.manager();s[0].coords?(this._drop.style.height=s[0].coords.mh+"px",t.style(i.avatar.node,"width",s[0].coords.mw+"px")):this._drop.style.height=i.avatar.node.clientHeight+"px",this.dndNodes=s,o.layout.dnd.PlottedDnd.superclass.onDndStart.call(this,e,s,r),e==this&&this.hideSource&&t.forEach(s,function(e){t.style(e,"display","none")})},onDndCancel:function(){var e=t.dnd.manager();if(e.source==this&&this.hideSource){var s=this.getSelectedNodes();t.forEach(s,function(e){t.style(e,"display","")})}o.layout.dnd.PlottedDnd.superclass.onDndCancel.call(this),this.deleteDashedZone()},onDndDrop:function(t,e,s,r){try{this.isAccepted(e[0])?(t==this&&this._over&&this.dropObject&&(this.current=this.dropObject.c),o.layout.dnd.PlottedDnd.superclass.onDndDrop.call(this,t,e,s,r),this._calculateCoords(!0)):this.onDndCancel()}catch(i){}},onMouseDown:function(e){if(null==this.current?this.selection={}:this.current==this.anchor&&(this.anchor=null),null!==this.current){var s=t.coords(this.current,!0);if(this.current.coords={xy:s,w:this.current.offsetWidth/2,h:this.current.offsetHeight/2,mh:s.h,mw:s.w},this._drop.style.height=this.current.coords.mh+"px",this.isOffset){if(0==this.offsetDrag.x&&0==this.offsetDrag.y){var r=!0,i=t.coords(this._getChildByEvent(e));this.offsetDrag.x=i.x-e.pageX,this.offsetDrag.y=i.y-e.clientY}this.offsetDrag.y<16&&null!=this.current&&(this.offsetDrag.y=this.GC_OFFSET_Y);var n=t.dnd.manager();n.OFFSET_X=this.offsetDrag.x,n.OFFSET_Y=this.offsetDrag.y,r&&(this.offsetDrag.x=0,this.offsetDrag.y=0)}}if(t.dnd.isFormElement(e))this.setDndItemSelectable(e.target,!0);else{this.containerSource=!0;var d=this.getDraggedWidget(e.target);d&&d.dragRestriction||o.layout.dnd.PlottedDnd.superclass.onMouseDown.call(this,e)}},onMouseUp:function(e){o.layout.dnd.PlottedDnd.superclass.onMouseUp.call(this,e),this.containerSource=!1,!t.isIE&&this.mouseDown&&this.setDndItemSelectable(e.target,!0);var s=t.dnd.manager();s.OFFSET_X=this.GC_OFFSET_X,s.OFFSET_Y=this.GC_OFFSET_Y},onMouseMove:function(e){var o=t.dnd.manager();if(this.isDragging){var s=!1;(null!=this.current||null==this.current&&!this.dropObject)&&(this.isAccepted(o.nodes[0])||this.containerSource)&&(s=this.setIndicatorPosition(e)),(this.current!=this.targetAnchor||s!=this.before)&&(this._markTargetAnchor(s),o.canDrop(!(this.current&&o.source==this&&this.current.id in this.selection))),this.allowAutoScroll&&this._checkAutoScroll(e)}else{if(this.mouseDown&&this.isSource){var r=this.getSelectedNodes();r.length&&o.startDrag(this,r,this.copyState(t.isCopyKey(e)))}this.allowAutoScroll&&this._stopAutoScroll()}},_markTargetAnchor:function(t){(this.current!=this.targetAnchor||this.before!=t)&&(this.targetAnchor=this.current,this.targetBox=null,this.before=t)},_unmarkTargetAnchor:function(){this.targetAnchor&&(this.targetAnchor=null,this.targetBox=null,this.before=!0)},setIndicatorPosition:function(e){var o=!1;return this.current?((!this.current.coords||this.allowAutoScroll)&&(this.current.coords={xy:t.coords(this.current,!0),w:this.current.offsetWidth/2,h:this.current.offsetHeight/2}),o=this.horizontal?e.pageX-this.current.coords.xy.x<this.current.coords.w:e.pageY-this.current.coords.xy.y<this.current.coords.h,this.insertDashedZone(o)):this.dropObject||this.insertDashedZone(!1),o},onOverEvent:function(){if(this._over=!0,o.layout.dnd.PlottedDnd.superclass.onOverEvent.call(this),this.isDragging){var e=t.dnd.manager();!this.current&&!this.dropObject&&this.getSelectedNodes()[0]&&this.isAccepted(e.nodes[0])&&this.insertDashedZone(!1)}},onOutEvent:function(){this._over=!1,this.containerSource=!1,o.layout.dnd.PlottedDnd.superclass.onOutEvent.call(this),this.dropObject&&this.deleteDashedZone()},deleteDashedZone:function(){this._drop.style.display="none";for(var t=this._drop.nextSibling;null!=t;)t.coords.xy.y-=parseInt(this._drop.style.height),t=t.nextSibling;delete this.dropObject},insertDashedZone:function(e){if(this.dropObject){if(e==this.dropObject.b&&(this.current&&this.dropObject.c==this.current.id||!this.current&&!this.dropObject.c))return;this.deleteDashedZone()}if(this.dropObject={n:this._drop,c:this.current?this.current.id:null,b:e},this.current)if(t.place(this._drop,this.current,e?"before":"after"),this.firstIndicator)this.firstIndicator=!1;else for(var o=this._drop.nextSibling;null!=o;)o.coords.xy.y+=parseInt(this._drop.style.height),o=o.nextSibling;else this.node.appendChild(this._drop);this._drop.style.display=""},insertNodes:function(s,r,i,n){if(!this.dropObject)return o.layout.dnd.PlottedDnd.superclass.insertNodes.call(this,s,r,i,n);t.style(this.dropObject.n,"display","none"),o.layout.dnd.PlottedDnd.superclass.insertNodes.call(this,!0,r,!0,this.dropObject.n),this.deleteDashedZone();var d=e.byId(r[0].getAttribute("widgetId"));d&&(o.layout.dnd._setGcDndHandle(d,this.withHandles,this.handleClasses),this.hideSource&&t.style(d.domNode,"display",""))},_checkAutoScroll:function(t){this._timer&&clearTimeout(this._timer),this._stopAutoScroll();var e=this.dom,o=this._sumAncestorProperties(e,"offsetTop");t.pageY-e.offsetTop+30>e.clientHeight?(this.autoScrollActive=!0,this._autoScrollDown(e)):e.scrollTop>0&&t.pageY-o<30&&(this.autoScrollActive=!0,this._autoScrollUp(e))},_autoScrollUp:function(e){this.autoScrollActive&&e.scrollTop>0&&(e.scrollTop-=30,this._timer=setTimeout(t.hitch(this,"_autoScrollUp",e),100))},_autoScrollDown:function(e){this.autoScrollActive&&e.scrollTop<e.scrollHeight-e.clientHeight&&(e.scrollTop+=30,this._timer=setTimeout(t.hitch(this,"_autoScrollDown",e),100))},_stopAutoScroll:function(){this.autoScrollActive=!1},_sumAncestorProperties:function(e,o){if(e=t.byId(e),!e)return 0;for(var s=0;e;){var r=e[o];if(r&&(s+=r-0,e==t.body()))break;e=e.parentNode}return s}}),o.layout.dnd._setGcDndHandle=function(e,o,s,r){var i="GcDndHandle";if(r||t.query(".GcDndHandle",e.domNode).removeClass(i),o){for(var n=!1,d=s.length-1;d>=0;d--){var a=t.query("."+s[d],e.domNode)[0];if(a&&(n=!0,s[d]!=i)){var h=t.query("."+i,e.domNode);0==h.length?t.removeClass(e.domNode,i):h.removeClass(i),t.addClass(a,i)}}n||t.addClass(e.domNode,i)}else t.addClass(e.domNode,i)},t.declare("dojox.layout.dnd.DropIndicator",null,{constructor:function(t,e){this.tag=e||"div",this.style=t||null},isInserted:function(){return this.node.parentNode&&1==this.node.parentNode.nodeType},create:function(){if(this.node&&this.isInserted())return this.node;var e="90px",o=t.doc.createElement(this.tag);return this.style?(o.className=this.style,o.style.height=e):t.style(o,{position:"relative",border:"1px dashed #F60",margin:"2px",height:e}),this.node=o,o},destroy:function(){this.node&&this.isInserted()&&(this.node.parentNode.removeChild(this.node),this.node=null)}}),t.extend(t.dnd.Manager,{canDrop:function(t){var e=this.target&&t;this.canDropFlag!=e&&(this.canDropFlag=e,this.avatar&&this.avatar.update())},makeAvatar:function(){return"dojox.layout.dnd.PlottedDnd"==this.source.declaredClass?new o.layout.dnd.Avatar(this,this.source.opacity):new t.dnd.Avatar(this)}}),t.isIE&&(o.layout.dnd.handdleIE=[t.subscribe("/dnd/start",null,function(){IEonselectstart=document.body.onselectstart,document.body.onselectstart=function(){return!1}}),t.subscribe("/dnd/cancel",null,function(){document.body.onselectstart=IEonselectstart}),t.subscribe("/dnd/drop",null,function(){document.body.onselectstart=IEonselectstart})],t.addOnWindowUnload(function(){t.forEach(o.layout.dnd.handdleIE,t.unsubscribe)}))});