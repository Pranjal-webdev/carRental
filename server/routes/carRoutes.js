import express from "express";
import { getCars,getCarById,addCar,deleteCar } from "../controllers/carController.js";

const router = express.Router();

router.get("/", getCars);
router.get("/:id", getCarById);
router.post("/add", addCar);
router.delete("/:id", deleteCar);

export default router;