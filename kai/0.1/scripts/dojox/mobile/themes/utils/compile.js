function batch(){batchIndex<batchQueue.length&&(batchQueue[batchIndex](),batchIndex++)}function beginProcess(){processProgress++}function endProcess(){processProgress--,0==processProgress&&batch()}function processFolder(e,s){var r=getLessFiles(e);if(s){var o,c=getLessFiles("../common");c.array.forEach(function(s){var t=r.dic[c.dic[s]];if(t)o=t.replace(".less",".css"),applyLess(t,null,o);else{var n=c.dic[s];o=e+"/"+n.replace(".less",".css"),-1==n.indexOf("_rtl")?applyLess(s,'@import "'+e+'/variables.less";',o):applyLess(s,'@import "'+e+'/variables_rtl.less";',o)}})}else r.array.forEach(function(e){applyLess(e,null,e.replace(".less",".css"))})}function applyLess(e,s,r){beginProcess();var o=new less.Parser({paths:[path.dirname(e)],filename:e,optimization:1}),c=fs.readFileSync(e,"utf-8");s&&(c=s+c),o.parse(c,function(e,s){e&&(less.writeError(e),process.exit(1));var o=fs.openSync(r,"w");fs.write(o,s.toCSS({compress:!1}).replace(/\n/g,"\r\n"),0,"utf-8",function(e){fs.close(o),endProcess()})})}function getLessFiles(e){var s={},r=fs.readdirSync(e);return r=r.filter(function(e){return e&&/\.less$/.test(e)&&!/variables\.less$/.test(e)&&!/css3\.less$/.test(e)&&!/variables_rtl\.less$/.test(e)}),r=r.map(function(r){return s[r]=e+"/"+r,s[e+"/"+r]=r,s[r]}),{array:r,dic:s}}var fs=require("fs"),path=require("path"),less=require("less"),themeFolders=["../android","../iphone","../blackberry","../holodark","../windows","../custom","../ios7"],commonFolders=["../common/domButtons","../common/transitions"],batchQueue=[],batchIndex=0,processProgress=0;themeFolders.forEach(function(e){batchQueue.push(function(){processFolder(e,!0),processFolder(e+"/dijit",!1)})}),commonFolders.forEach(function(e){batchQueue.push(function(){processFolder(e,!1)})}),batch();