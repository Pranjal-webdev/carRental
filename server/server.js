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
import dns from "dns";

dns.setServers([
    "1.1.1.1",
    "8.8.8.8"

])

dotenv.config();

const app = express();

// Connect Database
connectDB();

app.use(cors({
    origin: "http://localhost:5175",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Car Rental API is Running...");
});

// API Routes
app.use("/api/cars", carRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/feedback", feedbackRoutes);

// Start Server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});