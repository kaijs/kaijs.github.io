define("dojox/drawing/stencil/Image",["dojo","../util/oo","./_Base","../manager/_registry"],function(t,i,e,s){var n=i.declare(e,function(t){},{type:"dojox.drawing.stencil.Image",anchorType:"group",baseRender:!0,dataToPoints:function(t){return t=t||this.data,this.points=[{x:t.x,y:t.y},{x:t.x+t.width,y:t.y},{x:t.x+t.width,y:t.y+t.height},{x:t.x,y:t.y+t.height}],this.points},pointsToData:function(t){t=t||this.points;var i=t[0],e=t[2];return this.data={x:i.x,y:i.y,width:e.x-i.x,height:e.y-i.y,src:this.src||this.data.src},this.data},_createHilite:function(){this.remove(this.hit),this.hit=this.container.createRect(this.data).setStroke(this.style.current).setFill(this.style.current.fill),this._setNodeAtts(this.hit)},_create:function(t,i,e){this.remove(this[t]);var s=this.container.getParent();this[t]=s.createImage(i),this.container.add(this[t]),this._setNodeAtts(this[t])},render:function(t){return"auto"==this.data.width||isNaN(this.data.width)?void this.getImageSize(!0):(this.onBeforeRender(this),this.renderHit&&this._createHilite(),void this._create("shape",this.data,this.style.current))},getImageSize:function(i){if(!this._gettingSize){this._gettingSize=!0;var e=t.create("img",{src:this.data.src},t.body()),s=t.connect(e,"error",this,function(){t.disconnect(n),t.disconnect(s)}),n=t.connect(e,"load",this,function(){var s=t.marginBox(e);this.setData({x:this.data.x,y:this.data.y,src:this.data.src,width:s.w,height:s.h}),t.disconnect(n),t.destroy(e),i&&this.render(!0)})}}});return t.setObject("dojox.drawing.stencil.Image",n),s.register({name:"dojox.drawing.stencil.Image"},"stencil"),n});