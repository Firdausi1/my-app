import React from 'react';
import './App.css';
import{Link} from 'react-router-dom';

function LogIn() {
    function hideLogin(){
        let logIn = document.querySelector('.login');
        logIn.style.display = 'none';
    }
    return (
        <div className="login" id="logIn">
            <span onClick={hideLogin}>X</span>
            <div className="login-box">
                <h1>LOG IN</h1>
                <form className="login-form">
                    <input type="email" placeholder="Email" className="form-input"/>
                    <input type="password" placeholder="password" className="form-input"/>
                    <button className="btn-tertiary">LOG IN</button>
                </form>
            </div>
        </div>
    );
}

export default LogIn;