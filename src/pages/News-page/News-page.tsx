import React, {FormEvent} from 'react';
import './newsStyles.css'
import {AuthContext} from "@/context/context";
import {useAuth} from "@/hooks/useAuth";
import Navbar from "@/components/Navbar/Navbar";
import {Link} from "react-router-dom";
import PostForm, { Post } from "@/components/PostForm/PostForm";
import Modal from "@/components/Modal/Modal";
import PostItem from "@/components/PostItem/PostItem";


const NewsPage = () => {
    let {isAuth, setAuth} = useAuth()
    const [posts, setPosts] = React.useState([]);

    const examplePost: Post = {
        id: 1,
        title: "My first post",
        body: "That's a post example!"
    };



    return (
        <div>
            <Navbar/>
            <div className='newsblock-wrapper'>
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />
                <PostItem post={examplePost} />


            </div>

        </div>

    );
};

export default NewsPage;