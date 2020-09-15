export type City = {
    name: string;
    lat: number;
    lon: number;
}
export type WeatherCurrentMeasure = {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    icon: string;
    description: string;
}
export type WeatherForecastMeasure = {
    dt: number;
    min: number;
    max: number;
    avg: number;
    description: string;
    icon: string;

}
export type Weather = {
    location: City;
    current: WeatherCurrentMeasure;
    forecast: WeatherForecastMeasure[];
}
type TypeUnitToShow={
    fahrenheit:string;
    celsius:string
}
export const unitToShow:TypeUnitToShow = {
    fahrenheit: `F${String.fromCharCode(176)}`,
    celsius: `C${String.fromCharCode(176)}`
};