import React, {useState} from 'react'
import Menu from './Menu';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h2{
        margin: 0;
        margin-left: 1rem;
        color: #34313D;
        font-size: 2.5rem;
        margin-top: 2rem;
    }
    .menu {
        margin-right: 2rem;
        font-size: 2rem;
        margin-top: 2.5rem;
        cursor: pointer;
    }
`

const Nav = () => {

    const [menuState, setMenuState] = useState(false);

    const menuHandler = (e) => {
        setMenuState(!menuState);
    }

    return (
        <div>
            <Row>
                <h2>Shortly</h2>
                <FontAwesomeIcon onClick={menuHandler} className="menu" icon={faBars} size="lg" color="#9E9AA8" />
            </Row>
            <Menu isHidden={menuState}/>
        </div>
    )
}

export default Nav;
