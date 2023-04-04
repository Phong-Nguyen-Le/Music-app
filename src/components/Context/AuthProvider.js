import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";


export const AuthContext = createContext()


export default function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, email, uid, photoURL } = user;
                setUser({ displayName, email, uid, photoURL });
                setIsLoading(false)
                navigate("/");
            } else {  
              setIsLoading(false)       
              navigate('/login')
            }
        });
        // clean function
        return () => {
            unsubscribe();
        };
    }, []);

    return (
      <AuthContext.Provider value={user}>
        {isLoading? <div>Loading....</div> : children}
      </AuthContext.Provider>
      )
}
