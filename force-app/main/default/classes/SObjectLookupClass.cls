public class SObjectLookupClass {
	@AuraEnabled
    public static List < Account > fetchLookUpValues(String searchKeyWord, String ObjectName) {
        system.debug('ObjectName-->' + ObjectName);
        //String searchKey = searchKeyWord + '%';
        String searchKey ='%'+ searchKeyWord+ '%';
        
        List < Account > returnList = new List < Account > ();
      
        // Create a Dynamic SOQL Query For Fetch Record List with LIMIT 5   
      //  String sQuery =  'select id, Name from Account where IsPersonAccount = true and Name LIKE: searchKey order by createdDate DESC limit 5';
       // Account accid = [Select id from account where Name =: 'Customer'];
     //  String sQuery  = 'SELECT Id, Name FROM Contact where Account__r.Id = '001g000001jICaSAAW' and Name LIKE: searchKey limit 5';
      		//ID contactId = [Select contactid from User where id =: Userinfo.getUserid()].contactId;
           // ID AccID  = [Select AccountID from Contact where id =: contactid ].AccountId;
        	List < Account > lstOfRecords = [select id, Name from Account where Name LIKE: searchKey order by createdDate DESC limit 5] ;
        
        for (Account obj: lstOfRecords) {
            returnList.add(obj);
        }
        return returnList;
    }
}