import React from "react";
import styles from "./WeatherCurrentLocation.module.css"
import pickerLocation from "../../assets/icon/picker-location.svg"
import {epocToShortDay} from "../../utils/epoc";

interface Props {
    dt: number;
    location: string;
    action: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const WeatherCurrentLocation = (props: Props) => {
    return (
        <div className={styles["weather-current-location"]} onClick={(event) => props.action(event)}>
            <h2 className={styles["weather-current-location--weekday"]}>{epocToShortDay(props.dt)}</h2>
            <img src={pickerLocation} className={styles["weather-current--picker"]} alt={"Ubicación Actual"}/>
            <span className={styles["weather-current-location--location"]}>{props.location}</span>
        </div>
    );
};
export default WeatherCurrentLocation;
