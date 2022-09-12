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

const Hero = () => {
  return (
    <div className="nuvola__hero" id="hero">
      <div className="nuvola__hero-content section__padding">
        <div className="nuvola__hero-content-col col--one">
          <h1 className="nuvola__hero-content__title">lorem ipsum dolor sit amet</h1>
          <p className="nuvola__hero-content__sub-title nuvola__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <button type="button" className="nuvola__hero-content__btn">
            Text
          </button>
        </div>
        <div className="nuvola__hero-content-col col--two">
          <div className="wrapper">
            <div className="nuvola__hero-blobs">
              <img
                src={circlePinkOutline}
                alt=""
                className="blob blob-circle-pink-outline circle"
              />
              <img src={blobPink} alt="" className="blob blob-blob-pink slide" />
              <img src={circlePurple} alt="" className="blob blob-circle-purple circle" />
              <img src={circlePink} alt="" className="blob blob-circle-pink circle" />
              <img src={blobPurple} alt="" className="blob blob-blob-purple slide" />
            </div>
            <img src={nuvolaStand} alt="nuvola sample" className="nuvola__hero-stand" />
          </div>
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
