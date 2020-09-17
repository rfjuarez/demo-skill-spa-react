import {SidebarActionType} from "./action-types"
import {Dispatch} from "react";

export interface SidebarActionMessage {
    type: SidebarActionType
}

const openSidebarMessage = (): SidebarActionMessage => ({type: SidebarActionType.open});
const closeSidebarMessage = (): SidebarActionMessage => ({type: SidebarActionType.close});

export const showSidebar = (openOrClose:boolean) => {
    return async (dispatch: Dispatch<SidebarActionMessage>) => {
        openOrClose?dispatch(openSidebarMessage()):dispatch(closeSidebarMessage());
    }
};