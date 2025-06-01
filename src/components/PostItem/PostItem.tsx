import React from 'react';
import {Post} from "@/components/PostForm/PostForm";
import './PostItem.css'

interface PostItemProps {
    post: Post;
}


const PostItem = (props: PostItemProps) => {
    return (
        <div className="post">
            <div className="post-content">
                <strong>{props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            </div>
    );
};

export default PostItem;