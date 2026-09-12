import express from "express";
import { getCars,getCarById,addCar,deleteCar,updateCar } from "../controllers/carController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/roleMiddleware.js";


const router = express.Router();

router.get("/", getCars);
router.get("/:id", getCarById);
router.post("/add",authMiddleware,adminMiddleware, addCar);
router.delete("/:id",authMiddleware,adminMiddleware, deleteCar);
router.put("/:id",authMiddleware,adminMiddleware,updateCar);

export default router;       