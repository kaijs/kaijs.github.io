define("dojo/NodeList-dom",["./_base/kernel","./query","./_base/array","./_base/lang","./dom-class","./dom-construct","./dom-geometry","./dom-attr","./dom-style"],function(t,e,r,n,i,o,a,s,l){function u(t){return function(e,r,n){return 2==arguments.length?t["string"==typeof r?"get":"set"](e,r):t.set(e,r,n)}}var f=function(t){return 1==t.length&&"string"==typeof t[0]},p=function(t){var e=t.parentNode;e&&e.removeChild(t)},h=e.NodeList,c=h._adaptWithCondition,d=h._adaptAsForEach,m=h._adaptAsMap;return n.extend(h,{_normalize:function(e,r){var i=e.parse===!0;if("string"==typeof e.template){var a=e.templateFunc||t.string&&t.string.substitute;e=a?a(e.template,e):e}var s=typeof e;return"string"==s||"number"==s?(e=o.toDom(e,r&&r.ownerDocument),e=11==e.nodeType?n._toArray(e.childNodes):[e]):n.isArrayLike(e)?n.isArray(e)||(e=n._toArray(e)):e=[e],i&&(e._runParse=!0),e},_cloneNode:function(t){return t.cloneNode(!0)},_place:function(e,r,n,i){if(1==r.nodeType||"only"!=n)for(var a,s=r,l=e.length,u=l-1;u>=0;u--){var f=i?this._cloneNode(e[u]):e[u];if(e._runParse&&t.parser&&t.parser.parse)for(a||(a=s.ownerDocument.createElement("div")),a.appendChild(f),t.parser.parse(a),f=a.firstChild;a.firstChild;)a.removeChild(a.firstChild);u==l-1?o.place(f,s,n):s.parentNode.insertBefore(f,s),s=f}},position:m(a.position),attr:c(u(s),f),style:c(u(l),f),addClass:d(i.add),removeClass:d(i.remove),toggleClass:d(i.toggle),replaceClass:d(i.replace),empty:d(o.empty),removeAttr:d(s.remove),marginBox:m(a.getMarginBox),place:function(t,r){var n=e(t)[0];return this.forEach(function(t){o.place(t,n,r)})},orphan:function(t){return(t?e._filterResult(this,t):this).forEach(p)},adopt:function(t,r){return e(t).place(this[0],r)._stash(this)},query:function(t){if(!t)return this;var r=new h;return this.map(function(n){e(t,n).forEach(function(t){void 0!==t&&r.push(t)})}),r._stash(this)},filter:function(t){var n=arguments,i=this,o=0;if("string"==typeof t){if(i=e._filterResult(this,n[0]),1==n.length)return i._stash(this);o=1}return this._wrap(r.filter(i,n[o],n[o+1]),this)},addContent:function(t,e){t=this._normalize(t,this[0]);for(var r,n=0;r=this[n];n++)t.length?this._place(t,r,e,n>0):o.empty(r);return this}}),h});