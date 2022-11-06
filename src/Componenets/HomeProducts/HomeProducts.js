import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const HomeProducts = ( curElem ) => {
  const { image, name, company, price, category ,id } = curElem;
  return (
    <>
    <div class="card w-80  bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 shadow-xl rounded-none">
     <NavLink to={`/singleProduct/${id}`}>
     <figure class="">
        <img src={image} alt="Shoes" class=" hover:scale-110 duration-500 " />
      </figure>
     </NavLink>
      <div class="card-body">
        <h2 class="card-title">
          {name}
          <div class="badge badge-secondary ">
            <small>NEW</small>
          </div>
        </h2>
        <p>
          <span className="font-bold">Catagories :</span> {category}
        </p>
        <p className="text-xl font-bold text-center text-purple-700">
   
         <small> {<FormatPrice price={price}></FormatPrice>}</small>
        </p>
        <div class="rating mx-auto w-20">
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 " />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 " checked />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 " />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 " />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 " />
        </div>

        <div class="card-actions flex justify-center">
          <button class="btn btn-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:duration-500 border-none text-white "><small>Details</small></button> 
          <button class="btn btn-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:duration-500 border-none text-white"> <small>Like</small></button> 
        </div>
      </div>
     
    </div>
      
    </>
  );
};

export default HomeProducts;
