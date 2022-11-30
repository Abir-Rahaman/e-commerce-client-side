import React, { useEffect, useState } from "react";
import { useProductContext } from "../Conterxt/ProductContext";
import Spinner from "./../Shared/Spinner";
import Details from "./Details";

const ShowOldProducts = () => {
  const { isLoading } = useProductContext();

  const [oldProducts, serOldProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/oldProduct")
      .then((res) => res.json())
      .then((data) => serOldProducts(data));
  }, []);
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
  
      <div className="text-center">
        <p className="text-purple-400 font-bold mb-4">
          <small>BEST TV SERIES</small>
        </p>
        <h1 className="text-3xl  font-bold ">Find Your Old Needy Products Here..</h1>
        <div className="grid grid-cols-3 justify-center items-center">
          {oldProducts.map((product, i) => (
            <Details product={product}></Details>
          ))}
        </div>
      </div>
  
  );
};

export default ShowOldProducts;
