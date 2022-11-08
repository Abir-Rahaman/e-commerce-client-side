import React from 'react';
import HomeProducts from '../HomeProducts/HomeProducts';

const GridView = ({products }) => {


    
   
    return (
        <div className='grid grid-cols-3 gap-20 my-20'>
            {
                products.map((curElem)=>{
                        return<HomeProducts key={curElem.id } {...curElem}></HomeProducts>
                })
            }
        </div>
    );
};

export default GridView;