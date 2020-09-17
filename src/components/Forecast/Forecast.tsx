import React from "react";
import {ApplicationState} from "../../store/root-reducer";
import {connect, ConnectedProps} from "react-redux";
import WeatherDay from "../WeatherDay/WeatherDay";
import WeatherWeek from "../WeatherDay/WeatherWeek";
import {epocToShortDay} from "../../utils/epoc";
import {unitToShow} from "../../model/app";

const mapStateToProps = (state: ApplicationState) => ({
    appState: state.appService
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const Forecast = (props: PropsFromRedux) => {
    const buildForecastItems = (): React.ReactNode => {
        return props.appState.data?.forecast?.map((f, index) => {
            return <WeatherDay
                key={`WeatherDay-${index}`}
                day={epocToShortDay(f.dt)}
                temp={f.avg}
                tempMin={f.min}
                tempMax={f.max}
                units={unitToShow.celsius}
                iconCode={f.icon}
            />
        });
    }
    return !props.appState.loading && !props.appState.error ?
        <WeatherWeek>
            {buildForecastItems()}
        </WeatherWeek> :
        null;
}
export default connector(Forecast);