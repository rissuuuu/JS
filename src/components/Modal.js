// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';


const modalStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const contentStyles = {
    background: rgba(0,0,0,100),
    padding: '20px',
    borderRadius: '30px',
    minWidth: '300px',
};

function Modal({ onClose, onIncrement, children }) {

    return ReactDOM.createPortal(
        <div style={modalStyles}>
            <div style={contentStyles}>
                {children}
                <button onClick={onClose}>Close Modal</button>
                <button onClick={onIncrement}>Click me</button>

            </div>
        </div>
        , document.getElementById('portal-root')
    );
}


export default Modal;
