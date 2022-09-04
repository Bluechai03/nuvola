import React from 'react';
import nuvolaStand from '../../assets/nuvola-stand.png';
import vector1 from '../../assets/hero-blobs/Vector-1.svg';
import './hero.css';

const Hero = () => {
  return (
    <div className="nuvola__hero" id="hero">
      <div className="nuvola__hero-content section__padding">
        <div className="nuvola__hero-content-col col--one">
          <h1 className="nuvola__hero-content__title">lorem ipsum dolor sit amet</h1>
          <p className="nuvola__hero-content__sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <button type="button" className="nuvola__hero-content__btn">
            Text
          </button>
        </div>
        <div className="nuvola__hero-content-col col--two">
          <img src={nuvolaStand} alt="nuvola sample" />
          <img src={vector1} alt="" className="vector" />
        </div>
        <div className="nuvola__hero-content-col col--three">
          <p className="nuvola__hero-content__sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <button type="button" className="nuvola__hero-content__btn">
            Text
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
