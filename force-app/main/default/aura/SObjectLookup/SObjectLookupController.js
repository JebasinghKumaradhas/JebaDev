({

    handleComponentEvent1: function(component, event, helper) {
        
        var selectedAccountGetFromEvent = event.getParam("SelectedConsumer");
        component.set("v.selectedCustomer",selectedAccountGetFromEvent.Name);
        var selectedAccountGetFromEvent = selectedAccountGetFromEvent.Id
        component.set("v.selectedRecord" , selectedAccountGetFromEvent);
        
        //alert(selectedAccountGetFromEvent);
    },
})