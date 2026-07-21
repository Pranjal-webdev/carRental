import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

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
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{

        if (id){
            fetchCar();
        }
    },[id]);

    const fetchCar = async () => {

        try{
            const res = await axios.get(`/api/cars/${id}`);
            setFormData(res.data);
        }

        catch (error){
            console.log(error);
        }
    };


    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (id) {
                   
                await axios.put(`/api/cars/${id}`, formData);

                alert("Car Updated Successfully");

            }

            else {

                await axios.post("/api/cars/add", formData);

                alert("Car Added Successfully");
            }

            navigate("/admin/cars");
        }

        catch (error){

            console.log(error);

            alert (id? "failed to update car":"failed to add car")
        }
    };    


    return (

        <div className="p-4 md:p-8">

            <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">{id ? "Edit Car" : "Add New Car"}</h1>

            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

                <input type="text" name="name" placeholder="Car Name" value={formData.name} onChange={handleChange} className="border p-3 rounded-lg" required />

                <input type="text" name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} className="border p-3 rounded-lg" required />

                <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="border p-3 rounded-lg" required />

                <input type="text" name="fuel" placeholder="Fuel Type" value={formData.fuel} onChange={handleChange} className="border p-3 rounded-lg" required />

                <input type="number" name="seats" placeholder="Seats" value={formData.seats} onChange={handleChange} className="border p-3 rounded-lg" required />

                <input type="text" name="transmission" placeholder="Transmission" value={formData.transmission} onChange={handleChange} className="border p-3 rounded-lg" required />

                <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="border p-3 rounded-lg md:col-span-2" required />

                <input type="number" name="rating" placeholder="Rating" value={formData.rating} onChange={handleChange} className="border p-3 rounded-lg" />

                <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="border p-3 rounded-lg md:col-span-2 h-36 resize-none" required />

                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg h-12 md:col-span-2 w-full">{id ? "Update Car" : "Add Car"}</button>

            </form>

        </div>

    );

};

export default AddCar;