define("dojox/gantt/contextMenuTab",["./GanttTaskControl","dijit/Menu","dijit/Dialog","dijit/form/NumberSpinner","dijit/form/Button","dijit/form/CheckBox","dijit/form/DateTextBox","dijit/form/TimeTextBox","dijit/form/TextBox","dijit/form/Form","dijit/registry","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/html","dojo/date/locale","dojo/request","dojo/dom","dojo/dom-class","dojo/domReady!"],function(t,e,a,i,r,o,s,n,h,l,c,u,d,b,m,x,j,g,I){return u("dojox.gantt.contextMenuTab",[],{constructor:function(t,e,a,i,r,o){this.id=t,this.arrItems=[],this.TabItemContainer=null,this.Description=e,this.tabMenu=r,this.type=a,this.object=null,this.showObjectInfo=i,this.withDefaultValue=o},preValueValidation:function(t){for(var e=0;e<t.length;e++){var a=t[e];if(a.required&&!a.control.textbox.value)return!1}return!0},encodeDate:function(t){return t.getFullYear()+"."+(t.getMonth()+1)+"."+t.getDate()},decodeDate:function(t){var e=t.split(".");return e.length<3?"":new Date(e[0],parseInt(e[1])-1,e[2])},renameTaskAction:function(){var t=this.arrItems[0].control.textbox.value;b.trim(t).length<=0||this.preValueValidation(this.arrItems)&&(this.object.setName(t),this.hide())},deleteAction:function(){this.preValueValidation(this.arrItems)&&(this.object.project.deleteTask(this.object.taskItem.id),this.hide(),this.tabMenu.ganttChart.resource&&this.tabMenu.ganttChart.resource.reConstruct())},durationUpdateAction:function(){var t=this.arrItems[0].control.textbox.value;if(this.preValueValidation(this.arrItems)){if(!this.object.setDuration(t))return void alert("Duration out of Range");this.hide(),this.tabMenu.ganttChart.resource&&this.tabMenu.ganttChart.resource.refresh()}},cpUpdateAction:function(){var t=this.arrItems[0].control.textbox.value;this.preValueValidation(this.arrItems)&&(this.object.setPercentCompleted(t)?this.hide():alert("Complete Percentage out of Range"))},ownerUpdateAction:function(){var t=this.arrItems[0].control.textbox.value;if(this.preValueValidation(this.arrItems)){if(!this.object.setTaskOwner(t))return void alert("Task owner not Valid");this.hide(),this.tabMenu.ganttChart.resource&&this.tabMenu.ganttChart.resource.reConstruct()}},ptUpdateAction:function(){var t=this.arrItems[0].control.textbox.value;this.preValueValidation(this.arrItems)&&(this.object.setPreviousTask(t)?this.hide():alert("Please verify the Previous Task ("+t+")  and adjust its Time Range"))},renameProjectAction:function(){var t=this.arrItems[0].control.textbox.value;b.trim(t).length<=0||this.preValueValidation(this.arrItems)&&(this.object.setName(t),this.hide())},deleteProjectAction:function(){this.preValueValidation(this.arrItems)&&(this.object.ganttChart.deleteProject(this.object.project.id),this.hide(),this.tabMenu.ganttChart.resource&&this.tabMenu.ganttChart.resource.reConstruct())},cpProjectAction:function(){var t=this.arrItems[0].control.textbox.value;this.preValueValidation(this.arrItems)&&(this.object.setPercentCompleted(t)?this.hide():alert("Percentage not Acceptable"))},addTaskAction:function(){if(this.preValueValidation(this.arrItems)){var t=this.arrItems[0].control.textbox.value,e=this.arrItems[1].control.textbox.value,a=this.decodeDate(this.arrItems[2].control.textbox.value),i=this.arrItems[3].control.textbox.value,r=this.arrItems[4].control.textbox.value,o=this.arrItems[5].control.textbox.value,s=this.arrItems[6].control.textbox.value,n=this.arrItems[7].control.textbox.value;if(!(b.trim(t).length<=0)){if(!this.object.insertTask(t,e,a,i,r,n,o,s))return void alert("Please adjust your Customization");this.hide(),this.tabMenu.ganttChart.resource&&this.tabMenu.ganttChart.resource.reConstruct()}}},addSuccessorTaskAction:function(){if(this.preValueValidation(this.arrItems)){var t=this.object.project,e=this.arrItems[0].control.textbox.value,a=this.arrItems[1].control.textbox.value,i=this.decodeDate(this.arrItems[2].control.textbox.value),r=this.arrItems[3].control.textbox.value,o=this.arrItems[4].control.textbox.value,s=this.arrItems[5].control.textbox.value;if(!(b.trim(e).length<=0)){var n=this.object.parentTask?this.object.parentTask.taskItem.id:"",h=this.object.taskItem.id;if(!t.insertTask(e,a,i,r,o,h,s,n))return void alert("Please adjust your Customization");this.hide(),this.tabMenu.ganttChart.resource&&this.tabMenu.ganttChart.resource.reConstruct()}}},addChildTaskAction:function(){if(this.preValueValidation(this.arrItems)){var t=this.object.project,e=this.arrItems[0].control.textbox.value,a=this.arrItems[1].control.textbox.value,i=this.decodeDate(this.arrItems[2].control.textbox.value),r=this.arrItems[3].control.textbox.value,o=this.arrItems[4].control.textbox.value,s=this.arrItems[5].control.textbox.value,n=this.object.taskItem.id,h="";if(!(b.trim(e).length<=0)){if(!t.insertTask(e,a,i,r,o,h,s,n))return void alert("Please adjust your Customization");this.hide(),this.tabMenu.ganttChart.resource&&this.tabMenu.ganttChart.resource.reConstruct()}}},addProjectAction:function(){if(this.preValueValidation(this.arrItems)){var t=this.arrItems[0].control.textbox.value,e=this.arrItems[1].control.textbox.value,a=this.decodeDate(this.arrItems[2].control.textbox.value);if(!(b.trim(t).length<=0||b.trim(e).length<=0)){if(!this.tabMenu.ganttChart.insertProject(t,e,a))return void alert("Please adjust your Customization");this.hide(),this.tabMenu.ganttChart.resource&&this.tabMenu.ganttChart.resource.reConstruct()}}},addAction:function(t){this.actionFunc=this[t]},addItem:function(t,e,a,r){var o;o="startTime"==a||"startDate"==a?new s({type:"text",constraints:{datePattern:"yyyy.M.d",strict:!0}}):"percentage"==a?new i({constraints:{max:100,min:0}}):"duration"==a?new i({constraints:{min:0}}):new h,this.arrItems.push({id:t,name:e,control:o,tab:this,key:a,required:r})},show:function(){this.tabMenu.tabPanelDlg=this.tabMenu.tabPanelDlg||c.byId(this.tabMenu.tabPanelDlgId)||new a({title:"Settings"});try{this.tabMenu.tabPanelDlg.show()}catch(e){return}this.tabMenu.tabPanelDlg.titleNode.innerHTML=this.Description;var i,r,o=this.tabMenu.paneContentArea.firstChild.rows[1].cells[0].firstChild,s=null;this.showObjectInfo&&this.object&&(this.object.constructor==t?(this.insertData(o,"Id",this.object.taskItem.id),this.insertData(o,"Name",this.object.taskItem.name),this.insertData(o,"Start Time",this.encodeDate(this.object.taskItem.startTime)),this.insertData(o,"Duration (hours)",this.object.taskItem.duration+" hours"),this.insertData(o,"Percent Complete (%)",this.object.taskItem.percentage+"%"),this.insertData(o,"Task Assignee",this.object.taskItem.taskOwner),this.insertData(o,"Previous Task Id",this.object.taskItem.previousTaskId)):(this.insertData(o,"Id",this.object.project.id),this.insertData(o,"Name",this.object.project.name),this.insertData(o,"Start date",this.encodeDate(this.object.project.startDate)))),s=o.insertRow(o.rows.length),i=s.insertCell(s.cells.length),i.colSpan=2,i.innerHTML="<hr/>",s=o.insertRow(o.rows.length),i=s.insertCell(s.cells.length),i.colSpan=2,I.add(i,"ganttMenuDialogInputCellHeader"),i.innerHTML="Customization: "+this.Description,d.forEach(this.arrItems,function(e){s=o.insertRow(o.rows.length),i=s.insertCell(s.cells.length),I.add(i,"ganttMenuDialogInputCell"),r=s.insertCell(s.cells.length),I.add(r,"ganttMenuDialogInputCellValue"),i.innerHTML=e.name,r.appendChild(e.control.domNode),this.withDefaultValue&&this.object?this.object.constructor==t?"startTime"==e.key?e.control.textbox.value=this.encodeDate(this.object.taskItem.startTime):e.control.textbox.value=e.key?this.object.taskItem[e.key]:"":"startDate"==e.key?e.control.textbox.value=this.encodeDate(this.object.project.startDate):e.control.textbox.value=e.key?this.object.project[e.key]||this.object[e.key]||"":"":e.control.textbox.placeholder=e.required?"---required---":"---optional---"},this),this.tabMenu.ok.onClick=b.hitch(this,this.actionFunc),this.tabMenu.cancel.onClick=b.hitch(this,this.hide)},hide:function(){try{this.tabMenu.tabPanelDlg.hide()}catch(t){this.tabMenu.tabPanelDlg.destroy()}var e=this.tabMenu.paneContentArea.firstChild.rows[1].cells[0];e.firstChild.parentNode.removeChild(e.firstChild),e.innerHTML="<table></table>",I.add(e.firstChild,"ganttDialogContentCell")},insertData:function(t,e,a){var i,r=t.insertRow(t.rows.length),o=r.insertCell(r.cells.length);I.add(o,"ganttMenuDialogDescCell"),o.innerHTML=e,i=r.insertCell(r.cells.length),I.add(i,"ganttMenuDialogDescCellValue"),i.innerHTML=a}})});