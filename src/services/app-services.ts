import {IpApiClient} from "./ipapi-services";
import {IpApiResponse} from "../model/ipapi-response"
import {WeatherResponse} from "../model/weather-response"
import {WeatherClient} from "./weather-services";
import {weatherAllInOne} from "./mock-responses";

export class AppService {
    private ipApiClient = new IpApiClient();
    private weatherClient = new WeatherClient();
    public fetchWeatherForecastByCurrentLocation = async (): Promise<WeatherResponse> => {
        const apiLocation: IpApiResponse = await this.ipApiClient.getCurrentLocation();
        return await this.weatherClient.getCurrentAndForecastByFiveDay(apiLocation.lat, apiLocation.lon);
    }
}

export class AppServicesMock {
    public fetchWeatherForecastByCurrentLocation = async (): Promise<WeatherResponse> => {
        return new Promise<WeatherResponse>((resolve) => {
            let response: WeatherResponse = Object.assign(weatherAllInOne);
            resolve(response);
        });
    }
}