import React, {useContext} from 'react';
import {AuthContext} from "../context/context";
import {useAuth} from "@/hooks/useAuth";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "@/router/router";
import Loader from "../components/Loader/Loader";
import Navbar from "@/components/Navbar/Navbar";

interface RouteConfig {
    path: string;
    element: React.ReactNode;

}


const AppRouter= () => {
    const { isAuth, isLoading } = useAuth();

    if (isLoading) {
        return <Loader />;
    }

    const routes = isAuth ? privateRoutes : publicRoutes;

    return (


        <BrowserRouter>
            <Routes>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.component}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
};


export default AppRouter;