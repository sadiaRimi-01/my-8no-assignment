import React from 'react';

import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import Allapp from '../Pages/Allapp';
import Layout from '../Layouts/Layout';
import ErrorPage from '../Pages/ErrorPage';

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
    ]
  },
 
  
]);

export default router;