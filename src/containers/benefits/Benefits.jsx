import React from 'react';
import './benefits.css';
import Card from '../../components/card/Card';
import { RiSettings5Line, RiRocketLine } from 'react-icons/ri';
import { BsCash } from 'react-icons/bs';

const Benefits = () => {
  return (
    <div className="nuvola__benefits">
      <div className="nuvola__benefits-content section__padding">
        <div className="nuvola__benefits-content__title h1-title">System Benefits</div>
        <p className="nuvola__benefits-content__description nuvola__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <div className="nuvola__benefits-content__grid">
          <Card
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          >
            <RiSettings5Line size="45px" color="#2F3386" />
          </Card>
          <Card
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          >
            <BsCash size="45px" color="#2F3386" />
          </Card>
          <Card
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          >
            <RiRocketLine size="45px" color="#2F3386" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
