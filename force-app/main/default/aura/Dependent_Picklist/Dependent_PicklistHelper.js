({
	getPickListVal: function(component, fieldName, elementId) {
        console.log('get Year');
        //var action = component.get("c.getYear");
    	var action = component.get("c.getselectOptions");
        action.setParams({
            "objObject": component.get("v.objInfo"),
            "fld": fieldName
        });
        var opts = [];
        action.setCallback(this,function(result){
            var state=result.getState();
            console.log('get Year callback : '+state);
            if(state=="SUCCESS"){
                var resValue = result.getReturnValue();
                console.log('get Year result : '+resValue);
                if (resValue != undefined && resValue.length > 0) {
                    opts.push({
                        class: "optionClass",
                        label: "--- None ---",
                        value: ""
                    });
                }
                for (var i = 0; i < resValue.length; i++) {
                    opts.push({
                        class: "optionClass",
                        label: resValue[i],
                        value: resValue[i]
                    });
                }
                component.find(elementId).set("v.options", opts)  
                console.log('get Year end');
            }
        });        
        $A.enqueueAction(action);
    },
    packDetail : function(component, event, elementId) {           
        var selectedModel = component.find("optModel").get("v.value");   
        console.log("selectedModel : "+selectedModel);
        var action = component.get("c.getPackageDetails");            
        action.setParams({
            "model": selectedModel
        });
        var opts = [];
        action.setCallback(this, function(a){           
            var resValue = a.getReturnValue();       
            //component.set("v.pack", data); 
            if (resValue != undefined && resValue.length > 0) {
                    opts.push({
                        class: "optionClass",
                        label: "--- None ---",
                        value: ""
                    });
                }
                for (var i = 0; i < resValue.length; i++) {
                    opts.push({
                        class: "optionClass",
                        label: resValue[i],
                        value: resValue[i]
                    });
                }
            component.find(elementId).set("v.options", opts) 
            //alert(resValue);
            console.log(opts);
        });         
        $A.enqueueAction(action);         
    },      
})