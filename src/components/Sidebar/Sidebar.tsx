import React, {Dispatch, useRef} from "react"
import styles from "./Sidebar.module.css"
import {showSidebar} from "../../store/actions";
import {ApplicationState} from "../../store/root-reducer";
import {connect, ConnectedProps} from "react-redux";
import {SidebarActionMessage} from "../../store/reducers/sidebar-state/sidebar-actions";

const mapActionsToProps = (dispatch: Dispatch<SidebarActionMessage>) => ({
    eventSidebarHandler: async (t: boolean) => showSidebar(t)(dispatch)
});

const mapStateToProps = (state: ApplicationState) => ({
    sidebarState: state.sidebarState
});

const connector = connect(mapStateToProps, mapActionsToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
    children: React.ReactNode
}

const Sidebar = (props: Props) => {
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    const closeHandlerEvent = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        props.eventSidebarHandler(false);
    }

    return (
        <div style={props.sidebarState.show ? {width: "250px"} : {width: "0"}}
             className={styles["sidenav"]}
             ref={sidebarRef}
        >
        <span className={styles["closebtn"]}
              onClick={(e) => closeHandlerEvent(e)}>x</span>
            {props.children}
        </div>
    );
}
export default connector(Sidebar);