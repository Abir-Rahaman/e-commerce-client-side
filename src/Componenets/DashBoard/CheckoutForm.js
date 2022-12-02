import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-hot-toast';

const CheckoutForm = ({order}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [success, setSuccess] = useState('');
  const [cardError , setCardError] = useState('')
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret , setClientSecret] = useState('');
  const {name,price,userEmail,userName,_id} = order;
  useEffect(()=>{
    fetch('http://localhost:4000/create-payment-intent',{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({price})
    })
    .then(res => res.json())
    .then(data => {
      if(data?.clientSecret){
        setClientSecret(data.clientSecret);
      }
    })
    

  },[price])
  const handleSubmit = async(event) => {
    event.preventDefault();
    if(!stripe || !elements){
        return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
  });

   
  if (error) {

    setCardError(error?.message);

}
else {
    setCardError('');
    
}
setSuccess('')
setProcessing(true);

const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
  clientSecret,
  {
      payment_method: {
          card: card,
          billing_details: {
              name: userName,
              email: userEmail,
          },
      },
  },
);

if(intentError){
  setCardError(intentError?.message)
  setProcessing(false)
}else{
  setCardError('')
  setTransactionId(paymentIntent?.id);
  setSuccess('Congratulations! Payment is successfully done')
  const payment ={
    itemId : _id,
    itemPrice:price,
    itemName:name,
    transactionId:paymentIntent.id,
    itemOwner:userName



  }
  fetch(`http://localhost:4000/cart/${_id}`,{
    method:"PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(payment)
  })
  .then(res => res.json())
  .then(data => {
    setProcessing(false)
    console.log(data);
    
  })
}
      
  
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
        <CardElement
            options={{
                style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }}
        />
        <button
            className='btn btn-sm mt-4 btn-primary'
            type="submit"
            disabled={!stripe || !clientSecret }>
            Pay
        </button>
    </form>
    <p className="text-red-500">{cardError}</p>
    {
        success && <div>
            <p className='text-green-500'><small className='font-bold'>{success}</small></p>
            <small>Your transactionId: <span className='font-bold text-black'>{transactionId}</span></small>
        </div>
    }
</>
  );
};
export default CheckoutForm;
