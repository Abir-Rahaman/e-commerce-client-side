import React from 'react';
import { useFilterContext } from '../Conterxt/FilterContext';
import FilterSection from '../FilterSection/FilterSection';
import ProductList from '../ProductList/ProductList';
import Sort from '../Sort/Sort'
import { useState } from 'react';
import { useEffect } from 'react';


const Products = () => {
 

    return (
      <>
        <div className='flex flex-row'>
           <div className="basis-1/4">
             <FilterSection></FilterSection>
           </div>

           <div className="">
            <Sort></Sort>
             <ProductList></ProductList>
           </div>
        </div>
        </>
    );
};

export default Products;