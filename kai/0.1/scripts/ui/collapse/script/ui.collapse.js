define("ui/collapse/script/ui.collapse",["BootStrap","text!collapseTemplate"],function(e,t){var i={data:{items:[]},viewConfig:{fade:!0,view:null}},o=_.template(t),n=function(e){this.create(e)};return n.prototype.create=function(e){var t=this;this.opts=e||{};var n=Backbone.Model.extend({});this.model=new n(_.extend(i,e)),this.model.on({"change:hidden":function(){t.model.get("hidden")&&t.destroy()}}),this.htmlString=o({model:this.model.attributes}),this.elementNode=$(this.htmlString);var l=Backbone.View.extend({});this.view=new l({el:this.elementNode})},n.prototype.display=function(){var e=this;e.model.get("viewConfig").view.$el.append(this.view.$el)},n.prototype.destroy=function(){this.view.destroy()},n});