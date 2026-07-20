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

    const deleteCar = async (id)=>{

        const confirmDelete = window.confirm("Are you sure you want to delete this car?");

        if (!confirmDelete) return;

        try{

            await axios.delete(`/api/cars/${id}`);
            alert("Car Deleted Successfully");
            fetchCars();

        }

        catch (error){

            Console.log(error);
            alert("Failed to Delete Car");

        }
    };

    return (

        <div className="p-8">

            <h1 className="text-4xl font-bold mb-8">
                Manage Cars
            </h1>

            <table className="w-full bg-white rounded-xl shadow">

                <thead className="bg-green-900 text-white">

                    <tr>

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

                            <tr key={car._id} className="border-b text-center">

                                <td className="p-3">

                                    <img
                                        src={car.image}
                                        alt={car.name}
                                        className="w-24 h-16 object-cover rounded"
                                    />

                                </td>

                                <td>{car.name}</td>

                                <td>{car.brand}</td>

                                <td>₹ {car.price}</td>

                                <td>{car.fuel}</td>

                                <td>{car.seats}</td>


                                <td>

                                    <button onClick={() => navigate(`/admin/add-car/${car._id}`)} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                                        Edit
                                    </button>

                                    <button onClick={() => deleteCar(car._id)} className="bg-red-600 text-white px-3 py-1 rounded">
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default Cars;