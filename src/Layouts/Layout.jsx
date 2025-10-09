import React from 'react';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            <Navber />
            <div className="max-w-screen-2xl mx-auto w-full px-3 md:px-6 lg:px-8 py-3 md:py-6 lg:py-8 flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;