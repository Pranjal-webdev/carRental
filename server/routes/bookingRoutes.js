import express from "express";
import { placeOrder,getAllBookings,updateBookingStatus,deleteBooking,getMyBookings,cancelBooking } from "../controllers/bookingController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/",authMiddleware, placeOrder);
router.get("/my-bookings", authMiddleware, getMyBookings);
router.get("/", getAllBookings);
router.patch("/:id", updateBookingStatus);
router.delete("/:id", deleteBooking);
router.patch("/cancel/:id", authMiddleware, cancelBooking);

export default router;