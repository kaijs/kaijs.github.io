define("dgrid/extensions/DijitRegistry",["dojo/_base/declare","dojo/dom-geometry","dijit/_WidgetBase","dijit/registry"],function(t,i,e,n){var r=e.prototype;return t(null,{minSize:0,maxSize:1/0,layoutPriority:0,showTitle:!0,buildRendering:function(){n.add(this),this.inherited(arguments),this.domNode.setAttribute("widgetId",this.id)},startup:function(){if(!this._started){this.inherited(arguments);var t=this.getParent();t&&t.isLayoutContainer&&this._resizeHandle.remove()}},destroyRecursive:function(){this.destroy()},destroy:function(){this.inherited(arguments),n.remove(this.id)},getChildren:function(){return[]},getParent:function(){return n.getEnclosingWidget(this.domNode.parentNode)},isLeftToRight:function(){return!this.isRTL},placeAt:function(t,i){return r.placeAt.call(this,t,i)},resize:function(t){t&&i.setMarginBox(this.domNode,t),this.inherited(arguments)},_set:function(t,i){this[t]=i},watch:function(){}})});