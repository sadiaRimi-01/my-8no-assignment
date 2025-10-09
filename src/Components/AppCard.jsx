import React from 'react';
import { Link } from 'react-router';

const AppCard = ({ app }) => {
  if (!app) return null; // prevents crash if app is undefined

  const { image, title, ratingAvg, downloads, id } = app;

  return (
    <Link to={`/app/${id}`} className=" bg-base-100  rounded-3xl hover:scale-105 transition ease-in-out p-[16px]  shadow-sm">
      <figure className='h-[280px] mb-2 overflow-hidden'>
        <img src={image} alt={title} className="rounded-xl w-full object-cover" />
      </figure>
      
        <h2 className="mb-2 font-medium ">{title}</h2>

        <div className=" flex justify-between">
          <button className="btn p-1 text-[#FF8811] bg-[#FFF0E1] gap-1 rounded-xl min-w-[54px] min-h-[30px]">⭐ {ratingAvg}</button>
          <button className="btn p-1 text-[#00D390] bg-[#F1F5E8] gap-1 rounded-xl min-w-[54px] min-h-[30px]">⬇️ {downloads}M</button>
        </div>
      </Link>
    
  );
};

export default AppCard;
