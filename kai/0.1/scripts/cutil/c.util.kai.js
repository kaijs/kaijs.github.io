define("cutil/c.util.kai",["./c.util.path","dstore/Memory","ui/promptpop/ui.promptpop","ui/alert/ui.alert","data/store/c.common.store","ui/loading/ui.loading"],function(e,t,i,n,o,a){var r,s=window,c=new n,l=new n,u=o.UserStore.getInstance();return Kai=_.extend(Kai||{},{store:new t({}),_store:new t({}),_interfaceStatesStore:new t({}),isMobile:function(){return!!navigator.userAgent.match(/AppleWebKit.*Mobile.*/)},getIndexPath:function(){},getIndexURL:function(){var e=location.href,t=Kai.getUrlWithoutHash(e);return t.indexOf("index.html")>=0?t:Kai.hasSlashEnd(t)?t+"index.html":t+"/index.html"},hasSlashEnd:function(e){var t=e||location.href,i=Kai.getUrlWithoutHash(t),n=function(){return lastSlashIndex=_.lastIndexOf(t,"/"),lastSlashIndex==i.length-1?!0:!1}();return n},getPureUrl:function(t){var t=t||location.href,i=e.parseUrl(t);return i.domain+i.directory},getUrlWithoutHash:function(){var e,t=location.href.indexOf("#"),i=location.href.indexOf("?");return t>=0?(e=location.href.substring(0,t),i>t&&(e+=location.href.substring(i))):e=location.href,e},getViewPath:function(e){var t;return Kai.viewCollectionData&&_.each(Kai.viewCollectionData,function(i){return i.node===e?void(t=i.id):void 0}),t},replaceViewHash:function(e){var t=Kai.getUrlWithoutHash();_.isString(t)&&location.replace(t+"#"+e)},forwardWithQueryParams:function(e,t){var t=t||{},i=_.extend(Kai.getQueryObj(),t.queryObj||{});_.isString(e)&&Kai.forward(e+"?"+$.param(i),t)},restart:function(e){var t,e=e||{},i=this,n=Kai.getUrlWithoutHash(),o=Kai.getQueryObj(),a=i.getHashFragment(),r=i.getPureUrl(),s="";e.fullPath&&r.indexOf(".html")<0&&(s=r+"index.html"),e.keepQuery&&(t=_.extend(o,e.queryObj||{}),s=(s||r)+"?"+$.param(t)),e.keepHash&&(s=(s||r)+"#"+a),window.location.href=s||n},restartWithHash:function(e){window.location.href=window.location.href},getHashFragment:function(){var e=window.location.href.indexOf("#"),t=location.href.length;return location.href.substring(e+1,t)},getQuery:function(e){var t=this.getQueryObj();return null!=e?(e=e.toLowerCase(),null!=t?t[e]:null):t},getQueryObj:function(){var e,t={};e=this.getUrlWithoutHash(e);for(var i=e.search(/\?/)>-1?e.substr(e.search(/\?/)+1).replace("?","&").split("&"):[],n=0;n<i.length;n++){var o=decodeURIComponent(i[n].split("=")[0]),a=decodeURIComponent(i[n].split("=")[1]);o=o.toLowerCase(),null!=o&&null!=a&&(t[o]=a)}return t},toUrlString:function(e){var t="";return _.each(e,function(e,i){e=null==e?"":e,t+=i+"="+e+"&"}),t.substr(0,t.length-1),t},bind:function(e){var t=this;for(var i in e){var n=i.split(" "),o=_.initial(n).join(" "),a=_.last(n);!function(e,t,i,n,o){n.$el.find(t).on(i,function(t){e[o]&&e[o].call&&e[o].call(n,t)})}(e,a,o,t,i)}},showErrorTip:function(e){},hideErrorTip:function(){$(".js_tooltips").hide()},showLoading:function(e){var t,i=this,e=e||{};if(e.view&&e.view.$el)return t=e.view.$el.find(">.cui_loading"),t.length<=0?(e.view.loadingInstance=new a({container:e.view.$el}),e.view.loadingInstance.display(),!0):(e.view.loadingInstance.reshow(_.extend({container:e.view.$el},e)),!0);if(t=$(".cui_loading.index"),t.length>0){clearTimeout(r),$(".cui_loading:visible").hide(),t.show();var n=_.uniqueId();t.data("UIID",n),r=_.delay(function(){t&&t.length>0&&t.data("UIID")==n&&i.hideLoading()},75e3)}},showLog:function(e){var t;_.isObject(e)?t=e.text:_.isString(e)&&(t=e);var i=$(".cui_log");i.css("display","block"),i.html(t),setTimeout(function(){i.fadeOut("slow")},5e3)},showToast:function(e){var t,n,o,a,r=this;r.hideLoading(),_.isObject(e)?(t=e.text,n=e.stateStyle,o=e.closeTime||2e3,a=e.callback||_.noop):_.isString(e)&&(t=e);var s=new i({});s.display({text:""+t,textClass:"popTextColor",closeTime:o||2e3,callback:a,stateStyle:n})},hideLoading:function(e){e?e.$el&&e.$el.find(">.cui_loading").length>0&&e.$el.find(">.cui_loading").hide():$("body").find(">.cui_loading").length>0&&$("body").find(">.cui_loading").hide()},showConfirm:function(e){e||(e={}),"string"==typeof e&&(e={datamodel:{content:e}}),c.datamodel.btns=[{name:"取消",className:"cui-btns-cancel"},{name:"确定",className:"cui-btns-ok"}],c.setOption(e),c.refresh(),c.show()},hideConfirm:function(){c.hide()},showAlert:function(e){this.showMessage(e)},showMessage:function(e){e||(e={}),"string"==typeof e&&(e={datamodel:{content:e}}),l.setOption(e),l.refresh(),l.show()},hideMessage:function(){l.hide()},getEnv:function(){var e=function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}();return{isH5:e}},getViewState:function(e){var t=Kai.views.get(e),i=t&&t.get("viewInstance");return i?i.fsm.current:void 0},emptyLocalStore:function(e){var t=_.keys(e);_.each(t,function(t){if(t&&_.isString(t)&&t.indexOf("_")<0&&e[t].getInstance){var i=e[t].getInstance();i.remove()}})},app:{code:{is:function(e){return _.isObject(Kai.env)&&Kai.env.envCode==e?!0:!1}}},sendUbt:function(e,t,i){if("undefined"==typeof alog)return!1;if(_.isObject(e)&&e.fsm){var n=u.get();if(!_.isObject(n))return!1;var o={uid:(n.user||{}).username,view:e.viewName},a=e.ubtData,r=_.extend(o,a);i?i&&i.type&&alog(i.type+".send",i.type,_.extend(r,t)):alog("UBT.send","UBT",_.extend(r,t))}},isLogin:function(){var e,t,i=u.get();return Kai.isH5?(e=o.HeadStore.getInstance(),t=e.get(),_.isObject(t)&&!_.isEmpty(t)&&!!t.auth):_.isObject(i)&&!_.isEmpty(i)&&!!i.auth},protocol:function(){return window.location.protocol.indexOf("https")>-1?"https":"http"},back:function(){history.go(-1)},initIonic2:function(){document.getElementsByClassName("main-viewport")[0].style.display="none";var e=document.getElementById("ion-app-container");e&&(e.style.display="block")},safeLogout:function(e){var e=e||{},t=o.UserStore.getInstance();t.remove(),_.isObject(localStorage)&&localStorage.clear(),Kai.forward(Kai.loginUrl,{keepURL:_.isBoolean(e.keepURL)?e.keepURL:!0})},getVersion:function(){return dojoConfig.cacheBust.match(/_v=(\w{0,}).{0,1}\w{0,}_k/)[1]}}),s.Kai=Kai,Kai});