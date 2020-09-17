import {IpApiResponse} from "../model/ipapi-response";
import {ipApiLocation, weatherAllInOne} from "./mock-responses";
import {IpApiClient} from "./ipapi-services";
import {WeatherClient} from "./weather-services";
import {WeatherResponse} from "../model/weather-response";
import {AppServiceImpl} from "./app-services";

const mockDelay: number = 700;

export class IpApiClientMock implements IpApiClient {
    public getCurrentLocation = async () => {
        return new Promise<IpApiResponse>((resolve) => {
            const response: IpApiResponse = Object.assign(ipApiLocation);
            setTimeout(function () {
                resolve(response);
            }, mockDelay);
        });
    };
}

export class WeatherClientMock implements WeatherClient {
    getCurrentAndForecastByFiveDay(lat: number, lon: number): Promise<WeatherResponse> {
        return new Promise<WeatherResponse>(resolve => {
            const response: WeatherResponse = Object.assign(weatherAllInOne);
            setTimeout(() =>
                resolve(response), mockDelay
            );
        });
    }
}

export const appServicesMock = new AppServiceImpl(new IpApiClientMock(), new WeatherClientMock());