import React, { useState } from 'react';
import "../styles/navbar.css"
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMask,faGear,faGears,faGreaterThanEqual, faGreaterThan, faCodeBranch, faCodeCompare, faSpider} from '@fortawesome/free-solid-svg-icons';
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
    <div className="navbar-left">
      <FontAwesomeIcon icon={faSpider} className="navbar-logo" />
      <span className="navbar-name">Swathi Velicheti</span>
    </div>
    <div className="navbar-right">
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
