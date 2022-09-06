import React from 'react';
import './feature.css';

const Feature = ({ number, title, description }) => {
  return (
    <div className="nuvola__feature">
      <div className="nuvola__feature-col">
        <h1 className="nuvola__feature-title--number h1-title">{number}</h1>
      </div>
      <div className="nuvola__feature-col">
        <h2 className="nuvola__feature-title h2-title">{title}</h2>
        <p className="nuvola__feature-text nuvola-text">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
