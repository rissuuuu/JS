import React, { useState } from 'react';


function Form() {

    const updateUsername = (event) => {
        console.log("updateUsername")
        setUserName(event.target.value)
    }

    const updateComment = (event) => {
        console.log("updateComment")
        setComment(event.target.value)
    }

    const updateTopic = (event) => {
        console.log("updateTopic")
        setTopic(event.target.value)
    }

    var [userName, setUserName] = useState('')
    var [comments, setComment] = useState('')
    var [topic, setTopic] = useState('')

    const handleSubmit = (event) => {
        alert(`${userName}, ${comments} course: ${topic}`)
        event.preventDefault()
    }

    return (
        <div style={{ padding: '20px' }}>
            <form onSubmit={handleSubmit}>
                <div >
                    <label>Username</label>
                    <input type='text' style={{ 'marginLeft': '20px' }}
                        value={userName}
                        onChange={updateUsername}
                    ></input>
                </div>
                <div style={{
                    marginTop: '10px',
                    padding: '10px'
                }}>
                    <label>Comments</label>
                    <textarea value={comments} onChange={updateComment} />
                </div>
                <div style={{
                    marginTop: '10px',
                    padding: '10px'
                }}>
                    <label style={{
                        marginTop: '10px',
                        padding: '10px'
                    }}>Topic</label>
                    <select value={topic} onChange={updateTopic}>
                        <option value="React">React</option>
                        <option value="Django">Django</option>
                        <option value="Python">Python</option>
                    </select>
                </div>
                <button style={{
                    marginTop: '10px',
                    padding: '10px'
                }} type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form;