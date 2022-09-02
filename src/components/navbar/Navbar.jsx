import React, { useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import { facebook, youtube, instagram } from './imports';
import israel from '../../assets/israel.png';
import './navbar.css';

const Menu = () => (
  <ul>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#benefits">Benefits</a>
    </li>
    <li>
      <a href="#features">How It Works</a>
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
      <img class="nuvola__navbar-socials__img" src={facebook} alt="facebook" />
    </div>
    <div>
      <img class="nuvola__navbar-socials__img" src={youtube} alt="youtube" />
    </div>
    <div>
      <img class="nuvola__navbar-socials__img" src={instagram} alt="instagram" />
    </div>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nuvola__navbar section__padding">
      <div className="nuvola__navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nuvola__navbar-links-container">
        <Menu />
      </div>
      <div className="nuvola__navbar-socials-container">
        <Socials />
      </div>
      <div className="nuvola__navbar-language"></div>
      <div className="nuvola__navbar-mobile-menu">
        {toggleMenu ? (
          <RiCloseLine color="#2F3386" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenuLine color="#2F3386" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="nuvola__navbar-mobile-menu-container scale-up-center">
            <div className="nuvola__navbar-mobile-menu-container__row">
              <img src={israel} alt="israel flag" />
              <RiCloseLine
                color="#2F3386"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            </div>
            <div className="nuvola__navbar-mobile-menu-container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
