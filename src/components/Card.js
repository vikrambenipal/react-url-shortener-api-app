import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 80%;
    margin-bottom: 80px;
    padding-bottom: 30px;
    border-radius: 5px;
    background-color: white;
    img {
        background-color: #3A3054;
        border-radius: 50%;
        padding: 20px;
        margin-top: -40px;
    }
    p {
        margin-top: -3px;
        text-align: center;
        line-height: 30px;
    }
`

const Card = ({ icon, title, info }) => {
    return (
        <CardContainer>
            <img src={icon} alt=""></img>
            <h3>{title}</h3>
            <p>{info}</p>
        </CardContainer>
    )
}
export default Card;