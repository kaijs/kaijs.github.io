define("data/store/common/c.head.store",["common/c.class.inherit","../c.local.store","cutil/c.util.common"],function(t,e,i){var s=new t.Class(e,{__propertys__:function(){this.key="HEADSTORE",this.lifeTime="0.5D",this.defaultData={cid:i.getGuid(),ctok:"",cver:"1.0",lang:"01",sid:"8888",syscode:"09",auth:"",grayTestCode:Kai.getQuery().graytestcode}},initialize:function($super,t){_.isFunction($super)&&$super(t)},setAuth:function(t){this.setAttr("auth",t),this.setAttr("X-Sso-Token",t)}});return s});