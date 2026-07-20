import React from "react";
import logo from "../assets/logocar.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useState } from "react";

const Navbar = () => {

    const { cartCount, setCartCount } = useContext(CartContext);
    const [open, setOpen] = useState(false);


    return (
        <nav className="bg-green-900 px-4 py-3 text-white">

            <div className="w-full flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <img src={logo} alt="logo" className="w-20 h-10 sm:w-28 md:w-32" />
                    <h1 className="font-bold text-sm sm:text-lg whitespace-nowrap">CAR RENTAL HOUSE</h1>
                </div>

                <ul className="hidden md:flex items-center gap-8 ml-auto hover:cursor-pointer">
                    <li className="hover:text-yellow-200"><Link to="/home">Home</Link></li>
                    <li className="hover:text-yellow-200"><Link to="/cars">All Cars</Link></li>
                    <li className="relative hover:text-yellow-200">

                        <Link to="/cart" className="flex items-center gap-2">

                            <FaShoppingCart className="text-xl" />

                            <span>Cart</span>

                            <span className="absolute -top-3 -right-3 bg-orange-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">

                                {cartCount}

                            </span>

                        </Link>

                    </li>
                    <li className="hover:text-yellow-200"><Link to="/my-bookings">My Bookings</Link></li>
                </ul>

                <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>☰</button>

            </div>

            {
                open && (
                    <ul className="md:hidden flex flex-col text-center gap-4 mt-4 pb-4 rounded-lg">
                        <li className="hover:text-yellow-200"><Link to="/home" onClick={() => setOpen(false)}>Home</Link></li>
                        <li className="hover:text-yellow-200"><Link to="/cars" onClick={() => setOpen(false)}>All Cars</Link></li>
                        <li className="flex justify-center items-center gap-2 hover:text-yellow-200"><Link to="/cart" onClick={() => setOpen(false)}><FaShoppingCart />Cart ({cartCount})</Link></li>
                        <li className="hover:text-yellow-200"><Link to="/my-Bookings" onClick={() => setOpen(false)}>My Bookings</Link></li>
                    </ul>
                )
            }

        </nav >
    )
}
export default Navbar;