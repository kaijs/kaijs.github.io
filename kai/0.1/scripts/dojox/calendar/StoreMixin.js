define("dojox/calendar/StoreMixin",["dojo/_base/declare","dojo/_base/array","dojo/_base/html","dojo/_base/lang","dojo/dom-class","dojo/Stateful","dojo/when"],function(t,e,s,r,i,n,a){return t("dojox.calendar.StoreMixin",n,{store:null,query:{},queryOptions:null,startTimeAttr:"startTime",endTimeAttr:"endTime",summaryAttr:"summary",allDayAttr:"allDay",subColumnAttr:"calendar",cssClassFunc:null,decodeDate:null,encodeDate:null,displayedItemsInvalidated:!1,itemToRenderItem:function(t,e){return this.owner?this.owner.itemToRenderItem(t,e):{id:e.getIdentity(t),summary:t[this.summaryAttr],startTime:this.decodeDate&&this.decodeDate(t[this.startTimeAttr])||this.newDate(t[this.startTimeAttr],this.dateClassObj),endTime:this.decodeDate&&this.decodeDate(t[this.endTimeAttr])||this.newDate(t[this.endTimeAttr],this.dateClassObj),allDay:null!=t[this.allDayAttr]?t[this.allDayAttr]:!1,subColumn:t[this.subColumnAttr],cssClass:this.cssClassFunc?this.cssClassFunc(t):null}},renderItemToItem:function(t,e){if(this.owner)return this.owner.renderItemToItem(t,e);var s={};return s[e.idProperty]=t.id,s[this.summaryAttr]=t.summary,s[this.startTimeAttr]=this.encodeDate&&this.encodeDate(t.startTime)||t.startTime,s[this.endTimeAttr]=this.encodeDate&&this.encodeDate(t.endTime)||t.endTime,t.subColumn&&(s[this.subColumnAttr]=t.subColumn),"unstored"===this.getItemStoreState(t)?s:r.mixin(t._item,s)},_computeVisibleItems:function(t){return this.owner?this.owner._computeVisibleItems(t):void(t.items=this.storeManager._computeVisibleItems(t))},_initItems:function(t){return this.set("items",t),t},_refreshItemsRendering:function(t){},_setStoreAttr:function(t){return this.store=t,this.storeManager.set("store",t)},_getItemStoreStateObj:function(t){return this.storeManager._getItemStoreStateObj(t)},getItemStoreState:function(t){return this.storeManager.getItemStoreState(t)},_cleanItemStoreState:function(t){this.storeManager._cleanItemStoreState(t)},_setItemStoreState:function(t,e){this.storeManager._setItemStoreState(t,e)}})});