define("dojo/DeferredList",["./_base/kernel","./_base/Deferred","./_base/array"],function(e,r,t){return e.DeferredList=function(e,n,o,f,i){var s=[];r.call(this);var a=this;0!==e.length||n||this.resolve([0,[]]);var u=0;t.forEach(e,function(r,t){function i(r,n){s[t]=[r,n],u++,u===e.length&&a.resolve(s)}r.then(function(e){n?a.resolve([t,e]):i(!0,e)},function(e){if(o?a.reject(e):i(!1,e),f)return null;throw e})})},e.DeferredList.prototype=new r,e.DeferredList.prototype.gatherResults=function(r){var n=new e.DeferredList(r,!1,!0,!1);return n.addCallback(function(e){var r=[];return t.forEach(e,function(e){r.push(e[1])}),r}),n},e.DeferredList});