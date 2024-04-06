import React, { useState } from 'react';
import "../styles/navbar.css"
import { NavLink } from 'react-router-dom';
function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      
      setSearchTerm('');
    }
  };
  
  return (
    <nav className="navbar">
      <NavLink exact to="/" className="nav-item" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/projects" className="nav-item" activeClassName="active">
        Projects
      </NavLink>
      <NavLink to="/work-experience" className="nav-item" activeClassName="active">
        Work Experience
      </NavLink>
    </nav>
  );
}

export default Navbar;
