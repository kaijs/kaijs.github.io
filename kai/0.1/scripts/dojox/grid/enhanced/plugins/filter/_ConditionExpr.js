define("dojox/grid/enhanced/plugins/filter/_ConditionExpr",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array"],function(t,n,r){var e=t("dojox.grid.enhanced.plugins.filter._ConditionExpr",null,{_name:"expr",applyRow:function(t,n){throw new Error("_ConditionExpr.applyRow: unimplemented interface")},toObject:function(){return{}},getName:function(){return this._name}}),o=t("dojox.grid.enhanced.plugins.filter._DataExpr",e,{_name:"data",constructor:function(t,r,e){this._convertArgs=e||{},n.isFunction(this._convertArgs.convert)&&(this._convertData=n.hitch(this._convertArgs.scope,this._convertArgs.convert)),r?this._colArg=t:this._value=this._convertData(t,this._convertArgs)},getValue:function(){return this._value},applyRow:function(t,r){return"undefined"==typeof this._colArg?this:new(n.getObject(this.declaredClass))(this._convertData(r(t,this._colArg),this._convertArgs))},_convertData:function(t){return t},toObject:function(){return{op:this.getName(),data:void 0===this._colArg?this._value:this._colArg,isCol:void 0!==this._colArg}}}),i=t("dojox.grid.enhanced.plugins.filter._OperatorExpr",e,{_name:"operator",constructor:function(){if(n.isArray(arguments[0]))this._operands=arguments[0];else{this._operands=[];for(var t=0;t<arguments.length;++t)this._operands.push(arguments[t])}},toObject:function(){return{op:this.getName(),data:r.map(this._operands,function(t){return t.toObject()})}}}),a=t("dojox.grid.enhanced.plugins.filter._UniOpExpr",i,{_name:"uniOperator",applyRow:function(t,n){if(!(this._operands[0]instanceof e))throw new Error("_UniOpExpr: operand is not expression.");return this._calculate(this._operands[0],t,n)},_calculate:function(t,n,r){throw new Error("_UniOpExpr._calculate: unimplemented interface")}}),s=t("dojox.grid.enhanced.plugins.filter._BiOpExpr",i,{_name:"biOperator",applyRow:function(t,n){if(!(this._operands[0]instanceof e))throw new Error("_BiOpExpr: left operand is not expression.");if(!(this._operands[1]instanceof e))throw new Error("_BiOpExpr: right operand is not expression.");return this._calculate(this._operands[0],this._operands[1],t,n)},_calculate:function(t,n,r,e){throw new Error("_BiOpExpr._calculate: unimplemented interface")}});return{_ConditionExpr:e,_DataExpr:o,_OperatorExpr:i,_UniOpExpr:a,_BiOpExpr:s}});