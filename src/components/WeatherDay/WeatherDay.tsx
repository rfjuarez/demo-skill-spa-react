import React from "react";
import styles from "./WeatherDay.module.css"
import WeatherIcon from "../WeatherIcon/WeatherIcon";
interface Props{
    day: string;
    temp: number;
    tempMin: number;
    tempMax: number;
    units: string;
    iconCode: string;
}
const WeatherDay = (props: Props) => {
  return(
      <li>
          <WeatherIcon iconCode={props.iconCode} width={32} height={32}/>
          <span className={styles["day-name"]}>{props.day}</span>
          <span className={styles["day-temp"]}>{props.temp}</span>
          <span className={styles["day-temp"]}>{props.tempMin}</span>
          <span className={styles["day-temp"]}>{props.tempMax}</span>
      </li>
  );
};
export default WeatherDay;