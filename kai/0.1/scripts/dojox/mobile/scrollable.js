define("dojox/mobile/scrollable",["dojo/_base/kernel","dojo/_base/connect","dojo/_base/event","dojo/_base/lang","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-geometry","dojo/touch","dijit/registry","dijit/form/_TextBoxMixin","./sniff","./_css3","./_maskUtils","dojo/_base/declare","dojo/has!dojo-bidi?dojox/mobile/bidi/Scrollable"],function(t,e,o,i,s,r,n,a,l,h,c,d,f,m,u,_,p){var v=i.getObject("dojox.mobile",!0);f.add("translate3d",function(){if(f("css3-animations")){var t=s.doc.createElement("div");t.style[m.name("transform")]="translate3d(0px,1px,0px)",s.doc.documentElement.appendChild(t);var e=s.doc.defaultView.getComputedStyle(t,"")[m.name("transform",!0)],o=e&&0===e.indexOf("matrix");return s.doc.documentElement.removeChild(t),o}});var x=function(){};return i.extend(x,{fixedHeaderHeight:0,fixedFooterHeight:0,isLocalFooter:!1,scrollBar:!0,scrollDir:"v",weight:.6,fadeScrollBar:!0,disableFlashScrollBar:!1,threshold:4,constraint:!0,touchNode:null,propagatable:!0,dirLock:!1,height:"",scrollType:0,_parentPadBorderExtentsBottom:0,_moved:!1,init:function(t){if(t)for(var o in t)t.hasOwnProperty(o)&&(this[o]="domNode"!=o&&"containerNode"!=o||"string"!=typeof t[o]?t[o]:s.doc.getElementById(t[o]));if("undefined"!=typeof this.domNode.style.msTouchAction&&(this.domNode.style.msTouchAction="none"),this.touchNode=this.touchNode||this.containerNode,this._v=-1!=this.scrollDir.indexOf("v"),this._h=-1!=this.scrollDir.indexOf("h"),this._f="f"==this.scrollDir,this._ch=[],this._ch.push(e.connect(this.touchNode,h.press,this,"onTouchStart")),f("css3-animations"))if(this._useTopLeft=this.scrollType?2===this.scrollType:!1,this._useTopLeft||(this._useTransformTransition=this.scrollType?3===this.scrollType:f("ios")>=6||f("android")||f("bb")),this._useTopLeft)this._ch.push(e.connect(this.containerNode,m.name("transitionEnd"),this,"onFlickAnimationEnd"));else{if(this._useTransformTransition)this._ch.push(e.connect(this.containerNode,m.name("transitionEnd"),this,"onFlickAnimationEnd"));else{this._ch.push(e.connect(this.containerNode,m.name("animationEnd"),this,"onFlickAnimationEnd")),this._ch.push(e.connect(this.containerNode,m.name("animationStart"),this,"onFlickAnimationStart"));for(var i=0;3>i;i++)this.setKeyframes(null,null,i)}f("translate3d")&&a.set(this.containerNode,m.name("transform"),"translate3d(0,0,0)")}this._speed={x:0,y:0},this._appFooterHeight=0,this.isTopLevel()&&!this.noResize&&this.resize();var r=this;setTimeout(function(){r.flashScrollBar()},600),s.global.addEventListener&&(this._onScroll=function(t){if(r.domNode&&"none"!==r.domNode.style.display){var e,o=r.domNode.scrollTop,i=r.domNode.scrollLeft;(o>0||i>0)&&(e=r.getPos(),r.domNode.scrollLeft=0,r.domNode.scrollTop=0,r.scrollTo({x:e.x-i,y:e.y-o}))}},s.global.addEventListener("scroll",this._onScroll,!0)),!this.disableTouchScroll&&this.domNode.addEventListener&&(this._onFocusScroll=function(t){if(r.domNode&&"none"!==r.domNode.style.display){var e,o,i=s.doc.activeElement;i&&(e=i.getBoundingClientRect(),o=r.domNode.getBoundingClientRect(),e.height<r.getDim().d.h&&(e.top<o.top+r.fixedHeaderHeight?r.scrollIntoView(i,!0):e.top+e.height>o.top+o.height-r.fixedFooterHeight&&r.scrollIntoView(i,!1)))}},this.domNode.addEventListener("focus",this._onFocusScroll,!0))},isTopLevel:function(){return!0},cleanup:function(){if(this._ch){for(var t=0;t<this._ch.length;t++)e.disconnect(this._ch[t]);this._ch=null}this._onScroll&&s.global.removeEventListener&&(s.global.removeEventListener("scroll",this._onScroll,!0),this._onScroll=null),this._onFocusScroll&&this.domNode.removeEventListener&&(this.domNode.removeEventListener("focus",this._onFocusScroll,!0),this._onFocusScroll=null)},findDisp:function(t){if(!t.parentNode)return null;if(1===t.nodeType&&r.contains(t,"mblSwapView")&&"none"!==t.style.display)return t;for(var e=t.parentNode.childNodes,o=0;o<e.length;o++){var i=e[o];if(1===i.nodeType&&r.contains(i,"mblView")&&"none"!==i.style.display)return i}return t},getScreenSize:function(){return{h:s.global.innerHeight||s.doc.documentElement.clientHeight||s.doc.documentElement.offsetHeight,w:s.global.innerWidth||s.doc.documentElement.clientWidth||s.doc.documentElement.offsetWidth}},resize:function(t){this._appFooterHeight=this._fixedAppFooter?this._fixedAppFooter.offsetHeight:0,this.isLocalHeader&&(this.containerNode.style.marginTop=this.fixedHeaderHeight+"px");for(var e=0,o=this.domNode;o&&"BODY"!=o.tagName&&(o=this.findDisp(o),o);o=o.offsetParent)e+=o.offsetTop+l.getBorderExtents(o).h;var i,s=this.getScreenSize().h,r=s-e-this._appFooterHeight;if("inherit"===this.height)this.domNode.offsetParent&&(i=l.getContentBox(this.domNode.offsetParent).h-l.getBorderExtents(this.domNode).h+"px");else if("auto"===this.height){var n=this.domNode.offsetParent;if(n){this.domNode.style.height="0px";var a=n.getBoundingClientRect(),h=this.domNode.getBoundingClientRect(),c=a.bottom-this._appFooterHeight-this._parentPadBorderExtentsBottom;r=h.bottom>=c?s-(h.top-a.top)-this._appFooterHeight-this._parentPadBorderExtentsBottom:c-h.bottom}var d=Math.max(this.domNode.scrollHeight,this.containerNode.scrollHeight);i=(d?Math.min(d,r):r)+"px"}else this.height&&(i=this.height);i||(i=r+"px"),"-"!==i.charAt(0)&&"default"!==i&&(this.domNode.style.height=i),this._conn||this.onTouchEnd()},onFlickAnimationStart:function(t){t&&o.stop(t)},onFlickAnimationEnd:function(t){if(f("ios")&&this._keepInputCaretInActiveElement(),t){var e=t.animationName;if(e&&-1===e.indexOf("scrollableViewScroll2"))return void(-1!==e.indexOf("scrollableViewScroll0")?this._scrollBarNodeV&&r.remove(this._scrollBarNodeV,"mblScrollableScrollTo0"):-1!==e.indexOf("scrollableViewScroll1")?this._scrollBarNodeH&&r.remove(this._scrollBarNodeH,"mblScrollableScrollTo1"):(this._scrollBarNodeV&&(this._scrollBarNodeV.className=""),this._scrollBarNodeH&&(this._scrollBarNodeH.className="")));if(this._useTransformTransition||this._useTopLeft){var i=t.target;if(i===this._scrollBarV||i===this._scrollBarH){var s="mblScrollableScrollTo"+(i===this._scrollBarV?"0":"1");return void(r.contains(i,s)?r.remove(i,s):i.className="")}}t.srcElement&&o.stop(t)}if(this.stopAnimation(),this._bounce){var n=this,a=n._bounce;setTimeout(function(){n.slideTo(a,.3,"ease-out")},0),n._bounce=void 0}else this.hideScrollBar(),this.removeCover()},isFormElement:function(t){if(t&&1!==t.nodeType&&(t=t.parentNode),!t||1!==t.nodeType)return!1;var e=t.tagName;return"SELECT"===e||"INPUT"===e||"TEXTAREA"===e||"BUTTON"===e},onTouchStart:function(t){this.disableTouchScroll||this._conn&&(new Date).getTime()-this.startTime<500||(this._conn||(this._conn=[],this._conn.push(e.connect(s.doc,h.move,this,"onTouchMove")),this._conn.push(e.connect(s.doc,h.release,this,"onTouchEnd"))),this._aborted=!1,r.contains(this.containerNode,"mblScrollableScrollTo2")?this.abort():(this._scrollBarNodeV&&(this._scrollBarNodeV.className=""),this._scrollBarNodeH&&(this._scrollBarNodeH.className="")),this.touchStartX=t.touches?t.touches[0].pageX:t.clientX,this.touchStartY=t.touches?t.touches[0].pageY:t.clientY,this.startTime=(new Date).getTime(),this.startPos=this.getPos(),this._dim=this.getDim(),this._time=[0],this._posX=[this.touchStartX],this._posY=[this.touchStartY],this._locked=!1,this._moved=!1,this._preventDefaultInNextTouchMove=!0,this.isFormElement(t.target)||(this.propagatable?t.preventDefault():o.stop(t),this._preventDefaultInNextTouchMove=!1))},onTouchMove:function(t){if(!this._locked){if(this._preventDefaultInNextTouchMove){this._preventDefaultInNextTouchMove=!1;var e=c.getEnclosingWidget((t.targetTouches&&1===t.targetTouches.length?t.targetTouches[0]:t).target);e&&e.isInstanceOf(d)&&(this.propagatable?t.preventDefault():o.stop(t))}var i=t.touches?t.touches[0].pageX:t.clientX,s=t.touches?t.touches[0].pageY:t.clientY,r=i-this.touchStartX,n=s-this.touchStartY,a={x:this.startPos.x+r,y:this.startPos.y+n},l=this._dim;if(r=Math.abs(r),n=Math.abs(n),1==this._time.length){if(this.dirLock&&(this._v&&!this._h&&r>=this.threshold&&r>=n||(this._h||this._f)&&!this._v&&n>=this.threshold&&n>=r))return void(this._locked=!0);if(this._v&&this._h){if(n<this.threshold&&r<this.threshold)return}else if(this._v&&n<this.threshold||(this._h||this._f)&&r<this.threshold)return;this._moved=!0,this.addCover(),this.showScrollBar()}var h=this.weight;this._v&&this.constraint&&(a.y>0?a.y=Math.round(a.y*h):a.y<-l.o.h&&(l.c.h<l.d.h?a.y=Math.round(a.y*h):a.y=-l.o.h-Math.round((-l.o.h-a.y)*h))),(this._h||this._f)&&this.constraint&&(a.x>0?a.x=Math.round(a.x*h):a.x<-l.o.w&&(l.c.w<l.d.w?a.x=Math.round(a.x*h):a.x=-l.o.w-Math.round((-l.o.w-a.x)*h))),this.scrollTo(a);var f=10,m=this._time.length;if(m>=2){this._moved=!0;var u,_;this._v&&!this._h?(u=this._posY[m-1]-this._posY[m-2],_=s-this._posY[m-1]):!this._v&&this._h&&(u=this._posX[m-1]-this._posX[m-2],_=i-this._posX[m-1]),0>u*_&&(this._time=[this._time[m-1]],this._posX=[this._posX[m-1]],this._posY=[this._posY[m-1]],m=1)}m==f&&(this._time.shift(),this._posX.shift(),this._posY.shift()),this._time.push((new Date).getTime()-this.startTime),this._posX.push(i),this._posY.push(s)}},_keepInputCaretInActiveElement:function(){var t,e=s.doc.activeElement;!e||"INPUT"!=e.tagName&&"TEXTAREA"!=e.tagName||(t=e.value,"number"==e.type||"week"==e.type?(t?e.value=e.value+1:e.value="week"==e.type?"2013-W10":1,e.value=t):(e.value=e.value+" ",e.value=t))},onTouchEnd:function(t){if(!this._locked){var o=this._speed={x:0,y:0},i=this._dim,s=this.getPos(),r={};if(t){if(!this._conn)return;for(var n=0;n<this._conn.length;n++)e.disconnect(this._conn[n]);this._conn=null;var a=!1;if(this._aborted||this._moved||(a=!0),a){if(this.hideScrollBar(),this.removeCover(),f("touch")&&f("clicks-prevented")&&!this.isFormElement(t.target)){var l=t.target;1!=l.nodeType&&(l=l.parentNode),setTimeout(function(){v._sendClick(l,t)})}return}o=this._speed=this.getSpeed()}else{if(0==s.x&&0==s.y)return;i=this.getDim()}if(this._v&&(r.y=s.y+o.y),(this._h||this._f)&&(r.x=s.x+o.x),this.adjustDestination(r,s,i)!==!1){if(this.constraint){if("v"==this.scrollDir&&i.c.h<i.d.h)return void this.slideTo({y:0},.3,"ease-out");if("h"==this.scrollDir&&i.c.w<i.d.w)return void this.slideTo({x:0},.3,"ease-out");if(this._v&&this._h&&i.c.h<i.d.h&&i.c.w<i.d.w)return void this.slideTo({x:0,y:0},.3,"ease-out")}var h,c="ease-out",d={};if(this._v&&this.constraint&&(r.y>0?s.y>0?(h=.3,r.y=0):(r.y=Math.min(r.y,20),c="linear",d.y=0):-o.y>i.o.h- -s.y&&(s.y<-i.o.h?(h=.3,r.y=i.c.h<=i.d.h?0:-i.o.h):(r.y=Math.max(r.y,-i.o.h-20),c="linear",d.y=-i.o.h))),(this._h||this._f)&&this.constraint&&(r.x>0?s.x>0?(h=.3,r.x=0):(r.x=Math.min(r.x,20),c="linear",d.x=0):-o.x>i.o.w- -s.x&&(s.x<-i.o.w?(h=.3,r.x=i.c.w<=i.d.w?0:-i.o.w):(r.x=Math.max(r.x,-i.o.w-20),c="linear",d.x=-i.o.w))),this._bounce=void 0!==d.x||void 0!==d.y?d:void 0,void 0===h){var m,u;if(this._v&&this._h?(u=Math.sqrt(o.x*o.x+o.y*o.y),m=Math.sqrt(Math.pow(r.y-s.y,2)+Math.pow(r.x-s.x,2))):this._v?(u=o.y,m=r.y-s.y):this._h&&(u=o.x,m=r.x-s.x),0===m&&!t)return;h=0!==u?Math.abs(m/u):.01}this.slideTo(r,h,c)}}},adjustDestination:function(t,e,o){return!0},abort:function(){this._aborted=!0,this.scrollTo(this.getPos()),this.stopAnimation()},stopAnimation:function(){r.remove(this.containerNode,"mblScrollableScrollTo2"),this._scrollBarV&&(this._scrollBarV.className=""),this._scrollBarH&&(this._scrollBarH.className=""),(this._useTransformTransition||this._useTopLeft)&&(this.containerNode.style[m.name("transition")]="",this._scrollBarV&&(this._scrollBarV.style[m.name("transition")]=""),this._scrollBarH&&(this._scrollBarH.style[m.name("transition")]=""))},scrollIntoView:function(t,e,o){if(this._v){for(var i=this.containerNode,s=this.getDim().d.h,r=0,n=t;n!==i;n=n.offsetParent){if(!n||"BODY"===n.tagName)return;r+=n.offsetTop}var a=e?Math.max(s-i.offsetHeight,-r):Math.min(0,s-r-t.offsetHeight);o&&"number"==typeof o?this.slideTo({y:a},o,"ease-out"):this.scrollTo({y:a})}},getSpeed:function(){var t=0,e=0,o=this._time.length;if(o>=2&&(new Date).getTime()-this.startTime-this._time[o-1]<500){var i=this._posY[o-(o>3?2:1)]-this._posY[o-6>=0?o-6:0],s=this._posX[o-(o>3?2:1)]-this._posX[o-6>=0?o-6:0],r=this._time[o-(o>3?2:1)]-this._time[o-6>=0?o-6:0];e=this.calcSpeed(i,r),t=this.calcSpeed(s,r)}return{x:t,y:e}},calcSpeed:function(t,e){return 4*Math.round(t/e*100)},scrollTo:function(t,e,o){var i,s,r,n=!0;if(!this._aborted&&this._conn&&(this._dim||(this._dim=this.getDim()),s=t.y>0?t.y:0,r=this._dim.o.h+t.y<0?-1*(this._dim.o.h+t.y):0,i={bubbles:!1,cancelable:!1,x:t.x,y:t.y,beforeTop:s>0,beforeTopHeight:s,afterBottom:r>0,afterBottomHeight:r},n=this.onBeforeScroll(i)),n){var a=(o||this.containerNode).style;f("css3-animations")?this._useTopLeft?(a[m.name("transition")]="",this._v&&(a.top=t.y+"px"),(this._h||this._f)&&(a.left=t.x+"px")):(this._useTransformTransition&&(a[m.name("transition")]=""),a[m.name("transform")]=this.makeTranslateStr(t)):(this._v&&(a.top=t.y+"px"),(this._h||this._f)&&(a.left=t.x+"px")),f("ios")&&this._keepInputCaretInActiveElement(),e||this.scrollScrollBarTo(this.calcScrollBarPos(t)),i&&this.onAfterScroll(i)}},onBeforeScroll:function(t){return!0},onAfterScroll:function(t){},slideTo:function(t,e,o){this._runSlideAnimation(this.getPos(),t,e,o,this.containerNode,2),this.slideScrollBarTo(t,e,o)},makeTranslateStr:function(t){var e=this._v&&"number"==typeof t.y?t.y+"px":"0px",o=(this._h||this._f)&&"number"==typeof t.x?t.x+"px":"0px";return f("translate3d")?"translate3d("+o+","+e+",0px)":"translate("+o+","+e+")"},getPos:function(){if(f("css3-animations")){var t=s.doc.defaultView.getComputedStyle(this.containerNode,"");if(this._useTopLeft)return{x:parseInt(t.left)||0,y:parseInt(t.top)||0};var e=t[m.name("transform")];if(e&&0===e.indexOf("matrix")){var o=e.split(/[,\s\)]+/),i=0===e.indexOf("matrix3d")?12:4;return{y:o[i+1]-0,x:o[i]-0}}return{x:0,y:0}}var r=parseInt(this.containerNode.style.top)||0;return{y:r,x:this.containerNode.offsetLeft}},getDim:function(){var t={};return t.c={h:this.containerNode.offsetHeight,w:this.containerNode.offsetWidth},t.v={h:this.domNode.offsetHeight+this._appFooterHeight,w:this.domNode.offsetWidth},t.d={h:t.v.h-this.fixedHeaderHeight-this.fixedFooterHeight-this._appFooterHeight,w:t.v.w},t.o={h:t.c.h-t.v.h+this.fixedHeaderHeight+this.fixedFooterHeight+this._appFooterHeight,w:t.c.w-t.v.w},t},showScrollBar:function(){if(this.scrollBar){var t=this._dim;if(!("v"==this.scrollDir&&t.c.h<=t.d.h||"h"==this.scrollDir&&t.c.w<=t.d.w||this._v&&this._h&&t.c.h<=t.d.h&&t.c.w<=t.d.w)){var e=function(t,e){var o=t["_scrollBarNode"+e];if(!o){var i=n.create("div",null,t.domNode),s={position:"absolute",overflow:"hidden"};"V"==e?(s.right="2px",s.width="5px"):(s.bottom=(t.isLocalFooter?t.fixedFooterHeight:0)+2+"px",s.height="5px"),a.set(i,s),i.className="mblScrollBarWrapper",t["_scrollBarWrapper"+e]=i,o=n.create("div",null,i),a.set(o,m.add({opacity:.6,position:"absolute",backgroundColor:"#606060",fontSize:"1px",MozBorderRadius:"2px",zIndex:2147483647},{borderRadius:"2px",transformOrigin:"0 0"})),a.set(o,"V"==e?{width:"5px"}:{height:"5px"}),t["_scrollBarNode"+e]=o}return o};this._v&&!this._scrollBarV&&(this._scrollBarV=e(this,"V")),this._h&&!this._scrollBarH&&(this._scrollBarH=e(this,"H")),this.resetScrollBar()}}},hideScrollBar:function(){if(this.fadeScrollBar&&f("css3-animations")&&!v._fadeRule){var t=n.create("style",null,s.doc.getElementsByTagName("head")[0]);t.textContent=".mblScrollableFadeScrollBar{  "+m.name("animation-duration",!0)+": 1s;  "+m.name("animation-name",!0)+": scrollableViewFadeScrollBar;}@"+m.name("keyframes",!0)+" scrollableViewFadeScrollBar{  from { opacity: 0.6; }  to { opacity: 0; }}",v._fadeRule=t.sheet.cssRules[1]}if(this.scrollBar){var e=function(t,e){a.set(t,m.add({opacity:0},{animationDuration:""})),e._useTopLeft&&f("android")||(t.className="mblScrollableFadeScrollBar")};this._scrollBarV&&(e(this._scrollBarV,this),this._scrollBarV=null),this._scrollBarH&&(e(this._scrollBarH,this),this._scrollBarH=null)}},calcScrollBarPos:function(t){var e={},o=this._dim,i=function(t,e,o,i,s){var r=Math.round((i-e-8)/(i-s)*o);return-e+5>r&&(r=-e+5),r>t-5&&(r=t-5),r};return"number"==typeof t.y&&this._scrollBarV&&(e.y=i(this._scrollBarWrapperV.offsetHeight,this._scrollBarV.offsetHeight,t.y,o.d.h,o.c.h)),"number"==typeof t.x&&this._scrollBarH&&(e.x=i(this._scrollBarWrapperH.offsetWidth,this._scrollBarH.offsetWidth,t.x,o.d.w,o.c.w)),e},scrollScrollBarTo:function(t){this.scrollBar&&(this._v&&this._scrollBarV&&"number"==typeof t.y&&(f("css3-animations")?this._useTopLeft?a.set(this._scrollBarV,m.add({top:t.y+"px"},{transition:""})):(this._useTransformTransition&&(this._scrollBarV.style[m.name("transition")]=""),this._scrollBarV.style[m.name("transform")]=this.makeTranslateStr({y:t.y})):this._scrollBarV.style.top=t.y+"px"),this._h&&this._scrollBarH&&"number"==typeof t.x&&(f("css3-animations")?this._useTopLeft?a.set(this._scrollBarH,m.add({left:t.x+"px"},{transition:""})):(this._useTransformTransition&&(this._scrollBarH.style[m.name("transition")]=""),this._scrollBarH.style[m.name("transform")]=this.makeTranslateStr({x:t.x})):this._scrollBarH.style.left=t.x+"px"))},slideScrollBarTo:function(t,e,o){if(this.scrollBar){var i=this.calcScrollBarPos(this.getPos()),s=this.calcScrollBarPos(t);this._v&&this._scrollBarV&&this._runSlideAnimation({y:i.y},{y:s.y},e,o,this._scrollBarV,0),this._h&&this._scrollBarH&&this._runSlideAnimation({x:i.x},{x:s.x},e,o,this._scrollBarH,1)}},_runSlideAnimation:function(e,o,i,s,n,l){if(f("css3-animations"))if(this._useTopLeft)(void 0!==o.x||void 0!==o.y)&&(this.onFlickAnimationStart(),a.set(n,m.add({},{transitionProperty:void 0!==o.x&&void 0!==o.y?"top, left":void 0!==o.y?"top":"left",transitionDuration:i+"s",transitionTimingFunction:s})),setTimeout(function(){var t={};void 0!==o.x&&(t.left=o.x+"px"),void 0!==o.y&&(t.top=o.y+"px"),a.set(n,t)},0),r.add(n,"mblScrollableScrollTo"+l));else if(this._useTransformTransition)if(void 0===o.x&&(o.x=e.x),void 0===o.y&&(o.y=e.y),o.x!==e.x||o.y!==e.y){this.onFlickAnimationStart(),a.set(n,m.add({},{transitionProperty:m.name("transform"),transitionDuration:i+"s",transitionTimingFunction:s}));var h=this.makeTranslateStr(o);setTimeout(function(){a.set(n,m.add({},{transform:h}))},0),r.add(n,"mblScrollableScrollTo"+l)}else this.hideScrollBar(),this.removeCover();else this.setKeyframes(e,o,l),a.set(n,m.add({},{animationDuration:i+"s",animationTimingFunction:s})),r.add(n,"mblScrollableScrollTo"+l),2==l?this.scrollTo(o,!0,n):this.scrollScrollBarTo(o);else if(t.fx&&t.fx.easing&&i){var c=this;t.fx.slideTo({node:n,duration:1e3*i,left:o.x,top:o.y,easing:"ease-out"==s?t.fx.easing.quadOut:t.fx.easing.linear,onBegin:function(){2==l&&c.onFlickAnimationStart()},onEnd:function(){2==l&&c.onFlickAnimationEnd()}}).play()}else 2==l?(this.onFlickAnimationStart(),this.scrollTo(o,!1,n),this.onFlickAnimationEnd()):this.scrollScrollBarTo(o)},resetScrollBar:function(){var t=function(t,e,o,i,s,r){if(e){var n={};n[r?"top":"left"]=s+4+"px";var l=0>=o-8?1:o-8;n[r?"height":"width"]=l+"px",a.set(t,n);var h=Math.round(o*o/i);h=Math.min(Math.max(h-8,5),l),e.style[r?"height":"width"]=h+"px",a.set(e,{opacity:.6})}},e=this.getDim();t(this._scrollBarWrapperV,this._scrollBarV,e.d.h,e.c.h,this.fixedHeaderHeight,!0),t(this._scrollBarWrapperH,this._scrollBarH,e.d.w,e.c.w,0),this.createMask()},createMask:function(){if(f("mask-image")){if(this._scrollBarWrapperV){var t=this._scrollBarWrapperV.offsetHeight;u.createRoundMask(this._scrollBarWrapperV,0,0,0,0,5,t,2,2,.5)}if(this._scrollBarWrapperH){var e=this._scrollBarWrapperH.offsetWidth;u.createRoundMask(this._scrollBarWrapperH,0,0,0,0,e,5,2,2,.5)}}},flashScrollBar:function(){if(!this.disableFlashScrollBar&&this.domNode&&(this._dim=this.getDim(),!(this._dim.d.h<=0))){this.showScrollBar();var t=this;setTimeout(function(){t.hideScrollBar()},300)}},addCover:function(){f("touch")||this.noCover||(v._cover?v._cover.style.display="":(v._cover=n.create("div",null,s.doc.body),v._cover.className="mblScrollableCover",a.set(v._cover,{backgroundColor:"#ffff00",opacity:0,position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",zIndex:2147483647}),this._ch.push(e.connect(v._cover,h.press,this,"onTouchEnd"))),this.setSelectable(v._cover,!1),this.setSelectable(this.domNode,!1))},removeCover:function(){!f("touch")&&v._cover&&(v._cover.style.display="none",this.setSelectable(v._cover,!0),this.setSelectable(this.domNode,!0))},setKeyframes:function(t,e,o){if(v._rule||(v._rule=[]),!v._rule[o]){var i=n.create("style",null,s.doc.getElementsByTagName("head")[0]);i.textContent=".mblScrollableScrollTo"+o+"{"+m.name("animation-name",!0)+": scrollableViewScroll"+o+";}@"+m.name("keyframes",!0)+" scrollableViewScroll"+o+"{}",v._rule[o]=i.sheet.cssRules[1]}var r=v._rule[o];r&&(t&&(r.deleteRule(f("webkit")?"from":0),(r.insertRule||r.appendRule).call(r,"from { "+m.name("transform",!0)+": "+this.makeTranslateStr(t)+"; }")),e&&(void 0===e.x&&(e.x=t.x),void 0===e.y&&(e.y=t.y),r.deleteRule(f("webkit")?"to":1),(r.insertRule||r.appendRule).call(r,"to { "+m.name("transform",!0)+": "+this.makeTranslateStr(e)+"; }")))},setSelectable:function(t,e){if(t.style.KhtmlUserSelect=e?"auto":"none",t.style.MozUserSelect=e?"":"none",t.onselectstart=e?null:function(){return!1},f("ie")){t.unselectable=e?"":"on";for(var o=t.getElementsByTagName("*"),i=0;i<o.length;i++)o[i].unselectable=e?"":"on"}}}),x=f("dojo-bidi")?_("dojox.mobile.Scrollable",[x,p]):x,i.setObject("dojox.mobile.scrollable",x),x});