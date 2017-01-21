define("dojo/NodeList-manipulate",["./query","./_base/lang","./_base/array","./dom-construct","./dom-attr","./NodeList-dom"],function(e,t,n,r,i){function o(e){for(;e.childNodes[0]&&1==e.childNodes[0].nodeType;)e=e.childNodes[0];return e}function s(e,t){return"string"==typeof e?(e=r.toDom(e,t&&t.ownerDocument),11==e.nodeType&&(e=e.childNodes[0])):1==e.nodeType&&e.parentNode&&(e=e.cloneNode(!1)),e}var h=e.NodeList;return t.extend(h,{_placeMultiple:function(t,n){for(var i="string"==typeof t||t.nodeType?e(t):t,o=[],s=0;s<i.length;s++)for(var h,a=i[s],l=this.length,p=l-1;h=this[p];p--)s>0&&(h=this._cloneNode(h),o.unshift(h)),p==l-1?r.place(h,a,n):a.parentNode.insertBefore(h,a),a=h;return o.length&&(o.unshift(0),o.unshift(this.length-1),Array.prototype.splice.apply(this,o)),this},innerHTML:function(e){return arguments.length?this.addContent(e,"only"):this[0].innerHTML},text:function(e){if(arguments.length){for(var t,n=0;t=this[n];n++)1==t.nodeType&&i.set(t,"textContent",e);return this}var r="";for(n=0;t=this[n];n++)r+=i.get(t,"textContent");return r},val:function(e){if(arguments.length){for(var r,i=t.isArray(e),o=0;r=this[o];o++){var s=r.nodeName.toUpperCase(),h=r.type,a=i?e[o]:e;if("SELECT"==s)for(var l=r.options,p=0;p<l.length;p++){var u=l[p];r.multiple?u.selected=-1!=n.indexOf(e,u.value):u.selected=u.value==a}else"checkbox"==h||"radio"==h?r.checked=r.value==a:r.value=a}return this}if(r=this[0],r&&1==r.nodeType){if(e=r.value||"","SELECT"==r.nodeName.toUpperCase()&&r.multiple){for(e=[],l=r.options,p=0;p<l.length;p++)u=l[p],u.selected&&e.push(u.value);e.length||(e=null)}return e}},append:function(e){return this.addContent(e,"last")},appendTo:function(e){return this._placeMultiple(e,"last")},prepend:function(e){return this.addContent(e,"first")},prependTo:function(e){return this._placeMultiple(e,"first")},after:function(e){return this.addContent(e,"after")},insertAfter:function(e){return this._placeMultiple(e,"after")},before:function(e){return this.addContent(e,"before")},insertBefore:function(e){return this._placeMultiple(e,"before")},remove:h.prototype.orphan,wrap:function(e){if(this[0]){e=s(e,this[0]);for(var t,n=0;t=this[n];n++){var r=this._cloneNode(e);t.parentNode&&t.parentNode.replaceChild(r,t);var i=o(r);i.appendChild(t)}}return this},wrapAll:function(e){if(this[0]){e=s(e,this[0]),this[0].parentNode.replaceChild(e,this[0]);for(var t,n=o(e),r=0;t=this[r];r++)n.appendChild(t)}return this},wrapInner:function(e){if(this[0]){e=s(e,this[0]);for(var n=0;n<this.length;n++){var r=this._cloneNode(e);this._wrap(t._toArray(this[n].childNodes),null,this._NodeListCtor).wrapAll(r)}}return this},replaceWith:function(e){e=this._normalize(e,this[0]);for(var t,n=0;t=this[n];n++)this._place(e,t,"before",n>0),t.parentNode.removeChild(t);return this},replaceAll:function(t){for(var n,r=e(t),i=this._normalize(this,this[0]),o=0;n=r[o];o++)this._place(i,n,"before",o>0),n.parentNode.removeChild(n);return this},clone:function(){for(var e=[],t=0;t<this.length;t++)e.push(this._cloneNode(this[t]));return this._wrap(e,this,this._NodeListCtor)}}),h.prototype.html||(h.prototype.html=h.prototype.innerHTML),h});