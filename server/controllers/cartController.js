import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {

    try {

        const { carId } = req.body;

        if (!carId) {
            return res.status(400).json({
                message: "Car ID is required"
            });
        }

        const userId = req.user.id;

        let cart = await Cart.findOne({
            user: req.user.id,
            carId: carId
        });

        if (cart) {

            cart.quantity += 1;

            await cart.save();

        } else {

            cart = await Cart.create({
                user: userId,
                carId:carId,
                quantity: 1
            });

        }

        res.status(200).json(cart);

    } catch (error) {

        console.error("Add To Cart Error:", error);

        res.status(500).json({
            message: error.message
        });

    }

};

export const increaseQuantity = async (req, res) => {

    try {

        const cart = await Cart.findOne({
            user: req.user.id,
            carId: req.params.carId
        });

        if (!cart) {
            return res.status(404).json({
                message: "Cart Item Not Found"
            });
        }

        cart.quantity += 1;

        await cart.save();

        res.status(200).json(cart);

    } catch (error) {

        console.error("Increase Cart Error:", error);

        res.status(500).json({
            message: error.message
        });

    }

};

export const decreaseQuantity = async (req, res) => {

    try {

        const cart = await Cart.findOne({
            user: req.user.id,
            carId: req.params.carId
        });

        if (!cart) {
            return res.status(404).json({
                message: "Cart Item Not Found"
            });
        }


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

        const cart = await Cart.find({
            user: req.user.id
        }).populate("carId");


        res.status(200).json(cart);

    } catch (error) {

        console.error("Get Cart Error:", error);

        res.status(500).json({
            message: error.message
        });

    }

};

export const clearCart = async (req, res) => {

    try {

        await Cart.deleteMany({
            user: req.user.id
        });

        res.status(200).json({

            message: "Cart Cleared Successfully"

        });

    } catch (error) {

        console.error("Clear Cart Error:", error);

        res.status(500).json({
            message: error.message
        });

    }

};