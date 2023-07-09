import React from "react";
import { FiChevronRight } from 'react-icons/fi';
import "./index.css";

const Lastcont=()=>{
    return(
        <div className="lastImg">

           <div className="Best">
            <h2>Best of <br/> Electronics</h2>
            <button> VIEW ALL</button>
            <div className="background">

            </div>
           </div>


           <div className="imgesCont">

                    <div className="imgCard_">

                        <img src="https://rukminim2.flixcart.com/image/200/200/kthjy4w0/dslr-camera/c/q/o/alpha-ilce-1-full-frame-digital-slr-camera-8k-50mop-30-fps-real-original-imag6thaygyzrgnx.jpeg?q=70" alt="img" className="cemara" />
                        <div className="paraCont1">
                        <p className="para1">Best of Trimmers</p>
                        <p className="para2"> From ₹399</p>
                        <p className="para3">realme, Mi, Philips & more</p>
                        </div>
                    </div>

                    <div className="imgCard_">
                        <img src="https://rukminim2.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70" alt="img" className="cemara2" />
                        <div className="paraCont2">
                        <p className="para1">Best of Trimmers</p>
                        <p className="para2"> From ₹399</p>
                        <p className="para3">realme, Mi, Philips & more</p>
                        </div>
                    </div>
                    <div className="imgCard_">
                        <img src="https://rukminim2.flixcart.com/image/200/200/k4a7c7k0/printer/y/j/z/canon-e3370-original-imafn2wyyxjjvzd6.jpeg?q=70" alt="img" className="cemara3" />
                        <div className="paraCont3">
                        <p className="para1">Printers</p>
                        <p className="para2"> From ₹2399</p>
                        <p className="para3">Canon</p>
                        </div>
                    </div>
                    <div className="imgCard_">
                        <img src="https://rukminim2.flixcart.com/image/200/200/l44hyfk0/printer/e/e/1/dcp-t426w-brother-original-imagf37kyz3mavub.jpeg?q=70" alt="img" className="cemara4" />
                       
                        <div className="paraCont4">
                        <p className="para1">Printers</p>
                        <p className="para2"> From ₹10399</p>
                        <p className="para3">Brothers</p>
                        </div>
                   
                    </div>
                    <button className="rightbtn_"><FiChevronRight className="righticon"/></button>

            </div>

             <div className="lastImglast">
                <img src="https://rukminim2.flixcart.com/fk-p-flap/464/708/image/f6ca031cbd39d666.jpg?q=70" alt="img"/>
             </div>

         

        </div>
    )
}

export default Lastcont;