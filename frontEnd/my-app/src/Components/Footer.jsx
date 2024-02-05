// Footer.js

import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icon-container">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} className="icon" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} className="icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} className="icon" />
        </a>
      </div>
      <p className="description">
        Connect with us on social media for the latest updates and news.
      </p>
      <div className='p'>
      <p>© 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
