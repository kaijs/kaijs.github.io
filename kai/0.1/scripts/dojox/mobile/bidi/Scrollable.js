define("dojox/mobile/bidi/Scrollable",["dojo/_base/declare"],function(r){return r(null,{showScrollBar:function(){this.inherited(arguments),!this.isLeftToRight()&&this._scrollBarWrapperV&&(this._scrollBarWrapperV.style.right="auto",this._scrollBarWrapperV.style.left="2px")}})});