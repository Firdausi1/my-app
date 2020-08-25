import React from 'react';
import './item.css';
import{Link} from 'react-router-dom';

function Item({price,name,itemDesc,itemQuantity,itemId}) {
    
    return (
        <div className="item-container">
            <img alt="small chop" />
            <div className="item-heading">
                <h2>{name}</h2>
                <p>#{price}</p>
            </div>
            <p>{itemDesc}:{itemQuantity}</p>
            <div className="item-quantity">
                <div>
                    <label id="quantity">Quantity</label>
                    <input type="number" name="quantity" placeholder="0" />
                </div>
                <Link className="link" to={`/menu/${itemId}/cart`}>
                    <button className="btn-link">add to cart</button>
                </Link>
            </div>
        </div>
    )
}

export default Item;
