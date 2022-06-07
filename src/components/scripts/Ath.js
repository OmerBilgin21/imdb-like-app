import { applyActionCode } from 'firebase/auth';
import React, { useEffect, useState, useContext } from 'react'
import { auth } from '../firebase/FirebaseConfig'
import { onAuthStateChanged } from 'firebase/auth';


export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    return (
        <AuthContext.Provider
        value={{
            user
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}