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


export const getCarById = async (req, res) => {

    try {

        const car = await Car.findById(req.params.id);

        if (!car) {

            return res.status(404).json({

                message: "Car Not Found"

            });

        }

        res.status(200).json(car);

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};


export const addCar = async (req, res) => {

    try {

        const car = new Car(req.body);

        await car.save();

        res.status(201).json({

            message: "Car Added Successfully",

            car

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};


export const deleteCar = async (req, res) => {

    try {

        const car = await Car.findByIdAndDelete(req.params.id);

        if (!car) {

            return res.status(404).json({

                message: "Car not found"

            });

        }

        res.status(200).json({

            message: "Car Deleted Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

export const updateCar = async(req,res)=>{

    try{

        const car = await Car.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!car) {
            return res.status(404).json({
                message: "Car Not Found"
        });
    }

        res.status(200).json({
            message: "Car Updated Successfully",
            car
        });
    }

    catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

};
