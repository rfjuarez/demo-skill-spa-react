import {IpApiClient} from "./ipapi-services";
import {IpApiResponse} from "../model/ipapi-response"
import {WeatherForecastResponse} from "../model/weather-response"
import {WeatherClient} from "./weather-services";
import {weatherForecast} from "./mock-responses";

export class AppService {
    private ipApiClient = new IpApiClient();
    private weatherClient = new WeatherClient();
    public fetchWeatherForecastByCurrentLocation = async (): Promise<WeatherForecastResponse> => {
        const apiLocation: IpApiResponse = await this.ipApiClient.getCurrentLocation();
        return await this.weatherClient.getForecastByFiveDay(apiLocation.lat, apiLocation.lon);
    }
};

export class AppServicesMock {
    public fetchWeatherForecastByCurrentLocation = async (): Promise<WeatherForecastResponse> => {
        return new Promise<WeatherForecastResponse>((resolve, reject) => {
            let response: WeatherForecastResponse = Object.assign(weatherForecast);
            resolve(response);
        });
    }
}