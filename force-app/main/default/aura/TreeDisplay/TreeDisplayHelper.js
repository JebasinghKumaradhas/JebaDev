({
    getAccounts : function(component, event, helper){
        var action = component.get("c.getAccountDetails");
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.account", response.getReturnValue());
            }
            console.log(response.getReturnValue());
        });
        $A.enqueueAction(action);		
    }
})