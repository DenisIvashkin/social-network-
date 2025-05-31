import React from 'react';
import './newsStyles.css'

const NewsPage = () => {
    return (
        <div>
            <div className = 'navbar-wrapper'>
                <div className = 'text-logo'>
                    <p>SocialNetwork</p>
                </div>
                <div className = 'logout-btn'>
                   <button><a href = '#'>Logout</a> </button>
                </div>
            </div>

            <div className = 'newsblock-wrapper'>

                <div className = 'sidebar-wrapper'>
                    <button type = 'submit' className = 'sidebar_btn'>Share your post</button>
                    <div className ='ne_pridumal'>
                        <p>А что сюда добавить - я не придумал...</p>
                    </div>
                    <button type = 'submit' className = 'sidebar_btn2'>About</button>
                </div>
            </div>

        </div>
    );
};

export default NewsPage;