import React from "react";
import Person from "./Person";

function NameList() {
    const names = [{
        id: 1, name: 'Bruce', age: 33, skill: 'React'
    }, {
        id: 2, name: 'Diana', age: 32, skill: 'Django'
    }, {
        id: 3, name: 'Lucifer', age: 31, skill: 'GoLang'
    }, {
        id: 4, name: 'Rishu', age: 30, skill: 'Fullstack'
    }]
    const personList = names.map(person => <Person item={person}/>)
    return (<div>
        {personList}
    </div>)
}

export default NameList