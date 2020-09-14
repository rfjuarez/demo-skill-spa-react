export type City={
    name: string;
    lat: number;
    lon: number;
}
export type WeatherCurrentMeasure={
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
}
export type WeatherForecastMeasure={
    dt: number;
        min: number;
        max: number;
        avg: number;
        description: string;
        icon: string;

}
export type Weather={
    location: City;
    current:WeatherCurrentMeasure;
    forecast:WeatherForecastMeasure[];
}