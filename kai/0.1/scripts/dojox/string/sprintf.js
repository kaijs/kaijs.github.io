define("dojox/string/sprintf",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/sniff","./tokenize"],function(r,e,i,t){var a=e.getObject("string",!0,dojox);return a.sprintf=function(r,e){for(var i=[],t=1;t<arguments.length;t++)i.push(arguments[t]);var n=new a.sprintf.Formatter(r);return n.format.apply(n,i)},a.sprintf.Formatter=function(r){this._mapped=!1,this._format=r,this._tokens=t(r,this._re,this._parseDelim,this)},e.extend(a.sprintf.Formatter,{_re:/\%(?:\(([\w_]+)\)|([1-9]\d*)\$)?([0 +\-\#]*)(\*|\d+)?(\.)?(\*|\d+)?[hlL]?([\%scdeEfFgGiouxX])/g,_parseDelim:function(r,e,i,t,a,n,s){return r&&(this._mapped=!0),{mapping:r,intmapping:e,flags:i,_minWidth:t,period:a,_precision:n,specifier:s}},_specifiers:{b:{base:2,isInt:!0},o:{base:8,isInt:!0},x:{base:16,isInt:!0},X:{extend:["x"],toUpper:!0},d:{base:10,isInt:!0},i:{extend:["d"]},u:{extend:["d"],isUnsigned:!0},c:{setArg:function(r){if(!isNaN(r.arg)){var e=parseInt(r.arg);if(0>e||e>127)throw new Error("invalid character code passed to %c in sprintf");r.arg=isNaN(e)?""+e:String.fromCharCode(e)}}},s:{setMaxWidth:function(r){r.maxWidth="."==r.period?r.precision:-1}},e:{isDouble:!0,doubleNotation:"e"},E:{extend:["e"],toUpper:!0},f:{isDouble:!0,doubleNotation:"f"},F:{extend:["f"]},g:{isDouble:!0,doubleNotation:"g"},G:{extend:["g"],toUpper:!0}},format:function(r){if(this._mapped&&"object"!=typeof r)throw new Error("format requires a mapping");for(var i,t="",a=0,n=0;n<this._tokens.length;n++)if(i=this._tokens[n],"string"==typeof i)t+=i;else{if(this._mapped){if("undefined"==typeof r[i.mapping])throw new Error("missing key "+i.mapping);i.arg=r[i.mapping]}else{if(i.intmapping)var a=parseInt(i.intmapping)-1;if(a>=arguments.length)throw new Error("got "+arguments.length+" printf arguments, insufficient for '"+this._format+"'");i.arg=arguments[a++]}if(!i.compiled){i.compiled=!0,i.sign="",i.zeroPad=!1,i.rightJustify=!1,i.alternative=!1;for(var s={},o=i.flags.length;o--;){var g=i.flags.charAt(o);switch(s[g]=!0,g){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"0":i.zeroPad=s["-"]?!1:!0;break;case"-":i.rightJustify=!0,i.zeroPad=!1;break;case"#":i.alternative=!0;break;default:throw Error("bad formatting flag '"+i.flags.charAt(o)+"'")}}i.minWidth=i._minWidth?parseInt(i._minWidth):0,i.maxWidth=-1,i.toUpper=!1,i.isUnsigned=!1,i.isInt=!1,i.isDouble=!1,i.precision=1,"."==i.period&&(i._precision?i.precision=parseInt(i._precision):i.precision=0);var p=this._specifiers[i.specifier];if("undefined"==typeof p)throw new Error("unexpected specifier '"+i.specifier+"'");p.extend&&(e.mixin(p,this._specifiers[p.extend]),delete p.extend),e.mixin(i,p)}if("function"==typeof i.setArg&&i.setArg(i),"function"==typeof i.setMaxWidth&&i.setMaxWidth(i),"*"==i._minWidth){if(this._mapped)throw new Error("* width not supported in mapped formats");if(i.minWidth=parseInt(arguments[a++]),isNaN(i.minWidth))throw new Error("the argument for * width at position "+a+" is not a number in "+this._format);i.minWidth<0&&(i.rightJustify=!0,i.minWidth=-i.minWidth)}if("*"==i._precision&&"."==i.period){if(this._mapped)throw new Error("* precision not supported in mapped formats");if(i.precision=parseInt(arguments[a++]),isNaN(i.precision))throw Error("the argument for * precision at position "+a+" is not a number in "+this._format);i.precision<0&&(i.precision=1,i.period="")}i.isInt?("."==i.period&&(i.zeroPad=!1),this.formatInt(i)):i.isDouble&&("."!=i.period&&(i.precision=6),this.formatDouble(i)),this.fitField(i),t+=""+i.arg}return t},_zeros10:"0000000000",_spaces10:"          ",formatInt:function(r){var e=parseInt(r.arg);if(!isFinite(e)){if("number"!=typeof r.arg)throw new Error("format argument '"+r.arg+"' not an integer; parseInt returned "+e);e=0}0>e&&(r.isUnsigned||10!=r.base)&&(e=4294967295+e+1),0>e?(r.arg=(-e).toString(r.base),this.zeroPad(r),r.arg="-"+r.arg):(r.arg=e.toString(r.base),e||r.precision?this.zeroPad(r):r.arg="",r.sign&&(r.arg=r.sign+r.arg)),16==r.base&&(r.alternative&&(r.arg="0x"+r.arg),r.arg=r.toUpper?r.arg.toUpperCase():r.arg.toLowerCase()),8==r.base&&r.alternative&&"0"!=r.arg.charAt(0)&&(r.arg="0"+r.arg)},formatDouble:function(r){var e=parseFloat(r.arg);if(!isFinite(e)){if("number"!=typeof r.arg)throw new Error("format argument '"+r.arg+"' not a float; parseFloat returned "+e);e=0}switch(r.doubleNotation){case"e":r.arg=e.toExponential(r.precision);break;case"f":r.arg=e.toFixed(r.precision);break;case"g":Math.abs(e)<1e-4?r.arg=e.toExponential(r.precision>0?r.precision-1:r.precision):r.arg=e.toPrecision(r.precision),r.alternative||(r.arg=r.arg.replace(/(\..*[^0])0*/,"$1"),r.arg=r.arg.replace(/\.0*e/,"e").replace(/\.0$/,""));break;default:throw new Error("unexpected double notation '"+r.doubleNotation+"'")}r.arg=r.arg.replace(/e\+(\d)$/,"e+0$1").replace(/e\-(\d)$/,"e-0$1"),i("opera")&&(r.arg=r.arg.replace(/^\./,"0.")),r.alternative&&(r.arg=r.arg.replace(/^(\d+)$/,"$1."),r.arg=r.arg.replace(/^(\d+)e/,"$1.e")),e>=0&&r.sign&&(r.arg=r.sign+r.arg),r.arg=r.toUpper?r.arg.toUpperCase():r.arg.toLowerCase()},zeroPad:function(r,e){e=2==arguments.length?e:r.precision,"string"!=typeof r.arg&&(r.arg=""+r.arg);for(var i=e-10;r.arg.length<i;)r.arg=r.rightJustify?r.arg+this._zeros10:this._zeros10+r.arg;var t=e-r.arg.length;r.arg=r.rightJustify?r.arg+this._zeros10.substring(0,t):this._zeros10.substring(0,t)+r.arg},fitField:function(r){return r.maxWidth>=0&&r.arg.length>r.maxWidth?r.arg.substring(0,r.maxWidth):r.zeroPad?void this.zeroPad(r,r.minWidth):void this.spacePad(r)},spacePad:function(r,e){e=2==arguments.length?e:r.minWidth,"string"!=typeof r.arg&&(r.arg=""+r.arg);for(var i=e-10;r.arg.length<i;)r.arg=r.rightJustify?r.arg+this._spaces10:this._spaces10+r.arg;var t=e-r.arg.length;r.arg=r.rightJustify?r.arg+this._spaces10.substring(0,t):this._spaces10.substring(0,t)+r.arg}}),a.sprintf});