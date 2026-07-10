import React from "react";
import photo from "../assets/bgcar01.jpg";

const Carcard = ()=>{
    return(
        <div className="flex flex-row gap-5 text-center">
            <div className="w-50 h-60 border border-black-2 ">
                <div>
                    <img src={photo} alt="pic"/>
                </div>
                <p>porche</p>
                <p>description</p>
                <p>$price</p>
            </div>
            <div className="w-50 h-60 border border-black-2 ">
                <div>
                    <img src={photo} alt="pic"/>
                </div>
                <p>porche</p>
                <p>description</p>
                <p>$price</p>
            </div>
            <div className="w-50 h-60 border border-black-2 ">
                <div>
                    <img src={photo} alt="pic"/>
                </div>
                <p>porche</p>
                <p>description</p>
                <p>$price</p>
            </div>
            <div className="w-50 h-60 border border-black-2 ">
                <div>
                    <img src={photo} alt="pic"/>
                </div>
                <p>porche</p>
                <p>description</p>
                <p>$price</p>
            </div>
            <div className="w-50 h-60 border border-black-2 ">
                <div>
                    <img src={photo} alt="pic"/>
                </div>
                <p>porche</p>
                <p>description</p>
                <p>$price</p>
            </div>
            <div className="w-50 h-60 border border-black-2 ">
                <div>
                    <img src={photo} alt="pic"/>
                </div>
                <p>porche</p>
                <p>description</p>
                <p>$price</p>
            </div>
        </div>
    )
}
export default Carcard;