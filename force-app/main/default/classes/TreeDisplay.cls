public class TreeDisplay {
     @AuraEnabled
     public static List<Account> getAccountDetails()
        {
            List<Account> acc =[SELECT Id, Name, AnnualRevenue, phone, type, AccountNumber FROM Account limit 10];
            system.debug(acc);
            return acc;
        }
}