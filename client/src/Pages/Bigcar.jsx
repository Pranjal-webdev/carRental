import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Bigcar = () => {

    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const { setCartCount } = useContext(CartContext);

    useEffect(() => {

    const fetchCar = async () => {

        try {

            const res = await axios.get("/api/cars");

            const selectedCar = res.data.find((item) => item._id === id);

            setCar(selectedCar);

        } catch (error) {

            console.log(error);

        }

    };

    fetchCar();

}, [id]);

    const addToCart = async () => {

    try {

        const res = await axios.post("/api/cart", {
            carId: car._id
        });

        setQuantity(res.data.quantity);
        setCartCount((prev) => prev + 1);

    } catch (error) {

        console.log(error);

    }

};

    const increaseQuantity = async () => {

    try {

        const res = await axios.patch(`/api/cart/increase/${car._id}`);

        setQuantity(res.data.quantity);
        setCartCount((prev) => prev + 1);

    } catch (error) {

        console.log(error);

    }

};

    const decreaseQuantity = async () => {

    try {

        const res = await axios.patch(`/api/cart/decrease/${car._id}`);

        setQuantity(res.data.quantity);
        setCartCount((prev) => prev - 1);

    } catch (error) {

        console.log(error);

    }

};

    
    if (!car) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-2xl p-8">
                <div key={car._id} className="border boder-1n rounded-lg">
                    <img src={car.image} alt={car.name} className="w-full h-115 object-cover rounded-xl shadow-lg" />
                </div>
                <div className="flex gap-50">
                    <div className="items-center">
                        <h1 className="text-3xl font-bold text-gray-900 mt-5">{car.name}</h1>
                        <p className="text-4xl font-extrabold text-orange-600 mt-6">₹ {car.price}<span className="text-xl text-gray-500 font-medium"> / day</span></p>
                        <div className="flex gap-4 mt-8 w-80 h-10">
                            <button className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded-lg font-semibold shadow-lg">Book Now</button>
                            {
                                quantity === 0 ?

                                <button className="text-orange-600 border border-orange-600 w-40 h-10 rounded-lg hover:bg-orange-700 hover:text-white" onClick={addToCart}>Add To Cart</button>
                                :
                                <div className="flex items-center justify-between w-40 h-10 border border-black rounded-lg">

                                    <button className="w-12 h-full bg-orange-600 text-white text-xl hover:bg-orange-700" onClick={decreaseQuantity}>-</button>

                                    <span className="font-bold text-lg">{quantity}</span>

                                    <button className="w-12 h-full bg-orange-600 text-white text-xl hover:bg-orange-700" onClick={increaseQuantity}>+</button>

                                </div>
                            }
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-600 text-lg mt-4 leading-8">Brand : {car.brand}</p>
                        <p className="text-gray-600 text-lg mt-4 leading-8">Description : {car.description}</p>
                        <p className="text-gray-600 text-lg mt-4 leading-8">Fuel : {car.fuel}</p>
                        <p className="text-gray-600 text-lg mt-4 leading-8">Seats : {car.seats}</p>
                        <p className="text-gray-600 text-lg mt-4 leading-8">Transmission : {car.transmission}</p>
                        <p className="text-gray-600 text-lg mt-4 leading-8">Rating : {car.rating}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Bigcar;