import React, {FormEvent} from 'react';
import './newsStyles.css'
import {AuthContext} from "@/context/context";
import {useAuth} from "@/hooks/useAuth";
import Navbar from "@/pages/Navbar/Navbar";
import {Link} from "react-router-dom";

const NewsPage = () => {
    let {isAuth, setAuth} = useAuth()


    return (
        <div>
            <Navbar/>
            <div className = 'newsblock-wrapper'>

                <div className = 'sidebar-wrapper'>
                    <button type = 'submit' className = 'sidebar_btn'>Share your post</button>
                    <div className ='ne_pridumal'>
                        <p>А что сюда добавить - я не придумал...</p>
                    </div>
                    <button type = 'submit' className = 'sidebar_btn2'>
                        <Link to='/about'>About</Link>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default NewsPage;