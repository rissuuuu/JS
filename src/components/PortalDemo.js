// import React from 'react';
// import ReactDOM from 'react-dom';

// function PortalDemo() {
//     return ReactDOM.createPortal(
//         <h1>Portals Demo</h1>, document.getElementById('portal-root')
//     )
// }

// export default PortalDemo;


import React, { useState } from 'react';
import Modal from './Modal';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [num, setNum] = useState(0)
    console.log(num);

    const incrementCount = () => {
        setNum(prev => prev + 1);
    };

    const alertFunc = () => {
        alert("CLICKED")
    }


    return (
        <div onClick={() => { incrementCount(); }}>
            <h1>React Portal Modal</h1>
            <label>{num}</label>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>

            {isOpen && (
                <Modal onClose={() => setIsOpen(false)}
                    onIncrement={incrementCount}
                >
                    <h2>This is a modal using React Portal</h2>
                </Modal>
            )}
        </div>
    );
}

export default App;