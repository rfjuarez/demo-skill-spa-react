import React from "react";
import {City} from "../../model/app";

interface Props{
    city:City;
}
interface OnClickHandlerParameters{
    event:React.MouseEvent<HTMLDivElement, MouseEvent>,
    city:City;
}
const onClickHandler = (params:OnClickHandlerParameters):void=>{
    console.log(`Selecciono ${params.city.name}`);
};
const Location = (props: Props) => {

    return(
        <div onClick={(event)=>onClickHandler({event:event,city:props.city})}>
            <span>{props.city.name}</span>
        </div>
        );
}
export default Location;