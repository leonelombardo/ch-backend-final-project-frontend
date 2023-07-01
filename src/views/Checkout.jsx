import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { CheckoutProducts } from "../components/CheckoutProducts";
import { CheckoutForm } from "../components/CheckoutForm";
import { Text } from "../components/Text";
import { Button } from "../components/Button";

import { createPaymentIntent } from "../services/createPaymentIntent";
import { getCart } from "../utils/getCart";

import { STRIPE_PUBLIC_KEY } from "../config/payments.config";

export const Checkout = () => {
    const { cartId } = useParams();
    const [error, setError] = useState(false);
    const [cart, setCart] = useState([]);
    const [productsTotal, setProductsTotal] = useState(0);
    const [clientSecret, setClientSecret] = useState();

    const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

    useEffect(() => {
        (async () => {
            try{
                const cart = await getCart(cartId);
    
                if(!cart.ok) return setError("Cart not found.");

                const total = cart.response.products.reduce((acc, item) => (item.product.price * item.quantity) + acc, 0)
                
                setCart(cart.response);
                setProductsTotal(total);
                setError(false);
                
                const paymentIntent = await createPaymentIntent(total);
    
                setClientSecret(paymentIntent.response.client_secret);
            }catch(error){
                setError("Please try again later.");
            }
        })();
    }, []);

    return (
        error
            ? <main className="flex justify-center h-screen">
                <div className="flex flex-col  gap-4 m-auto">
                    <Text type="h3">{error}</Text>
                    <Link to="/">
                        <Button>Try other search</Button>
                    </Link>
                </div>
            </main>
            : clientSecret &&
                <main className="flex flex-col sm:flex-row w-full h-screen">
                    <CheckoutProducts cart={cart} total={productsTotal}/>
                    <div className="flex flex-col gap-4 p-8 items-center bg-gray-50 h-full flex-1">
                        <div className="flex flex-col gap-12 items-center max-w-[500px] m-auto">
                            <Text type="h2">EPIRTS <span className="text-xl">&reg;</span></Text>
                            <Elements stripe={stripePromise} options={{ clientSecret: clientSecret }}>
                                <CheckoutForm/>
                            </Elements>
                        </div>
                    </div>
                </main>
    )
}