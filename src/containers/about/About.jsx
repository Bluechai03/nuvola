import React from 'react';
import './about.css';
import aboutNuvola from '../../assets/about-nuvola.png';
import {
  circlePurple,
  circlePink,
  circlePinkOutline,
  blobPink02,
  blobPurple02,
} from './imports.js';

const About = () => {
  return (
    <div className="nuvola__about" id="about">
      <div className="nuvola__about-content section__padding">
        <div className="nuvola__about-content-col col--one">
          <div className="nuvola__wrapper">
            <div className="nuvola__about-content__circle-bg"></div>
            <div className="nuvola__particles">
              <img
                src={blobPink02}
                alt=""
                className="particle particle--blob"
                id="particle__about--blob-pink"
              />
              <img
                src={blobPurple02}
                alt=""
                className="particle particle--blob"
                id="particle__about--blob-purple"
              />
              <img
                src={circlePurple}
                alt=""
                className="particle particle--circle"
                id="particle__about--circle-purple"
              />
              <img
                src={circlePinkOutline}
                alt=""
                className="particle particle--circle"
                id="particle__about--circle-pink-outline"
              />

              <img
                src={circlePink}
                alt=""
                className="particle particle--circle"
                id="particle__about--circle-pink"
              />
            </div>
            <img src={aboutNuvola} alt="" className="nuvola__about-content__img" />
          </div>
        </div>
        <div className="nuvola__about-content-col col--two">
          <div className="nuvola__about-content__title h1-title">About Our System</div>
          <p className="nuvola__about-content__description nuvola__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
