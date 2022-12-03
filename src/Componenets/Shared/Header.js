import React from "react";
import logo from "../../images/loogo.png";
import { useCartContext } from "../Conterxt/CartContext";
import { Link,NavLink,useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { useAuthState} from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import FormatPrice from './../Helpers/FormatPrice';
import { TiPlus } from 'react-icons/ti';


const Header = () => {
  const {total_item ,total_price ,shipping_fee} = useCartContext();
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    navigate('/')
    localStorage.removeItem('accessToken')
  };
  const navigate = useNavigate()

  

  const menuItems = (
    <>
      <li className="font-bold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-bold">
        <Link to="/about">About</Link>
      </li>
      <li className="font-bold">
        <Link to="/products">Products</Link>
      </li>
      <li className="font-bold">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="font-bold">
        <Link to="/myReview">Review</Link>
      </li>
      <li className="font-bold">
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 lg:px-44">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <span className=""> {menuItems}</span>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          {" "}
          <img className="lg:w-44 w-20" src={logo} alt="" />{" "}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end ">
        <div className="flex">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle lg:mr-6">
              <div className="indicator lg:ml-0  ml-56">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{total_item}</span>
              </div>
            </label>
            <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">{total_item} Items</span>
                <span className="text-info">Subtotal: <FormatPrice  price={total_price +shipping_fee }> </FormatPrice></span>
                <div className="card-actions">
                  <NavLink to="/cart"><button  className="btn btn-sm text-red-500"><small>View cart</small></button></NavLink>
                </div>
              </div>
            </div>
          </div>
         
          <div class="navbar-end lg:ml-0 ml-44 ">
        {user ?  <div className="dropdown dropdown-end ">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar ">
              <div className="w-8 rounded-full flex   ">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
               
               <NavLink to='/dashboard'><a>Dashboard</a></NavLink>
              
              </li>
              <li>
              <button onClick={logout}> Sing Out </button> 
              </li>
            </ul>
          </div> :  <Link to="/login"> <button class="btn text-black rounded-full  bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-400 hover:duration-500 px-8 border-none"> LogIn </button></Link> }
        
      </div>
  
      

        </div>
      </div>
      <div className="navbar-end">
        <label for="my-drawer-2" tabIndex="1" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <div className="btn text-black rounded-full  bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-400 hover:duration-500 px-8 border-none font-bold ">
      <Link  className="flex  gap-2 justify-center items-center" to="/post"> <TiPlus className="text-xl"/>  Post Your AD</Link>
      </div>
      </div>
     

    </div>
  );
};

export default Header;
