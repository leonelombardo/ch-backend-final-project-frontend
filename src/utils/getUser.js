import { BACKEND_HOST_URL, USERS_ENDPOINT } from "../config/endpoints.config";

export const getUser = async (id) => {
    if(!id) return;

    const endpoint = `${BACKEND_HOST_URL}${USERS_ENDPOINT}/${id}`

    try{
        const response = await fetch(endpoint);
        const json = await response.json();

        if(json.response.length) return;

        if(json.ok) return json.response;
    }catch(error){
        throw new Error(error);
    }
};