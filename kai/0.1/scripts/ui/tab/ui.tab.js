require({cache:{"url:ui/tab/template/ui.tab.html":'<ul class="cui-tab-mod">\r\n  <%for(var i = 0, len = data.length; i < len; i++) { %>\r\n    <li data-key="<%=data[i].id %>" data-index="<%=i%>" <%if(i == index){ %>class=" <%=curClass %>"\r\n      <%} %>>\r\n      <%=data[i].name %>\r\n    </li>\r\n    <%} %>\r\n    <i class="cui-tab-scrollbar cui-tabnum<%=len %>"></i>\r\n  </ul>\r\n'}}),define("ui/tab/ui.tab",["../ui.abstract.view","dojo/text!./template/ui.tab.html"],function(t,a){return _.inherit(t,{propertys:function($super){$super(),this.type="tab",this.needMask=!1,this.needAnimat=!0,this.template=a,this.datamodel={data:[],curClass:"cui-tab-current",index:0},this.events={"click .cui-tab-mod>li":"clickAction"},this.onChange=function(t){}},resetPropery:function(){if((this.datamodel.index<0||this.datamodel.index>this.datamodel.data.length)&&(this.datamodel.index=0),!this.datamodel.selectedKey)return void(this.datamodel.selectedKey=this.datamodel.data[this.datamodel.index].id);for(var t=0,a=this.datamodel.data.length;a>t;t++)if(this.datamodel.selectedKey==this.datamodel.data[t].id){this.datamodel.index=t;break}},initElement:function(){this.el=this.$(".cui-tab-current"),this.tab=this.$(".cui-tab-scrollbar"),this.tabs=this.$("li")},clickAction:function(t){var a=$(t.currentTarget),i=a.attr("data-index");this.datamodel.data[i];this.setIndex(i)},setVal:function(t){this.el=this.$('li[data-key="'+t+'"]');var a=this.el.attr("data-index"),i=this.datamodel.data[a];if(i){var e=this.datamodel.selectedKey==t;if(this.datamodel.selectedKey=t,this.tabs.removeClass(this.datamodel.curClass),this.el&&this.el.addClass(this.datamodel.curClass),navigator.userAgent.toLowerCase().indexOf("android")>-1&&$(window).height()>530){this._tab=this.$el.find(".cui-tab-scrollbar");var d=this._tab.css("width");setTimeout($.proxy(function(){this._tab.css("width",d)},this),0)}e===!1&&"function"==typeof this.onChange&&this.onChange.call(this,i)}},getVal:function(){return this.datamodel.selectedKey},setIndex:function(t){0>t||t>this.datamodel.data.length-1||this.setVal(this.datamodel.data[t].id)},getIndex:function(){for(var t=0,a=this.datamodel.data.length;a>t;t++)if(this.getVal()==this.datamodel.data[t].id)return t;return-1},initialize:function($super,t){$super(t)},addEvent:function($super){$super()}})});