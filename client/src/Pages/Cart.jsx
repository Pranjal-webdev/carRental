import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const [cart, setCart] = useState([]);
    const { setCartCount } = useContext(CartContext);

    useEffect(() => {

        const fetchCart = async () => {

            try {

                const res = await axios.get("/api/cart");

                setCart(res.data);

            } catch (error) {

                console.log(error);

            }

        };

        fetchCart();

    }, []);

    const increaseQuantity = async (carId) => {

    try {

        await axios.patch(`/api/cart/increase/${carId}`);

        const res = await axios.get("/api/cart");

        setCart(res.data);

        const total = res.data.reduce((sum, item) => sum + item.quantity, 0);

        setCartCount(total);

    } catch (error) {

        console.log(error);

    }

};


const decreaseQuantity = async (carId) => {

    try {

        await axios.patch(`/api/cart/decrease/${carId}`);

        const res = await axios.get("/api/cart");

        setCart(res.data);

        const total = res.data.reduce((sum, item) => sum + item.quantity, 0);

        setCartCount(total);

    } catch (error) {

        console.log(error);

    }

};

    const subtotal = cart.reduce((total, item) => {

    return total + (item.carId.price * item.quantity);

}, 0);

    const deliveryText = cart.length === 0 ? "-" : "Location Based";

    const gst = subtotal * 0.18;

    const total = subtotal + gst;

    return (

        <div className="p-4 md:p-10">

            <h1 className="text-4xl font-bold text-center mb-8">
                My Cart
            </h1>

            <div className="flex flex-col lg:flex-row gap-8">

                <div className="w-full lg:w-[70%] border border-gray-300 rounded-xl p-4 md:p-5">

                    {
                        cart.length === 0 ?

                        <div className="flex flex-col items-center justify-center h-80">

                        <h2 className="text-3xl font-bold text-gray-700">Your Cart is Empty</h2>

                        <p className="text-gray-500 mt-3">Looks like you haven't added any cars yet.</p>

                </div>

                    :

                        cart.map((item) => {

                            return (

                                <div key={item._id} className="flex items-center justify-between border-b py-5">

                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">

                                        <img src={item.carId.image} alt={item.carId.name} className="w-36 h-28 sm:w-40 sm:h-28 md:w-40 md:h-28 object-cover rounded-lg" />

                                        <div>

                                            <h2 className="text-xl md:text-2xl ont-bold">{item.carId.name}</h2>

                                            <p className="text-gray-600 mt-2">{item.carId.brand}</p>

                                            <p className="text-orange-600 font-bold mt-2">₹ {item.carId.price}/day</p>

                                        </div>

                                    </div>

                                    <div className="flex justify-center items-center gap-4">

                                        <button className="bg-orange-600 text-white w-10 h-10 rounded-lg hover:bg-orange-700" onClick={() => decreaseQuantity(item.carId._id)}>-</button>

                                        <span className="text-xl font-bold">{item.quantity}</span>

                                        <button className="bg-orange-600 text-white w-10 h-10 rounded-lg hover:bg-orange-700" onClick={() => increaseQuantity(item.carId._id)}>+</button>

                                    </div>

                                </div>

                            );

                        })

                    }

                </div>

                <div className="w-full lg:w-[28%] border border-gray-300 rounded-xl p-5 h-fit">

                    <h2 className="text-2xl font-bold mb-5">
                        Order Summary
                    </h2>

                    <div className="flex justify-between mb-4">

                        <span>Subtotal</span>

                        <span>₹ {subtotal}</span>

                    </div>

                    <div className="flex justify-between mb-4">

                        <span>Delivery</span>

                        <span className="text-green">{deliveryText}</span>

                    </div>

                    <div className="flex justify-between mb-4">

                        <span>GST (18%)</span>

                        <span>₹ {gst.toFixed(0)}</span>

                    </div>

                    <hr className="my-4" />

                    <div className="flex justify-between text-xl font-bold">

                        <span>Total</span>

                        <span>₹ {total.toFixed(0)}</span>

                    </div>

                    
                    <button className="w-full h-12 mt-6 bg-orange-600 hover:bg-orange-700 rounded-lg text-white font-bold">
                        <Link to="/checkout">Proceed To Checkout</Link>
                    </button>


                </div>

            </div>

        </div>

    );

};

export default Cart;