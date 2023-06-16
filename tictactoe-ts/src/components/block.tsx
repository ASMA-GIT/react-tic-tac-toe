import React from "react";
import './block.css';

interface BlockProps{
    value?:string | null;
    onClick?:()=> void;
}


export const Block:React.FC<BlockProps>= (props)=>{
    const style = props.value === 'X'?'block x':'block o';
    return(
        <div className={style}  onClick={props.onClick} >{props.value}</div>
    )};