import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <h3 className="logo">ILLUMINATE</h3>
        <p>Entrepreneurship Bootcamp, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>LinkedIn</p>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>CSE Building</p>
        <p>ecell@gamil.com</p>
        <p>nita.ac.in/ecell/</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 E-Cell. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
