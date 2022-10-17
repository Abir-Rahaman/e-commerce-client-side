import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Partner from '../Partner/Partner';
import OfferSection from './../OfferSection/OfferSection';
import QureySection from './../QureySection/QureySection';
import FeatureProducts from './../FeatureProducts/FeatureProducts';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <FeatureProducts></FeatureProducts>
            <OfferSection></OfferSection>
            <Partner></Partner>
            <QureySection></QureySection>
        </div>
    );
};

export default Home;