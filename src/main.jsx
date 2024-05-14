import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routers/Router.jsx';
import AuthProviders from './Provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <RouterProvider router={router} />
        <Toaster />
      </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>
);
