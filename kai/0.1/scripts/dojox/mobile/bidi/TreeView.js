define("dojox/mobile/bidi/TreeView",["dojo/_base/declare"],function(i){return i(null,{_customizeListItem:function(i){i.textDir=this.textDir,this.isLeftToRight()||(i.dir="rtl",i.transitionDir=-1)}})});