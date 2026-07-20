import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/logocar.png";
import bgcar from "../assets/carbg.jpg";
import mobbg from "../assets/mobbg.jpg";

const Login = () => {

    const navigate = useNavigate();
    const [bgimg, setBgimg] = useState(window.innerWidth < 640 ? mobbg : bgcar);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({

        email: "",

        password: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    React.useEffect(() => {

        const changeBackground = () => {

            if (window.innerWidth < 640) {

                setBgimg(mobbg);

            }

            else {

                setBgimg(bgcar);

            }

        };

        window.addEventListener("resize", changeBackground);

        return () => window.removeEventListener("resize", changeBackground);

    }, []);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post("/api/auth/login", formData);

            localStorage.setItem("token", res.data.token);

            localStorage.setItem("role", res.data.role);

            localStorage.setItem("user", JSON.stringify(res.data.user));

            alert(res.data.message);

            if (res.data.role === "admin") {

                navigate("/admin");

            }

            else {

                navigate("/home");

            }

        }

        catch (error) {

            alert(error.response?.data?.message || "Login Failed");

        }

    };

    return (

        <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-black pb-16" style={{ backgroundImage: `url(${bgimg})` }}>
           
            <div className="flex items-center gap-3 bg-green-950 text-white p-1 sm:p-2">
                <img src={logo} alt="logo" className="w-20 h-10 sm:w-32 sm:h-12" />
                <h1 className="font-bold text-xs sm:text-lg">CAR RENTAL HOUSE</h1>
            </div>

            <div className="max-w-xl mx-auto mt-20 bg-white/20 backdrop-blur-md rounded-xl p-8 text-white">
                <h1 className="text-4xl font-bold text-center mb-8">Login</h1>

                <form onSubmit={handleSubmit}>

                    <div className="mb-5">

                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email"
                            className="w-full h-10 rounded border border-gray-300 text-black pl-3 mt-2" required
                        />

                    </div>

                    <div className="mb-6">

                        <label>Password</label>

                        <div className="relative">

                            <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Enter Password"
                                className="w-full h-10 rounded border border-gray-300 text-black pl-3 pr-10 mt-2" required />

                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-5 text-gray-600">
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>

                        </div>

                    </div>

                    <button className="w-full h-11 bg-orange-600 hover:bg-orange-700 rounded text-white font-bold">Login</button>

                    <p className="text-center mt-5"> Don't have an account? <Link to="/register" className="text-orange-700 ml-2 font-semibold">Register</Link></p>

                </form>

            </div>

        </div>

    );

};

export default Login;