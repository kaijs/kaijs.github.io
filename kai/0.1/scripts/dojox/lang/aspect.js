define("dojox/lang/aspect",["dojo","dijit","dojox"],function(e,n,r){e.provide("dojox.lang.aspect"),function(){var n,t=e,i=r.lang.aspect,a=Array.prototype,o=[],d=function(){this.next_before=this.prev_before=this.next_around=this.prev_around=this.next_afterReturning=this.prev_afterReturning=this.next_afterThrowing=this.prev_afterThrowing=this,this.counter=0};t.extend(d,{add:function(e){var n=t.isFunction(e),r={advice:e,dynamic:n};return this._add(r,"before","",n,e),this._add(r,"around","",n,e),this._add(r,"after","Returning",n,e),this._add(r,"after","Throwing",n,e),++this.counter,r},_add:function(e,n,r,t,i){var a=n+r;if(t||i[n]||r&&i[a]){var o="next_"+a,d="prev_"+a;(e[d]=this[d])[o]=e,(e[o]=this)[d]=e}},remove:function(e){this._remove(e,"before"),this._remove(e,"around"),this._remove(e,"afterReturning"),this._remove(e,"afterThrowing"),--this.counter},_remove:function(e,n){var r="next_"+n,t="prev_"+n;e[r]&&(e[r][t]=e[t],e[t][r]=e[r])},isEmpty:function(){return!this.counter}});var s=function(){return function(){var e,r,t,d,s,u=arguments.callee,c=u.advices;n&&o.push(n),n={instance:this,joinPoint:u,depth:o.length,around:c.prev_around,dynAdvices:[],dynIndex:0};try{for(r=c.prev_before;r!=c;r=r.prev_before)r.dynamic?(n.dynAdvices.push(t=new r.advice(n)),(s=t.before)&&s.apply(t,arguments)):(s=r.advice,s.before.apply(s,arguments));try{e=(c.prev_around==c?u.target:i.proceed).apply(this,arguments)}catch(d){for(n.dynIndex=n.dynAdvices.length,r=c.next_afterThrowing;r!=c;r=r.next_afterThrowing)t=r.dynamic?n.dynAdvices[--n.dynIndex]:r.advice,(s=t.afterThrowing)&&s.call(t,d),(s=t.after)&&s.call(t);throw d}for(n.dynIndex=n.dynAdvices.length,r=c.next_afterReturning;r!=c;r=r.next_afterReturning)t=r.dynamic?n.dynAdvices[--n.dynIndex]:r.advice,(s=t.afterReturning)&&s.call(t,e),(s=t.after)&&s.call(t);var f=u._listeners;for(r in f)r in a||f[r].apply(this,arguments)}finally{for(r=0;r<n.dynAdvices.length;++r)t=n.dynAdvices[r],t.destroy&&t.destroy();n=o.length?o.pop():null}return e}};i.advise=function(e,n,r){"object"!=typeof e&&(e=e.prototype);var a=[];n instanceof Array||(n=[n]);for(var o=0;o<n.length;++o){var d=n[o];if(d instanceof RegExp)for(var s in e)t.isFunction(e[s])&&d.test(s)&&a.push(s);else t.isFunction(e[d])&&a.push(d)}return t.isArray(r)||(r=[r]),i.adviseRaw(e,a,r)},i.adviseRaw=function(e,n,r){if(!n.length||!r.length)return null;for(var t={},i=r.length,a=n.length-1;a>=0;--a){var o=n[a],u=e[o],c=new Array(i),f=u.advices;if(!f){var v=e[o]=s();v.target=u.target||u,v.targetName=o,v._listeners=u._listeners||[],v.advices=new d,f=v.advices}for(var h=0;i>h;++h)c[h]=f.add(r[h]);t[o]=c}return[e,t]},i.unadvise=function(e){if(e){var n=e[0],r=e[1];for(var i in r){for(var o=n[i],d=o.advices,s=r[i],u=s.length-1;u>=0;--u)d.remove(s[u]);if(d.isEmpty()){var c=!0,f=o._listeners;if(f.length)for(u in f)if(!(u in a)){c=!1;break}if(c)n[i]=o.target;else{var v=n[i]=t._listener.getDispatcher();v.target=o.target,v._listeners=f}}}}},i.getContext=function(){return n},i.getContextStack=function(){return o},i.proceed=function(){for(var e=n.joinPoint,r=e.advices,t=n.around;t!=r;t=n.around){if(n.around=t.prev_around,!t.dynamic)return t.advice.around.apply(t.advice,arguments);var i=n.dynAdvices[n.dynIndex++],a=i.around;if(a)return a.apply(i,arguments)}return e.target.apply(n.instance,arguments)}}()});