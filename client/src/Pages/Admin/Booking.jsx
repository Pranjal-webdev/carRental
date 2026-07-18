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

            setBookings(res.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="p-8">

            <h1 className="text-4xl font-bold mb-8"> All Bookings </h1>

            <table className="w-full bg-white rounded-xl shadow-lg">

                <thead className="bg-green-900 text-white">

                    <tr>

                        <th className="p-4">Customer</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Payment</th>
                        <th>Total</th>

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

    );

};

export default Booking;