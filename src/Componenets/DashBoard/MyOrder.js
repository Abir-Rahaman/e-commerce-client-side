import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { RiDeleteBin7Fill } from "react-icons/ri";
import FormatPrice from "../Helpers/FormatPrice";
import { toast } from "react-hot-toast";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`https://final-defense-project-server-side.vercel.app/cart?userEmail=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
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
          setOrders(data);
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
              <th>Product Price</th>
              <th> Owner Email</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200">
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.cartId}</td>
                <td>
                  <FormatPrice price={order.total_price}></FormatPrice>
                </td>

                <td>{order.userEmail}</td>
                <td>
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-primary btn-sm">Pay</button>
                    </Link>
                  )}
                  {order.price && order.paid && (
                    <div>
                      <span className="text-green-500">
                        <small className="font-bold">Paid</small>
                      </span>{" "}
                      <br />
                      {/* <span className="text-green-500"><small className="font-bold">Transaction id: <br />{order.transactionId}</small></span> */}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyOrder;
