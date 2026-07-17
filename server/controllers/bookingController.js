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

            message: "Order Placed Successfully"

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};