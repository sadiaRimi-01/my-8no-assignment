import React from 'react';
import { useParams } from 'react-router';
import useAllApps from '../hooks/useAllApps';

const AppDetails = () => {
    const { id } = useParams()

    const { appCards, loading, error } = useAllApps()
    const appS = appCards.find(p => String(p.id) === id)
    console.log(appS)
    if (loading) return <p>Loading...</p>
    const { image, title, downloads, ratingAvg, reviews, description, ratings } = appS
    const maxCount = Math.max(...ratings.map(r => r.count), 1);

    return (
        <div className="p-6 md:p-10 bg-white rounded-3xl shadow-lg max-w-4xl mx-auto my-8">


            <div className="flex flex-col md:flex-row items-start md:items-center mb-10 border-b pb-6">
                <figure className='w-24 h-24 md:w-32 md:h-32 mr-6 mb-4 md:mb-0 shrink-0'>
                    <img
                        src={image}
                        alt={title}
                        className="rounded-2xl w-full h-full object-cover shadow-md"
                    />
                </figure>

                <div className="flex-grow">
                    <h1 className="text-3xl font-bold mb-2">{title}</h1>
                    <div className="flex space-x-6 text-center text-sm">


                        <div>
                            <p className="text-2xl font-bold text-gray-800">{downloads}M</p>
                            <p className="text-gray-500">Downloads</p>
                        </div>


                        <div>
                            <p className="text-2xl font-bold text-gray-800">{ratingAvg}</p>
                            <p className="text-gray-500">Rating</p>
                        </div>


                        <div>
                            <p className="text-2xl font-bold text-gray-800">{reviews}</p>
                            <p className="text-gray-500">Reviews</p>
                        </div>
                    </div>

                    <button className="mt-4 btn bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-xl transition duration-200">
                        Install | {downloads}MB
                    </button>
                </div>
            </div>
            <h2 className="text-xl font-bold mb-4">Ratings</h2>
            <div className="mb-10">
                {ratings.map((r, index) => (
                    <div key={index} className="flex items-center space-x-4 mb-2">
                        <span className="text-sm font-medium w-12 text-gray-600">{r.name}</span>


                        <div className="flex-grow bg-gray-200 rounded-full h-3 overflow-hidden relative">

                            <div
                                className="bg-orange-400 h-full absolute left-0 top-0 rounded-full"
                                style={{
                                    width: `${(r.count / maxCount) * 100}%`,
                                    transition: 'width 0.5s ease',
                                }}
                            ></div>
                        </div>

                        <span className="text-sm text-gray-500 w-12 text-right hidden md:block">
                            {r.count.toLocaleString()}
                        </span>
                    </div>
                ))}
            </div>


            <h2 className="text-xl font-bold mb-4">Description</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                <p>{description}</p>
            </div>

        </div>
    );
};

export default AppDetails;