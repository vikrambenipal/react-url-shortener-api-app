import React from 'react'
import styled from 'styled-components';
import fb from '../images/icon-facebook.svg';
import ig from '../images/icon-instagram.svg';
import twitter from '../images/icon-twitter.svg';
import pin from '../images/icon-pinterest.svg';
import GreenButton from './Menu';

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center; 
    margin: 0 auto;
    background-color: #232127;
    padding-bottom: 60px;
    h2, h3, p {
        color: white;
        text-align: center;
    }
`
const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    justify-contents: space-evenly;
    align-items: center; 
    margin-top: 30px;

`

const Footer = () => {
    return (
        <FooterContainer>
            <h2>Shortly</h2>
            <div>
                <h3>Features</h3>
                <p>Link Shortening</p>
                <p>Branded Links</p>
                <p>Analytics</p>
            </div>
            <div>
                <h3>Resources</h3>
                <p>Blog</p>
                <p>Developers</p>
                <p>Support</p>
            </div>
            <div>
                <h3>Company</h3>
                <p>About</p>
                <p>Our Team</p>
                <p>Careers</p>
                <p>Contact</p>
            </div>
            <SocialMedia>
                <img src={fb} alt=""></img>
                <img src={twitter} alt=""></img>
                <img src={pin} alt=""></img>
                <img src={ig} alt=""></img>
            </SocialMedia>
        </FooterContainer>
    )
}
export default Footer;