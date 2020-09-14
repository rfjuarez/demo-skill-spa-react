import {AppServiceActionType} from "./action-types"
import {City, Weather} from "../../../model/app";
import {Dispatch} from "react";
import {AppService, AppServicesMock} from "../../../services/app-services";

export interface AppServiceActionMessage {
    type: AppServiceActionType
    payload?: Weather;
    error?: any;
}

const loadingWeather = (): AppServiceActionMessage => ({type: AppServiceActionType.loading});
const loadingWeatherSuccess = (response: Weather): AppServiceActionMessage => ({
    type: AppServiceActionType.loadSuccess,
    payload: response
});

const loadingWeatherFail = (error: any): AppServiceActionMessage =>
    ({type: AppServiceActionType.loadFail, error: error});

export const loadWeatherByCity = (city: City) => {
    return async (dispatch: Dispatch<AppServiceActionMessage>) => {
        dispatch(loadingWeather());
        try {
            const appServiceClient: AppService = new AppServicesMock();
            const response: Weather = await appServiceClient.fetchWeatherForecastByCity(city);
            dispatch(loadingWeatherSuccess(response));
        } catch (err) {
            dispatch(loadingWeatherFail(err));
        }
    }
};

export const loadWeatherByCurrentLocation = () => {
    return async (dispatch: Dispatch<AppServiceActionMessage>) => {
        dispatch(loadingWeather());
        try {
            const appServiceClient: AppService = new AppServicesMock();
            const response: Weather = await appServiceClient.fetchWeatherForecastByCurrentLocation();
            dispatch(loadingWeatherSuccess(response));
        } catch (err) {
            dispatch(loadingWeatherFail(err));
        }
    }
};