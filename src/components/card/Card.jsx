import React from 'react';
import './card.css';

const Card = (props) => {
  return (
    <div className="nuvola__card">
      <div className="nuvola__card-icon">{props.children}</div>
      <div className="nuvola__card-title">{props.title}</div>
      <p className="nuvola__card-description">{props.description}</p>
    </div>
  );
};

export default Card;
