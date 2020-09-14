import React from "react";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import styles from "./WeatherCurrentMeasure.module.css"
interface Props{
    iconCode: string;
    temp: number;
    description: string;
}
const WeatherCurrentMeasure = (props: Props) => {
return(
    <div className={styles["weather-current-measure"]}>
        <WeatherIcon iconCode={props.iconCode} width={60} height={60}/>
        <h1 className={styles["weather-current-measure--temp"]}>{props.temp}</h1>
        <h3 className={styles["weather-current-measure--description"]}>{props.description}</h3>
    </div>
);
};
export default WeatherCurrentMeasure;