require({cache:{"url:dojox/calc/templates/FuncGen.html":'<div style="border:1px solid black;">\n	<select data-dojo-type="dijit.form.ComboBox" placeholder="functionName" data-dojo-attach-point=\'combo\' style="width:45%;" class="dojoxCalcFuncGenNameBox" data-dojo-attach-event=\'onChange:onSelect\'></select>\n	<input data-dojo-type="dijit.form.TextBox" placeholder="arguments" class="dojoxCalcFuncGenTextBox" style="width:50%;" data-dojo-attach-point=\'args\' />\n	<BR>\n	<TEXTAREA data-dojo-type="dijit.form.SimpleTextarea" placeholder="function body" class="dojoxCalcFuncGenTextArea" style="text-align:left;width:95%;" rows=10 data-dojo-attach-point=\'textarea\' value="" data-dojo-attach-event=\'onClick:readyStatus\'></TEXTAREA>\n	<BR>\n	<input data-dojo-type="dijit.form.Button" class="dojoxCalcFuncGenSave" data-dojo-attach-point=\'saveButton\' label="Save" data-dojo-attach-event=\'onClick:onSaved\' />\n	<input data-dojo-type="dijit.form.Button" class="dojoxCalcFuncGenReset" data-dojo-attach-point=\'resetButton\' label="Reset" data-dojo-attach-event=\'onClick:onReset\' />\n	<input data-dojo-type="dijit.form.Button" class="dojoxCalcFuncGenClear" data-dojo-attach-point=\'clearButton\' label="Clear" data-dojo-attach-event=\'onClick:onClear\' />\n	<input data-dojo-type="dijit.form.Button" class="dojoxCalcFuncGenClose" data-dojo-attach-point=\'closeButton\' label="Close" />\n	<BR><BR>\n	<input data-dojo-type="dijit.form.Button" class="dojoxCalcFuncGenDelete" data-dojo-attach-point=\'deleteButton\' label="Delete" data-dojo-attach-event=\'onClick:onDelete\' />\n	<BR>\n	<input data-dojo-type="dijit.form.TextBox" style="width:45%;" data-dojo-attach-point=\'status\' class="dojoxCalcFuncGenStatusTextBox" readonly value="Ready" />\n</div>\n'}}),define("dojox/calc/FuncGen",["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dijit/_WidgetBase","dijit/_WidgetsInTemplateMixin","dijit/_TemplatedMixin","dojox/math/_base","dijit/registry","dojo/text!./templates/FuncGen.html","dojox/calc/_Executor","dijit/form/ComboBox","dijit/form/SimpleTextarea","dijit/form/Button","dijit/form/TextBox"],function(t,e,o,a,n,i,s,d,c,l){var u=t("dojox.calc.FuncGen",[a,i,n],{templateString:c,onSelect:function(){this.reset()},onClear:function(){var t=confirm("Do you want to clear the name, argument, and body text?");t&&this.clear()},saveFunction:function(t,e,o){},onSaved:function(){},clear:function(){this.textarea.set("value",""),this.args.set("value",""),this.combo.set("value","")},reset:function(){this.combo.get("value")in this.functions&&(this.textarea.set("value",this.functions[this.combo.get("value")].body),this.args.set("value",this.functions[this.combo.get("value")].args))},onReset:function(){if(this.combo.get("value")in this.functions){var t=confirm("Do you want to reset this function?");t&&(this.reset(),this.status.set("value","The function has been reset to its last save point."))}},deleteThing:function(t){this.writeStore.isItem(t)&&(this.writeStore.deleteItem(t),this.writeStore.save())},deleteFunction:function(t){},onDelete:function(){var t;if((t=this.combo.get("value"))in this.functions){var e=confirm("Do you want to delete this function?");if(e){var o=this.combo.item;this.writeStore.deleteItem(o),this.writeStore.save(),this.deleteFunction(t),delete this.functions[t],this.clear()}}else this.status.set("value","Function cannot be deleted, it isn't saved.")},readyStatus:function(){this.status.set("value","Ready")},writeStore:null,readStore:null,functions:null,startup:function(){this.combo.set("store",this.writeStore),this.inherited(arguments);var t=d.getEnclosingWidget(this.domNode.parentNode);t&&"function"==typeof t.close?this.closeButton.set("onClick",e.hitch(t,"close")):o.set(this.closeButton.domNode,{display:"none"})}});return e.mixin(l,{FuncGen:u})});