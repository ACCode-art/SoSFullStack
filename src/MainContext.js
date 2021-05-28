import React, { useState, useEffect, createContext } from 'react';

export const MainContext = createContext();

export const MainProvider = (props) => {
  const API_CONNECTION = 'http://localhost:5050/media';
  const [loggedUser, setLoggedUser] = useState({
    userInformation: { username: '' },
  });
  const [allTracks, setAllTracks] = useState([]);
  const [allCollections, setAllCollections] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [showPlayer, setShowPlayer] = useState(false);
  const [showCollection, setShowCollection] = useState(false);
  const [currentCollection, setCurrentCollection] = useState({});

  const showPlayerFunction = () => {
    setShowPlayer(!showPlayer);
  };

  const showCollectionFunction = () => {
    setShowCollection(!showCollection);
  };

  const getInfo = async () => {
    const response = await fetch(`${API_CONNECTION}`);
    const data = await response.json();
    setAllTracks(data);
  };

  const getInfoTwo = async () => {
    const response = await fetch(`${API_CONNECTION}/collections`);
    const data = await response.json();
    setAllCollections(data);
  };

  useEffect(() => {
    getInfo();
    getInfoTwo();
  }, []);

  return (
    <MainContext.Provider
      value={{
        allTracks,
        allCollections,
        currentTrack,
        setCurrentTrack,
        showPlayer,
        setShowPlayer,
        showPlayerFunction,
        currentCollection,
        setCurrentCollection,
        showCollection,
        setShowCollection,
        showCollectionFunction,
        loggedUser,
        setLoggedUser,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};
