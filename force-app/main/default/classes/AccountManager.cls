@RestResource(urlMapping='/Accounts/*/contacts')

global with sharing class AccountManager {
	@HttpGet
    global static Account getAccount(){
        RestRequest request = RestContext.request;
        String AcctId = request.requestURI.substringBetween('Accounts/', '/contacts');
        Account acct = [select id, name, (select id, name from contacts) from account where Id = :AcctId];
        return acct;
    }
}