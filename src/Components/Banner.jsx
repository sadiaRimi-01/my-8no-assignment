import React from 'react';
import { Link } from 'react-router';

import play from '../../public/assets/play.png'
import phone from '../../public/assets/hero.png'
import store from '../../public/assets/store.png'
const Banner = () => {
    return (
         <div class="banner-container flex flex-col justify-between">
          <div class="text-center pt-6 pb-8">
            
            <div class="container mx-auto px-4">
               
                <h1 class="text-3xl md:text-4xl lg:text-5xl  font-bold mb-2 text-gray-800">
                    We Build <br/><span class="text-[#9F62F2]">Productive</span> Apps
                </h1>
            
                <p class=" text-[#627382] text-base  mb-8 max-w-3xl mx-auto">
                    At HERO.io, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. 
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
                
               
                <div class="flex justify-center space-x-4 mb-16">
                    
                    <Link to='https://play.google.com/store/games?device=windows&pli=1'  className='btn btn-custom-outline flex items-center px-6 py-3 rounded-lg shadow-sm'><img src={play} alt="" />Google Play</Link>
                    <Link to='https://www.apple.com/app-store/' className='btn btn-custom-outline flex items-center px-6 py-3 rounded-lg shadow-sm'><img src={store} alt="" />App Store</Link>
                </div>
            </div>
            <div class="relative flex justify-center  w-full h-full md:h-96 object-contain max-w-full">
                <img 
                    src={phone} 
                    alt="App Interface Mockup" 
                    class="w-auto h-full "
                   
                />
            </div>
       
        <div class="bg-linear-to-bl from-[#632EE3] to-[#9F62F2] w-full  "> 
            <div class="container mx-auto py-8 px-4">
                <h2 class="text-2xl md:text-3xl font-extrabold text-white text-center mb-4">
                    Trusted By Millions, Built For You
                </h2>

                   <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
                    <div class="text-center  p-2 md:p-4">
                        <p class="text-sm font-semibold text-gray-300 mb-1">Total Downloads</p>
                        <h3 class="text-3xl md:text-4xl font-extrabold text-white mb-1">29.6M</h3>
                        <p class="text-xs text-gray-300">21% More Than Last Month</p>
                    </div>

                    
                    <div class="text-center p-2 md:p-4">
                         <p class="text-sm font-semibold text-gray-300 mb-1">Total Reviews</p>
                        <h3 class="text-3xl md:text-4xl font-extrabold text-white mb-1">906K</h3>
                        <p class="text-xs text-gray-300">46% More Than Last Month</p>
                    </div>

                   
                    <div class="text-center  p-2 md:p-4">
                        <p class="text-sm font-semibold text-gray-300 mb-1">Active Apps</p>
                        <h3 class="text-3xl md:text-4xl font-extrabold text-white mb-1">132+</h3>
                        <p class="text-gray-300 text-xs">31 More Will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
        
    );
};

export default Banner