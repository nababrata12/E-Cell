import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Better To Illuminate Than Merely To Shine</h1>
      <p>ILLUMINATE, a solution proposition competition exclusively for first year students. Best idea will win exciting prize. This competition will provide the participants a real life problem solving experience. Participants can participate in teams as well as individually.</p>

      <div className="gpt3__header-content__input">
        <button type="button">Download Brochure</button>
      </div>

    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
