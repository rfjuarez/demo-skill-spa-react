import React, {useEffect, useState} from "react";
import {City} from "../../model/app";
import {appServicesMock} from "../../services/app-services";
import SidebarItem from "../Sidebar/SidebarItem";
import Location from "../Location/Location";
import Sidebar from "../Sidebar/Sidebar";
import CurrentLocation from "../Location/CurrentLocation";

const SideLocationOption = () => {
    const [cities, setCities] = useState<City[] | undefined>([]);
    useEffect(() => {
        //prevent memory leaks when mount
        let mounted = true;
        appServicesMock.getCities().then(cities => mounted && setCities(cities));
        return () => {
            mounted = false;
            setCities(undefined);
        }
    }, []);

    const buildSidebarItems = (): React.ReactNode => {
        return cities?.map((c, index) => {
            return <SidebarItem key={`SidebarItem-${index}`}><Location city={c}/></SidebarItem>
        });
    }
    return (
        <Sidebar>
            <SidebarItem key={`SidebarItem-Current`}><CurrentLocation/></SidebarItem>
            {buildSidebarItems()}
        </Sidebar>);
}
export default SideLocationOption;