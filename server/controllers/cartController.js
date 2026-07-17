import Cart from "../models/Cart.js";


export const addToCart = async (req, res) => {

    try {

        const { carId } = req.body;

        let cart = await Cart.findOne({ carId });

        if (cart) {

            cart.quantity += 1;

            await cart.save();

        } else {

            cart = await Cart.create({
                carId,
                quantity: 1
            });

        }

        res.status(200).json(cart);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

export const increaseQuantity = async (req, res) => {

    try {

        const cart = await Cart.findOne({ carId: req.params.carId });

        cart.quantity += 1;

        await cart.save();

        res.status(200).json(cart);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

export const decreaseQuantity = async (req, res) => {

    try {

        const cart = await Cart.findOne({ carId: req.params.carId });

        if (cart.quantity > 1) {

            cart.quantity -= 1;

            await cart.save();

            res.status(200).json(cart);

        } else {

            await Cart.findByIdAndDelete(cart._id);

            res.status(200).json({
                quantity: 0
            });

        }

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

export const getCart = async (req, res) => {

    try {

        const cart = await Cart.find().populate("carId");

        res.status(200).json(cart);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

export const clearCart = async (req, res) => {

    try {

        await Cart.deleteMany();

        res.status(200).json({

            message: "Cart Cleared Successfully"

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};