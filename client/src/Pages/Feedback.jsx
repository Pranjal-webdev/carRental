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
    }, []);

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

        <div className="overflow-x-auto">

            <h1 className="text-3xl md:text-4xl font-bold mb-6">
                User Feedbacks
            </h1>

            <div>

                <table className="w-full min-w-[600px] bg-white border-collapse">

                    <thead className="bg-green-900 text-white">

                        <tr>
                            <th className="p-4 text-left w-[60%]">Feedbacks</th>
                            <th className="hidden md:table-cell p-4 text-center">Date</th>
                            <th className="p-2 text-center">Action</th>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            feedbacks.length > 0 ?

                                feedbacks.map((item) => (

                                    <tr key={item._id} className="border-b">

                                        <td className="p-4 text-left">
                                            {item.message}
                                        </td>

                                        <td className="hidden md:table-cell text-center">
                                            {new Date(item.createdAt).toLocaleDateString("en-IN")}
                                        </td>

                                        <td  className="text-center">

                                             <button onClick={() => deleteFeedback(item._id)} className="bg-red-600 hover:bg-red-700 text-white px-2 md:px-4 md:py-2 py-1 text-xs md:tect-base whitespace-nowrap rounded">Delete</button>
                                             
                                        </td>

                                    </tr>

                                ))

                                :

                                <tr>
                                    <td colSpan="3" className="p-8 text-center">
                                        No Feedback Found
                                    </td>
                                </tr>
                        }

                    </tbody>


                </table>

            </div>

        </div>

    );

};

export default Feedback;