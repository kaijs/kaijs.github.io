require({cache:{"url:dojox/image/resources/Lightbox.html":'<div class="dojoxLightbox" dojoAttachPoint="containerNode">\n	<div style="position:relative">\n		<div dojoAttachPoint="imageContainer" class="dojoxLightboxContainer" dojoAttachEvent="onclick: _onImageClick">\n			<img dojoAttachPoint="imgNode" src="${imgUrl}" class="${imageClass}" alt="${title}">\n			<div class="dojoxLightboxFooter" dojoAttachPoint="titleNode">\n				<div class="dijitInline LightboxClose" dojoAttachPoint="closeButtonNode"></div>\n				<div class="dijitInline LightboxNext" dojoAttachPoint="nextButtonNode"></div>	\n				<div class="dijitInline LightboxPrev" dojoAttachPoint="prevButtonNode"></div>\n				<div class="dojoxLightboxText" dojoAttachPoint="titleTextNode"><span dojoAttachPoint="textNode">${title}</span><span dojoAttachPoint="groupCount" class="dojoxLightboxGroupText"></span></div>\n			</div>\n		</div>\n	</div>\n</div>'}}),define("dojox/image/Lightbox",["dojo","dijit","dojox","dojo/text!./resources/Lightbox.html","dijit/Dialog","dojox/fx/_base"],function(i,t,o,e){i.experimental("dojox.image.Lightbox"),i.getObject("image",!0,o);var n=i.declare("dojox.image.Lightbox",t._Widget,{group:"",title:"",href:"",duration:500,modal:!1,_allowPassthru:!1,_attachedDialog:null,startup:function(){this.inherited(arguments);var i=t.byId("dojoxLightboxDialog");i?this._attachedDialog=i:(this._attachedDialog=new o.image.LightboxDialog({id:"dojoxLightboxDialog"}),this._attachedDialog.startup()),this.store||(this._addSelf(),this.connect(this.domNode,"onclick","_handleClick"))},_addSelf:function(){this._attachedDialog.addImage({href:this.href,title:this.title},this.group||null)},_handleClick:function(i){this._allowPassthru||(i.preventDefault(),this.show())},show:function(){this._attachedDialog.show(this)},hide:function(){this._attachedDialog.hide()},disable:function(){this._allowPassthru=!0},enable:function(){this._allowPassthru=!1},onClick:function(){},destroy:function(){this._attachedDialog.removeImage(this),this.inherited(arguments)}});return n.LightboxDialog=i.declare("dojox.image.LightboxDialog",t.Dialog,{title:"",inGroup:null,imgUrl:t._Widget.prototype._blankGif,errorMessage:"Image not found.",adjust:!0,modal:!1,imageClass:"dojoxLightboxImage",errorImg:i.moduleUrl("dojox.image","resources/images/warning.png"),templateString:e,constructor:function(i){this._groups=this._groups||i&&i._groups||{XnoGroupX:[]}},startup:function(){return this.inherited(arguments),this._animConnects=[],this.connect(this.nextButtonNode,"onclick","_nextImage"),this.connect(this.prevButtonNode,"onclick","_prevImage"),this.connect(this.closeButtonNode,"onclick","hide"),this._makeAnims(),this._vp=i.window.getBox(),this},show:function(o){var e=this;if(this._lastGroup=o,e.open||(e.inherited(arguments),e._modalconnects.push(i.connect(i.global,"onscroll",this,"_position"),i.connect(i.global,"onresize",this,"_position"),i.connect(i.body(),"onkeypress",this,"_handleKey")),o.modal||e._modalconnects.push(i.connect(t._underlay.domNode,"onclick",this,"onCancel"))),this._wasStyled){var n=i.create("img",{className:e.imageClass},e.imgNode,"after");i.destroy(e.imgNode),e.imgNode=n,e._makeAnims(),e._wasStyled=!1}i.style(e.imgNode,"opacity","0"),i.style(e.titleNode,"opacity","0");var s=o.href;if(o.group&&"XnoGroupX"!==o||e.inGroup){if(e.inGroup||(e.inGroup=e._groups[o.group],i.forEach(e.inGroup,function(i,t){i.href==o.href&&(e._index=t)})),!e._index){e._index=0;var h=e.inGroup[e._index];s=h&&h.href||e.errorImg}e.groupCount.innerHTML=" ("+(e._index+1)+" of "+Math.max(1,e.inGroup.length)+")",e.prevButtonNode.style.visibility="visible",e.nextButtonNode.style.visibility="visible"}else e.groupCount.innerHTML="",e.prevButtonNode.style.visibility="hidden",e.nextButtonNode.style.visibility="hidden";o.leaveTitle||(e.textNode.innerHTML=o.title),e._ready(s)},_ready:function(t){var o=this;o._imgError=i.connect(o.imgNode,"error",o,function(){i.disconnect(o._imgError),o.imgNode.src=o.errorImg,o.textNode.innerHTML=o.errorMessage}),o._imgConnect=i.connect(o.imgNode,"load",o,function(t){o.resizeTo({w:o.imgNode.width,h:o.imgNode.height,duration:o.duration}),i.disconnect(o._imgConnect),o._imgError&&i.disconnect(o._imgError)}),o.imgNode.src=t},_nextImage:function(){this.inGroup&&(this._index+1<this.inGroup.length?this._index++:this._index=0,this._loadImage())},_prevImage:function(){this.inGroup&&(0==this._index?this._index=this.inGroup.length-1:this._index--,this._loadImage())},_loadImage:function(){this._loadingAnim.play(1)},_prepNodes:function(){this._imageReady=!1,this.inGroup&&this.inGroup[this._index]?this.show({href:this.inGroup[this._index].href,title:this.inGroup[this._index].title}):this.show({title:this.errorMessage,href:this.errorImg})},_calcTitleSize:function(){var t=i.map(i.query("> *",this.titleNode).position(),function(i){return i.h});return{h:Math.max.apply(Math,t)}},resizeTo:function(t,e){var n="border-box"==i.boxModel?i._getBorderExtents(this.domNode).w:0,s=e||this._calcTitleSize();this._lastTitleSize=s,this.adjust&&(t.h+s.h+n+80>this._vp.h||t.w+n+60>this._vp.w)&&(this._lastSize=t,t=this._scaleToFit(t)),this._currentSize=t;var h=o.fx.sizeTo({node:this.containerNode,duration:t.duration||this.duration,width:t.w+n,height:t.h+s.h+n});this.connect(h,"onEnd","_showImage"),h.play(15)},_scaleToFit:function(i){var t={},o={w:this._vp.w-80,h:this._vp.h-60-this._lastTitleSize.h},e=o.w/o.h,n=i.w/i.h;return n>=e?(t.h=o.w/n,t.w=o.w):(t.w=n*o.h,t.h=o.h),this._wasStyled=!0,this._setImageSize(t),t.duration=i.duration,t},_setImageSize:function(i){var t=this.imgNode;t.height=i.h,t.width=i.w},_size:function(){},_position:function(t){this._vp=i.window.getBox(),this.inherited(arguments),t&&"resize"==t.type&&(this._wasStyled?(this._setImageSize(this._lastSize),this.resizeTo(this._lastSize)):(this.imgNode.height+80>this._vp.h||this.imgNode.width+60>this._vp.h)&&this.resizeTo({w:this.imgNode.width,h:this.imgNode.height}))},_showImage:function(){this._showImageAnim.play(1)},_showNav:function(){var t=i.marginBox(this.titleNode);t.h>this._lastTitleSize.h?this.resizeTo(this._wasStyled?this._lastSize:this._currentSize,t):this._showNavAnim.play(1)},hide:function(){i.fadeOut({node:this.titleNode,duration:200,onEnd:i.hitch(this,function(){this.imgNode.src=this._blankGif})}).play(5),this.inherited(arguments),this.inGroup=null,this._index=null},addImage:function(i,t){var o=t;i.href&&(o?(this._groups[o]||(this._groups[o]=[]),this._groups[o].push(i)):this._groups.XnoGroupX.push(i))},removeImage:function(t){var o=t.group||"XnoGroupX";i.every(this._groups[o],function(i,o,e){return i.href==t.href?(e.splice(o,1),!1):!0})},removeGroup:function(i){this._groups[i]&&(this._groups[i]=[])},_handleKey:function(t){if(this.open){var o=i.keys;switch(t.charOrCode){case o.ESCAPE:this.hide();break;case o.DOWN_ARROW:case o.RIGHT_ARROW:case 78:this._nextImage();break;case o.UP_ARROW:case o.LEFT_ARROW:case 80:this._prevImage()}}},_makeAnims:function(){i.forEach(this._animConnects,i.disconnect),this._animConnects=[],this._showImageAnim=i.fadeIn({node:this.imgNode,duration:this.duration}),this._animConnects.push(i.connect(this._showImageAnim,"onEnd",this,"_showNav")),this._loadingAnim=i.fx.combine([i.fadeOut({node:this.imgNode,duration:175}),i.fadeOut({node:this.titleNode,duration:175})]),this._animConnects.push(i.connect(this._loadingAnim,"onEnd",this,"_prepNodes")),this._showNavAnim=i.fadeIn({node:this.titleNode,duration:225})},onClick:function(i){},_onImageClick:function(i){i&&i.target==this.imgNode&&(this.onClick(this._lastGroup),this._lastGroup.declaredClass&&this._lastGroup.onClick(this._lastGroup))}}),n});