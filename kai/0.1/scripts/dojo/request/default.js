define("dojo/request/default",["exports","require","../has"],function(e,r,t){var o,n=t("config-requestProvider");o="./xhr",n||(n=o),e.getPlatformDefaultId=function(){return o},e.load=function(e,t,f,u){r(["platform"==e?o:n],function(e){f(e)})}});