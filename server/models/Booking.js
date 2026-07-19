import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({

    cars: [
        {
            carId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Car"
            },

            quantity: Number
        }
    ],

    fullName: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    pincode: String,
    paymentMethod: String,
    totalPrice: Number,

    status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected", "Completed"],
        default: "Pending"
    },

    bookedAt: {
        type: Date,
        default: Date.now
}

},

{
    timestamps: true
});

export default mongoose.model("Booking", bookingSchema);