import React from 'react';
import {Post} from "@/components/PostForm/PostForm";
import './PostItem.css'

interface PostItemProps {
    post: Post;
    removePost: (postID: number) => void;
}


const PostItem = ({ post, removePost }: PostItemProps) => {

    return (
        <div className="post">
            <div className="post-content">
                <strong>{post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div className = 'post__btns'>
                <button className = 'remove-btn' onClick={() => removePost(post.id)}>Delete post</button>
            </div>
            </div>
    );
};

export default PostItem;