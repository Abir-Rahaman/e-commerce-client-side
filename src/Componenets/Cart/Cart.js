import React from "react";
import CartItem from "../CartItem/CartItem";
import { useCartContext } from "../Conterxt/CartContext";

const Cart = () => {
  const { cart } = useCartContext();
  console.log(cart);
  return (
    <>
      <div class="overflow-x-auto w-full px-44 py-12">
        <table class="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>Item</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity </th>
              <th>Subtotal</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((curElem) => (
              <CartItem key={curElem.id} {...curElem}></CartItem>
            ))}
          </tbody>
        </table>
      </div>
      <hr />
      <div className="mt-6 flex justify-around ">
        <button class="px-8  py-3 rounded-none bg-purple-800 text-white border-none"> Continue Shopping</button>
        <button class="px-8  py-3 rounded-none bg-red-800 text-white border-none">Clear Cart</button>
      </div>
      <div class="card w-96 my-8  bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 shadow-xl rounded-2xl mx-40 ml-auto">
        <div class="card-body ">
          <h2 class="">Subtotal : </h2>
          <h2 class="my-2">Shipping Fee : </h2>

          <div className="w-full h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"></div>
          <h2 class="card-title">Total Order : </h2>
        </div>
      </div>
    </>
  );
};

export default Cart;
