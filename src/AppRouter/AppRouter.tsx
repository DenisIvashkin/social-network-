import React, {useContext} from 'react';
import {AuthContext} from "../context/context";
import {useAuth} from "../hooks/useAuth";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/router";
import Loader from "../components/Loader";

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
            {routes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.component}
                />
            ))}
        </BrowserRouter>
    );
};


export default AppRouter;