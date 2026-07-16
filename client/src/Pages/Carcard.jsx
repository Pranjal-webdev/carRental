import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const Carcard = () => {

    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("search") || "");
    const searchValue = searchParams.get("search") || "";

    const filteredCars = cars.filter((car) =>
        car.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchValue.toLowerCase()) ||
        car.fuel.toLowerCase().includes(searchValue.toLowerCase()) ||
        car.transmission.toLowerCase().includes(searchValue.toLowerCase())
    );
    const displayCars = search.trim() === "" ? filteredCars.slice(0, 16) : filteredCars;

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
        <div>
            <div className="flex justify-center mt-8 mb-6">
                <input type="text" placeholder="Search Your Dream Car..." value={search} onChange={(e) => setSearch(e.target.value)}
                    className="w-[500px] h-10 border-2 border-orange-500 rounded-full px-5 outline-none shadow-lg" />
                <button onClick={() => navigate(`/cars?search=${search}`)} className="bg-orange-600 text-white w-20 h-10 py-2 px-2 rounded-xl ml-5">Search</button>
            </div>
            
            <div className="grid grid-cols-4 gap-5 px-3 mt-5">

                {displayCars.map((car)=>{

                    return (
                        <div className="w-80 h-85 border border-black text-center border border-black border-2" key={car._id}>

                            <div><img src={car.image} alt={car.name} className="w-full h-44 object-cover border border-black border-1" /></div>

                            <p className="font-bold mt-2">{car.name}</p>

                            <p className="text-gray-600 text-sm px-2">{car.description}</p>

                            <p className="text-orange-600 font-bold mt-2">₹ {car.price}/day</p>

                            <button className="border border-black text-white bg-orange-600 hover:bg-orange-700 rounded-lg p-1 mt-2"><Link to={`/cardetail/${car._id}`}>Book Now</Link></button>

                        </div>
                    );
                })};
            </div>
        </div>
    )
};
export default Carcard;
