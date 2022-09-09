import React from 'react';
import './features.css';
import { Feature } from '../../components';

const Features = () => {
  return (
    <div className="nuvola__features">
      <div className="nuvola__features-content section__padding">
        <div className="nuvola__features-content__title h1-title">How it works</div>
        <div className="nuvola__features-content__grid">
          <Feature
            number="01"
            title="lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          />
          <Feature
            number="02"
            title="lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          />
          <Feature
            number="03"
            title="lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          />
          <Feature
            number="04"
            title="lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
