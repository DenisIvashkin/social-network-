import React from 'react';
import PostItem from "@/components/PostItem/PostItem";
import {Post} from "@/components/PostForm/PostForm";


interface PostListProps {
    posts: Post[];
    title?: string;
    removePost: (postId: number) => void;
}

const PostList = ({ posts, removePost }: PostListProps) => {
    return (
        <div>
            {posts.map((post) => (
                <PostItem
                    key = {post.id}
                    post = {post}
                    removePost={removePost}/>
            ))}
        </div>
    );
};

export default PostList;