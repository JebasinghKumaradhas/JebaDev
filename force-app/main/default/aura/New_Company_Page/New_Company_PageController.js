({
    onloadComponent : function(component,event,helper){
      var recordTypeId = component.get('v.recordTypeId');
        //alert('*******record Type Id*****'+ recordTypeId);
        var companyFields = event.getParam("fields");
        //alert(companyFields["RecordTypeId"]);
        companyFields["RecordTypeId"] = recordTypeId;  
    },
    handleComponentEvent : function(component, event, helper) {
		alert('************save in handler event**********');
        /*
        
        var fields = [];
        var f1 = component.get('v.newCompany');
        alert(f1);
        console.log(f1);
        var abc = component.find('companyCreateForm').get('v.fields');
        alert(abc.get('v.value'));
        
        console.log(abc);
        */
        component.find('companyCreateForm').submit();
	}, 
    onCancel : function(component){
        component.find("popuplib").notifyClose();
    },
    handleSubmit : function(component,event,helper){
        //alert('*******submit called*****');
        helper.helpSubmit(component,event,helper);
    },
    handleSuccessMessage : function(component,event,helper){
        //var payload = event.getParams().response;
        alert('*******entered into success*******');
        var recId = component.find('companyCreateForm').get('v.recordId');
        alert('recID : '+recId);
        
        var recordTypeId = component.get('v.recordTypeId');
        alert('*******record Type Id*****'+ recordTypeId);

        var toastEvent = $A.get("e.force:showToast");  
         toastEvent.setParams({  
           "title": "Success!",  
           "message": "Company is successfully Created!",  
           "type": "success"  
         });  
         toastEvent.fire();
        var appEvent = $A.get("e.c:SaveCompanyRecordEvent");
        appEvent.setParams({
            "companyRecordId" : recId
        });        
        appEvent.fire();
        
        component.find("popuplib").notifyClose();
        
              
        
        /*
        var navService = component.find("navigationService");
        var pageReference = {
            type: 'standard__recordPage',
            attributes: { 
                "recordId" : recId,
                "objectApiName": 'Account',
                "actionName": 'view'
            }
        };
        */
        //component.set("v.pageReference", pageReference);
        //alert(navService);
        //navService.navigate(pageReference);
    }
})