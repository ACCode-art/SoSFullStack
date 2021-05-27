import React, { useContext } from 'react';
import SmallMedia from './SmallMedia';
import './CollectionPage.css';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { MainContext } from '../MainContext';

function CollectionPage() {
  const { currentCollection, showCollection, showCollectionFunction } =
    useContext(MainContext);

  return (
    <div
      className="collectionPage"
      style={{
        display: showCollection ? 'block' : 'none',
      }}
    >
      <div className="collectionPage__nav">
        <ChevronLeftIcon onClick={showCollectionFunction} />
      </div>
      <div className="collectionPage__top">
        <img src={currentCollection.collectionImg} alt="" />
        <h1>{currentCollection.collectionName}</h1>
      </div>
      <div className="collectionPage__tracks">
        {currentCollection.tracks === undefined
          ? ''
          : currentCollection.tracks.map((element) => (
              <SmallMedia
                key={element.id}
                img={element.img}
                name={element.name}
                src={element.src}
              />
            ))}
      </div>
    </div>
  );
}

export default CollectionPage;
