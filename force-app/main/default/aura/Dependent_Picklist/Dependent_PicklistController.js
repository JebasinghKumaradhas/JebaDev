({
	doInit : function(component, evt, helper) {
        helper.getPickListVal(component, 'Model__c', 'optModel');
    },
    onSelectChange : function(component, evt, helper) {
        helper.packDetail(component, event, 'optPackage');      
    }
})