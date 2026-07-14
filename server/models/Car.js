import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, default: "" },
  fuel: { type: String, required: true },
  transmission: { type: String, required: true },
  seats: { type: Number, required: true },
  rating: { type: Number, required: true },
  available: { type: Boolean, default: true },
  description: { type: String, required: true },
});

const Car = mongoose.model("Car", carSchema);

export default Car;