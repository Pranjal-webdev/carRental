import React from "react";
import photo from "../assets/image4.jpg";

const Bigcar = () => {
    return (
        <div>
            <div className="border border-black h-140 w-150 mt-5">
                <div>
                    <img src={photo} alt="pic" className="border boder-black border-3 mt-8" />
                </div>
                <div className="mt-5 text-center">
                    <p>porche</p>
                    <p>description</p>
                    <p>$price</p>
                    <button className="border border-black text-white bg-orange-600 hover:bg-orange-700 rounded-lg p-1 mt-2">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Bigcar;