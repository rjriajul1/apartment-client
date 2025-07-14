import React from 'react';
import Banner from './banner/Banner';
import AboutBuilding from './aboutBuilding/AboutBuilding';
import Coupons from './coupons/Coupons';
import ApartmentMap from './apartmentMap/ApartmentMap';
import { useLoaderData } from 'react-router';

const Home = () => {
    const coupons = useLoaderData()
 
   
    return (
        <div>
            <Banner/>
            <AboutBuilding/>
            <Coupons coupons={coupons}/>
            <ApartmentMap/>
        </div>
    );
};

export default Home;