import React from 'react'
import styled from 'styled-components';
import fb from '../images/icon-facebook.svg';
import ig from '../images/icon-instagram.svg';
import twitter from '../images/icon-twitter.svg';
import pin from '../images/icon-pinterest.svg';

const Footer = () => {
    return (
        <div>
            <h2>Shortly</h2>
            <div>
                <p>Features</p>
                <p>Link Shortening</p>
                <p>Branded Links</p>
                <p>Analytics</p>
            </div>
            <div>
                <p>Resources</p>
                <p>Blog</p>
                <p>Developers</p>
                <p>Support</p>
            </div>
            <div>
                <p>Company</p>
                <p>About</p>
                <p>Our Team</p>
                <p>Careers</p>
                <p>Contact</p>
            </div>
            <div>
                <img src={fb} alt=""></img>
                <img src={twitter} alt=""></img>
                <img src={pin} alt=""></img>
                <img src={ig} alt=""></img>
            </div>
        </div>
    )
}
export default Footer;