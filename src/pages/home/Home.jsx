import React from 'react';
import Banner from './banner/Banner';
import AboutBuilding from './aboutBuilding/AboutBuilding';
import Coupons from './coupons/Coupons';
import ApartmentMap from './apartmentMap/ApartmentMap';
import { useLoaderData } from 'react-router';
import OverView from '../overView/OverView';

const Home = () => {
    const coupons = useLoaderData()
 
   
    return (
        <div>
            <title>Home</title>
            <Banner/>
            <AboutBuilding/>
            <Coupons coupons={coupons}/>
            <OverView/>
            <ApartmentMap/>
        </div>
    );
};

export default Home;