import React from "react";
import logo from "../assets/logocar.png";
import car from "../assets/mobbg.jpg";
import bgcar from "../assets/carbg.jpg";
import { useEffect, useState, useActionState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import api from "../api";

const Registration = () => {

    const navigate = useNavigate();
    const [bgimg, setbgimg] = useState(bgcar);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlesubmit = async (e) => {

    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {

        alert("Passwords do not match");

        return;

    }

    try {

        const res = await api.post("/api/auth/register", {

            firstName: formData.firstName,

            lastName: formData.lastName,

            email: formData.email,

            phone: formData.phone,

            state: formData.state,

            city: formData.city,

            password: formData.password

        });

        alert(res.data.message);

        navigate("/login");

    } catch (error) {

        alert(error.response?.data?.message || "Registration Failed");

    }

};

    useEffect(() => {
        const changebackground = () => {
            if (window.innerWidth < 640) {
                setbgimg(car);
            }
            else {
                setbgimg(bgcar)
            }
        };

        changebackground();

        window.addEventListener("resize", changebackground);

        return () => window.removeEventListener("resize", changebackground);
    }, []);

    return (
        <div className="min-h-scren bg-contain bg-center bg-no-repeat bg-black pb-17" style={{ backgroundImage: `url(${bgimg})` }}>
            <div className="flex items-center gap-3 bg-green-950 text-white p-1 sm:p-2">
                <img src={logo} alt="logo" className="w-20 h-10 sm:w-32 sm:h-12" />
                <h1 className="font-bold text-xs sm:text-lg">CAR RENTAL HOUSE</h1>
            </div>
            <div className="max-w-2xl mx-4 sm:mx-8 md:mx-auto mt-4 sm:mt-20 border p-6 sm:pb-10 sm:mb-10 rounded-lg bg-white/18 text-white">
                <h1 className="text-lg sm:text-2xl lg:text-4xl font-bold ml-[80px] sm:ml-[150px] mb-[30px] pt-1">Registration Form</h1><br />
                <div className="sm:ml-20">
                    <form onSubmit={handlesubmit}>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                            <label htmlFor="name" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">Name : </label>
                            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full sm:w-72 border border-gray-400 rounded-sm pl-2" placeholder="Enter your name" required />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                            <label htmlFor="lastname" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">Last Name : </label>
                            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full sm:w-72 border border-gray-400 rounded-sm pl-2" placeholder="Enter your last name" required />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                            <label htmlFor="email" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">Email : </label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full sm:w-72 border border-gray-400 rounded-sm pl-2" placeholder="Enter your email" required />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                            <label htmlFor="phone" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">Phone no : </label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full sm:w-72 border border-gray-400 rounded-sm pl-2" placeholder="Enter your phone no." maxLength={10} pattern="[6-9][0-9]{9}" required />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                            <label htmlFor="state" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">State : </label>
                            <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} className="w-full sm:w-72 border border-gray-400 rounded-sm pl-2" placeholder="Enter your state" required />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                            <label htmlFor="city" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">City : </label>
                            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="w-full sm:w-72 border border-gray-400 rounded-sm pl-2" placeholder="Enter your city" required />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                            <label htmlFor="password" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">Password :</label>
                            <div className="relative w-full sm:w-72">
                                <input type={showPassword ? "text" : "password"} id="password" name="password" value={formData.password} onChange={handleChange}
                                    className="w-full border border-gray-400 rounded-sm pl-2 pr-10 h-9" placeholder="Enter your password" required />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                            <label htmlFor="confirmPassword" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">Confirm Password :</label>
                            <div className="relative w-full sm:w-72">
                                <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}
                                    className="w-full border border-gray-400 rounded-sm pl-2 pr-10 h-9" placeholder="Confirm your password" required/>
                                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <button type="submit" className="w-80 h-12 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition duration-300">Create Account</button>
                            <p className="mt-5 text-gray-600">Already have an account?
                                <Link to="/login" className="text-orange-600 font-semibold ml-2 hover:underline">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}
export default Registration;