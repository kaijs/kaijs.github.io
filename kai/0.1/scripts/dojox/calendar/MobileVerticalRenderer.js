require({cache:{"url:dojox/calendar/templates/MobileVerticalRenderer.html":'<div class="dojoxCalendarEvent dojoxCalendarVertical">\n	<div class="bg"></div>	\n	<div data-dojo-attach-point="resizeStartHandle" class="resizeStartHandle resizeHandle"><div></div></div>\n	<dl style="width:100%;">				\n		<dd data-dojo-attach-point="beforeIcon" class="beforeIcon">▲</dd>\n		<dd data-dojo-attach-point="startTimeLabel" class="startTime"></dd>\n		<dd data-dojo-attach-point="summaryLabel" class="summary"></dd>\n	</dl>\n	<span data-dojo-attach-point="afterIcon" class="afterIcon">▼</span>	\n	<div data-dojo-attach-point="resizeEndHandle" class="resizeEndHandle resizeHandle"><div></div></div>\n	<span data-dojo-attach-point="endTimeLabel" class="endTime"></span>\n</div>\n'}}),define("dojox/calendar/MobileVerticalRenderer",["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dojox/calendar/_RendererMixin","dojo/text!./templates/MobileVerticalRenderer.html"],function(e,a,t,i,d){return e("dojox.calendar.MobileVerticalRenderer",[a,t,i],{templateString:d,mobile:!0,visibilityLimits:{resizeStartHandle:75,resizeEndHandle:-1,summaryLabel:55,startTimeLabel:75,endTimeLabel:20},postCreate:function(){this.inherited(arguments),this._applyAttributes()},_isElementVisible:function(e,a,t,i){var d;switch(e){case"startTimeLabel":if(d=this.item.startTime,this.item.allDay||this.owner.isStartOfDay(d))return!1;break;case"endTimeLabel":if(d=this.item.endTime,this.item.allDay||this.owner.isStartOfDay(d))return!1}return this.inherited(arguments)}})});