import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Bigcar = () => {

    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {

        const fetchCar = async () => {

            const res = await axios.get("/api/cars");

            const selectedCar = res.data.find((item) => item._id === id);

            setCar(selectedCar);

        };

        fetchCar();

    }, [id]);

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
                            <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-lg font-semibold transition">Add To Cart</button>
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