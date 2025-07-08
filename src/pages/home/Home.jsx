import React from 'react';
import Banner from './banner/Banner';
import AboutBuilding from './aboutBuilding/AboutBuilding';
import Coupons from './coupons/Coupons';
import ApartmentMap from './apartmentMap/ApartmentMap';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutBuilding/>
            <Coupons/>
            <ApartmentMap/>
        </div>
    );
};

export default Home;