import {HttpClient} from './http-client';
import {WeatherResponse} from '../model/weather-response';

export enum Units {
    Fahrenheit = "imperial",
    Celsius = "metric"
}

export class WeatherClient extends HttpClient {
    private APPID: string = "{YOUR_API_KEY}";

    public constructor() {
        super("http://api.openweathermap.org/data/2.5");
    };

    public getCurrentAndForecastByFiveDay = async (lat: number, lon: number): Promise<WeatherResponse> =>
        this.instance.get<WeatherResponse>("/onecall", {
            params: {
                APPID: this.APPID,
                lat: lat,
                lon: lon,
                units: Units.Celsius,
                exclude: "hourly,minutely"
            }
        });
}