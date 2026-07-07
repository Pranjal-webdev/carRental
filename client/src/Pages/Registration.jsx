import React from "react";
import logo from "../assets/logocar.png";
import bgcar from "../assets/carbg.jpg";

const Registration = () => {
    return (
        <div className="min-h-scren bg-contain bg-center bg-no-repeat bg-black pb-30" style={{backgroundImage:`url(${bgcar})`}}>
            <div className="flex items-center gap-3 bg-green-950 text-white p-1 sm:p-2">
                <img src={logo} alt="logo" className="w-20 h-10 sm:w-32 sm:h-12"/>
                <h1 className="font-bold text-xs sm:text-lg">CAR RENTAL HOUSE</h1>
            </div>
            <div className="max-w-2xl mx-auto mt-2 border p-6 rounded-lg mt-[70px] sm:mt-[100px] text-white bg-white/10">
                <h1 className="text-lg sm:text-2xl lg:text-4xl font-bold ml-[80px] sm:ml-[150px] mb-[30px] pt-1">Registration Form</h1><br />
                <div className="sm:ml-20">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                        <label htmlFor="name" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">Name : </label>
                        <input type="text" id="name" className="w-full sm:w-72 border border-gray-400 rounded-sm pl-2" placeholder="Enter your name" required />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                        <label htmlFor="lastname"className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">Last Name : </label> 
                        <input type="text" id="lastname" className="w-full sm:w-72 border border-gray-400 rounded-sm pl-2" placeholder="Enter your last name" required />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                        <label htmlFor="email" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">Email : </label>
                        <input type="email" id="email" className="w-full sm:w-72 border border-gray-400 rounded-sm pl-2" placeholder="Enter your email" required />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                        <label htmlFor="phone" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">Phone no : </label>
                        <input type="tel" id="phone" className="w-full sm:w-72 border border-gray-400 rounded-sm pl-2" placeholder="Enter your phone no." maxLength={10} pattern="[0-9]{10} required" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                        <label htmlFor="country" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">Country : </label>
                        <input type="text" id="country" className="w-full sm:w-72 border border-gray-400 rounded-sm pl-2" placeholder="Enter your country" required />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                        <label htmlFor="state" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">State : </label>
                        <input type="text" id="state" className="w-full sm:w-72 border border-gray-400 rounded-sm pl-2" placeholder="Enter your state" required />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                        <label htmlFor="city" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">City : </label>
                        <input type="text" id ="city" className="w-full sm:w-72 border border-gray-400 rounded-sm pl-2" placeholder="Enter your city" required />
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <button type="submit" className="bg-orange-600 text-white w-24 sm:w-32 lg:w-40 mb-2 rounded-sm border border-white-2 font-semibold hover:bg-orange-700 transition all duration-300">Register</button>
                </div>
            </div>
        </div>
    )
}
export default Registration;