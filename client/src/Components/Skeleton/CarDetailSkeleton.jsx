const CarDetailSkeleton = () => {

    return (

        <div className="max-w-7xl mx-auto px-6 py-10 animate-pulse">

            <div className="grid md:grid-cols-2 gap-10">

            <div className="w-full h-[450px] bg-gray-300 rounded-xl"></div>

            <div>

                    <div className="h-10 w-64 bg-gray-300 rounded mb-6"></div>

                    <div className="h-5 w-full bg-gray-300 rounded mb-3"></div>

                    <div className="h-5 w-5/6 bg-gray-300 rounded mb-8"></div>

                    <div className="h-6 w-40 bg-gray-300 rounded mb-4"></div>

                    <div className="h-6 w-48 bg-gray-300 rounded mb-4"></div>

                    <div className="h-6 w-52 bg-gray-300 rounded mb-4"></div>

                    <div className="h-12 w-44 bg-gray-300 rounded-lg mt-10"></div>

                </div>

            </div>

        </div>

    );

};

export default CarDetailSkeleton;

