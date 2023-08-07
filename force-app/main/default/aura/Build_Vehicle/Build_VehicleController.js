({
    NextPage : function(component, event, helper) {
        var res = event.target.id;
        var evt = $A.get("e.c:NavigateToC2");
        evt.setParams({ "result": res});
        evt.fire();
        
    }
/*
    ,
    Build_Vehicle_Details : function(component,event,helper) {
        $A.createComponent(
            "c:Build_Vehicle_Details",
            {
                "res" : event.getParam("result")
            },
            function(newCmp){
                if (component.isValid()) {
                    component.set("v.body", newCmp);
                }
            }
        );
    }
*/    
})