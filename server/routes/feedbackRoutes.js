import express from "express";
import { addFeedback,getFeedbacks,deleteFeedback } from  "../controllers/feedbackController.js";

const router = express.Router();

router.post("/", addFeedback);
router.get("/", getFeedbacks);
router.delete("/:id", deleteFeedback);

export default router;