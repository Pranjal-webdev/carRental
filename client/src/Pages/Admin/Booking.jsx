import React, { useEffect, useState } from "react";
import api from "../../api";

const Booking = () => {

    const [bookings, setBookings] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(null);

    useEffect(() => {

        fetchBookings();

    }, []);

    const fetchBookings = async () => {

        try {

            const res = await api.get("/api/booking");

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
            await api.patch(`/api/booking/${id}`, {
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

            await api.delete(`/api/booking/${id}`);
            fetchBookings();
        }

        catch (error) {

            console.log(error);

        }
    };

    return (

        <div className="p-8">

            <h1 className="text-4xl font-bold mb-8"> All Bookings </h1>

            <div className="overflow-x-scroll rounded-xl shadow-lg">

                <table className="min-w-[1100px] md:min-w-[1400px] bg-white">

                    <thead className="bg-green-900 text-white">

                        <tr>

                            <th className="px-2 py-2 md:px-4 md:py-4 text-[11px] md:text-base whitespace-nowrap">Customer</th>
                            <th className="px-2 py-2 md:px-4 md:py-4 text-[11px] md:text-base whitespace-nowrap">Car</th>
                            <th className="px-2 py-2 md:px-4 md:py-4 text-[11px] md:text-base whitespace-nowrap">Total</th>
                            <th className="px-2 py-2 md:px-4 md:py-4 text-[11px] md:text-base whitespace-nowrap">Pickup</th>
                            <th className="px-2 py-2 md:px-4 md:py-4 text-[11px] md:text-base whitespace-nowrap">Return</th>
                            <th className="px-2 py-2 md:px-4 md:py-4 text-[11px] md:text-base whitespace-nowrap">Pickup Location</th>
                            <th className="px-2 py-2 md:px-4 md:py-4 text-[11px] md:text-base whitespace-nowrap">Status</th>
                            <th className="px-2 py-2 md:px-4 md:py-4 text-[11px] md:text-base whitespace-nowrap">Action</th>

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

                                        <td className="px-2 py-2 md:px-4 md:py-4 text-[11px] md:text-base whitespace-nowrap">

                                            {booking.fullName}

                                        </td>

                                        <td className="px-2 py-2 md:px-3 md:py-3 min-w-[120px] text-[11px] md:text-base whitespace-nowrap">
                                            {booking.cars.map((item) => (
                                                <p key={item.carId._id}>
                                                    {item.carId.name} × {item.quantity}
                                                </p>
                                            ))}
                                        </td>

                                        <td className="px-2 py-2 text-[11px] md:text-base whitespace-nowrap">

                                            ₹ {booking.totalPrice}

                                        </td>

                                        <td className="px-2 py-2 text-[11px] md:text-base whitespace-nowrap">

                                            {new Date(booking.pickupDate).toLocaleDateString("en-IN")}

                                        </td>

                                        <td className="px-2 py-2 text-[11px] md:text-base whitespace-nowrap">

                                            {new Date(booking.returnDate).toLocaleDateString("en-IN")}

                                        </td>

                                        <td className="px-2 py-2 text-[11px] md:text-base whitespace-nowrap">

                                            {booking.pickupLocation}

                                        </td>

                                        <td>

                                            <span
                                                className={`px-2 py-1 md:px-3 rounded-full text-white text-[10px] md:text-sm
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

                                        <td className="px-2 py-2 md:p-3 min-w-[180px]">

                                            <div className="grid grid-cols-2 gap-2">

                                                <button onClick={() => updateStatus(booking._id, "Approved")} className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 md:px-3 text-[10px] md:text-sm rounded">
                                                    Approve
                                                </button>
                                                <button onClick={() => updateStatus(booking._id, "Rejected")} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 px-2 py-1 md:px-3 text-[10px] md:text-sm rounded">
                                                    Reject
                                                </button>
                                                <button onClick={() => updateStatus(booking._id, "Completed")} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 md:px-3 text-[10px] md:text-sm rounded">
                                                    Complete
                                                </button>
                                                <button onClick={() => setSelectedBooking(booking)} className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 md:px-3 text-[10px] md:text-sm rounded">
                                                    View
                                                </button>
                                                <button onClick={() => deleteBooking(booking._id)} className="bg-gray-800 hover:bg-black text-white px-3 py-1 md:px-3 text-[10px] md:text-sm rounded col-span-2">
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

            {
                selectedBooking && (

                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

                        <div className="bg-white w-[95%] md:w-[500px] rounded-xl p-6 shadow-xl">

                            <h2 className="text-2xl font-bold mb-5 text-center">
                                Booking Details
                            </h2>

                            <div className="space-y-2 text-gray-700">

                                <p><b>Name :</b> {selectedBooking.fullName}</p>

                                <p><b>Email :</b> {selectedBooking.email}</p>

                                <p><b>Phone :</b> {selectedBooking.phone}</p>

                                <p><b>Address :</b> {selectedBooking.address}</p>

                                <p><b>City :</b> {selectedBooking.city}</p>

                                <p><b>State :</b> {selectedBooking.state}</p>

                                <p><b>Pincode :</b> {selectedBooking.pincode}</p>

                                <p><b>Pickup Location :</b> {selectedBooking.pickupLocation}</p>

                                <p><b>Payment :</b> {selectedBooking.paymentMethod}</p>

                                <hr className="my-3" />

                                <h3 className="font-bold">
                                    Cars
                                </h3>

                                {
                                    selectedBooking.cars.map((item) => (

                                        <p key={item.carId._id}>
                                            {item.carId.name} × {item.quantity}
                                        </p>

                                    ))
                                }

                                <hr className="my-3" />

                                <p className="font-bold text-lg">
                                    Total : ₹ {selectedBooking.totalPrice}
                                </p>

                            </div>

                            <button
                                onClick={() => setSelectedBooking(null)}
                                className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg"
                            >
                                Close
                            </button>

                        </div>

                    </div>

                )
            }

        </div>


    );

};

export default Booking;