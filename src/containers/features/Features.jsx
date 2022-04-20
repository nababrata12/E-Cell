import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'WORKSHOP',
    text: "The fact that Start-up is a new found fervor in the country is a fact invisible to none. In the day and age where the word entrepreneurship is turning billions of heads, we at E-Cell NITA believe it's imperative to have a basic knowledge on entrepreneurship, problem solving and how to pitch your ideas. Who knows the next million dollar funding might be yours? The day will end with reveal of a problem statement that creates base for the hackathon on day 2.",
  },
  {
    title: 'COMPETITION',
    text: "This is a 24-hour hackathon exclusively for our Freshers with an aim to encourage creative problem solving and recognize the essence of time management. Contrary to popular belief you don't need any skills to participate in a hackathon. One of the goals of a Hackathon is to teach you the required skills that you need to build a hack during the event itself. The participants can apply the techniques they learnt in workshop and use the same in presenting a solution to an already provided problem statement before the jury.",
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
