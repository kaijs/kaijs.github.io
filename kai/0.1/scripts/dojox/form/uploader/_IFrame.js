define("dojox/form/uploader/_IFrame",["dojo/query","dojo/dom-construct","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-form","dojo/request/iframe"],function(o,e,r,t,n,a,d){return r("dojox.form.uploader._IFrame",[],{postMixInProperties:function(){this.inherited(arguments),"iframe"===this.uploadType&&(this.uploadType="iframe",this.upload=this.uploadIFrame)},uploadIFrame:function(o){var r,t={},a=(this.getForm(),this.getUrl()),i=this;if(o=o||{},o.uploadType=this.uploadType,r=e.place('<form enctype="multipart/form-data" method="post"></form>',this.domNode),n.forEach(this._inputs,function(o,e){""!==o.value&&(r.appendChild(o),t[o.name]=o.value)},this),o)for(nm in o)void 0===t[nm]&&e.create("input",{name:nm,value:o[nm],type:"hidden"},r);d.post(a,{form:r,handleAs:"json",content:o}).then(function(o){e.destroy(r),o.ERROR||o.error?i.onError(o):i.onComplete(o)},function(o){e.destroy(r),i.onError(o)})}})});