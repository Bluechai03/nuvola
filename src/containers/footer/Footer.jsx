import React from 'react';
import './footer.css';
import logoWhite from '../../assets/logo-white.png';
import { facebook, youtube, instagram } from './imports';

const Socials = () => (
  <>
    <a
      className="nuvola__footer-socials"
      href="https://www.facebook.com/novolaisrael"
      target="_blank"
      rel="noreferrer"
    >
      <img className="nuvola__footer-socials__img" src={facebook} alt="facebook" />
    </a>
    <a
      className="nuvola__footer-socials"
      href="https://www.youtube.com/channel/UCX-em37_sfZwc6doHMPnMHA"
      target="_blank"
      rel="noreferrer"
    >
      <img className="nuvola__footer-socials__img" src={youtube} alt="youtube" />
    </a>
    <a
      className="nuvola__footer-socials"
      href="https://www.instagram.com/nuvola_israel/"
      target="_blank"
      rel="noreferrer"
    >
      <img className="nuvola__footer-socials__img" src={instagram} alt="instagram" />
    </a>
  </>
);

const Footer = () => {
  return (
    <div className="nuvola__footer">
      <div className="nuvola__footer-content section__padding">
        <div className="nuvola__footer-content-col">
          <img src={logoWhite} alt="" className="nuvola__footer-content__img" />
        </div>
        <div className="nuvola__footer-content-col">
          <ul className="nuvola__footer-content__nav">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#features">How it Works</a>
            </li>
            <li>
              <a href="#benefits">Benefits</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="nuvola__footer-content-col">
          <div className="nuvola__footer-content__row">
            <h4 className="nuvola__footer-content__heading">Phone Number</h4>
            <p className="nuvola__footer-content__text nuvola-text">
              +123456789
              <br />
              +123456789
            </p>
          </div>
          <div className="nuvola__footer-content__row">
            <h4 className="nuvola__footer-content__heading">Email</h4>
            <p className="nuvola__footer-content__text nuvola-text">mail@gmail.com</p>
          </div>
        </div>
        <div className="nuvola__footer-content-col">
          <div className="nuvola__footer-content__row">
            <h4 className="nuvola__footer-content__heading">Address</h4>
            <p className="nuvola__footer-content__text nuvola-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="nuvola__footer-content__row">
            <div className="nuvola__footer-socials-container">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
