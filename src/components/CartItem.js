import React from 'react'

const CartItem = () => {
    return (
        <div className="cart-item">
            <img src="https://i.ibb.co/Fh2Bv0D/4.png" alt="cart-item" className="cart-item-image" />
            <div>
                <div>
                    <p className="item-title">Roadster</p>
                    <span className="cart-item-price">$ 20</span>
                </div>
                <div>
                    <p className="item-quantity">Quantity: <span>1</span></p>
                    <div>
                     <button className="quantity-btn">-</button>
                     <button className="quantity-btn">+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
