import React, { useEffect, useState } from "react";
import axios from "axios";

const Booking = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {

        fetchBookings();

    }, []);

    const fetchBookings = async () => {

        try {

            const res = await axios.get("/api/booking");

            console.log(res.data.bookings);

            setBookings(res.data.bookings);

        }

        catch (error) {

            console.log(error);

        }

    };

    const updateStatus = async (id, status) => {

        console.log("Button Clicked:", id, status);

        try {
            await axios.patch(`/api/booking/${id}`, {
                status
            });

            fetchBookings();
        }

        catch (error) {
            console.log(error.response?.data);
            console.log(error);
        }
    };

    const deleteBooking = async (id) => {

        const confirmDelete = window.confirm("Are you sure you want to delete this booking?");

        if (!confirmDelete) return;

        try {

            await axios.delete(`/api/booking/${id}`);
            fetchBookings();
        }

        catch (error) {

            console.log(error);

        }
    };

    return (

        <div className="p-8">

            <h1 className="text-4xl font-bold mb-8"> All Bookings </h1>

            <div className="overflow-x-auto rounded-xl shadow-lg">

                <table className="min-w-[1400px] bg-white">

                <thead className="bg-green-900 text-white">

                    <tr>

                        <th className="p-4">Customer</th>
                        <th>Car</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Payment</th>
                        <th>Total</th>
                        <th>Pickup</th>
                        <th>Return</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        bookings.length > 0 ?

                            bookings.map((booking) => (

                                <tr
                                    key={booking._id}
                                    className="text-center border-b"
                                >

                                    <td className="p-4">

                                        {booking.fullName}

                                    </td>

                                    <td className="p-3 min-w-[140px]">
                                        {booking.cars.map((item) => (
                                            <p key={item.carId._id}>
                                                {item.carId.name} × {item.quantity}
                                            </p>
                                        ))}
                                    </td>

                                    <td>

                                        {booking.email}

                                    </td>

                                    <td>

                                        {booking.phone}

                                    </td>

                                    <td>

                                        {booking.city}

                                    </td>

                                    <td>

                                        {booking.paymentMethod}

                                    </td>

                                    <td>

                                        ₹ {booking.totalPrice}

                                    </td>

                                    <td>

                                        {new Date(booking.pickupDate).toLocaleDateString("en-IN")}

                                    </td>

                                    <td>

                                        {new Date(booking.returnDate).toLocaleDateString("en-IN")}

                                    </td>

                                    <td>

                                        <span
                                            className={`px-3 py-1 rounded-full text-white text-sm

                                                ${booking.status === "Pending"
                                                    ? "bg-yellow-500"

                                                    : booking.status === "Approved"
                                                        ? "bg-green-600"

                                                        : booking.status === "Rejected"
                                                            ? "bg-red-600"

                                                            : "bg-blue-600"
                                                }`}
                                        >

                                            {booking.status}

                                        </span>

                                    </td>

                                    <td className="p-3 min-w-[220px]">

                                        <div className="grid grid-cols-2 gap-2">

                                            <button onClick={() => updateStatus(booking._id, "Approved")} className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded">
                                                Approve
                                            </button>
                                            <button onClick={() => updateStatus(booking._id, "Rejected")} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
                                                Reject
                                            </button>
                                            <button onClick={() => updateStatus(booking._id, "Completed")} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">
                                                Complete
                                            </button>
                                            <button onClick={() => deleteBooking(booking._id)} className="bg-gray-800 hover:bg-black text-white px-3 py-1 rounded">
                                                Delete
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                            :

                            <tr>

                                <td colSpan="6" className="text-center p-8"> No Bookings Found </td>

                            </tr>

                    }

                </tbody>

            </table>

            </div> 

        </div>

    );

};

export default Booking;