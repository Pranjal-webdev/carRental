import express from "express";
import { recommendCars } from "../controllers/aiController.js";

const router = express.Router();

router.post("/recommend", recommendCars);

export default router;