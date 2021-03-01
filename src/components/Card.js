import React from 'react'

const Card = ({ icon, title, info }) => {
    return (
        <div>
            <img src={icon} alt=""></img>
            <h3>{title}</h3>
            <p>{info}</p>
        </div>
    )
}
export default Card;