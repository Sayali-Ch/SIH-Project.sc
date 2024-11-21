import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  // Function to handle scroll to specific sections
  const handleScroll = (section) => {
    if (location.pathname === '/') {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img id="img1" src="images/IndiaPostNew.png" alt="India Post Logo" />
          <Link id="name1" to="/">SwachhVision</Link>
        </div>
        <div className="navbar-links">
          {/* Home Link: Scroll to the hero section */}
          <Link to="/" className="navbar-item" onClick={() => handleScroll('home')}>
            Home
          </Link>
          <Link to="/" className="navbar-item" onClick={() => handleScroll('features')}>
            About
          </Link>
          <Link to="/" className="navbar-item" onClick={() => handleScroll('solution')}>
            Our Solution
          </Link>
          <Link to="/" className="navbar-item" onClick={() => handleScroll('contact')}>
            Contact
          </Link>

          {/* Login Button: Direct to divisional officer login */}
          <Link to="/login/divisional-officer" className="navbar-login-btn">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
