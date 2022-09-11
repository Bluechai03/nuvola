import React from 'react';
import './card-testimonials.css';

const CardTestimonials = ({ imgProfile, name, date, testimony }) => {
  return (
    <div className="nuvola__ct">
      <div className="nuvola__ct-content">
        <img className="nuvola__ct-content__img" src={imgProfile} alt="" />
        <div className="nuvola__ct-content__name">{name}</div>
        <div className="nuvola__ct-content__date">{date}</div>
        <div className="nuvola__ct-content__text nuvola__text">{testimony}</div>
      </div>
    </div>
  );
};

export default CardTestimonials;
