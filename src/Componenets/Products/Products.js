import React from 'react';
import { useFilterContext } from '../Conterxt/FilterContext';
import FilterSection from '../FilterSection/FilterSection';
import ProductList from '../ProductList/ProductList';
import Sort from '../Sort/Sort'


const Products = () => {
    
    return (
        <div className='flex'>
           <div className="">
             <FilterSection></FilterSection>
           </div>

           <div className="">
              <Sort></Sort>
             <ProductList></ProductList>
           </div>
        </div>
    );
};

export default Products;