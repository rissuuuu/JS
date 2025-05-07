import React, { useEffect, useRef, useState } from 'react';

// function InputRef({ref}) {
//     console.log("REF IS",ref)
//     return (
//         <div>
//             <input type='text' ref={ref}/>
//         </div>
//     )
// }


const InputRef = React.forwardRef(
    (props, ref) => {
        console.log("REF ",ref)
        console.log("PROPS",props)

        return (
            <div>
                <input type='text' ref={ref} />
            </div>
        )
    }
)

export default InputRef;