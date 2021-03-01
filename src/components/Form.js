import React, { useState } from 'react'
import axios from 'axios';
import Link from './Link';


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
            setList([...list, e.data.result.short_link]);
        })

    }

    const textHandler = (e) => {
        setLink(e.target.value);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={textHandler} placeholder="Shorten a link here..."></input>
                <input type="submit" value="Shorten It!"></input>
            </form>
            {list.map((link, i) => {
                return <Link key={i} link={link}/>
            })}
        </div>
    )
}

export default Form;