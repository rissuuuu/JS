import React, { use, useEffect, useState } from 'react';

function HookCounter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState(0)

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)


    useEffect(() => {
        document.title = `Clicked ${count} times`
    }, [count])

    const logMousePos = e => {
        setX(e.clientX)
        setY(e.clientY)

    }

    useEffect(() => {
        window.addEventListener('mousemove', logMousePos)
    })

    return (<div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        <label>{x} - {y}</label>
    </div>)
}

export default HookCounter;