import React from "react";

interface Props {
    children: React.ReactNode;
    errorComponent: () => any;
    hasError: () => boolean;
}

const WithError = (props: Props) => (props.hasError() ? props.errorComponent() : props.children);
export default WithError;