import {IpApiClient} from "./ipapi-services";
import {IpApiResponse} from "../model/ipapi-response"
import {WeatherDailyResponse, WeatherResponse} from "../model/weather-response"
import {WeatherClient} from "./weather-services";
import {cities, weatherAllInOne} from "./mock-responses";
import {City, Weather, WeatherForecastMeasure} from "../model/app";

const _getCities = async (): Promise<City[]> => {
    return new Promise<City[]>((resolve) => {
        let response: City[] = Object.assign(cities);
        resolve(response);
    });
}

const _translateForecast = (response: WeatherDailyResponse[]): WeatherForecastMeasure[] => {
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
        },
        forecast: _translateForecast(response.daily)
    }
}

export interface AppService {
    fetchWeatherForecastByCurrentLocation: () => Promise<Weather>;
    fetchWeatherForecastByCity: (city: City) => Promise<Weather>;
    getCities: () => Promise<City[]>
}

export class AppServiceImp implements AppService {
    private ipApiClient = new IpApiClient();
    private weatherClient = new WeatherClient();
    public fetchWeatherForecastByCurrentLocation = async (): Promise<Weather> => {
        const apiLocation: IpApiResponse = await this.ipApiClient.getCurrentLocation();
        const wr: WeatherResponse = await this.weatherClient.getCurrentAndForecastByFiveDay(apiLocation.lat, apiLocation.lon);
        return _translate(wr, {name: apiLocation.city, lat: apiLocation.lat, lon: apiLocation.lon});
    }
    public fetchWeatherForecastByCity = async (city: City): Promise<Weather> => {
        const wr: WeatherResponse = await this.weatherClient.getCurrentAndForecastByFiveDay(city.lat, city.lon);
        return _translate(wr, city);
    }
    public getCities = async (): Promise<City[]> => _getCities();
}

export class AppServicesMock implements AppService {
    public fetchWeatherForecastByCurrentLocation = async (): Promise<Weather> => {
        return new Promise<Weather>((resolve) => {
            const response: WeatherResponse = Object.assign(weatherAllInOne);
            resolve(_translate(response, Object.assign(cities[0])));
        });
    }
    public fetchWeatherForecastByCity = async (city: City): Promise<Weather> => {
        return new Promise<Weather>((resolve) => {
            const response: WeatherResponse = Object.assign(weatherAllInOne);
            resolve(_translate(response, city));
        });
    }
    public getCities = async (): Promise<City[]> => _getCities();
}