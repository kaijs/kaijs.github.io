define("data/storage/c.session.storage",["common/c.class.inherit","data/storage/c.abstract.storage"],function(t,n){var s=new t.Class(n,{__propertys__:function(){},initialize:function($super,t){this.proxy=window.sessionStorage,$super(t)}});return s.getInstance=function(){return this.instance?this.instance:this.instance=new this},s.sessionStorage=s.getInstance(),s});