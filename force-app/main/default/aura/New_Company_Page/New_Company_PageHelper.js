({
	helpSubmit : function(component,event,helper) {
		event.preventDefault();
		//alert('*****event name***' + event.getName());
		//event.stopPropagation();
        var recordTypeId = component.get('v.recordTypeId');
        alert('*******record Type Id*****'+ recordTypeId);
        var companyFields = event.getParam("fields");
        //alert(companyFields["RecordTypeId"]);
        companyFields["RecordTypeId"] = recordTypeId;
        component.find('companyCreateForm').submit(companyFields); // Submit form
	}
})