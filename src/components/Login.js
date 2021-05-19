import React, { useState } from 'react';
import './Login.css';
import logo from '../images/logo.png';

function Login() {
  const API_URL = 'http://localhost:9999/user/register';
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const createUserFunction = (e) => {
    e.preventDefault();
    const newObject = { username: usernameValue, password: passwordValue };
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(newObject),
      headers: {
        'content-type': 'application/json',
      },
    });

    setUsernameValue('');
    setPasswordValue('');
  };

  const usernameInput = (event) => {
    setUsernameValue(event.target.value);
  };

  const passwordInput = (event) => {
    setPasswordValue(event.target.value);
  };

  return (
    <div className="login">
      <div className="loginFormContainer">
        <img className="loginLogo" src={logo} alt="" />
        <form action="">
          <input
            className="loginInput loginUsername"
            type="text"
            placeholder="username"
            onChange={usernameInput}
            value={usernameValue}
          />
          <input
            className="loginInput loginPassword"
            type="text"
            placeholder="password"
            onChange={passwordInput}
            value={passwordValue}
          />
          <button className="loginButton">Login</button>
        </form>
        <button className="registerButton" onClick={createUserFunction}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
