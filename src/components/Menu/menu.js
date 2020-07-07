import React from 'react';
import './menu.css';
import{Link} from 'react-router-dom';

function Menu() {
    return (
        <section className="menu">
            <div className="menu-body">
                <div className="menu-img">
                    <img src="./Rectangle 3.jpg" alt="small chop"/>
                </div>
                <div className="menu-text">
                    <h2>MENU</h2>
                    <p>Let Sucre Delight take care of your catering needs individual or party. Our different trays are the perfect solution for your next meeting, event, gathering.</p>
                    <form >
                        <Link to="/menu">
                            <button className="btn-tertiary">Browse Our Menu</button>
                        </Link>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Menu;
