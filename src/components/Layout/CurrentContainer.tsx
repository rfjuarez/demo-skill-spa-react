import React from "react";
import styles from "./CurrentContainer.module.css"

interface Props {
    children: React.ReactNode
}

const CurrentContainer = (props: Props) => {
    return (
        <div className={styles["current"]}>
            {props.children}
        </div>
    );
}
export default CurrentContainer;
