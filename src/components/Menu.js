import React from 'react'
import styled from 'styled-components';

const GreenButton = styled.button`
    background-color: #2BD0D0;
    border: none;
    border-radius: 28px;
    color: white;
    width: 80%;
    height: 48px;
    cursor: pointer;
    margin-top: 10px;
`
const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    border: 1px solid black;
    background-color: #3A3054;
    padding-top: 20px;
    padding-bottom: 30px;
    margin-top: 30px;
    margin-bottom: 20px;
    border-radius: 10px;
    p {
        color: white;
    }
    hr {
        width: 90%;
        border-color: #9E9AA8;
    }
`

const Menu = () => {
    return (
        <MenuContainer>
            <p>Features</p>
            <p>Pricing</p>
            <p>Resources</p>
            <hr></hr>
            <p>Login</p>
            <GreenButton>Sign Up</GreenButton>
        </MenuContainer>
    )
}
export default Menu;