import React from "react";

interface Props {
    title: string;
    description: string
}

const Error = (props: Props) => {
    return (<div>
        <h1>{props.title}</h1>
        <div>{props.description}</div>
    </div>);
};

export default Error;