define("widgets/TipsLayer",["UILayer","UIScroll"],function(i,t){var s={},h={};h.onCreate=function(){this.$el.html(['<div class="cui-pop-box">','<div class="cui-hd">'+this.title+'<div class="lab-close-area"><span class="cui-top-close">×</span></div></div>','<div class="cui-bd" style="overflow: hidden; position: relative; background-color: #fafafa; width: 100%;">',"</div>","</div>"].join("")),this.content=this.$el.find(".cui-bd")},h.onShow=function(){var i=this;this.html=$(this.html),this.html.length>1&&(this.html=$('<div style="width: 100%;"></div>').append(this.html)),this.html.css("background-color","white"),this.content.append(this.html),this.closeDom=this.$el.find(".cui-top-close").parent(),this.closeDom.on("click",function(){i.hide()}),this.scroll=new t({wrapper:this.content,scroller:this.html}),$.each(this.html.find("li"),function(t,s){$(s).on("click",$.proxy(function(t){i.itemClick.call(i,t),i.hide()},this))}),this.scroller=this.html,this.setzIndexTop(),this.$el.bind("touchmove",function(i){i.preventDefault()}),this.onHashChange=function(){this.hide()},$(window).on("hashchange",$.proxy(this.onHashChange,this))},h.onHide=function(){this.scroll.destroy(),this.$el.unbind("touchmove"),this.$el.remove(),$(window).off("hashchange",$.proxy(this.onHashChange,this)),this.scroller&&this.scroller.off("click")},s.__propertys__=function(){this.title,this.content,this.itemClick=function(){},this.scroll=null},s.initialize=function($super,i){this.setOption(function(i,t){this[i]=t}),$super($.extend(h,i))};var n=new _.inherit(i,s);return n});