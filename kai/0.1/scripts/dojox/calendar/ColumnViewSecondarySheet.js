require({cache:{"url:dojox/calendar/templates/ColumnViewSecondarySheet.html":'<div data-dojo-attach-events="keydown:_onKeyDown">\n	<div  data-dojo-attach-point="rowHeader" class="dojoxCalendarRowHeader">\n		<table data-dojo-attach-point="rowHeaderTable" class="dojoxCalendarRowHeaderTable" cellpadding="0" cellspacing="0"></table>\n	</div>	\n	<div data-dojo-attach-point="grid" class="dojoxCalendarGrid">\n		<table data-dojo-attach-point="gridTable" class="dojoxCalendarGridTable" cellpadding="0" cellspacing="0"></table>\n	</div>\n	<div data-dojo-attach-point="itemContainer" class="dojoxCalendarContainer" data-dojo-attach-event="mousedown:_onGridMouseDown,mouseup:_onGridMouseUp,ondblclick:_onGridDoubleClick,touchstart:_onGridTouchStart,touchmove:_onGridTouchMove,touchend:_onGridTouchEnd">\n		<table data-dojo-attach-point="itemContainerTable" class="dojoxCalendarContainerTable" cellpadding="0" cellspacing="0" style="width:100%"></table>\n	</div>\n</div>\n'}}),define("dojox/calendar/ColumnViewSecondarySheet",["dojo/_base/array","dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/dom-geometry","dojo/dom-style","dojox/calendar/MatrixView","dojo/text!./templates/ColumnViewSecondarySheet.html"],function(e,t,o,a,n,d,i,r){return t("dojox.calendar.ColumnViewSecondarySheet",i,{templateString:r,rowCount:1,cellPaddingTop:4,roundToDay:!1,_defaultHeight:-1,layoutDuringResize:!0,buildRendering:function(){this.inherited(arguments),this._hScrollNodes=[this.gridTable,this.itemContainerTable]},_configureHScrollDomNodes:function(t){e.forEach(this._hScrollNodes,function(e){d.set(e,"width",t)},this)},_defaultItemToRendererKindFunc:function(e){return e.allDay?"horizontal":null},_formatGridCellLabel:function(){return null},_formatRowHeaderLabel:function(){return null},__fixEvt:function(e){return e.sheet="secondary",e.source=this,e},_dispatchCalendarEvt:function(e,t){e=this.inherited(arguments),this.owner.owner&&this.owner.owner[t](e)},_layoutExpandRenderers:function(e,t,o){if(this.expandRenderer&&-1!=this._expandedRowCol){var a=n.getMarginBox(this.domNode).h;if((-1==this._defaultHeight||0===this._defaultHeight)&&(this._defaultHeight=a),this._defaultHeight!=a&&a>=this._getExpandedHeight()||void 0!==this._expandedRowCol&&-1!==this._expandedRowCol){var d=this._expandedRowCol;d>=this.renderData.columnCount&&(d=0),this._layoutExpandRendererImpl(0,d,null,!0)}else this.inherited(arguments)}},expandRendererClickHandler:function(e,t){o.stop(e);var a=n.getMarginBox(this.domNode).h,d=this._getExpandedHeight();this._defaultHeight==a||d>a?(this._expandedRowCol=t.columnIndex,this.owner.resizeSecondarySheet(d)):(delete this._expandedRowCol,this.owner.resizeSecondarySheet(this._defaultHeight))},_getExpandedHeight:function(){return(this.naturalRowsHeight&&this.naturalRowsHeight.length>0?this.naturalRowsHeight[0]:0)+this.expandRendererHeight+this.verticalGap+this.verticalGap},_layoutRenderers:function(e){this._domReady&&(this.inherited(arguments),e.items&&0!==e.items.length||this._layoutExpandRenderers(0,!1,null))}})});