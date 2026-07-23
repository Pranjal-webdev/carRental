import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaTachometerAlt,FaCar,FaPlusCircle,FaClipboardList,FaUsers,FaSignOutAlt } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const AdminSidebar = () => {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const logout = () => {

        setLoading(true);

        setTimeout(() => {

            localStorage.clear();

            navigate("/login");
        },2000);

    };

    return (
        <>

            {/* Mobile Hamburger */}
            <button
                onClick={() => setOpen(true)}
                className="md:hidden fixed top-4 left-4 z-50 bg-green-950 text-white p-3 rounded-lg shadow-lg"
            >
                <FaBars />
            </button>

            {/* Sidebar */}
            <div
                className={`fixed md:static top-0 left-0 h-full md:h-auto w-60 bg-green-950 text-white p-5 z-50 transform transition-transform duration-300
                ${open ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0 md:flex-shrink-0`}
            >

                {/* Header */}
                <div className="flex justify-between items-center mb-10">

                    <h1 className="text-2xl font-bold">
                        Admin Panel
                    </h1>

                    <button
                        onClick={() => setOpen(false)}
                        className="md:hidden text-2xl"
                    >
                        <FaTimes />
                    </button>

                </div>
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

                <NavLink
                    to="/admin/feedback"
                    className="flex items-center gap-3 p-3 rounded hover:bg-orange-600"
                >
                    <MdFeedback />
                    Feedbacks
                </NavLink>
                
                <button onClick={logout} disabled={loading}
                    className="flex items-center gap-3 p-3 rounded bg-red-600 hover:bg-red-700 mt-10"
                >
                    <FaSignOutAlt />
                    {loading ? (
                        <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                        <span>Logging Out...</span>
                        </div>
                    ) : (
                        "Logout"
                    )}
                </button>

            </div>

            </div>

            {/* Background Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={() => setOpen(false)}
                ></div>
            )}

        </>

    );

};

export default AdminSidebar;