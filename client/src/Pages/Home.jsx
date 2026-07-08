import React from "react";
import logo from "../assets/logocar.png";
import cars from "../assets/bgcar01.jpg";

const Home = () => {
    return (
        <div>
            <div>
                <div className="bg-green-900 p-2 text-white">
                    <div className="flex items-center">
                        <img src={logo} alt="logo" className="w-20 h-10 sm:w-32 sm:h-12" />
                        <h1 className="font-bold text-xs sm:text-lg items-center">CAR RENTAL HOUSE</h1>
                        <ul className="flex items-center gap-8 ml-auto">
                            <li>Home</li>
                            <li>All Cars</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>My Account</li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-between px-10 py-10 border border-black">
                    <div className="w-1/2">
                        <img src={cars} alt="luxury car" className="w-full h-auto max-w-[700px]" />
                    </div>
                    <div className="w-1/2 flex flex-col items-center">
                        <h1 className="text-5xl font-bold">DON,T RENT A CAR</h1>
                        <h1 className="text-4xl mt-2">RENT THE CAR</h1>
                        <button className="text-lg bg-orange-600 text-white mt-6 px-6 py-2 rounded-lg border border-black border-2 hover:bg-orange-700 transition all duration-300">Click To Explore</button>
                    </div>
                </div>
                <div>
                    <div className="mb-8 text-center">
                        <h1 className="font-bold text-4xl mb-4">Ready for your Premium Experience?</h1>
                        <p>Join thounsands of satisfied customers who have experienced our premium flect and exceptional service</p>
                        <button className="border border-black border-2 mt-2 text-white rounded-2xl p-1 bg-orange-600 hover:bg-orange-700">Book your Luxury Car</button>
                    </div>
                    <div className="flex flex-col md:flex-row justify-evenly mt-10">
                        <div className="text-lg w-70 h-30">
                            <img src={logo} alt="logo" className="w-40 h-10" />
                            <h2 className="font-bold  mb-2">CAR RENTAL HOUSE</h2>
                            <p>Premium car rental service with the latest models and exceptional customer service. Drive your dream car today!</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg">Quick Links</h2>
                            <ul className="">
                                <li>Home</li>
                                <li>All Cars</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg">Contact Us</h2>
                            <p>123 Drive Avenue,Auto City,CA 90210</p>
                            <p>+91 8200070001</p>
                            <p>info@carhouseservices.com</p>
                            <h2 className="font-bold text-md mt-4">Business Hours</h2>
                            <p>Monday-Friday 8:00 AM - 8:00 PM</p>
                            <p>Saturday 9:00 AM - 6:00 PM</p>
                            <p>Sunday 10:00 AM - 4:00 PM</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <h2 className="text-lg font-bold">Share your Experience</h2>
                            <textarea type="text" className="border boder-black border-2 p-1" placeholder="write your feedback here..." ></textarea>
                            <button type="submit" className="bg-orange-600 border border-black border-2 mt-2 w-30 h-8 hover:bg-orange-700 text-white rounded-lg">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;