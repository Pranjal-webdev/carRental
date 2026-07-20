import Feedback from "../models/Feedback.js";

export const addFeedback = async (req, res) => {

    try {

        const { message } = req.body;

        const feedback = new Feedback({
            message
        });

        await feedback.save();

        res.status(201).json({
            success: true,
            message: "Feedback submitted successfully"
        });
    } catch (error){

        res.status(500).json({
            sucess:false,
            message: error.message
        })
    }
};

export const getFeedbacks = async (req, res) => {

    try{

        const feedbacks = await Feedback.find().sort({ createdAt: -1 });
        res.status(200).json(feedbacks);

    }catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

export const deleteFeedback = async (req, res) => {

    try {

        await Feedback.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Feedback deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};