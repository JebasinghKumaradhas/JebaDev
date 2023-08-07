public class ContactSearch {
    
    Public static List<Contact> searchForContacts(String lastname, String mailPostalCode){
        List<Contact> contacts = [SELECT Id, firstName, lastName, phone FROM Contact
                                  WHERE lastName =: lastname AND MailingPostalCode =: mailPostalCode ];
        return contacts;      
    }
}