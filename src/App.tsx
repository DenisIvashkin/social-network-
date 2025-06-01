import React, {useEffect} from 'react';
import LoginPage from "./pages/LoginPage/Login-page";
import NewsPage from "./pages/News-page/News-page";
import AppRouter from "./AppRouter/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {AuthContext} from "@/context/context";
import Navbar from "@/components/Navbar/Navbar";
import Loader from "@/components/Loader/Loader";
import PostForm, { Post } from "@/components/PostForm/PostForm";
import Modal from "./components/Modal/Modal";


const App = (): React.ReactNode => {
    const [isAuth, setAuth] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);








    useEffect(() => {
        const item = localStorage.getItem("auth")
        if (item === 'true') {
            setAuth(true)
        }
        if (item === 'false') {
            setAuth(false)
        }
    })



    return (
        <div className="app">
                <AuthContext.Provider value={{isAuth, isLoading, setAuth}}>
                        <AppRouter/>
                </AuthContext.Provider>

        </div>
    );

};

export default App;