import React from 'react';
import ai from '../../assets/brain.webp';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Better To Illuminate Than Merely To Shine</h1>
      <p>ILLUMINATE, a solution proposition competition exclusively for first year students. Best idea will win exciting prizes. This competition will provide the participants a real life problem solving experience. Participants can enter the competition in teams as well as individually.</p>

      <div className="gpt3__header-content__input">
        <a href="https://forms.gle/B5HhJ6BwZG5Z15E39" target="_blank" rel="noopener noreferrer">
          <button type="button">Register
          </button>
        </a>
      </div>

    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
