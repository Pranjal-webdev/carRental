import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import carRoutes from "./routes/carRoutes.js";

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("🚗 Car Rental API is Running...");
});

// API Routes
app.use("/api/cars", carRoutes);

// Start Server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});