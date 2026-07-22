import React from "react";

const About = () => {

    return (
        <div className="bg-gray-100 min-h-screen">

            <section className="bg-slate-800 text-white py-16 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-5">Car Rental House</h1>
                <p className="max-w-3xl mx-auto text-lg text-gray-200">
                    Your trusted partner for comfortable, safe and premium car rental experiences. We provide luxury cars with reliable service at affordable prices.
                </p>
            </section>


            <section className="py-12 px-6 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="bg-white shadow-lg rounded-xl p-8 text-center border-t-4 border-orange-600">
                        <h2 className="text-4xl font-bold text-orange-600">5+</h2>
                        <p className="text-gray-600 mt-2">Years Experience</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-8 text-center border-t-4 border-orange-600">
                        <h2 className="text-4xl font-bold text-orange-600">500+</h2>
                        <p className="text-gray-600 mt-2">Happy Customers</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-8 text-center border-t-4 border-orange-600">
                        <h2 className="text-4xl font-bold text-orange-600">50+</h2>
                        <p className="text-gray-600 mt-2">Premium Cars</p>
                    </div>

                </div>
            </section>


            <section className="bg-white py-14 px-6 md:px-20">
                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>

                    <p className="text-gray-600 leading-8">
                        At Car Rental House, our mission is to make travelling easier by providing high-quality vehicles with a simple and convenient booking experience. Whether you need a car for business trips, family vacations or special occasions, we are here to provide the perfect ride.
                    </p>

                </div>
            </section>


            <section className="bg-slate-800 text-white py-14 px-6 md:px-16">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Choose Us?</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="bg-orange-500 p-6 rounded-xl">
                        <h3 className="text-xl font-bold mb-3">Premium Cars</h3>
                        <p className="text-gray-200">We offer a wide range of luxury and comfortable vehicles for every journey.</p>
                    </div>

                    <div className="bg-orange-500 p-6 rounded-xl">
                        <h3 className="text-xl font-bold mb-3">Easy Booking</h3>
                        <p className="text-gray-200">Book your favourite car quickly with our simple online booking system.</p>
                    </div>

                    <div className="bg-orange-500 p-6 rounded-xl">
                        <h3 className="text-xl font-bold mb-3">Customer Support</h3>
                        <p className="text-gray-200">Our team is always ready to help you anytime.</p>
                    </div>

                </div>

            </section>

        </div>
    );
};

export default About;