import React from "react";
import styles from "./WeatherDay.module.css"
import WeatherIcon from "../WeatherIcon/WeatherIcon";

interface Props {
    day: string;
    temp: number;
    tempMin: number;
    tempMax: number;
    units: string;
    iconCode: string;
}

const tempToStr = (temp: number, units: string): string => {
    return `${Math.round(temp)} ${units}`
}

const WeatherDay = (props: Props) => {
    return (
        <li>
            <WeatherIcon iconCode={props.iconCode} width={32} height={32}/>
            <span className={styles["day-name"]}>{props.day}</span>
            <span className={styles["day-temp"]}>{tempToStr(props.temp, props.units)}</span>
            <span className={styles["day-temp"]}>{tempToStr(props.tempMin, props.units)}</span>
            <span className={styles["day-temp"]}>{tempToStr(props.tempMax, props.units)}</span>
        </li>
    );
};
export default WeatherDay;