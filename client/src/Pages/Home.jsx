import React from "react";
import cars from "../assets/bgcar01.jpg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="flex items-center justify-between px-10 py-10 border border-black">
                <div className="w-1/2">
                    <img src={cars} alt="luxury car" className="w-full h-auto max-w-[700px]" />
                </div>
                <div className="w-1/2 flex flex-col items-center">
                    <h1 className="text-5xl font-bold">DON,T RENT A CAR</h1>
                    <h1 className="text-4xl mt-2">RENT THE CAR</h1>
                    <button className="text-lg bg-orange-600 text-white mt-6 px-6 py-2 rounded-lg border border-black border-2 hover:bg-orange-700 transition all duration-300"><Link to="/cars">Click To Explore</Link></button>
                </div>
            </div>
            <div className="mb-8 text-center">
                <h1 className="font-bold text-4xl mb-4">Ready for your Premium Experience?</h1>
                <p>Join thounsands of satisfied customers who have experienced our premium flect and exceptional service</p>
                <button className="border border-black border-2 mt-2 text-white rounded-2xl p-1 bg-orange-600 hover:bg-orange-700"><Link to="/cars">Book your Luxury Car</Link></button>
            </div>
        </div>
    )
}
export default Home;