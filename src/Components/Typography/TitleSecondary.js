import React from 'react';
import styles from "./TitleSecondary.module.css";

const TitleSecondary = ({text}) => {
    return (
        <h2 className={styles.TitleSecondary}>  
            {text}     
        </h2>
    )
}

export default TitleSecondary
