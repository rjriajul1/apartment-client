import React from 'react';
import Banner from './banner/Banner';
import AboutBuilding from './aboutBuilding/AboutBuilding';
import Coupons from './coupons/Coupons';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutBuilding/>
            <Coupons/>
        </div>
    );
};

export default Home;