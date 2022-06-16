import React, { useState } from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/" onClick={() => setIsOpen(false)}>
        Home
      </NavLink>

      <div className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        <span className={`bar bar-1 ${isOpen && 'open'}`}></span>
        <span className={`bar bar-2 ${isOpen && 'open'}`}></span>
        <span className={`bar bar-3 ${isOpen && 'open'}`}></span>
      </div>

      {isOpen && (
        <ul className="mobile-menu">
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/skills" onClick={() => setIsOpen(false)}>
            Skills
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </ul>
      )}

      <ul className="navbar__links">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
