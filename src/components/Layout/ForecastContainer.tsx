import React from "react";
import styles from "./ForecastContainer.module.css"

interface Props {
    children: React.ReactNode;
}

const ForecastContainer = (props: Props) => {
    return (
        <div className={styles["forecast-container"]}>
            {props.children}
        </div>
    );
};
export default ForecastContainer;