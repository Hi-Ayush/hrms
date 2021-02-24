import React from 'react';

const Button =({secondary=false,className="", children ,onClick=()=>{}})=>{
    return(
        <button className={`button ${secondary ?'--secondary':'--primary'}` } onClick={onClick}>{children}</button>
    )
}
export default Button;