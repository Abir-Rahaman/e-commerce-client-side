import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useCartContext } from "../Conterxt/CartContext";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setIncrease, setDecrease } = useCartContext();
 

 

  return (
    <tr>
      <td>
        <div class="avatar">
          <div class="w-14 rounded">
            <img src={image} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>
        <FormatPrice price={price} />
      </td>
      <div className="flex gap-4 py-12 ml-6">
        <div className="">
          <button onClick={() => setDecrease(id)} class="text-white">
            <FaMinus className="text-xs text-black" />
          </button>
        </div>

        <div class="avatar placeholder">
          <div class=" text-black  font-bold rounded-xl ">
            <span> {amount}</span>
          </div>
        </div>

        <div>
          <button onClick={() => setIncrease(id)} class="">
            <BsPlusLg className="text-xs text-black" />
          </button>
        </div>
      </div>

      <td>
        <FormatPrice price={price * amount} />
      </td>
      <td>
        <button onClick={() => removeItem(id)} class="btn bg-transparent rounded-full">
          <RiDeleteBin7Fill className="text-xl text-red-500" />
        </button>
      </td>
      <hr />
    </tr>
  );
};

export default CartItem;
