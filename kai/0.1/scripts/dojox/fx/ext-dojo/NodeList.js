define("dojox/fx/ext-dojo/NodeList",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/fx","dojox/fx","dojo/NodeList-fx"],function(o,e,i,n,t){return o.experimental("dojox.fx.ext-dojo.NodeList"),e.extend(t,{sizeTo:function(o){return this._anim(n,"sizeTo",o)},slideBy:function(o){return this._anim(n,"slideBy",o)},highlight:function(o){return this._anim(n,"highlight",o)},fadeTo:function(o){return this._anim(i,"_fade",o)},wipeTo:function(o){return this._anim(n,"wipeTo",o)}}),t});