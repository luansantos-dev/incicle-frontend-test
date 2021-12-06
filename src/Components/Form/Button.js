import React from 'react';
import Style from "./Button.module.css";

const Button = ({criar}) => {
    return (
        <div>
            <button className={Style.Button}>{criar} <ion-icon className={Style.IconPlus} name="add-outline"></ion-icon></button>
        </div>
    )
}

export default Button
