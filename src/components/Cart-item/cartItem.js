import React from 'react';
import './cartItem.css'

function CartItem() {
    return (
        <div className="cart">
            <div className="cart-item">
                <img alt="small chop"/>
                <div>
                    <p>price</p>
                    <p>description</p>
                </div>
            </div>
            <div className="cart-total">

            </div>
        </div>
    )
}

export default CartItem;
