import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const Carcard = () => {

    const [cars, setCars] = useState([]);
    const navigate = useNavigate();
    const [search,setSearch] = useState("");
    const [searchValue, setSearchValue] = useState("");


    const filteredCars = cars.filter((car) =>
        car.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchValue.toLowerCase()) ||
        car.fuel.toLowerCase().includes(searchValue.toLowerCase()) ||
        car.transmission.toLowerCase().includes(searchValue.toLowerCase())
    );
    const displayCars = searchValue === "" ? cars.slice(0, 16) : filteredCars;


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


    const handleSearch = () => {

    setSearchValue(search.trim());

    const result = cars.filter((car) =>
        car.name.toLowerCase().includes(search.toLowerCase()) ||
        car.brand.toLowerCase().includes(search.toLowerCase()) ||
        car.fuel.toLowerCase().includes(search.toLowerCase()) ||
        car.transmission.toLowerCase().includes(search.toLowerCase())
    );

    if (search.trim() !== "" && result.length === 0) {
        navigate("/no-results");
    }
};

    
    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-center items-center mt-8 mb-8 gap-4 px-4">

                <input type="text" placeholder="Search Your Dream Car..." value={search} onChange={(e) => {

                    setSearch(e.target.value);

                    if (e.target.value === "") {
                        setSearchValue("");
                    }
                }}

                    className="w-full sm:w-[650px] lg:w-[750px] h-11 border-2 border-orange-500 rounded-full px-5 outline-none shadow-lg" />

                <button onClick={handleSearch} className="bg-orange-600 hover:bg-orange-700 text-white w-28 h-11 rounded-full transition duration-300">Search</button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 pb-8 justify-items-center">

                {displayCars.map((car)=>{

                    return (
                        <div className="w-full max-w-[360px] border-black border-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 text-center" key={car._id}>

                            <div><img src={car.image} alt={car.name} className="w-full h-44 object-cover border-black border-1" /></div>

                            <p className="font-bold text-xl">{car.name}</p>

                            <p className="text-gray-600 text-sm mt-2 line-clamp-3 h-12">{car.description}</p>

                            <p className="text-orange-600 font-bold mt-3">₹ {car.price}/day</p>

                            <button className="border border-black text-white bg-orange-600 hover:bg-orange-700 rounded-lg px-5 py-2 mb-2 mt-auto transition duration-300"><Link to={`/cardetail/${car._id}`}>Book Now</Link></button>

                        </div>
                    );
                })};
            </div>
        </div>
    )
};
export default Carcard;
