import React, { useState } from 'react';
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import FormatPrice from "../Helpers/FormatPrice";

const OrderSheet = () => {
    const [balance, setBalance] = useState([]);
    console.log(balance)


  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:4000/cart`, {
        method: "GET",
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
            setBalance(data);
        });
    }
  }, [user, navigate]);
    return (
        <>
        <div class="overflow-x-auto">
          <table class="table table-zebra w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Product Id</th>
                <th> Owner Email</th>
                <th>Order Value</th>
                <th>Order Date</th>
              </tr>
            </thead>
            <tbody className="bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200">
              {balance.map((order, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{order.cartId}</td>
                  <td>{order.userEmail}</td>
                  <td>
                    <FormatPrice price={order.total_price}></FormatPrice>
                  </td>
                  <td>{order.date}</td>

               
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default OrderSheet;