define("dojox/lang/functional/binrec",["dojo","dijit","dojox","dojo/require!dojox/lang/functional/lambda,dojox/lang/functional/util"],function(_,n,a){_.provide("dojox.lang.functional.binrec"),_.require("dojox.lang.functional.lambda"),_.require("dojox.lang.functional.util"),function(){var _=a.lang.functional,n=_.inlineLambda,t="_x",r=["_z.r","_r","_z.a"];_.binrec=function(a,i,o,l){var e,c,d,u,f,x,p,y,g={},b={},z=function(_){g[_]=1};"string"==typeof a?f=n(a,t,z):(e=_.lambda(a),f="_c.apply(this, _x)",b["_c=_t.c"]=1),"string"==typeof i?x=n(i,t,z):(c=_.lambda(i),x="_t.apply(this, _x)"),"string"==typeof o?p=n(o,t,z):(d=_.lambda(o),p="_b.apply(this, _x)",b["_b=_t.b"]=1),"string"==typeof l?y=n(l,r,z):(u=_.lambda(l),y="_a.call(this, _z.r, _r, _z.a)",b["_a=_t.a"]=1);var j=_.keys(g),h=_.keys(b),s=new Function([],"var _x=arguments,_y,_z,_r".concat(j.length?","+j.join(","):"",h.length?",_t=_x.callee,"+h.join(","):"",c?h.length?",_t=_t.t":"_t=_x.callee.t":"",";while(!",f,"){_r=",p,";_y={p:_y,a:_r[1]};_z={p:_z,a:_x};_x=_r[0]}for(;;){do{_r=",x,';if(!_z)return _r;while("r" in _z){_r=',y,";if(!(_z=_z.p))return _r}_z.r=_r;_x=_y.a;_y=_y.p}while(",f,");do{_r=",p,";_y={p:_y,a:_r[1]};_z={p:_z,a:_x};_x=_r[0]}while(!",f,")}"));return e&&(s.c=e),c&&(s.t=c),d&&(s.b=d),u&&(s.a=u),s}}()});