import React from 'react';
import FormatPrice from '../Helpers/FormatPrice';
import { RiDeleteBin7Fill } from 'react-icons/ri';


const CartItem = ({id,name,image,color,price,amount}) => {
    console.log(id)
   
    return (
     
        <tr>
        <th>{1}</th>
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
            <label for="delete-confirm-modal" class="btn bg-transparent rounded-full"><RiDeleteBin7Fill className='text-xl text-red-500'/></label>
            
        </td>
        <hr />
        
        

    </tr>
    
  
    );
};

export default CartItem;