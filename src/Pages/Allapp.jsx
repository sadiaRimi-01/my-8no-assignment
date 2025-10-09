import React, { useState, useEffect } from 'react';
import useAllApps from '../hooks/useAllApps';
import AppCard from '../Components/AppCard';

import appError from '../../public/assets/App-Error.png';
import SkeletonLoader from '../Components/SkeletonLoader';
import PageSpinner from '../Components/PageSpinner';

const Allapp = () => {
    const { appCards, loading: initialLoading } = useAllApps();
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(initialLoading);

    const term = search.trim().toLowerCase();
    const searchedApp = term
        ? appCards.filter(appCard =>
              appCard.title.toLowerCase().includes(term)
          )
        : appCards;

   
    useEffect(() => {
        if (term) {
            setLoading(true);
            const timer = setTimeout(() => setLoading(false), 500);
            return () => clearTimeout(timer);
        } else {
            setLoading(initialLoading);
        }
    }, [term, initialLoading]);
    useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []); 

  if (loading || initialLoading) {
    return <PageSpinner />;
  }

    if (!loading && searchedApp.length === 0) {
        return (
            <div>
                <div className="flex justify-between mb-4 mt-6">
                    <h1 className='font-semibold text-2xl '>
                        All App{' '}
                        <span className='text-sm text-gray-500'>
                            ({searchedApp.length}) APP Found
                        </span>
                    </h1>
                    <label className="input">
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            type="search"
                            placeholder="search Apps"
                        />
                    </label>
                </div>

                <div className='bg-amber-50 min-h-screen flex flex-col justify-center items-center text-center'>
                    <img className='max-w-3/12 items-center' src={appError} alt="Not Found" />
                    <div className='text-center'>
                        <h1 className='text-6xl font-bold text-blue-700'>Oops, app not found!</h1>
                        <p className='mt-5 text-gray-500'>The app you are searching for is not available.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="">
            <div className="text-center justify-center mb-2 ">
                <h1 className='text-[#001931] font-bold text-[40px]'>Our All Applications</h1>
                <p className='text-[#627382] text-[20px] '>
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>
            <div className="flex justify-between mb-4 mt-6">
                <h1 className='font-semibold text-2xl '>
                    All App{' '}
                    <span className='text-sm text-gray-500'>
                        ({searchedApp.length}) APP Found
                    </span>
                </h1>
                <label className="input">
                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        type="search"
                        placeholder="search Apps"
                    />
                </label>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center min-h-screen gap-4">
                    
                    <SkeletonLoader count={8} />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {searchedApp.map(app => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Allapp;
