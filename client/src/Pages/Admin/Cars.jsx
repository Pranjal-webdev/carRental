import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cars = () => {

    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        fetchCars();

    }, []);

    const fetchCars = async () => {

        try {

            const res = await axios.get("/api/cars");

            setCars(res.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    const deleteCar = async (id) => {

        const confirmDelete = window.confirm("Are you sure you want to delete this car?");

        if (!confirmDelete) return;

        try {

            await axios.delete(`/api/cars/${id}`);
            alert("Car Deleted Successfully");
            fetchCars();

        }

        catch (error) {

            Console.log(error);
            alert("Failed to Delete Car");

        }
    };

    return (

        <div className="p-4 md:p-8">

            <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Manage Cars
            </h1>

            <div className="overflow-x-auto rounded-xl shadow">

                <table className="min-w-[1100px] w-full bg-white">

                    <thead className="bg-green-900 text-white text-base">

                        <tr className="border-b text-center text-base md:text-base">

                            <th className="p-3">Image</th>

                            <th>Name</th>

                            <th>Brand</th>

                            <th>Price</th>

                            <th>Fuel</th>

                            <th>Seats</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            cars.map((car) => (

                                <tr key={car._id} className="border-b text-center text-base hover:bg-gray-50">

                                    <td className="p-3">

                                        <img
                                            src={car.image}
                                            alt={car.name}
                                            className="w-24 h-16 object-cover rounded"
                                        />

                                    </td>

                                    <td className="p-3 text-base font-medium">{car.name}</td>

                                    <td className="text-base">{car.brand}</td>

                                    <td className="text-base">₹ {car.price}</td>

                                    <td className="text-base">{car.fuel}</td>

                                    <td className="text-base">{car.seats}</td>


                                    <td className="p-3">

                                        <div className="flex flex-col md:flex-row gap-2 items-center">

                                            <button onClick={() => navigate(`/admin/add-car/${car._id}`)} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm w-16">
                                                Edit
                                            </button>

                                            <button onClick={() => deleteCar(car._id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm w-16">
                                                Delete
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>


            </div>


        </div>

    );

};

export default Cars;