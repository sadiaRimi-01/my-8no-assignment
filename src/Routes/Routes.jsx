import React from 'react';

import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import Allapp from '../Pages/Allapp';
import Layout from '../Layouts/Layout';
import ErrorPage from '../Pages/ErrorPage';
import AppDetails from '../Pages/AppDetails';
import Installation from '../Pages/Installation';

const router = createBrowserRouter([
    {
    path: "/",
    element: <Layout/>,
    errorElement:<ErrorPage/>,
    children:[
 {
    index:true,
    element: <Home/>,
   
  },
  {
    path: "/allapps",
    element: <Allapp/>,
  },
  {
    path:'/app/:id',
    element:<AppDetails/>
  },
  {
    path:'/installation',
    element:<Installation/>
  }
    ]
  },
 
  
]);

export default router;