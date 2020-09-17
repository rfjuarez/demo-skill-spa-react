import React from "react";
import Loading from "../components/Loading/Loading";

export interface Props {
    loading: boolean;
    children: React.ReactNode;
}

const WithLoading: React.FunctionComponent<Props> = props => (
    <>{props.loading ? <Loading/> : props.children}</>
);

export default WithLoading;