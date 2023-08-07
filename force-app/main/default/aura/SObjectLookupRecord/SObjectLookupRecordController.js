({
    onfocus : function(component,event,helper){
        var forOpen = component.find("searchRes");
        $A.util.addClass(forOpen, 'slds-is-open');
        $A.util.removeClass(forOpen, 'slds-is-close');
        // Get Default 5 Records order by createdDate DESC  
        var getInputkeyWord = '';
        console.log('going into onfocus method');
        helper.searchHelper(component,event,getInputkeyWord);
    },
    keyPressController : function(component, event, helper) {
        // get the search Input keyword   
        var getInputkeyWord = component.get("v.SearchKeyWord");
        // check if getInputKeyWord size id more then 0 then open the lookup result List and 
        // call the helper 
        // else close the lookup result List part.   
        if( getInputkeyWord.length > 0 ){
            var forOpen = component.find("searchRes");
            $A.util.addClass(forOpen, 'slds-is-open');
            $A.util.removeClass(forOpen, 'slds-is-close');
            helper.searchHelper(component,event,getInputkeyWord);
        }
        else{  
            component.set("v.listOfSearchRecords", null ); 
            var forclose = component.find("searchRes");
            $A.util.addClass(forclose, 'slds-is-close');
            $A.util.removeClass(forclose, 'slds-is-open');
        }
        
    },
    
    // function for clear the Record Selaction 
    clear :function(component,event,heplper){
        
        var pillTarget = component.find("lookup-pill");
        var lookUpTarget = component.find("lookupField"); 
        
        $A.util.addClass(pillTarget, 'slds-hide');
        $A.util.removeClass(pillTarget, 'slds-show');
        
        $A.util.addClass(lookUpTarget, 'slds-show');
        $A.util.removeClass(lookUpTarget, 'slds-hide');
        
        component.set("v.SearchKeyWord",null);
        component.set("v.listOfSearchRecords", null );
        component.set("v.selectedRecord", null );
        var getSelectRecord = component.get("v.selectedRecord");
        // call the event   
        var compEvent = component.getEvent("SelectedRecord");
        // set the Selected sObject Record to the event attribute.  
        compEvent.setParams({"SelectedConsumer" : getSelectRecord });  
        // fire the event  
        compEvent.fire();
        component.set("v.con",'false');
    },
    
    // This function call when the end User Select any record from the result list.   
    handleComponentEvent : function(component, event, helper) {
        // get the selected Account record from the COMPONETN event 	 
        var selectedAccountGetFromEvent = event.getParam("recordByEvent");
        
        component.set("v.selectedRecord" , selectedAccountGetFromEvent); 
        console.log("selected record:"+selectedAccountGetFromEvent.Name);
        
        var getSelectRecord = component.get("v.selectedRecord");
        
        // call the event   
        var compEvent = component.getEvent("SelectedRecord");
        // set the Selected sObject Record to the event attribute.  
        compEvent.setParams({"SelectedConsumer" : getSelectRecord });  
        // fire the event  
        compEvent.fire();
        var forclose = component.find("lookup-pill");
        $A.util.addClass(forclose, 'slds-show');
        $A.util.removeClass(forclose, 'slds-hide');
        
        
        var forclose = component.find("searchRes");
        $A.util.addClass(forclose, 'slds-is-close');
        $A.util.removeClass(forclose, 'slds-is-open');
        
        var lookUpTarget = component.find("lookupField");
        $A.util.addClass(lookUpTarget, 'slds-hide');
        $A.util.removeClass(lookUpTarget, 'slds-show');  
        
    },
    // automatically call when the component is done waiting for a response to a server request.  
    /* hideSpinner : function (component, event, helper) {
        var spinner = component.find('spinner');
        var evt = spinner.get("e.toggle");
        evt.setParams({ isVisible : false });
        evt.fire();    
    },
 // automatically call when the component is waiting for a response to a server request.
    showSpinner : function (component, event, helper) {
        var spinner = component.find('spinner');
        var evt = spinner.get("e.toggle");
        evt.setParams({ isVisible : true });
        evt.fire();    
    },*/
    openModal :  function(component, event, helper){
        
        helper.showPopupHelper(component, 'modaldialog', 'slds-fade-in-');
        helper.showPopupHelper(component,'backdrop','slds-backdrop--');
    },
    closeModal :  function(component, event, helper){
        component.find("name1").set("v.value", ""); 
        component.find("name2").set("v.value", "");
        component.find("cit").set("v.value", "");
        component.find("sta").set("v.value", "");
        component.find("zip").set("v.value", "");
        component.find("cou").set("v.value", "");
        component.find("email").set("v.value", "");
        component.find("pho").set("v.value", "");
        helper.hidePopupHelper(component, 'modaldialog', 'slds-fade-in-');
        helper.hidePopupHelper(component,'backdrop','slds-backdrop--');
    },
    saveIt :  function(component, event, helper){
        
        //var action =component.get("c.saveform");
        var fname = component.find("name1").get("v.value");
        var lname = component.find("name2").get("v.value");
        var street = component.find("stt").get("v.value");
        var city = component.find("cit").get("v.value");
        var state = component.find("sta").get("v.value");
        var zip = component.find("zip").get("v.value");
        var country = component.find("cou").get("v.value");
        var mail = component.find("email").get("v.value");
        var phone = component.find("pho").get("v.value");
        
        console.log('+++'+fname);
        console.log('+++'+lname);
        var action =component.get("c.saveFormConsumer");
        console.log("After save");
        action.setParams({
            firstName : fname,
            lastName : lname,
            phone : phone,
            billingStreet :street,
            billingCity : city,
            billingState : state,
            billingPostalCode : zip,
            billingCountry : country,
            email : mail,
            
            
        });
        console.log("After save set param");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.consumer", response.getReturnValue());
                component.set("v.con",'true');
                var sr = component.get("v.consumer");
                component.set("v.selectedRecord",sr);
                console.log("selected record:"+sr.FirstName+" "+sr.LastName);
                var getSelectRecord = component.get("v.selectedRecord");
                // call the event   
                var compEvent = component.getEvent("SelectedRecord");
                // set the Selected sObject Record to the event attribute.  
                compEvent.setParams({"SelectedConsumer" : getSelectRecord });  
                // fire the event  
                compEvent.fire();
            }
            else{
                console.log("Failed "+state);
                console.log("return "+response.getReturnValue());
            }
            
            console.log(response.getReturnValue().Name);
            console.log('successfully returning value');
        });
        console.log("After setCallback");
        $A.enqueueAction(action);
        helper.hidePopupHelper(component, 'modaldialog', 'slds-fade-in-');
        helper.hidePopupHelper(component,'backdrop','slds-backdrop--');
        component.find("name1").set("v.value", ""); 
        component.find("name2").set("v.value", "");
        component.find("cit").set("v.value", "");
        component.find("sta").set("v.value", "");
        component.find("zip").set("v.value", "");
        component.find("cou").set("v.value", "");
        component.find("email").set("v.value", "");
        component.find("pho").set("v.value", "");
        
        var forclose = component.find("lookup-pill");
        $A.util.addClass(forclose, 'slds-show');
        $A.util.removeClass(forclose, 'slds-hide');
        
        var forclose = component.find("searchRes");
        $A.util.addClass(forclose, 'slds-is-close');
        $A.util.removeClass(forclose, 'slds-is-open');
        
        var lookUpTarget = component.find("lookupField");
        $A.util.addClass(lookUpTarget, 'slds-hide');
        $A.util.removeClass(lookUpTarget, 'slds-show'); 
    }
    
})