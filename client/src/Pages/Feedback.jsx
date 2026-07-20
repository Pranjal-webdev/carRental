import React, { useEffect, useState } from "react";
import axios from "axios";

const Feedback = () => {

    const [feedbacks, setFeedbacks] = useState([]);

    const fetchFeedbacks = async () => {

        try {

            const res = await axios.get("/api/feedback");

            setFeedbacks(res.data);

        }

        catch (error) {

            console.log(error);

        }

    };


    useEffect(() => {
        fetchFeedbacks();
    },[]);

    const deleteFeedback = async (id) => {

        if (!window.confirm("Delete this feedback?")) return;

        try {

            await axios.delete(`/api/feedback/${id}`);

            fetchFeedbacks();

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="p-4 md:p-8">

            <h1 className="text-3xl md:text-4xl font-bold mb-6">
                User Feedbacks
            </h1>

            <div className="hidden md:block overflow-x-auto rounded-xl shadow-lg">

                <table className="w-full bg-white">

                    <thead className="bg-green-900 text-white">

                        <tr>
                            <th className="p-4">Feedbacks</th>
                            <th className="p-4">Date</th>
                            <th className="p-4">Action</th>
                        </tr>

                    </thead>

                </table>

            </div>

            <div className="md:hidden space-y-4">

                {
                    feedbacks.length > 0 ?

                    feedbacks.map((item) => (

                                    <div key={item._id} className="bg-white shadow rounded-lg p-4 border">

                                        <p className="font-semibold break-words">
                                            {item.message}
                                        </p>

                                        <p className="text-center text-[11px] md:text-base">
                                            {new Date(item.createdAt).toLocaleDateString("en-IN")}
                                        </p>

                                        <button
                                            onClick={() => deleteFeedback(item._id)}
                                            className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 md:px-4 md:py-2 text-xs md:text-base rounded"
                                        >
                                            Delete

                                        </button>
                                        

                                    </div>

                                ))

                                :

                                <div className="p-8 text-center">
                                    No Feedback Found
                                </div>
                            }

                    </div>

            </div>

    );

};

export default Feedback;

