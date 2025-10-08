import React from 'react';
import Navber from '../Components/Navber';
import { useRouteError } from 'react-router';
import Footer from '../Components/Footer';

const ErrorPage = () => {
     const error = useRouteError()
    return (
        <div>
<Navber/>
           <div>{error.message}</div>
            <Footer/>
        </div>
    );
};

export default ErrorPage;