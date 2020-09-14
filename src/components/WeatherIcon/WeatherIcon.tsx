import React from "react";
import ClearDayIcon from "../../assets/icon/clear-day.svg"
import ClearNightIcon from "../../assets/icon/clear-night.svg"
import FogIcon from "../../assets/icon/fog.svg"
import ScatteredCloudsIcon from "../../assets/icon/scattered-clouds.svg"
import BrokenClouds from "../../assets/icon/broken-clouds.svg"
import PartlyCloudDayIcon from "../../assets/icon/partly-cloudy-day.svg"
import PartlyCloudNightIcon from "../../assets/icon/partly-cloudy-night.svg"
import RainIcon from "../../assets/icon/rain.svg"
import ShowerRainIcon from "../../assets/icon/shower-rain.svg"
import SnowIcon from "../../assets/icon/snow.svg"
import ThunderstormsIcon from "../../assets/icon/thunderstorms.svg"


//https://openweathermap.org/weather-conditions#How-to-get-icon-URL
const iconMap = new Map<string,any>();
iconMap.set("01d", ClearDayIcon);
iconMap.set("01n", ClearNightIcon);
iconMap.set("02d", PartlyCloudDayIcon);
iconMap.set("02n", PartlyCloudNightIcon);
iconMap.set("03d", ScatteredCloudsIcon);
iconMap.set("03n", ScatteredCloudsIcon);
iconMap.set("04d", BrokenClouds);
iconMap.set("04n", BrokenClouds);
iconMap.set("09d", ShowerRainIcon);
iconMap.set("09n", ShowerRainIcon);
iconMap.set("10d", RainIcon);
iconMap.set("10n", RainIcon);
iconMap.set("11d", ThunderstormsIcon);
iconMap.set("11n", ThunderstormsIcon);
iconMap.set("13d", SnowIcon);
iconMap.set("13n", SnowIcon);
iconMap.set("50d", FogIcon);
iconMap.set("50n", FogIcon);

interface Props {
    width?: number;
    height?: number;
    iconCode: string
}

const WeatherIcon = (props: Props) => {
    const Icon = iconMap.get(props.iconCode);
    return <img src={Icon ?? FogIcon} width={props.width} height={props.height} alt={""}/>;
};
export default WeatherIcon;