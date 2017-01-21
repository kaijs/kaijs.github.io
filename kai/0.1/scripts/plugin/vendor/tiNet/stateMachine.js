define("plugin/vendor/tiNet/stateMachine",["dojo","dijit","dojox"],function(e,a,s){function n(e){var a,s=e;if("status"==s.name){"undefined"!=typeof s.loginStatus&&(userBasic.loginStatus=s.loginStatus),"undefined"!=typeof s.deviceStatus&&(userBasic.deviceStatus=s.deviceStatus);var n=userBasic.deviceStatus+userBasic.loginStatus,t=deviceStatus.deviceStatusLoginStatus(userBasic.deviceStatus+userBasic.loginStatus,s.pauseDescription,s.busyDescription);switch(t){case"空闲":a="e1";break;case"整理":a="e20";break;case"响铃":"ringingonline"==n?a="e3":"ringingpause"==n&&(a="e4");break;case"通话":void 0==s.callType&&(c.name=s.name,c.deviceStatus=s.deviceStatus,c.loginStatus=s.loginStatus,s=c),"busyonline"==n?"1"!=s.callType&&"2"!=s.callType&&"6"!=s.callType&&"5"!=s.callType||void 0!=s.consulterCno||void 0!=s.transferCno?"3"!=s.callType&&"4"!=s.callType&&"10"!=s.callType||void 0!=s.consulterCno||void 0!=s.transferCno?void 0==s.callType||void 0==s.consulterCno&&void 0==s.transferCno?"0"==s.callType&&(a="e17"):void 0!=s.consulterCno?a="e27":void 0!=s.transferCno&&(a="e29"):a="e13":a="e5":"busypause"==n&&("1"!=s.callType&&"2"!=s.callType&&"6"!=s.callType&&"5"!=s.callType||void 0!=s.consulterCno||void 0!=s.transferCno?"3"!=s.callType&&"4"!=s.callType&&"10"!=s.callType||void 0!=s.consulterCno||void 0!=s.transferCno?void 0==s.callType||void 0==s.consulterCno&&void 0==s.transferCno?"0"==s.callType&&(a="e18"):void 0!=s.consulterCno?a="e28":void 0!=s.transferCno&&(a="e30"):a="e14":a="e6");break;case"保持":a="e19";break;case"外呼中":a="e2";break;case"自动置忙":a="e2";break;default:a="e2"}}else switch(s.name){case"ringing":c=s,"1"!=s.callType&&"2"!=s.callType&&"6"!=s.callType&&"5"!=s.callType||void 0!=s.consulterCno||void 0!=s.transferCno?"3"!=s.callType&&"4"!=s.callType&&"10"!=s.callType||void 0!=s.consulterCno||void 0!=s.transferCno?void 0!=s.consulterCno?a="e9":void 0!=s.transferCno&&(a="e10"):a="e8":a="e7";break;case"previewOutcallBridge":a="e31";break;case"consultLink":a="e22";break;case"consultError":ccic2CallbackAction("cbConsultError",s),a="e23";break;case"unconsult":a="e24";break;case"consultThreeway":a="e25";break;case"consultThreewayUnlink":a="e24";break;case"consultTransfer":a="e26"}return s.et=a,void 0!=s.callType&&(s.ct=r(s.callType)),s}function t(e){var a=e.et;switch(ccic2CallbackAction("cbDebug","<p><span style='color:#f00'>进入状态机："+(new Date).toLocaleDateString()+(new Date).toLocaleTimeString()+"</span> 名称："+e.name+" 当前状态位置："+i+" 当前事件位置："+a+"</p>"),i){case"s1":switch(a){case"e1":i="s2",l="a1",eventName="online";break;case"e2":i="s3",l="a2",eventName="pause";break;case"e3":i="s10",l="a3",eventName="stateRinging";break;case"e4":i="s10",l="a4",eventName="stateRinging";break;case"e5":i="s5",l="a7",eventName="addBusy";break;case"e6":i="s5",l="a7",eventName="addBusy";break;case"e7":i="s4",l="a5",eventName="comeRinging";break;case"e8":i="s4",l="a17",eventName="outRinging";break;case"e13":i="s5",l="a7",eventName="addBusy";break;case"e14":i="s5",l="a7",eventName="addBusy";break;case"e17":i="s12",l="a8",eventName="spyBusy";break;case"e18":i="s12",l="a8",eventName="spyBusy";break;case"e27":i="s15",l="a22",eventName="consulterOrTransferBusy";break;case"e28":i="s15",l="a22",eventName="consulterOrTransferBusy";break;case"e29":i="s5",l="a9",eventName="consulterOrTransferBusy";break;case"e30":i="s9",l="a9",eventName="consulterOrTransferBusy";break;case"e20":i="s7",l="a13",eventName="neatenStart";break;default:l=!1}break;case"s2":switch(a){case"e2":i="s3",l="a14",eventName="pause";break;case"e3":i="s10",l="a3",eventName="stateRinging";break;case"e4":i="s10",l="a4",eventName="stateRinging";break;case"e7":i="s4",l="a5",eventName="comeRinging";break;case"e8":i="s13",l="a17",eventName="outRinging";break;case"e9":i="s11",l="a6",eventName="comeRinging";break;case"e10":i="s11",l="a6",eventName="comeRinging";break;case"e21":i="s1";break;default:l=!1}break;case"s3":switch(a){case"e1":i="s2",l="a15",eventName="online";break;case"e2":i="s3",l="a2",eventName="pause";break;case"e3":i="s10",l="a3",eventName="stateRinging";break;case"e4":i="s10",l="a4",eventName="stateRinging";break;case"e7":i="s4",l="a5",eventName="comeRinging";break;case"e8":i="s13",l="a17",eventName="outRinging";break;case"e31":i="s5",l="a21",eventName="outBusy";break;default:l=!1}break;case"s4":switch(a){case"e1":i="s2",l="a1",eventName="online";break;case"e2":i="s3",l="a2",eventName="pause";break;case"e3":i="s4",l="a3",eventName="stateRinging";break;case"e5":i="s5",l="a21",eventName="normalBusy";break;case"e6":i="s5",l="a21",eventName="normalBusy";break;default:l=!1}break;case"s5":switch(a){case"e1":i="s2",l="a10",eventName="onlineUnlink";break;case"e2":i="s3",l="a11",eventName="pauseUnlink";break;case"e19":i="s6",l="a12",eventName="hold";break;case"e20":i="s7",l="a13",eventName="neatenStart";break;case"e22":i="s8",l="a20",eventName="consultLink";break;case"e23":i="s5",l="a21",eventName="normalBusy";break;case"e24":i="s5",l="a21",eventName="normalBusy";break;case"e25":i="s9",l="a23",eventName="consultThreeBusy";break;case"e26":i="s5",l="a24",eventName="consultationMove";break;default:l=!1}break;case"s6":switch(a){case"e1":i="s2",l="a10",eventName="onlineUnlink";break;case"e2":i="s3",l="a11",eventName="pauseUnlink";break;case"e5":i="s5",l="a18",eventName="unHold";break;case"e6":i="s5",l="a18",eventName="unHold";break;case"e13":i="s5",l="a18",eventName="unHold";break;case"e14":i="s5",l="a18",eventName="unHold";break;case"e20":i="s7",l="a13",eventName="neatenStart";break;case"e27":i="s5",l="a18",eventName="unHold";break;case"e29":i="s5",l="a9",eventName="consulterOrTransferBusy";break;default:l=!1}break;case"s7":switch(a){case"e1":i="s2",l="a19",eventName="neatenEnd";break;case"e2":i="s3",l="a19",eventName="neatenEnd";break;case"e3":i="s10",l="a3",eventName="stateRinging";break;case"e4":i="s10",l="a4",eventName="stateRinging";break;case"e8":i="s13",l="a17",eventName="outRinging";break;default:l=!1}break;case"s8":switch(a){case"e1":i="s2",l="a10",eventName="onlineUnlink";break;case"e2":i="s3",l="a11",eventName="pauseUnlink";break;case"e20":i="s7",l="a13",eventName="neatenStart";break;case"e24":i="s5",l="a21",eventName="normalBusy";break;case"e25":i="s9",l="a23",eventName="consultThreeBusy";break;default:l=!1}break;case"s9":switch(a){case"e1":i="s2",l="a10",eventName="onlineUnlink";break;case"e2":i="s3",l="a11",eventName="pauseUnlink";break;case"e20":i="s7",l="a13",eventName="neatenStart";break;case"e31":i="s5",l="a21",eventName="outBusy";break;default:l=!1}break;case"s10":switch(a){case"e1":i="s2",l="a1",eventName="online";break;case"e2":i="s3",l="a2",eventName="pause";break;case"e5":i="s5",l="a7",eventName="addBusy";break;case"e6":i="s5",l="a7",eventName="addBusy";break;case"e7":i="s4",l="a5",eventName="comeRinging";break;case"e8":i="s13",l="a17",eventName="outRinging";break;case"e9":i="s11",l="a6",eventName="comeRinging";break;case"e10":i="s11",l="a6",eventName="comeRinging";break;case"e13":i="s5",l="a7",eventName="addBusy";break;case"e14":i="s5",l="a7",eventName="addBusy";break;case"e17":i="s12",l="a8",eventName="spyBusy";break;case"e18":i="s12",l="a8",eventName="spyBusy";break;case"e27":i="s15",l="a22",eventName="consulterOrTransferBusy";break;case"e28":i="s15",l="a22",eventName="consulterOrTransferBusy";break;case"e29":i="s5",l="a9",eventName="consulterOrTransferBusy";break;case"e30":i="s5",l="a9",eventName="consulterOrTransferBusy";break;default:l=!1}break;case"s11":switch(a){case"e1":i="s2",l="a1",eventName="online";break;case"e2":i="s3",l="a2",eventName="pause";break;case"e3":i="s11",l="a3",eventName="stateRinging";break;case"e5":i="s5",l="a9",eventName="consulterOrTransferBusy";break;case"e6":i="s5",l="a9",eventName="consulterOrTransferBusy";break;case"e13":i="s5",l="a9",eventName="consulterOrTransferBusy";break;case"e14":i="s5",l="a9",eventName="consulterOrTransferBusy";break;case"e27":i="s5",l="a9",eventName="consulterOrTransferBusy";break;case"e29":i="s5",l="a9",eventName="consulterOrTransferBusy";break;default:l=!1}break;case"s12":switch(a){case"e1":i="s2",l="a10",eventName="onlineUnlink";break;case"e2":i="s3",l="a11",eventName="pauseUnlink";break;default:l=!1}break;case"s13":switch(a){case"e1":i="s2",l="a1",eventName="online";break;case"e2":i="s3",l="a2",eventName="pause";break;case"e4":i="s13",l="a4",eventName="stateRinging";break;case"e13":i="s16",l="a25",eventName="waitLink";break;case"e14":i="s16",l="a25",eventName="waitLink";break;default:l=!1}break;case"s14":switch(a){case"e1":i="s2",l="a1",eventName="online";break;case"e2":i="s3",l="a2",eventName="pause";break;case"e17":i="s12",l="a8",eventName="spyBusy";break;case"e18":i="s12",l="a8",eventName="spyBusy";break;default:l=!1}break;case"s15":switch(a){case"e1":i="s2",l="a10",eventName="onlineUnlink";break;case"e2":i="s3",l="a11",eventName="pauseUnlink";break;case"e26":i="s5",l="a9",eventName="consulterOrTransferBusy";break;default:l=!1}break;case"s16":switch(a){case"e1":i="s2",l="a10",eventName="onlineUnlink";break;case"e2":i="s3",l="a11",eventName="pauseUnlink";break;case"e31":i="s5",l="a21",eventName="outBusy";break;default:l=!1}}0!=l&&(e.eventName=eventName,e.action=l,ccic2CallbackAction("cbThisStatus",e),ccic2CallbackAction("cbDebug","<p><span style='color:#f00'>退出状态机："+(new Date).toLocaleDateString()+(new Date).toLocaleTimeString()+"</span> 下一个状态位置："+i+" 本次执行action为："+l+"</p>"))}function r(e){var a="";switch(e){case"1":a="呼入";break;case"2":a="网上400";break;case"3":a="点击外呼";break;case"4":a="预览外呼";break;case"5":a="IVR外呼";break;case"6":a="直接外呼";break;case"10":a="预约回呼"}return a}var c=null,i="s1",l={};window.statePrepare=n,window.stateCore=t,window.returnCallTypeStr=r,window.stateCoreFunctionText=l,window.stateLocation=i});