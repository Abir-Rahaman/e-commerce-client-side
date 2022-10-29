import React, { useState,useEffect } from "react";
import All from './../All/All';


const ProductList = () => {

    const [products,setProducts] =useState([]);
    useEffect(()=>{
        fetch("https://api.pujakaitem.com/api/products")
        .then(res => res.json())
        .then(data=> setProducts(data));
    },[])
 
  return (
  <div className=" my-20 ">
    <h1  className="text-center my-20  text-xl text-red-600 font-bold ">All Items {products.length}</h1>
    <div className="grid grid-cols-3 gap-12 mx-36  justify-items-center">
         {
            products.map(product => {
                 return<All product={product}></All> 
            })
         }
       </div>
  </div>
       
  );
};
export default ProductList;
