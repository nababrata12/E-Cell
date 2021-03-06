import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <h3 className="logo">
            <img src="https://res.cloudinary.com/doipe9nqx/image/upload/v1650455624/Logo_White_1_q8vq73.png" alt="E-Cell Logo White" className="ecellWhite" />
            ILLUMINATE
          </h3>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#e-cell">What is E-Cell?</a></p>
          <p><a href="#events">Events</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#e-cell">What is E-Cell?</a></p>
            <p><a href="#events">Events</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
