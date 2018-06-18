define("dojox/xmpp/sasl",["dojo","dijit","dojox","dojo/require!dojox/xmpp/util,dojo/AdapterRegistry,dojox/encoding/digests/MD5"],function(s,e,n){s.provide("dojox.xmpp.sasl"),s.require("dojox.xmpp.util"),s.require("dojo.AdapterRegistry"),s.require("dojox.encoding.digests.MD5"),n.xmpp.sasl.saslNS="urn:ietf:params:xml:ns:xmpp-sasl",s.declare("dojox.xmpp.sasl._Base",null,{mechanism:null,closeAuthTag:!0,constructor:function(s){this.session=s,this.startAuth()},startAuth:function(){var s=new n.string.Builder(n.xmpp.util.createElement("auth",{xmlns:n.xmpp.sasl.saslNS,mechanism:this.mechanism},this.closeAuthTag));this.appendToAuth(s),this.session.dispatchPacket(s.toString())},appendToAuth:function(s){},onChallenge:function(s){this.first_challenge?this.onSecondChallenge(s):(this.first_challenge=!0,this.onFirstChallenge(s))},onFirstChallenge:function(){},onSecondChallenge:function(){},onSuccess:function(){this.session.sendRestart()}}),s.declare("dojox.xmpp.sasl.SunWebClientAuth",n.xmpp.sasl._Base,{mechanism:"SUN-COMMS-CLIENT-PROXY-AUTH"}),s.declare("dojox.xmpp.sasl.Plain",n.xmpp.sasl._Base,{mechanism:"PLAIN",closeAuthTag:!1,appendToAuth:function(s){var e=this.session.jid,t=this.session.jid.indexOf("@");-1!=t&&(e=this.session.jid.substring(0,t));var i=this.session.jid+"\x00"+e+"\x00"+this.session.password;i=n.xmpp.util.Base64.encode(i),s.append(i),s.append("</auth>"),delete this.session.password}}),s.declare("dojox.xmpp.sasl.DigestMD5",n.xmpp.sasl._Base,{mechanism:"DIGEST-MD5",onFirstChallenge:function(s){var e=n.encoding.digests,t=n.encoding.digests.outputTypes,i=function(s){return e.MD5(s,t.Hex)},o=function(s){return e.MD5(s,t.String)},a=n.xmpp.util.Base64.decode(s.firstChild.nodeValue),r={realm:"",nonce:"",qop:"auth",maxbuf:65536};a.replace(/([a-z]+)=([^,]+)/g,function(s,e,n){n=n.replace(/^"(.+)"$/,"$1"),r[e]=n});var p="";switch(r.qop){case"auth-int":case"auth-conf":p=":00000000000000000000000000000000";case"auth":break;default:return!1}var l=e.MD5(1234567890*Math.random(),t.Hex),d="xmpp/"+this.session.domain,u=this.session.jid,c=this.session.jid.indexOf("@");-1!=c&&(u=this.session.jid.substring(0,c)),u=n.xmpp.util.encodeJid(u);var h=new n.string.Builder;h.append(o(u+":"+r.realm+":"+this.session.password),":",r.nonce+":"+l),delete this.session.password;var m=":"+d+p,x="AUTHENTICATE"+m,g=new n.string.Builder;g.append(i(h.toString()),":",r.nonce,":00000001:",l,":",r.qop,":");var f=new n.string.Builder;f.append('username="',u,'",','realm="',r.realm,'",',"nonce=",r.nonce,",",'cnonce="',l,'",','nc="00000001",qop="',r.qop,'",digest-uri="',d,'",','response="',i(g.toString()+i(x)),'",charset="utf-8"');var S=new n.string.Builder(n.xmpp.util.createElement("response",{xmlns:n.xmpp.xmpp.SASL_NS},!1));S.append(n.xmpp.util.Base64.encode(f.toString())),S.append("</response>"),this.rspauth=i(g.toString()+i(m)),this.session.dispatchPacket(S.toString())},onSecondChallenge:function(s){var e=n.xmpp.util.Base64.decode(s.firstChild.nodeValue);if(this.rspauth==e.substring(8)){var t=new n.string.Builder(n.xmpp.util.createElement("response",{xmlns:n.xmpp.xmpp.SASL_NS},!0));this.session.dispatchPacket(t.toString())}}}),n.xmpp.sasl.registry=new s.AdapterRegistry,n.xmpp.sasl.registry.register("SUN-COMMS-CLIENT-PROXY-AUTH",function(s){return"SUN-COMMS-CLIENT-PROXY-AUTH"==s},function(s,e){return new n.xmpp.sasl.SunWebClientAuth(e)}),n.xmpp.sasl.registry.register("DIGEST-MD5",function(s){return"DIGEST-MD5"==s},function(s,e){return new n.xmpp.sasl.DigestMD5(e)}),n.xmpp.sasl.registry.register("PLAIN",function(s){return"PLAIN"==s},function(s,e){return new n.xmpp.sasl.Plain(e)})});