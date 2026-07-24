import { Link } from "react-router-dom";

const NoResults = () => {

    return (

        <div className="min-h-[70vh] flex items-center justify-center">

            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-10 text-center w-full max-w-md">

                <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                    No Results Found
                </h1>

                <p className="mt-4 text-gray-600 text-sm md:text-lg">
                    Sorry! We couldn't find the car you're looking for.
                </p>

                <Link
                    to="/cars"
                    className="inline-block mt-8 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg"
                >
                    Browse All Cars
                </Link>

            </div>
        </div>

    );
};

export default NoResults;