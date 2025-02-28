import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import lOogo from "./assets/LOogo.png";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div>
      <Link to="/"> <img src={lOogo} alt="Logo" style={{ cursor: "pointer" }} /> </Link>
      </div>
      <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li 
          className="dropdown" 
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <Link to="/events">Events</Link>
          {/* {isDropdownOpen && (
            <div className="dropdown-box">
              <ul>
                <li><Link to="/hotel-info">Hotel Info</Link></li>
                <li><Link to="/pre-con-training">Pre-Conference Training</Link></li>
                <li><Link to="/speaker-comm">Speaker Committee</Link></li>
                <li><Link to="/cyberAB">The Cyber AB</Link></li>
              </ul>
            </div>
          )} */}

        </li>
        <li><Link to="/agenda">Agenda</Link></li>
        <li><Link to="/speakers">Speakers</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        {/* <li><Link to="/">Giving Back</Link></li>
        <li><Link to="/">Become a Sponsor</Link></li> */}
      </ul>

      <button className="register-btn">REGISTER</button>
    </nav>
  );
}

export default Navbar;
