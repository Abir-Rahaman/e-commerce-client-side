import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate =useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:4000/cart?userEmail=${user.email}`,{
        method:"GET",
        headers:{
          authorization : `Bearer ${localStorage.getItem('accessToken')}`
    

        }
      })
        .then((res) => {
          if(res.status === 401 || res.status === 403 ){
           
            signOut(auth);
            localStorage.removeItem('accessToken')
            navigate('/')
          }
          return res.json()
        
        })
        .then((data) => {

          setOrders(data)
        });
    }
  }, [user]);
  return (

      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Quantity</th>
              <th>Total Price</th>
              <th>shipping Cost</th>
            </tr>
          </thead>
          <tbody>
            {
                orders.map((order,index) => <tr>
                    <th>{index+1}</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    <td>{order.userName}</td>
                    <td>{order.userEmail}</td>
                  </tr> )
            }
           
          
          </tbody>
        </table>
      </div>

  );
};

export default MyOrder;
