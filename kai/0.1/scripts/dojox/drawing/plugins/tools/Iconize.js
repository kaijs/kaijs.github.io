define("dojox/drawing/plugins/tools/Iconize",["dojo","../../util/oo","../_Plugin","../../manager/_registry"],function(n,i,o,t){var a=i.declare(o,function(n){},{onClick:function(){var n;for(var i in this.stencils.stencils)if("path"==this.stencils.stencils[i].shortType){n=this.stencils.stencils[i];break}n&&this.makeIcon(n.points)},makeIcon:function(i){var o=function(n){return Number(n.toFixed(1))},t=1e4,a=1e4;i.forEach(function(n){void 0===n.x||isNaN(n.x)||(t=Math.min(t,n.x),a=Math.min(a,n.y))});var e=0,s=0;i.forEach(function(n){void 0===n.x||isNaN(n.x)||(n.x=o(n.x-t),n.y=o(n.y-a),e=Math.max(e,n.x),s=Math.max(s,n.y))});var c=60,r=20;i.forEach(function(n){n.x=o(n.x/e)*c+r,n.y=o(n.y/s)*c+r});var l="[\n";n.forEach(i,function(n,o){l+="{	",n.t&&(l+="t:'"+n.t+"'"),void 0===n.x||isNaN(n.x)||(n.t&&(l+=", "),l+="x:"+n.x+",		y:"+n.y),l+="	}",o!=i.length-1&&(l+=","),l+="\n"}),l+="]";var u=n.byId("data");u&&(u.value=l)}});return a.setup={name:"dojox.drawing.plugins.tools.Iconize",tooltip:"Iconize Tool",iconClass:"iconPan"},n.setObject("dojox.drawing.plugins.tools.Iconize",a),t.register(a.setup,"plugin"),a});