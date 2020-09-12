export type CityCoordResponse = {
    lat: number;
    lon: number;
}
export type CityResponse = {
    id: number;
    name: string;
    coord: CityCoordResponse;
    country: string;
    timezone: number;
    sunrise: number;
    sunset: number;

}
export type CloudsDailyResponse = {
    all:string;
}
export type WindDailyResponse ={
    speed:number;
    deg:number;
}
export type AdditionalInformationDailyResponse={
    id: number;
    main: string;
    description: string;
    icon: string;
}
export type WeatherDailyMeasureResponse={
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}
export type WeatherDailyResponse={
    dt:number;
    main:WeatherDailyMeasureResponse;
    weather:AdditionalInformationDailyResponse[];
    clouds: CloudsDailyResponse;
    wind:WindDailyResponse;
    visibility: number;
    pop: number;
    sys: {
        pod: string;
    }
    dt_txt: string;
}
export type WeatherForecastResponse = {
    cod:string;
    message: number;
    cnt:number;
    list:WeatherDailyResponse[];
    city: CityResponse;
}