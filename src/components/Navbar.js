import React, { useState } from 'react';
import "../styles/navbar.css";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpider } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FontAwesomeIcon icon={faSpider} className="navbar-logo" />
        <NavLink exact to="/" className="navbar-name" activeClassName="active">
          Swathi Velicheti
        </NavLink>
      </div>
      
      {/* Toggle Button for Smaller Screens */}
      <button className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </button>
      
      {/* Conditional class for showing/hiding navbar-right */}
      <div className={`navbar-right ${isNavbarOpen ? 'open' : ''}`}>
        <NavLink exact to="/" className="nav-item" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/projects" className="nav-item" activeClassName="active">
          Projects
        </NavLink>
        <NavLink to="/works" className="nav-item" activeClassName="active">
          Work-Experience
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
