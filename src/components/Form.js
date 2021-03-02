import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Link from './Link';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

const Form = () => {

    // link for whatever is in text input 
    const [link, setLink] = useState("");
    // list of shortened links created
    const [list, setList] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        axios(`https://api.shrtco.de/v2/shorten?url=${link}`, {
            method: 'get',
        }).then((e) => {
            setList([...list, e.data.result]);
            console.log(e);
        })

    }

    const textHandler = (e) => {
        setLink(e.target.value);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <FormContainer>
                    <input type="text" onChange={textHandler} placeholder="Shorten a link here..."></input>
                    <input type="submit" value="Shorten It!"></input>
                </FormContainer>
            </form>
            {list.map((link, i) => {
                return <Link key={i} link={link}/>
            })}
        </div>
    )
}

export default Form;