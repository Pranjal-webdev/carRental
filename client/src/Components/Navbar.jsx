import React from "react";
import logo from "../assets/logocar.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {

    const { cartCount, setCartCount } = useContext(CartContext);


    return (
        <nav className="bg-green-900 p-2 text-white">
            <div className="flex items-center">
                <img src={logo} alt="logo" className="w-20 h-10 sm:w-32 sm:h-12" />
                <h1 className="font-bold text-xs sm:text-lg items-center">CAR RENTAL HOUSE</h1>
                <ul className="flex items-center gap-8 ml-auto hover:cursor-pointer">
                    <li className="hover:text-yellow-200"><Link to="/home">Home</Link></li>
                    <li className="hover:text-yellow-200"><Link to="/cars">All Cars</Link></li>
                    <li className="relative hover:text-yellow-200">

                        <Link to="/cart" className="flex items-center gap-2">

                            <FaShoppingCart className="text-xl" />

                            <span>Cart</span>

                            <span className="absolute -top-2 -right-3 bg-orange-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">

                            {cartCount}

                            </span>

                        </Link>

                    </li>
                    <li className="hover:text-yellow-200"><Link to="/contact">Contact</Link></li>
                    <li className="hover:text-yellow-200"><Link to="/account">My Account</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;