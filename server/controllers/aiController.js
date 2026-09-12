import { GoogleGenAI } from "@google/genai";
import Car from "../models/Car.js";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

export const recommendCars = async (req, res) => {

    try {

        const { budget, seats, fuel, transmission, requirement } = req.body;

        const cars = await Car.find({ available: true });

        const prompt = `
You are a car rental recommendation assistant.

User requirements:
Budget per day: ₹${budget}
Passengers: ${seats}
Fuel preference: ${fuel}
Transmission: ${transmission}
Requirement: ${requirement}

Available cars:
${JSON.stringify(cars)}

Recommend the best 1-3 cars ONLY from the available cars above.

Consider:
- Budget
- Number of seats
- Fuel preference
- Transmission
- User requirement
- Rating

Do not invent any car.

Return a simple JSON array:
[
    {
        "carId": "actual car _id",
        "reason": "short reason why this car is suitable"
    }
]
`;

        const response = await ai.models.generateContent({

            model: "gemini-3.6-flash",

            contents: prompt

        });

        let text = response.text;

        text = text.replace(/```json/g, "").replace(/```/g, "").trim();

        const recommendations = JSON.parse(text);

        const recommendedCars = recommendations.map(item => {

            const car = cars.find(
                car => car._id.toString() === item.carId
            );

            return car ? {
                car,
                reason: item.reason
            } : null;

        }).filter(Boolean);

        res.json({
            recommendations: recommendedCars
        });

    } catch (error) {

        console.error("AI Recommendation Error:", error);

        res.status(500).json({
            message: error.message
        });

    }

};