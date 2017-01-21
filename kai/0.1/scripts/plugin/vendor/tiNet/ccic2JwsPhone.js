define("plugin/vendor/tiNet/ccic2JwsPhone",["dojo","dijit","dojox"],function(n,e,t){function o(n){"function"==typeof l.callbackChecking?l.callbackChecking(n):("undefined"!=typeof window.cbChecking&&window.cbChecking(n),"undefined"!=typeof window.parent.cbChecking&&window.parent!=window&&window.parent.cbChecking(n))}function c(n){var e=window.location.href,t=e.substring(e.indexOf("?")+1,e.length).split("&"),o={};for(i=0;j=t[i];i++)o[j.substring(0,j.indexOf("=")).toLowerCase()]=j.substring(j.indexOf("=")+1,j.length);var c=o[n.toLowerCase()];return"undefined"==typeof c?"":c}var w=c("type"),a=!1;"cs"==w?a=!0:"bs"==w&&(a=!1);var d=!1,l=window.userBasic={},u=function(n,e){var t={doLogin:function(n){l=new f(n),window.userBasic=l,3==n.bindType&&(d=!0),l.setPwd(hex_md5(l.getPwd())),l.Api=!1,l.callbackLogin=c,jWebSocketClient.login()},doLogout:function(n){l.callbackLogout=c,"1"==n.removeBinding||1==n.type?jWebSocketClient.logout(n.removeBinding):jWebSocketClient.closes()},doQueueStatus:function(n){l.callbackQueueStatus=c,jWebSocketClient.queueStatus()},doPause:function(n){l.callbackPause=c,jWebSocketClient.pause(n.description)},doUnpause:function(n){l.callbackUnpause=c,jWebSocketClient.unpause()},doLink:function(n){"3"==l.getBindType()&&sipAnswer()},doUnLink:function(n){l.callbackUnlink=c,jWebSocketClient.unlink()},doPreviewOutCall:function(n){l.callbackPreviewOutCall=c,void 0==n.taskId&&(n.taskId=""),void 0==n.customerCrmId&&(n.customerCrmId=""),void 0==n.taskInventoryId&&(n.taskInventoryId=""),void 0==n.taskName&&(n.taskName=""),void 0==n.obClidLeftNumber&&(n.obClidLeftNumber=""),void 0==n.userField&&(n.userField=""),void 0==n.orderCallBackId&&(n.orderCallBackId=""),jWebSocketClient.previewOutCall(n.tel,n.callType,n.taskId,n.customerCrmId,n.taskInventoryId,n.taskName,n.obClidLeftNumber,n.userField,n.orderCallBackId)},doPreviewOutcallCancel:function(n){l.callbackCallCancel=c,jWebSocketClient.previewOutcallCancel()},doHold:function(n){l.callbackHold=c,void 0==n&&(n={},n.holdType=""),jWebSocketClient.hold(n.holdType)},doUnhold:function(n){l.callbackUnhold=c,jWebSocketClient.unhold()},doConsult:function(n){l.callbackConsult=c,jWebSocketClient.consult(n.consultObject,n.objectType)},doConsultCancel:function(n){l.callbackConsultCancel=c,jWebSocketClient.consultCancel()},doConsultTransfer:function(n){void 0==n&&(n={}),void 0==n.limitTimeSecond&&(n.limitTimeSecond=""),void 0==n.limitTimeAlertSecond&&(n.limitTimeAlertSecond=""),void 0==n.limitTimeFile&&(n.limitTimeFile=""),l.callbackConsultTransfer=c,jWebSocketClient.consultTransfer(n)},doConsultThreeway:function(n){l.callbackConsultThreeway=c,jWebSocketClient.consultThreeway(n)},doUnconsult:function(n){l.callbackUnconsult=c,jWebSocketClient.unconsult()},doTransfer:function(n){l.callbackTransfer=c,jWebSocketClient.transfer(n.transferObject,n.objectType)},doInteract:function(n){l.callbackInteract=c,jWebSocketClient.interact(n.interactObject)},doInvestigation:function(n){l.callbackInvestigation=c,jWebSocketClient.investigation()},doThreewayOk:function(n){l.callbackThreewayOk=c,jWebSocketClient.threewayOk(n.threewayedCno,n.objectType,n.threewayedObject)},doUnthreeway:function(n){l.callbackUnthreeway=c,jWebSocketClient.unthreeway(n.threewayedCno)},doSpy:function(n){l.callbackSpy=c,jWebSocketClient.spy(n.spyObject,n.objectType,n.spiedCno)},doUnspy:function(n){l.callbackUnspy=c,jWebSocketClient.unspy(n.spyObject)},doPickup:function(n){l.callbackPickup=c,jWebSocketClient.pickup(n.pickupCno)},doWhisper:function(n){l.callbackWhisper=c,jWebSocketClient.whisper(n.whisperObject,n.objectType,n.whisperedCno)},doUnwhisper:function(n){l.callbackUnwhisper=c,jWebSocketClient.unwhisper(n.whisperObject)},doBarge:function(n){l.callbackBarge=c,jWebSocketClient.barge(n.bargeObject,n.objectType,n.bargedCno)},doSetPause:function(n){l.callbackSetPause=c,jWebSocketClient.setPause(n.monitorCno,n.monitoredCno)},doSetUnpause:function(n){l.callbackSetUnpause=c,jWebSocketClient.setUnpause(n.monitorCno,n.monitoredCno)},doDisconnects:function(n){l.callbackDisconnects=c,jWebSocketClient.disconnects(n.disconnectedCno)},doStatus:function(n){l.callbackStatus=c,jWebSocketClient.status()},doRefuse:function(n){l.callbackRefuse=c,jWebSocketClient.refuse()},doChangeBindTel:function(n){l.callbackChangeBindTel=c,jWebSocketClient.changeBindTel(n.tel,n.changeBindTelType)},doClose:function(n){l.callbackClose=c,jWebSocketClient.closes()},doWebChat:function(n){l.callbackWebChat=c,jWebSocketClient.webChat(n.webchatMsg,n.webchatType,n.groupId,n.cno)},doPing:function(){l.callbackPing=c,jWebSocketClient.ping()},doMute:function(n){l.callbackMute=c,jWebSocketClient.mute(n.direction,n.state)}},i=function(n){return"function"==typeof n?n:"object"==typeof n?n.callbackFunction:"undefined"==typeof n?"":void 0},c=i(e),w=n in t;return w?("string"==typeof e&&(e=JSON.parse(e)),void("doLogin"==n?(o("执行"+n+"成功"),t[n](e)):l.Api?(o("执行"+n+"成功"),t[n](e)):o("执行"+n+"失败，您还没有登陆"))):void o("执行"+n+"失败，API中没有此方法,请查看API文档")},r=function(n,e){var t={doRinging:function(){l.callbackRinging=i},doLink:function(){l.callbackLink=i},doNeaten:function(){l.callbackNeaten=i},doStatus:function(){l.callbackStatus=i},doThisStatus:function(){l.callbackThisStatus=i},doKickout:function(){l.callbackKickout=i},doBackendLogout:function(){l.callbackBackendLogout=i},doBreakLine:function(){l.callbackBreakLine=i},doDebug:function(){l.callbackDebug=i},doQueue:function(){l.callbackQueue=i},doPreview:function(){l.callbackPreview=i},doAgenda:function(){l.callbackAgenda=i},doUnanswer:function(){l.callbackUnanswer=i},doSmsReceive:function(){l.callbackSmsReceive=i},doOrderCallBack:function(){l.callbackOrderCallBack=i}},i=e,c=n in t;return c?void(l.Api?(o("注册"+n+"成功"),t[n]()):o("执行"+n+"失败，您还没有登陆")):void o("注册"+n+"失败，API中没有此方法,请查看API文档")},b=function(n,e){var t={cbLogin:function(n){if(3==n.bindType){l.setSipPwd(n.sipPwd),l.setSipIp(n.sipIp),l.setWebrtcSocketUrl(n.webrtc_websocket_url),l.setWebrtcBreaker(n.webrtc_breaker),l.setIceServers(n.webrtc_stun_server),sipRegister();var e=1,t=setInterval(function(){e++,sipPhone.isRegistered()&&(clearInterval(t),"function"==typeof l.callbackLogin&&l.callbackLogin(n),"undefined"!=typeof window.cbLogin&&window.cbLogin(n),a?"undefined"!=typeof window.external.cbLogin&&window.external.cbLogin(n):"undefined"!=typeof window.parent.cbLogin&&window.parent!=window&&window.parent.cbLogin(n)),20==e&&(clearInterval(t),n.msg="软电话注册失败","function"==typeof l.callbackLogin&&l.callbackLogin(n),"undefined"!=typeof window.cbLogin&&window.cbLogin(n),a?"undefined"!=typeof window.external.cbLogin&&window.external.cbLogin(n):"undefined"!=typeof window.parent.cbLogin&&window.parent!=window&&window.parent.cbLogin(n))},500)}else"function"==typeof l.callbackLogin&&l.callbackLogin(n),"undefined"!=typeof window.cbLogin&&window.cbLogin(n),a?"undefined"!=typeof window.external.cbLogin&&window.external.cbLogin(n):"undefined"!=typeof window.parent.cbLogin&&window.parent!=window&&window.parent.cbLogin(n)},cbWelcome:function(n){"function"==typeof l.callbackWelcome&&l.callbackWelcome(n),"undefined"!=typeof window.cbWelcome&&window.cbWelcome(n),a?"undefined"!=typeof window.external.cbWelcome&&window.external.cbWelcome(n):"undefined"!=typeof window.parent.cbWelcome&&window.parent!=window&&window.parent.cbWelcome(n)},cbLogout:function(n){void 0!=n.bindType&&3==n.bindType&&sipUnRegister(),"function"==typeof l.callbackLogout&&l.callbackLogout(n),"undefined"!=typeof window.cbLogout&&window.cbLogout(n),a?"undefined"!=typeof window.external.cbLogout&&window.external.cbLogout(n):"undefined"!=typeof window.parent.cbLogout&&window.parent!=window&&window.parent.cbLogout(n)},cbQueueStatus:function(n){"function"==typeof l.callbackQueueStatus&&l.callbackQueueStatus(n),"undefined"!=typeof window.cbQueueStatus&&window.cbQueueStatus(n),a?"undefined"!=typeof window.external.cbQueueStatus&&window.external.cbQueueStatus(n):"undefined"!=typeof window.parent.cbQueueStatus&&window.parent!=window&&window.parent.cbQueueStatus(n)},cbPause:function(n){"function"==typeof l.callbackPause&&l.callbackPause(n),"undefined"!=typeof window.cbPause&&window.cbPause(n),a?"undefined"!=typeof window.external.cbPause&&window.external.cbPause(n):"undefined"!=typeof window.parent.cbPause&&window.parent!=window&&window.parent.cbPause(n)},cbUnpause:function(n){"function"==typeof l.callbackUnpause&&l.callbackUnpause(n),"undefined"!=typeof window.cbUnpause&&window.cbUnpause(n),a?"undefined"!=typeof window.external.cbUnpause&&window.external.cbUnpause(n):"undefined"!=typeof window.parent.cbUnpause&&window.parent!=window&&window.parent.cbUnpause(n)},cbUnLink:function(n){"function"==typeof l.callbackUnLink&&l.callbackUnLink(n),"undefined"!=typeof window.cbUnLink&&window.cbUnLink(n),a?"undefined"!=typeof window.external.cbUnLink&&window.external.cbUnLink(n):"undefined"!=typeof window.parent.cbUnLink&&window.parent!=window&&window.parent.cbUnLink(n)},cbHold:function(n){"function"==typeof l.callbackHold&&l.callbackHold(n),"undefined"!=typeof window.cbHold&&window.cbHold(n),a?"undefined"!=typeof window.external.cbHold&&window.external.cbHold(n):"undefined"!=typeof window.parent.cbHold&&window.parent!=window&&window.parent.cbHold(n)},cbUnhold:function(n){"function"==typeof l.callbackUnhold&&l.callbackUnhold(n),"undefined"!=typeof window.cbUnhold&&window.cbUnhold(n),a?"undefined"!=typeof window.external.cbUnhold&&window.external.cbUnhold(n):"undefined"!=typeof window.parent.cbUnhold&&window.parent!=window&&window.parent.cbUnhold(n)},cbConsult:function(n){"function"==typeof l.callbackConsult&&l.callbackConsult(n),"undefined"!=typeof window.cbConsult&&window.cbConsult(n),a?"undefined"!=typeof window.external.cbConsult&&window.external.cbConsult(n):"undefined"!=typeof window.parent.cbConsult&&window.parent!=window&&window.parent.cbConsult(n)},cbConsultError:function(n){"function"==typeof l.callbackConsultError&&l.callbackConsultError(n),"undefined"!=typeof window.cbConsultError&&window.cbConsultError(n),a?"undefined"!=typeof window.external.cbConsultError&&window.external.cbConsultError(n):"undefined"!=typeof window.parent.cbConsultError&&window.parent!=window&&window.parent.cbConsultError(n)},cbConsultCancel:function(n){"function"==typeof l.callbackConsultCancel&&l.callbackConsultCancel(n),"undefined"!=typeof window.cbConsultCancel&&window.cbConsultCancel(n),a?"undefined"!=typeof window.external.cbConsultCancel&&window.external.cbConsultCancel(n):"undefined"!=typeof window.parent.cbConsultCancel&&window.parent!=window&&window.parent.cbConsultCancel(n)},cbConsultTransfer:function(n){"function"==typeof l.callbackConsultTransfer&&l.callbackConsultTransfer(n),"undefined"!=typeof window.cbConsultTransfer&&window.cbConsultTransfer(n),a?"undefined"!=typeof window.external.cbConsultTransfer&&window.external.cbConsultTransfer(n):"undefined"!=typeof window.parent.cbConsultTransfer&&window.parent!=window&&window.parent.cbConsultTransfer(n)},cbConsultThreeway:function(n){"function"==typeof l.callbackConsultThreeway&&l.callbackConsultThreeway(n),"undefined"!=typeof window.cbConsultThreeway&&window.cbConsultThreeway(n),a?"undefined"!=typeof window.external.cbConsultThreeway&&window.external.cbConsultThreeway(n):"undefined"!=typeof window.parent.cbConsultThreeway&&window.parent!=window&&window.parent.cbConsultThreeway(n)},cbUnconsult:function(n){"function"==typeof l.callbackUnconsult&&l.callbackUnconsult(n),"undefined"!=typeof window.cbUnconsult&&window.cbUnconsult(n),a?"undefined"!=typeof window.external.cbUnconsult&&window.external.cbUnconsult(n):"undefined"!=typeof window.parent.cbUnconsult&&window.parent!=window&&window.parent.cbUnconsult(n)},cbTransfer:function(n){"function"==typeof l.callbackTransfer&&l.callbackTransfer(n),"undefined"!=typeof window.cbTransfer&&window.cbTransfer(n),a?"undefined"!=typeof window.external.cbTransfer&&window.external.cbTransfer(n):"undefined"!=typeof window.parent.cbTransfer&&window.parent!=window&&window.parent.cbTransfer(n)},cbInteract:function(n){"function"==typeof l.callbackInteract&&l.callbackInteract(n),"undefined"!=typeof window.cbInteract&&window.cbInteract(n),a?"undefined"!=typeof window.external.cbInteract&&window.external.cbInteract(n):"undefined"!=typeof window.parent.cbInteract&&window.parent!=window&&window.parent.cbInteract(n)},cbInvestigation:function(n){"function"==typeof l.callbackInvestigation&&l.callbackInvestigation(n),"undefined"!=typeof window.cbInvestigation&&window.cbInvestigation(n),a?"undefined"!=typeof window.external.cbInvestigation&&window.external.cbInvestigation(n):"undefined"!=typeof window.parent.cbInvestigation&&window.parent!=window&&window.parent.cbInvestigation(n)},cbSpy:function(n){"function"==typeof l.callbackSpy&&l.callbackSpy(n),"undefined"!=typeof window.cbSpy&&window.cbSpy(n),a?"undefined"!=typeof window.external.cbSpy&&window.external.cbSpy(n):"undefined"!=typeof window.parent.cbSpy&&window.parent!=window&&window.parent.cbSpy(n)},cbThreewayOk:function(n){"function"==typeof l.callbackThreewayOk&&l.callbackThreewayOk(n),"undefined"!=typeof window.cbThreewayOk&&window.cbThreewayOk(n),a?"undefined"!=typeof window.external.cbThreewayOk&&window.external.cbThreewayOk(n):"undefined"!=typeof window.parent.cbThreewayOk&&window.parent!=window&&window.parent.cbThreewayOk(n)},cbUnthreeway:function(n){"function"==typeof l.callbackUnthreeway&&l.callbackUnthreeway(n),"undefined"!=typeof window.cbUnthreeway&&window.cbUnthreeway(n),a?"undefined"!=typeof window.external.cbUnthreeway&&window.external.cbUnthreeway(n):"undefined"!=typeof window.parent.cbUnthreeway&&window.parent!=window&&window.parent.cbUnthreeway(n)},cbUnspy:function(n){"function"==typeof l.callbackUnspy&&l.callbackUnspy(n),"undefined"!=typeof window.cbUnspy&&window.cbUnspy(n),a?"undefined"!=typeof window.external.cbUnspy&&window.external.cbUnspy(n):"undefined"!=typeof window.parent.cbUnspy&&window.parent!=window&&window.parent.cbUnspy(n)},cbPickup:function(n){"function"==typeof l.callbackPickup&&l.callbackPickup(n),"undefined"!=typeof window.cbPickup&&window.cbPickup(n),a?"undefined"!=typeof window.external.cbPickup&&window.external.cbPickup(n):"undefined"!=typeof window.parent.cbPickup&&window.parent!=window&&window.parent.cbPickup(n)},cbWhisper:function(n){"function"==typeof l.callbackWhisper&&l.callbackWhisper(n),"undefined"!=typeof window.cbWhisper&&window.cbWhisper(n),a?"undefined"!=typeof window.external.cbWhisper&&window.external.cbWhisper(n):"undefined"!=typeof window.parent.cbWhisper&&window.parent!=window&&window.parent.cbWhisper(n)},cbUnwhisper:function(n){"function"==typeof l.callbackUnwhisper&&l.callbackUnwhisper(n),"undefined"!=typeof window.cbUnwhisper&&window.cbUnwhisper(n),a?"undefined"!=typeof window.external.cbUnwhisper&&window.external.cbUnwhisper(n):"undefined"!=typeof window.parent.cbUnwhisper&&window.parent!=window&&window.parent.cbUnwhisper(n)},cbBarge:function(n){"function"==typeof l.callbackBarge&&l.callbackBarge(n),"undefined"!=typeof window.cbBarge&&window.cbBarge(n),a?"undefined"!=typeof window.external.cbBarge&&window.external.cbBarge(n):"undefined"!=typeof window.parent.cbBarge&&window.parent!=window&&window.parent.cbBarge(n)},cbSetPause:function(n){"function"==typeof l.callbackSetPause&&l.callbackSetPause(n),"undefined"!=typeof window.cbBarge&&window.cbSetPause(n),a?"undefined"!=typeof window.external.cbSetPause&&window.external.cbSetPause(n):"undefined"!=typeof window.parent.cbSetPause&&window.parent!=window&&window.parent.cbSetPause(n)},cbSetUnpause:function(n){"function"==typeof l.callbackSetUnpause&&l.callbackSetUnpause(n),"undefined"!=typeof window.cbSetUnpause&&window.cbSetUnpause(n),a?"undefined"!=typeof window.external.cbSetUnpause&&window.external.cbSetUnpause(n):"undefined"!=typeof window.parent.cbSetUnpause&&window.parent!=window&&window.parent.cbSetUnpause(n)},cbDisconnects:function(n){"function"==typeof l.callbackDisconnects&&l.callbackDisconnects(n),"undefined"!=typeof window.cbDisconnects&&window.cbDisconnects(n),a?"undefined"!=typeof window.external.cbDisconnects&&window.external.cbDisconnects(n):"undefined"!=typeof window.parent.cbDisconnects&&window.parent!=window&&window.parent.cbDisconnects(n)},cbDisconnectError:function(n){"function"==typeof l.callbackDisconnectError&&l.callbackDisconnectError(n),"undefined"!=typeof window.cbDisconnectError&&window.cbDisconnectError(n),a?"undefined"!=typeof window.external.cbDisconnectError&&window.external.cbDisconnectError(n):"undefined"!=typeof window.parent.cbDisconnectError&&window.parent!=window&&window.parent.cbDisconnectError(n)},cbRefuse:function(n){"function"==typeof l.callbackRefuse&&l.callbackRefuse(n),"undefined"!=typeof window.cbRefuse&&window.cbRefuse(n),a?"undefined"!=typeof window.external.cbRefuse&&window.external.cbRefuse(n):"undefined"!=typeof window.parent.cbRefuse&&window.parent!=window&&window.parent.cbRefuse(n)},cbPreviewOutCall:function(n){"function"==typeof l.callbackPreviewOutCall&&l.callbackPreviewOutCall(n),"undefined"!=typeof window.cbPreviewOutCall&&window.cbPreviewOutCall(n),a?"undefined"!=typeof window.external.cbPreviewOutCall&&window.external.cbPreviewOutCall(n):"undefined"!=typeof window.parent.cbPreviewOutCall&&window.parent!=window&&window.parent.cbPreviewOutCall(n)},cbPreviewOutCallCancel:function(n){"function"==typeof l.callbackPreviewOutCallCancel&&l.callbackPreviewOutCallCancel(n),"undefined"!=typeof window.cbPreviewOutCallCancel&&window.cbPreviewOutCallCancel(n),a?"undefined"!=typeof window.external.cbPreviewOutCallCancel&&window.external.cbPreviewOutCallCancel(n):"undefined"!=typeof window.parent.cbPreviewOutCallCancel&&window.parent!=window&&window.parent.cbPreviewOutCallCancel(n)},cbChangeBindTel:function(n){"function"==typeof l.callbackChangeBindTel&&l.callbackChangeBindTel(n),"undefined"!=typeof window.cbChangeBindTel&&window.cbChangeBindTel(n),a?"undefined"!=typeof window.external.cbChangeBindTel&&window.external.cbChangeBindTel(n):"undefined"!=typeof window.parent.cbChangeBindTel&&window.parent!=window&&window.parent.cbChangeBindTel(n)},cbClose:function(n){"function"==typeof l.callbackClose&&l.callbackClose(n),"undefined"!=typeof window.cbClose&&window.cbClose(n),a?"undefined"!=typeof window.external.cbClose&&window.external.cbClose(n):"undefined"!=typeof window.parent.cbClose&&window.parent!=window&&window.parent.cbClose(n)},cbWebChat:function(n){"function"==typeof l.callbackWebChat&&l.callbackWebChat(n),"undefined"!=typeof window.cbWebChat&&window.cbWebChat(n),a?"undefined"!=typeof window.external.cbWebChat&&window.external.cbWebChat(n):"undefined"!=typeof window.parent.cbWebChat&&window.parent!=window&&window.parent.cbWebChat(n)},cbPing:function(n){"function"==typeof l.callbackPing&&l.callbackPing(n),"undefined"!=typeof window.cbPing&&window.cbPing(n),a?"undefined"!=typeof window.external.cbPing&&window.external.cbPing(n):"undefined"!=typeof window.parent.cbPing&&window.parent!=window&&window.parent.cbPing(n)},cbDebug:function(n){"function"==typeof l.callbackDebug&&l.callbackDebug(n),"undefined"!=typeof window.cbDebug&&window.cbDebug(n),a?"undefined"!=typeof window.external.cbDebug&&window.external.cbDebug(n):"undefined"!=typeof window.parent.cbDebug&&window.parent!=window&&window.parent.cbDebug(n)},agentDebug:function(n){var e=(new Date).getTime();if(e-ccic2Global.debugTime>6e5?(ccic2Global.debug="",ccic2Global.debugTime=(new Date).getTime()):ccic2Global.debug=ccic2Global.debug+n,ccic2Global.isDebug){""==ccic2Global.debug&&(ccic2Global.debug=n);var t=l.getCno(),o=l.getEnterpriseId(),i=ccic2Global.debug;ccic2Global.debug="",jWebSocketClient.saveAgentDebug(i,t,o)}},agentScreenShot:function(n){"function"==typeof l.callbackAgentScreenShot&&l.callbackAgentScreenShot(n),"undefined"!=typeof window.agentScreenShot&&window.agentScreenShot(n),a?"undefined"!=typeof window.external.agentScreenShot&&window.external.agentScreenShot(n):"undefined"!=typeof window.parent.agentScreenShot&&window.parent!=window&&window.parent.agentScreenShot(n)},cbRinging:function(n){"function"==typeof l.callbackRinging&&l.callbackRinging(n),"undefined"!=typeof window.cbRinging&&window.cbRinging(n),a?"undefined"!=typeof window.external.cbRinging&&window.external.cbRinging(n):"undefined"!=typeof window.parent.cbRinging&&window.parent!=window&&window.parent.cbRinging(n)},cbLink:function(n){"function"==typeof l.callbackLink&&l.callbackLink(n),"undefined"!=typeof window.cbLink&&window.cbLink(n),a?"undefined"!=typeof window.external.cbLink&&window.external.cbLink(n):"undefined"!=typeof window.parent.cbLink&&window.parent!=window&&window.parent.cbLink(n)},cbNeaten:function(n){"function"==typeof l.callbackNeaten&&l.callbackNeaten(n),"undefined"!=typeof window.cbNeaten&&window.cbNeaten(n),a?"undefined"!=typeof window.external.cbNeaten&&window.external.cbNeaten(n):"undefined"!=typeof window.parent.cbNeaten&&window.parent!=window&&window.parent.cbNeaten(n)},cbQueue:function(n){"function"==typeof l.callbackQueue&&l.callbackQueue(n),"undefined"!=typeof window.cbQueue&&window.cbQueue(n),a?"undefined"!=typeof window.external.cbQueue&&window.external.cbQueue(n):"undefined"!=typeof window.parent.cbQueue&&window.parent!=window&&window.parent.cbQueue(n)},cbStatus:function(n){"function"==typeof l.callbackStatus&&l.callbackStatus(n),"undefined"!=typeof window.cbStatus&&window.cbStatus(n),a?"undefined"!=typeof window.external.cbStatus&&window.external.cbStatus(n):"undefined"!=typeof window.parent.cbStatus&&window.parent!=window&&window.parent.cbStatus(n)},cbThisStatus:function(n){"function"==typeof l.callbackThisStatus&&l.callbackThisStatus(n),"undefined"!=typeof window.cbThisStatus&&window.cbThisStatus(n),a?"undefined"!=typeof window.external.cbThisStatus&&window.external.cbThisStatus(n):("undefined"!=typeof window.parent.cbThisStatus&&window.parent!=window&&window.parent.cbThisStatus(n),"undefined"!=typeof window.external.cbThisStatus&&window.external.cbThisStatus(JSON.stringify(n)))},cbMonitoringStatus:function(n){"function"==typeof l.callbackMonitoringStatus&&l.callbackMonitoringStatus(n),"undefined"!=typeof window.cbMonitoringStatus&&window.cbMonitoringStatus(n),a?"undefined"!=typeof window.external.cbMonitoringStatus&&window.external.cbMonitoringStatus(n):"undefined"!=typeof window.parent.cbMonitoringStatus&&window.parent!=window&&window.parent.cbMonitoringStatus(n)},cbKickout:function(n){"function"==typeof l.callbackKickout&&l.callbackKickout(n),"undefined"!=typeof window.cbKickout&&window.cbKickout(n),a?"undefined"!=typeof window.external.cbKickout&&window.external.cbKickout(n):"undefined"!=typeof window.parent.cbKickout&&window.parent!=window&&window.parent.cbKickout(n)},cbBackendLogout:function(n){"function"==typeof l.callbackBackendLogout&&l.callbackBackendLogout(n),"undefined"!=typeof window.cbBackendLogout&&window.cbBackendLogout(n),a?"undefined"!=typeof window.external.cbBackendLogout&&window.external.cbBackendLogout(n):"undefined"!=typeof window.parent.cbBackendLogout&&window.parent!=window&&window.parent.cbBackendLogout(n)},cbBreakLine:function(n){"function"==typeof l.callbackBreakLine&&l.callbackBreakLine(n),"undefined"!=typeof window.cbBreakLine&&window.cbBreakLine(n),a?"undefined"!=typeof window.external.cbBreakLine&&window.external.cbBreakLine(n):"undefined"!=typeof window.parent.cbBreakLine&&window.parent!=window&&window.parent.cbBreakLine(n)},cbPreview:function(n){"function"==typeof l.callbackPreview&&l.callbackPreview(n),"undefined"!=typeof window.cbPreview&&window.cbPreview(n),a?"undefined"!=typeof window.external.cbPreview&&window.external.cbPreview(n):"undefined"!=typeof window.parent.cbPreview&&window.parent!=window&&window.parent.cbPreview(n)},cbAgenda:function(n){"function"==typeof l.callbackAgenda&&l.callbackAgenda(n),"undefined"!=typeof window.cbAgenda&&window.cbAgenda(n),a?"undefined"!=typeof window.external.cbAgenda&&window.external.cbAgenda(n):"undefined"!=typeof window.parent.cbAgenda&&window.parent!=window&&window.parent.cbAgenda(n)},cbUnanswer:function(n){"function"==typeof l.callbackUnanswer&&l.callbackUnanswer(n),"undefined"!=typeof window.cbUnanswer&&window.cbUnanswer(n),a?"undefined"!=typeof window.external.cbUnanswer&&window.external.cbUnanswer(n):"undefined"!=typeof window.parent.cbUnanswer&&window.parent!=window&&window.parent.cbUnanswer(n)},cbSmsReceive:function(n){"function"==typeof l.callbackSmsReceive&&l.callbackSmsReceive(n),"undefined"!=typeof window.cbSmsReceive&&window.cbSmsReceive(n),a?"undefined"!=typeof window.external.cbSmsReceive&&window.external.cbSmsReceive(n):"undefined"!=typeof window.parent.cbSmsReceive&&window.parent!=window&&window.parent.cbSmsReceive(n)},cbOrderCallBack:function(n){"function"==typeof l.callbackOrderCallBack&&l.callbackOrderCallBack(n),"undefined"!=typeof window.cbOrderCallBack&&window.cbOrderCallBack(n),a?"undefined"!=typeof window.external.cbOrderCallBack&&window.external.cbOrderCallBack(n):"undefined"!=typeof window.parent.cbOrderCallBack&&window.parent!=window&&window.parent.cbOrderCallBack(n)}},i=n in t;return i?(o("返回"+n+"成功"),void(a?(e=JSON.stringify(e),t[n](e)):t[n](e))):void o("返回"+n+"失败，API中没有此方法,请查看API文档")},f=function(n){var e,t,o=n.hotLine,i=n.cno,c=n.pwd,w=n.bindType,a=n.bindTel,d=n.initStatus,l=n.sipIp,u=n.sipPwd,r=n.enterpriseId,b=n.webrtcSocketUrl,f=n.iceServers;this.getLatency=function(){return e},this.setLatency=function(n){e=n},this.getHotLine=function(){return o},this.getCno=function(){return i},this.setPwd=function(n){c=n},this.getPwd=function(){return c},this.getBindType=function(){return w},this.setBindTel=function(n){a=n},this.getBindTel=function(){return a},this.setInitStatus=function(n){d=n},this.getInitStatus=function(){return d},this.setSipIp=function(n){l=n},this.getSipIp=function(){return l},this.setSipPwd=function(n){u=n},this.getSipPwd=function(){return u},this.getEnterpriseId=function(){return r},this.setEnterpriseId=function(n){r=n},this.getWebrtcSocketUrl=function(){return b},this.setWebrtcSocketUrl=function(n){b=n},this.getIceServers=function(){return f},this.setIceServers=function(n){f=n},this.setWebrtcBreaker=function(n){t=n},this.getWebrtcBreaker=function(){return t}};window.executeAction=u,window.addEvents=r,window.ccic2CallbackAction=b,window.userBasic=l});