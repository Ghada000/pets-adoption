import React from 'react';
import qrCodeImage from '../QR/QR.png';
import aboutUsImage from '../QR/rabit.jpg'
import './AboutUs.css'
const AboutUs = () => {
  

  
  return (
    <div className="about-us-container">
      <div className="text-container">
        <h2>Welcome to Our Website!</h2>
        <p>
          Scan the QR code on the right to visit our Facebook page and stay updated with the latest news, products, and offers.
        </p>
      </div>
      <div className="qr-code-container">
        <img src={qrCodeImage} alt="QR Code" />
      </div>

      {/* Additional section */}
      <div className="additional-section">
        <div className="about-us-text">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum felis in massa volutpat, a aliquet odio commodo. 
            Sed tincidunt elit nec risus feugiat, eu fermentum justo cursus.
          </p>
        </div>
        <div className="about-us-image">
          <img src={aboutUsImage} alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

