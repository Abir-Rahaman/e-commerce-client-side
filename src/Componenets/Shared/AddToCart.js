import React from 'react';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import CartAmount from '../CartAmount/CartAmount';
import { useCartContext } from '../Conterxt/CartContext';




const AddToCart = ({products}) => {
    
    const {colors , stock,id} = products;
    const [color,setColor] = useState(colors)
    
    const { addToCart } = useCartContext();
    const [amount,setAmount] = useState(0)
    const setIncrease = () =>{
        amount > 1 ? setAmount(amount-1) : setAmount(1) 
    }
    const setDecrease = () =>{
        amount < stock ? setAmount(amount+1) : setAmount(stock) 
    }

   

  
    
    
   
    return (
        <div>
            <div className="">
                <p className=''>Color: 
                {
                    colors.map((col, i) =>{ 
                        return(<button
                             
                             key={i}
                              style={{backgroundColor:col}}
                              className={ color === col? " opacity-100 ml-4 border-none outline-none   w-4 bg-black rounded-full hover:opacity-100 ":"w-4 ml-4 bg-black rounded-full opacity-25 hover:opacity-100"}
                              onClick={()=>setColor(col)}>
                             {color ===  col ? <FaCheck className='text-white w-3 pl-1'/> : <ImCross className='text-white w-3 pl-1'/>}
                             </button>)
                    })
                }
                </p>
            </div>
            <CartAmount  products={products} amount={amount} setAmount={setAmount} setDecrease={setDecrease} setIncrease={setIncrease}  addToCart={addToCart}></CartAmount>

            
        </div>
    );
};

export default AddToCart;