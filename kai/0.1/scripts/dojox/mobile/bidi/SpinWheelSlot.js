define("dojox/mobile/bidi/SpinWheelSlot",["dojo/_base/declare","dojo/_base/window","dojo/_base/array","dojo/dom-construct","./common"],function(t,e,i,r,o){return t(null,{postCreate:function(){this.inherited(arguments),!this.textDir&&this.getParent()&&this.getParent().get("textDir")&&this.set("textDir",this.getParent().get("textDir"))},_setTextDirAttr:function(t){!t||this._created&&this.textDir===t||(this.textDir=t,this._setTextDirToNodes(this.textDir))},_setTextDirToNodes:function(t){i.forEach(this.panelNodes,function(t){i.forEach(t.childNodes,function(t,e){t.innerHTML=o.removeUCCFromText(t.innerHTML),t.innerHTML=o.enforceTextDirWithUcc(t.innerHTML,this.textDir),t.style.textAlign="rtl"===this.dir.toLowerCase()?"right":"left"},this)},this)}})});