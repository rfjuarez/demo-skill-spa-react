import React from "react";
import {imgMediaMapResources} from "../../model/media";
import styles from "./ContentWithImage.module.css"

interface Props {
    iconCode: string;
}

interface Props {
    iconCode: string
    children: React.ReactNode;
}

const WeatherBackgroundImage = (props: Props) => {
    const Icon: any = imgMediaMapResources.get(props.iconCode);
    return (
        <>
            <img className={styles["content-with-image"]} src={Icon ?? imgMediaMapResources.values().next().value} alt={""}/>
            {props.children}
        </>
    );
};
export default WeatherBackgroundImage;