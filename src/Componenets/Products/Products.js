import React from 'react';
import FilterSection from '../FilterSection/FilterSection';
import ProductList from '../ProductList/ProductList';
import Sort from '../Sort/Sort'
import PageTitle from './../Shared/PageTitle';


const Products = () => {
 

    return (
      <>
      <PageTitle title='all products'></PageTitle>
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