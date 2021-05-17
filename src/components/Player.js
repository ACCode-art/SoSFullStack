import React, { useContext, useState } from 'react';
import './Player.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import StopIcon from '@material-ui/icons/Stop';

import { MainContext } from '../MainContext';

function Player() {
  const { currentTrack, showPlayer, showPlayerFunction } =
    useContext(MainContext);

  const audio = new Audio(currentTrack.src);

  const play = () => {
    audio.play();
  };

  const pause = () => {
    audio.pause();
  };

  return (
    <div
      className="player"
      style={{
        backgroundImage: `url(${currentTrack.img})`,
        display: showPlayer ? 'flex' : 'none',
      }}
    >
      <KeyboardArrowUpIcon
        className="ArrowDown"
        onClick={() => {
          showPlayerFunction();
          pause();
        }}
      />
      <p>{currentTrack.name}</p>
      <div className="controller">
        <PlayCircleFilledIcon onClick={play} />
        <StopIcon onClick={pause} />
      </div>
    </div>
  );
}

export default Player;
