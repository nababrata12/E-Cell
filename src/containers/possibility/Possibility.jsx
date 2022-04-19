import React from 'react';
import possibilityImage from '../../assets/ratantata.webp';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="speaker">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>OUR SPEAKERS & GUESTS</h4>
      <h1 className="gradient__text">TATA MOTORS <br /> Connecting Aspirations</h1>
      <p>Ratan Naval Tata (Ratan Ṭāṭā, born 28 December 1937) is an Indian industrialist, philanthropist, and a former chairman of Tata Sons. He was also chairman of Tata Group, from 1990 to 2012, and again, as interim chairman, from October 2016 through February 2017, and continues to head its charitable trusts.</p>
    </div>
  </div>
);

export default Possibility;
