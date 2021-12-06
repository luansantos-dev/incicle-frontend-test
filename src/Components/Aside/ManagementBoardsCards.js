import React from 'react';
import TitleTerciary from '../Typography/TitleTerciary';
import img1 from "../../Assets/img1.png";



const ManagementBoardsCards = () => {
    return (
        <div style={{background: "#E8F1F5", padding: "5px"}}>
                <TitleTerciary/>
                <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "5px"}}>
                    <img src={img1} alt=""/>
                    <img src={img1} alt=""/>
                    <img src={img1} alt=""/>
                    <img src={img1} alt=""/>
                </div> 
        </div> 
    )
}

export default ManagementBoardsCards
