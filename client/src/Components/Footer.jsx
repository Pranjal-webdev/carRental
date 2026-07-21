import React from "react";
import logo from "../assets/logocar.png";
import { MdEmail } from "react-icons/md";
import { FaDotCircle, FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Footer = () => {

    const [message, setMessage] = useState("");


    const submitFeedback = async () => {

    if (message.trim() === "") {
        alert("Please write your feedback");
        return;
    }

    try {

        await axios.post("/api/feedback", {
            message
        });

        setMessage("");

        alert("Feedback Submitted Successfully");

    } catch (error) {

        console.log(error);

    }

};

    return (

        <footer className="bg-gray-300 px-6 py-8">

            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">

                <div className="w-full md:w-[24%] flex flex-col items-center md:items-start text-center md:text-left">
                    <img src={logo} alt="logo" className="w-40 mb-2" />
                    <h2 className="font-bold  mb-2">CAR RENTAL HOUSE</h2>
                    <p className="max-w-[240px] leading-7 text-gray-700 text-center md:text-left">Premium car rental service with the latest models and exceptional customer service. Drive your dream car today!</p>
                </div>
                <div className="w-full md:w-[18%] flex flex-col items-center md:items-start">
                    <h2 className="font-bold text-lg">Quick Links</h2>
                    <ul className="mt-3 space-y-2 hover:cursor-pointer">
                        <div className="flex items-center gap-2 mb-2">
                            <FaDotCircle className="mt-1" />
                            <li className="hover:text-yellow-600"><Link to="/home">Home</Link></li>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <FaDotCircle className="mt-1" />
                            <li className="hover:text-yellow-600"><Link to="/cars">All Cars</Link></li>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <FaDotCircle className="mt-1" />
                            <li className="hover:text-yellow-600"><Link to="/about">About</Link></li>
                        </div>
                    </ul>
                </div>

                <div className="w-full md:w-[30%] flex flex-col text-center md:items-start text-center md:text-left">

                    <h2 className="font-bold text-lg mb-3">Contact Us</h2>
                    <div className="flex justify-center md:justify-start items-center gap-2 mb-2">
                        <FaLocationPin />
                        <span>123 Drive Avenue,Auto City,CA 902</span>
                    </div>
                    <div className="flex justify-center md:justify-start items-center gap-2 mb-2">
                        <FaPhoneAlt />
                        <span>+91 8200070001</span>
                    </div>
                    <div className="flex justify-center md:justify-start items-center gap-2 mb-2">
                        <MdEmail />
                        <span>info@carhouseservices.com</span>
                    </div>
                    <div className="mt-4 flex flex-col items-center md:items-start">
                        <div className="flex justify-center md:justify-start gap-2 mb-2">
                            <FaClock />
                            <h2 className="font-bold text-md">Business Hours</h2>
                        </div>
                        <p className="text-center md:text-left">Monday-Friday 8:00 AM - 8:00 PM</p>
                        <p className="text-center md:text-left">Saturday 9:00 AM - 6:00 PM</p>
                        <p className="text-center md:text-left">Sunday 10:00 AM - 4:00 PM</p>
                    </div>
                </div>
                <div className="w-full md:w-[24%] flex flex-col items-center">
                    <h2 className="text-lg font-bold">Share your Experience</h2>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="boder-black border-2 p-3 w-full max-w-[260px] h-28 resize-none rounded-lg" placeholder="write your feedback here..." ></textarea>
                    <button onClick={submitFeedback} className="bg-orange-600 border-black border-2 mt-4 px-6 py-2 hover:bg-orange-700 rounded-lg text-white">Submit</button>
                </div>
            </div>

            <hr className="my-6 border-gray-500" />

            <p className="text-center text-sm text-gray-700">
                 © 2026 Car Rental House. All Rights Reserved.
            </p>

        </footer>

    )
}
export default Footer;