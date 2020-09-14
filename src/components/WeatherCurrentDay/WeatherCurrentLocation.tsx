import React from "react";
import styles from "./WeatherCurrentLocation.module.css"
import pickerLocation from "../../assets/icon/picker-location.svg"

interface Props {
    weekDay: string;
    dt: string;
    location: string;
    action: (event:React.MouseEvent<HTMLDivElement, MouseEvent>)=>void;
}
const WeatherCurrentLocation = (props: Props) =>{
    return (
        <div className={styles["weather-current-location"]} onClick={(event)=>props.action(event)}>
            <h2 className={styles["weather-current-location--weekday"]}>{props.weekDay}</h2>
            <span className={styles["weather-current-location--dt"]}>{props.dt}</span>
            <img src={pickerLocation} className={styles["weather-current--picker"]}/>
            <span className={styles["weather-current-location--location"]}>{props.location}</span>
        </div>
    );
};
export default WeatherCurrentLocation;
