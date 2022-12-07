import React from "react";
import CartItem from "../CartItem/CartItem";
import { useCartContext } from "../Conterxt/CartContext";
import { Link } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { toast } from "react-hot-toast";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  const [user] = useAuthState(auth);

  const handleBooking = () => {
    const cartProducts = {
      cartId: cart[0].id,
      name: cart[0].name,
      userEmail: user.email,
      userName: user.displayName,
      total_price,
      shipping_fee,
      price: total_price + shipping_fee,
      item: cart,
    };

    fetch("https://final-defense-project-server-side-abir-rahaman-abir-rahaman.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartProducts),
    })
      .then((res) => res.json)
      .then((data) => {
        if (data) {
          toast.success("Please Provide Your Address");
        }
      });
  };

  if (cart.length === 0) {
    return (
      <div className="h-80 flex justify-center items-center text-4xl font-bold text-white-600 bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 shadow-xl ">
        <h1 className="p-32">No item in cart...</h1>
      </div>
    );
  }

  return (
    <>
      <div class="overflow-x-auto flex px-24 py-8 gap-24 ">
        <table class="table w-full">
          <thead>
            <tr>
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
        <div class="card w-96 h-48  bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 shadow-xl rounded-2xl flex ">
          <div class="card-body ">
            <h2 class="">
              Subtotal : <FormatPrice price={total_price}></FormatPrice>{" "}
            </h2>
            <h2 class="my-2">
              Shipping Fee : <FormatPrice price={shipping_fee}></FormatPrice>{" "}
            </h2>

            <div className="w-full h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"></div>
            <h2 class="card-title">
              Total Order :<FormatPrice price={total_price + shipping_fee}></FormatPrice>{" "}
            </h2>
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-6 flex gap-12 ml-24 pb-10 ">
        <Link to="/products" class="px-8  py-3 rounded-none bg-purple-800 text-white border-none">
          {" "}
          Continue Shopping
        </Link>
        <button onClick={() => clearCart()} class="px-8  py-3 rounded-none bg-red-800 text-white border-none">
          Clear Cart
        </button>
        <Link
          to="/cart/checkOut"
          onClick={() => handleBooking()}
          class="btn btn-wide ml-auto  rounded-none bg-green-800 text-white border-none mx-28"
        >
          PROCEED TO CHECKOUT
        </Link>
      </div>
    </>
  );
};

export default Cart;
