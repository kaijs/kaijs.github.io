require({cache:{"url:dojox/calendar/templates/HorizontalRenderer.html":'<div class="dojoxCalendarEvent dojoxCalendarHorizontal" onselectstart="return false;">\n	<div class="bg" ></div>\n	<div style="position:absolute;left:2px;bottom:2px" data-dojo-attach-point="beforeIcon" class="beforeIcon">&#x25C0;</div>	\n	<div data-dojo-attach-point="labelContainer" class="labels">		\n		<span data-dojo-attach-point="startTimeLabel" class="startTime"></span>\n		<span data-dojo-attach-point="summaryLabel" class="summary"></span>\n		<span  data-dojo-attach-point="endTimeLabel" class="endTime"></span>\n	</div>\n	<div style="position:absolute;right:2px;bottom:2px" data-dojo-attach-point="afterIcon" class="afterIcon">&#x25B6;</div>\n	<div data-dojo-attach-point="moveHandle" class="handle moveHandle" ></div>\n	<div data-dojo-attach-point="resizeStartHandle" class="handle resizeStartHandle"></div>\n	<div data-dojo-attach-point="resizeEndHandle" class="handle resizeEndHandle" ></div>	\n</div>\n'}}),define("dojox/calendar/HorizontalRenderer",["dojo/_base/declare","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","dojox/calendar/_RendererMixin","dojo/text!./templates/HorizontalRenderer.html"],function(a,e,t,i,n,s){return a("dojox.calendar.HorizontalRenderer",[t,i,n],{templateString:s,_orientation:"horizontal",visibilityLimits:{resizeStartHandle:50,resizeEndHandle:-1,summaryLabel:15,startTimeLabel:32,endTimeLabel:30},_displayValueMap:{beforeIcon:"inline",afterIcon:"inline"},_displayValue:"inline",arrowPadding:12,_isElementVisible:function(a,t,i,n){var s,o=this.isLeftToRight();switch("startTimeLabel"==a&&(this.labelContainer&&(o&&i||!o&&t)?e.set(this.labelContainer,"marginRight",this.arrowPadding+"px"):e.set(this.labelContainer,"marginRight",0),this.labelContainer&&(!o&&i||o&&t)?e.set(this.labelContainer,"marginLeft",this.arrowPadding+"px"):e.set(this.labelContainer,"marginLeft",0)),a){case"startTimeLabel":if(s=this.item.startTime,this.item.allDay||this.owner.isStartOfDay(s))return!1;break;case"endTimeLabel":if(s=this.item.endTime,this.item.allDay||this.owner.isStartOfDay(s))return!1}return this.inherited(arguments)},getDisplayValue:function(a){var e=this._displayValueMap[a];return e?e:this._displayValue},postCreate:function(){this.inherited(arguments),this._applyAttributes()}})});