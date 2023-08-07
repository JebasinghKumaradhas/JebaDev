({
    /**
     * Handler for receiving the updateLookupIdEvent event
     */
    handleAccountIdUpdate : function(cmp, event, helper) {
        // Get the Id from the Event
        var accountId = event.getParam("sObjectId");
 
        // Set the Id bound to the View
        cmp.set('v.recordId', accountId);
    },
 
    /**
     * Handler for receiving the clearLookupIdEvent event
     */
    handleAccountIdClear : function(cmp, event, helper) {
        // Clear the Id bound to the View
        cmp.set('v.recordId', null);
    }
})