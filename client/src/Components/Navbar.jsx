import React from "react";
import logo from "../assets/logocar.png";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="bg-green-900 p-2 text-white">
            <div className="flex items-center">
                <img src={logo} alt="logo" className="w-20 h-10 sm:w-32 sm:h-12" />
                <h1 className="font-bold text-xs sm:text-lg items-center">CAR RENTAL HOUSE</h1>
                <ul className="flex items-center gap-8 ml-auto hover:cursor-pointer">
                    <li className="hover:text-yellow-200"><Link to="/home">Home</Link></li>
                    <li className="hover:text-yellow-200"><Link to="/cars">All Cars</Link></li>
                    <li className="hover:text-yellow-200"><Link to="/about">About</Link></li>
                    <li className="hover:text-yellow-200"><Link to="/contact">Contact</Link></li>
                    <li className="hover:text-yellow-200"><Link to="/account">My Account</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;