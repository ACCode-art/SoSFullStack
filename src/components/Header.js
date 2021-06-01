import React, { useContext } from 'react';
import './Header.css';
import logo from '../images/logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import { MainContext } from '../MainContext';

function Header() {
  const { showMenu, setShowMenu } = useContext(MainContext);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="header">
      <div className="header__left">
        <img className="header__logo" src={logo} alt="" />
        <p className="header__name">Sounds Of Serenity</p>
      </div>

      <div className="header__right">
        <MenuIcon onClick={showMenuHandler} />
      </div>
    </div>
  );
}

export default Header;
