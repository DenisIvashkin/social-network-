import React, {FormEvent, useContext} from "react";
import './loginStyles.css';
import {useAuth} from "../../hooks/useAuth";



const LoginPage = () => {

    let {isAuth, setAuth} = useAuth()

    const login = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setAuth(true);
        localStorage.setItem('auth', 'true');
    }
    return (

        <div className = 'login-body'>
            <div className = 'wrapper'>
                <form onSubmit = {login}>

                    <h1>Login</h1>

                    <div className = 'input-box'>
                        <input type = 'text' placeholder = 'Username' required></input>
                        <i className = 'bx bxs-lock-alt'></i>
                    </div>

                    <div className = 'input-box'>
                        <input type = 'text' placeholder = 'Password' required></input>
                        <i className = 'bx bxs-lock-alt'></i>
                    </div>

                    <div className = 'remember-forgot'>
                        <label htmlFor='remember'><input type = 'checkbox' id = 'remember'/>Remember me</label>
                        <a href='#'>Forgot password?</a>
                    </div>

                    <button type = 'submit' className = 'btn' >Sign up</button>

                    <div className = 'register-link'>
                        <p>Don't have an account? <a href = '#'>Sign in</a> </p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default LoginPage;


