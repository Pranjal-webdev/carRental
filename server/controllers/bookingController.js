import Booking from "../models/Booking.js";
import Cart from "../models/Cart.js";

export const placeOrder = async (req, res) => {

    try {

        const {

            fullName,

            email,

            phone,

            address,

            city,

            state,

            pincode,

            paymentMethod,

            totalPrice

        } = req.body;

        const cart = await Cart.find();

        if (cart.length === 0) {

            return res.status(400).json({

                message: "Cart is Empty"

            });

        }

        const booking = new Booking({

            cars: cart.map((item) => ({

                carId: item.carId,

                quantity: item.quantity

            })),

            fullName,

            email,

            phone,

            address,

            city,

            state,

            pincode,

            paymentMethod,

            totalPrice

        });

        await booking.save();

        await Cart.deleteMany();

        res.status(201).json({

            success: true,
            message: "Order Placed Successfully",
            booking

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

export const getAllBookings = async (req,res)=>{

    try{

        const bookings = await Booking.find()

        .populate("cars.carId")

        .sort({
            createdAt:-1
        });

        res.status(200).json({
            success:true,
            bookings
        });
    }

    catch (error){

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const updateBookingStatus = async(req,res)=>{

    try{
        const booking = await Booking.findById(req.params.id);

        if (!booking){

            return res.status(404).json({

                success : false,
                message: "Booking Not Found"
            });
        }

        booking.status = req.body.status;

        await booking.save();

        res .status(200).json({
            success: true,
            message: "Booking status Updated",
            booking
        });
    }

    catch (error) {

    res.status(500).json({

        success: false,

        message: error.message

    });

}

};


export const deleteBooking = async (req,res)=>{

    try {

        const booking = await Booking.findById(req.params.id);

        if (!booking){

            return res.status(404).json({
                success: false,
                message: "Booking Not Found"
            });
        }

        await booking.deleteOne();
        
        res.status(200).json({
            success: true,
            message: "Booking Deleted Successfully"
        })
    }

    catch (error){

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}