import React from 'react';
import CollectionContainer from './CollectionContainer';
import ContentContainer from './ContentContainer';
import CollectionPage from './CollectionPage';
import Focus from './Focus';
import Header from './Header';
import Player from './Player';
import './Main.css';

function Main() {
  return (
    <div className="main">
      <Header />
      <Focus />
      <ContentContainer name="Recently Added" />
      <CollectionContainer name="Collections" />
      <Player />
      <CollectionPage />
    </div>
  );
}

export default Main;
