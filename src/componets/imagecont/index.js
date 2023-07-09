import React from "react";
import {FaAngleDown } from 'react-icons/fa';
import "./index.css";


const Imgcont=()=>{
    return(
        <div className="imgcont">
          <div className="imgCard">
            <img src="https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="srf"/>
            <p>Grocery</p>
          </div>
          <div className="imgCard" >
            <img src="https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="srf"/>
            <p>Mobile</p>
          </div>
          <div className="imgCard" >
            <img src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100" alt="srf"/>
            <div className="cardPara">
            <p>Fashion </p>
            <FaAngleDown className="arrow-icon" />
            </div>
          </div >
          <div className="imgCard">
            <img src="https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="srf"/>
            <div className="cardPara">
            <p>Electronics </p>
            <FaAngleDown className="arrow-icon" />
            </div>
          </div>
          <div className="imgCard">
            <img src="https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="srf"/>
            <div className="cardPara">
            <p>Home & Furniture</p>
            <FaAngleDown className="arrow-icon" />
            </div>
          </div>
          <div className="imgCard">
            <img src="https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="srf"/>
            <p>Appliances</p>
          </div>
          <div className="imgCard">
            <img src="https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="srf"/>
            <p>Travel</p>
          </div>
          <div className="imgCard">
            <img src="https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="srf"/>
            <p>Top Offers</p>
          </div>
          <div className="imgCard">
            <img src="https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="srf"/>
            <div className="cardPara">
            <p>Beauty, Toys & More</p>
            <FaAngleDown className="arrow-icon" />
            </div>
          </div>
          <div className="imgCard">
            <img src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" alt="srf"/>
            <div className="cardPara">
            <p>Two Wheelers </p>
            <FaAngleDown className="arrow-icon" />
            </div>
            
          </div>
          
        </div>
    )
}

export default Imgcont;