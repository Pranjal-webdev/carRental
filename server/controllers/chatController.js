import { GoogleGenAI } from "@google/genai";
import Car from "../models/Car.js";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

export const chatWithAI = async (req, res) => {

    try {

        const { message, previousInteractionId } = req.body;

        if (!message || !message.trim()) {

            return res.status(400).json({
                message: "Message is required"
            });

        }

        const cars = await Car.find({ available: true }).lean();

        const carData = cars.map((car) => ({
            id: car._id.toString(),
            name: car.name,
            brand: car.brand,
            price: car.price,
            fuel: car.fuel,
            transmission: car.transmission,
            seats: car.seats,
            rating: car.rating,
            description: car.description
        }));


        const prompt = `
You are Car Rental House AI Assistant.

You help users choose cars from our actual car rental inventory.

USER MESSAGE:
${message}

ACTUAL AVAILABLE CARS FROM OUR DATABASE:
${JSON.stringify(carData)}

IMPORTANT RULES:

1. Recommend ONLY cars from the actual available cars list above.

2. NEVER invent a car name, brand, price, rating or availability.

3. If the user asks for a car under a specific budget, recommend cars whose actual price is within that budget.

4. If multiple cars match, recommend the best 1-3 cars.

5. When recommending a car, ALWAYS mention:
   - Car name
   - Price per day
   - Fuel
   - Transmission
   - Seats
   - Rating
   - Short reason

6. If no car matches the user's budget or requirements, clearly say that no exact match is available and suggest the closest available options.

7. If the user asks something like:
   "suggest me a car under 5000"
   then actually check the available cars list and give the matching car names.

8. Do not tell the user to use another recommendation feature when you can answer using the available cars list.

9. Do not claim that a booking has been completed.

10. Do not ask for passwords, OTPs, card numbers or other sensitive information.

11. Keep answers short, friendly and easy to understand.

12. If the user speaks Hinglish, reply naturally in Hinglish.

13. If the question is unrelated to car rental, politely say that you mainly help with car rental related questions.

Give the user a useful answer based ONLY on the actual available cars above.
`;

        const options = {
            model: "gemini-3.6-flash",
            input: prompt
        };

        if (previousInteractionId) {

            options.previous_interaction_id = previousInteractionId;

        }

        const interaction = await ai.interactions.create(options);

        return res.json({

            reply: interaction.output_text,

            interactionId: interaction.id

        });

    } catch (error) {

        console.error("AI Chat Error:", error);

        return res.status(500).json({

            message: error.message || "AI Assistant is currently unavailable"

        });

    }

};