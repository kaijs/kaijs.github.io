define("dojox/mobile/app/ListSelector",["dojo","dijit","dojox","dojo/require!dojox/mobile/app/_Widget,dojo/fx"],function(t,e,o){t.provide("dojox.mobile.app.ListSelector"),t.experimental("dojox.mobile.app.ListSelector"),t.require("dojox.mobile.app._Widget"),t.require("dojo.fx"),t.declare("dojox.mobile.app.ListSelector",o.mobile.app._Widget,{data:null,controller:null,onChoose:null,destroyOnHide:!1,_setDataAttr:function(t){this.data=t,this.data&&this.render()},postCreate:function(){t.addClass(this.domNode,"listSelector");var e=this;this.connect(this.domNode,"onclick",function(o){t.hasClass(o.target,"listSelectorRow")&&(e.onChoose&&e.onChoose(e.data[o.target._idx].value),e.hide())}),this.connect(this.domNode,"onmousedown",function(e){t.hasClass(e.target,"listSelectorRow")&&t.addClass(e.target,"listSelectorRow-selected")}),this.connect(this.domNode,"onmouseup",function(e){t.hasClass(e.target,"listSelectorRow")&&t.removeClass(e.target,"listSelectorRow-selected")}),this.connect(this.domNode,"onmouseout",function(e){t.hasClass(e.target,"listSelectorRow")&&t.removeClass(e.target,"listSelectorRow-selected")});this.controller.getWindowSize();this.mask=t.create("div",{"class":"dialogUnderlayWrapper",innerHTML:'<div class="dialogUnderlay"></div>'},this.controller.assistant.domNode),this.connect(this.mask,"onclick",function(){e.onChoose&&e.onChoose(),e.hide()})},show:function(e){var o,i,s=this.controller.getWindowSize();e?(i=t._abs(e),o=i):(o.x=s.w/2,o.y=200),t.style(this.domNode,{opacity:0,display:"",width:Math.floor(.8*s.w)+"px"});var d=0;t.query(">",this.domNode).forEach(function(e){t.style(e,{"float":"left"}),d=Math.max(d,t.marginBox(e).w),t.style(e,{"float":"none"})}),d=Math.min(d,Math.round(.8*s.w))+t.style(this.domNode,"paddingLeft")+t.style(this.domNode,"paddingRight")+1,t.style(this.domNode,"width",d+"px");var a=t.marginBox(this.domNode).h,n=this,r=i?Math.max(30,i.y-a-10):this.getScroll().y+30,l=t.animateProperty({node:this.domNode,duration:400,properties:{width:{start:1,end:d},height:{start:1,end:a},top:{start:o.y,end:r},left:{start:o.x,end:s.w/2-d/2},opacity:{start:0,end:1},fontSize:{start:1}},onEnd:function(){t.style(n.domNode,"width","inherit")}}),h=t.fadeIn({node:this.mask,duration:400});t.fx.combine([l,h]).play()},hide:function(){var e=this,o=t.animateProperty({node:this.domNode,duration:500,properties:{width:{end:1},height:{end:1},opacity:{end:0},fontSize:{end:1}},onEnd:function(){e.get("destroyOnHide")&&e.destroy()}}),i=t.fadeOut({node:this.mask,duration:400});t.fx.combine([o,i]).play()},render:function(){t.empty(this.domNode),t.style(this.domNode,"opacity",0);for(var e,o=0;o<this.data.length;o++)e=t.create("div",{"class":"listSelectorRow "+(this.data[o].className||""),innerHTML:this.data[o].label},this.domNode),e._idx=o,0==o&&t.addClass(e,"first"),o==this.data.length-1&&t.addClass(e,"last")},destroy:function(){this.inherited(arguments),t.destroy(this.mask)}})});