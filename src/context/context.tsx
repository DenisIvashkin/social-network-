import {createContext, ReactNode, useContext, useState} from "react";

interface AuthContextType {
    isAuth: boolean;
    setAuth: (value: boolean) => void;
    isLoading: boolean
}

export const AuthContext = createContext< AuthContextType | null> (null)

