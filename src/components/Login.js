import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import logo from '../images/logo.png';
import axios from 'axios';

function Login() {
  const API_URL_REGISTER = 'http://localhost:9999/user/register';
  const API_URL_LOGIN = 'http://localhost:9999/user/login';
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [createdMessage, setcreatedMessage] = useState('');
  const history = useHistory();

  const createUserFunction = async (e) => {
    e.preventDefault();

    try {
      const user = { username: usernameValue, password: passwordValue };

      const res = await axios.post(API_URL_REGISTER, user);

      setUsernameValue('');
      setPasswordValue('');

      setcreatedMessage('Account Created');
    } catch (error) {
      console.log('Error');
      setUsernameValue('');
      setPasswordValue('');
    }
  };

  const loginUserFunction = async (e) => {
    e.preventDefault();

    try {
      const user = { username: usernameValue, password: passwordValue };

      const res = await axios.post(API_URL_LOGIN, user);

      history.push('/main');
    } catch (error) {
      console.log('Error');
    }
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
          <button className="loginButton" onClick={loginUserFunction}>
            Login
          </button>
        </form>
        <button className="registerButton" onClick={createUserFunction}>
          Create Account
        </button>
        <p>{createdMessage}</p>
      </div>
    </div>
  );
}

export default Login;
