import React from "react";
import styles from "./SidebarItem.module.css"

interface Props {
    children: React.ReactNode;
}

const SidebarItem = (props: Props) => {
    return (
        <li className={styles["item-nav"]}>{props.children}</li>
    );
}
export default SidebarItem;