import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {

    try {

        const {
            firstName,
            lastName,
            email,
            phone,
            state,
            city,
            password
        } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({
                message: "User already exists"
            });

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({

            firstName,
            lastName,
            email,
            phone,
            state,
            city,
            password: hashedPassword

        });

        await user.save();

        res.status(201).json({

            message: "Registration Successful"

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};


export const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(400).json({

                message: "User not found"

            });

        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {

            return res.status(400).json({

                message: "Invalid Password"

            });

        }

        const token = jwt.sign(

            {
                id: user._id,
                role: user.role
            },

            process.env.JWT_SECRET,

            {
                expiresIn: process.env.JWT_EXPIRES
            }

        );

        res.status(200).json({

            message: "Login Successful",

            token,

            role: user.role,

            user: {

                id: user._id,

                firstName: user.firstName,

                email: user.email

            }

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

export const getUsers = async (req, res) => {

    try {

        const users = await User.find().select("-password");

        res.status(200).json(users);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};