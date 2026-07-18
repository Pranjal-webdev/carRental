import React, { useState } from "react";
import axios from "axios";

const AddCar = () => {

    const [formData, setFormData] = useState({

        name: "",
        brand: "",
        price: "",
        fuel: "",
        seats: "",
        transmission: "",
        image: "",
        rating: "",
        description: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post("/api/cars/add", formData);

            alert("Car Added Successfully");

            setFormData({

                name: "",
                brand: "",
                price: "",
                fuel: "",
                seats: "",
                transmission: "",
                image: "",
                rating: "",
                description: ""

            });

        }

        catch (error) {

            console.log(error);

            alert("Failed to Add Car");

        }

    };

    return (

        <div className="p-8">

            <h1 className="text-4xl font-bold mb-8">Add New Car</h1>

            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-8 grid grid-cols-2 gap-6">

                <input type="text" name="name" placeholder="Car Name" value={formData.name} onChange={handleChange} className="border p-3 rounded-lg" required />

                <input type="text" name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} className="border p-3 rounded-lg" required />

                <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="border p-3 rounded-lg" required />

                <input type="text" name="fuel" placeholder="Fuel Type" value={formData.fuel} onChange={handleChange} className="border p-3 rounded-lg" required />

                <input type="number" name="seats" placeholder="Seats" value={formData.seats} onChange={handleChange} className="border p-3 rounded-lg" required />

                <input type="text" name="transmission" placeholder="Transmission" value={formData.transmission} onChange={handleChange} className="border p-3 rounded-lg" required />

                <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="border p-3 rounded-lg col-span-2" required />

                <input type="number" name="rating" placeholder="Rating" value={formData.rating} onChange={handleChange} className="border p-3 rounded-lg" />

                <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="border p-3 rounded-lg col-span-2 h-36" required />

                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg h-12 col-span-2"> Add Car</button>

            </form>

        </div>

    );

};

export default AddCar;