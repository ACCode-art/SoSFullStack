import React, { useContext } from 'react';
import './Header.css';
import logo from '../images/logo.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img className="header__logo" src={logo} alt="" />
        <p className="header__name">Sounds Of Serenity</p>
      </div>

      <div className="header__right">
        <ExitToAppIcon />
      </div>
    </div>
  );
}

export default Header;
