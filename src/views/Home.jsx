import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom";

import { CheckoutSuccess } from "./CheckoutSuccess";

import { Button } from "../components/Button";
import { Text } from "../components/Text";
import { ErrorMessage } from "../components/ErrorMessage";

export const Home = () => {
    const [cartId, setCartId] = useState("");
    const [error, setError] = useState("");

    const navigateTo = useNavigate();
    const location = useLocation();

    const handleSetCartId = (event) => setCartId(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!cartId) return setError("Please provide a cart id to continue.");

        setError("");

        navigateTo(`/checkout/${cartId}`);
    }

    return (
        !location.search.includes("payment_intent")
            ? <main className="flex flex-col items-center justify-center p-8 w-full h-screen">
                <section className="flex flex-col gap-8 max-w-[400px]">
                    <div className="flex flex-col items-center gap-2 w-full">
                        <Text type="h1">EPIRTS <span className="text-xl">&reg;</span></Text>
                        <Text type="h5">Purchase all your favorite products in the same place. Yes, all, we've them all.</Text>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex  items-center justify-center gap-2 w-full">
                            <Text type="label">My cart number identifier is</Text>
                            <input type="text" onChange={handleSetCartId} placeholder="507f1f77bcf86cd799439011" className="py-1 border-b-2 border-black flex-1 outline-none w-full"/>
                        </div>
                        <Button type="submit">Finish my order</Button>
                        {
                            error && <ErrorMessage>Please provide a cart id to continue.</ErrorMessage>
                        }
                    </form>
                    <div className="flex flex-col gap-2">
                        <Text type="small">This is not a great ecommerce interface but this is the most our lazy developer can do, well, not that lazy, have many responsibilities to take care of at the same time but do the best in each one.</Text>
                        <span  className="text-center text-xs text-gray-400">If you're an administrator try our <Link to="/admin" className="underline">developer mode</Link>.</span>
                    </div>
                    <a href="https://www.linkedin.com/in/leonelombardo" target="_blank" className="text-center text-xs text-gray-400">This project was built by <span className="underline">Leonel Lombardo</span>.</a>
                </section>
            </main>
            : <CheckoutSuccess/>
    )
}