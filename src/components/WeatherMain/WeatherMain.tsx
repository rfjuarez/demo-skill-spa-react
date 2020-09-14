import {AppServicesMock, AppService} from "../../services/app-services";
import React, {useEffect, useState} from "react";
import {WeatherResponse} from "../../model/weather-response";
import Container from "../Layout/Container";
import CurrentContainer from "../Layout/CurrentContainer";
import WeatherBackgroundImage from "../Layout/ContentWithImage";
import WeatherCurrentLocation from "../WeatherCurrentDay/WeatherCurrentLocation";
import WeatherCurrentMeasure from "../WeatherCurrentDay/WeatherCurrentMeasure";
import ForecastContainer from "../Layout/ForecastContainer";
import WeatherWeek from "../WeatherDay/WeatherWeek";
import WeatherDay from "../WeatherDay/WeatherDay";
import Sidebar from "../Sidebar/Sidebar";
import SidebarItem from "../Sidebar/SidebarItem";
import {City} from "../../model/app";
import Location from "../Location/Location";

const fetchUserLocation = async () => {
    const appService = new AppServicesMock();
    return await appService.fetchWeatherForecastByCurrentLocation();
};
const fetchLocations = async ():Promise<City[]> =>{
    const appService = new AppServicesMock();
    return await appService.getCities();
}
const WeatherMain =() =>{
    const [userLocation, setUserLocation] = useState<WeatherResponse | undefined>(undefined);
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const [cities,setCities]=useState<City[] | undefined>(undefined);
    useEffect(() => {
        fetchUserLocation().then((location) => setUserLocation(location));
        fetchLocations().then(cities=>setCities(cities));
    },[] );

    const changeLocation=(event: React.MouseEvent<HTMLDivElement, MouseEvent>)=> {
        event.preventDefault();
        const _s=!showSidebar
        setShowSidebar(_s);
    };
    const buildSidebarItems = ():React.ReactNode =>{
        const citiesOptions= cities?.map((c,index)=>{
            return <SidebarItem key={`SidebarItem-${index}`}><Location  city={c}/></SidebarItem>
        });
        if(citiesOptions){
            return <Sidebar show={showSidebar}>{citiesOptions}</Sidebar>
        }else{
            return null;
        }

    }

    return (
        <>
            {buildSidebarItems()}


        <Container>
            <CurrentContainer>
                <WeatherBackgroundImage iconCode={"02d"}>
                    <WeatherCurrentLocation dt={"22/22/444"}
                                            location={"Cordoba - Arg"}
                                            weekDay={"Lunes"}
                                            action={changeLocation}
                    />
                    <WeatherCurrentMeasure iconCode={"02d"} temp={25} description={"Soleado"}/>
                </WeatherBackgroundImage>
            </CurrentContainer>
            <ForecastContainer>
                <WeatherWeek>
                    <WeatherDay day={"Lunes"} temp={23} tempMin={12} tempMax={24} units={"c"} iconCode={"02d"}/>
                    <WeatherDay day={"Martes"} temp={23} tempMin={11} tempMax={25} units={"c"} iconCode={"02d"}/>
                    <WeatherDay day={"Miercoles"} temp={23} tempMin={13} tempMax={25} units={"c"} iconCode={"01d"}/>
                    <WeatherDay day={"Jueves"} temp={25} tempMin={16} tempMax={27} units={"c"} iconCode={"01d"}/>
                    <WeatherDay day={"Viernes"} temp={26} tempMin={18} tempMax={27} units={"c"} iconCode={"01d"}/>
                </WeatherWeek>
            </ForecastContainer>
        </Container>
            </>
    );
};
export default WeatherMain;
