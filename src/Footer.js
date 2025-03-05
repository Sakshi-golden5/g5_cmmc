import React from 'react';
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="sticky-footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/contact-us">Contact Us</Link>
        </div>

        <div className="social-media">
          <a href="https://www.linkedin.com/company/cmmc-west-summit/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        <p className="copyright">&copy; {currentYear} Golden Five. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
