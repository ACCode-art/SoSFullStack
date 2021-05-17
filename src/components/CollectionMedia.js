import React, { useContext } from 'react';
import './CollectionMedia.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import { MainContext } from '../MainContext';

function CollectionMedia({ img, tracks, wholeElement }) {
  const { currentCollection, setCurrentCollection, showCollectionFunction } =
    useContext(MainContext);

  const setCurrentCollectionFunction = () => {
    setCurrentCollection(wholeElement);
  };

  return (
    <div
      className="collectionMedia"
      onClick={() => {
        setCurrentCollectionFunction();
        showCollectionFunction();
      }}
    >
      <img src={img} alt="" />
      <PlayCircleFilledIcon />
    </div>
  );
}

export default CollectionMedia;
