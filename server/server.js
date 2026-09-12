import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import carRoutes from "./routes/carRoutes.js";
import cors from "cors";
import cartRoutes from "./routes/cartRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import aiRoute from "./routes/aiRoute.js";
import chatRoute from "./routes/chatRoute.js";
import dns from "dns";

dns.setServers([
    "1.1.1.1",
    "8.8.8.8"

])

dotenv.config();

const app = express();


connectDB();

app.use(cors({
    origin: ["http://localhost:5175","https://car-rental-dun-chi.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
    credentials: true
}));


app.use(express.json());


app.get("/", (req, res) => {
  res.send("Car Rental API is Running...");
});


app.use("/api/cars", carRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/ai", aiRoute);
app.use("/api/ai-chat", chatRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});