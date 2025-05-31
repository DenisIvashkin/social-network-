import {createContext, ReactNode, useContext, useState} from "react";


interface AuthContextType {
    isAuth: boolean;
    setAuth: (value: boolean) => void;
    isLoading?: boolean;
}


export const AuthContext = createContext< AuthContextType | null> (null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuth, setAuth] = useState(false);
    return (
        <AuthProvider>
            <AuthContext.Provider value={{ isAuth, setAuth}}>
                {children}
            </AuthContext.Provider>
        </AuthProvider>
    );
};

