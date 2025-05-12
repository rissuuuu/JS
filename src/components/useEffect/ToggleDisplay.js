import React, { useEffect, useState } from 'react';

function Toggle() {
    const [val, setVal] = useState(true); // Toggle state
    const [x, setX] = useState(0); // Mouse X coordinate

    const logMouse = e => {
        setX(e.clientX);
    };

    useEffect(() => {
        console.log('useEffect called');

        if (val) {
            window.addEventListener('mousemove', logMouse);
        }

        return () => {
            console.log("REMOVE");
            window.removeEventListener('mousemove', logMouse);
        };
    }, [val]); // run effect when `val` changes

    return (
        <div style={{ marginTop: '100px' }}>
            <div>{val && <label>Hi</label>}</div>
            <button onClick={() => setVal(!val)}>Click</button>
            <div>Mouse X: {x}</div>
        </div>
    );
}

export default Toggle;