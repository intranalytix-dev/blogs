import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Intra Analytics. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy-policy">PrivacyPolicy</a>
          <a href="/terms">TermsOfService</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;