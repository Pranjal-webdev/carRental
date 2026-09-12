import express from "express";
import { getDashboardStats } from "../controllers/dashboardController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/stats",authMiddleware,adminMiddleware,getDashboardStats);

export default router;