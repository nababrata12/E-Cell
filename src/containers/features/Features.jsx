import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'WORKSHOP',
    text: 'Problem solving is a skill that comes handy in almost every aspect of life.But most of us find it painful to deal with a problem because we never focus on the most important process preceding problem solving "the way to approach a problem".In the workshop students will get familiar with the method of generating an idea as a solution to a practical problem and the art of presenting it in an impactful manner.',
  },
  {
    title: 'COMPETITION',
    text: 'ILLUMINATE 2022 focuses on igniting an infatuation towards entrepreneurship in the minds of students of batch 22. And there is not a better way to do this than applying the already learnt knowledge to use. The competition will see the students using the methods they learnt in the workshop in solving different kinds of problems and presenting it before the jury.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="events">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">DIGITAL ENTREPRENEURSHIP</h1>
      <p>BMC BUILDING & DESIGN THINKING</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
