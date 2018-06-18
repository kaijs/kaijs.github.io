define("dojox/date/buddhist",["..","dojo/_base/lang","dojo/date","./buddhist/Date"],function(e,a,t,r){var n=a.getObject("date.buddhist",!0,e);return n.getDaysInMonth=function(e){return t.getDaysInMonth(e.toGregorian())},n.isLeapYear=function(e){return t.isLeapYear(e.toGregorian())},n.compare=function(e,a,r){return t.compare(e,a,r)},n.add=function(e,a,t){var n=new r(e);switch(a){case"day":n.setDate(e.getDate(!0)+t);break;case"weekday":var s,o,c=t%5;c?(s=c,o=parseInt(t/5)):(s=t>0?5:-5,o=t>0?(t-5)/5:(t+5)/5);var i=e.getDay(),d=0;6==i&&t>0?d=1:0==i&&0>t&&(d=-1);var g=i+s;(0==g||6==g)&&(d=t>0?2:-2),t=7*o+s+d,n.setDate(e.getDate(!0)+t);break;case"year":n.setFullYear(e.getFullYear()+t);break;case"week":t*=7,n.setDate(e.getDate(!0)+t);break;case"month":n.setMonth(e.getMonth()+t);break;case"hour":n.setHours(e.getHours()+t);break;case"minute":n._addMinutes(t);break;case"second":n._addSeconds(t);break;case"millisecond":n._addMilliseconds(t)}return n},n.difference=function(e,a,t){a=a||new r,t=t||"day";var s=a.getFullYear()-e.getFullYear(),o=1;switch(t){case"weekday":var c=Math.round(n.difference(e,a,"day")),i=parseInt(n.difference(e,a,"week")),d=c%7;if(0==d)c=5*i;else{var g=0,u=e.getDay(),b=a.getDay();i=parseInt(c/7),d=c%7;var k=new r(a);k.setDate(k.getDate(!0)+7*i);var l=k.getDay();if(c>0)switch(!0){case 5==u:g=-1;break;case 6==u:g=0;break;case 5==b:g=-1;break;case 6==b:g=-2;break;case l+d>5:g=-2}else if(0>c)switch(!0){case 5==u:g=0;break;case 6==u:g=1;break;case 5==b:g=2;break;case 6==b:g=1;break;case 0>l+d:g=2}c+=g,c-=2*i}o=c;break;case"year":o=s;break;case"month":var h=a.toGregorian()>e.toGregorian()?a:e,f=a.toGregorian()>e.toGregorian()?e:a,y=h.getMonth(),D=f.getMonth();if(0==s)o=h.getMonth()-f.getMonth();else{o=12-D,o+=y;var v=f.getFullYear()+1,w=h.getFullYear();for(v;w>v;v++)o+=12}a.toGregorian()<e.toGregorian()&&(o=-o);break;case"week":o=parseInt(n.difference(e,a,"day")/7);break;case"day":o/=24;case"hour":o/=60;case"minute":o/=60;case"second":o/=1e3;case"millisecond":o*=a.toGregorian().getTime()-e.toGregorian().getTime()}return Math.round(o)},n});