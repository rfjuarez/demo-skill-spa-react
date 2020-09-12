import React, {useEffect, useState} from 'react';
import './App.css';
import {AppServicesMock} from "./services/app-services";
import {WeatherForecastResponse} from "./model/weather-response"

const fetchUserLocation = async () => {
    const appService = new AppServicesMock();
    return await appService.fetchWeatherForecastByCurrentLocation();
};

function App() {
    const [userLocation, setUserLocation] = useState<WeatherForecastResponse | undefined>(undefined);
    useEffect(() => {
        fetchUserLocation().then((location) => setUserLocation(location));
    },[] );
    return (
        <div>
            {JSON.stringify(userLocation)}
        </div>
    );
}

export default App;
