import React from 'react';

// TODO: Import LINK from react router dom components
import { Link } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom'

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
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
           {/* TODO: Add the home route here */}
          </li>
          <li className="navbar-item">
            {/* TODO: Add the projects route here */}
            <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
              Projects
            </Link>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
