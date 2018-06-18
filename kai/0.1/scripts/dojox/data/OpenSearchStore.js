define("dojox/data/OpenSearchStore",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/xhr","dojo/_base/array","dojo/_base/window","dojo/query","dojo/data/util/simpleFetch","dojox/xml/parser"],function(e,t,r,n,s,a,o,i,u){e.experimental("dojox.data.OpenSearchStore");var c=r("dojox.data.OpenSearchStore",null,{constructor:function(e){e&&(this.label=e.label,this.url=e.url,this.itemPath=e.itemPath,"urlPreventCache"in e&&(this.urlPreventCache=e.urlPreventCache?!0:!1));var t=n.get({url:this.url,handleAs:"xml",sync:!0,preventCache:this.urlPreventCache});t.addCallback(this,"_processOsdd"),t.addErrback(function(){throw new Error("Unable to load OpenSearch Description document from ".args.url)})},url:"",itemPath:"",_storeRef:"_S",urlElement:null,iframeElement:null,urlPreventCache:!0,ATOM_CONTENT_TYPE:3,ATOM_CONTENT_TYPE_STRING:"atom",RSS_CONTENT_TYPE:2,RSS_CONTENT_TYPE_STRING:"rss",XML_CONTENT_TYPE:1,XML_CONTENT_TYPE_STRING:"xml",_assertIsItem:function(e){if(!this.isItem(e))throw new Error("dojox.data.OpenSearchStore: a function was passed an item argument that was not an item")},_assertIsAttribute:function(e){if("string"!=typeof e)throw new Error("dojox.data.OpenSearchStore: a function was passed an attribute argument that was not an attribute name string")},getFeatures:function(){return{"dojo.data.api.Read":!0}},getValue:function(e,t,r){var n=this.getValues(e,t);return n?n[0]:r},getAttributes:function(e){return["content"]},hasAttribute:function(e,t){return this.getValue(e,t)?!0:!1},isItemLoaded:function(e){return this.isItem(e)},loadItem:function(e){},getLabel:function(e){},getLabelAttributes:function(e){return null},containsValue:function(e,t,r){for(var n=this.getValues(e,t),s=0;s<n.length;s++)if(n[s]===r)return!0;return!1},getValues:function(e,t){this._assertIsItem(e),this._assertIsAttribute(t);var r=this.processItem(e,t);return r?[r]:void 0},isItem:function(e){return e&&e[this._storeRef]===this?!0:!1},close:function(e){},process:function(e){return this["_processOSD"+this.contentType](e)},processItem:function(e,t){return this["_processItem"+this.contentType](e.node,t)},_createSearchUrl:function(e){var t=this.urlElement.attributes.getNamedItem("template").nodeValue,r=(this.urlElement.attributes,t.indexOf("{searchTerms}"));return t=t.substring(0,r)+e.query.searchTerms+t.substring(r+13),s.forEach([{name:"count",test:e.count,def:"10"},{name:"startIndex",test:e.start,def:this.urlElement.attributes.getNamedItem("indexOffset")?this.urlElement.attributes.getNamedItem("indexOffset").nodeValue:0},{name:"startPage",test:e.startPage,def:this.urlElement.attributes.getNamedItem("pageOffset")?this.urlElement.attributes.getNamedItem("pageOffset").nodeValue:0},{name:"language",test:e.language,def:"*"},{name:"inputEncoding",test:e.inputEncoding,def:"UTF-8"},{name:"outputEncoding",test:e.outputEncoding,def:"UTF-8"}],function(e){t=t.replace("{"+e.name+"}",e.test||e.def),t=t.replace("{"+e.name+"?}",e.test||e.def)}),t},_fetchItems:function(e,t,r){e.query||(e.query={});var s=this,a=this._createSearchUrl(e),o={url:a,preventCache:this.urlPreventCache},i=n.get(o);i.addErrback(function(t){r(t,e)}),i.addCallback(function(r){var n=[];if(r){n=s.process(r);for(var a=0;a<n.length;a++)n[a]={node:n[a]},n[a][s._storeRef]=s}t(n,e)})},_processOSDxml:function(e){var t=a.doc.createElement("div");return t.innerHTML=e,o(this.itemPath,t)},_processItemxml:function(e,t){return"content"===t?e.innerHTML:void 0},_processOSDatom:function(e){return this._processOSDfeed(e,"entry")},_processItematom:function(e,t){return this._processItemfeed(e,t,"content")},_processOSDrss:function(e){return this._processOSDfeed(e,"item")},_processItemrss:function(e,t){return this._processItemfeed(e,t,"description")},_processOSDfeed:function(e,t){e=dojox.xml.parser.parse(e);for(var r=[],n=e.getElementsByTagName(t),s=0;s<n.length;s++)r.push(n.item(s));return r},_processItemfeed:function(e,t,r){if("content"===t){var n=e.getElementsByTagName(r).item(0);return this._getNodeXml(n,!0)}},_getNodeXml:function(e,t){var r;switch(e.nodeType){case 1:var n=[];if(!t){n.push("<"+e.tagName);var s;for(r=0;r<e.attributes.length;r++)s=e.attributes.item(r),n.push(" "+s.nodeName+'="'+s.nodeValue+'"');n.push(">")}for(r=0;r<e.childNodes.length;r++)n.push(this._getNodeXml(e.childNodes.item(r)));return t||n.push("</"+e.tagName+">\n"),n.join("");case 3:case 4:return e.nodeValue}},_processOsdd:function(e){var t,r,n=e.getElementsByTagName("Url"),s=[];for(r=0;r<n.length;r++)switch(t=n[r].attributes.getNamedItem("type").nodeValue){case"application/rss+xml":s[r]=this.RSS_CONTENT_TYPE;break;case"application/atom+xml":s[r]=this.ATOM_CONTENT_TYPE;break;default:s[r]=this.XML_CONTENT_TYPE}var a=0,o=s[0];for(r=1;r<n.length;r++)s[r]>o&&(a=r,o=s[r]);var i=n[a].nodeName.toLowerCase();if("url"==i){n[a].attributes;switch(this.urlElement=n[a],s[a]){case this.ATOM_CONTENT_TYPE:this.contentType=this.ATOM_CONTENT_TYPE_STRING;break;case this.RSS_CONTENT_TYPE:this.contentType=this.RSS_CONTENT_TYPE_STRING;break;case this.XML_CONTENT_TYPE:this.contentType=this.XML_CONTENT_TYPE_STRING}}}});return t.extend(c,i)});