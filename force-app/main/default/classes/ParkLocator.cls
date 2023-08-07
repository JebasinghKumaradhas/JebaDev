public class ParkLocator {
    public static string[] country(String country) {
        ParkService.ParksImplPort park = new ParkService.parksImplPort();
        return park.byCountry(country);
    }
}