import React, { useState } from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="navbar__header">
          <img src={logo} alt="logo" className="logo" />
          <button
            class={`fa-solid fa-bars nav-toggle ${isOpen ? 'nav-toggle-animate' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          ></button>
        </div>

        <ul className={`navbar__links ${isOpen ? 'show-links' : ''}`}>
          <NavLink to="/" onClick={() => setIsOpen(!isOpen)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(!isOpen)}>
            About
          </NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(!isOpen)}>
            Projects
          </NavLink>
          <NavLink to="/skills" onClick={() => setIsOpen(!isOpen)}>
            Skills
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(!isOpen)}>
            Contact
          </NavLink>
        </ul>

        <ul className="navbar__socials">
          <a
            href="https://github.com/anonsas"
            target="_blank"
            class="fa-brands fa-github"
            rel="noreferrer"
          ></a>
          <a
            href="https://www.linkedin.com/in/lukjanov1337/"
            target="_blank"
            class="fa-brands fa-linkedin"
            rel="noreferrer"
          ></a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
