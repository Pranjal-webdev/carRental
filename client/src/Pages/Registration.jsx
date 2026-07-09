import React from "react";
import logo from "../assets/logocar.png";
import car from "../assets/mobbg.jpg";
import bgcar from "../assets/carbg.jpg";
import { useEffect, useState, useActionState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {

    const navigate = useNavigate();
    const [bgimg, setbgimg] = useState(bgcar);
    const [message, submitAction, isPending] = useActionState(handlesubmit, null);
    const [showSuccess, setshowSuccess]=useState(false);

    async function handlesubmit(prevState, formData) {

        const name = formData.get("name");
        const lastname = formData.get("lastname");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const country = formData.get("country");
        const state = formData.get("state");
        const city = formData.get("city");

        await new Promise ((resolve)=>{
            setTimeout(resolve,2000);
        });
        setshowSuccess(true);
        

        setTimeout(()=>{
            setshowSuccess(false);
            navigate("/home")
        },1800);
    }

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
                    <form action={submitAction}>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                            <label htmlFor="name" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">Name : </label>
                            <input type="text" id="name" name="name" className="w-full sm:w-72 border border-gray-400 rounded-sm pl-2" placeholder="Enter your name" required />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                            <label htmlFor="lastname" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">Last Name : </label>
                            <input type="text" id="lastname" name="lastname" className="w-full sm:w-72 border border-gray-400 rounded-sm pl-2" placeholder="Enter your last name" required />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                            <label htmlFor="email" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">Email : </label>
                            <input type="email" id="email" name="email" className="w-full sm:w-72 border border-gray-400 rounded-sm pl-2" placeholder="Enter your email" required />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                            <label htmlFor="phone" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">Phone no : </label>
                            <input type="tel" id="phone" name="phone" className="w-full sm:w-72 border border-gray-400 rounded-sm pl-2" placeholder="Enter your phone no." maxLength={10} pattern="[6-9][0-9]{9}" required />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                            <label htmlFor="country" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">Country : </label>
                            <input type="text" id="country" name="country" className="w-full sm:w-72 border border-gray-400 rounded-sm pl-2" placeholder="Enter your country" required />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                            <label htmlFor="state" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">State : </label>
                            <input type="text" id="state" name="state" className="w-full sm:w-72 border border-gray-400 rounded-sm pl-2" placeholder="Enter your state" required />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-[8px]">
                            <label htmlFor="city" className="sm:w-32 text-sm sm:text-base lg:text-xl mb-1 sm:mb-0">City : </label>
                            <input type="text" id="city" name="city" className="w-full sm:w-72 border border-gray-400 rounded-sm pl-2" placeholder="Enter your city" required />
                        </div>
                        <div className="flex justify-center mt-10">
                            <button type="submit" disabled={isPending} className="bg-orange-600 text-white w-24 sm:w-32 lg:w-40 mb-2 rounded-sm border border-white-2 font-semibold hover:bg-orange-700 transition all duration-300">{isPending ?"submitting...": "Register"}</button>
                        </div>
                    </form>
                    {showSuccess && (
                        <div className="fixed top-5 right-150 bg-white border-l-4 border-green-500 text-gray-800 rounded-lg shadow-2xl z-5-0 px-5 py-4">
                            <h3 className="font-bold text-green-600">
                                Registration successful!
                            </h3>
                            <p className="text-sm text-gray-600">
                                Your account has been created successfully.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}
export default Registration;