import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaTachometerAlt,FaCar,FaPlusCircle,FaClipboardList,FaUsers,FaSignOutAlt } from "react-icons/fa";

const AdminSidebar = () => {

    const navigate = useNavigate();
    const logout = () => {

        localStorage.clear();

        navigate("/login");

    };

    return (

        <div className="w-64 bg-green-950 text-white min-h-screen p-5">
            
            <h1 className="text-3xl font-bold mb-10 text-center">Admin Panel</h1>

            <div className="flex flex-col gap-4">

                <NavLink
                    to="/admin"
                    className="flex items-center gap-3 p-3 rounded hover:bg-orange-600"
                >
                    <FaTachometerAlt />
                    Dashboard
                </NavLink>

                <NavLink
                    to="/admin/cars"
                    className="flex items-center gap-3 p-3 rounded hover:bg-orange-600"
                >
                    <FaCar />
                    Cars
                </NavLink>

                <NavLink
                    to="/admin/add-car"
                    className="flex items-center gap-3 p-3 rounded hover:bg-orange-600"
                >
                    <FaPlusCircle />
                    Add Car
                </NavLink>

                <NavLink
                    to="/admin/booking"
                    className="flex items-center gap-3 p-3 rounded hover:bg-orange-600"
                >
                    <FaClipboardList />
                    Bookings
                </NavLink>

                <NavLink
                    to="/admin/users"
                    className="flex items-center gap-3 p-3 rounded hover:bg-orange-600"
                >
                    <FaUsers />
                    Users
                </NavLink>
                
                <button
                    onClick={logout}
                    className="flex items-center gap-3 p-3 rounded bg-red-600 hover:bg-red-700 mt-10"
                >
                    <FaSignOutAlt />
                    Logout
                </button>

            </div>

        </div>

    );

};

export default AdminSidebar;