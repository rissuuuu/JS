import ChildComponent from "./ChildComponent";
import {useState} from "react";


function ParentComponent() {

    var [parentName, setparentName] = useState("Parent")

    const greetParent = (arg) => {
        changeName()
        alert(`Hello ${parentName} from ${arg}`);
    }

    const changeName = () => {
        setparentName("ALU argun")
    }

    return (<div>
            <ChildComponent greetHandler={greetParent}/>
        </div>);
}

export default ParentComponent