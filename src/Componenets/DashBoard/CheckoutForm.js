import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError , setCardError] = useState('')
  const handleSubmit = async(event) => {
    event.preventDefault();
    if(!stripe || !elements){
        return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

   
     setCardError(error?.message || '');
      
  
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-xs mt-6 bg-green-500 text-white border-none" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {
        cardError && <p className="text-red-600 font-bold"> <small>{cardError}</small> </p>
      }
    </div>
  );
};

export default CheckoutForm;
