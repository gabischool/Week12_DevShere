import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// TODO: Import react router dom components
import { Github, ImportIcon } from 'lucide-react';
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

           {/* TODO: Add the home route here */}
          </li>
          <li className="navbar-item">
            <Link to="/" className="nav-link">Home</Link> 
            <Link to="/projects" className="nav-link">Projects</Link> 


            {/* TODO: Add the projects route here */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;