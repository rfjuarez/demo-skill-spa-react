import React from "react";
import ClearDayImg from "../../assets/img/clear.jpg";
import PartlyCloudDayImg from "../../assets/img/partly-cloudy-day.jpg"
import RainImg from "../../assets/img/rain.jpg";
import ThunderstormsImg from "../../assets/img/thunderstorms.jpg";
import SnowImg from "../../assets/img/snow.jpg"
import FogImg from "../../assets/img/fog.jpg";
import styles from "./ContentWithImage.module.css"

interface Props {
    iconCode: string;
}

//https://openweathermap.org/weather-conditions#How-to-get-icon-URL
const iconMap = new Map<string, any>();
iconMap.set("01d", ClearDayImg);
iconMap.set("01n", ClearDayImg);
iconMap.set("02d", PartlyCloudDayImg);
iconMap.set("02n", PartlyCloudDayImg);
iconMap.set("03d", PartlyCloudDayImg);
iconMap.set("03n", PartlyCloudDayImg);
iconMap.set("04d", PartlyCloudDayImg);
iconMap.set("04n", PartlyCloudDayImg);
iconMap.set("09d", RainImg);
iconMap.set("09n", RainImg);
iconMap.set("10d", RainImg);
iconMap.set("10n", RainImg);
iconMap.set("11d", ThunderstormsImg);
iconMap.set("11n", ThunderstormsImg);
iconMap.set("13d", SnowImg);
iconMap.set("13n", SnowImg);
iconMap.set("50d", FogImg);
iconMap.set("50n", FogImg);

interface Props {
    iconCode: string
    children: React.ReactNode;
}

const WeatherBackgroundImage = (props: Props) => {
    const Icon: any = iconMap.get(props.iconCode);
    return (
        <>
            <img className={styles["content-with-image"]} src={Icon?? FogImg} alt={""}/>
            {props.children}
        </>
    );
};
export default WeatherBackgroundImage;