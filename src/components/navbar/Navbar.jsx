import React, { useState } from 'react';
import { RiMenuLine, RiCloseLine, RiMenuFoldLine } from 'react-icons/ri';
import { facebook, youtube, instagram } from './imports';

import logo from '../../assets/logo.png';
import israel from '../../assets/israel.png';
import './navbar.css';

const Menu = () => (
  <ul>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#features">How It Works</a>
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
);

const Socials = () => (
  <>
    <div>
      <a href="https://www.facebook.com/novolaisrael" target="_blank" rel="noreferrer">
        <img className="nuvola__navbar-socials__img" src={facebook} alt="facebook" />
      </a>
    </div>
    <div>
      <a
        href="https://www.youtube.com/channel/UCX-em37_sfZwc6doHMPnMHA"
        target="_blank"
        rel="noreferrer"
      >
        <img className="nuvola__navbar-socials__img" src={youtube} alt="youtube" />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/nuvola_israel/" target="_blank" rel="noreferrer">
        <img className="nuvola__navbar-socials__img" src={instagram} alt="instagram" />
      </a>
    </div>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nuvola__navbar shadow-drop-bottom">
      <div className="nuvola__navbar-content section__padding">
        <div className="nuvola__navbar-logo">
          <img
            src={logo}
            alt="logo"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
          />
        </div>
        <div className="nuvola__navbar-links-container">
          <Menu />
        </div>
        <div className="nuvola__navbar-socials-container">
          <Socials />
        </div>
        <div className="nuvola__navbar-language">
          <img src={israel} alt="israel flag" />
        </div>

        <div className="nuvola__navbar-mobile-menu">
          {toggleMenu ? (
            <RiMenuFoldLine
              color="#2F3386"
              size={27}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
          ) : (
            <RiMenuLine
              color="#2F3386"
              size={27}
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          )}
          {toggleMenu && (
            <div className="nuvola__navbar-mobile-menu-container scale-up-hor-center ">
              <div className="nuvola__navbar-mobile-menu-container-top">
                <img src={israel} alt="israel flag" />
                <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
              </div>
              <div className="nuvola__navbar-mobile-menu-container-links">
                <ul>
                  <li>
                    <a href="#about" onClick={() => setToggleMenu(false)}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#features" onClick={() => setToggleMenu(false)}>
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#benefits" onClick={() => setToggleMenu(false)}>
                      Benefits
                    </a>
                  </li>
                  <li>
                    <a href="#testimonials" onClick={() => setToggleMenu(false)}>
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#contact" onClick={() => setToggleMenu(false)}>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
