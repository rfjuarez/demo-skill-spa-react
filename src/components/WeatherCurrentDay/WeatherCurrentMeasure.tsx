import React from "react";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import styles from "./WeatherCurrentMeasure.module.css"

interface Props {
    iconCode: string;
    temp: number;
    description: string;
    units: string
}

const tempToStr = (temp: number, units: string): string => {
    return `${Math.round(temp)} ${units}`
}

const WeatherCurrentMeasure = (props: Props) => {
    return (
        <div className={styles["weather-current-measure"]}>
            <WeatherIcon iconCode={props.iconCode} width={60} height={60}/>
            <h1 className={styles["weather-current-measure--temp"]}>{tempToStr(props.temp, props.units)}</h1>
            <h3 className={styles["weather-current-measure--description"]}>{props.description}</h3>
        </div>
    );
};
export default WeatherCurrentMeasure;