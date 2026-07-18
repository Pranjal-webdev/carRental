import User from "../models/User.js";
import Car from "../models/Car.js";
import Booking from "../models/Booking.js";

export const getDashboardStats = async (req, res) => {

    try {

        const totalCars = await Car.countDocuments();

        const totalUsers = await User.countDocuments();

        const totalBookings = await Booking.countDocuments();

        const bookings = await Booking.find();

        const revenue = bookings.reduce((sum, booking) => {

            return sum + booking.totalPrice;

        }, 0);

        res.json({

            totalCars,

            totalUsers,

            totalBookings,

            revenue

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};