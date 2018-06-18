define("dojox/data/StoreExplorer",["dojo","dijit","dojox","dojo/require!dojox/grid/DataGrid,dojox/data/ItemExplorer,dijit/layout/BorderContainer,dijit/layout/ContentPane"],function(e,t,r){e.provide("dojox.data.StoreExplorer"),e.require("dojox.grid.DataGrid"),e.require("dojox.data.ItemExplorer"),e.require("dijit.layout.BorderContainer"),e.require("dijit.layout.ContentPane"),e.declare("dojox.data.StoreExplorer",t.layout.BorderContainer,{constructor:function(t){e.mixin(this,t)},store:null,columnWidth:"",stringQueries:!1,showAllColumns:!1,postCreate:function(){function o(e,r){var o=new t.form.Button({label:e});return i.containerNode.appendChild(o.domNode),o.onClick=r,o}var n=this;this.inherited(arguments);var i=new t.layout.ContentPane({region:"top"}).placeAt(this),a=i.containerNode.appendChild(document.createElement("span"));a.innerHTML="Enter query: &nbsp;",a.id="queryText";var s=i.containerNode.appendChild(document.createElement("input"));s.type="text",s.id="queryTextBox",o("Query",function(){var t=s.value;n.setQuery(n.stringQueries?t:e.fromJson(t))}),i.containerNode.appendChild(document.createElement("span")).innerHTML="&nbsp;&nbsp;&nbsp;";var l=o("Create New",e.hitch(this,"createNew")),d=o("Delete",function(){for(var e=c.selection.getSelected(),t=0;t<e.length;t++)n.store.deleteItem(e[t])});this.setItemName=function(t){l.attr("label","<img style='width:12px; height:12px' src='"+e.moduleUrl("dijit.themes.tundra.images","dndCopy.png")+"' /> Create New "+t),d.attr("label","Delete "+t)},o("Save",function(){n.store.save({onError:function(e){alert(e)}}),n.tree.refreshItem()}),o("Revert",function(){n.store.revert()}),o("Add Column",function(){var t=prompt("Enter column name:","property");t&&(n.gridLayout.push({field:t,name:t,formatter:e.hitch(n,"_formatCell"),editable:!0}),n.grid.attr("structure",n.gridLayout))});var u=new t.layout.ContentPane({region:"center"}).placeAt(this),c=this.grid=new r.grid.DataGrid({store:this.store});u.attr("content",c),c.canEdit=function(e,t){var r=this._copyAttr(t,e.field);return!(r&&"object"==typeof r)||r instanceof Date};var h=new t.layout.ContentPane({region:"trailing",splitter:!0,style:"width: 300px"}).placeAt(this),p=this.tree=new r.data.ItemExplorer({store:this.store});h.attr("content",p),e.connect(c,"onCellClick",function(){var e=c.selection.getSelected()[0];p.setItem(e)}),this.gridOnFetchComplete=c._onFetchComplete,this.setStore(this.store)},setQuery:function(e,t){this.grid.setQuery(e,t)},_formatCell:function(e){return this.store.isItem(e)?this.store.getLabel(e)||this.store.getIdentity(e):e},setStore:function(e){function t(e){return r._formatCell(e)}this.store=e;var r=this,o=this.grid;o._pending_requests[0]=!1;var n=this.gridOnFetchComplete;o._onFetchComplete=function(i,a){var s,l,d,u,c,h,p=r.gridLayout=[],m=e.getIdentityAttributes();for(u=0;u<m.length;u++)l=m[u],p.push({field:l,name:l,_score:100,formatter:t,editable:!1});for(u=0;d=i[u++];){var f=e.getAttributes(d);for(h=0;l=f[h++];){var g=!1;for(c=0;s=p[c++];)if(s.field==l){s._score++,g=!0;break}g||p.push({field:l,name:l,_score:1,formatter:t,styles:"white-space:nowrap; ",editable:!0})}}if(p=p.sort(function(e,t){return t._score-e._score}),!r.showAllColumns)for(c=0;s=p[c];c++)if(s._score<i.length/40*c){p.splice(c,p.length-c);break}for(c=0;s=p[c++];)s.width=r.columnWidth||Math.round(100/p.length)+"%";o._onFetchComplete=n,o.attr("structure",p);n.apply(this,arguments)},o.setStore(e),this.queryOptions={cache:!0},this.tree.setStore(e)},createNew:function(){var t=prompt("Enter any properties (in JSON literal form) to put in the new item (passed to the newItem constructor):","{ }");if(t)try{this.store.newItem(e.fromJson(t))}catch(r){alert(r)}}})});