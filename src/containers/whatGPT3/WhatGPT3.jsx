import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is E-Cell ?" text="The Entrepreneurship Cell (E-Cell), NIT Agartala is a non-profit organization in NIT Agartala. E-CELL is the most sought out club for students, bolstering a platform for students to reflect upon entrepreneurial ideas and manifest their ideas into reality. We believe that entrepreneurship is the key to unlock India's latent inventive potential." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">2 Days Entrepreneurship Bootcamp</h1>
      <p>23 th & 24 th MAY, 2:30PM Onwards</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="DAY 1" text="1 Hour Virtual Speaker Session From TATA Motors And Announcement Of Competition" />
      <Feature title="DAY 2" text="Will Be Announce Soon..." />
    </div>
  </div>
);

export default WhatGPT3;
