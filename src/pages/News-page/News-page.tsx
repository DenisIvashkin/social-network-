import React, {FormEvent, useEffect} from 'react';
import './newsStyles.css'
import {AuthContext} from "@/context/context";
import {useAuth} from "@/hooks/useAuth";
import Navbar from "@/components/Navbar/Navbar";
import {Link} from "react-router-dom";
import PostForm, { Post } from "@/components/PostForm/PostForm";
import Modal from "@/components/Modal/Modal";
import PostItem from "@/components/PostItem/PostItem";
import PostList from "@/components/PostList/PostList";
import {useFetching} from "@/hooks/useFetching";
import PostService from "@/PostService/PostService";
import Loader from "@/components/Loader/Loader";


const NewsPage = () => {
    const {isAuth, setAuth} = useAuth();
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
    const [posts, setPosts] = React.useState<Post[]>([]);
    const [limit, setLimit] = React.useState(10);

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        await new Promise(resolve => setTimeout(resolve, 1500))
        const response = await PostService.getPosts()
        setPosts(posts => [...posts, ...response.data]);
    })

    const removePost = (postId: number) => {
        setPosts(posts.filter((post) => post.id !== postId));
    };

    const createPost = (newPost: Omit<Post, 'id'>) => {
        const newPostWithId = { ...newPost, id: Date.now() };
        setPosts([newPostWithId, ...posts]);
        setIsModalOpen(false);
    };


    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
            <Navbar onOpenModal={() => setIsModalOpen(true)} />
            <div className='newsblock-wrapper'>
                <PostList posts={posts} removePost={removePost} />

                {isModalOpen && (
                    <Modal onClose={() => setIsModalOpen(false)}>
                        <PostForm
                            create={createPost}
                            onClose={() => setIsModalOpen(false)}
                        />
                    </Modal>
                )}
                {isPostLoading && (
                    <div>
                        <Loader />
                    </div>
                )}

            </div>
        </div>
    );
};

export default NewsPage;