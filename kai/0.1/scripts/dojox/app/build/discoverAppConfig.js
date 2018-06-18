define(["build/argv","build/fs","build/buildControl","build/messages","build/process","dojox/json/ref"],function(e,l,o,n,r,s){var a=function(e,l,n,r){for(var s in n)if(0!=s.indexOf("_")){var i=n[s];if(i.controller&&"none"!=i.controller){var t=i.controller.replace(/(\.js)$/,"");!o.layers[t]&&o.multipleAppConfigLayers&&(o.layers[t]={include:[],exclude:["dojo/dojo",l]},e=o.layers[t].include),e.push(t)}i.template&&(r.text||(r.text=!0,o.layers[l].include.push("dojo/text")),e.push(i.template)),i.nls&&(r.nls||(r.nls=!0,o.layers[l].include.push("dojo/i18n")),e.push(i.nls)),i.dependencies&&Array.prototype.splice.apply(e,[e.length,0].concat(i.dependencies)),i.views&&a(e,l,i.views,r)}};return function(){var i;try{i=s.fromJson(l.readFileSync(o.getSrcModuleInfo(e.args.appConfigFile,null,!1).url))}catch(t){}if(i){var p=[],c={};i.loaderConfig&&require(i.loaderConfig);var d;if(e.args.appConfigLayer)d=e.args.appConfigLayer,o.layers[d]||(o.layers[d]={include:[],exclude:["dojo/dojo"]});else for(var u in o.layers){d=u;break}i.dependencies&&(p=p.concat(i.dependencies)),i.controllers&&(p=p.concat(i.controllers)),i.modules&&(p=p.concat(i.modules)),i.transit?p.push(i.transit):p.push("dojox/css3/transit"),i.template&&(c.text=!0,o.layers[d].include.push("dojo/text"),p.push(i.template)),i.controller&&"none"!=i.controller&&p.push(i.controller.replace(/(\.js)$/,"")),i.nls&&(c.nls=!0,o.layers[d].include.push("dojo/i18n"),p.push(i.nls)),i.view?p.push(i.view):p.push("dojox/app/View"),i.views&&a(p,d,i.views,c),Array.prototype.splice.apply(o.layers[d].include,[o.layers[d].length,0].concat(p))}else n.log("pacify",e.args.appConfigFile+" is not a valid dojox/app JSON config file"),r.exit(-1)}});