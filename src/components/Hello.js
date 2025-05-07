import React from "react";

const Hello = () => {

    return React.createElement('div', {
        'id': 'hello', 'className': 'dummyClass'
    }, React.createElement('h1', {
        'id': 'inner_hello', 'className': 'innerDummyClass'
    }, 'Hello Rishav JSX'))

}


export default Hello