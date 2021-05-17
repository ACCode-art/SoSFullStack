import React, { useContext } from 'react';
import './ContentContainer.css';
import SmallMedia from './SmallMedia';
import { MainContext } from '../MainContext';

function ContentContainer({ name }) {
  const { allTracks } = useContext(MainContext);

  return (
    <div className="contentContainer">
      <h2 className="contentContainer__title">{name}</h2>
      <div className="contentContainer__content">
        {allTracks.map((element) => (
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

export default ContentContainer;
