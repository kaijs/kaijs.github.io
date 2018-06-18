define("dojox/drawing/plugins/drawing/Silverlight",["dojo","dijit","dojox"],function(t,i,n){t.provide("dojox.drawing.plugins.drawing.Silverlight"),n.drawing.plugins.drawing.Silverlight=n.drawing.util.oo.declare(function(i){"silverlight"==n.gfx.renderer&&(this.mouse=i.mouse,this.stencils=i.stencils,this.anchors=i.anchors,this.canvas=i.canvas,this.util=i.util,t.connect(this.stencils,"register",this,function(i){var n,e,s,o,r,c=this,a=function(){n=i.container.connect("onmousedown",function(t){t.superTarget=i,c.mouse.down(t)})};a(),e=t.connect(i,"setTransform",this,function(){}),s=t.connect(i,"onBeforeRender",function(){}),o=t.connect(i,"onRender",this,function(){}),r=t.connect(i,"destroy",this,function(){t.forEach([n,e,s,o,r],t.disconnect,t)})}),t.connect(this.anchors,"onAddAnchor",this,function(i){var n=i.shape.connect("onmousedown",this.mouse,function(t){t.superTarget=i,this.down(t)}),e=t.connect(i,"disconnectMouse",this,function(){t.disconnect(n),t.disconnect(e)})}),this.mouse._down=function(t){var i=this._getXY(t),n=i.x-this.origin.x,e=i.y-this.origin.y;n*=this.zoom,e*=this.zoom,this.origin.startx=n,this.origin.starty=e,this._lastx=n,this._lasty=e,this.drawingType=this.util.attr(t,"drawingType")||"";var s=this._getId(t),o={x:n,y:e,id:s};if(this.onDown(o),this._clickTime=(new Date).getTime(),this._lastClickTime&&this._clickTime-this._lastClickTime<this.doublClickSpeed){var r=this.eventName("doubleClick");this._broadcastEvent(r,o)}this._lastClickTime=this._clickTime},this.mouse.down=function(i){return clearTimeout(this.__downInv),"surface"==this.util.attr(i,"drawingType")?void(this.__downInv=setTimeout(t.hitch(this,function(){this._down(i)}),500)):void this._down(i)},this.mouse._getXY=function(t){if(t.pageX)return{x:t.pageX,y:t.pageY,cancelBubble:!0};for(var i in t);return void 0!==t.x?{x:t.x+this.origin.x,y:t.y+this.origin.y}:{x:t.pageX,y:t.pageY}},this.mouse._getId=function(t){return this.util.attr(t,"id")},this.util.attr=function(i,n,e,s){if(!i)return!1;try{var o;if(o=i.superTarget?i.superTarget:i.superClass?i.superClass:i.target?i.target:i,void 0!==e)return i[n]=e,e;if(o.tagName){if("drawingType"==n&&"object"==o.tagName.toLowerCase())return"surface";var r=t.attr(o,n)}var r=o[n];return r}catch(c){return!1}})},{})});