import React from "react";

const Bigcar = () => {
    return (
        <div>
            <div className="border border-black h-140 w-150 mt-5">
                <div key={car._id}>
                    <img src={car.image} alt="pic" className="border boder-black border-3 mt-8" />
                </div>
                <div className="mt-5 text-center">
                    <p>{car.name}</p>
                    <p>{car.description}</p>
                    <p>{car.price}</p>
                    <button className="border border-black text-white bg-orange-600 hover:bg-orange-700 rounded-lg p-1 mt-2">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Bigcar;