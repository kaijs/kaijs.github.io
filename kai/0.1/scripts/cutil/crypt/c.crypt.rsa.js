// Copyright 1998-2005 David Shapiro.

// Copyright 2004-2005 David Shapiro.

define("cutil/crypt/c.crypt.rsa",[],function(){function t(i){H=i,I=new Array(H);for(var t=0;t<I.length;t++)I[t]=0;J=new r,K=new r,K.digits[0]=1}function r(i){"boolean"==typeof i&&i===!0?this.digits=null:this.digits=I.slice(0),this.isNeg=!1}function s(i){var t=new r(!0);return t.digits=i.digits.slice(0),t.isNeg=i.isNeg,t}function e(i){var t=new r;t.isNeg=0>i,i=Math.abs(i);for(var s=0;i>0;)t.digits[s++]=i&T,i=Math.floor(i/P);return t}function g(i){for(var t="",r=i.length-1;r>-1;--r)t+=i.charAt(r);return t}function n(i,t){var s=new r;s.digits[0]=t;for(var e=D(i,s),n=U[e[1].digits[0]];1==C(e[0],J);)e=D(e[0],s),digit=e[1].digits[0],n+=U[e[1].digits[0]];return(i.isNeg?"-":"")+g(n)}function d(t){var r=15,s="";for(i=0;i<4;++i)s+=V[t&r],t>>>=4;return g(s)}function u(i){for(var t="",r=(l(i),l(i));r>-1;--r)t+=d(i.digits[r]);return t}function a(i){var t,r=48,s=r+9,e=97,g=e+25,n=65,d=90;return t=i>=r&&s>=i?i-r:i>=n&&d>=i?10+i-n:i>=e&&g>=i?10+i-e:0}function o(i){for(var t=0,r=Math.min(i.length,4),s=0;r>s;++s)t<<=4,t|=a(i.charCodeAt(s));return t}function h(i){for(var t=new r,s=i.length,e=s,g=0;e>0;e-=4,++g)t.digits[g]=o(i.substr(Math.max(e-4,0),Math.min(e,4)));return t}function f(i,t){var s;if(i.isNeg!=t.isNeg)t.isNeg=!t.isNeg,s=c(i,t),t.isNeg=!t.isNeg;else{s=new r;for(var e,g=0,n=0;n<i.digits.length;++n)e=i.digits[n]+t.digits[n]+g,s.digits[n]=e%P,g=Number(e>=P);s.isNeg=i.isNeg}return s}function c(i,t){var s;if(i.isNeg!=t.isNeg)t.isNeg=!t.isNeg,s=f(i,t),t.isNeg=!t.isNeg;else{s=new r;var e,g;g=0;for(var n=0;n<i.digits.length;++n)e=i.digits[n]-t.digits[n]+g,s.digits[n]=e%P,s.digits[n]<0&&(s.digits[n]+=P),g=0-Number(0>e);if(-1==g){for(g=0,n=0;n<i.digits.length;++n)e=0-s.digits[n]+g,s.digits[n]=e%P,s.digits[n]<0&&(s.digits[n]+=P),g=0-Number(0>e);s.isNeg=!i.isNeg}else s.isNeg=i.isNeg}return s}function l(i){for(var t=i.digits.length-1;t>0&&0===i.digits[t];)--t;return t}function v(i){var t,r=l(i),s=i.digits[r],e=(r+1)*O;for(t=e;t>e-O&&0===(32768&s);--t)s<<=1;return t}function N(i,t){for(var s,e,g,n=new r,d=l(i),u=l(t),a=0;u>=a;++a){for(s=0,g=a,j=0;j<=d;++j,++g)e=n.digits[g]+i.digits[j]*t.digits[a]+s,n.digits[g]=e&T,s=e>>>L;n.digits[a+d+1]=s}return n.isNeg=i.isNeg!=t.isNeg,n}function A(i,t){var s,e,g;result=new r,s=l(i),e=0;for(var n=0;s>=n;++n)g=result.digits[n]+i.digits[n]*t+e,result.digits[n]=g&T,e=g>>>L;return result.digits[1+s]=e,result}function w(i,t,r,s,e){for(var g=Math.min(t+e,i.length),n=t,d=s;g>n;++n,++d)r[d]=i[n]}function m(i,t){var s=Math.floor(t/O),e=new r;w(i.digits,0,e.digits,s,e.digits.length-s);for(var g=t%O,n=O-g,d=e.digits.length-1,u=d-1;d>0;--d,--u)e.digits[d]=e.digits[d]<<g&T|(e.digits[u]&W[g])>>>n;return e.digits[0]=e.digits[d]<<g&T,e.isNeg=i.isNeg,e}function B(i,t){var s=Math.floor(t/O),e=new r;w(i.digits,s,e.digits,0,i.digits.length-s);for(var g=t%O,n=O-g,d=0,u=d+1;d<e.digits.length-1;++d,++u)e.digits[d]=e.digits[d]>>>g|(e.digits[u]&X[g])<<n;return e.digits[e.digits.length-1]>>>=g,e.isNeg=i.isNeg,e}function b(i,t){var s=new r;return w(i.digits,0,s.digits,t,s.digits.length-t),s}function k(i,t){var s=new r;return w(i.digits,t,s.digits,0,s.digits.length-t),s}function M(i,t){var s=new r;return w(i.digits,0,s.digits,0,t),s}function C(i,t){if(i.isNeg!=t.isNeg)return 1-2*Number(i.isNeg);for(var r=i.digits.length-1;r>=0;--r)if(i.digits[r]!=t.digits[r])return i.isNeg?1-2*Number(i.digits[r]>t.digits[r]):1-2*Number(i.digits[r]<t.digits[r]);return 0}function D(i,t){var e,g,n=v(i),d=v(t),u=t.isNeg;if(d>n)return i.isNeg?(e=s(K),e.isNeg=!t.isNeg,i.isNeg=!1,t.isNeg=!1,g=c(t,i),i.isNeg=!0,t.isNeg=u):(e=new r,g=s(i)),new Array(e,g);e=new r,g=i;for(var a=Math.ceil(d/O)-1,o=0;t.digits[a]<Q;)t=m(t,1),++o,++d,a=Math.ceil(d/O)-1;g=m(g,o),n+=o;for(var h=Math.ceil(n/O)-1,N=b(t,h-a);-1!=C(g,N);)++e.digits[h-a],g=c(g,N);for(var w=h;w>a;--w){var k=w>=g.digits.length?0:g.digits[w],M=w-1>=g.digits.length?0:g.digits[w-1],D=w-2>=g.digits.length?0:g.digits[w-2],E=a>=t.digits.length?0:t.digits[a],y=a-1>=t.digits.length?0:t.digits[a-1];k==E?e.digits[w-a-1]=T:e.digits[w-a-1]=Math.floor((k*P+M)/E);for(var z=e.digits[w-a-1]*(E*P+y),p=k*R+(M*P+D);z>p;)--e.digits[w-a-1],z=e.digits[w-a-1]*(E*P|y),p=k*P*P+(M*P+D);N=b(t,w-a-1),g=c(g,A(N,e.digits[w-a-1])),g.isNeg&&(g=f(g,N),--e.digits[w-a-1])}return g=B(g,o),e.isNeg=i.isNeg!=u,i.isNeg&&(e=u?f(e,K):c(e,K),t=B(t,o),g=c(t,g)),0===g.digits[0]&&0===l(g)&&(g.isNeg=!1),new Array(e,g)}function E(i,t){return D(i,t)[0]}function y(i){this.modulus=s(i),this.k=l(this.modulus)+1;var t=new r;t.digits[2*this.k]=1,this.mu=E(t,this.modulus),this.bkplus1=new r,this.bkplus1.digits[this.k+1]=1,this.modulo=z,this.multiplyMod=p,this.powMod=S}function z(i){var t=k(i,this.k-1),r=N(t,this.mu),s=k(r,this.k+1),e=M(i,this.k+1),g=N(s,this.modulus),n=M(g,this.k+1),d=c(e,n);d.isNeg&&(d=f(d,this.bkplus1));for(var u=C(d,this.modulus)>=0;u;)d=c(d,this.modulus),u=C(d,this.modulus)>=0;return d}function p(i,t){var r=N(i,t);return this.modulo(r)}function S(i,t){var s=new r;s.digits[0]=1;for(var e=i,g=t;;){if(0!==(1&g.digits[0])&&(s=this.multiplyMod(s,e)),g=B(g,1),0===g.digits[0]&&0===l(g))break;e=this.multiplyMod(e,e)}return s}function F(i,t,r){this.e=h(i),this.d=h(t),this.m=h(r),this.digitSize=2*l(this.m)+2,this.chunkSize=this.digitSize-11,this.radix=16,this.barrett=new y(this.m)}function x(i,t){if(i.chunkSize>i.digitSize-11)return"Error";for(var s=[],e=t.length,g=0;e>g;)s[g]=t.charCodeAt(g),g++;var d,a,o,h=s.length,f="";for(g=0;h>g;g+=i.chunkSize){o=new r,d=0;var c,l=g+i.chunkSize>h?h%i.chunkSize:i.chunkSize,v=[];for(c=0;l>c;c++)v[c]=s[g+l-1-c];v[l]=0;var N=Math.max(8,i.digitSize-3-l);for(c=0;N>c;c++)v[l+1+c]=Math.floor(254*Math.random())+1;for(v[i.digitSize-2]=2,v[i.digitSize-1]=0,a=0;a<i.digitSize;++d)o.digits[d]=v[a++],o.digits[d]+=v[a++]<<8;var A=i.barrett.powMod(o,i.e),w=16==i.radix?u(A):n(A,i.radix);f+=w+" "}return f.substring(0,f.length-1)}function q(i){var t,r,s,e,g,n,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);for(s=i.length,r=0,t="";s>r;){if(e=255&i.charCodeAt(r++),r==s){t+=d.charAt(e>>2),t+=d.charAt((3&e)<<4),t+="==";break}if(g=i.charCodeAt(r++),r==s){t+=d.charAt(e>>2),t+=d.charAt((3&e)<<4|(240&g)>>4),t+=d.charAt((15&g)<<2),t+="=";break}n=i.charCodeAt(r++),t+=d.charAt(e>>2),t+=d.charAt((3&e)<<4|(240&g)>>4),t+=d.charAt((15&g)<<2|(192&n)>>6),t+=d.charAt(63&n)}return t}function G(i){var t=x(Y,q(i));return t}var H,I,J,K,L=16,O=L,P=65536,Q=P>>>1,R=P*P,T=P-1;t(20);var U=(e(1e15),new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")),V=new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"),W=new Array(0,32768,49152,57344,61440,63488,64512,65024,65280,65408,65472,65504,65520,65528,65532,65534,65535),X=new Array(0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535);t(131);var Y=new F("10001","","B7273B08845EB1D93C9A6EB9C45BE087AF9E692C8B7DD6D38DECFA732E9A6CDCB52106BDDB9E13100AEF3638358D5B5EB9011C33B7AC3F697078C0572585B94119196F627025C6E7FA9AA5C82B149E2BB30FEA7D777AA453324A301FD46413E11A7DB4A9D5B2D4BD6330AE2C477D48250F057ABEF2BD76DC7574897254736A71"),Z=G;return{rsaEncrypted:Z,encode:G}});