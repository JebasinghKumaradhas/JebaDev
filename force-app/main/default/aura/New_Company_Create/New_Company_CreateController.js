({
	doInit : function(component, event, helper) {
		var recordTypeId = component.get("v.pageReference").state.recordTypeId;
        //alert('****recordTypeId****'+recordTypeId);
        var headerName = 'New Company';
        var modalBody;
        var modalFooter;
        $A.createComponents([
                ["c:New_Company_Page",{"recordTypeId" : recordTypeId}],
            	["c:SaveCancelButtons",{}]
            ],
            function(components, status){
                if (status === "SUCCESS") {                    
                    modalBody = components[0];
                    modalFooter = components[1];
                    component.find('overlayLib').showCustomModal({
                       header: headerName,
                       body: modalBody, 
                       footer: modalFooter,
                       showCloseButton: true,                        
                       cssClass: "mycss",
                       closeCallback: function() {
                           //alert('You closed the alert!!!!!!!!!');
                           var companyId = component.get('v.companyId');
                           //alert('******companyId****'+ companyId);
                           if(companyId != ""){
                               var pageReference = {
                                    type: 'standard__recordPage',
                                    attributes: { 
                                        "recordId" : companyId,
                                        "objectApiName": 'Account',
                                        "actionName": 'view'
                                    }
                                };
                           }else{
                               var pageReference = {
                                    type: 'standard__objectPage',
                                    attributes: {                                    
                                        "objectApiName": 'Account',
                                        "actionName": 'list'
                                    }
                                };
                           }
                           
                           var navService = component.find("navService");
                           
                            //component.set("v.pageReference", pageReference);
                            navService.navigate(pageReference);
                       }
                   })
                }
            }
           );
	},
    handleComponentEvent : function(component,event,helper){
        var companyId = event.getParam("companyRecordId");
        //alert('**handler**company Id*****'+ companyId);
        component.set('v.companyId',companyId);        
    }
})