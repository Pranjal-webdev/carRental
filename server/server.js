import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";

dns.setServers(["1.1.1.1","8.8.8.8"]);

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((error) => {
    console.log(error);
});


app.get("/", (req, res) => {
    res.send("Server is running");
});


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});