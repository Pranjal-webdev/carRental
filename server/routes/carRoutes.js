import express from "express";
import { getCars,getCarById,addCar,deleteCar,updateCar } from "../controllers/carController.js";

const router = express.Router();

router.get("/", getCars);
router.get("/:id", getCarById);
router.post("/add", addCar);
router.delete("/:id", deleteCar);
router.put("/:id", updateCar);

export default router;       