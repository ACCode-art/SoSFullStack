import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import logo from '../images/logo.png';
import axios from 'axios';

import { MainContext } from '../MainContext';

function Login() {
  const API_URL_REGISTER = 'http://localhost:5050/user/register';
  const API_URL_LOGIN = 'http://localhost:5050/user/login';
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [createdMessage, setCreatedMessage] = useState('');
  const history = useHistory();

  const { setLoggedUser } = useContext(MainContext);

  const createUserFunction = async (e) => {
    e.preventDefault();

    try {
      const user = { username: usernameValue, password: passwordValue };

      await axios
        .post(API_URL_REGISTER, user)
        .then((response) => setLoggedUser(response));

      setUsernameValue('');
      setPasswordValue('');

      setCreatedMessage('Account Created');
    } catch (error) {
      setCreatedMessage('Username and password must be 6 or more characters');

      setUsernameValue('');
      setPasswordValue('');
    }
  };

  const loginUserFunction = async (e) => {
    e.preventDefault();

    try {
      const user = { username: usernameValue, password: passwordValue };

      await axios
        .post(API_URL_LOGIN, user)
        .then((response) => setLoggedUser(response.data));

      history.push('/main');
    } catch (error) {
      setCreatedMessage('Username or password Incorrect!');
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
            type="password"
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
        <p className="createdMessage">{createdMessage}</p>
      </div>
    </div>
  );
}

export default Login;
