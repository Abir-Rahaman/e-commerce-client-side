import React from "react";
import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';



const CartAmount = ({ setIncrease, setDecrease,addToCart ,products,amount}) => {
  const { id, color, stock } = products;



 
  return (

 
    <div className="flex gap-4 py-12">
      <div >
        <button onClick={() => setIncrease()} class="btn btn-error">
       <FaMinus className="font-bold text-white"/>
        </button>
      </div>
      <div class="avatar placeholder">
        <div class="bg-purple-700 text-white  font-bold rounded-xl w-12">
          <span> {amount}</span>
        
        </div>
      </div>

      <div className="">
        <button onClick={() => setDecrease()} class="btn btn-error">
        <BsPlusLg className="font-bold text-white"/>
        
        </button>
          
      </div>

    <NavLink to="/cart">  <button onClick={()=>addToCart(id,color,amount,products)} class="btn btn-wide bg-error border-none text-black font-bold hover:bg-red-400">Add To Cart</button></NavLink>
   
    </div>
  );
};

export default CartAmount;
