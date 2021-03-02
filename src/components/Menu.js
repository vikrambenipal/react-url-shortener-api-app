import React, {Fragment} from 'react'

const Menu = ( { isHidden }) => {
    return (
        <div>
            {!isHidden ? <Fragment></Fragment> : <h1>stuff</h1>}
        </div>
    )
}
export default Menu;