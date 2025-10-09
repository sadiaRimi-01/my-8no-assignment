import React from 'react';
import Layout from '../Layouts/Layout';
import Home from '../Pages/Home';
import Allapp from '../Pages/Allapp';
import AppDetails from '../Pages/AppDetails';
import Installation from '../Pages/Installation';
import ErrorPage from '../Pages/ErrorPage';
import { createHashRouter } from 'react-router-dom';

const router = createHashRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    
    children: [
      { index: true, element: <Home /> },
      { path: "allapps", element: <Allapp /> },
      { path: "app/:id", element: <AppDetails /> },
      { path: "installation", element: <Installation /> }
    ]
  }
]);

export default router;
