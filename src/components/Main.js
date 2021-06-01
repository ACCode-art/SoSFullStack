import React, { useContext, useEffect } from 'react';

import CollectionContainer from './CollectionContainer';
import ContentContainer from './ContentContainer';
import CollectionPage from './CollectionPage';
import Focus from './Focus';
import Header from './Header';
import Player from './Player';
import Login from './Login';
import Menu from './Menu';
import './Main.css';

import { MainContext } from '../MainContext';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Main() {
  const { loggedUser, showMenu, retrieveMusicData } = useContext(MainContext);

  useEffect(() => {
    retrieveMusicData();
  }, []);

  console.log(loggedUser);
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          {loggedUser.auth ? (
            <Route path="/main" exact>
              <Header />
              {showMenu ? <Menu /> : ''}
              <Focus />

              <ContentContainer name="Recently Added" />
              <CollectionContainer name="Collections" />
            </Route>
          ) : (
            <Login />
          )}
        </Switch>
        <Player />
        <CollectionPage />
      </div>
    </Router>
  );
}

export default Main;
