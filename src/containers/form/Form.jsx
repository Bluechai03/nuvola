import React from 'react';
import './form.css';
import nuvolaStandRight from '../../assets/nuvola-stand-right.png';
import { circlePurple, circlePinkOutline, blobPink03, blobPurple03 } from './imports.js';

const FormInput = () => (
  <form action="#" className="nuvola__form-content__form">
    <input type="text" name="name" id="nuvola__form-id" placeholder="NAME" />
    <input type="tel" name="tel-no" id="nuvola__form-tel-no" placeholder="PHONE" />
    <input type="email" name="email" id="nuvola__form-email" placeholder="EMAIL" />
    <input type="submit" value="SIGN UP" className="nuvola__form-submit" />
  </form>
);

const Form = () => {
  return (
    <div className="nuvola__form">
      <div className="nuvola__form-content section__padding">
        <div className="nuvola__form-content-col col--one">
          <h1 className="nuola__form-content__title h1-title">Lorem Ipsum</h1>
          <h2 className="nuvola__form-content__sub-title h2-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h2>
          <FormInput />
        </div>
        <div className="nuvola__form-content-col col--two">
          <div className="wrapper">
            <div className="nuvola__form-blobs">
              <img
                src={blobPurple03}
                alt=""
                className="blob blob-blob-purple rotate-vert-center"
              />
              <img src={circlePurple} alt="" className="blob blob-circle-purple slide" />
              <img
                src={circlePinkOutline}
                alt=""
                className="blob blob-circle-pink-outline rotate-vert-center"
              />
              <img
                src={blobPink03}
                alt=""
                className="blob blob-blob-pink rotate-vert-center"
              />
              <img
                src={circlePurple}
                alt=""
                className="blob blob-circle-purple-01 slide"
              />
            </div>
            <img src={nuvolaStandRight} alt="" className="nuvola__form-stand" />
          </div>
        </div>
        <div className="nuvola__form-content-col col--three">
          <FormInput />
        </div>
      </div>
    </div>
  );
};

export default Form;
