import React from 'react'
import styled from 'styled-components';

const LinkContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding-bottom: 20px;
    width: 90%;
    margin: 0 auto;
    hr {
        width: 100%;
    }
    button {
        border: none;
        width: 80%;
        margin: 0 auto;
        cursor: pointer;
    }
`

const Link = ({ link }) => {

    const handleCopy = (e) => {
        e.target.innerText = "Copied!";
        console.log(e.target.previousSibling);
    }
    return (
        <LinkContainer>
            <p>{link.original_link}</p>
            <hr></hr>
            <p>{link.short_link}</p>
            <button onClick={handleCopy}>Copy</button>
        </LinkContainer>
    )
}

export default Link;