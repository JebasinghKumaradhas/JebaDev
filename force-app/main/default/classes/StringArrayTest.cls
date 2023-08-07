public class StringArrayTest {
    public static List<String> generateStringArray(Integer returnCount){
        List<String> returnStrings = new List<String>();
        for(Integer i=0; i< returnCount ; i++){
            returnStrings.add('Test '+i);
        }
        system.debug('returnStrings : '+returnStrings);
        return returnStrings;
    }

}