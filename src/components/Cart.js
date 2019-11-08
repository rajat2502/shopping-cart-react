import React, { Fragment, useState } from 'react';

import CartItem from './CartItem';

const Cart = ({products}) => {

    const [classActive, toggleClass] = useState(false);

    const toggleButton = () => {
        toggleClass(!classActive);
    }

    return (
        <Fragment>
            <div id="sidebar" className={classActive ? "active" : ""}>
                <div className="sidebar-content">
                    <div className="toggle-btn" onClick={toggleButton}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    
                    <div className="cart-content">
                    <h3>
                        <img src="https://checkout.advancedshippingmanager.com/wp-content/uploads/2015/10/Cart-Icon-PNG-Graphic-Cave-e1461785088730-300x300.png" alt="cart" />
                        Cart
                    </h3> 

                    <div className="cart-list">
                        <CartItem />
                    </div>

                    <div className="checkout-div">
                        <div className="checkout">
                                <div className="subtotal-div">
                                    <p className="subtotal">SUBTOTAL</p>
                                    <p className="subtotal-price">$ 200</p>
                                </div>
                                <button className="checkout-btn">CHECKOUT</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart;