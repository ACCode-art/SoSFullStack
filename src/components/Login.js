import React from 'react';
import './Login.css';
import logo from '../images/logo.png';

function Login() {
  return (
    <div className="login">
      <div className="loginFormContainer">
        <img className="loginLogo" src={logo} alt="" />
        <form action="">
          <input className="loginInput" type="text" placeholder="email" />
          <input className="loginInput" type="text" placeholder="password" />
          <button className="loginButton">Login</button>
        </form>
        <button className="registerButton">Create Account</button>
      </div>
    </div>
  );
}

export default Login;
