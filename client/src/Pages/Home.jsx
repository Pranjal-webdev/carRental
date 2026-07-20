import React from "react";
import cars from "../assets/bgcar01.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const Home = () => {

    const { cartCount, setCartCount } = useContext(CartContext);

    useEffect(() => {

    const fetchCart = async () => {

        const res = await axios.get("/api/cart");

        const total = res.data.reduce((sum, item) => {

            return sum + item.quantity;

        }, 0);

        setCartCount(total);

    };

    fetchCart();

}, []);

    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-between px-5 md:px-10 py-8 md:py-10 border border-black gap-8">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={cars} alt="luxury car" className="w-[95%] sm:w-[85%] md:w-full h-auto rounded-xl" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl mt-1 md:mt-2 font-bold">DON,T RENT A CAR</h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl mt-2">RENT THE CAR</h1>
                    <button className="text-sm sm:text-base md:text-lg bg-orange-600 text-white mt-5 px-4 sm:px-5 md:px-6 py-2 rounded-lg border-black border-2 hover:bg-orange-700 transition all duration-300"><Link to="/cars">Click To Explore</Link></button>
                </div>
            </div>
            <div className="mb-8 px-5 text-center">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4">Ready for your Premium Experience?</h1>
                <p className="text-sm sm:text-base">Join thounsands of satisfied customers who have experienced our premium flect and exceptional service</p>
                <button className="border-black border-2 mt-4 text-white rounded-2xl px-4 sm:px-5 md:px-6 py-2 text-sm sm:text-base bg-orange-600 hover:bg-orange-700 transition duration-300"><Link to="/cars">Book your Luxury Car</Link></button>
            </div>
        </div>
    )
}
export default Home;