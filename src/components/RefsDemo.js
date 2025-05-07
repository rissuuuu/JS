// import React,{ useEffect, useRef, useState } from 'react';

// function RefsDemo() {

//     const inputRef = useRef(null);
//     const [count,setCount] = useState(0)

//     // useEffect(() => {
//     //     inputRef.current.focus();
//     // }, []);

//     useEffect(() => {
//         console.log("Count changed:", count);
//       }, [count]); 

//     const handleFocus = () =>{
//         inputRef.current.focus();
//     }

//     return (
//         <div style={{marginTop:'100px'}}>
//             <input type='text' ref={inputRef} />

//             <div style={{marginTop:100}} onClick={handleFocus}><button>Click</button></div>
//         </div>
//     )
// }
// export default RefsDemo;

import React, { useEffect, useRef, useState } from 'react';
import InputRef from './InputRef';

function RefsDemo() {
    const inputRef = useRef(null);
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);

    const handleFocus = () => {
        inputRef.current.focus();
    }

    return (
        <div style={{ marginTop: '100px' }}>
            <InputRef ref={inputRef} />
            {/* <input type='text' ref={inputRef} /> */}
            <div style={{ marginTop: 100 }} onClick={handleFocus}><button>Click</button></div>
        </div>
    )
}
export default RefsDemo;