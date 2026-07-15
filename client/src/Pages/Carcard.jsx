import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Carcard = () => {

    const [cars, setCars] = useState([]);
    const [search, setSearch] = useState("");

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

    const filteredCars = cars.filter((car) => {
        return (
            car.name.toLowerCase().includes(search.toLowerCase()) ||
            car.brand.toLowerCase().includes(search.toLowerCase()) ||
            car.fuel.toLowerCase().includes(search.toLowerCase()) ||
            car.transmission.toLowerCase().includes(search.toLowerCase())
        );
    });
    const displayCars = search.trim() === "" ? filteredCars.slice(0, 16) : filteredCars;

    return (
        <div>
            <div className="flex justify-center mt-8 mb-6">
                <input type="text" placeholder="Search Your Dream Car..." value={search} onChange={(e) => setSearch(e.target.value)}
                    className="w-[500px] h-12 border-2 border-orange-500 rounded-full px-5 outline-none shadow-lg" />
            </div>
            
            <div className="grid grid-cols-4 gap-5 px-3 mt-5">

                {displayCars.map((car)=>{

                    return (
                        <div className="w-80 h-85 border border-black text-center border border-black border-2" key={car._id}>

                            <div><img src={car.image} alt={car.name} className="w-full h-44 object-cover border border-black border-1" /></div>

                            <p className="font-bold mt-2">{car.name}</p>

                            <p className="text-gray-600 text-sm px-2">{car.description}</p>

                            <p className="text-orange-600 font-bold mt-2">₹ {car.price}/day</p>

                            <button className="border border-black text-white bg-orange-600 hover:bg-orange-700 rounded-lg p-1 mt-2"><Link to={`/cardetail/${car._id}`}>Buy Now</Link></button>

                        </div>
                    );
                })};
            </div>
        </div>
    )
};
export default Carcard;
