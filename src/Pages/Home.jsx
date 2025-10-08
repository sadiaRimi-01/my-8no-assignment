import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AppCard from '../Components/AppCard';
import Navber from '../Components/Navber';
import Banner from '../Components/Banner';

const Home = () => {
  const appCards = useLoaderData();
  const featuredApps =appCards.slice(0,8)
  console.log(appCards);

  return (
    <div className="">
       <Banner></Banner>
        <div className="text-center justify-center mb-2 ">
            <h1 className='text-[#001931] font-bold text-[40px]'>Trending Apps</h1>
            <p className='text-[#627382] text-[20px] '>Explore All Trending Apps on the Market developed by us</p>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredApps.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      <div className="text-center justify-center mt-6">
        <Link to='/allapps' className='btn text-white w-[145px] p-2  bg-linear-to-bl from-violet-500 to-fuchsia-500'>Show All</Link>
      </div>
    </div>
  );
};

export default Home;
