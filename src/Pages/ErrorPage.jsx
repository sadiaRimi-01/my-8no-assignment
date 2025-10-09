import React from 'react';
import error from '../../public/assets/error-404.png'
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';

const ErrorPage = () => {
    
    return (
        <div className="">
            <Navber/>
         <div className='bg-amber-50 min-h-screen flex flex-col justify-center items-center text-center'>
            <img className='max-w-3/12 items-center' src={error} alt="" />
            <div className='text-center'>
                <h1 className='text-6xl font-bold text-blue-700'>Oops, page not found!</h1>
                <p className='mt-5 text-gray-500'>The page you are looking for is not available.</p>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default ErrorPage;