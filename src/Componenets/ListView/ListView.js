import React from "react";
import { NavLink } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <div>
      {products.map((curElem) => {
        const { id, name, image, description } = curElem;
        return (
          <div class=" card lg:card-side bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200  shadow-xl my-20">
            <figure>
              <img className="w-80 " src={image} alt="Album" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{name}</h2>
              <p className="lg:w-80">{description.slice(0,90)}...</p>
              <div class="card-actions ">
                <NavLink to={`/singleProduct/${id}`}>
                  <button class="btn btn-outline btn-success">Details info</button>
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
