import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/navbar/Navbar';
import Footer from '../pages/shared/footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <div className='sticky top-0 z-50'>
                <Navbar/>
            </div>
            <div className=''>
                <Outlet/>
            </div>
        <Footer/>
        </div>
    );
};

export default RootLayout;