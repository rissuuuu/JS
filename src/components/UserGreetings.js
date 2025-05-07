import {useState} from "react";


function UserGreeting() {
    var [isLoggedIn, setisLoggedIn] = useState(false)

    let message;

    message =isLoggedIn? "Welcome Rishav!!!":"Welcome Guest";

    return (<div>
        <div>{message}</div>
    </div>)

}

export default UserGreeting