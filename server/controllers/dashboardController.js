import User from "../models/User.js";
import Car from "../models/Car.js";
import Booking from "../models/Booking.js";

export const getDashboardStats = async (req, res) => {

    try {

        const totalCars = await Car.countDocuments();

        const totalUsers = await User.countDocuments();

        const totalBookings = await Booking.countDocuments();

        const bookings = await Booking.find();

        const recentBookings = await Booking.find()
        .populate("cars.carId")
        .sort({ createdAt: -1 })
        .limit(5);

        const revenue = bookings.reduce((sum, booking) => {

            return sum + booking.totalPrice;

        }, 0);

        res.json({

            totalCars,

            totalUsers,

            totalBookings,

            revenue,

            recentBookings

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};