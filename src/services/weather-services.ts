import {HttpClient} from './http-client';
import {WeatherForecastResponse} from '../model/weather-response';

enum Units {
    Fahrenheit = "imperial",
    Celsius = "metric"
}

export class WeatherClient extends HttpClient {
    private APPID: string = "{YOUR-API-KEY}";

    public constructor() {
        super("http://api.openweathermap.org/data/2.5");
    };

    public getForecastByFiveDay = async (lat: number, lon: number): Promise<WeatherForecastResponse> =>
        this.instance.get<WeatherForecastResponse>("/forecast", {
            params: {
                APPID: this.APPID,
                lat: lat,
                lon: lon,
                units: Units.Celsius
            }
        }).then(r => r);
};