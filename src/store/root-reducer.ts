import {appServiceReducer, AppState} from "./reducers/app-state/app-service-reducer";
import {combineReducers} from "redux";
export interface ApplicationState {
    appService: AppState;
}

export const RootReducer = combineReducers<ApplicationState>({
    appService: appServiceReducer,
});