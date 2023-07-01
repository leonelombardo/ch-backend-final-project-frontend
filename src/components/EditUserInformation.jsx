import { useContext, useEffect, useState } from "react";

import { GlobalContext } from "../context/GlobalContext";

import { ButtonAdmin } from "./ButtonAdmin";
import { LabelWithTextAdmin } from "./LabelWithTextAdmin";

import { deleteUser } from "../utils/deleteUser";
import { switchUserRole } from "../utils/switchUserRole";
import { AdminNotification } from "./AdminNotification";

export const EditUserInformation = ({ user, setUser }) => {
    const [userRole, setUserRole] = useState("");
    const [showNotification, setShowNotification] = useState("");
    const {token} = useContext(GlobalContext);

    const roles = ["user", "premium", "admin"];
    
    const handleSetUserRole = (event) => setUserRole(event.target.value);

    const handleDeleteUser = async () => {
        const response = await deleteUser(user.id || user._id);
        
        if(!response) return;

        setUser("");
    }
    
    const handleSaveChanges = async () => {
        const response = await switchUserRole(user.id || user._id, userRole, token);
        
        setShowNotification(true);
    }

    useEffect(() => { console.log(user.role)}, [user]);

    return (
        <>
            <section className="flex flex-col gap-4 p-8 rounded-md max-w-[500px] w-full">
                <LabelWithTextAdmin label="Name" text={user.first_name + " " + user.last_name}/>
                <LabelWithTextAdmin label="Age" text={user.age}/>
                <LabelWithTextAdmin label="Email" text={user.email}/>
                <div className="flex flex-col">
                    <label className="text-4xl font-bold text-white">Role</label>
                    <div className="flex gap-4">
                        <select onChange={handleSetUserRole} className="bg-transparent text-green-500 text-2xl">
                            {
                                roles.map(role => <option key={role} value={role} className="bg-black" selected={user.role === role}>{role}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="flex justify-center items-between gap-4 w-full">
                    <ButtonAdmin variant="normal" onClick={handleSaveChanges}>Save changes</ButtonAdmin>
                    <ButtonAdmin variant="delete" onClick={handleDeleteUser}>Delete user</ButtonAdmin>
                </div>
            </section>
            {
                showNotification && <AdminNotification path="C:\Users\Final\Project\Admin\Edit\User" message={`${user.first_name} ${user.last_name}'s role was successfully switched to "${userRole || user.role}". Be careful when switching roles, must make a mistake and assign "admin" role to someone that didn't mean to and it could lead to several problems.`} setShowNotification={setShowNotification}/>
            }
        </>
    )
}