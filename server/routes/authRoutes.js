import express from "express";
import { registerUser, loginUser, getUsers } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users",authMiddleware,adminMiddleware, getUsers);

export default router;