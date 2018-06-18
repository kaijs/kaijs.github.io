define("dojox/form/uploader/_HTML5",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo"],function(t,e,r,o){return t("dojox.form.uploader._HTML5",[],{errMsg:"Error uploading files. Try checking permissions",uploadType:"html5",postMixInProperties:function(){this.inherited(arguments),"html5"===this.uploadType},postCreate:function(){this.connectForm(),this.inherited(arguments),this.uploadOnSelect&&this.connect(this,"onChange",function(t){this.upload(t[0])})},_drop:function(t){o.stopEvent(t);var e=t.dataTransfer;this._files=e.files,this.onChange(this.getFileList())},upload:function(t){this.onBegin(this.getFileList()),this.uploadWithFormData(t)},addDropTarget:function(t,e){e||(this.connect(t,"dragenter",o.stopEvent),this.connect(t,"dragover",o.stopEvent),this.connect(t,"dragleave",o.stopEvent)),this.connect(t,"drop","_drop")},uploadWithFormData:function(t){if(this.getUrl()){var e=new FormData,o=this._getFileFieldName();if(r.forEach(this._files,function(t,r){e.append(o,t)},this),t){t.uploadType=this.uploadType;for(var n in t)e.append(n,t[n])}var i=this.createXhr();i.send(e)}},_xhrProgress:function(t){if(t.lengthComputable){var e={bytesLoaded:t.loaded,bytesTotal:t.total,type:t.type,timeStamp:t.timeStamp};"load"==t.type?(e.percent="100%",e.decimal=1):(e.decimal=t.loaded/t.total,e.percent=Math.ceil(t.loaded/t.total*100)+"%"),this.onProgress(e)}},createXhr:function(){var t,r=new XMLHttpRequest;return r.upload.addEventListener("progress",e.hitch(this,"_xhrProgress"),!1),r.addEventListener("load",e.hitch(this,"_xhrProgress"),!1),r.addEventListener("error",e.hitch(this,function(e){this.onError(e),clearInterval(t)}),!1),r.addEventListener("abort",e.hitch(this,function(e){this.onAbort(e),clearInterval(t)}),!1),r.onreadystatechange=e.hitch(this,function(){if(4===r.readyState){clearInterval(t);try{this.onComplete(JSON.parse(r.responseText.replace(/^\{\}&&/,"")))}catch(e){var o="Error parsing server result:";this.onError(o,e)}}}),r.open("POST",this.getUrl()),r.setRequestHeader("Accept","application/json"),t=setInterval(e.hitch(this,function(){try{}catch(e){clearInterval(t)}}),250),r}})});