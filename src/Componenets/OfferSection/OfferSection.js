import React from "react";
import { TbTruckDelivery } from 'react-icons/tb';
import { TbSchool } from 'react-icons/tb';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';


const OfferSection = () => {
  return (
   <div className="my-20">
    <h1 className="text-center text-3xl font-bold mb-12 text-purple-400"> Our Target Market Based Only Student</h1>
    <div className="lg:flex justify-evenly lg:px-0  px-6">
      <div class="card bg-base-100 shadow-xl flex items-center lg:h-70  bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200">
        <div class="card-body flex items-center mt-16">
          <h2 class="card-title text-5xl"> <TbTruckDelivery/></h2>
          <p className=" font-bold">Super First & Free Delivery in Campus area.</p>
        </div>
      </div>
     <div className="lg:my-0 my-6">
     <div class="card bg-base-100 shadow-xl  flex items-center h-32 bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 mb-4">
        <div class="card-body flex items-center ">
          <h2 class="card-title text-4xl"> <TbSchool/></h2>
          <p className=" font-bold">Student's Friendly Products Only.</p>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl flex items-center h-32 bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200">
        <div class="card-body flex items-center mb-12">
          <h2 class="card-title text-4xl"> <FaMoneyBillAlt/></h2>
          <p className=" font-bold">Easy Return & Refund Policy</p>
        </div>
      </div>
     </div>
     <div class="card bg-base-100 shadow-xl flex items-center h-70 bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200">
        <div class="card-body flex items-center mt-16">
          <h2 class="card-title text-3xl"> <MdPayment/></h2>
          <p className=" font-bold">Easy & Secure Payment System </p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default OfferSection;
