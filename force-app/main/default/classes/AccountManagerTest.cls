@IsTest
private class AccountManagerTest {
    @isTest static void testgetAccount(){
        Id recordId = createTestRecord();
        RestRequest request = new RestRequest();
        request.requestUri = 'https://jeba-dev-ed.my.salesforce.com/services/apexrest/Accounts/'+ recordId +'/contacts';
        request.httpMethod = 'GET';
        RestContext.request = request;
        Account thisAcct = AccountManager.getAccount();
        System.assert(thisAcct != null);
        System.assertEquals('Test record', thisAcct.Name);
    }
        static Id createTestRecord() {
        // Create test record
        Account acctTest = new Account(
            Name='Test record');
        insert acctTest;
        Contact cntTest = new Contact(
            AccountID = acctTest.Id,
        	LastName = 'Test LastName',
            FirstName = 'Test FirstName'
        ) ;
        //insert cntTest;
        return acctTest.Id;
    }   
}