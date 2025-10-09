import React, { useState } from 'react';
import useAllApps from '../hooks/useAllApps';
import AppCard from '../Components/AppCard';

const Allapp = () => {
    const { appCards } = useAllApps()
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedApp = term ? appCards.filter(appCard => appCard.title.toLocaleLowerCase().includes(term))
        : appCards
        console.log(searchedApp)
    return (
        <div className="">

            <div className="text-center justify-center mb-2 ">
                <h1 className='text-[#001931] font-bold text-[40px]'>Our All Applications</h1>
                <p className='text-[#627382] text-[20px] '>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="flex justify-between mb-4 mt-6">
                <h1 className='font-semibold text-2xl '>All App <span className='text-sm text-gray-500'>({searchedApp.length}) APP Found </span></h1>
                <label className="input">

                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="search Apps" />
                </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {searchedApp.map(app => (
                    <AppCard key={app.id} app={app} />
                ))}
            </div>

        </div>
    );
};

export default Allapp;