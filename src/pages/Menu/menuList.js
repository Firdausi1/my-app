import React, {useEffect, useState} from 'react';
import{Link} from 'react-router-dom';
import './style.css'

function MenuList({name, itemDesc, price, itemId}) {
    const Submit = async () =>{
        let info = {
            product: itemId,
            quantity: 1
        }
        const response = await fetch('https://surce-delight.herokuapp.com/api/cart/item/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info
                                )
        });
        const data = await response.json();
        console.log(data);
      }
    
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
                            <p>{itemDesc}</p>
                        </div>
                        <div className="Menu-price">
                            <h5>#{price}</h5>
                                <form>
                            <button className="btn-link" onClick={() => Submit()} href="">add to cart</button>
                                </form>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default MenuList;