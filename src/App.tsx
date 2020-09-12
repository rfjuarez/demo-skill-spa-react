import React,{useEffect, useState} from 'react';
import './App.css';
import { IpApiResponse } from './model/ipapi-response';
import {IpApiClient} from "./services/ipapi-service";

const  fetchUserLocation = async() =>{
  const ipApiClient = new IpApiClient();
  return await ipApiClient.getCurrentLocation();
};

function App() {
  const [userLocation, setUserLocation] = useState<IpApiResponse|undefined>(undefined);
  useEffect(()=>{
    fetchUserLocation().then((location)=>setUserLocation(location));
  },[userLocation]);
  return (
    <div>      
      {JSON.stringify(userLocation)}
    </div>
  );
}

export default App;
