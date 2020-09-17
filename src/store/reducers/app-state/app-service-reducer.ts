import {Weather} from "../../../model/app";
import {AppServiceActionType} from "./action-types"
import {AppServiceActionMessage} from "./app-service-actions";

export interface AppState {
    loading: boolean;
    data?: Weather;
    error?: any;
}

const initialState: AppState = {
    loading: false,
}

export const appServiceReducer = (state: AppState = initialState, action: AppServiceActionMessage):AppState => {
    switch (action.type) {
        case AppServiceActionType.loading:
            return {loading: true, data: undefined, error: undefined};
        case AppServiceActionType.loadSuccess:
            return {loading: false, data: action.payload, error: undefined};
        case AppServiceActionType.loadFail:
            return {loading: false, data: undefined, error: action.error};
        default:
            return state;
    }
} 