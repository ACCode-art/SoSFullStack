import React, { useContext, useEffect } from 'react';
import './CollectionContainer.css';
import CollectionMedia from './CollectionMedia';
import { MainContext } from '../MainContext';
import Aos from 'aos';
import 'aos/dist/aos.css';

function CollectionContainer({ name }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const { allCollections } = useContext(MainContext);

  return (
    <div className="collectionContainer" data-aos="fade-in">
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
