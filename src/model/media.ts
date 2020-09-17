import ClearDayIcon from "../assets/icon/clear-day.svg"
import ClearNightIcon from "../assets/icon/clear-night.svg"
import FogIcon from "../assets/icon/fog.svg"
import ScatteredCloudsIcon from "../assets/icon/scattered-clouds.svg"
import BrokenClouds from "../assets/icon/broken-clouds.svg"
import PartlyCloudDayIcon from "../assets/icon/partly-cloudy-day.svg"
import PartlyCloudNightIcon from "../assets/icon/partly-cloudy-night.svg"
import RainIcon from "../assets/icon/rain.svg"
import ShowerRainIcon from "../assets/icon/shower-rain.svg"
import SnowIcon from "../assets/icon/snow.svg"
import ThunderstormsIcon from "../assets/icon/thunderstorms.svg"
import ClearDayImg from "../assets/img/clear.jpg";
import PartlyCloudDayImg from "../assets/img/partly-cloudy-day.jpg"
import RainImg from "../assets/img/rain.jpg";
import ThunderstormsImg from "../assets/img/thunderstorms.jpg";
import SnowImg from "../assets/img/snow.jpg"
import FogImg from "../assets/img/fog.jpg";

//https://openweathermap.org/weather-conditions#How-to-get-icon-URL
export const iconMediaMapResources = new Map<string, any>();
iconMediaMapResources.set("01d", ClearDayIcon);
iconMediaMapResources.set("01n", ClearNightIcon);
iconMediaMapResources.set("02d", PartlyCloudDayIcon);
iconMediaMapResources.set("02n", PartlyCloudNightIcon);
iconMediaMapResources.set("03d", ScatteredCloudsIcon);
iconMediaMapResources.set("03n", ScatteredCloudsIcon);
iconMediaMapResources.set("04d", BrokenClouds);
iconMediaMapResources.set("04n", BrokenClouds);
iconMediaMapResources.set("09d", ShowerRainIcon);
iconMediaMapResources.set("09n", ShowerRainIcon);
iconMediaMapResources.set("10d", RainIcon);
iconMediaMapResources.set("10n", RainIcon);
iconMediaMapResources.set("11d", ThunderstormsIcon);
iconMediaMapResources.set("11n", ThunderstormsIcon);
iconMediaMapResources.set("13d", SnowIcon);
iconMediaMapResources.set("13n", SnowIcon);
iconMediaMapResources.set("50d", FogIcon);
iconMediaMapResources.set("50n", FogIcon);


export const imgMediaMapResources = new Map<string, any>();
imgMediaMapResources.set("01d", ClearDayImg);
imgMediaMapResources.set("01n", ClearDayImg);
imgMediaMapResources.set("02d", PartlyCloudDayImg);
imgMediaMapResources.set("02n", PartlyCloudDayImg);
imgMediaMapResources.set("03d", PartlyCloudDayImg);
imgMediaMapResources.set("03n", PartlyCloudDayImg);
imgMediaMapResources.set("04d", PartlyCloudDayImg);
imgMediaMapResources.set("04n", PartlyCloudDayImg);
imgMediaMapResources.set("09d", RainImg);
imgMediaMapResources.set("09n", RainImg);
imgMediaMapResources.set("10d", RainImg);
imgMediaMapResources.set("10n", RainImg);
imgMediaMapResources.set("11d", ThunderstormsImg);
imgMediaMapResources.set("11n", ThunderstormsImg);
imgMediaMapResources.set("13d", SnowImg);
imgMediaMapResources.set("13n", SnowImg);
imgMediaMapResources.set("50d", FogImg);
imgMediaMapResources.set("50n", FogImg);