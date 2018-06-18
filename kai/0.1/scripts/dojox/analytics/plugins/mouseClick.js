define("dojox/analytics/plugins/mouseClick",["dojo/_base/lang","../_base","dojo/_base/config","dojo/_base/window","dojo/on"],function(t,e,a,s,i){return e.plugins.mouseClick=new function(){this.addData=t.hitch(e,"addData","mouseClick"),this.targetProps=a.targetProps||["id","className","nodeName","localName","href","spellcheck","lang"],this.textContentMaxChars=a.textContentMaxChars||50,this.onClick=function(t){this.addData(this.trimEvent(t))},i(s.doc,"click",t.hitch(this,"onClick")),this.trimEvent=function(t){var e={};for(var a in t)switch(a){case"target":case"originalTarget":case"explicitOriginalTarget":var s=this.targetProps;e[a]={};for(var i=0;i<s.length;i++)t[a][s[i]]&&("text"==s[i]||"textContent"==s[i]?"HTML"!=t[a].localName&&"BODY"!=t[a].localName&&(e[a][s[i]]=t[a][s[i]].substr(0,this.textContentMaxChars)):e[a][s[i]]=t[a][s[i]]);break;case"clientX":case"clientY":case"pageX":case"pageY":case"screenX":case"screenY":e[a]=t[a]}return e}}});