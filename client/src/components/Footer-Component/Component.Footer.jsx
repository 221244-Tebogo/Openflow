import React from 'react';
import './navbar.css';

// Paths for the icons
import FooterLogo from '../assets/images/footer_logo.svg';
import InstagramIcon from '../assets/images/instagram-dark.svg';
import FacebookIcon from '../assets/images/facebook-dark.svg';

const Footer = () => {
  return (
    <div className='text-center text-lg-start text-white testerClassName'>
  

      {/* Footer Content */}
      <section className='footer'>
        {/* Row 1: Logo */}
        <div className='logo'>
          <img src={FooterLogo} alt='Footer Logo' width="135" />
        </div>

        {/* You can add more rows with the same structure here */}
        <div className='footer-column'>
          <div className='text-uppercase fw-bold mb-4'>
            <i className="fas fa-box me-3" />
            Products
          </div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Ford</li>
            <li>Volvo</li>
            <li>Range</li>
          </ul>
        </div>

        <div className='footer-column'>
          <div className='text-uppercase fw-bold mb-4'>
            <i className="fas fa-box me-3" />
            Get in touch:
          </div>
          Centurion, John Voster <br />
          Phone: 012 568 1900
        </div>

        {/* Social Icons */}
        <div className='social-link'>
          <a href='https://www.instagram.com/your-instagram-url' className='text-reset'>
            <img src={InstagramIcon} alt='Instagram' width="60" height="60" />
          </a>
          <a href='https://www.facebook.com/your-facebook-url' className='text-reset'>
            <img src={FacebookIcon} alt='Facebook' width="60" height="60" />
          </a>
        </div>
      </section>

      {/* Bottom Section */}
      <div className='footer text-center'>
      {/* Add content for the bottom section here */}
      </div>
    </div>
  );
};

export default Footer;
