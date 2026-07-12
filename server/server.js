import connectDB from "./config/db.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res) => {
    res.json({
        message:"car rental backend running"
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});