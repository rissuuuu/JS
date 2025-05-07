import React from 'react';
import './styles/styles.css'

const heading = {
    fontSize:'72px',
    color:'Blue'
}

function Inline() {
    return (
        <div>
            <h1 className='failure'>ERROR FROM INLINE</h1>
            <h1 style={heading}>Stylesheet</h1>
        </div>
    )
}

export default Inline