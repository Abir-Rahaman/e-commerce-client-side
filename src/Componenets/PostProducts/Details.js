import React from "react";
import { IoTimer } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { TbPhoneCall } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import FormatPrice from "../Helpers/FormatPrice";

const Details = ({ product }) => {
  const { name, price, condition, duration, number, email, room, description, image } = product;
  return (
    <div className="my-0">
      <div className="text-center">
        <div className="lg:flex lg:gap-12 my-20 lg:mx-20 mx-14">
          <div class="card card-compact w-96 bg-base-100 shadow-2xl border-2 bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200pt-6 rounded-none	 lg:mb-0 mb-20">
            <figure>
              <img src={image} alt="Shoes" />
            </figure>
            <div class="card-body">
              <div className="">
                <h2 className="font-bold text-gray-500 text-xl mb-2">Product Name: {name}</h2>
                <h2 className="text-purple-400 font-bold ">
                  <FormatPrice price={price}></FormatPrice>
                </h2>
              </div>

                <h2 className="font-bold  text-purple-400 text-center">Room No:{room}</h2>
              <p className="font-bold text-purple-500">Products Description</p>
              <p className="border-2 border-purple-500 rounded-xl ">{description}</p>
              <div className="pt-4 flex justify-between">
                <div className="">
                  <p class="px-3  font-bold pt-1  pb-1 flex gap-2"> <TbPhoneCall className="text-xl  text-purple-400"/> {number}</p>
                  <h2 className="font-bold  text-center flex items-center gap-1"><MdEmail className="text-xl text-purple-400"/>
                 {email}
                </h2>
                </div>
                <div className="">
                  <p class="font-bold flex items-center ">
                    
                    <span className="text-xl text-purple-400 text-center">
                      <IoTimer />
                    </span>
                    {duration}
                  </p>
                  <p class="font-bold flex items-center my-2">
                    <span className="text-xl text-purple-400">
                      <AiFillLike />
                    </span>
                    {condition}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
