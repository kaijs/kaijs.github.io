define("kaiView/pc/data/index",["dojo/Deferred","dojo/_base/array"],function(e,t){"use strict";var i=function(e){return t.map([{label:"页面URI",field:"id",width:"250"},{label:"父页面id",field:"parent",width:"150"},{label:"节点名称",field:"nodeName",width:"60"},{label:"默认访问",field:"isDefault",width:"50"},{label:"转向页面",field:"redirectView",width:"150"},{label:"页面状态",field:"state",width:"50"},{label:"前端",field:"fe",width:"25"},{label:"后台",field:"api",width:"25"}],function(e){return e})},l=function(e){return t.map([{label:"请求地址",field:"id",width:"250"},{label:"请求时间",field:"requestTime",width:"50",formatter:function(e){return e?e.toTimeString():""}},{label:"状态更新时间",field:"statusChangeTime",width:"50",formatter:function(e){return e?e.toTimeString():""}},{label:"耗时(ms)",field:"costTime",width:"50"},{label:"状态",field:"status",width:"50"},{label:"错误码",field:"statusText",width:"50"}],function(e){return e})},a={getViewsStatesList:function(){return Kai._store.fetch()},getInterfaceStatesList:function(){return Kai._interfaceStatesStore.fetch()}};return{dataFetcher:a,getColumnsDefinition:i,getInterfaceColumnsDefinition:l}});