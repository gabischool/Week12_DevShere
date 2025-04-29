import React from 'react';

// TODO: Import LINK from react router dom components
import { useLocation, Link } from 'react-router-dom'

import { Github } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Github size={24} />
          <span>DevSphere</span>
        </Link>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link
            to="/"
            
              className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
           {/* TODO: Add the home route here */}
          </li>
          <li className="navbar-item">
            <Link
            to="/Projects"
            className={`navbar-item ${location.pathname === '/Projects' ? 'active' : ''}`}
            >
              Projects
            </Link>
            

            {/* TODO: Add the projects route here */}
          </li>
          <li className="navbar-item">
            <Link
            to="/Contact"
            className={`navbar-item ${location.pathname === '/Contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
