import React, { Fragment, useState } from 'react'

const Cart = () => {

    const [classActive, toggleClass] = useState(false);

    const toggleButton = () => {
        toggleClass(!classActive);
    }

    return (
        <Fragment>
            <div id="sidebar" className={classActive ? "active" : ""}>
            <div className="toggle-btn" onClick={toggleButton}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </div>
        </Fragment>
    )
}

export default Cart;