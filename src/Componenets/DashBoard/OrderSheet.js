import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import FormatPrice from "../Helpers/FormatPrice";

import { DatePicker } from "antd";

import moment from "moment";

const { RangePicker } = DatePicker;

const OrderSheet = () => {
  const [balance, setBalance] = useState([]);
  const [dateFilter, setDateFilter] = useState([]);

  let startDate1 = null,
    startDate2 = null;

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`https://final-defense-project-server-side.vercel.app/cart`, {
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
          console.log(data);
        });
    }
  }, [user, navigate]);

  return (
    <>
      <RangePicker
        className="mb-10"
        onChange={(values) => {
          let flag = true;
          setDateFilter(
            values.map((item) => {
              // console.log(balance);
              // console.log(item);
              if (flag) {
                startDate1 = item;
                flag = false;
              } else startDate2 = item;
              // let data = balance;
              var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
              console.log(item);

              return moment(month[item.$M] + " " + item.$D.toString() + " " + item.$y).format("YYYY-DD-MMMM");
            })
          );
        }}
      />

      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Product Id</th>
              <th>Owner Email</th>
              <th>Order Value</th>
              <th>Order Date</th>
            </tr>
          </thead>
          <tbody className="bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200">
            {balance
              .filter((row) => {
                let filterPass = true;
                let dstirng = row.date.replace(",", "");
                let dlist = dstirng.split(" ");
                let temp = dlist[1];
                temp = temp.substring(0, temp.length - 2);
                dlist[1] = temp;
                dlist.splice(3, 3);
                dstirng = dlist.join(" ");

                let inpd;
                let inpd2;
                const date = parseInt(moment(dstirng).format("YYYYMMDD"));

                if (dateFilter.length == 2) {
                  inpd = parseInt(moment(dateFilter[0]).format("YYYYMMDD"));
                  inpd2 = parseInt(moment(dateFilter[1]).format("YYYYMMDD"));
                  console.log(dateFilter);
                  console.log(inpd, date, inpd2);
                  if (date >= inpd && date <= inpd2) filterPass = true;
                  else filterPass = false;
                }

                if (filterPass) return true;
                else return false;
              })
              .map((order, index, date) => (
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
