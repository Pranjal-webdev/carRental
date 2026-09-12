import express from "express";
import {addToCart,increaseQuantity,decreaseQuantity,getCart,clearCart} from "../controllers/cartController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware,getCart);
router.post("/", authMiddleware,addToCart);
router.patch("/increase/:carId",authMiddleware, increaseQuantity);
router.patch("/decrease/:carId",authMiddleware, decreaseQuantity);
router.delete("/clear",authMiddleware, clearCart);

export default router;