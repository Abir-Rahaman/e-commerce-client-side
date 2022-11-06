
import React from 'react';
import { useProductContext } from '../Conterxt/ProductContext';
import HomeProducts from '../HomeProducts/HomeProducts';
import Spinner from './../Shared/Spinner';

const FeatureProducts = () => { 
    const {isLoading ,  featureProducts } = useProductContext();

    if(isLoading){
        return <Spinner></Spinner>;
    }
     
    return (
        <div className='my-24'>
            <div className="mx-36 pb-6">
            <p className=" text-slate-700 ">IMPRESSIVE FEATURES.</p>
            <h1 className=" text-3xl font-bold  text-purple-400 mb-6">Check & Choose Feature Collections.</h1>
            </div>
            <div className="flex justify-evenly ">
              {featureProducts.map((curElem)  => (<HomeProducts key={curElem.id} {...curElem}></HomeProducts>))}
            </div>

            
        </div>
    );
};

export default FeatureProducts;