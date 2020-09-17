import {SidebarActionType} from "./action-types"
import {SidebarActionMessage} from "./sidebar-actions";

export interface SidebarState {
    show: boolean;
}

const initialState: SidebarState = {
    show: false,
}

export const sidebarReducer = (state: SidebarState = initialState, action: SidebarActionMessage): SidebarState => {
    switch (action.type) {
        case SidebarActionType.open:
            return {show: true};
        case SidebarActionType.close:
            return {show: false};
        default:
            return state;
    }
} 