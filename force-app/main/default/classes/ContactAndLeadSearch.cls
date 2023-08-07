public class ContactAndLeadSearch {
    public static List<List<sObject>> searchContactsAndLeads(String searchName) {
        List<List<sObject>> searchList = [FIND :searchName IN NAME FIELDS RETURNING Contact(FirstName,LastName),Lead(FirstName,LastName)];
        System.debug(searchList);
        return searchList;
      }
}