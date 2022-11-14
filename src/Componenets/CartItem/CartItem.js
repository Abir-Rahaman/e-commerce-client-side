import React from 'react';
import FormatPrice from '../Helpers/FormatPrice';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import {useCartContext} from "../Conterxt/CartContext"


const CartItem = ({id,name,image,color,price,amount}) => {
   const {removeItem} = useCartContext();
   
    return (
     
        <tr>
        <td><div class="avatar">
            <div class="w-14 rounded">
                <img src={image} alt={name} />
            </div>
        </div></td>
        <td>{name}</td>
        <td><FormatPrice price={price}/></td>
        <td>{amount}</td>
        <td><FormatPrice price={price*amount}/></td>
        <td>
            <button onClick={() => removeItem(id)} class="btn bg-transparent rounded-full"><RiDeleteBin7Fill className='text-xl text-red-500'/></button>
            
        </td>
        <hr />
        
        

    </tr>
    
  
    );
};

export default CartItem;