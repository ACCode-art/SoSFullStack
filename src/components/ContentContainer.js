import React, { useContext, useEffect } from 'react';
import './ContentContainer.css';
import SmallMedia from './SmallMedia';
import { MainContext } from '../MainContext';

import Aos from 'aos';
import 'aos/dist/aos.css';

function ContentContainer({ name }) {
  const { allTracks } = useContext(MainContext);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="contentContainer" data-aos="slide-right">
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
