import React from 'react';
import CollectionContainer from './CollectionContainer';
import ContentContainer from './ContentContainer';
import CollectionPage from './CollectionPage';
import Focus from './Focus';
import Header from './Header';
import Player from './Player';
import Login from './Login';
import './Main.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Main() {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/main" exact>
            <Header />
            <Focus />
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
