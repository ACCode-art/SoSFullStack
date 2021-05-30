import React from 'react';
import './Focus.css';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

function Focus() {
  return (
    <div className="focus">
      <img
        src="https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
      />
      <div className="listenNow">
        <h1>Most Recent</h1>
        <PlayCircleFilledWhiteIcon />
      </div>
    </div>
  );
}

export default Focus;
