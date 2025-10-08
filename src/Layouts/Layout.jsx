import React from 'react';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;