import React from "react";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label for="my-drawer-2" class="btn btn-success drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>

        <ul class="menu p-4 w-80 bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 text-base-content">
          <div class="card  bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 shadow-xl">
            <div class="card-body">
              <h1 className="text-4xl text-orange-400 font-bold">My Account</h1>
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
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
