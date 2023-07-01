import { BACKEND_HOST_URL, PAYMENTS_STRIPE_ENDPOINT } from "../config/endpoints.config";

export const createPaymentIntent = async (total) => {
    const url = `${BACKEND_HOST_URL}${PAYMENTS_STRIPE_ENDPOINT}`;
    
    const options = {
        method: "post",
        body: JSON.stringify({ total: total  }),
        headers: {
            "Content-Type": "application/json"
        }
    };

    const response = await fetch(url , options)
    const json = await response.json();

    return json;
}