import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "../Conterxt/ProductContext";
import PageNavigation from "../Shared/PageNavigation";
import Spinner from "./../Shared/Spinner";
import SingleProductImg from "../SingleProductImg/SingleProductImg";
import FormatPrice from "./../Helpers/FormatPrice";
import { BsBicycle } from "react-icons/bs";
import { BiRecycle } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import Rating from "./../Shared/Rating";
import AddToCart from "./../Shared/AddToCart";
import { useState } from "react";
import PageTitle from "./../Shared/PageTitle";

const SingleProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://final-defense-project-server-side-abir-rahaman-abir-rahaman.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const { id } = useParams();

  return (
    <div>
      <PageTitle title="single product"></PageTitle>
      <PageNavigation title={products.name}></PageNavigation>
      <div className="flex justify-center gap-28 mt-8">
        <div className="">
          <SingleProductImg imgs={products.image}></SingleProductImg>
        </div>
        <div className="">
          <h1 className="text-2xl ">{products.name}</h1>
          <Rating star={products.stars} review={products.reviews}></Rating>
          <small>
            <del>{<FormatPrice price={products.price + 250000}></FormatPrice>}</del>
          </small>
          <p className="font-bold text-purple-700 mb-4">Deal of the day: {<FormatPrice price={products.price}></FormatPrice>}</p>
          <p className="w-96 ">
            <small>{products.description}</small>
          </p>
          <div className="flex gap-8 my-4">
            <div className="">
              <p className="text-4xl flex justify-center text-slate-500">
                <BsBicycle />
              </p>
              <h1 className="font-bold">
                <small>Free Delivery</small>
              </h1>
            </div>
            <div className="">
              <p className="text-4xl flex justify-center text-slate-500">
                {" "}
                <BiRecycle />
              </p>
              <h1 className="font-bold">
                <small>1d Replacement</small>
              </h1>
            </div>
            <div className="">
              <p className="text-4xl flex justify-center text-slate-500">
                {" "}
                <AiOutlineFundProjectionScreen />
              </p>
              <h1 className="font-bold">
                <small>Unlimited Review</small>
              </h1>
            </div>
            <div className="">
              <p className="text-4xl flex justify-center">
                {" "}
                <FcApproval />
              </p>
              <h1 className="font-bold">
                <small>2 yeas Warranty</small>
              </h1>
            </div>
          </div>
          <div class="divider"></div>
          <p>
            <small className="font-bold"> available : {products.stock > 0 ? "in stock" : "Not Available"} </small>
          </p>
          <p>
            <small className="font-bold">Brand : {products.company}</small>
          </p>
          <div class="divider"></div>
          {products.stock && <AddToCart products={products}></AddToCart>}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
