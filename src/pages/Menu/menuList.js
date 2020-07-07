import React from 'react';
import{Link} from 'react-router-dom';
import './style.css'

function MenuList({name, desc, price, itemId}) {
    return (
        <div className="ourMenu-list">
            <Link className="link" to={`/menu/${itemId}`}>
                <div  className="Menu-box">
                    <div className="Menu-img">
                        <img src="./4C9E43EF-FD5D-4A3E-80E6-32C05E01B80C.jpeg" alt="small chop"/>
                    </div>
                    <div className="Menu-content">
                        <div className="Menu-text">
                            <h4>{name} </h4>
                            <p>{desc}</p>
                        </div>
                        <div className="Menu-price">
                            <h5>#{price}</h5>
                            <Link className="link" to={`/menu/${itemId}/cart`}>
                                <a className="btn-link" href="">add to cart</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default MenuList;