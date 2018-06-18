define("dojox/charting/plot2d/Spider",["dojo/_base/lang","dojo/_base/declare","dojo/_base/connect","dojo/_base/array","dojo/dom-geometry","dojo/_base/fx","dojo/fx","dojo/sniff","./Base","./_PlotEvents","./common","../axis2d/common","dojox/gfx","dojox/gfx/matrix","dojox/gfx/fx","dojox/lang/functional","dojox/lang/utils","dojo/fx/easing"],function(t,e,i,a,s,r,o,n,h,l,c,d,p,m,x,u,f,y){var g=e("dojox.charting.plot2d.Spider",[h,l],{defaultParams:{labels:!0,ticks:!1,fixed:!0,precision:1,labelOffset:-10,labelStyle:"default",htmlLabels:!0,startAngle:-90,divisions:3,axisColor:"",axisWidth:0,spiderColor:"",spiderWidth:0,seriesWidth:0,seriesFillAlpha:.2,spiderOrigin:.16,markerSize:3,spiderType:"polygon",animationType:y.backOut,animate:null,axisTickFont:"",axisTickFontColor:"",axisFont:"",axisFontColor:""},optionalParams:{radius:0,font:"",fontColor:""},constructor:function(e,i){this.opt=t.clone(this.defaultParams),f.updateWithObject(this.opt,i),f.updateWithPattern(this.opt,i,this.optionalParams),this.dyn=[],this.datas={},this.labelKey=[],this.oldSeriePoints={},this.animate=null===this.opt.animate?{}:this.opt.animate,this.animations={}},clear:function(){return this.inherited(arguments),this.dyn=[],this.axes=[],this.datas={},this.labelKey=[],this.oldSeriePoints={},this.animations={},this},setAxis:function(t){return t&&(void 0!=t.opt.min&&(this.datas[t.name].min=t.opt.min),void 0!=t.opt.max&&(this.datas[t.name].max=t.opt.max)),this},addSeries:function(t){this.series.push(t);var e;for(e in t.data){var i=t.data[e],a=this.datas[e];if(a)a.vlist.push(i),a.min=Math.min(a.min,i),a.max=Math.max(a.max,i);else{var s="__"+e;this.axes.push(s),this[s]=e,this.datas[e]={min:i,max:i,vlist:[i]}}}if(this.labelKey.length<=0)for(e in t.data)this.labelKey.push(e);return this},getSeriesStats:function(){return c.collectSimpleStats(this.series)},render:function(t,e){if(!this.dirty)return this;this.dirty=!1,this.cleanGroup();var i=this.group,r=this.chart.theme;if(this.resetEvents(),!this.series||!this.series.length)return this;var o,n,h,l,c,x,f,y,g,v,_,b,k,S,j,C,P,w,T,M,F=this.opt,L=r.axis,A=(t.width-e.l-e.r)/2,E=(t.height-e.t-e.b)/2,O=Math.min(A,E),B=F.font||L.majorTick&&L.majorTick.font||L.tick&&L.tick.font||"normal normal normal 7pt Tahoma",W=F.axisFont||L.tick&&L.tick.titleFont||"normal normal normal 11pt Tahoma",G=F.axisTickFontColor||L.majorTick&&L.majorTick.fontColor||L.tick&&L.tick.fontColor||"silver",K=F.axisFontColor||L.tick&&L.tick.titleFontColor||"black",z=F.axisColor||L.tick&&L.tick.axisColor||"silver",I=F.spiderColor||L.tick&&L.tick.spiderColor||"silver",R=F.axisWidth||L.stroke&&L.stroke.width||2,q=F.spiderWidth||L.stroke&&L.stroke.width||2,D=F.seriesWidth||L.stroke&&L.stroke.width||2,H=p.normalizedLength(p.splitFontString(W).size),J=m._degToRad(F.startAngle),N=J,Q=F.spiderOrigin,U=F.divisions>=3?F.divisions:3,V=F.markerSize,X=F.spiderType,Y=F.animationType,Z=F.labelOffset<-10?F.labelOffset:-10,$=.2;F.labels&&(o=a.map(this.series,function(t){return t.name},this),n=u.foldl1(u.map(o,function(t){var e=r.series.font;return p._base._getTextBox(t,{font:e}).w},this),"Math.max(a, b)")/2,O=Math.min(A-2*n,E-H)+Z,h=O-Z),"radius"in F&&(O=F.radius,h=O-Z),O/=1+$;var tt={cx:e.l+A,cy:e.t+E,r:O};for(g=this.series.length-1;g>=0;g--)if(j=this.series[g],this.dirty||j.dirty){if(j.cleanGroup(),C=j.data,null!==C&&(b=this._getObjectLength(C),(!l||l.length<=0)&&(l=[],c=[],y=[],this._buildPoints(l,b,tt,O,N,!0,t),this._buildPoints(c,b,tt,O*Q,N,!0,t),this._buildPoints(y,b,tt,h,N,!1,t),U>2)))for(x=[],f=[],v=0;U-2>v;v++)x[v]=[],this._buildPoints(x[v],b,tt,O*(Q+(1-Q)*(v+1)/(U-1)),N,!0,t),f[v]=O*(Q+(1-Q)*(v+1)/(U-1))}else r.skip();var et=i.createGroup(),it={color:z,width:R},at={color:I,width:q};for(v=l.length-1;v>=0;--v){_=l[v];var st={x:_.x+(_.x-tt.cx)*$,y:_.y+(_.y-tt.cy)*$},rt={x:_.x+(_.x-tt.cx)*$/2,y:_.y+(_.y-tt.cy)*$/2};et.createLine({x1:tt.cx,y1:tt.cy,x2:st.x,y2:st.y}).setStroke(it),this._drawArrow(et,st,rt,it)}var ot=i.createGroup();for(v=y.length-1;v>=0;--v){_=y[v],k=p._base._getTextBox(this.labelKey[v],{font:W}).w||0,S=this.opt.htmlLabels&&"vml"!=p.renderer?"html":"gfx";var nt=d.createText[S](this.chart,ot,s.isBodyLtr()||"html"!=S?_.x:_.x+k-t.width,_.y,"middle",this.labelKey[v],W,K);this.opt.htmlLabels&&this.htmlElements.push(nt)}var ht=i.createGroup();if("polygon"==X){if(ht.createPolyline(l).setStroke(at),ht.createPolyline(c).setStroke(at),x.length>0)for(v=x.length-1;v>=0;--v)ht.createPolyline(x[v]).setStroke(at)}else if(ht.createCircle({cx:tt.cx,cy:tt.cy,r:O}).setStroke(at),ht.createCircle({cx:tt.cx,cy:tt.cy,r:O*Q}).setStroke(at),f.length>0)for(v=f.length-1;v>=0;--v)ht.createCircle({cx:tt.cx,cy:tt.cy,r:f[v]}).setStroke(at);b=this._getObjectLength(this.datas);var lt=i.createGroup(),ct=0;for(var dt in this.datas){for(P=this.datas[dt],w=P.min,T=P.max,M=T-w,vt=N+2*Math.PI*ct/b,g=0;U>g;g++){var pt=w+M*g/(U-1);_=this._getCoordinate(tt,O*(Q+(1-Q)*g/(U-1)),vt,t),pt=this._getLabel(pt),k=p._base._getTextBox(pt,{font:B}).w||0,S=this.opt.htmlLabels&&"vml"!=p.renderer?"html":"gfx",this.opt.htmlLabels&&this.htmlElements.push(d.createText[S](this.chart,lt,s.isBodyLtr()||"html"!=S?_.x:_.x+k-t.width,_.y,"start",pt,B,G))}ct++}for(this.chart.seriesShapes={},g=this.series.length-1;g>=0;g--)if(j=this.series[g],C=j.data,null!==C){var mt=r.next("spider",[F,j]),xt=p.normalizeColor(mt.series.fill),ut={color:mt.series.fill,width:D};if(xt.a=F.seriesFillAlpha,j.dyn={fill:xt,stroke:ut},j.hidden)continue;var ft=[],yt=[];ct=0;for(dt in C){P=this.datas[dt],w=P.min,T=P.max,M=T-w;var gt=C[dt],vt=N+2*Math.PI*ct/b;_=this._getCoordinate(tt,O*(Q+(1-Q)*(gt-w)/M),vt,t),ft.push(_),yt.push({sname:j.name,key:dt,data:gt}),ct++}ft[ft.length]=ft[0],yt[yt.length]=yt[0];var _t=this._getBoundary(ft),bt=j.group,kt=this.oldSeriePoints[j.name],St=this._createSeriesEntry(bt,kt||c,ft,xt,ut,O,Q,V,Y);this.chart.seriesShapes[j.name]=St,this.oldSeriePoints[j.name]=ft;var jt={element:"spider_poly",index:g,id:"spider_poly_"+j.name,run:j,plot:this,shape:St.poly,parent:bt,brect:_t,cx:tt.cx,cy:tt.cy,cr:O,f:xt,s:i};this._connectEvents(jt);var Ct={element:"spider_plot",index:g,id:"spider_plot_"+j.name,run:j,plot:this,shape:j.group};this._connectEvents(Ct),a.forEach(St.circles,function(t,e){var a={element:"spider_circle",index:e,id:"spider_circle_"+j.name+e,run:j,plot:this,shape:t,parent:bt,tdata:yt[e],cx:ft[e].x,cy:ft[e].y,f:xt,s:i};this._connectEvents(a)},this)}return this},_createSeriesEntry:function(e,s,n,h,l,c,d,p,m){for(var x=this.animate?s:n,u=e.createPolyline(x).setFill(h).setStroke(l),f=[],y=0;y<x.length;y++){var g=x[y],v=p,_=e.createCircle({cx:g.x,cy:g.y,r:v}).setFill(h).setStroke(l);f.push(_)}if(this.animate){var b=a.map(n,function(e,a){var o=s[a],n=new r.Animation(t.delegate({duration:1e3,easing:m,curve:[o.y,e.y]},this.animate)),h=u,l=f[a];return i.connect(n,"onAnimate",function(t){var e=h.getShape();e.points[a].y=t,h.setShape(e);var i=l.getShape();i.cy=t,l.setShape(i)}),n},this),k=a.map(n,function(e,a){var o=s[a],n=new r.Animation(t.delegate({duration:1e3,easing:m,curve:[o.x,e.x]},this.animate)),h=u,l=f[a];return i.connect(n,"onAnimate",function(t){var e=h.getShape();e.points[a].x=t,h.setShape(e);var i=l.getShape();i.cx=t,l.setShape(i)}),n},this),S=o.combine(b.concat(k));S.play()}return{group:e,poly:u,circles:f}},plotEvent:function(t){"spider_plot"==t.element&&("onmouseover"!=t.type||n("ie")||t.shape.moveToFront())},tooltipFunc:function(t){return"spider_circle"==t.element?t.tdata.sname+"<br/>"+t.tdata.key+"<br/>"+t.tdata.data:null},_getBoundary:function(t){for(var e=t[0].x,i=t[0].x,a=t[0].y,s=t[0].y,r=0;r<t.length;r++){var o=t[r];e=Math.max(o.x,e),a=Math.max(o.y,a),i=Math.min(o.x,i),s=Math.min(o.y,s)}return{x:i,y:s,width:e-i,height:a-s}},_drawArrow:function(t,e,i,a){var s=Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2)),r=(i.y-e.y)/s,o=(i.x-e.x)/s,n={x:i.x+s/3*-r,y:i.y+s/3*o},h={x:i.x+s/3*r,y:i.y+s/3*-o};t.createPolyline([e,n,h]).setFill(a.color).setStroke(a)},_buildPoints:function(t,e,i,a,s,r,o){for(var n=0;e>n;n++){var h=s+2*Math.PI*n/e;t.push(this._getCoordinate(i,a,h,o))}r&&t.push(this._getCoordinate(i,a,s+2*Math.PI,o))},_getCoordinate:function(t,e,i,a){var s=t.cx+e*Math.cos(i);return n("dojo-bidi")&&this.chart.isRightToLeft()&&a&&(s=a.width-s),{x:s,y:t.cy+e*Math.sin(i)}},_getObjectLength:function(e){var i=0;if(t.isObject(e))for(var a in e)i++;return i},_getLabel:function(t){return c.getLabel(t,this.opt.fixed,this.opt.precision)}});return g});