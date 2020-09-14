import {IpApiClient} from "./ipapi-services";
import {IpApiResponse} from "../model/ipapi-response"
import {WeatherResponse} from "../model/weather-response"
import {WeatherClient} from "./weather-services";
import {cities, weatherAllInOne} from "./mock-responses";
import {City} from "../model/app";

const _getCities = async (): Promise<City[]> => {
    return new Promise<City[]>((resolve) => {
        let response: City[] = Object.assign(cities);
        resolve(response);
    });
}

export class AppService {
    private ipApiClient = new IpApiClient();
    private weatherClient = new WeatherClient();
    public fetchWeatherForecastByCurrentLocation = async (): Promise<WeatherResponse> => {
        const apiLocation: IpApiResponse = await this.ipApiClient.getCurrentLocation();
        return await this.weatherClient.getCurrentAndForecastByFiveDay(apiLocation.lat, apiLocation.lon);
    }
    public getCities = async (): Promise<City[]> => _getCities();
}

export class AppServicesMock {
    public fetchWeatherForecastByCurrentLocation = async (): Promise<WeatherResponse> => {
        return new Promise<WeatherResponse>((resolve) => {
            let response: WeatherResponse = Object.assign(weatherAllInOne);
            resolve(response);
        });
    }
    public getCities = async (): Promise<City[]> => _getCities();
}