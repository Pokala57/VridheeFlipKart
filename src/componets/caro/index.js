import React from"react";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import "./index.css";


const Caro=()=>{
    return(
        <div className="imgContainer">
            <button className="rightbtn"><FiChevronRight className="righticon"/></button>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/af9b2852656c2388.jpg?q=50" alt="caro" />
            <button className="leftbtn"><FiChevronLeft className="lefticon"/></button>
        </div>
    )
}


export default Caro;