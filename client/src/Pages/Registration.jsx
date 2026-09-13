import logo from "../assets/logocar.png";
import car from "../assets/mobbg.jpg";
import bgcar from "../assets/carbg.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import api from "../api";
import "./registration.css";

const Registration = () => {

    const navigate = useNavigate();
    const [bgimg, setbgimg] = useState(bgcar);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false);
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

        setSubmitLoading(true);

        if (formData.password !== formData.confirmPassword) {

            setSubmitLoading(false);

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

            navigate("/home");

        } catch (error) {

            alert(error.response?.data?.message || "Registration Failed");

        }

        finally {

            setSubmitLoading(false);

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

        <div
            className="registration-page"
            style={{ backgroundImage: `url(${bgimg})` }}
        >

            <div className="registration-header">

                <img
                    src={logo}
                    alt="logo"
                    className="registration-logo"
                />

                <h1 className="registration-title">
                    CAR RENTAL HOUSE
                </h1>

            </div>


            <div className="registration-box">

                <h1 className="registration-heading">
                    Registration Form
                </h1>


                <div className="registration-form">

                    <form onSubmit={handlesubmit}>

                        <div className="form-row">

                            <label htmlFor="firstName">
                                Name :
                            </label>

                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Enter your name"
                                required
                            />

                        </div>


                        <div className="form-row">

                            <label htmlFor="lastName">
                                Last Name :
                            </label>

                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Enter your last name"
                                required
                            />

                        </div>


                        <div className="form-row">

                            <label htmlFor="email">
                                Email :
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Enter your email"
                                required
                            />

                        </div>


                        <div className="form-row">

                            <label htmlFor="phone">
                                Phone no :
                            </label>

                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Enter your phone no."
                                maxLength={10}
                                pattern="[6-9][0-9]{9}"
                                required
                            />

                        </div>


                        <div className="form-row">

                            <label htmlFor="state">
                                State :
                            </label>

                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Enter your state"
                                required
                            />

                        </div>


                        <div className="form-row">

                            <label htmlFor="city">
                                City :
                            </label>

                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Enter your city"
                                required
                            />

                        </div>


                        <div className="form-row">

                            <label htmlFor="password">
                                Password :
                            </label>

                            <div className="password-wrapper">

                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="Enter your password"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="password-eye"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>

                            </div>

                        </div>


                        <div className="form-row">

                            <label htmlFor="confirmPassword">
                                Confirm Password :
                            </label>

                            <div className="password-wrapper">

                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="Confirm your password"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(!showConfirmPassword)
                                    }
                                    className="password-eye"
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>

                            </div>

                        </div>


                        <div className="text-center">

                            <button
                                type="submit"
                                disabled={submitLoading}
                                className="register-button"
                            >

                                {submitLoading ? (

                                    <div className="flex justify-center items-center gap-2">

                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

                                        Creating Account...

                                    </div>

                                ) : (

                                    "Create Account"

                                )}

                            </button>


                            <p className="login-link">

                                Already have an account?

                                <Link to="/login">
                                    Login
                                </Link>

                            </p>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}
export default Registration;