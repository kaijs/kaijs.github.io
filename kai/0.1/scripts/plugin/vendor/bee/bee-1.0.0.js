define("plugin/vendor/bee/bee-1.0.0",["dojo","dijit","dojox"],function(e,n,i){!function(){function e(e,n){var o=window.WebViewJavascriptBridge;return o?void o.invoke(i+"."+e,n):void(n.fail&&n.fail("error: invalid bridge object"))}function n(e){var n=window.WebViewJavascriptBridge;return n?void n.config(e):void(e.fail&&e.fail("error: invalid bridge object"))}if(!window.bee){var i="bee";b=window.bee={onReady:function(){},config:n,onBack:function(e){history.back(-1)},checkJsApi:function(n){e("checkJsApi",n)},chooseImage:function(n){e("chooseImage",n)},previewImage:function(n){e("previewImage",n)},uploadImage:function(n){e("uploadImage",n)},downloadImage:function(n){e("downloadImage",n)},getLocation:function(n){e("getLocation",n)},sendTextMessageToApp:function(n){e("sendTextMessageToApp",n)},sendImageMessageToApp:function(n){e("sendImageMessageToApp",n)},sendFileMessageToApp:function(n){e("sendFileMessageToApp",n)},scanCode:function(n){e("scanCode",n)},setBackModel:function(n){e("setBackModel",n)},showOptionMenu:function(n){e("showOptionMenu",n)},hideOptionMenuItems:function(n){e("hideOptionMenuItems",n)},showOptionMenuItems:function(n){e("showOptionMenuItems",n)},hideAllFuncOptionMenuItem:function(n){e("hideAllFuncOptionMenuItem",n)},showAllFuncOptionMenuItem:function(n){e("showAllFuncOptionMenuItem",n)},closeWindow:function(n){e("closeWindow",n)},pbxCall:function(n){e("pbxCall",n)}},window.WebViewJavascriptBridge?window.WebViewJavascriptBridge.setEventObject(i,b):document.addEventListener("WebViewJavascriptBridgeReady",function(){window.bee.onReady(),window.WebViewJavascriptBridge.setEventObject(i,b)})}}()});