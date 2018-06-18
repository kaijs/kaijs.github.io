define("dojox/grid/TreeSelection",["../main","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/dom-attr","dojo/query","./DataSelection"],function(e,t,s,r,i,n,o){return t("dojox.grid.TreeSelection",o,{setMode:function(e){this.selected={},this.sorted_sel=[],this.sorted_ltos={},this.sorted_stol={},o.prototype.setMode.call(this,e)},addToSelection:function(e){if("none"!=this.mode){var t=null;if(t="number"==typeof e||"string"==typeof e?e:this.grid.getItemIndex(e),this.selected[t])this.selectedIndex=t;else if(this.onCanSelect(t)!==!1){this.selectedIndex=t;var s=n("tr[dojoxTreeGridPath='"+t+"']",this.grid.domNode);s.length&&i.set(s[0],"aria-selected","true"),this._beginUpdate(),this.selected[t]=!0,this._insertSortedSelection(t),this.onSelected(t),this._endUpdate()}}},deselect:function(e){if("none"!=this.mode){var t=null;if(t="number"==typeof e||"string"==typeof e?e:this.grid.getItemIndex(e),this.selectedIndex==t&&(this.selectedIndex=-1),this.selected[t]){if(this.onCanDeselect(t)===!1)return;var s=n("tr[dojoxTreeGridPath='"+t+"']",this.grid.domNode);s.length&&i.set(s[0],"aria-selected","false"),this._beginUpdate(),delete this.selected[t],this._removeSortedSelection(t),this.onDeselected(t),this._endUpdate()}}},getSelected:function(){var e=[];for(var t in this.selected)this.selected[t]&&e.push(this.grid.getItem(t));return e},getSelectedCount:function(){var e=0;for(var t in this.selected)this.selected[t]&&e++;return e},_bsearch:function(e){for(var t,s=this.sorted_sel,r=s.length-1,i=0;r>=i;){var n=this._comparePaths(s[t=i+r>>1],e);if(0>n)i=t+1;else{if(!(n>0))return t;r=t-1}}return 0>n?t-n:t},_comparePaths:function(e,t){for(var s=0,r=e.length<t.length?e.length:t.length;r>s;s++){if(e[s]<t[s])return-1;if(e[s]>t[s])return 1}return e.length<t.length?-1:e.length>t.length?1:0},_insertSortedSelection:function(e){e=String(e);var t=this.sorted_sel,r=this.sorted_ltos,i=this.sorted_stol,n=e.split("/");if(n=s.map(n,function(e){return parseInt(e,10)}),r[n]=e,i[e]=n,0===t.length)return void t.push(n);if(1==t.length){var o=this._comparePaths(t[0],n);return void(1==o?t.unshift(n):t.push(n))}var d=this._bsearch(n);this.sorted_sel.splice(d,0,n)},_removeSortedSelection:function(e){e=String(e);var t=this.sorted_sel,s=this.sorted_ltos,r=this.sorted_stol;if(0!==t.length){var i=r[e];if(i){var n=this._bsearch(i);n>-1&&(delete s[i],delete r[e],t.splice(n,1))}}},getFirstSelected:function(){if(!this.sorted_sel.length||"none"==this.mode)return-1;var e=this.sorted_sel[0];return e?(e=this.sorted_ltos[e],e?e:-1):-1},getNextSelected:function(e){if(!this.sorted_sel.length||"none"==this.mode)return-1;e=String(e);var t=this.sorted_stol[e];if(!t)return-1;var s=this._bsearch(t),r=this.sorted_sel[s+1];return r?this.sorted_ltos[r]:-1},_range:function(t,s,i){!r.isString(t)&&0>t&&(t=s);var n=(this.grid.layout.cells,this.grid.store,this.grid);if(t=new e.grid.TreePath(String(t),n),s=new e.grid.TreePath(String(s),n),t.compare(s)>0){var o=t;t=s,s=o}var d=t._str,h=s._str;i(d);for(var l=t;(l=l.next())&&l._str!=h;)i(l._str);i(h)}})});