import express from "express";
import {addToCart,increaseQuantity,decreaseQuantity,getCart,clearCart} from "../controllers/cartController.js";

const router = express.Router();

router.get("/", getCart);

router.post("/", addToCart);

router.patch("/increase/:carId", increaseQuantity);

router.patch("/decrease/:carId", decreaseQuantity);

router.delete("/clear", clearCart);

export default router;