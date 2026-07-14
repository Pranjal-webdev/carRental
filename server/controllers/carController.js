import Car from "../models/Car.js";

export const getCars = async (req, res) => {
  try {
    const cars = await Car.find();

    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};