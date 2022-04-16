import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'WORKSHOP',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'COMPETITION',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">DIGITAL ENTREPRENEURSHIP</h1>
      <p>PROBLEM-SOLVING & DESIGN THINKING</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
