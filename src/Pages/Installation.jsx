import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Installation = () => {
    const [installation, setInstallation] = useState([]);
    const [sortOrder, setSortOrder] = useState(''); 

    useEffect(() => {
        const installed = JSON.parse(localStorage.getItem('installation')) || [];
        setInstallation(installed);
    }, []);

    const handleUninstall = (id) => {
        const updatedList = installation.filter(app => app.id !== id);
        setInstallation(updatedList);
        localStorage.setItem('installation', JSON.stringify(updatedList));
        toast.success('App uninstalled!');
    };

   
    const sortedInstallation = [...installation];
    if (sortOrder === 'High-Low') sortedInstallation.sort((a, b) => b.size - a.size);
    if (sortOrder === 'Low-High') sortedInstallation.sort((a, b) => a.size - b.size);

    return (
        <div className="">
            <Toaster position="top-right" />
            <div className="text-center justify-center mb-2 ">
                <h1 className='text-[#001931] font-bold text-[40px]'>My Installed Applications</h1>
                <p className='text-[#627382] text-[20px]'>Explore All Apps you installed from our Market</p>
            </div>

            <div className="flex justify-between mb-4 mt-6">
                <h1 className='font-semibold text-lg md:text-2xl'>
                    Installed App <span className='text-sm text-gray-500'>({installation.length}) APP Found</span>
                </h1>

                <select
                    className="input border rounded px-3 py-1"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="">Sort by Size</option>
                    <option value="High-Low">High-Low</option>
                    <option value="Low-High">Low-High</option>
                </select>
            </div>

            <div className="space-y-3">
                {sortedInstallation.map(p => (
                    <div key={p.id} className="card card-side bg-base-100 shadow-sm">
                        <figure>
                            <img className='w-40 h-28 object-cover' src={p.image} alt={p.title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{p.title}</h2>
                            <div className="card-actions flex pr-4 items-center gap-3">
                                <div className="font-semibold">{p.size} MB</div>
                                <button
                                    className="btn btn-error"
                                    onClick={() => handleUninstall(p.id)}
                                >
                                    Uninstall
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Installation;
