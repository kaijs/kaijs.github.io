define("dojox/charting/plot2d/ClusteredBars",["dojo/_base/declare","dojo/_base/array","./Bars","./common"],function(e,r,s,t){return e("dojox.charting.plot2d.ClusteredBars",s,{getBarProperties:function(){var e=this.series.length;r.forEach(this.series,function(r){r.hidden&&e--});var s=t.calculateBarSize(this._vScaler.bounds.scale,this.opt,e);return{gap:s.gap,height:s.size,thickness:s.size}}})});