import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdAccountCircle } from 'react-icons/md';



const DashBoard = () => {
  return (
    <div class="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col m-24 ">
        <Outlet></Outlet>
       
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>

        <ul class="menu p-4 w-80 bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 text-base-content lg:m-6 rounded-3xl">
          <div class="card  bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 shadow-xl ">
            <div class="card-body">
              <h1 className="text-2xl text-white font-bold flex gap-2 justify-center items-center"> <MdAccountCircle className="text-3xl text-white"/> My Account</h1>
              <li>
              <Link to="/dashboard">  <a>Account Information</a></Link>
              </li>
              <li>
              <Link to="/dashboard/allUsers">  <a>All Users</a></Link>
              </li>
              <li>
              <Link to="/dashboard/myOrder">  <a>My Order</a></Link>
              </li>
              <li>
              <Link to="/dashboard/myReview">  <a>My Product Reviews</a></Link>
              </li>
            </div>
          </div>
          {/* <!-- Sidebar content here --> */}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
