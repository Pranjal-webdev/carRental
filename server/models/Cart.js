import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
{
    carId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Car",
        required:true
    },

    quantity:{
        type:Number,
        default:1
    }
},
{
    timestamps:true
});

export default mongoose.model("Cart",cartSchema);