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
    background-color: #3A3054;
    border-radius: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
    width: 90%;
    .text, .submit {
        border: none;
        width: 80%;
        height: 48px;
        border-radius: 5px;
    }
    .text {
        padding-left: 15px;
        box-sizing: border-box; // really useful 
    }
    .submit {
        margin-top: 20px;
        background-color: #2BD0D0;
        color: white;
    }
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
                    <input className="text" type="text" onChange={textHandler} placeholder="Shorten a link here..."></input>
                    <input className="submit" type="submit" value="Shorten It!"></input>
                </FormContainer>
            </form>
            {list.map((link, i) => {
                return <Link key={i} link={link}/>
            })}
        </div>
    )
}

export default Form;