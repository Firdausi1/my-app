import React from 'react';
import './header.css'

function Header() {
    return (
        <header className="header">
            <div className="header-text">
                <h1>What would you like today?</h1>
                <p>Small chops, cakes, doughnuts and more available for pickup/delivery</p>
                <form>
                    <input className="form-input" type="text" name="address" placeholder="Enter your Address"/>
                    <button className="form-btn"> submit</button>
                </form>
            </div>
            <img src="./undraw_Hamburger_8ge6.svg" alt="header"/>
        </header>
    )
}

export default Header;
