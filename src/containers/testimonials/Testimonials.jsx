import React from 'react';
import './testimonials.css';
import { cardTestimonials } from '../../components';

const Testimonials = () => {
  return (
    <div className="nuvola__testimonials">
      <div className="nuvola__testimonials-content section__padding">
        <div className="nuvola__testimonials-content__title h1-title">Testimonials</div>
      </div>
      <div className="nuvola__testimonials-slider">
        <cardTestimonials />
      </div>
    </div>
  );
};

export default Testimonials;
