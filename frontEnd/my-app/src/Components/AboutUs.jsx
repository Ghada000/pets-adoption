import React from 'react';
import qrCodeImage from '../QR/QR.png';
import aboutUsImage from '../QR/rabit.jpg';
import './AboutUs.css';

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
          Save-A-Life, Inc. is an all volunteer IRS 501 (c)(3) non-profit animal welfare organization created to prevent overpopulation of companion animals through low-cost spaying and neutering. For more than 5 decades Save-A-Life has assumed a leadership role in advocating low-cost spaying and neutering in order to help prevent unwanted, homeless dogs and cats. Responsible pet owners do not add to the pet overpopulation problem, they spay or neuter their pets. Save-A-Life also provides foster care, necessary medical treatment for foster animals, and a placement assistance program to help members of the public place their companion animals. All funding for SAL programs comes from donations and fund raising activities. Save-A-Life, Inc. is licensed by the Georgia Department of Agriculture. We have been saving animal lives since 1967!
            Save A Life Animal Welfare
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
