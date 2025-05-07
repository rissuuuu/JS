import React from "react";

function Person({item}){
    return (
        <div>
            <ul>
                <h2 key={item.id}>My name is {item.name}. I am {item.age} years old. I am expert in {item.skill}</h2>
            </ul>
        </div>
    )
}
export default Person