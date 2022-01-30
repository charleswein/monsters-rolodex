import React from "react";
import "./style.css"

const Card = ({monster: {name, email, id}}) => {
    return (<div className='card'>
        <img alt='monster' src={`https://robohash.org/${id}?set=set2&size1"`}/>
        <h1>{name}</h1>
        <h2>{email}</h2>
    </div>)
}

export default Card
