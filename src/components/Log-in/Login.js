import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Home from '../../pages/Home';

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const updateEmail = e => {
        setEmail(e.target.value);
    }
    const updatePassword = e => {
        setPassword(e.target.value);
    }
    function hideLogin(){
        let logIn = document.querySelector('.login');
        logIn.style.display = 'none';
    }
    let info = {
        email: email,
        password: password,
        login:false
    }
    const logIn = async (e) =>{
        e.preventDefault();
        const response = await fetch('https://surce-delight.herokuapp.com/api/token/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        });
        const data = await response.json();
        localStorage.setItem('logIn', JSON.stringify({
            access:data.access,
            login:true
        }))
        console.log(data);
      }
    return (
        <div>
                <div className="login" id="logIn">
                    <div className="close" onClick={hideLogin}>X</div>
                    <div className="login-box">
                        <h1>LOG IN</h1>
                        <form className="login-form">
                            <input type="email" placeholder="Email" className="form-input" onChange={updateEmail}/>
                            <input type="password" placeholder="password" className="form-input" onChange={updatePassword}/>
                            <button type="submit" onClick={(e) => logIn(e)} className="btn-tertiary" >LOG IN</button>
                        </form>
                    </div>
                </div>
        </div>
    );
}

export default LogIn;