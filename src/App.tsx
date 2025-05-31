import React from 'react';
import LoginPage from "./pages/LoginPage/Login-page";
import NewsPage from "./pages/News-page/News-page";
import AppRouter from "./AppRouter/AppRouter";
import {BrowserRouter} from "react-router-dom";




const App= ():React.ReactNode => {
    const [isAuth, setAuth] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    // return (
    //     <div className="app">
    //
    //         <BrowserRouter>
    //             <AppRouter/>
    //         </BrowserRouter>
    //
    //     </div>
    // );

    return <div></div>
};

export default App;