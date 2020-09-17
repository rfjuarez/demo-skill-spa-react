import {appServiceReducer} from "./app-service-reducer";
import {AppServiceActionType} from "./action-types"
import expect from 'expect';
import {appServicesMock} from "../../../services/mocks"
import {AppService} from "../../../services/app-services"
import {City, Weather} from "../../../model/app";

class AppServiceMockWithException implements AppService {
    fetchWeatherForecastByCity(city: City): Promise<Weather> {
        return Promise.reject({error: "Mock error"});
    }

    fetchWeatherForecastByCurrentLocation(): Promise<Weather> {
        return Promise.reject({error: "Mock error"});
    }

    getCities(): Promise<City[]> {
        return Promise.reject({error: "Mock error"});
    }
}

const appServiceMockWithException = new AppServiceMockWithException();

describe('App service reducer', () => {
    it('should return loading when receive a loading message', () => {
        expect(appServiceReducer(undefined, {type: AppServiceActionType.loading}))
            .toEqual({loading: true, data: undefined, error: undefined});
    });

    it('should return payload when receive a loadSuccess message', () => {
        appServicesMock.fetchWeatherForecastByCurrentLocation().then(w => {
            expect(appServiceReducer(undefined,
                {
                    type: AppServiceActionType.loadSuccess,
                    payload: w,
                    error: undefined
                }))
                .toEqual({loading: true, data: w, error: undefined});
        });
    });

    it('should return undefined payload when receive a loadSuccess message with empty payload', () => {
        appServicesMock.fetchWeatherForecastByCurrentLocation().then(w => {
            expect(appServiceReducer(undefined,
                {
                    type: AppServiceActionType.loadSuccess,
                    payload: undefined,
                    error: undefined
                }))
                .toEqual({loading: true, data: undefined, error: undefined});
        });
    });

    it('should return error state when receive a loadFail message', () => {
        appServiceMockWithException.fetchWeatherForecastByCurrentLocation().catch(e => {
            expect(appServiceReducer(undefined,
                {
                    type: AppServiceActionType.loadFail,
                    payload: undefined,
                    error: e
                }))
                .toEqual({loading: false, data: undefined, error: e});
        });
    });
});