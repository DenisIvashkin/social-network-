import React from 'react';
import './Modal.css'

interface Modal {
    children: React.ReactNode;
    visible: boolean;
    onClose: () => void;
}
const Modal:React.FC<Modal> = ({children, visible, onClose}) => {
    if (!visible) {return null}
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;