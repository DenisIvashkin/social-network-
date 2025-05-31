import React from 'react';
import {useAuth} from "@/hooks/useAuth";
import './Navbar.css'



const Navbar = () => {

    const {isAuth, setAuth} = useAuth();

    const logout = () => {
        setAuth(false);
        localStorage.setItem('auth', 'false');
    }

    return (
        <div>
            <div className = 'navbar-wrapper'>
                <div className = 'text-logo'>
                    <p>SocialNetwork</p>
                </div>
                <div className = 'logout-btn'>
                    <a href = '#' onClick={logout}>Logout</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;