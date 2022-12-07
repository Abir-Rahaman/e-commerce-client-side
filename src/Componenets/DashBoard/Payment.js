import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import FormatPrice from "./../Helpers/FormatPrice";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51L18qLA4o5tgtQUCryMTWsArjQnagTRL3XcMoVH0cAkohaEhOUYXvMKqPe9i6FqYQoJjrJ2ZVxyPaYiEpoWkLNxP00Asyqdyam");

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:4000/cart/${id}`;
  const { data: order, isLoading } = useQuery(["order", id], () => fetch(url).then((res) => res.json()));
  const [user] = useAuthState(auth);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mx-auto ">
      <div class="card w-96 bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 shadow-xl mb-12">
        <div class="card-body">
          <small className="font-bold">
            Hello, <span className="text-green-600">{user.displayName} </span>
          </small>
          <h2 class="card-title">
            Please Pay for <span className="text-green-600">{order.name}</span>
          </h2>
          <p className="font-bold">
            Your Payable Amount :{" "}
            <span className="text-green-600">
              <FormatPrice price={order.price}></FormatPrice>
            </span>
          </p>
        </div>
      </div>
      <div class="card w-96 bg-gradient-to-r from-green-300 via-red-100 to-orange-300 ">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
