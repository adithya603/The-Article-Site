import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (inputs) => {
        try {
            const res = await axios.post("https://the-article-site.vercel.app/api/auth/login", inputs, {
                withCredentials: true
            });
            setCurrentUser(res.data.user); // Assuming user data is returned
            localStorage.setItem("token", res.data.token); // Store JWT token in localStorage
        } catch (error) {
            console.error("Login error:", error);
            // Handle error, e.g., show a notification or alert
        }
    };
    
    const logout = async () => {
        try {
            await axios.post("https://the-article-site.vercel.app/api/auth/logout", {}, {
                withCredentials: true
            });
            setCurrentUser(null);
            localStorage.removeItem("token"); // Remove token on logout
        } catch (error) {
            console.error("Logout error:", error);
            // Handle error, e.g., show a notification or alert
        }
    };
    
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
