define("dojox/geo/openlayers/JsonImport",["dojo/_base/declare","dojo/_base/xhr","dojo/_base/lang","dojo/_base/array","./LineString","./Collection","./GeometryFeature"],function(r,a,e,t,o,n,s){return r("dojox.geo.openlayers.JsonImport",null,{constructor:function(r){this._params=r},loadData:function(){var r=this._params;a.get({url:r.url,handleAs:"json",sync:!0,load:e.hitch(this,this._gotData),error:e.hitch(this,this._loadError)})},_gotData:function(r){var a=this._params.nextFeature;if(e.isFunction(a)){var o=r.layerExtent,i=o[0],l=o[1],h=i+o[2],u=l+o[3],c=r.layerExtentLL,m=c[0],_=c[1],p=m+c[2],v=_+c[3],f=m,y=v,d=p,g=_,j=r.features;for(var x in j){var F=j[x],k=F.shape,w=null;if(e.isArray(k[0])){var E=new Array;t.forEach(k,function(r){var a=this._makeGeometry(r,i,l,h,u,f,y,d,g);E.push(a)},this);var b=new n(E);w=new s(b),a.call(this,w)}else w=this._makeFeature(k,i,l,h,u,f,y,d,g),a.call(this,w)}var G=this._params.complete;e.isFunction(G)&&G.call(this,G)}},_makeGeometry:function(r,a,e,t,n,s,i,l,h){for(var u=[],c=0,m=0;m<r.length-1;m+=2){var _=r[m],p=r[m+1];c=(_-a)/(t-a);var v=c*(l-s)+s;c=(p-e)/(n-e);var f=c*(h-i)+i;u.push({x:v,y:f})}var y=new o(u);return y},_makeFeature:function(r,a,e,t,o,n,i,l,h){var u=this._makeGeometry(r,a,e,t,o,n,i,l,h),c=new s(u);return c},_loadError:function(){var r=this._params.error;e.isFunction(r)&&r.apply(this,parameters)}})});