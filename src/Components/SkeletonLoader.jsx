import React from 'react';

const SkeletonLoader = ({count=8}) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            
{Array.from({length:count}).map((_,i)=>(
    <div key={i} className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>

))}
        </div>
    );
};

export default SkeletonLoader;