import React from "react";

interface ResetProps{
    onClick?:()=> void;
}

export const Reset:React.FC<ResetProps>=(props) =>{
    return(
        <button onClick={props.onClick} className='reset' >Reset</button>
    );
}