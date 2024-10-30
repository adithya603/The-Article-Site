import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(() => {
        try {
            const storedUser = localStorage.getItem("user");
            return storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null; // Safe parsing
        } catch (error) {
            console.error("Failed to parse user data from localStorage:", error);
            return null; // Fallback to null if parsing fails
        }
    });

    const login = async (inputs) => {
        try {
            const res = await axios.post("/auth/login", inputs);
            setCurrentUser(res.data);
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const logout = async () => {
        try {
            await axios.post("/auth/logout");
            setCurrentUser(null);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser)); // Convert object to string
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
