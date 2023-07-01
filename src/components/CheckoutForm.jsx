import { useState } from 'react';
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

import { Button } from './Button';
import { ErrorMessage } from './ErrorMessage';

import { FRONTEND_HOST_URL } from '../config/endpoints.config';

export const CheckoutForm = () => {
  const [error, setError] = useState();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!stripe || !elements) return;

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${FRONTEND_HOST_URL}/`,
      }
    });

    if(result.error){
      setError("Please try again later.")
    }else{
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <PaymentElement />
      <Button type="submit" disabled={!stripe}>Pay</Button>
      <ErrorMessage>{error}</ErrorMessage>
    </form>
  )
};