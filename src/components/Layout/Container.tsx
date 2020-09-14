import React from "react";
import styles from "./Container.module.css";
interface Props {
    children: React.ReactNode
}

const Container = (props: Props) => {
return (
    <div className={styles["container"]}>
        {props.children}
    </div>
);
}
export default Container;