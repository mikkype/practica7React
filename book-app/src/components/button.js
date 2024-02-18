import React from "react";


function Button({name , message}) {
    return (
        <div>
        <button onClick={
            () => {alert(message)}}>{name}</button>
        </div>
        )
}

export default Button;