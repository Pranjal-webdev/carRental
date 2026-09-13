import React, { useState, useContext } from "react";
import api from "../api";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/logocar.png";
import bgcar from "../assets/carbg.jpg";
import mobbg from "../assets/mobbg.jpg";
import { CartContext } from "../context/CartContext";

const Login = () => {

    const navigate = useNavigate();
    const { fetchCartCount } = useContext(CartContext);
    const [bgimg, setBgimg] = useState(window.innerWidth < 640 ? mobbg : bgcar);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
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
        setLoading(true);
        setErrorMessage("");

        try {

            const res = await api.post("/api/auth/login", formData);

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.role);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            await fetchCartCount();

            setLoading(false);

            if (res.data.role === "admin") {

                navigate("/admin");

            }

            else {

                navigate("/home");

            }
        }

        catch (error) {

            setLoading(false);

            setErrorMessage(
                error.response?.data?.message || "Login Failed"
            );
        }

    };

    return (

        <div className="min-h-screen bg-cover md:bg-contain bg-center bg-no-repeat bg-black pb-16" style={{ backgroundImage: `url(${bgimg})` }}>

            <div className="flex items-center gap-3 bg-green-950 text-white p-1 sm:p-2 md:p-3">
                <img src={logo} alt="logo" className="w-20 h-10 sm:w-32 sm:h-12 md:w-36 md:h-14" />
                <h1 className="font-bold text-xs sm:text-lg md:text-xl">CAR RENTAL HOUSE</h1>
            </div>

            <div className="w-[90%] sm:w-[80%] md:w-[80%] max-w-2xl mx-auto mt-50 sm:mt-16 md:mt-0 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-white/20 backdrop-blur-md rounded-xl p-6 sm:p-8 md:p-12 text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">Login</h1>

                <form onSubmit={handleSubmit}>

                    <div className="mb-5">

                        <label className="md:text-base">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email"
                            className="w-full h-10 md:h-12 rounded border border-gray-300 text-black md:text-white md:text-lg pl-3 mt-2" required
                        />

                    </div>

                    <div className="mb-6">

                        <label className="md:text-base">Password</label>

                        <div className="relative">

                            <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Enter Password"
                                className="w-full h-10 md:h-12 rounded border border-gray-300 text-black md:text-white md:text-lg pl-3 pr-10 mt-2" required />

                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-5 text-gray-600">
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>

                        </div>

                    </div>

                    {errorMessage && (
                        <p className="text-red-500 text-sm mb-3">
                            {errorMessage}
                        </p>
                    )}

                    <button type="submit" disabled={loading} className="w-full h-11 md:h-13 bg-orange-600 hover:bg-orange-700 rounded text-white font-bold flex justify-center items-center">

                        {loading ? (

                            <>
                                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                                Logging In...

                            </>
                        ) : (

                            "Login"
                        )}
                    </button>

                    <p className="text-center mt-5 md:text-lg"> Don't have an account? <Link to="/register" className="text-orange-700 ml-2 font-semibold md:text-xl">Register</Link></p>

                </form>

            </div>

        </div>

    );

};

export default Login;