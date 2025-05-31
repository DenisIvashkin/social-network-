import React from 'react';
import './loader.css'



const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-spinner"></div>
            <p className="loader-text">Загрузка...</p>
        </div>
    );
};

export default Loader;