import React, { useContext } from 'react';
import './SmallMedia.css';
import { MainContext } from '../MainContext';

function SmallMedia({ name, img, src }) {
  const { setCurrentTrack, showPlayerFunction } = useContext(MainContext);

  const currentTrackInfo = () => {
    setCurrentTrack({ name: name, img: img, src: src });
  };
  return (
    <div
      className="smallMedia"
      onClick={() => {
        showPlayerFunction();
        currentTrackInfo();
      }}
    >
      <img src={img} alt="" />
      <div className="smallMedia__info">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default SmallMedia;
