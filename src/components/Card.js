

import React from 'react';


function Card({ user }) {
    console.log(user)
    return (
        <div style={cardStyle}>
            <label style={labelStyle}>{user.name}</label>
            <label style={labelStyle}>{user.email}</label>
            <label style={labelStyle}>{user.address.city}-{user.address.zipcode}</label>
            <label style={labelStyle}>{user.website}</label>
        </div>
    )
}

const labelStyle = {
    display: "block",
    left:0,
    marginLeft: '1px',
    textAlign:'left'
}
const cardStyle = {
    left: 0,
    right: 0,
    top: 0,
    butto: 0,
    background: '#E8E8E8',
    padding: '10px',
    marginTop: '10px',
    height: '100px',
    borderRadius: '30px',
    width: '250px',
};

export default Card;