import React, {useRef} from "react"
import styles from "./Sidebar.module.css"

interface Props {
    children: React.ReactNode
    show:boolean
}


const Sidebar = (props:Props) =>{
    const sidebarRef = useRef<HTMLDivElement|null>(null);
    const closeHandlerEvent = (event:React.MouseEvent<HTMLSpanElement, MouseEvent>) =>{
        if(sidebarRef.current){
            sidebarRef.current.style.width="0";
        }
    }

    return(
    <div style={props.show?{width:"250px"}:{width:"0"}}
         className={styles["sidenav"]}
         ref={sidebarRef}
    >
        <span className={styles["closebtn"]}
           onClick={(e)=>closeHandlerEvent(e)}>x</span>
        <ul>
            {props.children}
        </ul>

    </div>
    );
}
export default Sidebar;