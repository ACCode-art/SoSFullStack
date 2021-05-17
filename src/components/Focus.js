import React, { useContext } from 'react';
import './Focus.css';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

function Focus() {
  return (
    <div className="focus">
      <img
        src="https://images.pexels.com/photos/258112/pexels-photo-258112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
