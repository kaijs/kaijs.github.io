var profile=function(){var e=/^dojo\/tests\//,t=function(e,t){var s={"dojo/dojo.profile":1,"dojo/package.json":1,"dojo/OpenAjax":1,"dojo/tests":1,"dojo/tests/_base/loader/requirejs/requirejs-setup":1,"dojo/tests/_base/loader/requirejs/dataMain":1,"dojo/tests/_base/loader/requirejs/depoverlap":1,"dojo/tests/_base/loader/requirejs/simple-tests":1,"dojo/tests/_base/loader/requirejs/relative/relative-tests":1,"dojo/tests/_base/loader/requirejs/exports/exports-tests":1};return t in s||/^dojo\/_base\/config\w+$/.test(t)||/^dojo\/resources\//.test(t)&&!/\.css$/.test(e)||/(png|jpg|jpeg|gif|tiff)$/.test(e)||/built\-i18n\-test\/152\-build/.test(t)};return{resourceTags:{test:function(t,s){return e.test(s)||"dojo/tests"==s||"dojo/robot"==s||"dojo/robotx"==s},copyOnly:function(e,s){return t(e,s)},amd:function(s,o){return!e.test(o)&&!t(s,o)&&/\.js$/.test(s)}}}}();