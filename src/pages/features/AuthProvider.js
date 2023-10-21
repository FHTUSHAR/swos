import React, { createContext, useState } from 'react';
export const AuthContext = createContext();



const AuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(false)
    const [loading, setLoading] = useState(true)

    const gettingAdmin = (data) => {
        console.log(data)
        if (data) {
            setAdmin(true)
            setLoading(false)
            localStorage.setItem("isAdmin", "true")
        }
    }


    const authInfo = { gettingAdmin, admin, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;