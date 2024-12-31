"use client"
import { SessionProvider } from 'next-auth/react';
import React, { createContext } from 'react';


const AuthProvider = ({children}) => {
    
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
};

export default AuthProvider;