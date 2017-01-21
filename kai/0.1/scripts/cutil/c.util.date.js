define("cutil/c.util.date",["common/c.class.inherit","dojo/date/locale"],function(e,t,n){var r=new e.Class({localeFormat:function(e,n){var n=n||{};return e?_.isString(e)&&e.indexOf("T")<0?e:t.format(new Date(e),{datePattern:n.datePattern||"yyyy-MM-dd HH:mm:ss",selector:"date"}):!1},initialize:function(e){e=e||new Date,this.date=new Date(e)},addDay:function(e){return e=e||0,this.date.setDate(this.date.getDate()+e),this},addMonth:function(e){return e=e||0,this.date.setMonth(this.date.getMonth()+e),this},addHours:function(e){return e=e||0,this.date.setHours(this.date.getHours()+e),this},addMinutes:function(e){return e=e||0,this.date.setMinutes(this.date.getMinutes()+e),this},addSeconds:function(e){return e=e||0,this.date.setSeconds(this.date.getSeconds()+e),this},addYear:function(e){return e=e||0,this.date.setYear(this.date.getFullYear()+e),this},setHours:function(){return this.date.setHours.apply(this.date,arguments),this},valueOf:function(){return this.date},getTime:function(){return this.date.valueOf()},toString:function(){return this.date.toString()},format:function(e){"string"!=typeof e&&(e="");for(var t in this._MAPS)e=this._MAPS[t].call(this,e,this.date,t);return e},diffMonth:function(e){var t=parseInt(this.format("Y"),10),n=parseInt(this.format("m"),10),a=new r(e),i=parseInt(a.format("Y"),10),u=parseInt(a.format("m"),10);return 12*(i-t)+(u-n)},_DAY1:["周日","周一","周二","周三","周四","周五","周六"],_DAY2:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],_MAPS:{d:function(e,t,n){var r=t.getDate().toString();return r.length<2&&(r="0"+r),e.replace(new RegExp(n,"mg"),r)},j:function(e,t,n){return e.replace(new RegExp(n,"mg"),t.getDate())},N:function(e,t,n){var r=t.getDay();return 0===r&&(r=7),e.replace(new RegExp(n,"mg"),r)},w:function(e,t,n){var r=t.getDay(),a=this._DAY1[r];return e.replace(new RegExp(n,"mg"),a)},W:function(e,t,n){var r=t.getDay(),a=this._DAY2[r];return e.replace(new RegExp(n,"mg"),a)},m:function(e,t,n){var r=(t.getMonth()+1).toString();return r.length<2&&(r="0"+r),e.replace(new RegExp(n,"mg"),r)},n:function(e,t,n){return e.replace(n,t.getMonth()+1)},Y:function(e,t,n){return e.replace(new RegExp(n,"mg"),t.getFullYear())},y:function(e,t,n){return e.replace(new RegExp(n,"mg"),t.getYear())},g:function(e,t,n){var r=t.getHours();return r>=12&&(r-=12),e.replace(new RegExp(n,"mg"),r)},G:function(e,t,n){return e.replace(new RegExp(n,"mg"),t.getHours())},h:function(e,t,n){var r=t.getHours();return r>=12&&(r-=12),r+="",r.length<2&&(r="0"+r),e.replace(new RegExp(n,"mg"),r)},H:function(e,t,n){var r=t.getHours().toString();return r.length<2&&(r="0"+r),e.replace(new RegExp(n,"mg"),r)},i:function(e,t,n){var r=t.getMinutes().toString();return r.length<2&&(r="0"+r),e.replace(new RegExp(n,"mg"),r)},s:function(e,t,n){var r=t.getSeconds().toString();return r.length<2&&(r="0"+r),e.replace(new RegExp(n,"mg"),r)},I:function(e,t,n){var r=t.getMinutes().toString();return e.replace(new RegExp(n,"mg"),r)},S:function(e,t,n){var r=t.getSeconds().toString();return e.replace(new RegExp(n,"mg"),r)},D:function(e,t,n){var a=r.getServerDate();a.setHours(0,0,0,0),t=new Date(t.valueOf()),t.setHours(0,0,0,0);var i=864e5,u="",o=t-a;return o>=0&&(i>o?u="今天":2*i>o?u="明天":3*i>o&&(u="后天")),e.replace(new RegExp(n,"mg"),u)}}});return e.extend(r,{parse:function(e,t){if("undefined"==typeof e)return new Date;if("string"==typeof e){e=e||"";var n=/^(\d{4})\-?(\d{1,2})\-?(\d{1,2})/i;e.match(n)&&(e=e.replace(n,"$2/$3/$1"));var a=Date.parse(e),i=new Date(a||new Date);return t?i:new r(i)}return"number"==typeof e?new Date(e):new Date},getHM:function(e){var t=this._getDate(e),n=t.getHours(),r=t.getMinutes();return(10>n?"0"+n:""+n)+":"+(10>r?"0"+r:""+r)},getIntervalDay:function(e,t){var n=this._getDate(e),r=this._getDate(t);return n.setHours(0,0,0,0),r.setHours(0,0,0,0),parseInt((r-n)/864e5)},m2H:function(e){var t=Math.floor(e/60),n=e%60;return(t>0?t+"小时":"")+(n>0?n+"分钟":"")},_getDate:function(e){var t=r.parse(e,!0),n=new Date;return n.setTime(t),n},format:function(e,t){return new r(e).format(t)},weekday:function(e){var t=["周日","周一","周二","周三","周四","周五","周六"],n=new Date(e);return t[n.getDay()]},diffMonth:function(e,t){return e=new r(e),e.diffMonth(t)},getServerDate:function(e){var t=new Date,n=function(t){return"function"==typeof e?e(t):t},r=function(){var e=window.localStorage.getItem("SERVERDATE");if(!e)return n(t);try{if(e=JSON.parse(e),e&&e.server&&e.local){var r=window.parseInt(e.server),a=window.parseInt(e.local),i=(new Date).getTime(),u=new Date(r+i-a);return n(u)}return n(t)}catch(o){return n(t)}},a=function(){if("undefined"==typeof __SERVERDATE__||!__SERVERDATE__.server)return n(t);var e=new Date(__SERVERDATE__.server.valueOf()+((new Date).valueOf()-__SERVERDATE__.local.valueOf()));return n(e)};return Kai.isHybrid?r():a()}}),r});