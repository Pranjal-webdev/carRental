import React, { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {

    const [bookings, setBookings] = useState([]);

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

        <div className="p-8">

            <h1 className="text-4xl font-bold mb-8">
                My Bookings
            </h1>

            {

                bookings.length === 0 ?

                    <h2 className="text-xl">
                        No Bookings Yet
                    </h2>

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