define("dojox/mobile/_PickerChooser",["dojo/_base/lang","dojo/_base/window"],function(o,e){return{load:function(n,d,r){var i=e.global._no_dojo_dm||o.getObject("dojox.mobile",!0);d([("android"===i.currentTheme||"holodark"===i.currentTheme?"./ValuePicker":"./SpinWheel")+n],r)}}});