import React from "react";
import {iconMediaMapResources} from "../../model/media";

interface Props {
    width?: number;
    height?: number;
    iconCode: string
}

const WeatherIcon = (props: Props) => {
    const Icon = iconMediaMapResources.get(props.iconCode);
    return <img src={Icon ?? iconMediaMapResources.values().next().value} width={props.width} height={props.height} alt={""}/>;
};
export default WeatherIcon;