import {appServiceReducer, AppState} from "./reducers/app-state/app-service-reducer";
import {combineReducers} from "redux";
import {sidebarReducer, SidebarState} from "./reducers/sidebar-state/sidebar-reducer";

export interface ApplicationState {
    appService: AppState;
    sidebarState: SidebarState
}

export const RootReducer = combineReducers<ApplicationState>({
    appService: appServiceReducer,
    sidebarState: sidebarReducer
});