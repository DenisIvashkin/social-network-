import React from 'react';
import NewsPage from "../pages/News-page/News-page";
import LoginPage from "../pages/LoginPage/Login-page";
import {Navigate} from "react-router-dom";




export const privateRoutes = [
    { path: '/news', component: <NewsPage /> },
    { path: '*', component: <Navigate replace to='/news'/> },
]

export const publicRoutes = [
    { path: '/authorisation', component: <LoginPage /> },
    { path: '*', component: <Navigate replace to='/authorisation' /> },
]
