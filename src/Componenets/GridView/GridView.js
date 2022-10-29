import React from 'react';
import HomeProducts from '../HomeProducts/HomeProducts';

const GridView = ({products }) => {


    
   
    return (
        <div>
            {
                products.map((product)=>{
                        return<HomeProducts key={product.id } {...product}></HomeProducts>
                })
            }
        </div>
    );
};

export default GridView;