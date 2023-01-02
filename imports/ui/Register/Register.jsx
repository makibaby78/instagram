import React, { useState, useEffect } from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base';
import { Link, useNavigate  } from 'react-router-dom'

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
  
    useEffect(() => {
        document.title = 'Sign up • Instagram';
    }, []);

    const submit = e => {
        e.preventDefault();
        Meteor.call('userinfo.insert', { username:username, firstname:firstname.charAt(0).toUpperCase()+firstname.slice(1), lastname:lastname.charAt(0).toUpperCase()+lastname.slice(1), email: email, password: password, profileurl: 'https://picsum.photos/200', })
    
        Accounts.createUser({
          username: username,
          password: password,
        });
        navigate("/");
      };
  return (
    <div className='register-wrapper lg-wrapper'>
      <div className='lgw-content border-standard'>
        <div className='logo-wrap'>
            <img src='https://firebasestorage.googleapis.com/v0/b/test-uploading-file.appspot.com/o/images%2Finstagram-logo.png?alt=media&token=328758d6-03d8-403d-b6d0-7e6152b51b21' width='100%'/>
        </div>
        <h3 className='h-reg text-color-1'>Sign up to see photos and videos from your friends.</h3>
        <form onSubmit={submit} className="login-form">
          <div className='il-block'>
            <input
              type="text"
              placeholder="Firstname"
              name="firstname"
              required
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>

          <div className='il-block'>
            <input
              type="text"
              placeholder="Lastname"
              name="lastname"
              required
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <div className='il-block'>
            <input
              type="text"
              placeholder="Email"
              name="Emaile"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

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
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
      <div className='lgw-content border-standard'>
        <p className='t-center'>Have an account? <Link to="/login" className='link-style'>Log in</Link></p>
      </div>
    </div>
  )
}

export default Register