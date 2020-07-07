import React from 'react';
import './nav.css'
import{Link} from 'react-router-dom';

function Nav() {
    // function showLogin(){
    //     let logIn = document.querySelector('.login');
    //     logIn.style.display = 'block';
    // }
  return (
    <div className="nav">
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link className="navStyle" to="/">
                    <li>Home</li>
                </Link>
                <Link className="navStyle" to="/menu">
                    <li>Menu</li>
                </Link>

                <Link className="navStyle" to="/about">
                    <li>About</li>
                </Link>
                <Link className=" navStyle" to="/cart">
                    <li><img src="../Compound Path 1.svg" alt="cart"/></li>
                </Link>
                <Link className="btn-secondary navStyle" to="/#logIn">
                    <li>Login</li>
                </Link>
            </ul>
        </nav>
    {/* <LogIn /> */}
    </div>
  );
}

export default Nav;