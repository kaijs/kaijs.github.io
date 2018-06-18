define("dojox/charting/plot2d/_PlotEvents",["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/_base/connect"],function(t,e,n,s){return n("dojox.charting.plot2d._PlotEvents",null,{constructor:function(){this._shapeEvents=[],this._eventSeries={}},destroy:function(){this.resetEvents(),this.inherited(arguments)},plotEvent:function(t){},raiseEvent:function(n){this.plotEvent(n);var s=t.delegate(n);s.originalEvent=n.type,s.originalPlot=n.plot,s.type="onindirect",e.forEach(this.chart.stack,function(t){t!==this&&t.plotEvent&&(s.plot=t,t.plotEvent(s))},this)},connect:function(t,e){return this.dirty=!0,s.connect(this,"plotEvent",t,e)},events:function(){return!!this.plotEvent.after},resetEvents:function(){this._shapeEvents.length&&(e.forEach(this._shapeEvents,function(t){t.shape.disconnect(t.handle)}),this._shapeEvents=[]),this.raiseEvent({type:"onplotreset",plot:this})},_connectSingleEvent:function(t,e){this._shapeEvents.push({shape:t.eventMask,handle:t.eventMask.connect(e,this,function(n){t.type=e,t.event=n,this.raiseEvent(t),t.event=null})})},_connectEvents:function(t){t&&(t.chart=this.chart,t.plot=this,t.hAxis=this.hAxis||null,t.vAxis=this.vAxis||null,t.eventMask=t.eventMask||t.shape,this._connectSingleEvent(t,"onmouseover"),this._connectSingleEvent(t,"onmouseout"),this._connectSingleEvent(t,"onclick"))},_reconnectEvents:function(t){var n=this._eventSeries[t];n&&e.forEach(n,this._connectEvents,this)},fireEvent:function(t,e,n,s){var i=this._eventSeries[t];if(i&&i.length&&n<i.length){var o=i[n];o.type=e,o.event=s||null,this.raiseEvent(o),o.event=null}}})});