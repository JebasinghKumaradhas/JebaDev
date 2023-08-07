@IsTest
private class AnimalLocatorTest {
    @isTest static  void  testGetAnimalLocator() {
    Test.setMock(HttpCalloutMock.class, new AnimalLocatorMock());
    String animalname = AnimalLocator.getAnimalNameById(1);
    String expectedValue = 'Chicken';
    System.debug(animalname+' ' + expectedValue);
    }
}