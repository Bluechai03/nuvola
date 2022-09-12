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
          <div className="wrapper">
            <div className="nuvola__about-blobs">
              <img
                src={blobPurple02}
                alt=""
                className="blob blob-blob-purple rotate-vert-center"
              />
              <img src={circlePurple} alt="" className="blob blob-circle-purple slide" />
              <img
                src={circlePinkOutline}
                alt=""
                className="blob blob-circle-pink-outline rotate-vert-center"
              />
              <img
                src={blobPink02}
                alt=""
                className="blob blob-blob-pink rotate-vert-center"
              />
              <img
                src={circlePurple}
                alt=""
                className="blob blob-circle-purple-01 slide"
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
