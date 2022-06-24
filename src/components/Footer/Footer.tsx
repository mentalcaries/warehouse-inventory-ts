import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        &copy;{new Date().getFullYear()} Devin Jaggernauth
      </p>
    </footer>
  );
}

export default Footer;
