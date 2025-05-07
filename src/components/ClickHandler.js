import React from "react";

// class ClickHandler extends Component{
//     handleClick=()=>{
//         console.log("CLICKED")
//     }
//     render(){
//         return (
//             <div>
//             <h1>Hello World</h1>
//                 <button onClick={this.handleClick}>Click here</button>
//             </div>
//         )
//     }
// }

function ClickHandler() {
    const handleClick = () => {
        console.log("CLICKED")
    }
    return (<div>
        <h1>Hello World</h1>
        <button onClick={handleClick}>Click here</button>
    </div>)
}

export default ClickHandler;