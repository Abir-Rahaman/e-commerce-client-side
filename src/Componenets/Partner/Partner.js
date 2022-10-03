import React from 'react';
import partner1 from '../../images/tinified/logo_amazon.png'
import partner2 from '../../images/tinified/logo_avalara.png'
import partner3 from '../../images/tinified/logo_shipstation.png'
import partner4 from '../../images/tinified/logo_stripe.png'
import partner5 from '../../images/tinified/logo_venmo.png'


const Partner = () => {
    return (
        <div className='lg:px-44 my-20 mx-auto'>
            <h1 className="text-center text-3xl font-bold mb-12 text-purple-300"> Our Valuable Trusted Business Partner </h1>
            <div className="lg:bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 py-12 grid grid-cols-1 lg:flex lg:justify-evenly lg:rounded-bl-full lg:rounded-tr-full bg-indigo-700 pl-44 lg:pl-0">
                <img src={partner1} alt="" />
                <img src={partner2} alt="" />
                <img src={partner3} alt="" />
                <img src={partner4} alt="" />
                <img src={partner5} alt="" />
            </div>
        </div>
    );
};

export default Partner;