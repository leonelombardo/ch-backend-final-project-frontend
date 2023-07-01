import { BACKEND_HOST_URL, VALIDATE_ADMIN_ENDPOINT } from "../config/endpoints.config";

export const validateToken= async (token) => {
    const endpoint = `${BACKEND_HOST_URL}${VALIDATE_ADMIN_ENDPOINT}`;
    
    const options = {
        method: "post",
        body: JSON.stringify({ token }),
        headers: { "Content-Type": "application/json" }
    }

    try{
        const response = await fetch(endpoint, options);
        const jwt = await response.json();

        return jwt;
    }catch(error){
        throw new Error(error);
    }
}