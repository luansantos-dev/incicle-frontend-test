import React from 'react';
import TitleSecondary from "../Typography/TitleSecondary";
import styles from './ManagementBoards.module.css';
import ManagementBoardsCards from './ManagementBoardsCards';


const ManagementBoards = () => {  

    return (
        <div className={styles.ManagementBoards}>
            <TitleSecondary text="Quadros de Gestão à Vista"/>  
            <ManagementBoardsCards/>                       
            <ManagementBoardsCards/>                       
            <ManagementBoardsCards/>                       
            <ManagementBoardsCards/>                       
        </div>
    )
  }


    
    

export default ManagementBoards
