define("dojox/wire/ml/util",["dojo","dijit","dojox","dojo/require!dojox/xml/parser,dojox/wire/Wire"],function(e,t,i){e.provide("dojox.wire.ml.util"),e.require("dojox.xml.parser"),e.require("dojox.wire.Wire"),i.wire.ml._getValue=function(r,n){if(r){var l=void 0;if(n&&r.length>=9&&"arguments"==r.substring(0,9))return l=r.substring(9),new i.wire.Wire({property:l}).getValue(n);var s=r.indexOf(".");s>=0&&(l=r.substring(s+1),r=r.substring(0,s));var o=t.byId(r)||e.byId(r)||e.getObject(r);if(o)return l?new i.wire.Wire({object:o,property:l}).getValue():o}},i.wire.ml._setValue=function(e,t){if(e){var r=e.indexOf(".");if(!(0>r)){var n=this._getValue(e.substring(0,r));if(n){var l=e.substring(r+1);new i.wire.Wire({object:n,property:l}).setValue(t)}}}},e.declare("dojox.wire.ml.XmlElement",null,{constructor:function(t){e.isString(t)&&(t=this._getDocument().createElement(t)),this.element=t},getPropertyValue:function(e){var t=void 0;if(!this.element)return t;if(!e)return t;if("@"==e.charAt(0)){var r=e.substring(1);t=this.element.getAttribute(r)}else if("text()"==e){var n=this.element.firstChild;n&&(t=n.nodeValue)}else{for(var l=[],s=0;s<this.element.childNodes.length;s++){var o=this.element.childNodes[s];1===o.nodeType&&o.nodeName==e&&l.push(new i.wire.ml.XmlElement(o))}l.length>0&&(t=1===l.length?l[0]:l)}return t},setPropertyValue:function(t,r){var n,l;if(this.element&&t)if("@"==t.charAt(0)){var s=t.substring(1);r?this.element.setAttribute(s,r):this.element.removeAttribute(s)}else if("text()"==t){for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);r&&(l=this._getDocument().createTextNode(r),this.element.appendChild(l))}else{var o,m=null;for(n=this.element.childNodes.length-1;n>=0;n--)o=this.element.childNodes[n],1===o.nodeType&&o.nodeName==t&&(m||(m=o.nextSibling),this.element.removeChild(o));if(r)if(e.isArray(r))for(n in r){var u=r[n];u.element&&this.element.insertBefore(u.element,m)}else r instanceof i.wire.ml.XmlElement?r.element&&this.element.insertBefore(r.element,m):(o=this._getDocument().createElement(t),l=this._getDocument().createTextNode(r),o.appendChild(l),this.element.insertBefore(o,m))}},toString:function(){var e="";if(this.element){var t=this.element.firstChild;t&&(e=t.nodeValue)}return e},toObject:function(){if(!this.element)return null;var t,r="",n={},l=0;for(t=0;t<this.element.childNodes.length;t++){var s=this.element.childNodes[t];if(1===s.nodeType){l++;var o=new i.wire.ml.XmlElement(s).toObject(),m=s.nodeName,u=n[m];u?e.isArray(u)?u.push(o):n[m]=[u,o]:n[m]=o}else(3===s.nodeType||4===s.nodeType)&&(r+=s.nodeValue)}var h=0;if(1===this.element.nodeType)for(h=this.element.attributes.length,t=0;h>t;t++){var d=this.element.attributes[t];n["@"+d.nodeName]=d.nodeValue}if(0===l){if(0===h)return r;n["text()"]=r}return n},_getDocument:function(){return this.element?9==this.element.nodeType?this.element:this.element.ownerDocument:i.xml.parser.parse()}})});