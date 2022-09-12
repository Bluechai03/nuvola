import React, { useState, useEffect } from 'react';
import './back-to-top.css';
import { RiArrowDropUpLine } from 'react-icons/ri';

const BackToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="nuvola__back-to-top">
      <div className="nuvola__back-to-top-content section__padding">
        {showTopBtn && (
          <RiArrowDropUpLine
            className="nuvola__back-to-top--icon"
            size={64}
            onClick={backToTop}
            color="#aaa"
          />
        )}
      </div>
    </div>
  );
};

export default BackToTop;
