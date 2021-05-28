import React, { useContext } from 'react';
import CollectionContainer from './CollectionContainer';
import ContentContainer from './ContentContainer';
import CollectionPage from './CollectionPage';
import Focus from './Focus';
import Header from './Header';
import Player from './Player';
import Login from './Login';
import './Main.css';

import { MainContext } from '../MainContext';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Main() {
  const { loggedUser } = useContext(MainContext);

  console.log(loggedUser);
  return (
    <Router>
      <div className="main">
        <audio src=""></audio>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/main" exact>
            <Header />
            <Focus />
            <div className="welcomeMessage">
              <p>Welcome {loggedUser.userInformation.username}</p>
            </div>
            <ContentContainer name="Recently Added" />
            <CollectionContainer name="Collections" />
          </Route>
        </Switch>
        <Player />
        <CollectionPage />
      </div>
    </Router>
  );
}

export default Main;
