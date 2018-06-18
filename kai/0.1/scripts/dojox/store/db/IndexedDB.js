define("dojox/store/db/IndexedDB",["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/when","dojo/promise/all","dojo/store/util/SimpleQueryEngine","dojo/store/util/QueryResults"],function(t,e,n,r,o,i,a){function u(t){var e=new n;return t.onsuccess=function(t){e.resolve(t.target.result)},t.onerror=function(){t.error.message=t.webkitErrorMessage,e.reject(t.error)},e.promise}function c(t,e,n){if(h||l.length){if(t&&(l.push({cursor:t,priority:e,retry:n}),l.sort(function(t,e){return t.priority>e.priority?1:-1})),h>=d)return;var r=l.pop();t=r&&r.cursor}if(t)try{t["continue"](),h++}catch(o){if("TransactionInactiveError"!==o.name&&0!==o.name||!r)throw o;r.retry()}}function s(){return!0}function f(t){function e(e,i){return r?e&&n.then(function(t){t.forEach(e,i)}):(e&&o.push(e),n||(n=t.filter(function(t){r=!0;for(var e=0,n=o.length;n>e;e++)o[e].call(i,t);return!0}))),n}var n,r,o=[];return{total:t.total,filter:function(t,n){var r;return e(function(e){r||(r=!t.call(n,e))})},forEach:e,map:function(t,n){var r=[];return e(function(e){r.push(t.call(n,e))}).then(function(){return r})},then:function(t,n){return e().then(t,n)}}}var l=[],d=1,h=0,v=/(.*)\*$/,p=window.IDBKeyRange||window.webkitIDBKeyRange;return t(null,{constructor:function(e){t.safeMixin(this,e);var n=this,r=this.dbConfig;this.indices=r.stores[this.storeName],this.cachedCount={};for(var o in n.indices){var i=n.indices[o];"number"==typeof i&&(n.indices[o]={preference:i})}if(this.db=this.db||r.db,!this.db){var a=r.openRequest;a||(a=r.openRequest=window.indexedDB.open(r.name||"dojo-db",parseInt(r.version,10)),a.onupgradeneeded=function(){var t=n.db=a.result;for(var e in r.stores){var o=r.stores[e];if(t.objectStoreNames.contains(e))u=a.transaction.objectStore(e);else var i=o.idProperty||"id",u=t.createObjectStore(e,{keyPath:i,autoIncrement:o[i]&&o[i].autoIncrement||!1});for(var c in o)u.indexNames.contains(c)||"autoIncrement"===c||o[c].indexed===!1||u.createIndex(c,c,o[c])}},r.available=u(a)),this.available=r.available.then(function(t){return n.db=t})}},idProperty:"id",storeName:"",indices:{},queryEngine:i,transaction:function(){var t=this;return this._currentTransaction=null,{abort:function(){t._currentTransaction.abort()},commit:function(){t._currentTransaction=null}}},_getTransaction:function(){if(!this._currentTransaction){this._currentTransaction=this.db.transaction([this.storeName],"readwrite");var t=this;this._currentTransaction.oncomplete=function(){t._currentTransaction=null},this._currentTransaction.onerror=function(t){}}return this._currentTransaction},_callOnStore:function(t,e,n,o){var i=this;return r(this.available,function a(){var r=i._currentTransaction;if(r)var c=!0;else r=i._getTransaction();var s,f;if(c)try{f=r.objectStore(i.storeName),n&&(f=f.index(n)),s=f[t].apply(f,e)}catch(l){if("TransactionInactiveError"===l.name||"InvalidStateError"===l.name)return i._currentTransaction=null,a();throw l}else f=r.objectStore(i.storeName),n&&(f=f.index(n)),s=f[t].apply(f,e);return o?s:u(s)})},get:function(t){return this._callOnStore("get",[t])},getIdentity:function(t){return t[this.idProperty]},put:function(t,e){return e=e||{},this.cachedCount={},this._callOnStore(e.overwrite===!1?"add":"put",[t])},add:function(t,e){return e=e||{},e.overwrite=!1,this.put(t,e)},remove:function(t){return this.cachedCount={},this._callOnStore("delete",[t])},query:function(t,i){function u(t,e,n){q++;var r=m.indices[t];return r&&r.indexed!==!1&&(e=e||r.preference*(n||1)||.001,e>R)?(R=e,S=t,!0):void q++}i=i||{};var l=i.start||0,d=i.count||1/0,y=i.sort,m=this;if(t.forEach){var g={sort:y},b=this.queryEngine({},g),_=[],j=0,w=0;return f({total:{then:function(){return o(_).then(function(t){return t.reduce(function(t,e){return t+e})*j/(w||1)}).then.apply(this,arguments)}},filter:function(e,n){var r,i=0,a=[],u={},c=[];return o(t.map(function(t,o){function s(t){f.push(t);for(var o=[],u=[];a.every(function(t){if(t.length>0){var e=t[0];return e&&u.push(e),o.push(e)}});){if(i>=l+d||0===u.length)return void(r=!0);var s=b(u)[0];if(a[o.indexOf(s)].shift(),i++>=l&&(c.push(s),!e.call(n,s)))return void(r=!0);o=[],u=[]}return!0}var f=a[o]=[],h=m.query(t,g);return _[o]=h.total,h.filter(function(t){if(!r){var e=m.getIdentity(t);return w++,e in u?!0:(j++,u[e]=!0,s(t))}}).then(function(t){return s(null),t})})).then(function(){return c})}})}var x,O,T,S,I,E=JSON.stringify(t)+"-"+JSON.stringify(i.sort),R=0,q=0;for(var N in t){I=t[N];var k,C=!1,F=null;if("boolean"!=typeof I){if(I)if(I.from||I.to)C=!0,function(t,e){F={test:function(n){return!t||n>=t&&(!e||e>=n)},keyRange:t?e?p.bound(t,e,I.excludeFrom,I.excludeTo):p.lowerBound(t,I.excludeFrom):p.upperBound(e,I.excludeTo)}}(I.from,I.to);else if("object"==typeof I&&I.contains)!function(t){var e,n=t[0],r=n&&n.match&&n.match(v);r?(n=r[1],e=p.bound(n,n+"~")):e=p.only(n),F={test:function(e){return t.every(function(t){var n=t&&t.match&&t.match(v);return n?(t=n[1],e&&e.some(function(e){return e.slice(0,t.length)===t})):e&&e.indexOf(t)>-1})},keyRange:e}}(I.contains);else if(k=I.match&&I.match(v)){var P=k[1];F=new RegExp("^"+P),F.keyRange=p.bound(P,P+"~")}F&&(t[N]=F),u(N,null,C?.1:1)}}var B;if(y){var D=y[0];if(D.attribute===S||u(D.attribute,1))B=D.descending;else{var M=!0;l=0,d=1/0}}var J;S?(S in t?(I=t[S],x=I&&I.keyRange?I.keyRange:p.only(I),O=S):x=null,J=[x,B?"prev":"next"]):J=[];var K=m.cachedPosition;K&&K.queryId===E&&K.offset<l&&q>1?(T=K.preFilterOffset+1,m.cachedPosition=K=e.mixin({},K)):(K=m.cachedPosition={offset:-1,preFilterOffset:-1,queryId:E},2>q&&(K.offset=K.preFilterOffset=(T=l)-1));var Q=this.queryEngine(t),$={total:{then:function(t){function e(t){return m.cachedCount[E]=t,Math.round((K.offset+1.01)/(K.preFilterOffset+1.01)*t)}var n=m.cachedCount[E];if(n)return t(e(n));var r=x?m._callOnStore("count",[x],S):m._callOnStore("count");return(this.then=r.then(e)).then.apply(this,arguments)}},filter:function(t,e){function o(){r(m._callOnStore("openCursor",J,S,!0),function(n){h++,n.onsuccess=function(s){h--;var f=s.target.result;if(f){if(T)return f.advance(T),h++,void(T=!1);K.preFilterOffset++;try{var v=f.value;return i.join&&(v=i.join(v)),r(v,function(r){return Q.matches(r)&&(K.offset++,K.offset>=l&&(u.push(r),!t.call(e,r)||K.offset>=l+d-1))?(n.lastCursor=f,a.resolve(u),void c()):c(f,i.priority,function(){T=K.preFilterOffset,o()})})}catch(p){a.reject(p)}}else a.resolve(u);c()},n.onerror=function(t){h--,a.reject(t),c()}})}var a=new n,u=[];return o(),a.promise}};if(M){var b=this.queryEngine({},i),z=e.delegate($.filter(s).then(function(t){return b(t)}));return z.total=$.total,new a(z)}return i.rawResults?$:f($)}})});