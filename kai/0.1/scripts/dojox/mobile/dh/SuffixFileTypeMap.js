define("dojox/mobile/dh/SuffixFileTypeMap",["dojo/_base/lang"],function(e){var n={};return e.setObject("dojox.mobile.dh.SuffixFileTypeMap",n),n.map={html:"html",json:"json"},n.add=function(e,n){this.map[e]=n},n.getContentType=function(e){var n=(e||"").replace(/.*\./,"");return this.map[n]},n});