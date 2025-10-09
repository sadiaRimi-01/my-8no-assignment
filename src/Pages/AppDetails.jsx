import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAllApps from '../hooks/useAllApps';
import toast, { Toaster } from 'react-hot-toast';

const AppDetails = () => {
    const { id } = useParams();
    const { appCards, loading } = useAllApps();
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const installed = JSON.parse(localStorage.getItem('installation')) || [];
        setInstalledApps(installed);
    }, []);

    if (loading) return <p>Loading...</p>;

    const appS = appCards.find(p => String(p.id) === id);
    if (!appS) return <p>App not found!</p>;

    const { image, title, downloads, description } = appS;
    const isInstalled = installedApps.some(p => p.id === appS.id);

    const handleAddToInstallation = () => {
        if (isInstalled) {
            toast.error('App already installed!');
            return;
        }

        const updatedList = [...installedApps, appS];
        localStorage.setItem('installation', JSON.stringify(updatedList));
        setInstalledApps(updatedList);
        toast.success('App installed successfully!');
    };

    return (
        <div className="p-6 md:p-10 bg-white rounded-3xl shadow-lg max-w-4xl mx-auto my-8">
            <Toaster position="top-right" />

            <div className="flex flex-col md:flex-row items-start md:items-center mb-10 border-b pb-6">
                <figure className='w-24 h-24 md:w-32 md:h-32 mr-6 mb-4 md:mb-0 shrink-0'>
                    <img src={image} alt={title} className="rounded-2xl w-full h-full object-cover shadow-md" />
                </figure>

                <div className="flex-grow">
                    <h1 className="text-3xl font-bold mb-2">{title}</h1>

                    <button
                        onClick={handleAddToInstallation}
                        disabled={isInstalled}
                        className={`mt-4 btn font-medium py-2 px-6 rounded-xl transition duration-200 
                            ${isInstalled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                    >
                        {isInstalled ? 'Installed' : `Install | ${downloads}MB`}
                    </button>
                </div>
            </div>

            <h2 className="text-xl font-bold mb-4">Description</h2>
            <p className="text-gray-700 text-base leading-relaxed">{description}</p>
        </div>
    );
};

export default AppDetails;
