define("dojox/editor/plugins/_SpellCheckParser",["dojo","dojox","dojo/_base/connect","dojo/_base/declare"],function(e,r){var n=e.declare("dojox.editor.plugins._SpellCheckParser",null,{lang:"english",parseIntoWords:function(e){function r(e){var r=e.charCodeAt(0);return r>=48&&57>=r||r>=65&&90>=r||r>=97&&122>=r}for(var n=this.words=[],o=this.indices=[],s=0,i=e&&e.length,t=0;i>s;){for(var c;i>s&&!r(c=e.charAt(s))&&"&"!=c;)s++;if("&"==c)for(;++s<i&&";"!=(c=e.charAt(s))&&r(c););else{for(t=s;++s<i&&r(e.charAt(s)););i>t&&(n.push(e.substring(t,s)),o.push(t))}}return n},getIndices:function(){return this.indices}});return e.subscribe(dijit._scopeName+".Editor.plugin.SpellCheck.getParser",null,function(e){e.parser||(e.parser=new n)}),n});