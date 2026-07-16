import React, { useEffect, useState } from "react";
import axios from "axios";

const Checkout = () => {

    const [cart, setCart] = useState([]);

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

    const subtotal = cart.reduce((total, item) => {

        return total + (item.carId.price * item.quantity);

    }, 0);

    const delivery = cart.length === 0 ? 0 : 1050;

    const gst = subtotal * 0.18;

    const total = subtotal + delivery + gst;

    return (

        <div className="p-8">

            <h1 className="text-4xl font-bold text-center mb-8">
                Checkout
            </h1>

            <div className="flex justify-between gap-8">

                <div className="w-[65%] border border-gray-300 rounded-xl p-6">

                    <h2 className="text-2xl font-bold mb-5">
                        Customer Information
                    </h2>

                    <div className="grid grid-cols-2 gap-5">

                        <input type="text" placeholder="Full Name" className="border border-gray-300 rounded-lg p-3 outline-none focus:border-orange-500" />

                        <input type="email" placeholder="Email Address" className="border border-gray-300 rounded-lg p-3 outline-none focus:border-orange-500" />

                        <input type="number" placeholder="Phone Number" className="border border-gray-300 rounded-lg p-3 outline-none focus:border-orange-500" />

                        <input type="text" placeholder="City" className="border border-gray-300 rounded-lg p-3 outline-none focus:border-orange-500" />

                    </div>

                    <textarea placeholder="Full Address" className="border border-gray-300 rounded-lg p-3 w-full mt-5 h-32 outline-none focus:border-orange-500"></textarea>

                    <div className="grid grid-cols-2 gap-5 mt-5">

                        <input type="text" placeholder="State" className="border border-gray-300 rounded-lg p-3 outline-none focus:border-orange-500" />

                        <input type="number" placeholder="Pincode" className="border border-gray-300 rounded-lg p-3 outline-none focus:border-orange-500" />

                    </div>

                    <h2 className="text-2xl font-bold mt-8 mb-4">
                        Payment Method
                    </h2>

                    <div className="flex flex-col gap-4">

                        <label className="flex items-center gap-3">

                            <input type="radio" name="payment" />

                            Cash On Delivery

                        </label>

                        <label className="flex items-center gap-3">

                            <input type="radio" name="payment" />

                            UPI

                        </label>

                        <label className="flex items-center gap-3">

                            <input type="radio" name="payment" />

                            Credit / Debit Card

                        </label>

                    </div>

                </div>

                <div className="w-[30%] border border-gray-300 rounded-xl p-6 h-fit">

                    <h2 className="text-2xl font-bold mb-5">
                        Order Summary
                    </h2>

                    {

                        cart.map((item) => {

                            return (

                                <div key={item._id} className="flex justify-between mb-3">

                                    <span>

                                        {item.carId.name} × {item.quantity}

                                    </span>

                                    <span>

                                        ₹ {item.carId.price * item.quantity}

                                    </span>

                                </div>

                            )

                        })

                    }

                    <hr className="my-4" />

                    <div className="flex justify-between mb-3">

                        <span>Subtotal</span>

                        <span>₹ {subtotal}</span>

                    </div>

                    <div className="flex justify-between mb-3">

                        <span>Delivery</span>

                        <span>₹ {delivery}</span>

                    </div>

                    <div className="flex justify-between mb-3">

                        <span>GST (18%)</span>

                        <span>₹ {gst.toFixed(0)}</span>

                    </div>

                    <hr className="my-4" />

                    <div className="flex justify-between text-xl font-bold">

                        <span>Total</span>

                        <span>₹ {total.toFixed(0)}</span>

                    </div>

                    <button className="w-full h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-lg mt-6 font-bold">

                        Place Order

                    </button>

                </div>

            </div>

        </div>

    );

};

export default Checkout;