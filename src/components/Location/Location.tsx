import React, {Dispatch} from "react";
import {City} from "../../model/app";
import {showSidebar, SidebarActionMessage} from "../../store/reducers/sidebar-state/sidebar-actions";
import {connect, ConnectedProps} from "react-redux";
import {AppServiceActionMessage, loadWeatherByCity} from "../../store/reducers/app-state/app-service-actions";

const mapActionsToProps = (dispatch: Dispatch<AppServiceActionMessage | SidebarActionMessage>) => ({
    loadWeatherByCity: async (city: City) => loadWeatherByCity(city)(dispatch),
    eventSidebarHandler: async (t: boolean) => showSidebar(t)(dispatch)
});

const connector = connect(null, mapActionsToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
    city: City;
}

interface OnClickHandlerParameters {
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
}

const Location = (props: Props) => {
    const onClickHandler = (params: OnClickHandlerParameters): void => {
        params.event.preventDefault();
        props.loadWeatherByCity(props.city);
        props.eventSidebarHandler(false);
    };
    return (
        <div onClick={(event) =>
            onClickHandler(
                {
                    event: event
                })}>
            <span>{props.city.name}</span>
        </div>
    );
}
export default connector(Location);