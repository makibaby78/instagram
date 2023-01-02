import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Meteor } from 'meteor/meteor';
import { useNavigate } from "react-router-dom";
import './login.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Login • Instagram';
    }, []);

    const submit = e => {
        e.preventDefault();
        Meteor.loginWithPassword(username, password);
        navigate("/");
    };

  return (
    <div className='login-wrapper lg-wrapper'>
        <div className='lgw-content border-standard'>
            <div className='logo-wrap'>
            <img src='https://firebasestorage.googleapis.com/v0/b/test-uploading-file.appspot.com/o/images%2Finstagram-logo.png?alt=media&token=328758d6-03d8-403d-b6d0-7e6152b51b21' width='100%'/>
            </div>
        <form onSubmit={submit} className="login-form">
            <div className='il-block'>
            <input
                type="text"
                placeholder="Username"
                name="username"
                required
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>

            <div className='il-block'>
            <input
                type="password"
                placeholder="Password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div className='il-block'>
            <button type="submit">Log In</button>
            </div>
        </form>
        </div>
        <div className='lgw-content border-standard'>
            <p className='t-center'>Don't have an account? <Link to="/register" className='link-style'>Sign up</Link></p>
        </div>
    </div>
  )
}

export default Login