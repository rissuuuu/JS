import React, { useEffect, useState } from 'react';


function Toggle() {
    const [val, setVal] = useState(true)

    const [x, setX] = useState(0)

    const logMouse = e => {
        setX(e.clientX)
    }

    useEffect(() => {
        window.addEventListener('mousemove', logMouse)

        return (
            () => {
                window.removeEventListener('mousemove', logMouse)
            }
        )
    })

    return (<div style={{ marginTop: '100px' }}>
        <div>{val && <label>Hi</label>}</div>
        <button onClick={() => setVal(!val)}> Click</button>
        <div>{x}</div>
    </div>)
}

export default Toggle;