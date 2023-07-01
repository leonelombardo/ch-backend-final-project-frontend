import { BACKEND_HOST_URL, LOGIN_ENDPOINT } from "../config/endpoints.config";

export const login = async (email, password) => {
    const endpoint = `${BACKEND_HOST_URL}${LOGIN_ENDPOINT}`;

    try{
        const options = { 
            method: "post",
            body: JSON.stringify({ email: email, password: password }),
            headers: { "Content-Type": "application/json" }
        };

        const response = await fetch(endpoint, options);
        const user = await response.json();

        return user;
    }catch(error){
        throw new Error(error);
    }
}