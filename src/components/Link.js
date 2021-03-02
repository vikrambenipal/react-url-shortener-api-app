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
    textarea {
        visibility: hidden;
        height: 0;
    }
`

const Link = ({ link }) => {

    const handleCopy = (e) => {
        e.target.innerText = "Copied!";
        const short_link = document.createElement('textarea');
        short_link.value = e.target.previousSibling.innerText;
        document.body.appendChild(short_link);
        short_link.select();
        document.execCommand('copy');
        document.body.removeChild(short_link);
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