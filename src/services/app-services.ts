import {IpApiClient, IpApiClientImpl} from "./ipapi-services";
import {IpApiResponse} from "../model/ipapi-response"
import {WeatherDailyResponse, WeatherResponse} from "../model/weather-response"
import {WeatherClient, WeatherClientImpl} from "./weather-services";
import {cities} from "./mock-responses";
import {City, Weather, WeatherForecastMeasure} from "../model/app";

const _translateForecast = (response: WeatherDailyResponse[]): WeatherForecastMeasure[] => {
    response.shift();//remove first element because is it eq. to current.
    return response.map(r => {
        return {
            dt: r.dt,
            min: r.temp.min,
            max: r.temp.max,
            avg: Math.round((r.temp.min + r.temp.max) / 2),
            description: r.weather[0].description,
            icon: r.weather[0].icon,
        }
    });
}

const _translate = (response: WeatherResponse, city: City): Weather => {
    return {
        location: city,
        current: {
            dt: response.current.dt,
            temp: response.current.temp,
            feels_like: response.current.feels_like,
            pressure: response.current.pressure,
            humidity: response.current.humidity,
            description: response.current.weather[0].description,
            icon: response.current.weather[0].icon,
        },
        forecast: _translateForecast(response.daily)
    }
}

export interface AppService {
    fetchWeatherForecastByCurrentLocation: () => Promise<Weather>;
    fetchWeatherForecastByCity: (city: City) => Promise<Weather>;
    getCities: () => Promise<City[]>
}

export class AppServiceImpl implements AppService {
    private ipApiClient: IpApiClient;
    private weatherClient: WeatherClient;

    constructor(ipApiClient: IpApiClient, weatherClient: WeatherClient) {
        this.ipApiClient = ipApiClient;
        this.weatherClient = weatherClient;
    }

    public fetchWeatherForecastByCurrentLocation = async (): Promise<Weather> => {
        const apiLocation: IpApiResponse = await this.ipApiClient.getCurrentLocation();
        const wr: WeatherResponse = await this.weatherClient.getCurrentAndForecastByFiveDay(apiLocation.lat, apiLocation.lon);
        return _translate(wr, {name: apiLocation.city, lat: apiLocation.lat, lon: apiLocation.lon});
    }

    public fetchWeatherForecastByCity = async (city: City): Promise<Weather> => {
        const wr: WeatherResponse = await this.weatherClient.getCurrentAndForecastByFiveDay(city.lat, city.lon);
        return _translate(wr, city);
    }

    public getCities = async (): Promise<City[]> => {
        return new Promise<City[]>((resolve) => {
            let response: City[] = Object.assign(cities);
            resolve(response);
        });
    }
}

export const appServicesImpl = new AppServiceImpl(new IpApiClientImpl(), new WeatherClientImpl());