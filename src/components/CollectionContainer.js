import React, { useContext } from 'react';
import './CollectionContainer.css';
import CollectionMedia from './CollectionMedia';
import { MainContext } from '../MainContext';

function CollectionContainer({ name }) {
  const { allCollections } = useContext(MainContext);

  return (
    <div className="collectionContainer">
      <h2 className="collectionContainer__title">{name}</h2>
      <div className="collectionContainer__content">
        {allCollections.map((element) => (
          <CollectionMedia
            key={element.id}
            img={element.collectionImg}
            collectionName={element.collectionName}
            tracks={element.tracks}
            wholeElement={element}
          />
        ))}
      </div>
    </div>
  );
}

export default CollectionContainer;
