define("ui/carousel/script/ui.carousel",["text!carouselTemplate","BootStrap"],function(e){var t={imgData:[],previousText:"",nextText:"",view:null,container:null},i=_.template(e),n=function(e){this.create(e)};return n.prototype.create=function(e){var n=this;this.opts=e||{};var o=Backbone.Model.extend({});this.model=new o({imgData:this.opts.imgData||t.imgData,previousText:this.opts.previousText||t.previousText,nextText:this.opts.nextText||t.nextText,hidden:!1,shown:!1,view:e.view||t.view,container:e.container||t.container}),this.model.on({"change:hidden":function(){n.model.get("hidden")&&n.destroy()}}),this.modalInstanceText=i({model:this.model.attributes}),this.modalElement=$(this.modalInstanceText);var s=Backbone.View.extend({});this.view=new s({el:this.modalElement})},n.prototype.display=function(){var e=this.model.get("view")&&this.model.get("view").$el||$("body"),t=e.find(this.model.get("container"));t.text(""),t.append(this.view.$el)},n.prototype.destroy=function(){this.view.$el.remove(),this.view=null},n});