

import axios from 'axios';
import React, { useState } from 'react';

function HttpPost() {
    const [item, setItem] = useState({ 'userId': '', 'title': '', 'body': '' })

    const onChangeHandler = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/users',item)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.error('Error', error)
            })
    }
    return (
        <div style={{ marginTop: '100px' }}>
            <form>
                <input style={inputStyle} type='text' name='userId' value={item.userId} onChange={onChangeHandler} />
                <input style={inputStyle} type='text' name='title' value={item.title} onChange={onChangeHandler} />
                <input style={inputStyle} type='text' name='body' value={item.body} onChange={onChangeHandler} />
                <button style={inputStyle} type='submit' onClick={submitHandler}>Submit</button>
             </form>
        </div>
    )
}

const inputStyle = {
    marginTop: '10px',
    padding: '10px',
    display: "block",
    marginLeft: '200px',
}

export default HttpPost;

