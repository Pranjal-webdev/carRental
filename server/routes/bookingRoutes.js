import express from "express";
import { placeOrder,getAllBookings,updateBookingStatus,deleteBooking } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", placeOrder);
router.get("/", getAllBookings);
router.patch("/:id", updateBookingStatus);
router.delete("/:id", deleteBooking);

export default router;