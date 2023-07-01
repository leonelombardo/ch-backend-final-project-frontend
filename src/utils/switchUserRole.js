import { BACKEND_HOST_URL, EDIT_USER_ROLE_ENDPOINT } from "../config/endpoints.config";

export const switchUserRole = async (id, role, token) => {
    const endpoint = `${BACKEND_HOST_URL}${EDIT_USER_ROLE_ENDPOINT}/${id}/role`;
    
    try{
        const options = {
            method: "post",
            body: JSON.stringify({ id , role, token }),
            headers: {
                "Content-Type": "application/json"
            }
        }

        const response = await fetch(endpoint, options);
        const json = await response.json();

        return json;
    }catch(error){
        throw new Error(error);
    }
}