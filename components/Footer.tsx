import React from 'react';
import ContainerContent from './ContentWrapper';

const Footer: React.FC = () => {
  return (
    <footer>
      <ContainerContent>
          <div className="footer-left">
            <p>&copy; 2025 Your Company. All rights reserved.</p>
          </div>
          <div className="footer-center">
            <ul className="footer-nav">
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          <div className="footer-right">
            <ul className="footer-social">
              <li><a href="https://twitter.com" target="_blank" className="footer-social-link">Twitter</a></li>
              <li><a href="https://facebook.com" target="_blank" className="footer-social-link">Facebook</a></li>
              <li><a href="https://linkedin.com" target="_blank" className="footer-social-link">LinkedIn</a></li>
            </ul>
          </div>
      </ContainerContent>
    </footer>
  );
};

export default Footer;
