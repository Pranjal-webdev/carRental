import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {

    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        fetchBookings();

    }, []);

    const fetchBookings = async () => {

        try {

            const token = localStorage.getItem("token");

            const res = await axios.get("/api/booking/my-bookings", {

                headers: {

                    Authorization: `Bearer ${token}`

                }

            });

            setBookings(res.data.bookings);

        }

        catch (error) {

            console.log(error);

        }

    };

    const cancelBooking = async (id) => {

        const confirmCancel = window.confirm(
            "Do you want to cancel this booking?"
        );

        if (!confirmCancel) return;

        try {

            const token = localStorage.getItem("token");

            await axios.patch(

                `/api/booking/cancel/${id}`,

                {},

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );

            fetchBookings();

        }
        catch (error) {
            console.log(error);
        }
    };

    return (

        <div className="p-8 bg-zinc-100">

            <h1 className="text-4xl font-bold mb-8 text-center">
                My Bookings
            </h1>

                {
                    bookings.length === 0 ?

                        <div className="min-h-[60vh] flex items-center justify-center">

                            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-10 text-center w-full max-w-md">

                                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                                    No Bookings Yet
                                </h2>

                                <p className="text-gray-500 mb-6">
                                    You haven't booked any car yet.
                                </p>

                                <button
                                    onClick={() => navigate("/home")}
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
                                >
                                    Explore Cars
                                </button>

                            </div>

                        </div>

                        :

                        bookings.map((booking) => (

                            <div
                                key={booking._id}
                                className="bg-white rounded-xl shadow-lg p-6 mb-6"
                            >

                                <div className="mb-4">

                                    {
                                        booking.cars.map((item) => (

                                            <div key={item.carId._id}>

                                                <img
                                                    src={item.carId.image}
                                                    alt={item.carId.name}
                                                    className="w-48 h-32 object-cover rounded-lg mb-3"
                                                />

                                                <h2 className="text-2xl font-bold">
                                                    {item.carId.name}
                                                </h2>

                                            </div>

                                        ))
                                    }

                                </div>

                                <p>
                                    Pickup :
                                    {" "}
                                    {new Date(booking.pickupDate).toLocaleDateString("en-IN")}
                                </p>

                                <p>
                                    Return :
                                    {" "}
                                    {new Date(booking.returnDate).toLocaleDateString("en-IN")}
                                </p>

                                <p>
                                    Payment :
                                    {" "}
                                    {booking.paymentMethod}
                                </p>

                                <p>
                                    Total :
                                    ₹ {booking.totalPrice}
                                </p>

                                <div className="flex items-center gap-4 mt-4">

                                    <span
                                        className={`inline-block mt-4 px-4 py-2 rounded text-white

                                ${booking.status === "Pending"
                                                ? "bg-yellow-500"

                                                : booking.status === "Approved"
                                                    ? "bg-green-600"

                                                    : booking.status === "Rejected"
                                                        ? "bg-red-600"

                                                        : booking.status === "Cancelled"
                                                            ? "bg-gray-600"

                                                            : "bg-blue-600"
                                            }`}
                                    >

                                        {booking.status}

                                    </span>

                                    {
                                        booking.status === "Pending" && (
                                            <button onClick={() => cancelBooking(booking._id)} className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Cancel Booking</button>
                                        )}

                                </div>

                            </div>

                        ))

                }

        </div>

    );

};

export default MyBookings; 