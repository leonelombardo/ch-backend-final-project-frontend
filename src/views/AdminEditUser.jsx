import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { GlobalContext } from "../context/GlobalContext";

import { InputAdmin } from "../components/InputAdmin";
import { EditUserInformation } from "../components/EditUserInformation";

import { getUser } from "../utils/getUser";
import { validateToken } from "../utils/validateToken";
import { AdminNotification } from "../components/AdminNotification";

export const AdminEditUser = () => {
    const [id, setId] = useState("");
    const [user, setUser] = useState("");
    const [showNotification, setShowNotification] = useState(false);
    const { token, setToken } = useContext(GlobalContext);

    const navigateTo = useNavigate();

    const handleSetId = (event) => setId(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const user = await getUser(id);

            if(user) return setUser(user);
            
            setUser("");
            setShowNotification(true);
        }catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        (async () => {
            try{
                const response = await validateToken(token);

                if(!response.ok) return navigateTo("/admin"); 
            }catch(error){
                navigateTo("/admin");
            }
        })();
    }, [])
    
    return (
        <div className="flex flex-col w-full h-screen items-center p-8 bg-black font-[courier] overflow-x-hidden">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center max-w-[500px] w-full">
                <p className="text-4xl text-white font-bold">User ID </p>
                <InputAdmin type="search" onChange={handleSetId} placeholder="507f1f77bcf86cd799439011" style="w-full text-center"/>
            </form>
            {
                user && <EditUserInformation user={user} setUser={setUser}/>
            }
            {
                showNotification && <AdminNotification path="C:\Users\Final\Project\Admin" message="No results for that search. Maybe there's any misspelled character, check it again and if still getting unexpected results try again later." setShowNotification={setShowNotification}/>
            }
        </div>
    )
}