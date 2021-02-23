import React from "react";

const Card=({dimension,children})=>{
    const {width,height}=dimension;
    console.log(width,height);
    return(
        <div className="card-box" style={{width:`${width}px`,height:`${height}px`}}>
            {children}
        </div>
    )
}
export default Card;