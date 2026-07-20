import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCar, FaUsers, FaClipboardList, FaRupeeSign } from "react-icons/fa";

const Dashboard = () => {

    const [stats, setStats] = useState({

    totalCars: 0,
    totalUsers: 0,
    totalBookings: 0,
    revenue: 0

});

const [recentBookings, setRecentBookings] = useState([]);

useEffect(() => {

    fetchDashboard();

}, []);

const fetchDashboard = async () => {

    try {

        const res = await axios.get("/api/dashboard/stats");

        setStats({
            totalCars: res.data.totalCars,
            totalUsers: res.data.totalUsers,
            totalBookings: res.data.totalBookings,
            revenue: res.data.revenue
});

setRecentBookings(res.data.recentBookings);

    }

    catch (error) {

        console.log(error);

    }

};

    return (
        <div className="p-8 bg-gray-100 min-h-screen">

            <h1 className="text-4xl font-bold text-green-900"> Welcome Admin </h1>

            <p className="text-gray-600 mt-2"> Manage your complete Car Rental System from here.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

                <div className="bg-white rounded-xl shadow-lg p-6 flex justify-between items-center">

                    <div>

                        <p className="text-gray-500"> Total Cars </p>

                        <h2 className="text-4xl font-bold mt-2"> {stats.totalCars} </h2>

                    </div>

                    <FaCar className="text-5xl text-orange-500" />

                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 flex justify-between items-center">

                    <div>

                        <p className="text-gray-500"> Total Users </p>

                        <h2 className="text-4xl font-bold mt-2"> {stats.totalUsers} </h2>

                    </div>

                    <FaUsers className="text-5xl text-blue-500" />

                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 flex justify-between items-center">

                    <div>

                        <p className="text-gray-500"> Bookings </p>

                        <h2 className="text-4xl font-bold mt-2"> {stats.totalBookings} </h2>

                    </div>

                    <FaClipboardList className="text-5xl text-green-500" />

                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 flex justify-between items-center">

                    <div>

                        <p className="text-gray-500"> Revenue </p>

                        <h2 className="text-4xl font-bold mt-2"> ₹ {stats.revenue} </h2>

                    </div>

                    <FaRupeeSign className="text-5xl text-red-500" />

                </div>

            </div>

            

            <div className="bg-white mt-10 rounded-xl shadow-lg p-6">

                <h2 className="text-2xl font-bold mb-5"> Recent Bookings </h2>

                <table className="w-full">

                    <thead>

                        <tr className="border-b">

                            <th className="text-left p-3">Customer</th>
                            <th className="text-left p-3">Car</th>
                            <th className="text-left p-3">Amount</th>
                            <th className="text-left p-3">Status</th>

                        </tr>

                    </thead>

                    <tbody>
                        {
                            recentBookings.length > 0 ?
                            recentBookings.map((booking) => (
                                <tr key={booking._id} className="border-b">
                                    <td className="p-3">{booking.fullName}</td>
                                    <td className="p-3">
                                        {booking.cars.map((item) => (
                                            <p key={item.carId._id}>
                                                {item.carId.name}
                                            </p>
                                        ))}
                                    </td>
                                    <td className="p-3">₹ {booking.totalPrice}</td>
                                    <td className="p-3">{booking.status}</td>

                                </tr>
                            ))
                            :
                            <tr>
                                <td colSpan="4" className="p-4 text-center">No Booking Yet</td>
                            </tr>

                        }

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default Dashboard;