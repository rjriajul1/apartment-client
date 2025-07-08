import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/navbar/Navbar';

const RootLayout = () => {
    return (
        <div>
            <div className='sticky top-0 z-50'>
                <Navbar/>
            </div>
            <div className='max-w-[1600px] mx-auto'>
                <Outlet/>
            </div>
            <p>Footer</p>
        </div>
    );
};

export default RootLayout;