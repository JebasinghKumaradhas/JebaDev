public class AccountHandler {
    public static Account insertNewAccount(String accountName){
        if(accountName!=''){    
            try{
                Account acc = new Account(Name=accountName);
                insert acc;
                return acc;
            } catch(Exception e){
                System.Debug('Account not created');
                return null;
            }
        } else {
            return null;
        }
    }
}