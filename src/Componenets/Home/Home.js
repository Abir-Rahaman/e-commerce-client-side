import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Partner from '../Partner/Partner';
import OfferSection from './../OfferSection/OfferSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <OfferSection></OfferSection>
            <Partner></Partner>
        </div>
    );
};

export default Home;