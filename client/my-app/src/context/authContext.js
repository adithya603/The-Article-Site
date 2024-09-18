//We need user info in all the components, so we need it to be stored in a common place, to do that we can use any state management tool like redux, but [react context api] is enough here

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(         //fetching the current user from the application>localStorage(ctrl+sft+j)
        JSON.parse(localStorage.getItem("user")) || null   //converting string to object
    );

    const login = async (inputs) => {
        const res = await axios.post("/auth/login", inputs);
        setCurrentUser(res.data);
    };

    const logout = async (inputs) => {
        await axios.post("/auth/logout");
        setCurrentUser(null);
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));     //converting from object to a string
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};