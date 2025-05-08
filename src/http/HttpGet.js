

import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Card from './Card';

function HttpGet() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      setUsers(response.data)
    })
    .catch((error)=>{
      console.error('Error',error)
    })
   }, []);
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (<li key={user.id}>{<Card user={user} />}</li>))}
      </ul>
    </div>
  );
}

export default HttpGet;
