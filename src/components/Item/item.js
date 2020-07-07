import React from 'react';
import './item.css';
import{Link} from 'react-router-dom';

function Item({price,name,desc,itemId}) {
    
    return (
        <div className="item-container">
            <img alt="small chop" />
            <div className="item-heading">
                <h2>{name}</h2>
                <p>#{price}</p>
            </div>
            <p>{desc}</p>
            <div className="item-quantity">
                <div>
                    <label id="quantity">Quantity</label>
                    <input type="number" name="quantity" placeholder="0" />
                </div>
                <Link className="link" to={`/menu/${itemId}/cart`}>
                    <a className="btn-link">add to cart</a>
                </Link>
            </div>
        </div>
    )
}

export default Item;
