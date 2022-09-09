import React from 'react';
import './contact.css';
import nuvolaStand from '../../assets/nuvola-stand.png';
import { circlePink, circlePurpleOutline } from './imports';
const Contact = () => {
  return (
    <div className="nuvola__contact" id="contact">
      <div className="nuvola__contact-content section__padding">
        <div className="nuvola__contact-content-col col--one">
          <div className="nuvola__contact-bg"></div>
          <div className="wrapper">
            <div className="nuvola__contact-blobs">
              <img
                src={circlePink}
                alt=""
                className="blob blob-circle-pink rotate-vert-center"
              />
              <img
                src={circlePurpleOutline}
                alt=""
                className="blob blob-circle-purple-outline slide"
              />
              <img
                src={circlePurpleOutline}
                alt=""
                className="blob blob-circle-purple-outline rotate-vert-center"
              />
            </div>
            <img src={nuvolaStand} alt="" className="nuvola__contact-stand" />
          </div>
        </div>
        <div className="nuvola__contact-content-col col--two">
          <div className="nuvola__contact-content__title h1-title">Contact Us</div>
          <div className="nuvola__contact-content__row">
            <h2 className="nuvola__contact-content__sub-title h2-title">Phone Number</h2>
            <p className="nuvola__contact-content__text nuvola-text">+123456789</p>
            <p className="nuvola__contact-content__text nuvola-text">+123456789</p>
          </div>
          <div className="nuvola__contact-content__row">
            <h2 className="nuvola__contact-content__sub-title h2-title">E-Mail</h2>
            <p className="nuvola__contact-content__text nuvola-text">mail@gmail.com</p>
          </div>
          <div className="nuvola__contact-content__row">
            <h2 className="nuvola__contact-content__sub-title h2-title">Address</h2>
            <p className="nuvola__contact-content__text nuvola-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
