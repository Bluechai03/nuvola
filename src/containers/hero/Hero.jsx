import React from 'react';
import nuvolaStand from '../../assets/nuvola-stand.png';
import {
  circlePink,
  circlePurple,
  circlePinkOutline,
  blobPink,
  blobPurple,
} from './imports.js';
import './hero.css';

const Details = () => (
  <div className="nuvola__hero-content__details">
    <p className="nuvola__hero-content__sub-title nuvola__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </p>
    <button type="button" className="nuvola__hero-content__btn">
      Text
    </button>
  </div>
);

const Hero = () => {
  return (
    <div className="nuvola__hero" id="hero">
      <div className="nuvola__hero-content section__padding">
        <div className="nuvola__hero-content-col col--one">
          <h1 className="nuvola__hero-content__title">lorem ipsum dolor sit amet</h1>
          <Details />
        </div>
        <div className="nuvola__hero-content-col col--two">
          <div className="nuvola__wrapper">
            <div className="nuvola__particles">
              <img
                src={circlePinkOutline}
                alt=""
                className="particle particle--circle"
                id="particle__hero--circle-pink-outline"
              />
              <img
                src={blobPink}
                alt=""
                className="particle particle--blob"
                id="particle__hero--blob-pink"
              />
              <img
                src={circlePurple}
                alt=""
                className="particle particle--circle"
                id="particle__hero--circle-purple"
              />
              <img
                src={circlePink}
                alt=""
                className="particle particle--circle"
                id="particle__hero--circle-pink"
              />
              <img
                src={blobPurple}
                alt=""
                className="particle particle--blob"
                id="particle__hero--blob-purple"
              />
            </div>
            <img src={nuvolaStand} alt="nuvola sample" className="nuvola__hero-stand" />
          </div>
        </div>
        <div className="nuvola__hero-content-col col--three">
          <Details />
        </div>
      </div>
    </div>
  );
};

export default Hero;
