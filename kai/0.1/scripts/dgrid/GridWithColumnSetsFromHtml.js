define("dgrid/GridWithColumnSetsFromHtml",["./GridFromHtml","./ColumnSet","dojo/_base/declare"],function(e,t,r){function n(t){function r(e){n+=e,a=c[o],n>=a&&(g[o][m]=i,n-=a,o++,i=[])}var n,o,i,u,l,s,m,h,a,g=[],c=[],f=[],d=t.getElementsByTagName("colgroup"),p=d.length,S=t.getElementsByTagName("tr"),N=S.length,C=e.utils.getNumFromAttr,T=e.utils.getColumnFromCell;if(2>p)return!1;for(m=0;p>m;m++)for(a=C(d[m],"span")||1,c[m]=a,g[m]=[],f[m]=[],h=0;a>h;h++)f[m][h]=0;for(m=0;N>m;m++){for(n=o=0,i=[],u=S[m],l=u.getElementsByTagName("th"),s=l.length,h=0;s>h;h++){for(;f[o][n];)f[o][n]--,r(1);a=T(l[h]),i.push(a),f[o][n]=a.rowSpan?a.rowSpan-1:0,r(a.colSpan||1)}i.length&&(g[o][m]=i)}return u&&t.removeChild(u.parentNode),g}return r([e,t],{configStructure:function(){var e;if(!this._checkedTrs){if(e=n(this.srcNodeRef),!e)return this.inherited(arguments);this.columnSets=e,this._checkedTrs=!0}return this.inherited(arguments)}})});