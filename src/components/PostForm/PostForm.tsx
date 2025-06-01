import React, {useState} from 'react';
import './PostForm.css'


export interface Post {
    id?: number;
    title: string;
    body: string;
}

export interface NewsBlockFormProps {
    create: (newPost: Post) => void;
    onClose: () => void;
}

const PostForm: React.FC<NewsBlockFormProps> = ({ create, onClose }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNewPost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newPost: Post = {
            title,
            body,
            id: Date.now()
        };
        create(newPost);
        onClose()
        console.log('Создан новый пост:', newPost);
        setTitle('')
        setBody('')
    };

    return (
        <div className = 'post-form'>
            <h1 className = 'post-form-text'>Share your post!</h1>
            <form onSubmit={addNewPost}>
                <div className='input_title'>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Title'
                        required
                    />
                </div>
                <div className='input_body'>
                   <textarea
                       value={body}
                       onChange={(e) => setBody(e.target.value)}
                       placeholder='Content'
                       required
                   />
                </div>
                <button type="submit">Share</button>
            </form>
        </div>
    );
};

export default PostForm;