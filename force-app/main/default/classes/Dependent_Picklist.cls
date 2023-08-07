public class Dependent_Picklist {
    
    @AuraEnabled
    public static List < String > getselectOptions(sObject objObject, string fld) {
        system.debug('objObject --->' + objObject);
        system.debug('fld --->' + fld);
        List < String > allOpts = new list < String > ();
        // Get the object type of the SObject.
        Schema.sObjectType objType = objObject.getSObjectType();
        
        // Describe the SObject using its object type.
        Schema.DescribeSObjectResult objDescribe = objType.getDescribe();
        
        // Get a map of fields for the SObject
        map < String, Schema.SObjectField > fieldMap = objDescribe.fields.getMap();
        
        // Get the list of picklist values for this field.
        list < Schema.PicklistEntry > values =
            fieldMap.get(fld).getDescribe().getPickListValues();
        
        // Add these values to the selectoption list.
        for (Schema.PicklistEntry a: values) {
            allOpts.add(a.getValue());
        }
        system.debug('allOpts ---->' + allOpts);
        allOpts.sort();
        return allOpts;
    }   
    
    @AuraEnabled
    public  static List<String> getPackageDetails(String model){
        List < String > allOpts = new list < String > ();
        system.debug(model.length());
        String sQry = 'Select Name from Package__c where  Model__r.Name =: model';
        system.debug('sQry : '+sQry);
        List <Package__C> res = Database.query(sQry);
        
        for (Package__C a: res) {
            allOpts.add(a.Name);
        }
        system.debug('allOpts ---->' + allOpts);
        allOpts.sort();
        return allOpts;
        
    }

}