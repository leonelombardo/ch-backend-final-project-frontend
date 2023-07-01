import { BACKEND_HOST_URL, CARTS_ENDPOINT } from "../config/endpoints.config";

export const getCart = async (id) => {
    const endpoint = `${BACKEND_HOST_URL}${CARTS_ENDPOINT}/${id}`;

    try{
        const response = await fetch(endpoint);
        const json = await response.json();

        return json;
    }catch(error){
        throw new Error(error);
    }
}