require({cache:{"url:dojox/grid/enhanced/templates/ClearFilterConfirmPane.html":'<div class="dojoxGridClearFilterConfirm">\n	<div class="dojoxGridClearFilterMsg">\n		${_clearFilterMsg}\n	</div>\n	<div class="dojoxGridClearFilterBtns" dojoAttachPoint="btnsNode">\n		<span dojoType="dijit.form.Button" label="${_cancelBtnLabel}" dojoAttachPoint="cancelBtn" dojoAttachEvent="onClick:_onCancel"></span>\n		<span dojoType="dijit.form.Button" label="${_clearBtnLabel}" dojoAttachPoint="clearBtn" dojoAttachEvent="onClick:_onClear"></span>\n	</div>\n</div>\n'}}),define("dojox/grid/enhanced/plugins/filter/ClearFilterConfirm",["dojo/_base/declare","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/text!../../templates/ClearFilterConfirmPane.html"],function(t,e,i,n,l){return t("dojox.grid.enhanced.plugins.filter.ClearFilterConfirm",[e,i,n],{templateString:l,widgetsInTemplate:!0,plugin:null,postMixInProperties:function(){var t=this.plugin.nls;this._clearBtnLabel=t.clearButton,this._cancelBtnLabel=t.cancelButton,this._clearFilterMsg=t.clearFilterMsg},postCreate:function(){this.inherited(arguments),this.cancelBtn.domNode.setAttribute("aria-label",this.plugin.nls.waiCancelButton),this.clearBtn.domNode.setAttribute("aria-label",this.plugin.nls.waiClearButton)},uninitialize:function(){this.plugin=null},_onCancel:function(){this.plugin.clearFilterDialog.hide()},_onClear:function(){this.plugin.clearFilterDialog.hide(),this.plugin.filterDefDialog.clearFilter(this.plugin.filterDefDialog._clearWithoutRefresh)}})});