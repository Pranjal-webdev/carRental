import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({

        fullName: "",

        email: "",

        phone: "",

        address: "",

        city: "",

        state: "",

        pincode: "",

        paymentMethod: ""

    });

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

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const placeOrder = async () => {

        if (
            !formData.fullName ||
            !formData.email ||
            !formData.phone ||
            !formData.address ||
            !formData.city ||
            !formData.state ||
            !formData.pincode ||
            !formData.paymentMethod
        ) {

            alert("Please fill all the fields.");
            return;

        }

        try {

            setLoading(true);

            await axios.post("/api/booking", {

                ...formData,

                totalPrice: total.toFixed(0)

            });

            setCart([]);

            setTimeout(() => {

                setLoading(false);

                navigate("/success");

            }, 2500);

        } catch (error) {

            console.log(error);

            setLoading(false);

        }

    };

    const subtotal = cart.reduce((total, item) => {

        return total + (item.carId.price * item.quantity);

    }, 0);

    const delivery = cart.length === 0 ? 0 : 1050;

    const gst = subtotal * 0.18;

    const total = subtotal + delivery + gst;


    if (loading) {

    return (

        <div className="h-screen flex flex-col justify-center items-center bg-gray-100 overflow-hidden">

            <div className="relative w-[500px] h-28 overflow-hidden">

                <div className="absolute animate-car">

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/744/744465.png"
                        alt="car"
                        className="w-28 scale-x-[-1]"
                    />

                </div>

            </div>

            <h2 className="text-3xl font-bold mt-10 text-orange-600">

                Booking Your Dream Ride...

            </h2>

            <p className="text-gray-600 mt-3 text-lg">

                Please wait while we confirm your booking.

            </p>

        </div>

    );

}


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

                        <input type="text" placeholder="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 outline-none focus:border-orange-500" />

                        <input type="email" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 outline-none focus:border-orange-500" />

                        <input type="number" placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 outline-none focus:border-orange-500" />

                        <input type="text" placeholder="City" name="city" value={formData.city} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 outline-none focus:border-orange-500" />

                    </div>

                    <textarea placeholder="Full Address" name="address" value={formData.address} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 w-full mt-5 h-32 outline-none focus:border-orange-500"></textarea>

                    <div className="grid grid-cols-2 gap-5 mt-5">

                        <input type="text" placeholder="State" name="state" value={formData.state} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 outline-none focus:border-orange-500" />

                        <input type="number" placeholder="Pincode" name="pincode" value={formData.pincode} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 outline-none focus:border-orange-500" />

                    </div>

                    <h2 className="text-2xl font-bold mt-8 mb-4">
                        Payment Method
                    </h2>

                    <div className="flex flex-col gap-4">

                        <label className="flex items-center gap-3">

                            <input type="radio" name="paymentMethod" value="Cash On Delivery " onChange={handleChange} />

                            Cash On Delivery

                        </label>

                        <label className="flex items-center gap-3">

                            <input type="radio" name="paymentMethod" value="UPI" onChange={handleChange} />

                            UPI

                        </label>

                        <label className="flex items-center gap-3">

                            <input type="radio" name="payment" name="paymentMethod" value="Credit / Debit Card" onChange={handleChange} />

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

                    <button onClick={placeOrder} className="w-full h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-lg mt-6 font-bold">
                        Place Order
                    </button>

                </div>

            </div>

        </div>

    );

};

export default Checkout;