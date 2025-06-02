import React from 'react';
import {useAuth} from "@/hooks/useAuth";
import './Navbar.css'
import {Link} from "react-router-dom";
import Modal from "@/components/Modal/Modal";
import PostForm, {Post} from "@/components/PostForm/PostForm";

interface NavbarProps {
    onOpenModal: () => void;
}

const Navbar = ({onOpenModal}: NavbarProps) => {
    const {isAuth, setAuth} = useAuth();
    const [post, setPost] = React.useState<Post[]>([]);


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


                <div className = 'navbar-links'>
                     <div className = 'link-about-btn'>
                        <Link to='/about'>About</Link>
                     </div>

                    <div>
                        <button type = 'submit' className = 'post_btn' onClick={onOpenModal} >Share your post</button>
                    </div>

                    <div className = 'link-post-btn'>
                         <Link to='/news'>News</Link>
                    </div>
                </div>



                <div className = 'logout-btn'>
                    <a href = '#' onClick={logout}>Logout</a>
                </div>

            </div>
        </div>
    );
};

export default Navbar;