export class EndPoint {
    public static BaseUrl: string = "https://api.consumerfinance.gov";
    public static DateSetUrl = EndPoint.BaseUrl + "/data/hmda.json"; 
    public static GeoLocationApiUrl = "http://api.ipstack.com/check?access_key=e2a624947b517e385b194f131ebef486";
}
