import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';

const Main = () => {
  return (
    <>
      <div className="h-16  ">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-235px)] container mx-auto p-5 ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
