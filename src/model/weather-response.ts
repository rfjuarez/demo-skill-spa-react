export type WeatherAdditionalInformationResponse = {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export type WeatherCurrentResponse = {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: WeatherAdditionalInformationResponse[]
}

export type WeatherDailyResponse = {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: {
        day: number;
        min: number;
        max: number;
        night: number;
        eve: number;
        morn: number;
    };
    feels_like: {
        day: number;
        night: number;
        eve: number;
        morn: number
    };
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    weather: WeatherAdditionalInformationResponse[];
    clouds: number;
    pop: number;
    uvi: number;
}
export type WeatherResponse = {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: WeatherCurrentResponse;
    daily: WeatherDailyResponse[]
}