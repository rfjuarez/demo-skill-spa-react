import React, {Dispatch} from "react";
import {showSidebar, SidebarActionMessage} from "../../store/reducers/sidebar-state/sidebar-actions";
import {connect, ConnectedProps} from "react-redux";
import {
    AppServiceActionMessage,
    loadWeatherByCurrentLocation
} from "../../store/reducers/app-state/app-service-actions";


const mapActionsToProps = (dispatch: Dispatch<AppServiceActionMessage | SidebarActionMessage>) => ({
    loadWeatherByCurrentLocation: async () => loadWeatherByCurrentLocation()(dispatch),
    showSidebar: async (t: boolean) => showSidebar(t)(dispatch)
});


const connector = connect(null, mapActionsToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface OnClickHandlerParameters {
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
}

const LOCATION="Ubicación Actual";

const CurrentLocation = (props: PropsFromRedux) => {
    const onClickHandler = (params: OnClickHandlerParameters): void => {
        params.event.preventDefault();
        props.loadWeatherByCurrentLocation();
        props.showSidebar(false);
    };

    return (
        <div onClick={(event) =>
            onClickHandler(
                {
                    event: event,
                })}>
            <span>{LOCATION}</span>
        </div>
    );
}
export default connector(CurrentLocation);