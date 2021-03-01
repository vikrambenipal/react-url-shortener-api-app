import React, { useState } from 'react'
import axios from 'axios';


const Form = () => {

    const [link, setLink] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios(`https://api.shrtco.de/v2/shorten?url=${link}`, {
            method: 'get',
        }).then((e) => {
            console.log(e);
            console.log(e.data.result.short_link);
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
        </div>
    )
}

export default Form;