import { BACKEND_HOST_URL, USERS_ENDPOINT } from "../config/endpoints.config";

export const deleteUser = async (id) => {
    if(!id) return;

    const endpoint = `${BACKEND_HOST_URL}${USERS_ENDPOINT}/${id}`;

    try{
        const response = await fetch(endpoint, { method: "delete" });
        const json = await response.json();

        return json.ok;
    }catch(error){
        throw new Error(error); 
    }
}