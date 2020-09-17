import React, {Dispatch, useEffect} from "react";
import Container from "../Layout/Container";
import CurrentContainer from "../Layout/CurrentContainer";
import WeatherBackgroundImage from "../Layout/ContentWithImage";
import WeatherCurrentLocation from "../WeatherCurrentDay/WeatherCurrentLocation";
import WeatherCurrentMeasure from "../WeatherCurrentDay/WeatherCurrentMeasure";
import ForecastContainer from "../Layout/ForecastContainer";
import {connect, ConnectedProps} from "react-redux";
import {AppServiceActionMessage} from "../../store/reducers/app-state/app-service-actions";
import {loadWeatherByCurrentLocation, showSidebar} from "../../store/actions"
import {ApplicationState} from "../../store/root-reducer";
import WithLoading from "../../hocs/withLoading";
import WithError from "../../hocs/withError";
import Error from "../Error/Error";
import SideLocationOption from "../SideLocationOptions/SidebarLocationOptions";
import {SidebarActionMessage} from "../../store/reducers/sidebar-state/sidebar-actions";
import Forecast from "../Forecast/Forecast";
import {unitToShow} from "../../model/app";


const mapActionsToProps = (dispatch: Dispatch<AppServiceActionMessage | SidebarActionMessage>) => ({
    loadWeatherByCurrentPosition: () => loadWeatherByCurrentLocation()(dispatch),
    eventSidebarHandler: (t: boolean) => showSidebar(t)(dispatch)
});

const mapStateToProps = (state: ApplicationState) => ({
    appState: state.appService
});

const connector = connect(mapStateToProps, mapActionsToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
const EMPTY_STR_VALUE: string = "S/D";
const EMPTY_NUM_VALUE: number = 0;
const DEFAULT_ICON_CODE: string = "02d";

const createDescription = (feelsLike: number, units: string): string => {
    return `Sensación Termica ${Math.round(feelsLike)} ${units}`;

}
const WeatherMain = (props: PropsFromRedux) => {
    useEffect(() => {
        //warning: React Hook useEffect has a missing dependency..., Promise<void> by external(map) a useEffect
        props.loadWeatherByCurrentPosition()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const changeLocation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        props.eventSidebarHandler(true);
    };

    return (
        <WithLoading loading={props.appState.loading}>
            <WithError errorComponent={() => <Error
                title={"Error al traer los datos"}
                description={"Intente nuevamente mas tarde."}/>}
                       hasError={() => !!props.appState.error}>
                <SideLocationOption/>
                <Container>
                    <CurrentContainer>
                        <WeatherBackgroundImage iconCode={props.appState.data?.current.icon || DEFAULT_ICON_CODE}>
                            <WeatherCurrentLocation
                                dt={props.appState.data?.current.dt || EMPTY_NUM_VALUE}
                                location={props.appState.data?.location.name || EMPTY_STR_VALUE}
                                action={changeLocation}
                            />
                            <WeatherCurrentMeasure
                                iconCode={props.appState.data?.current.icon || DEFAULT_ICON_CODE}
                                temp={props.appState.data?.current.temp || EMPTY_NUM_VALUE}
                                units={unitToShow.celsius}
                                description={
                                    createDescription(props.appState.data?.current.feels_like ||
                                        EMPTY_NUM_VALUE,
                                        unitToShow.celsius)}/>
                        </WeatherBackgroundImage>
                    </CurrentContainer>
                    <ForecastContainer>
                        <Forecast/>
                    </ForecastContainer>
                </Container>
            </WithError>
        </WithLoading>
    );
};
export default connector(WeatherMain);
