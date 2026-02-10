import React from 'react';
import './Footer.css'; // CSS file for footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2026 SmartEvent. All rights reserved.</p>
      <p>Follow us on 
        <a href="#" className="social-link"> Twitter</a> | 
        <a href="#" className="social-link"> Facebook</a>
      </p>
    </footer>
  );
};

export default Footer;