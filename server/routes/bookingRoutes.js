import express from "express";
import { placeOrder,getAllBookings,updateBookingStatus,deleteBooking,getMyBookings,cancelBooking } from "../controllers/bookingController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/roleMiddleware.js";


const router = express.Router();

router.post("/",authMiddleware, placeOrder);
router.get("/my-bookings", authMiddleware, getMyBookings);
router.get("/", authMiddleware,adminMiddleware,getAllBookings);
router.patch("/:id",authMiddleware,adminMiddleware, updateBookingStatus);
router.delete("/:id",authMiddleware,adminMiddleware, deleteBooking);
router.patch("/cancel/:id", authMiddleware, cancelBooking);

export default router;