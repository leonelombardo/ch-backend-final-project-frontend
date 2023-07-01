import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import { GlobalContext } from "../context/GlobalContext";

import { ButtonAdmin } from "../components/ButtonAdmin"
import { InputAdmin } from "../components/InputAdmin"

import { login } from "../utils/login";
import { validateToken } from "../utils/validateToken";

export const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const { setToken } = useContext(GlobalContext);

    const navigateTo = useNavigate();

    const handleSetEmail = (event) => setEmail(event.target.value);
    const handleSetPassword = (event) => setPassword(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const { ok, token } = await login(email, password);
            
            if(!ok) return setLoginError("Invalid username or password.");

            localStorage.setItem("token", token);
            
            setToken(token);

            const validation = await validateToken(token);

            if(!validation.ok) return setLoginError("Not an admin account.");

            setLoginError("");
            navigateTo("/admin/edit/user");
        }catch(error){
            console.log(error)
            setLoginError("Please try again later.");
        }
    }

    return (
        <div className="flex flex-col w-full h-screen items-center p-8 bg-black font-[courier] overflow-x-hidden">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 max-w-[300px] w-full m-auto">
                <div className="flex flex-col gap-2">
                    <label className="text-4xl font-bold text-white">Email</label>
                    <InputAdmin type="email" placeholder="test@gmail.com" onChange={handleSetEmail}/>
                </div>
                <div className="flex flex-col gap-2 max-w-[300px] w-full">
                    <label className="text-4xl font-bold text-white">Password</label>
                    <InputAdmin type="password" placeholder="••••••••••••" onChange={handleSetPassword}/>
                </div>
                {
                    loginError && <p className="text-md text-red-600 -mt-5 -mb-5">{loginError}</p>
                }
                <ButtonAdmin type="submit">Login</ButtonAdmin>
            </form>
        </div>
    )
}