define("3rdlibs/fastclick",["dojo","dijit","dojox"],function(e,t,n){!function(e){function t(t){if(t.targetTouches.length>1)return!0;h=t.target;var n=e(h).closest(".nofastclick");if(n.length>0)return!0;if(S){var o=window.getSelection();if(o.rangeCount&&!o.isCollapsed)return!0;if(t.targetTouches[0].identifier===L)return event.preventDefault(),!1;L=t.targetTouches[0].identifier}return m=!0,f=t.timeStamp,g=t.targetTouches[0].pageX,b=t.targetTouches[0].pageY,t.timeStamp-v<0&&(v=t.timeStamp),t.timeStamp-v<200&&t.preventDefault(),!0}function n(e){return m?(k=e.changedTouches[0].pageX,E=e.changedTouches[0].pageY,(Math.abs(k-g)>y||Math.abs(E-b)>y)&&(h=null,m=!1),!0):!0}function o(t){if(!m)return!0;if(t.timeStamp-v<100)return p=!0,!0;v=t.timeStamp,m=!1;var n=h.tagName.toLowerCase();if("label"==n){var o=s(h);if(o){var r=e(o);if("checkbox"==r.attr("type")||"radio"==r.attr("type")?r.attr("checked")?r.removeAttr("checked"):r.attr("checked","checked"):e(o).focus(),w)return!1;h=o}}else if(i(h)){if(t.timeStamp-f>100)return h=null,!1;var a;return S&&h.setSelectionRange&&0!==h.type.indexOf("date")&&"time"!==h.type?(a=h.value.length,h.setSelectionRange(a,a)):h.focus(),"select"!==n&&(h=null,t.preventDefault()),!1}return f=0,u(h)||(t.preventDefault(),d(h,t)),!1}function r(e){m=!1,h=null}function a(t){var n=t.target,o=e(n).closest(".nofastclick");return o.length>0?!0:h?t.touchEvent?!0:t.cancelable&&(!u(h)||p)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0}function c(e){if(m)return m=!1,h=null,!0;if("submit"===e.target.type&&0===e.detail)return!0;var t=a(e);return t||(h=null),t}function u(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(S&&"file"===e.type||e.disabled)return!0;break;case"video":return!0}return/\bneedclick\b/.test(e.className)}function i(e){switch(e.nodeName.toLowerCase()){case"textarea":case"select":return!0;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedfocus\b/.test(e.className)}}function s(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")}function d(e,t){var n,o;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),o=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent("click",!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.touchEvent=!0,e.dispatchEvent(n)}function l(){return"undefined"==typeof window.ontouchstart?!1:!0}var m=!1,f=0,v=0,p=!1,h=null,g=0,b=0,k=0,E=0,y=4,w=navigator.userAgent.indexOf("Android")>0,S=/iP(ad|hone|od)/.test(navigator.userAgent),L=0;S&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);e.needFocus=i,e.bindFastClick=function(){return l()?void e(document).ready(function(){w&&(document.addEventListener("mouseover",a,!0),document.addEventListener("mousedown",a,!0),document.addEventListener("mouseup",a,!0)),document.addEventListener("click",c,!0),e(document).on("touchstart",t).on("touchmove",n).on("touchend",o).on("touchcancel",r)}):!0},e.unbindFastClick=function(){return l()?(w&&(document.removeEventListener("mouseover",a,!0),document.removeEventListener("mousedown",a,!0),document.removeEventListener("mouseup",a,!0)),document.removeEventListener("click",c,!0),void e(document).off("touchstart",t).off("touchmove",n).off("touchend",o).off("touchcancel",r)):!0}}(jQuery)});