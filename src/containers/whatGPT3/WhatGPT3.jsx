import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="e-cell">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="About E-Cell :" text="The Entrepreneurship Cell (E-Cell), NIT Agartala is a non-profit organization in NIT Agartala. E-CELL is the most sought out club for students, bolstering a platform for students to reflect upon entrepreneurial ideas and manifest their ideas into reality. We believe that entrepreneurship is the key to unlock India's latent inventive potential." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">2 Days Entrepreneurship Bootcamp</h1>
      <p>23rd & 24th APRIL, 2:30PM Onwards</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="DAY 1" text="1 Hour Speaker Session About Entrepreneurship & BMC" />
      <Feature title="DAY 2" text="Announcement Of Results & Prize Distribution" />
    </div>
  </div>
);

export default WhatGPT3;
