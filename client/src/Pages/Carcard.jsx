import React from "react";
import photo from "../assets/bgcar01.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Carcard = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const res = await axios.get("/api/cars");
                console.log(res.data);
                setCars(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCars();
    }, []);

    return (
        <div className="grid grid-cols-4 gap-5 px-3">

            {cars.slice(0, 16).map((car) => {

                return (
                    <div className="w-80 h-85 border border-black text-center border border-black border-2" key={car._id}>

                        <div><img src={car.image} alt={car.name} className="w-full h-44 object-cover border border-black border-1" /></div>

                        <p className="font-bold mt-2">{car.name}</p>

                        <p className="text-gray-600 text-sm px-2">{car.description}</p>

                        <p className="text-orange-600 font-bold mt-2">₹ {car.price}/day</p>

                        <button className="border border-black text-white bg-orange-600 hover:bg-orange-700 rounded-lg p-1 mt-2"><Link to="/cardetail">Buy Now</Link></button>

                    </div>
                );
            })};
        </div>
    )};
export default Carcard;
