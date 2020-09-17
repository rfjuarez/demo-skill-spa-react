import React from "react";
import styles from "./WeatherDay.module.css"

interface Props {
    children: React.ReactNode;
}

const WeatherWeek = (props: Props) => {
    return (
        <ul className={styles["week-list"]}>
            {props.children}
        </ul>
    )
};
export default WeatherWeek;
