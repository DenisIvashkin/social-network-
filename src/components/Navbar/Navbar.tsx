import React from 'react';
import {useAuth} from "@/hooks/useAuth";
import './Navbar.css'
import {Link} from "react-router-dom";
import Modal from "@/components/Modal/Modal";
import PostForm, {Post} from "@/components/PostForm/PostForm";



const Navbar = () => {

    const {isAuth, setAuth} = useAuth();
    const [post, setPost] = React.useState<Post[]>([]);
    const [isVisible, setVisible] = React.useState<boolean>(false);


    const createPost = (newPost: Post) => {
        setPost([newPost, ...post]);
    };

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
                        <button type = 'submit' className = 'post_btn' onClick = {() => setVisible(true)} >Share your post</button>
                    </div>

                    <div className = 'link-post-btn'>
                         <Link to='/news'>News</Link>
                    </div>
                </div>



                <div className = 'logout-btn'>
                    <a href = '#' onClick={logout}>Logout</a>
                </div>

            </div>
            {isVisible && (
                <Modal onClose={() => setVisible(false)} visible={isVisible}>
                    <PostForm
                        create={createPost}
                        onClose={() => setVisible(false)}
                    />
                </Modal>
            )}
        </div>
    );
};

export default Navbar;