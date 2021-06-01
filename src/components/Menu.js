import React, { useContext } from 'react';
import './Menu.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useHistory } from 'react-router-dom';

import { MainContext } from '../MainContext';

function Menu() {
  const { setLoggedUser } = useContext(MainContext);

  const history = useHistory();

  const logoutUserFunction = async (e) => {
    e.preventDefault();

    setLoggedUser('');

    history.push('/');
  };

  return (
    <div className="menu">
      <div className="menu__container">
        <p>Manage Account</p>
        <AccountBoxIcon />
      </div>
      <div className="menu__container" onClick={logoutUserFunction}>
        <p>Sign out</p>
        <ExitToAppIcon />
      </div>
    </div>
  );
}

export default Menu;
