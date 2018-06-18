define("dojox/css3/transition",["dojo/_base/lang","dojo/_base/array","dojo/Deferred","dojo/when","dojo/promise/all","dojo/on","dojo/sniff"],function(t,e,n,i,r,o,a){var s="transitionend",d="t",f="translate3d(",c=",0,0)";a("webkit")?(d="WebkitT",s="webkitTransitionEnd"):a("mozilla")&&(d="MozT",f="translateX(",c=")");var l=function(e){var i={startState:{},endState:{},node:null,duration:250,"in":!0,direction:1,autoClear:!0};t.mixin(this,i),t.mixin(this,e),this.deferred||(this.deferred=new n)};t.extend(l,{play:function(){l.groupedPlay([this])},_applyState:function(t){var e=this.node.style;for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},initState:function(){this.node.style[d+"ransitionProperty"]="none",this.node.style[d+"ransitionDuration"]="0ms",this._applyState(this.startState)},_beforeStart:function(){"none"===this.node.style.display&&(this.node.style.display=""),this.beforeStart()},_beforeClear:function(){this.node.style[d+"ransitionProperty"]="",this.node.style[d+"ransitionDuration"]="",this["in"]!==!0&&(this.node.style.display="none"),this.beforeClear()},_onAfterEnd:function(){this.deferred.resolve(this.node),this.node.id&&l.playing[this.node.id]===this.deferred&&delete l.playing[this.node.id],this.onAfterEnd()},beforeStart:function(){},beforeClear:function(){},onAfterEnd:function(){},start:function(){this._beforeStart(),this._startTime=(new Date).getTime(),this._cleared=!1;var t=this;t.node.style[d+"ransitionProperty"]="all",t.node.style[d+"ransitionDuration"]=t.duration+"ms",o.once(t.node,s,function(){t.clear()}),this._applyState(this.endState)},clear:function(){this._cleared||(this._cleared=!0,this._beforeClear(),this._removeState(this.endState),this._onAfterEnd())},_removeState:function(t){var e=this.node.style;for(var n in t)t.hasOwnProperty(n)&&(e[n]="")}}),l.slide=function(t,e){var n=new l(e);n.node=t;var i="0",r="0";return n["in"]?i=1===n.direction?"100%":"-100%":r=1===n.direction?"-100%":"100%",n.startState[d+"ransform"]=f+i+c,n.endState[d+"ransform"]=f+r+c,n},l.fade=function(e,n){var i=new l(n);i.node=e;var r="0",o="0";return i["in"]?o="1":r="1",t.mixin(i,{startState:{opacity:r},endState:{opacity:o}}),i},l.flip=function(e,n){var i=new l(n);return i.node=e,i["in"]?(t.mixin(i,{startState:{opacity:"0"},endState:{opacity:"1"}}),i.startState[d+"ransform"]="scale(0,0.8) skew(0,-30deg)",i.endState[d+"ransform"]="scale(1,1) skew(0,0)"):(t.mixin(i,{startState:{opacity:"1"},endState:{opacity:"0"}}),i.startState[d+"ransform"]="scale(1,1) skew(0,0)",i.endState[d+"ransform"]="scale(0,0.8) skew(0,30deg)"),i};var u=function(t){var n=[];return e.forEach(t,function(t){t.id&&l.playing[t.id]&&n.push(l.playing[t.id])}),r(n)};return l.getWaitingList=u,l.groupedPlay=function(t){var n=e.filter(t,function(t){return t.node}),r=u(n);e.forEach(t,function(t){t.node.id&&(l.playing[t.node.id]=t.deferred)}),i(r,function(){e.forEach(t,function(t){t.initState()}),setTimeout(function(){e.forEach(t,function(t){t.start()}),o.once(t[t.length-1].node,s,function(){for(var e,n=0;n<t.length-1;n++)0===t[n].deferred.fired||t[n]._cleared||(e=(new Date).getTime()-t[n]._startTime,e>=t[n].duration&&t[n].clear())}),setTimeout(function(){for(var e,n=0;n<t.length;n++)0===t[n].deferred.fired||t[n]._cleared||(e=(new Date).getTime()-t[n]._startTime,e>=t[n].duration&&t[n].clear())},t[0].duration+50)},33)})},l.chainedPlay=function(n){var r=e.filter(n,function(t){return t.node}),o=u(r);e.forEach(n,function(t){t.node.id&&(l.playing[t.node.id]=t.deferred)}),i(o,function(){e.forEach(n,function(t){t.initState()});for(var i=1,r=n.length;r>i;i++)n[i-1].deferred.then(t.hitch(n[i],function(){this.start()}));setTimeout(function(){n[0].start()},33)})},l.playing={},l});