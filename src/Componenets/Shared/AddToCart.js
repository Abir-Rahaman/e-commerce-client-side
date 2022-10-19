import React from 'react';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';


const AddToCart = ({singleProduct}) => {

    const {colors , stock,id} = singleProduct;
   
    const [color,setColor] = useState(colors[0])
    console.log(singleProduct)
    return (
        <div>
            <div className="">
                <p>Colors: 
                {
                    colors.map((col, i) =>{
                        return <button key={i} style={{backgroundColor:col}} className={color === col ? 'w-4 rounded-full ml-6 active': 'dfdfg'} >  { color === col ?<FaCheck className='text-white w-3 ml-1 '/> : null  } </button>
                    })
                }
                </p>
            </div>
        </div>
    );
};

export default AddToCart;