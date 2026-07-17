import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Success = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">

            <div className="bg-white w-[500px] rounded-2xl shadow-xl p-10 text-center">

                <FaCheckCircle className="text-green-500 text-8xl mx-auto" />

                <h1 className="text-4xl font-bold mt-6">
                    Order Placed!
                </h1>

                <p className="text-gray-600 mt-4 text-lg">
                    Your booking has been placed successfully.
                </p>

                <p className="text-gray-500 mt-2">
                    Thank you for choosing our Car Rental Service.
                </p>

                <Link to="/cars">

                    <button className="mt-8 w-full h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-bold">
                        Back To Cars
                    </button>

                </Link>

            </div>

        </div>
    );
};

export default Success;